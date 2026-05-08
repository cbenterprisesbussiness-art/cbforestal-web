import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import {
  about,
  caseStudy,
  company,
  conversionSection,
  fences,
  fencesSectionPath,
  hero,
  homeFaqs,
  processSection,
  quoteRequestPath,
  services,
  servicesSectionPath,
  servicesIntro,
  trustCredentials,
  urgency24hCopy,
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
        primaryCta={{ to: quoteRequestPath, label: hero.primaryCta }}
        secondaryCta={{ to: servicesSectionPath, label: hero.secondaryCta }}
        image="/trabajos/galeria/tala-controlada-piscina.webp"
        video="/trabajos/videos-nuevos/hero-loop.mp4"
        trustSignals={hero.trustSignals}
        urgencyBadge={hero.urgencyBadge}
      />

      <section className="home-proof-strip">
        <div className="container home-proof-grid">
          <article className="home-proof-card home-proof-urgency" data-reveal>
            <span>{t(urgency24hCopy.short)}</span>
            <a href={company.phoneHref}>{company.phone}</a>
          </article>
          <article className="home-proof-card" data-reveal>
            <span>{t({ ca: 'Visita gratis', es: 'Visita gratis' })}</span>
            <strong>{t({ ca: 'Sense compromís', es: 'Sin compromiso' })}</strong>
          </article>
          <article className="home-proof-card" data-reveal>
            <span>{t({ ca: 'Cobertura', es: 'Cobertura' })}</span>
            <strong>{t({ ca: 'Tota Catalunya', es: 'Toda Cataluña' })}</strong>
          </article>
        </div>
      </section>

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

      <section className="section section-light">
        <div className="container">
          <SectionHeading label={conversionSection.label} title={conversionSection.title} center />
          <p className="section-copy centered">{t(conversionSection.description)}</p>
          <div className="conversion-grid">
            {conversionSection.items.map((item) => (
              <article key={item.title.ca} className="conversion-card" data-reveal>
                <h3>{t(item.title)}</h3>
                <p>{t(item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="services-intro-banner" data-reveal>
            <p>{t(servicesIntro.quickListTitle)}</p>
            <div className="services-icon-row">
              {servicesIntro.quickItems.map((item) => (
                <div key={item.label.ca} className="service-pill">
                  <div className="service-pill-icon">{item.icon}</div>
                  <span>{t(item.label)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="services-head-split">
            <SectionHeading label={servicesIntro.label} title={servicesIntro.title} />
            <p className="section-copy">{t(servicesIntro.description)}</p>
          </div>

          <div className="services-photo-grid">
            {services.slice(0, 3).map((service) => (
              <article key={service.title.ca} className="service-photo-card" data-reveal>
                <img src={service.image} alt={t(service.title)} loading="lazy" />
                <div className="service-photo-copy">
                  <div className="service-photo-icon">{service.icon}</div>
                  <h3>{t(service.title)}</h3>
                  <p>{t(service.description)}</p>
                  {service.href ? (
                    <Link to={service.href} className="card-link">
                      {t({ ca: 'Més informació →', es: 'Más información →' })}
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="services-cta-row">
            <Link to={servicesSectionPath} className="btn-services-all">
              {`${t({ ca: 'Veure tots els serveis', es: 'Ver todos los servicios' })} (${services.length}) →`}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split-grid fences-grid">
          <div className="image-card">
            <img
              src="/trabajos/galeria/cerramiento-malla-talud-frontal.webp"
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
            <Link to={quoteRequestPath} className="btn-primary">
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

      <section className="section section-light">
        <div className="container">
          <SectionHeading label={trustCredentials.label} title={trustCredentials.title} center />
          <p className="section-copy centered">{t(trustCredentials.description)}</p>
          <div className="conversion-grid">
            {trustCredentials.items.map((item) => (
              <article key={item.title.ca} className="conversion-card credentials-card" data-reveal>
                <div className="credentials-icon" aria-hidden="true">{item.icon}</div>
                <h3>{t(item.title)}</h3>
                <p>{t(item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionHeading label={caseStudy.label} title={caseStudy.title} />
          <p className="section-copy">{t(caseStudy.description)}</p>
          <div className="case-study-meta">{t(caseStudy.meta)}</div>
          <div className="case-study-blocks">
            {caseStudy.blocks.map((block) => (
              <article key={block.label.ca} className="case-study-block" data-reveal>
                <span className="case-study-label">{t(block.label)}</span>
                <p>{t(block.text)}</p>
              </article>
            ))}
          </div>
          <div className="services-cta-row">
            <Link to={quoteRequestPath} className="btn-primary">
              {t({ ca: 'Vull plantejar un projecte similar', es: 'Quiero plantear un proyecto similar' })}
            </Link>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection
        label={{ ca: 'Preguntes freqüents', es: 'Preguntas frecuentes' }}
        title={{ ca: 'Dubtes habituals abans de demanar pressupost', es: 'Dudas habituales antes de pedir presupuesto' }}
        items={homeFaqs}
        schemaId="faq-home"
      />
      <CTASection />
    </>
  );
}
