import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DarkModeButton } from './../DarkModeButton';
import { LanguageButton } from './../LanguageButton';
import { NavLink } from './../NavLink';
import logo from './../../assets/images/logo.svg';
import './../../styles/components/sections/Navbar.scss';

export function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <nav className={`Navbar ${isOpen ? 'open' : ''}`}>
      <button className='Navbar-burger' onClick={toggleOpen}>
        <FontAwesomeIcon size='lg' icon={isOpen ? faTimes : faBars} />
      </button>
      <div className='Navbar-logo' onClick={closeNav}>
        <NavLink to='#home'>
          <img src={logo} alt='Nicolás Arias logo' />
        </NavLink>
      </div>
      <div className='Navbar-right'>
        <ul className='Navbar-items'>
          <li className='Navbar-item' onClick={closeNav}>
            <NavLink to='#achievements'>{links.achievements}</NavLink>
          </li>
          <li className='Navbar-item' onClick={closeNav}>
            <NavLink to='#background'>{links.background}</NavLink>
          </li>
          <li className='Navbar-item' onClick={closeNav}>
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
