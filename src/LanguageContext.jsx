import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();
const VALID_LANGS = ['EN', 'HU', 'DE', 'UZ'];

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('duland_lang');
      return VALID_LANGS.includes(saved) ? saved : 'EN';
    } catch {
      return 'EN';
    }
  });

  const setLang = (nextLang) => {
    if (VALID_LANGS.includes(nextLang)) {
      setLangState(nextLang);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
    try {
      localStorage.setItem('duland_lang', lang);
    } catch {
      // Ignore storage errors in private browsing or restricted contexts
    }
  }, [lang]);

  const t = translations[lang] || translations.EN;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
