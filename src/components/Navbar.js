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
      if (lastScrollY < window.scrollY) {
        nav.classList.add('nav-hide')
      } else {
        nav.classList.remove('nav-hide')
      }
      lastScrollY = window.scrollY
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
      <nav id="nav" className="nav backdrop-blur bg-zinc-900/80 sticky top-0 items-center z-10">
        <div className="grid grid-cols-2 shadow-zinc-900 shadow-md">
          <a href="#home" className="items-center ml-6 mt-6 h-8 w-8 hover:rotate-0 duration-300">
            <img alt="logo" lassName="rounded-3xl" src={require('./images/j.png')} />
          </a>
          <div className="flex items-center h-20 tracking-wide">
            <a href="#about" className="text-slate-200 mx-4 hover:duration-200 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 px-1 py-1 text-base font-normal" aria-current="page">About</a>

            <a href="#skills" className="text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 mx-4 px-1 py-1 text-base font-normal">Skills</a>

            <a href="#experience" className="text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 mx-4 px-1 py-1 text-base font-normal">Experience</a>

            <a href="#" className="text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 mx-4 px-1 py-1 text-base font-normal">Portfolio</a>

            <a href="#" className="text-slate-200 hover:duration-200 active:text-cyan-400 hover:border-b-cyan-300 hover:text-cyan-300 hover:border-b-4 mx-4 px-1 py-1 text-base font-normal">Contact Me</a>

            <a href="#" className="mx-4 py-3 px-7 border-teal-400 border-2 rounded-full text-right text-teal-400 duration-300 hover:text-slate-800 active:bg-teal-500 active:border-teal-500 font-normal text-base hover:bg-teal-400">
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
