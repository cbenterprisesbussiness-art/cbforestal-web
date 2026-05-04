import { useLanguage } from '../shared/LanguageContext';

export default function SectionHeading({ label, title, center = false }) {
  const { t } = useLanguage();

  return (
    <div className={center ? 'section-heading center' : 'section-heading'}>
      {label ? <span className="section-label">{t(label)}</span> : null}
      <h2 className="section-title">{t(title)}</h2>
    </div>
  );
}
