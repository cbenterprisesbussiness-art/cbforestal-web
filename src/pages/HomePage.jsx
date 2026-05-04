import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import {
  about,
  fences,
  hero,
  processSection,
  services,
  servicesIntro,
  zones,
  zonesIntro,
} from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={hero.tag}
        title={hero.title}
        description={hero.description}
        primaryCta={{ to: '/contacto', label: hero.primaryCta }}
        secondaryCta={{ to: '/servicios', label: hero.secondaryCta }}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800"
        trustSignals={hero.trustSignals}
      />

      <section className="section section-cream">
        <div className="container split-grid">
          <div>
            <SectionHeading label={about.label} title={about.title} />
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.ca} className="lead-paragraph">
                {t(paragraph)}
              </p>
            ))}
          </div>
          <div className="intro-stats">
            {about.stats.map((stat) => (
              <article key={stat.value + stat.label.ca} className="stat-box" data-reveal>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-desc">{t(stat.label)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading label={servicesIntro.label} title={servicesIntro.title} />
          <div className="cards-grid">
            {services.map((service) => (
              <article key={service.title.ca} className="service-card" data-reveal>
                <span className="service-icon">{service.icon}</span>
                <h3>{t(service.title)}</h3>
                <p>{t(service.description)}</p>
                <Link
                  to={service.title.ca === 'Tancaments i Vallats' ? '/cerramientos' : '/servicios'}
                  className="card-link"
                >
                  {service.title.ca === 'Tancaments i Vallats'
                    ? t({ ca: 'Veure tancaments →', es: 'Ver cerramientos →' })
                    : t({ ca: 'Saber-ne més →', es: 'Saber más →' })}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split-grid fences-grid">
          <div className="image-card">
            <img
              src="/scene-fences.svg"
              alt={t(fences.label)}
              loading="lazy"
            />
            <div className="image-badge">{t(fences.badge)}</div>
          </div>
          <div>
            <SectionHeading label={fences.label} title={fences.title} />
            {fences.paragraphs.map((paragraph) => (
              <p key={paragraph.ca} className="lead-paragraph">
                {t(paragraph)}
              </p>
            ))}
            <div className="vallados-types">
              {fences.types.slice(0, 4).map((type) => (
                <div key={type.ca} className="vallados-type">
                  {t(type)}
                </div>
              ))}
            </div>
            <Link to="/cerramientos" className="btn-primary">
              {t({ ca: 'Demanar pressupost de tancament', es: 'Solicitar presupuesto de cerramiento' })}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-zones">
        <div className="container">
          <SectionHeading label={zonesIntro.label} title={zonesIntro.title} center />
          <p className="section-copy centered">{t(zonesIntro.description)}</p>
          <div className="zones-grid">
            {zones.map((zone) => (
              <Link key={zone.name} to={zone.contactHref} className="zone" data-reveal>
                <div className="zone-name">{zone.name}</div>
                <div className="zone-desc">{zone.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionHeading label={processSection.label} title={processSection.title} />
          <div className="proceso-steps">
            {processSection.steps.map((step) => (
              <article key={step.number} className="step" data-reveal>
                <div className="step-num">{step.number}</div>
                <h4>{t(step.title)}</h4>
                <p>{t(step.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
