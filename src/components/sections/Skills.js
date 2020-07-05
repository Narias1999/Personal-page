import React from 'react';
import { SkillCard } from './../SkillCard';
import './../../styles/components/sections/Skills.scss';

export function Skills({ skills }) {
  return (
    <div className='Skills' id='skills'>
      <h2 className='title'>{skills.title}</h2>
      <div className='Skills-sections'>
        {Object.values(skills.data).map(({ name, data }, index) => (
          <div key={index} className='SkillsSection'>
            <h3 className='SkillsSection-title'>{name}</h3>
            <div className='SkillsSection-container'>
              {data.map((skill, index) => (
                <SkillCard {...skill} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
