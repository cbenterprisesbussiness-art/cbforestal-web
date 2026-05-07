import FAQSection from '../components/FAQSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { quoteRequestPath, worksPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function ServiceLandingPage({ content }) {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        primaryCta={{ to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } }}
        secondaryCta={{ to: worksPath, label: { ca: 'Veure treballs reals', es: 'Ver trabajos reales' } }}
        image={content.image}
        compact
      />

      <section className="section section-light">
        <div className="container split-grid fences-grid">
          <div className="image-card">
            <img src={content.image} alt={t(content.title)} loading="lazy" />
          </div>
          <div>
            <SectionHeading label={content.eyebrow} title={content.title} />
            <p className="lead-paragraph">{t(content.intro)}</p>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.ca} className="lead-paragraph">
                {t(paragraph)}
              </p>
            ))}
            {content.areas ? (
              <p className="service-area-note">
                <strong>{t({ ca: 'Zones habituals:', es: 'Zonas habituales:' })}</strong> {t(content.areas)}
              </p>
            ) : null}
            <div className="vallados-types">
              {content.bullets.map((bullet) => (
                <div key={bullet.ca} className="vallados-type">
                  {t(bullet)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {content.scenarios?.length ? (
        <section className="section section-cream">
          <div className="container">
            <SectionHeading
              label={{ ca: 'Casos habituals', es: 'Casos habituales' }}
              title={{ ca: 'Quan aquest servei sol ser necessari', es: 'Cuándo suele ser necesario este servicio' }}
            />
            <div className="conversion-grid">
              {content.scenarios.map((item) => (
                <article key={item.title.ca} className="conversion-card" data-reveal>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.valueProps?.length ? (
        <section className="section section-light">
          <div className="container">
            <SectionHeading
              label={{ ca: 'Per què nosaltres', es: 'Por qué nosotros' }}
              title={{ ca: 'Com enfoquem aquest tipus de treball', es: 'Cómo enfocamos este tipo de trabajo' }}
            />
            <div className="conversion-grid">
              {content.valueProps.map((item) => (
                <article key={item.title.ca} className="conversion-card" data-reveal>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.relatedLinks?.length ? (
        <section className="section section-cream">
          <div className="container">
            <SectionHeading
              label={{ ca: 'Següent pas', es: 'Siguiente paso' }}
              title={{ ca: 'Pàgines relacionades i accés directe', es: 'Páginas relacionadas y acceso directo' }}
            />
            <div className="landing-links-row">
              {content.relatedLinks.map((item) => (
                <Link key={`${item.to}-${item.label.ca}`} to={item.to} className="btn-services-all">
                  {`${t(item.label)} →`}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FAQSection
        label={{ ca: 'Preguntes freqüents', es: 'Preguntas frecuentes' }}
        title={{ ca: `Dubtes habituals sobre ${t(content.eyebrow).toLowerCase()}`, es: `Dudas habituales sobre ${t(content.eyebrow).toLowerCase()}` }}
        items={content.faqs}
        schemaId={`faq-${t(content.eyebrow).toLowerCase().replace(/\s+/g, '-')}`}
      />

      <CTASection />
    </>
  );
}
