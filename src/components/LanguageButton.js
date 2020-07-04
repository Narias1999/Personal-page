import React from 'react';

export function LanguageButton({ currentLanguage }) {
  return (
    <button className='button LanguageButton' style={{ marginRight: 10 }}>
      {currentLanguage === 'spanish' ? 'ES' : 'EN'}
    </button>
  );
}
