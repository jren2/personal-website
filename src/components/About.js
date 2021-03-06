/* eslint-disable global-require */
import React from 'react'

const About = () => (
  <>
    <div id="about" className="bg-zinc-800">
      &nbsp;
      <div className="flex xs:flex-col lg:flex-row h-fit xs:px-24 lg:px-40 xl:px-56 py-24 gap-8 text-teal-400">
        <div className="h-fit w-11/12 xs:text-center lg:text-left xs:m-auto lg:-mt-2">
          <div className="relative  text-slate-200 text-3xl px-4 ml-8 pb-6 font-medium tracking-wide">
            1. About Me
            {/* <div className="absolute bottom-10 -left-8 border-b-zinc-700 border-b-2 h-2 w-8 font-light" />
            <div className="absolute bottom-10 right-64 border-b-zinc-700 border-b-2 h-2 w-32 font-light" /> */}
          </div>
          <p className="text-slate-300">
            Hi! I&#39;m Jason Ren, an undergraduate studying CIS at the University of Pennsylvania!
            My interest in computer science was born from multiple summer camps more than a decade ago - mainly about game dev -
            which opened my mind to the world of coding!
          </p>
          <br />
          <p className="text-slate-300">
            Fast forward to today and I am passionate about solving challenging problems within
            software development and web development to provide seamless user experiences through
            projects and real world interaction.
          </p>
          <br />
          <p className="text-slate-300">
            I am still exploring different designs and concepts and am constantly seeking out all
            types of opportunities to gain a more expansive programming experience!
          </p>
        </div>
        <div className="rotate-6 h-fit w-7/12 hover:rotate-0 duration-300 m-auto">
          <img alt="philly image" className="rounded-3xl" src={require('./images/option.png')} />
        </div>
      </div>
    </div>
  </>
)

export default About
