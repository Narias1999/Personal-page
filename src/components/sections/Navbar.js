import React from 'react';
import { DarkModeButton } from './../DarkModeButton';
import { LanguageButton } from './../LanguageButton';
import { NavLink } from './../NavLink';
import logo from './../../assets/images/logo.svg';
import './../../styles/components/sections/Navbar.scss';

export function Navbar({ links }) {
  return (
    <nav className='Navbar'>
      <div className='Navbar-logo'>
        <NavLink to='#home'>
          <img src={logo} alt='Nicolás Arias logo' />
        </NavLink>
      </div>
      <div className='Navbar-right'>
        <ul className='Navbar-items'>
          <li className='Navbar-item'>
            <NavLink to='#achievements'>{links.achievements}</NavLink>
          </li>
          <li className='Navbar-item'>
            <NavLink to='#background'>{links.background}</NavLink>
          </li>
          <li className='Navbar-item'>
            <NavLink to='#skills'>{links.skills}</NavLink>
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
