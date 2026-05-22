import { Link } from 'react-router-dom';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../shared/LanguageContext';
import { trackLead } from '../shared/tracking';

const emptyForm = {
  name: '',
  contact: '',
  service: '',
  message: '',
  consent: false,
  company: '',
};

export default function ContactForm({ compact = false }) {
  const { t, lang } = useLanguage();
  const location = useLocation();
  const formId = useId();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successTimeoutRef = useRef(null);
  const startedAtRef = useRef(Date.now());

  const labels = useMemo(
    () => ({
      name: {
        ca: 'Nom',
        es: 'Nombre',
      },
      contact: {
        ca: 'Telèfon o correu',
        es: 'Teléfono o correo',
      },
      service: {
        ca: 'Servei',
        es: 'Servicio',
      },
      message: {
        ca: 'Missatge',
        es: 'Mensaje',
      },
      submit: {
        ca: 'Enviar consulta',
        es: 'Enviar consulta',
      },
      sending: {
        ca: 'Enviant...',
        es: 'Enviando...',
      },
      hint: {
        ca: 'Omple el contacte, el missatge i accepta la política de privacitat per continuar.',
        es: 'Rellena el contacto, el mensaje y acepta la política de privacidad para continuar.',
      },
      error: {
        ca: 'Necessitem una forma de contacte, una breu descripció del projecte i el teu consentiment per gestionar la consulta.',
        es: 'Necesitamos una forma de contacto, una breve descripción del proyecto y tu consentimiento para gestionar la consulta.',
      },
      submitError: {
        ca: 'No hem pogut enviar la consulta. Torna-ho a provar d’aquí un moment.',
        es: 'No hemos podido enviar la consulta. Vuelve a intentarlo dentro de un momento.',
      },
      success: {
        ca: 'El teu missatge ha estat enviat. En breu contestarem la teva consulta.',
        es: 'Su mensaje ha sido enviado. En breve contestaremos su consulta.',
      },
      consent: {
        ca: 'Accepto el tractament de les meves dades per rebre resposta a aquesta consulta.',
        es: 'Acepto el tratamiento de mis datos para recibir respuesta a esta consulta.',
      },
      privacyPrefix: {
        ca: 'En enviar la consulta acceptes la nostra',
        es: 'Al enviar la consulta aceptas nuestra',
      },
      privacyLink: {
        ca: 'política de privacitat',
        es: 'política de privacidad',
      },
      zonePrefill: {
        ca: 'Zona del projecte',
        es: 'Zona del proyecto',
      },
      services: [
        { value: '', label: { ca: 'Selecciona un servei', es: 'Selecciona un servicio' } },
        { value: 'Tala de pins i arbres', label: { ca: 'Tala de pins i arbres', es: 'Tala de pinos y árboles' } },
        { value: 'Poda en altura', label: { ca: 'Poda en altura', es: 'Poda en altura' } },
        { value: 'Desbrossaments', label: { ca: 'Desbrossaments', es: 'Desbroces' } },
        { value: 'Manteniment verd', label: { ca: 'Manteniment verd', es: 'Mantenimiento verde' } },
        { value: 'Recuperació d’espais', label: { ca: 'Recuperació d’espais', es: 'Recuperación de espacios' } },
        { value: 'Vallats i tancaments', label: { ca: 'Vallats i tancaments', es: 'Vallados y cerramientos' } },
      ],
    }),
    [],
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const zona = searchParams.get('zona');

    if (!zona) {
      return;
    }

    setSuccess('');
    setForm((current) => {
      const nextMessage = current.message.includes(zona)
        ? current.message
        : `${t(labels.zonePrefill)}: ${zona}\n${current.message}`.trim();

      return {
        ...current,
        message: nextMessage,
      };
    });
  }, [labels.zonePrefill, location.search, t]);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.contact.trim() || !form.message.trim() || !form.consent) {
      setError(t(labels.error));
      return false;
    }

    return true;
  };

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          contact: form.contact.trim(),
          service: form.service,
          message: form.message.trim(),
          lang,
          consent: form.consent,
          company: form.company,
          sourcePath: location.pathname,
          startedAt: startedAtRef.current,
        }),
      });

      if (!response.ok) {
        throw new Error('submit_failed');
      }

      trackLead({ service: form.service, sourcePath: location.pathname });

      setForm(emptyForm);
      setSuccess(t(labels.success));
      startedAtRef.current = Date.now();

      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }

      successTimeoutRef.current = window.setTimeout(() => {
        setSuccess('');
      }, 5000);
    } catch {
      setError(t(labels.submitError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={compact ? 'contact-form compact' : 'contact-form'} onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label className="field">
          <span id={`${formId}-name-label`}>{t(labels.name)}</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            aria-labelledby={`${formId}-name-label`}
          />
        </label>
        <label className="field">
          <span id={`${formId}-contact-label`}>{t(labels.contact)}</span>
          <input
            name="contact"
            type="text"
            value={form.contact}
            onChange={handleChange}
            required
            placeholder={t({ ca: 'Ex. 600 000 000 o nom@correu.cat', es: 'Ej. 600 000 000 o nombre@correo.com' })}
            aria-labelledby={`${formId}-contact-label`}
            aria-describedby={`${formId}-feedback`}
            aria-invalid={Boolean(error)}
          />
        </label>
        <label className="field field-full">
          <span id={`${formId}-service-label`}>{t(labels.service)}</span>
          <select name="service" value={form.service} onChange={handleChange}>
            {labels.services.map((service) => (
              <option key={service.value || 'empty'} value={service.value}>
                {t(service.label)}
              </option>
            ))}
          </select>
        </label>
        <label className="field field-full">
          <span id={`${formId}-message-label`}>{t(labels.message)}</span>
          <textarea
            name="message"
            rows={compact ? 3 : 5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder={t({
              ca: 'Explica breument què necessites i en quina zona és.',
              es: 'Explica brevemente qué necesitas y en qué zona está.',
            })}
            aria-labelledby={`${formId}-message-label`}
            aria-describedby={`${formId}-feedback`}
            aria-invalid={Boolean(error)}
          />
        </label>
        <label className="field field-hidden" aria-hidden="true">
          <span>Empresa</span>
          <input
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </label>
      </div>

      <label className="consent-row">
        <input
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          required
          aria-describedby={`${formId}-feedback`}
          aria-invalid={Boolean(error)}
        />
        <span>{t(labels.consent)}</span>
      </label>

      <div className="contact-form-actions">
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? t(labels.sending) : t(labels.submit)}
        </button>
      </div>

      <p className="form-disclaimer">
        {t(labels.privacyPrefix)}{' '}
        <Link to="/privacidad">{t(labels.privacyLink)}</Link>.
      </p>
      <p id={`${formId}-feedback`} className={`form-hint${success ? ' is-success' : ''}`} aria-live="polite">
        {success || error || t(labels.hint)}
      </p>
    </form>
  );
}
