/* eslint-disable import/prefer-default-export */
import React from "react"
import { useState } from "react"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Overlay from "./components/Overlay"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Underlay from './components/Underlay'

import "./index.css"

export function App() {
  const [sidebar, setSidebar] = useState(false)
  
  return (
    <>
      <div id="underlay-wrapper" className="-z-10 w-[26vw] h-screen bg-[#f1efe6] pt-6 fixed text-white">
        <Underlay sidebar={sidebar} setSidebar={setSidebar}/>
      </div>
      <Overlay sidebar={sidebar} setSidebar={setSidebar}/>
      <div id="body" className="duration-500 bg-zinc-900">
        <div id="home" />
        {/* <div className="intro-overlay fixed w-full h-full bg-black z-50"></div>
        <div className="intro-overlay text-center mx-[32vw] my-[20vh] w-full fixed z-50">
          <Name open className="mx-auto z-50" />
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
  )
}
