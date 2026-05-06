import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { about, processSection, quoteRequestPath, servicesSectionPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={about.label}
        title={about.title}
        description={about.paragraphs[0]}
        primaryCta={{ to: quoteRequestPath, label: { ca: 'Parlar amb nosaltres', es: 'Hablar con nosotros' } }}
        secondaryCta={{ to: servicesSectionPath, label: { ca: 'Veure serveis', es: 'Ver servicios' } }}
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1800"
        compact
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
              <article key={stat.value + stat.label.ca} className="stat-box">
                <div className="stat-num">{stat.value}</div>
                <div className="stat-desc">{t(stat.label)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionHeading
            label={processSection.label}
            title={{ ca: 'Com entenem cada projecte', es: 'Cómo entendemos cada proyecto' }}
          />
          <div className="proceso-steps">
            {processSection.steps.map((step) => (
              <article key={step.number} className="step">
                <div className="step-num">{step.number}</div>
                <h4>{t(step.title)}</h4>
                <p>{t(step.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
