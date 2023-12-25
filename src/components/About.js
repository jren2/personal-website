import React from 'react';
import headshot from './images/option.webp';

const paragraphs = [
  "Hi! I'm Jason Ren, an undergraduate senior + first year Master's student studying CIS at UPenn. My passion for computer science was born from multiple game dev summer camps more than a decade ago which opened my mind to the world of coding!",
  "Fast forwarding to today, I'm excited about solving challenging problems through software and web development for seamless user experiences. I am always exploring new concepts and opportunities to grow a vast problem solving background!",
  "Beyond programming, I've been playing soccer since I was 6 years old and am also an avid music lover! My favorite artist right now is Laufey and my favorite instrument is the violin (currently playing for the Penn Symphony Orchestra)!",
];

function About() {
  return (
    <div className="bg-white-background px-32">
      <div className="w-full h-5 border-1 border-t-0 border-grid" />
      <div className="w-full h-20 flex flex-row">
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
        <div className="relative w-full flex items-center px-10 text-3xl font-medium mx-auto border-b-[1px] border-grid">
          <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
          </div>
          <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-white-background z-10" />
          <div id="about" className="group relative cursor-default w-fit overflow-hidden">
            About Me
            <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
          </div>
        </div>
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
      </div>
      <div className="flex xs:flex-col lg:flex-row h-fit text-off-black">
        <div className="w-20 flex-shrink-0 border-1 border-gray-500/40 border-t-0" />
        <div className="p-10 flex flex-row gap-12 border-b-1 border-grid">
          <div id="am-text" className="h-fit w-1/2 text-base xs:text-center lg:text-left lg:-mt-2">
            {
                paragraphs.map((paragraph, index) => (
                  <>
                    <p
                      key={paragraph}
                      className="text-off-black"
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
            className="group relative w-1/3 h-fit m-auto"
          >
            <img loading="lazy" alt="headshot" src={headshot} />
            <div className="group-hover:top-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-r-[1px] border-r-black" />
            <div className="group-hover:right-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-t-[1px] border-t-black" />
            <div className="group-hover:left-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-b-[1px] border-b-black" />
            <div className="group-hover:bottom-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-l-[1px] border-l-black" />
          </div>
        </div>
        <div className="w-20 flex-shrink-0 border-1 border-grid border-t-0 relative" />
      </div>
    </div>
  );
}

export default About;
