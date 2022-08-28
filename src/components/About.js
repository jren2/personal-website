/* eslint-disable global-require */
import React from 'react'

const About = () => (
  <>
    <div id="about" className="bg-zinc-800">
      &nbsp;
      <div className="flex xs:flex-col lg:flex-row h-fit xs:px-24 lg:px-40 xl:px-56 py-24 gap-16 text-teal-400">
        <div className="h-fit w-11/12 xs:text-center lg:text-left xs:m-auto lg:-mt-2">
          <p className="offsetSubtitle text-slate-200 text-3xl items-center w-fit xs:m-auto lg:ml-16 pb-6 font-medium tracking-wide">
            About Me
          </p>
          <p className="text-slate-300">
            Hi! I&#39;m Jason Ren, an undergraduate studying CIS at the University of Pennsylvania!
            My interest in computer science was born from multiple game dev summer camps more than a decade ago
            which opened my mind to the world of coding!
          </p>
          <br />
          <p className="text-slate-300">
            Fast forwarding to today, I remain passionate about solving challenging problems within
            software and web development for seamless user experiences. I am always
            exploring new designs and concepts while seeking out all
            types of opportunities to grow a vast programming background!
          </p>
          <br />
          <p className="text-slate-300">
            Beyond programming, I enjoy playing all casual or competitive sports - including soccer, which I have
            been playing since I was 6 years old! I am also an avid music lover (both as a listener and as a musician) which has
            led me to being a violinist currently for the Penn Symphony Orchestra and previously for the Philadelphia Youth Orchestra!
          </p>
        </div>
        <div className="rotate-6 h-fit w-7/12 hover:rotate-0 duration-300 m-auto">
          <img alt="headshot" className="rounded-3xl" src={require('./images/option.png')} />
        </div>
      </div>
    </div>
  </>
)

export default About
