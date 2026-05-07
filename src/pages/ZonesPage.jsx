import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { localFocusZones, quoteRequestPath, servicesSectionPath, zones, zonesIntro, zonesSectionHash } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function ZonesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={zonesIntro.label}
        title={zonesIntro.title}
        description={zonesIntro.description}
        primaryCta={{ to: quoteRequestPath, label: { ca: 'Contactar equip', es: 'Contactar equipo' } }}
        secondaryCta={{ to: servicesSectionPath, label: { ca: 'Veure serveis', es: 'Ver servicios' } }}
        image="/trabajos/galeria/limpieza-bosque-pendiente.jpg"
        compact
      />

      <section id={zonesSectionHash} className="section section-zones">
        <div className="container">
          <SectionHeading label={zonesIntro.label} title={zonesIntro.title} center />
          <p className="section-copy centered">{t(zonesIntro.description)}</p>
          <div className="zones-focus-grid">
            {localFocusZones.map((zone) => (
              <Link key={zone.name} to={zone.href} className="zone zone-focus" data-reveal>
                <div className="zone-name">{zone.name}</div>
                <div className="zone-desc">{zone.desc}</div>
              </Link>
            ))}
          </div>
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

      <CTASection />
    </>
  );
}
