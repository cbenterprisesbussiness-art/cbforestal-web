import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { services, servicesIntro } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={servicesIntro.label}
        title={servicesIntro.title}
        description={{
          ca: 'Intervencions forestals, poda en altura, desbrossaments, manteniment i vallats per a finques, parcel·les i espais residencials o corporatius.',
          es: 'Intervenciones forestales, poda en altura, desbroces, mantenimiento y vallados para fincas, parcelas y espacios residenciales o corporativos.',
        }}
        primaryCta={{ to: '/contacto', label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } }}
        secondaryCta={{ to: '/cerramientos', label: { ca: 'Veure tancaments', es: 'Ver cerramientos' } }}
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800"
        compact
      />

      <section className="section section-dark">
        <div className="container">
          <SectionHeading label={servicesIntro.label} title={servicesIntro.title} />
          <div className="cards-grid">
            {services.map((service) => (
              <article key={service.title.ca} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3>{t(service.title)}</h3>
                <p>{t(service.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
