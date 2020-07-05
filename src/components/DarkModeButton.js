import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Consumer } from './../Context';

export function DarkModeButton() {
  return (
    <Consumer>
      {({ theme, setDarkMode, setLigthMode }) => (
        <button
          className='button DarkModeButton'
          onClick={theme === 'dark' ? setLigthMode : setDarkMode}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
      )}
    </Consumer>
  );
}
