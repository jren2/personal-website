/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Contact = () => (
  <>
    <div>
      <div id="contact" className="bg-zinc-900 pt-10 pb-20 px-20">
        <div className="mb-10 text-center text-3xl font-medium tracking-wider text-slate-200">Contact</div>
        <div className="mb-10 text-center text-base font-medium tracking-wider text-slate-400"> Feel free to reach out to me through any of the resources below!</div>
        <div className="text-center mt-14">
          <a href="mailto:jren2@seas.upenn.edu" className=" m-10 p-4 rounded-lg hover:bg-teal-400/25 duration-300 text-teal-400 border-teal-400 border-2">
            jren2@seas.upenn.edu
          </a>
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
  </>
)

export default Contact
