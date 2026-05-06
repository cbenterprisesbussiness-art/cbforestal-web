import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { fences, quoteRequestPath, fencesSectionHash, zonesSectionPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function FencesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={fences.label}
        title={fences.title}
        description={fences.paragraphs[0]}
        primaryCta={{ to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } }}
        secondaryCta={{ to: zonesSectionPath, label: { ca: 'Veure zones', es: 'Ver zonas' } }}
        image="/trabajos/galeria/cerramiento-panel-porton.jpg"
        compact
      />

      <section id={fencesSectionHash} className="section section-light">
        <div className="container split-grid fences-grid">
          <div className="image-card">
            <img
              src="/trabajos/servicios/cerramiento-portillo-metalico.jpg"
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
              {fences.types.map((type) => (
                <div key={type.ca} className="vallados-type">
                  {t(type)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
