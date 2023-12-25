import React from 'react';
import headshot from './images/option.webp';

const paragraphs = [
  "Hi! I'm Jason Ren, an undergraduate senior + first year Master's student studying CIS at UPenn! My interest in computer science was born from multiple game dev summer camps more than a decade ago which opened my mind to the world of coding!",
  "Fast forwarding to today, I'm passionate about solving challenging problems through software and web development for seamless user experiences. I am always exploring new concepts and opportunities to grow a vast problem solving background!",
  "Beyond programming, I've been playing soccer since I was 6 years old and am also an avid music lover! My favorite artist right now is Laufey and my favorite instrument is the violin (currently playing for the Penn Symphony Orchestra)!",
];

function About() {
  return (
    <div id="about" className="bg-white-background px-32">
      <div className="w-full h-5 border-1 border-t-0 border-grid" />
      <div className="w-full h-20 flex flex-row">
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
        <div className="w-full flex items-center px-10 text-4xl font-medium mx-auto border-b-[1px] border-grid">
          About Me
        </div>
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
      </div>
      <div className="flex xs:flex-col lg:flex-row h-fit text-off-black">
        <div className="w-20 flex-shrink-0 border-1 border-gray-500/40 border-t-0" />
        <div className="p-10 flex flex-row gap-12 border-b-1 border-grid">
          <div id="am-text" className="h-fit w-1/2 xs:text-center lg:text-left lg:-mt-2">
            {/* <div className="offsetSubtitle relative text-off-black text-3xl items-center w-fit xs:m-auto lg:ml-16 pb-6 font-medium tracking-wide">
              <div
                style={{ '--shift': '150px', '--duration': '0.25s', '--delay': '0.2s' }}
                className="typeDisappear absolute w-full h-full bg-white-background"
              />
              About Me
            </div> */}
            {
                paragraphs.map((paragraph, index) => (
                  <>
                    <p
                      key={paragraph}
                      style={{ '--delay': `${0.2 + (index * 0.08)}s`, '--slideDuration': '0.3s' }}
                      className="text-off-black slideUp translate-y-5 opacity-0"
                    >
                      <span>
                        {paragraph}
                      </span>
                    </p>
                    <br />
                  </>
                ))
              }
          </div>
          <div
            id="am-picture"
            style={{ '--delay': '0.4s' }}
            className="reveal group relative w-1/3 opacity-0 h-fit m-auto"
          >
            <img alt="headshot" src={headshot} />
            <div className="group-hover:top-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-r-[1px] border-r-black" />
            <div className="group-hover:right-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-t-[1px] border-t-black" />
            <div className="group-hover:left-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-b-[1px] border-b-black" />
            <div className="group-hover:bottom-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-l-[1px] border-l-black" />
          </div>
        </div>
        <div className="w-20 flex-shrink-0 border-1 border-grid border-t-0" />
      </div>
    </div>
  );
}

export default About;
