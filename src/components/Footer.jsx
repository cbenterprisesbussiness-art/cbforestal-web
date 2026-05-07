import { Link } from 'react-router-dom';
import { company, footer, localFocusZones, services, servicesSectionPath, worksPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="nav-logo" to="/">
            CB <span>FORESTAL</span>
          </Link>
          <p>{t(footer.brand)}</p>
          <Link className="footer-gallery-link" to={worksPath}>
            {t({ ca: 'Veure treballs reals', es: 'Ver trabajos reales' })}
          </Link>
        </div>

        <div className="footer-col">
          <h5>{t(footer.servicesTitle)}</h5>
          <ul>
            {services.map((service) => (
              <li key={service.title.ca}>
                <Link to={service.href || servicesSectionPath}>
                  {t(service.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t(footer.zonesTitle)}</h5>
          <ul>
            {localFocusZones.map((zone) => (
              <li key={zone.name}>
                <Link to={zone.href}>{zone.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t(footer.contactTitle)}</h5>
          <ul>
            {company.hasPublicPhone ? (
              <li>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
            ) : null}
            <li>
              <a href={company.emailHref}>{company.email}</a>
            </li>
            {company.socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t(footer.rights)}</p>
        <div className="footer-legal-links">
          {footer.legalLinks.map((item) => (
            <Link key={item.to} to={item.to}>
              {t(item.label)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
