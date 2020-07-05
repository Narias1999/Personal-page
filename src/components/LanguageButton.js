import React from 'react';
import { Consumer } from './../Context';

export function LanguageButton() {
  return (
    <Consumer>
      {({ language, setSpanish, setEnglish }) => (
        <button
          className='button LanguageButton'
          style={{ marginRight: 10 }}
          onClick={language === 'en' ? setSpanish : setEnglish}
        >
          {language === 'en' ? 'ES' : 'EN'}
        </button>
      )}
    </Consumer>
  );
}
