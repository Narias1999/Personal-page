import React from 'react';
import { BackgroundCard } from './../BackgroundCard';
import './../../styles/components/sections/Background.scss';

const backgroundData = {
  experience: {
    title: 'Experience',
    data: [
      {
        institution: 'Bismark Colombia',
        years: 'Nov 2018 - Present',
        description:
          "Bismark Colombia is a telecomunicatios and IoT company industry's leader in Colombia. There I develope high quality user faced software in an agile and highly talented team.\nIn my daily work, I have to use technologies like JavaScript ,HTML, CSS and AngularJs for web apps. NodeJs for microservices, IoT agents and AWS lambdas. Also, I have to do development of new features of an already existed Android app.\nAll of that integrated with the cloud platform Cumulocity IoT.",
        position: 'Software Engineer',
      },
      {
        institution: 'Qbits Ing.',
        years: 'Jan 2017 - Oct 2018',
        description:
          'Developing end to end web and mobile applications as freelancers in a small but highly talented team.\nStack used ES6, VueJs, React Native, NodeJs, MongoDB and GraphQL.',
        position: 'Fullstack Engineer',
      },
    ],
  },
  education: {
    title: 'Education',
    data: [
      {
        institution: 'SENA',
        years: '2017 - 2019',
        position: 'Associate Degree in Software Development',
        description:
          'Technical formation in software development, learn about the whole process of building large scale software. Design Patterns, OOP, web and mobile development.',
      },
    ],
  },
};

export function Background() {
  return (
    <div className='Background'>
      <h2 className='title'>My Background</h2>
      <div className='Background-sections'>
        {Object.values(backgroundData).map(({ title, data }) => (
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
