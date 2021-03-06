/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector('.nav')

    const { scrollY } = window
    let lastScrollY = scrollY

    window.addEventListener('scroll', () => {
      if (lastScrollY >= 0) {
        if (lastScrollY < window.scrollY) {
          nav.classList.add('nav-hide')
        } else {
          nav.classList.remove('nav-hide')
        }
        lastScrollY = window.scrollY
      } else {
        lastScrollY = 0
      }
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        })
      })
    })
  }, [])

  return (
    <>
      <nav id="nav" className="w-full nav backdrop-blur bg-zinc-900/80 sticky top-0 items-center z-50">
        <div className="flex flex-nowrap flex-row shadow-zinc-900 shadow-md">
          <a href="#home" className="flex flex-row ml-6 mt-6 h-8 w-8">
            <img alt="logo" lassName="rounded-3xl" src={require('./images/j.png')} />
          </a>
          <div className="flex justify-end flex-row items-center h-20 ml-auto tracking-wide">
            <a href="#about" className="xs:invisible xs:absolute md:static md:visible text-slate-200 mx-4 hover:duration-200 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 px-1 py-1 text-base font-normal" aria-current="page">About</a>

            <a href="#skills" className="text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 xs:mx-1 sm:mx-4 px-1 py-1 text-base font-normal">Skills</a>

            <a href="#experience" className="text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 xs:mx-1 sm:mx-4 px-1 py-1 text-base font-normal">Experience</a>

            <a href="#portfolio" className="text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 xs:mx-1 sm:mx-4 px-1 py-1 text-base font-normal">Portfolio</a>

            <a href="#contact" className="xs:invisible xs:absolute sm:static sm:visible truncate text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 mx-4 px-1 py-1 text-base font-normal">Contact Me</a>

            <a href="https://firebasestorage.googleapis.com/v0/b/jason-ren.appspot.com/o/JasonRenResume.pdf?alt=media&token=f7698dfe-0626-466e-85e7-de50350ce0bd" target="_blank" className="truncate mx-4 py-3 px-7 border-teal-400 border-2 rounded-full text-right text-teal-400 duration-300 hover:text-slate-800 active:bg-teal-500 active:border-teal-500 font-normal text-base hover:bg-teal-400" rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
