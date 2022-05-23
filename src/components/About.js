import { useState } from "react"

const About = () => {

  return (
    <>
      <div className="bg-zinc-800">
        <div id="about" className="h-fit px-56 py-24 grid grid-cols-5 gap-8 text-teal-400">
          <div className=" col-span-3 h-fit">
            <div className=" text-slate-200 text-3xl px-4 pb-6 font-medium tracking-wide">
              About Me
            </div>
            <p className="text-slate-300">
              Hi! I'm Jason Ren, an undergraduate studying CIS at the University of Pennsylvania!
              My interest in computer science was born from multiple summer camps - mainly about game dev -
              which opened my mind to the world of coding!
            </p>
            <br></br>
            <p className="text-slate-300">
              Fast forward to today and I am passionate about solving challenging problems within
              software development and web development to provide seamless user experiences through
              projects and real world interaction.
            </p>
            <br></br>
            <p className="text-slate-300">
              I am still exploring different designs and concepts and am constantly seeking out all
              types of opportunities to gain a more expansive programming experience!
            </p>
          </div>
          <div className="rotate-6 h-fit hover:rotate-0 duration-300  col-span-2 ">
            <img className="rounded-3xl" src={require("./images/option.png")}></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default About