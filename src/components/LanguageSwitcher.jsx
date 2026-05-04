import { useLanguage } from '../shared/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher" aria-label="Language switcher">
      <button
        type="button"
        className={`lang-btn${lang === 'ca' ? ' active' : ''}`}
        onClick={() => setLang('ca')}
      >
        CA
      </button>
      <button
        type="button"
        className={`lang-btn${lang === 'es' ? ' active' : ''}`}
        onClick={() => setLang('es')}
      >
        ES
      </button>
    </div>
  );
}
