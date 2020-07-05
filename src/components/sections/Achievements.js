import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faAward } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './../../styles/components/sections/Achievements.scss';

const icons = { faSuitcase, faAward, faGithub };

export function Achievements({ achievements }) {
  return (
    <div className='Achievements' id='achievements'>
      {achievements.map(({ icon, title, subtitle }, index) => (
        <div className='AchievementItem' key={index}>
          <div className='AchievementItem-icon'>
            <FontAwesomeIcon size='2x' icon={icons[icon]} />
          </div>
          <div className='AchievementItem-info'>
            <h3 className='AchievementItem-title'>{title}</h3>
            <h5 className='AchievementItem-subtitle'>{subtitle}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
