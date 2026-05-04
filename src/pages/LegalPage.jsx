import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useLanguage } from '../shared/LanguageContext';

export default function LegalPage({ content }) {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={content.label}
        title={content.title}
        description={content.description}
        primaryCta={{ to: '/contacto', label: { ca: 'Contactar ara', es: 'Contactar ahora' } }}
        secondaryCta={{ to: '/', label: { ca: "Tornar a l'inici", es: 'Volver al inicio' } }}
        image="/scene-legal.svg"
        compact
      />

      <section className="section section-light">
        <div className="container legal-layout">
          {content.sections.map((section) => (
            <article key={section.title.ca} className="legal-card">
              <h2>{t(section.title)}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.ca}>{t(paragraph)}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
