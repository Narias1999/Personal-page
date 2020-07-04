import React from 'react';
import './../styles/components/BackgroundCard.scss';

export function BackgroundCard({ institution, years, position, description }) {
  return (
    <div className='BackgroundCard'>
      <h3 className='BackgroundCard-title'>{position}</h3>
      <span className='BackgroundCard-subtitle'>
        {institution} ({years})
      </span>
      {description.split('\n').map((paragraph, index) => (
        <p className='BackgroundCard-description' key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
