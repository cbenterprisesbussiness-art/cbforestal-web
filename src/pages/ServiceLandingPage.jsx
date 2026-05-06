import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
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

      <CTASection />
    </>
  );
}
