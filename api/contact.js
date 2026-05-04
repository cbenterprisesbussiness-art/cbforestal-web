const MIN_SUBMIT_TIME_MS = 1500;

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(body));
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

  if (!resendApiKey || !fromEmail) {
    return json(res, 500, { error: 'missing_email_configuration' });
  }

  const contactValue = String(contact).trim();
  const replyTo = isEmail(contactValue) ? contactValue : undefined;
  const safeName = String(name).trim() || 'No indicado';
  const safeService = String(service).trim() || 'No especificado';
  const safeSourcePath = String(sourcePath).trim() || '/contacto';
  const safeMessage = String(message).trim();

  const emailPayload = {
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
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#173628">
        <h2>Nueva consulta web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Contacto:</strong> ${escapeHtml(contactValue)}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(safeService)}</p>
        <p><strong>Ruta:</strong> ${escapeHtml(safeSourcePath)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(safeMessage).replace(/\n/g, '<br />')}</p>
      </div>
    `,
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return json(res, 502, { error: 'email_provider_error', detail: errorText });
    }

    return json(res, 200, { ok: true });
  } catch {
    return json(res, 500, { error: 'unexpected_server_error' });
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
