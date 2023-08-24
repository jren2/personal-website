/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';

function About() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          reveals[i].classList.add('enterFade');
        }
      }

      const type = document.querySelectorAll('.typeDisappear');
      for (let i = 0; i < type.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = type[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          type[i].classList.add('typeAnimation');
        }
      }
    }

    window.addEventListener('scroll', reveal);
  }, []);
  return (
    <div id="about" className="bg-zinc-800">
        &nbsp;
      <div className="flex xs:flex-col lg:flex-row h-fit xs:px-24 lg:px-40 xl:px-56 py-24 gap-16 text-main-teal">
        <div id="am-text" className="h-fit w-11/12 xs:text-center lg:text-left xs:m-auto lg:-mt-2">
          <div className="offsetSubtitle relative text-slate-200 text-3xl items-center w-fit xs:m-auto lg:ml-16 pb-6 font-medium tracking-wide">
            <div style={{ '--shift': '150px', '--duration': '0.25s', '--delay': '0.2s' }} className="typeDisappear absolute w-full h-full bg-zinc-800" />
            About Me
          </div>
          <p style={{ '--delay': '0.2s', '--slideDuration': '0.3s' }} className="text-slate-300 slideUp translate-y-5 opacity-0">
            <span>
              Hi! I&#39;m Jason Ren, an undergraduate senior and first year Master's student studying CIS at the University of Pennsylvania!
            </span>
            <span>
                &nbsp;My interest in computer science was born from multiple game dev summer camps more than a decade ago which opened my mind to the world of coding!
            </span>
          </p>
          <br />
          <p style={{ '--delay': '0.28s', '--slideDuration': '0.3s' }} className=" text-slate-300 slideUp translate-y-5 opacity-0">
            <span>
              Fast forwarding to today, I remain passionate about solving challenging problems within software and web development for seamless user experiences.
            </span>
            <span>
                &nbsp;I am always exploring new designs and concepts while seeking out all types of opportunities to grow a vast programming background!
            </span>
          </p>
          <br />
          <p style={{ '--delay': '0.36s', '--slideDuration': '0.3s' }} className=" text-slate-300 slideUp translate-y-5 opacity-0">
            <span>
              Beyond programming, I enjoy playing all casual or competitive sports - including soccer, which I have been playing since I was 6 years old!
            </span>
            <span>
              &nbsp;I am also an avid music lover (both as a listener and as a musician) which has led me to being a violinist currently for the Penn Symphony Orchestra and previously for the
              Philadelphia Youth Orchestra!
            </span>
          </p>
        </div>
        <div id="am-picture" style={{ '--delay': '0.4s' }} className="reveal opacity-0 rotate-6 h-fit w-7/12 hover:rotate-0 duration-300 m-auto">
          <img alt="headshot" className="rounded-3xl" src={require('./images/option.webp')} />
        </div>
      </div>
    </div>
  );
}

export default About;
