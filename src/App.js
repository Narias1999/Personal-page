import React from 'react';

import { Provider, Consumer } from './Context';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Achievements } from './components/sections/Achievements';
import { Background } from './components/sections/Background';
import { Skills } from './components/sections/Skills';
import data from './data.json';

import './styles/App.scss';

function App() {
  return (
    <Provider>
      <Consumer>
        {({ theme, language }) => {
          const { profile, achievements, background, skills, links } = data[
            language
          ];
          return (
            <div className={`App ${theme}`}>
              <Navbar links={links} />
              <Hero profile={profile} />
              <Achievements achievements={achievements} />
              <Background background={background} />
              <Skills skills={skills} />
            </div>
          );
        }}
      </Consumer>
    </Provider>
  );
}

export default App;
