import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { fencesSectionPath, quoteRequestPath, services, servicesIntro, servicesSectionHash } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={servicesIntro.label}
        title={servicesIntro.title}
        description={servicesIntro.description}
        primaryCta={{ to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } }}
        secondaryCta={{ to: fencesSectionPath, label: { ca: 'Veure tancaments', es: 'Ver cerramientos' } }}
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800"
        compact
      />

      <section id={servicesSectionHash} className="section section-light">
        <div className="container">
          <SectionHeading label={servicesIntro.label} title={servicesIntro.title} />
          <p className="section-copy">{t(servicesIntro.description)}</p>
          <div className="services-photo-grid services-photo-grid-full">
            {services.map((service) => (
              <article key={service.title.ca} className="service-photo-card" data-reveal>
                <img src={service.image} alt={t(service.title)} loading="lazy" />
                <div className="service-photo-copy">
                  <div className="service-photo-icon">{service.icon}</div>
                  <h3>{t(service.title)}</h3>
                  <p>{t(service.description)}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag.ca}>{t(tag)}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
