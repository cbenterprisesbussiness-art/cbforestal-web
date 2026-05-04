import ContactForm from './ContactForm';
import { company, contact } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <span className="section-label">{t(contact.label)}</span>
      <h2>{t(contact.title)}</h2>
      <p>{t(contact.description)}</p>
      <ContactForm compact />
      <p className="cta-note">
        {t(contact.notePrefix)}{' '}
        {company.hasPublicPhone ? <strong>{company.phone}</strong> : null}
        {company.hasPublicPhone ? ' · ' : null}
        <strong>{company.email}</strong>
      </p>
    </section>
  );
}
