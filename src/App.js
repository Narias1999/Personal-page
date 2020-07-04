import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Achievements } from './components/sections/Achievements';
import { Background } from './components/sections/Background';
import { Skills } from './components/sections/Skills';

import './styles/App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievements />
      <Background />
      <Skills />
    </>
  );
}

export default App;
