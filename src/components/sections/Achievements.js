import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './../../styles/components/sections/Achievements.scss';

const achievements = [
  {
    title: '3+ Years',
    subtitle: 'Experience',
    icon: faSuitcase,
  },
  {
    title: '50+ Github',
    subtitle: 'repositories',
    icon: faGithub,
  },
  {
    title: '6+ Personal Projects',
    subtitle: 'completed',
    icon: faAward,
  },
];

export function Achievements() {
  return (
    <div className='Achievements'>
      {achievements.map((achievement, index) => (
        <div className='AchievementItem' key={index}>
          <div className='AchievementItem-icon'>
            <FontAwesomeIcon size='2x' icon={achievement.icon} />
          </div>
          <div className='AchievementItem-info'>
            <h3 className='AchievementItem-title'>{achievement.title}</h3>
            <h5 className='AchievementItem-subtitle'>{achievement.subtitle}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
