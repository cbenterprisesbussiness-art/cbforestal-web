import ContactForm from './ContactForm';
import { company, contact, freeQuotePromise, urgency24hCopy } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';
import { trackContactClick } from '../shared/tracking';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <div className="cta-shell">
        <div className="cta-copy" data-reveal>
          <span className="section-label">{t(contact.label)}</span>
          <h2>{t(contact.title)}</h2>
          <p>{t(contact.description)}</p>
          <div className="cta-free-banner">
            <strong>{t(freeQuotePromise)}</strong>
          </div>
          <div className="cta-highlights">
            <div className="cta-highlight">
              <strong>{t(urgency24hCopy.short)}</strong>
              <span>{t(urgency24hCopy.long)}</span>
            </div>
            <div className="cta-highlight">
              <strong>{t({ ca: 'Visita i pressupost gratis', es: 'Visita y presupuesto gratis' })}</strong>
              <span>{t({ ca: 'Anem a veure la finca, valorem la feina i et donem un preu real, no orientatiu.', es: 'Vamos a ver la finca, valoramos el trabajo y te damos un precio real, no orientativo.' })}</span>
            </div>
          </div>
          <div className="cta-contact-strip">
            {company.hasPublicPhone ? (
              <a
                href={company.phoneHref}
                className="cta-contact-chip"
                onClick={() => trackContactClick('phone-cta')}
              >
                <span>{t({ ca: 'Telèfon', es: 'Teléfono' })}</span>
                <strong>{company.phone}</strong>
              </a>
            ) : null}
            <a
              href={company.emailHref}
              className="cta-contact-chip"
              onClick={() => trackContactClick('email-cta')}
            >
              <span>{t({ ca: 'Correu', es: 'Correo' })}</span>
              <strong>{company.email}</strong>
            </a>
          </div>
        </div>

        <div className="cta-form-card" data-reveal>
          <div className="cta-form-head">
            <h3>{t({ ca: 'Explica’ns què necessites', es: 'Cuéntanos qué necesitas' })}</h3>
            <p>{t({ ca: 'Omple les dades i et contactem amb una proposta clara.', es: 'Rellena los datos y te contactamos con una propuesta clara.' })}</p>
          </div>
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}
