/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'

const Home = () => (
  <>
    <div className="relative xs:h-fit mb-3">
      <div className="flex flex-row justify-between xs:px-24 md:px-36 xs:flex-col xs:pb-12 lg:py-16 lg:flex-row">
        <div className="mt-16 z-10 xs:text-center xs:justify-center lg:justify-start lg:text-left ">
          <div className="text-slate-300 tracking-wide xs:m-auto lg:m-0">
            Hello! My name is,
          </div>
          <div className="text-slate-100 text-8xl xs:my-6 xs:m-auto font-bold tracking-wide hover:text-teal-400 duration-300">
            Jason Ren
          </div>
          <div className="text-slate-400 w-auto text-base tracking-wide xs:m-auto md:w-96 lg:m-0 lg:w-96">
            I&apos;m a CS student with interests and experience in software engineering, web development and data analysis!
          </div>
        </div>
        <div className="text-slate-100 text-center items-center z-10 xs:mt-12 lg:mt-0">
          <img alt="cat picture" className="hover:rotate-180 duration-300 rounded-full mx-auto mlg:w-80" width="500" height="400" src={require('./images/philly.png')} />
          <div className="mr-3 mt-14">
            <a href="https://firebasestorage.googleapis.com/v0/b/jason-ren.appspot.com/o/JasonRenResume.pdf?alt=media&token=f7698dfe-0626-466e-85e7-de50350ce0bd" target="_blank" className="m-auto p-4 rounded-lg hover:bg-teal-400/25 duration-300 text-teal-400 border-teal-400 border-2" rel="noreferrer">
              Resume
            </a>

            <a href="https://github.com/jren2" target="_blank" className=" hover:bg-teal-400/25 duration-300 xs:mx-4 sm:mx-20 p-4 rounded-lg text-teal-400 border-teal-400 border-2" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/jason-ren-89855b203/" target="_blank" className=" hover:bg-teal-400/25 duration-300 m-auto p-4 rounded-lg text-teal-400 border-teal-400 border-2" rel="noreferrer">
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
