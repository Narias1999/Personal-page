import React from 'react';
import './../styles/components/SkillCard.scss';

export function SkillCard({ name, level }) {
  return (
    <div className='SkillCard'>
      <h3 className='SkillCard-name'>{name}</h3>
      <p className='SkillCard-level'>{level}</p>
    </div>
  );
}
