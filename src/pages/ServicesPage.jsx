import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { fencesSectionPath, quoteRequestPath, services, servicesIntro, servicesSectionHash, worksPoolsPath } from '../shared/siteContent';
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
        image="/trabajos/galeria/poda-palmeras-en-altura.webp"
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
                  {service.href ? (
                    <Link to={service.href} className="card-link">
                      {t({ ca: 'Veure pàgina del servei →', es: 'Ver página del servicio →' })}
                    </Link>
                  ) : null}
                  {service.title.es === 'Mantenimiento de Piscinas' ? (
                    <Link to={worksPoolsPath} className="card-link">
                      {t({ ca: 'Veure treballs realitzats →', es: 'Ver trabajos realizados →' })}
                    </Link>
                  ) : null}
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
