import { Link } from 'react-router-dom';
import { useLanguage } from '../shared/LanguageContext';
import { company } from '../shared/siteContent';

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  video,
  trustSignals,
  urgencyBadge,
  compact = false,
}) {
  const { t } = useLanguage();

  return (
    <section
      className={`hero${compact ? ' hero-compact' : ''}${video ? ' hero-with-video' : ''}`}
      style={{
        '--hero-image': `url(${image})`,
        '--hero-image-position': video ? 'center top' : 'center',
      }}
    >
      {video ? (
        <video
          className="hero-video"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={image}
          aria-hidden="true"
        />
      ) : null}
      <div className="hero-content">
        {urgencyBadge ? (
          <a className="hero-urgency-badge" href={company.phoneHref}>
            <span className="hero-urgency-dot" aria-hidden="true" />
            {t(urgencyBadge)}
          </a>
        ) : null}
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
