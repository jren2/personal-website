/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Overlay from './components/Overlay';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Underlay from './components/Underlay';

import './index.css';

export function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div id="underlay-wrapper" className={`${sidebar ? 'z-10 duration-[1500ms] ' : '-z-10 duration-0'} font-custom w-[26vw] h-screen bg-[#f1efe6] border-r-1 border-grid pt-6 fixed text-white`}>
        <Underlay sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <Overlay sidebar={sidebar} setSidebar={setSidebar} />
      <div className="intro-textAnimation w-0 overflow-hidden ml-[50vw] mt-[30vh] font-medium text-8xl fixed z-50">
        Jason
      </div>
      <div className="intro-dotAnimation w-full h-full z-50 fixed overflow-hidden">
        <div className="intro-slashAnimation w-full fixed h-full bg-black z-40" />
      </div>
      <div className="intro-mask fixed w-full h-full bg-white-background z-40" />
      <div id="body" className={`${sidebar ? 'translate-x-[26vw]' : '-translate-x-0'} font-custom duration-500`}>
        <div id="home" className="w-1 h-1 absolute" />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
