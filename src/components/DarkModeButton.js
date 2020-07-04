import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export function DarkModeButton({ isDarkMode }) {
  return (
    <button className='button DarkModeButton'>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </button>
  );
}
