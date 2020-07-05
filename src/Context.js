import React, { createContext, useState } from 'react';
import { isNigth } from './utils/isNigth';
const Context = createContext();

const themes = {
  LIGTH: 'ligth',
  DARK: 'dark',
};

const languages = {
  SPANISH: 'es',
  ENGLISH: 'en',
};

const themeKey = 'theme';
const languageKey = 'language';

const getDefaultTheme = () => {
  const stored = localStorage.getItem(themeKey);
  if (stored) return stored;
  return isNigth() ? themes.DARK : themes.LIGTH;
};

const getDefaultLanguage = () => {
  return localStorage.getItem(languageKey) || languages.ENGLISH;
};

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [language, setLanguage] = useState(getDefaultLanguage());

  const value = {
    theme,
    language,
    setDarkMode() {
      localStorage.setItem(themeKey, themes.DARK);
      setTheme(themes.DARK);
    },
    setLigthMode() {
      localStorage.setItem(themeKey, themes.LIGTH);
      setTheme(themes.LIGTH);
    },
    setSpanish() {
      localStorage.setItem(languageKey, languages.SPANISH);
      setLanguage(languages.SPANISH);
    },
    setEnglish() {
      localStorage.setItem(languageKey, languages.ENGLISH);
      setLanguage(languages.ENGLISH);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
