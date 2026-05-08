import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { projects, quoteRequestPath, worksPath, worksPoolsHash } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

const FILTER_KEYWORDS = {
  tala: ['tala', 'tronc', 'tronco'],
  poda: ['poda'],
  desbroce: ['desbross', 'desbroce', 'neteja', 'limpieza', 'pinar', 'mantenim', 'manteni'],
  cerramientos: ['tancament', 'cerramiento', 'malla', 'pal', 'poste', 'mur', 'muro', 'fonament', 'cimentación'],
};

function matchesFilter(filter, lang, item) {
  if (filter === 'all') return true;
  const haystack = `${item.meta?.[lang] ?? ''} ${item.title?.[lang] ?? ''}`.toLowerCase();
  return FILTER_KEYWORDS[filter]?.some((keyword) => haystack.includes(keyword.toLowerCase())) ?? false;
}

export default function WorksPage() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filterDefs = useMemo(
    () => [
      { key: 'all', label: { ca: 'Tots', es: 'Todos' } },
      { key: 'tala', label: { ca: 'Tala', es: 'Tala' } },
      { key: 'poda', label: { ca: 'Poda', es: 'Poda' } },
      { key: 'desbroce', label: { ca: 'Desbrossament', es: 'Desbroce' } },
      { key: 'cerramientos', label: { ca: 'Tancaments', es: 'Cerramientos' } },
    ],
    [],
  );

  const poolGallery = projects.gallery.filter((item) => t(item.meta).includes('Piscin'));
  const mainGallery = projects.gallery.filter((item) => !t(item.meta).includes('Piscin'));
  const poolVideos = projects.videos.filter((item) => t(item.title).includes('Piscin'));
  const mainVideos = projects.videos.filter((item) => !t(item.title).includes('Piscin'));

  const filteredMainGallery = mainGallery.filter((item) => matchesFilter(filter, lang, item));
  const filteredMainVideos = mainVideos.filter((item) => matchesFilter(filter, lang, item));

  return (
    <>
      <PageHero
        eyebrow={projects.label}
        title={{ ca: 'Galeria de treballs executats', es: 'Galería de trabajos ejecutados' }}
        description={projects.description}
        primaryCta={{ to: quoteRequestPath, label: { ca: 'Demanar pressupost', es: 'Pedir presupuesto' } }}
        secondaryCta={{ to: worksPath, label: { ca: 'Veure tots els treballs', es: 'Ver todos los trabajos' } }}
        image="/trabajos/galeria/tala-controlada-piscina.webp"
        compact
      />

      <section className="section section-light">
        <div className="container">
          <SectionHeading label={projects.label} title={{ ca: 'Treballs reals sobre el terreny', es: 'Trabajos reales sobre el terreno' }} />
          <p className="section-copy">
            {t({
              ca: 'Una vista més completa del tipus de feina que executem en tala, poda, tancaments, manteniment de parcel·les i posada a punt de piscines.',
              es: 'Una vista más completa del tipo de trabajo que ejecutamos en tala, poda, cerramientos, mantenimiento de parcelas y puesta a punto de piscinas.',
            })}
          </p>

          <div className="gallery-filters" role="tablist" aria-label={t({ ca: 'Filtres de galeria', es: 'Filtros de galería' })}>
            {filterDefs.map((def) => (
              <button
                key={def.key}
                type="button"
                role="tab"
                aria-selected={filter === def.key}
                className={`gallery-filter${filter === def.key ? ' is-active' : ''}`}
                onClick={() => setFilter(def.key)}
              >
                {t(def.label)}
              </button>
            ))}
          </div>

          <div className="works-gallery-grid">
            {filteredMainGallery.length ? (
              filteredMainGallery.map((item) => (
                <article key={item.image} className="works-gallery-card" data-reveal>
                  <img src={item.image} alt={t(item.title)} loading="lazy" />
                  <div className="works-gallery-copy">
                    <div className="project-meta">{t(item.meta)}</div>
                    <h3>{t(item.title)}</h3>
                  </div>
                </article>
              ))
            ) : (
              <p className="section-copy">
                {t({ ca: 'Aviat afegirem més treballs en aquesta categoria.', es: 'Pronto añadiremos más trabajos en esta categoría.' })}
              </p>
            )}
          </div>
        </div>
      </section>

      {poolGallery.length ? (
        <section id={worksPoolsHash} className="section section-light">
          <div className="container">
            <SectionHeading
              label={{ ca: 'Piscines', es: 'Piscinas' }}
              title={{ ca: 'Treballs realitzats en piscines', es: 'Trabajos realizados en piscinas' }}
            />
            <p className="section-copy">
              {t({
                ca: 'Selecció de treballs reals de posada a punt, sala tècnica, instal·lació i revisió de piscina.',
                es: 'Selección de trabajos reales de puesta a punto, sala técnica, instalación y revisión de piscina.',
              })}
            </p>
            <div className="works-gallery-grid">
              {poolGallery.map((item) => (
                <article key={item.image} className="works-gallery-card" data-reveal>
                  <img src={item.image} alt={t(item.title)} loading="lazy" />
                  <div className="works-gallery-copy">
                    <div className="project-meta">{t(item.meta)}</div>
                    <h3>{t(item.title)}</h3>
                  </div>
                </article>
              ))}
            </div>
            {poolVideos.length ? (
              <>
                <div className="projects-video-head works-subhead">
                  <h3>{t({ ca: 'Vídeos de piscina', es: 'Vídeos de piscina' })}</h3>
                  <p>
                    {t({
                      ca: 'Clips curts de treball real en piscina i instal·lació tècnica.',
                      es: 'Clips cortos de trabajo real en piscina e instalación técnica.',
                    })}
                  </p>
                </div>
                <div className="projects-grid projects-video-grid">
                  {poolVideos.map((item) => (
                    <article key={item.src} className="project-card" data-reveal>
                      <video src={item.src} controls muted playsInline preload="metadata" />
                      <div className="project-copy">
                        <h3>{t(item.title)}</h3>
                        <p>{t(item.summary)}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section section-cream">
        <div className="container">
          <SectionHeading label={projects.videosTitle} title={{ ca: 'Vídeos de feina real', es: 'Vídeos de trabajo real' }} />
          <p className="section-copy">{t(projects.videosDescription)}</p>
          <div className="projects-grid projects-video-grid">
            {(filter === 'all' ? mainVideos : filteredMainVideos).map((item) => (
              <article key={item.src} className="project-card" data-reveal>
                <video src={item.src} controls muted playsInline preload="metadata" />
                <div className="project-copy">
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.summary)}</p>
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
