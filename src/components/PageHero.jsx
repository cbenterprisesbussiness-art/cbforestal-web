import { Link } from 'react-router-dom';
import { useLanguage } from '../shared/LanguageContext';

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  trustSignals,
  compact = false,
}) {
  const { t } = useLanguage();

  return (
    <section
      className={`hero${compact ? ' hero-compact' : ''}`}
      style={{ '--hero-image': `url(${image})` }}
    >
      <div className="hero-content">
        {eyebrow ? <div className="hero-tag">{t(eyebrow)}</div> : null}
        <h1>{t(title)}</h1>
        {description ? <p>{t(description)}</p> : null}
        {(primaryCta || secondaryCta) && (
          <div className="hero-btns">
            {primaryCta ? (
              <Link to={primaryCta.to} className="btn-primary">
                {t(primaryCta.label)}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link to={secondaryCta.to} className="btn-outline">
                {t(secondaryCta.label)}
              </Link>
            ) : null}
          </div>
        )}
        {trustSignals?.length ? (
          <div className="hero-trust" data-reveal>
            {trustSignals.map((signal) => (
              <div key={signal.ca} className="hero-trust-item">
                <span>✓</span>
                {t(signal)}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
