import { Link } from 'react-router-dom';
import { company, quoteRequestPath } from '../shared/siteContent';
import { useLanguage } from '../shared/LanguageContext';

export default function MobileContactBar() {
  const { t } = useLanguage();

  return (
    <div className="mobile-contact-bar">
      {company.hasPublicPhone ? (
        <a href={company.phoneHref} className="mobile-contact-call">
          <span>{t({ ca: 'Trucar', es: 'Llamar' })}</span>
          <strong>{company.phone}</strong>
        </a>
      ) : null}
      <Link to={quoteRequestPath} className="mobile-contact-cta">
        {t({ ca: 'Pressupost', es: 'Presupuesto' })}
      </Link>
    </div>
  );
}
