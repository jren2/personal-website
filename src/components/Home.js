/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'

const Home = () => (
  <>
    <div className="relative">
      <div className="h-screen px-36 py-16 grid grid-cols-2 gap-4">
        <div className="mt-16 z-10">
          <div className="text-slate-300 tracking-wide">
            Hello! My name is,
          </div>
          <div className="text-slate-100 text-8xl font-bold my-6 tracking-wide hover:text-teal-400 duration-300">
            Jason Ren
          </div>
          <div className="text-slate-400 w-96 text-base tracking-wide">
            I&apos;m a CS student with interests and experience in software engineering, web development and  &nbsp; data analysis!
          </div>
        </div>
        <div className="text-slate-100 text-center items-center z-10">
          <img alt="cat picture" className="hover:rotate-180 duration-300 rounded-full mx-auto" width="500" height="400" src={require('./images/philly.png')} />
          <div className="mt-14 items-center text-center mr-3">
            <a href="https://firebasestorage.googleapis.com/v0/b/jason-ren.appspot.com/o/JasonRenResume.pdf?alt=media&token=f7698dfe-0626-466e-85e7-de50350ce0bd" target="_blank" className=" m-10 p-4 rounded-lg hover:bg-teal-400/25 duration-300 text-teal-400 border-teal-400 border-2" rel="noreferrer">
              Resume
            </a>

            <a href="https://github.com/jren2" target="_blank" className=" hover:bg-teal-400/25 duration-300 m-10 p-4 rounded-lg text-teal-400 border-teal-400 border-2" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/jason-ren-89855b203/" target="_blank" className=" hover:bg-teal-400/25 duration-300 m-10 p-4 rounded-lg text-teal-400 border-teal-400 border-2" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <div />
    </div>
  </>
)

export default Home
