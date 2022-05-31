/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Contact = () => (
  <>
    <div>
      <div id="contact" className="bg-zinc-900 m-auto w-fit pt-10 pb-20 px-20">
        <div className="mb-10 text-center text-3xl font-medium tracking-wider text-slate-200">Contact</div>
        <div className="mb-10 text-center text-base font-medium tracking-wider text-slate-400"> Feel free to reach out to me through any of the resources below!</div>
        <div className="text-center mt-14 flex xs:flex-col md:flex-row">
          <div className="flex xs:flex-col m-auto sm:flex-row">
            <a href="mailto:jren2@seas.upenn.edu" className="xs:my-4 sm:mr-4 md:my-0 xs:w-fit xs:m-auto md:w-fit p-4 rounded-lg hover:bg-teal-400/25 duration-300 text-teal-400 border-teal-400 border-2">
              jren2@seas.upenn.edu
            </a>
            <a href="https://firebasestorage.googleapis.com/v0/b/jason-ren.appspot.com/o/JasonRenResume.pdf?alt=media&token=f7698dfe-0626-466e-85e7-de50350ce0bd" target="_blank" className="xs:my-4 md:my-0 xs:m-auto ml-10 mr-5 p-4 rounded-lg hover:bg-teal-400/25 duration-300 text-teal-400 border-teal-400 border-2" rel="noreferrer">
              Resume
            </a>
          </div>
          <div className="flex xs:flex-col m-auto sm:flex-row">
            <a href="https://github.com/jren2" target="_blank" className="sm:mr-4 xs:my-4 md:my-0 xs:m-auto ml-5 mr-10 p-4 hover:bg-teal-400/25 duration-300 rounded-lg text-teal-400 border-teal-400 border-2" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/jason-ren-89855b203/" target="_blank" className="xs:m-auto xs:my-4 md:my-0  p-4 hover:bg-teal-400/25 duration-300 rounded-lg text-teal-400 border-teal-400 border-2" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Contact
