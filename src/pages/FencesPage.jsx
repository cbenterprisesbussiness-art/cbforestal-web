import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { fences } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function FencesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={fences.label}
        title={fences.title}
        description={fences.paragraphs[0]}
        primaryCta={{ to: '/contacto', label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } }}
        secondaryCta={{ to: '/zonas', label: { ca: 'Veure zones', es: 'Ver zonas' } }}
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800"
        compact
      />

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
