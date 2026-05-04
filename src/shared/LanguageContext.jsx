import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);
const LANGUAGE_STORAGE_KEY = 'cbforestal-lang';

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'ca';
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === 'es' ? 'es' : 'ca';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (copy) => copy?.[lang] ?? '',
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
