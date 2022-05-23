/* eslint-disable import/prefer-default-export */
import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Overlay from './components/Overlay'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

import './index.css'

export function App() {
  return (
    <>
      <div id="home" />
      <div className="bg-zinc-900">
        <Overlay />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}
