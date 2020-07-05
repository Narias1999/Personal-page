import React from 'react';
import { BackgroundCard } from './../BackgroundCard';
import './../../styles/components/sections/Background.scss';

export function Background({ background }) {
  return (
    <div className='Background' id='background'>
      <h2 className='title'>{background.title}</h2>
      <div className='Background-sections'>
        {Object.values(background.data).map(({ title, data }) => (
          <div className='Background-section' key={title}>
            <h3 className='Background-section-title'>{title}</h3>
            {data.map((backgroundItem, index) => (
              <BackgroundCard {...backgroundItem} key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
