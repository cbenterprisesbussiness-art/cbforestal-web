import { useLanguage } from '../shared/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-switcher" aria-label={t({ ca: 'Selector d’idioma', es: 'Selector de idioma' })}>
      <button
        type="button"
        className={`lang-btn${lang === 'ca' ? ' active' : ''}`}
        onClick={() => setLang('ca')}
        aria-pressed={lang === 'ca'}
        aria-label={t({ ca: 'Canviar a català', es: 'Cambiar a catalán' })}
      >
        CA
      </button>
      <button
        type="button"
        className={`lang-btn${lang === 'es' ? ' active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        aria-label={t({ ca: 'Canviar a castellà', es: 'Cambiar a castellano' })}
      >
        ES
      </button>
    </div>
  );
}
