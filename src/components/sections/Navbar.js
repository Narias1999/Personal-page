import React from 'react';
import { DarkModeButton } from './../DarkModeButton';
import { LanguageButton } from './../LanguageButton';
import './../../styles/components/sections/Navbar.scss';

export function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='Navbar-logo'>
        <img src='' alt='' />
      </div>
      <div className='Navbar-right'>
        <ul className='Navbar-items'>
          <li className='Navbar-item'>
            <a href='#achievements'>Achievements</a>
          </li>
          <li className='Navbar-item'>
            <a href='#background'>Background</a>
          </li>
          <li className='Navbar-item'>
            <a href='#skills'>Skills</a>
          </li>
        </ul>
        <div className='Navbar-actions'>
          <LanguageButton />
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
}
