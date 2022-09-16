/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { firebaseLink } from '../config'

const Home = () => (
  <>
    <div>
      <div className="relative xs:h-fit">
        <div className="flex flex-row justify-between xs:px-24 md:px-36 xs:flex-col xs:pb-12 lg:py-16 lg:flex-row">
          <div className="mt-16 z-10 xs:text-center xs:justify-center lg:justify-start lg:text-left ">
            <div className="text-slate-300 tracking-wide xs:m-auto lg:m-0">
              Hello! My name is,
            </div>
            <div className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-300 to-teal-500 text-8xl xs:my-6 xs:m-auto font-bold tracking-wide">
              Jason Ren
            </div>
            <div className="text-slate-400 w-auto text-base tracking-wide xs:m-auto md:w-96 lg:m-0 lg:w-96">
              I&apos;m a CS student with interests and experience in software engineering, web development and data analysis!
            </div>
            <div className="xs:mt-8">
              <a href={firebaseLink} target="_blank" className="relative border-teal-400 border-2 inline-flex items-center justify-start px-9 p-3 overflow-hidden transition-all rounded-xl group" rel="noreferrer">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-blue-400 via-teal-500 to-teal-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="absolute -left-10 flex items-center justify-start w-6 h-6 duration-300 transform  group-hover:translate-x-12 ease">
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
                    <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z" />
                  </svg>
                </span>
                <span className="relative w-full text-teal-400 transition-colors duration-300 text-lg font-normal tracking-wider group-hover:text-zinc-800">Resume</span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
                  <svg className="w-5 h-5 mt-0.5" stroke="#27272a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              <a href="https://github.com/jren2" target="_blank" className="relative xs:mx-4 xs:my-4 xl:my-0 sm:mx-8 border-teal-400 border-2 inline-flex items-center justify-start px-9 p-3 overflow-hidden transition-all rounded-xl group" rel="noreferrer">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-blue-400 via-teal-500 to-teal-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="absolute -left-10 flex items-center justify-start w-6 h-6 duration-300 transform  group-hover:translate-x-12 ease">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" cursorshover="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" cursorshover="true" />
                  </svg>
                </span>
                <span className="relative w-full text-teal-400 transition-colors duration-300 text-lg font-normal tracking-wider group-hover:text-zinc-800">GitHub</span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
                  <svg className="w-5 h-5 mt-0.5" stroke="#27272a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              <a href="https://www.linkedin.com/in/jason-ren-89855b203/" target="_blank" className="relative border-teal-400 border-2 inline-flex items-center justify-start px-9 p-3 overflow-hidden transition-all rounded-xl group" rel="noreferrer">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-blue-400 via-teal-500 to-teal-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="absolute -left-10 flex items-center justify-start w-5 h-5 duration-300 transform  group-hover:translate-x-12 ease">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin" cursorshover="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" cursorshover="true" />
                    <rect x="2" y="9" width="4" height="12" cursorshover="true" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span className="relative w-full text-teal-400 transition-colors duration-300 text-lg font-normal tracking-wider group-hover:text-zinc-800">LinkedIn</span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
                  <svg className="w-5 h-5 mt-0.5" stroke="#27272a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="text-slate-100 text-center items-center z-10 xs:mt-12 lg:mt-0">
            <img alt="cat picture" className="hover:rotate-12 duration-300 rounded-full mx-auto mlg:w-80" width="500" height="400" src={require('./images/philly.png')} />
          </div>
        </div>
        <div className="bg-zinc-800">
          <svg className="-translate-y-2" width="full" height="41" viewBox="0 0 1514 41" fill="#1f2937" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40.5V0.5H753H1513.5V40.5C1242.5 -36.5003 1122.96 40.5 937 40.5C772 40.5 217.5 -34 0 40.5Z" fill="#18181B" />
          </svg>
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
    </div>
  </>
)

export default Home