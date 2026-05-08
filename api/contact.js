const MIN_SUBMIT_TIME_MS = 1500;

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(body));
}

async function sendResendEmail(apiKey, payload) {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

function buildClientConfirmationHtml({ name, service, message, replyPhone, replyEmail }) {
  const greetingName = name && name !== 'No indicado' ? `Hola ${name},` : 'Hola,';
  return `<!doctype html>
<html lang="es">
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Arial,sans-serif;color:#122117;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.08);">
        <tr><td style="background:#1a3a2a;color:#f5f0e8;padding:22px 28px;">
          <h1 style="margin:0;font-family:'Playfair Display',serif;font-size:22px;letter-spacing:0.02em;">CB Forestal</h1>
          <p style="margin:6px 0 0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#cdb87a;">Hemos recibido tu consulta</p>
        </td></tr>
        <tr><td style="padding:26px 28px 6px;line-height:1.6;font-size:15px;">
          <p style="margin:0 0 14px;">${greetingName}</p>
          <p style="margin:0 0 14px;">Gracias por contactar con <strong>CB Forestal</strong>. Hemos recibido tu solicitud y te responderemos en menos de <strong>24 horas laborables</strong>.</p>
          <p style="margin:0 0 14px;">Si tu consulta es <strong>urgente</strong> (árbol caído, rama rota, riesgo inminente), atendemos urgencias <strong>24h</strong>: llámanos al <a href="tel:${replyPhone.replace(/\s+/g, '')}" style="color:#1a3a2a;font-weight:700;">${replyPhone}</a>.</p>
        </td></tr>
        <tr><td style="padding:0 28px 18px;">
          <div style="background:#f5f0e8;border-left:4px solid #cdb87a;padding:14px 16px;font-size:14px;line-height:1.6;">
            <p style="margin:0 0 6px;"><strong>Servicio:</strong> ${service || 'No especificado'}</p>
            <p style="margin:0 0 6px;"><strong>Tu mensaje:</strong></p>
            <p style="margin:0;white-space:pre-wrap;color:#3a4a3f;">${message.replace(/[<>]/g, '')}</p>
          </div>
        </td></tr>
        <tr><td style="padding:6px 28px 26px;font-size:14px;line-height:1.6;">
          <p style="margin:0 0 10px;">Mientras tanto, puedes ver trabajos reales que hemos ejecutado en <a href="https://www.cbforestal.es/trabajos" style="color:#1a3a2a;font-weight:600;">cbforestal.es/trabajos</a>.</p>
          <p style="margin:0 0 4px;color:#3a4a3f;">Un saludo,</p>
          <p style="margin:0;font-weight:700;">El equipo de CB Forestal</p>
          <p style="margin:6px 0 0;font-size:13px;color:#3a4a3f;">${replyEmail} · ${replyPhone}</p>
        </td></tr>
        <tr><td style="background:#122117;color:rgba(245,240,232,0.6);padding:14px 28px;font-size:11px;letter-spacing:0.04em;">
          Recibes este correo porque has enviado una consulta a través de cbforestal.es. No respondas a esta dirección automática; usa los datos de contacto indicados arriba.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { error: 'method_not_allowed' });
  }

  const {
    name = '',
    contact = '',
    service = '',
    message = '',
    consent = false,
    company = '',
    sourcePath = '',
    startedAt,
  } = req.body || {};

  if (company) {
    return json(res, 400, { error: 'spam_detected' });
  }

  if (!consent || !String(contact).trim() || !String(message).trim()) {
    return json(res, 400, { error: 'invalid_payload' });
  }

  if (typeof startedAt !== 'number' || Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
    return json(res, 400, { error: 'invalid_submission_timing' });
  }

  if (String(name).length > 120 || String(contact).length > 160 || String(service).length > 160 || String(message).length > 4000) {
    return json(res, 400, { error: 'payload_too_large' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@cbforestal.es';
  const replyPhone = process.env.CONTACT_PUBLIC_PHONE || '+34 936 94 21 74';
  const replyEmail = process.env.CONTACT_PUBLIC_EMAIL || 'info@cbforestal.es';

  if (!resendApiKey || !fromEmail) {
    return json(res, 500, { error: 'missing_email_configuration' });
  }

  const contactValue = String(contact).trim();
  const isContactEmail = isEmail(contactValue);
  const replyTo = isContactEmail ? contactValue : undefined;
  const safeName = String(name).trim() || 'No indicado';
  const safeService = String(service).trim() || 'No especificado';
  const safeSourcePath = String(sourcePath).trim() || '/contacto';
  const safeMessage = String(message).trim();

  const teamPayload = {
    from: fromEmail,
    to: [toEmail],
    subject: `Nueva consulta web - ${safeService}`,
    reply_to: replyTo,
    text: [
      'Nueva consulta enviada desde la web de CB Forestal.',
      '',
      `Nombre: ${safeName}`,
      `Contacto: ${contactValue}`,
      `Servicio: ${safeService}`,
      `Ruta: ${safeSourcePath}`,
      '',
      'Mensaje:',
      safeMessage,
    ].join('\n'),
  };

  try {
    const response = await sendResendEmail(resendApiKey, teamPayload);

    if (!response.ok) {
      const errorText = await response.text();
      return json(res, 502, { error: 'email_provider_error', detail: errorText });
    }

    if (isContactEmail) {
      const clientPayload = {
        from: fromEmail,
        to: [contactValue],
        subject: 'Hemos recibido tu consulta — CB Forestal',
        reply_to: replyEmail,
        html: buildClientConfirmationHtml({
          name: safeName,
          service: safeService,
          message: safeMessage,
          replyPhone,
          replyEmail,
        }),
      };

      try {
        await sendResendEmail(resendApiKey, clientPayload);
      } catch {
        // No bloqueamos la respuesta al usuario si la auto-respuesta falla.
      }
    }

    return json(res, 200, { ok: true });
  } catch {
    return json(res, 500, { error: 'unexpected_server_error' });
  }
}
