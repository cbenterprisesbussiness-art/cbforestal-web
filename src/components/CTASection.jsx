import ContactForm from './ContactForm';
import { company, contact } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <div className="cta-shell">
        <div className="cta-copy" data-reveal>
          <span className="section-label">{t(contact.label)}</span>
          <h2>{t(contact.title)}</h2>
          <p>{t(contact.description)}</p>
          <div className="cta-highlights">
            <div className="cta-highlight">
              <strong>{t({ ca: 'Resposta ràpida', es: 'Respuesta rápida' })}</strong>
              <span>{t({ ca: 'Normalment en menys de 24h.', es: 'Normalmente en menos de 24h.' })}</span>
            </div>
            <div className="cta-highlight">
              <strong>{t({ ca: 'Pressupost sense compromís', es: 'Presupuesto sin compromiso' })}</strong>
              <span>{t({ ca: 'Ens expliques el projecte i et responem amb criteri.', es: 'Nos explicas el proyecto y te respondemos con criterio.' })}</span>
            </div>
          </div>
          <div className="cta-contact-strip">
            {company.hasPublicPhone ? (
              <a href={company.phoneHref} className="cta-contact-chip">
                <span>{t({ ca: 'Telèfon', es: 'Teléfono' })}</span>
                <strong>{company.phone}</strong>
              </a>
            ) : null}
            <a href={company.emailHref} className="cta-contact-chip">
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
