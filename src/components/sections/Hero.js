import React from 'react';

import photo from './../../assets/images/nicolas.jpg';
import './../../styles/components/sections/Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export function Hero() {
  return (
    <div className='Hero'>
      <figure className='Hero-image'>
        <img src={photo} alt='Nicolás Arias' />
      </figure>
      <div className='Hero-info'>
        <h3 className='Hero-hello'>Hello!</h3>
        <h1 className='Hero-name'>I'm Nicolás</h1>
        <p className='Hero-description'>
          Fullstack Developer focusend in frontend. Currently Software Engineer
          at Bismark Colombia. Experience in Frontend Development using Vue,
          AngularJs and React. In Backend with NodeJs and GraphQl. Lifelong
          learner, currently learning computer science fundamentals.
        </p>
        <button className='button icon Hero-download'>
          <FontAwesomeIcon icon={faDownload} />
          <span>descargar cv</span>
        </button>
      </div>
    </div>
  );
}
