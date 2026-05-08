const MIN_SUBMIT_TIME_MS = 1500;

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(body));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

function buildClientConfirmationHtml({ name, service, message, replyPhone, replyEmail, lang }) {
  const isCatalan = lang === 'ca';
  const safeName = escapeHtml(name);
  const safeService = escapeHtml(service || (isCatalan ? 'No especificat' : 'No especificado'));
  const safeMessage = escapeHtml(message);
  const safeReplyPhone = escapeHtml(replyPhone);
  const safeReplyPhoneHref = replyPhone.replace(/\s+/g, '');
  const safeReplyEmail = escapeHtml(replyEmail);
  const greetingName = name && name !== 'No indicado' && name !== 'No indicat'
    ? `${isCatalan ? 'Hola' : 'Hola'} ${safeName},`
    : `${isCatalan ? 'Hola,' : 'Hola,'}`;
  const copy = isCatalan
    ? {
        lang: 'ca',
        heading: 'Hem rebut la teva consulta',
        intro: 'Gràcies per contactar amb <strong>CB Forestal</strong>. Hem rebut la teva sol·licitud i et respondrem en menys de <strong>24 hores laborables</strong>.',
        urgent: 'Si la teva consulta és <strong>urgent</strong> (arbre caigut, branca trencada, risc imminent), atenem urgències <strong>24h</strong>: truca\'ns al',
        service: 'Servei:',
        message: 'El teu missatge:',
        meanwhile: 'Mentrestant, pots veure treballs reals que hem executat a',
        closing: 'Una salutació,',
        team: 'L’equip de CB Forestal',
        footer: 'Reps aquest correu perquè has enviat una consulta a través de cbforestal.es. No responguis a aquesta adreça automàtica; utilitza les dades de contacte indicades més amunt.',
      }
    : {
        lang: 'es',
        heading: 'Hemos recibido tu consulta',
        intro: 'Gracias por contactar con <strong>CB Forestal</strong>. Hemos recibido tu solicitud y te responderemos en menos de <strong>24 horas laborables</strong>.',
        urgent: 'Si tu consulta es <strong>urgente</strong> (árbol caído, rama rota, riesgo inminente), atendemos urgencias <strong>24h</strong>: llámanos al',
        service: 'Servicio:',
        message: 'Tu mensaje:',
        meanwhile: 'Mientras tanto, puedes ver trabajos reales que hemos ejecutado en',
        closing: 'Un saludo,',
        team: 'El equipo de CB Forestal',
        footer: 'Recibes este correo porque has enviado una consulta a través de cbforestal.es. No respondas a esta dirección automática; usa los datos de contacto indicados arriba.',
      };

  return `<!doctype html>
<html lang="${copy.lang}">
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Arial,sans-serif;color:#122117;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.08);">
        <tr><td style="background:#1a3a2a;color:#f5f0e8;padding:22px 28px;">
          <h1 style="margin:0;font-family:'Playfair Display',serif;font-size:22px;letter-spacing:0.02em;">CB Forestal</h1>
          <p style="margin:6px 0 0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#cdb87a;">${copy.heading}</p>
        </td></tr>
        <tr><td style="padding:26px 28px 6px;line-height:1.6;font-size:15px;">
          <p style="margin:0 0 14px;">${greetingName}</p>
          <p style="margin:0 0 14px;">${copy.intro}</p>
          <p style="margin:0 0 14px;">${copy.urgent} <a href="tel:${safeReplyPhoneHref}" style="color:#1a3a2a;font-weight:700;">${safeReplyPhone}</a>.</p>
        </td></tr>
        <tr><td style="padding:0 28px 18px;">
          <div style="background:#f5f0e8;border-left:4px solid #cdb87a;padding:14px 16px;font-size:14px;line-height:1.6;">
            <p style="margin:0 0 6px;"><strong>${copy.service}</strong> ${safeService}</p>
            <p style="margin:0 0 6px;"><strong>${copy.message}</strong></p>
            <p style="margin:0;white-space:pre-wrap;color:#3a4a3f;">${safeMessage}</p>
          </div>
        </td></tr>
        <tr><td style="padding:6px 28px 26px;font-size:14px;line-height:1.6;">
          <p style="margin:0 0 10px;">${copy.meanwhile} <a href="https://www.cbforestal.es/trabajos" style="color:#1a3a2a;font-weight:600;">cbforestal.es/trabajos</a>.</p>
          <p style="margin:0 0 4px;color:#3a4a3f;">${copy.closing}</p>
          <p style="margin:0;font-weight:700;">${copy.team}</p>
          <p style="margin:6px 0 0;font-size:13px;color:#3a4a3f;">${safeReplyEmail} · ${safeReplyPhone}</p>
        </td></tr>
        <tr><td style="background:#122117;color:rgba(245,240,232,0.6);padding:14px 28px;font-size:11px;letter-spacing:0.04em;">
          ${copy.footer}
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
    lang = 'es',
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
        subject: lang === 'ca' ? 'Hem rebut la teva consulta — CB Forestal' : 'Hemos recibido tu consulta — CB Forestal',
        reply_to: replyEmail,
        html: buildClientConfirmationHtml({
          name: safeName,
          service: safeService,
          message: safeMessage,
          replyPhone,
          replyEmail,
          lang,
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
