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
import IntroAnimation from './components/Intro';

import './index.css';

export function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div id="underlay-wrapper" className="-z-10 w-[26vw] h-screen bg-[#f1efe6] border-r-1 border-grid pt-6 fixed text-white">
        <Underlay sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <Overlay sidebar={sidebar} setSidebar={setSidebar} />
      <div id="body" className="font-custom duration-500">
        <div id="home" />
        {/* <div className="intro-overlay fixed w-full h-full bg-white-background z-50" />
        <div className="intro-overlay text-center mx-[32vw] my-[20vh] w-full fixed z-50">
          <IntroNameAnimation open className="mx-auto z-50" />
        </div> */}
        <div className="intro-textAnimation w-0 overflow-hidden ml-[50vw] mt-[30vh] font-medium text-8xl fixed z-50">
          Jason
        </div>
        <div className="intro-dotAnimation w-full h-full z-50 fixed overflow-hidden">
          <div className="intro-slashAnimation w-full h-full fixed bg-black z-50" />
        </div>
        <div className="intro-mask fixed w-full h-full bg-white-background z-40" />
        {/* <div className="text-center my-[20vh] w-full fixed z-50">
          <IntroAnimation className="mx-auto z-50" />
        </div> */}
        {/* <Navbar /> */}
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
