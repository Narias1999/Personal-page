import React from 'react';
import { SkillCard } from './../SkillCard';
import './../../styles/components/sections/Skills.scss';

const skillsInfo = {
  skills: {
    name: 'Skills',
    data: [
      { name: 'Frontend Development', level: '4 years' },
      { name: 'Backend Development', level: '3 years' },
      { name: 'Algorithms / Data structures', level: 'Learning' },
    ],
  },
  languages: {
    name: 'Languages',
    data: [
      {
        name: 'Spanish',
        level: 'Native speaker',
      },
      {
        name: 'English',
        level: 'Conversational',
      },
    ],
  },
};

export function Skills() {
  return (
    <div className='Skills'>
      <h2 className='title'>What am I good at?</h2>
      <div className='Skills-sections'>
        {Object.values(skillsInfo).map(({ name, data }, index) => (
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
