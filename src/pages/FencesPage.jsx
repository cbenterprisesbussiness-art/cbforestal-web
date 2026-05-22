import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import {
  fences,
  fencesGallery,
  quoteRequestPath,
  fencesSectionHash,
  worksPath,
  zonesSectionPath,
} from '../shared/siteContent';
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
        image="/trabajos/galeria/cerramientos/cerramiento-metalico-chapa-con-porton-y-puerta.webp"
        compact
      />

      <section id={fencesSectionHash} className="section section-light">
        <div className="container split-grid fences-grid">
          <div className="image-card">
            <img
              src="/trabajos/galeria/cerramientos/cerramiento-lamas-blancas-fachada-frontal.webp"
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

      <section className="section section-cream">
        <div className="container">
          <SectionHeading
            label={{ ca: 'Treballs reals', es: 'Trabajos reales' }}
            title={{ ca: 'Galeria de tancaments instal·lats', es: 'Galería de cerramientos instalados' }}
          />
          <p className="section-copy">
            {t({
              ca: 'Mostra real de tancaments residencials, rurals, panell rígid, ocultació, portes metàl·liques i solucions adaptades a murs, talussos i accessos.',
              es: 'Muestra real de cerramientos residenciales, rurales, panel rígido, ocultación, puertas metálicas y soluciones adaptadas a muros, taludes y accesos.',
            })}
          </p>
          <div className="works-gallery-grid">
            {fencesGallery.map((item) => (
              <article key={item.image} className="works-gallery-card" data-reveal>
                <img src={item.image} alt={t(item.title)} loading="lazy" />
                <div className="works-gallery-copy">
                  <div className="project-meta">{t(item.meta)}</div>
                  <h3>{t(item.title)}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-actions">
            <Link to={worksPath} className="btn-primary">
              {t({ ca: 'Veure tots els treballs', es: 'Ver todos los trabajos' })}
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
