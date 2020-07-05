import React, { createContext, useState } from 'react';
const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState('ligth');
  const [language, setLanguage] = useState('en');

  const value = {
    theme,
    language,
    setDarkMode() {
      setTheme('dark');
    },
    setLigthMode() {
      setTheme('ligth');
    },
    setSpanish() {
      setLanguage('es');
    },
    setEnglish() {
      setLanguage('en');
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
