import React from 'react';

import photo from './../../assets/images/nicolas.jpg';
import './../../styles/components/sections/Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export function Hero({ profile }) {
  return (
    <div className='Hero' id='home'>
      <figure className='Hero-image'>
        <img src={photo} alt='Nicolás Arias' />
      </figure>
      <div className='Hero-info'>
        <h3 className='Hero-hello'>{profile.greet}</h3>
        <h1 className='Hero-name'>{profile.title}</h1>
        <p className='Hero-description'>{profile.sumary}</p>
        <button className='button icon Hero-download'>
          <FontAwesomeIcon icon={faDownload} />
          <span>{profile.button}</span>
        </button>
      </div>
    </div>
  );
}
