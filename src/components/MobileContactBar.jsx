import { Link } from 'react-router-dom';
import { company, quoteRequestPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';
import { trackContactClick } from '../shared/tracking';

export default function MobileContactBar() {
  const { t } = useLanguage();

  return (
    <div className="mobile-contact-bar">
      {company.hasPublicPhone ? (
        <a
          href={company.phoneHref}
          className="mobile-contact-call"
          onClick={() => trackContactClick('phone-mobile-bar')}
        >
          <span>{t({ ca: 'Trucar · 24h', es: 'Llamar · 24h' })}</span>
          <strong>{company.phone}</strong>
        </a>
      ) : null}
      <Link to={quoteRequestPath} className="mobile-contact-cta">
        <span className="mobile-contact-cta-line">{t({ ca: 'Pressupost', es: 'Presupuesto' })}</span>
        <span className="mobile-contact-cta-sub">{t({ ca: 'GRATIS', es: 'GRATIS' })}</span>
      </Link>
    </div>
  );
}
