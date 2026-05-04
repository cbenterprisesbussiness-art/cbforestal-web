import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { projects } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-light">
      <div className="container">
        <SectionHeading label={projects.label} title={projects.title} />
        <p className="section-copy">{t(projects.description)}</p>
        <div className="projects-grid">
          {projects.items.map((item) => (
            <article key={item.title.ca} className="project-card" data-reveal>
              <img src={item.image} alt={t(item.title)} loading="lazy" />
              <div className="project-copy">
                <div className="project-meta">{t(item.meta)}</div>
                <h3>{t(item.title)}</h3>
                <p>{t(item.summary)}</p>
                <Link to="/contacto" className="card-link">
                  {t({ ca: 'Parlar d’un projecte similar →', es: 'Hablar de un proyecto similar →' })}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
