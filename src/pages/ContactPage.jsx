import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import { company, contact, quoteRequestHash, servicesSectionPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={contact.label}
        title={contact.title}
        description={contact.description}
        primaryCta={{ to: '/', label: { ca: "Tornar a l'inici", es: 'Volver al inicio' } }}
        secondaryCta={{ to: servicesSectionPath, label: { ca: 'Veure serveis', es: 'Ver servicios' } }}
        image="/trabajos/galeria/tala-controlada-piscina.jpg"
        compact
      />

      <section className="section section-light">
        <div className="container contact-grid">
          <article id={quoteRequestHash} className="contact-card">
            <span className="section-label">{t(contact.label)}</span>
            <h2 className="section-title">{t({ ca: 'Parlem del teu projecte', es: 'Hablemos de tu proyecto' })}</h2>
            <p className="lead-paragraph">{t(contact.description)}</p>
            <ContactForm />
          </article>
          <article className="contact-card">
            {company.hasPublicPhone ? (
              <>
                <h3>{t({ ca: 'Telèfon', es: 'Teléfono' })}</h3>
                <p>
                  <a href={company.phoneHref}>{company.phone}</a>
                </p>
              </>
            ) : null}
            <h3>{t({ ca: 'Correu', es: 'Correo' })}</h3>
            <p>
              <a href={company.emailHref}>{company.email}</a>
            </p>
            <h3>{t({ ca: 'Canals', es: 'Canales' })}</h3>
            <p>{t({ ca: 'Formulari web i correu electrònic.', es: 'Formulario web y correo electrónico.' })}</p>
            <h3>{t({ ca: 'Resposta habitual', es: 'Respuesta habitual' })}</h3>
            <p>{t({ ca: 'En menys de 24 hores per consultes comercials.', es: 'En menos de 24 horas para consultas comerciales.' })}</p>
          </article>
        </div>
      </section>
    </>
  );
}
