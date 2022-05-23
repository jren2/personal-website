import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Overlay from './components/Overlay'

import './index.css'
import { useEffect } from 'react'

export function App() {

  return (
    <>
      <div class="bg-zinc-900">
        <Overlay />
        <Navbar />
        <Home />
        <About />
        <Skills />
      </div>
    </>
  )
}