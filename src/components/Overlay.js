import React from "react"
import {motion} from 'framer-motion'
import { firebaseLink } from "../config";

const Overlay = ({sidebar, setSidebar}) => {
  const genericHamburgerLine = `h-[2px] w-5 my-[3px] bg-zinc-800 transition ease transform duration-300`;

  const rotate = () => {
    const v = document.getElementById("v")
    const i = document.getElementById("i")
    const e = document.getElementById("e")
    const w = document.getElementById("w")
    const s = document.getElementById("s")

    v.classList.add("-translate-y-[19px]", "-translate-x-[16px]", "-rotate-[60deg]")
    i.classList.add("-translate-y-[17px]", "-translate-x-[14px]", "-rotate-[42deg]")
    e.classList.add("-translate-y-[23px]", "-translate-x-[14px]", "-rotate-[32deg]")
    w.classList.add("-translate-y-[27px]", "-translate-x-[14px]", "-rotate-[12deg]")
    s.classList.add("-translate-y-[28px]", "-translate-x-[13px]", "rotate-[9deg]")
  
  }

  const unrotate = () => {
    const v = document.getElementById("v")
    const i = document.getElementById("i")
    const e = document.getElementById("e")
    const w = document.getElementById("w")
    const s = document.getElementById("s")

    v.classList.remove("-translate-y-[19px]", "-translate-x-[16px]", "-rotate-[60deg]")
    i.classList.remove("-translate-y-[17px]", "-translate-x-[14px]", "-rotate-[42deg]")
    e.classList.remove("-translate-y-[23px]", "-translate-x-[14px]", "-rotate-[32deg]")
    w.classList.remove("-translate-y-[27px]", "-translate-x-[14px]", "-rotate-[12deg]")
    s.classList.remove("-translate-y-[28px]", "-translate-x-[13px]", "rotate-[9deg]")
  }

  const shift = (home) => {
    if (sidebar) {
      const elements = document.querySelectorAll(".overlay-element")
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.left = "0"
      }
      const underlayWrapperElement = document.getElementById("underlay-wrapper")
      underlayWrapperElement.classList.remove("duration-[1500ms]")
      underlayWrapperElement.classList.remove("z-10")
      underlayWrapperElement.classList.add("-z-10")
      document.getElementById("body").classList.remove("translate-x-[26vw]")

      const underlayElements = document.querySelectorAll(".underlay-element")
      for (let i = 0; i < underlayElements.length; i++) {
        underlayElements[i].classList.remove("scale-100")
        underlayElements[i].classList.add("scale-95")
        underlayElements[i].classList.add("-translate-x-32")
      }
      setSidebar(!sidebar)
    } else if (!home) {
      const elements = document.querySelectorAll(".overlay-element")
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.left = "26vw"
      }
      const underlayWrapperElement = document.getElementById("underlay-wrapper")
      underlayWrapperElement.classList.add("duration-[1500ms]")
      underlayWrapperElement.classList.remove("-z-10")
      underlayWrapperElement.classList.add("z-10")

      const underlayElements = document.querySelectorAll(".underlay-element")
      for (let i = 0; i < underlayElements.length; i++) {
        underlayElements[i].classList.remove("scale-95")
        underlayElements[i].classList.remove("-translate-x-32")
        underlayElements[i].classList.add("scale-100")
      }
      document.getElementById("body").classList.add("translate-x-[26vw]")
      setSidebar(!sidebar)
      
    }
  }

  return (
    <>
      <div className="overlay-element left-0 flex duration-500 w-full flex-nowrap top-4 fixed z-50">
        <a href="#home" onClick={() => shift(true)} className="flex flex-row ml-4 h-14 w-14">
          <img alt="logo" className="rounded-3xl" src={require("./images/icons/logo.png")} />
        </a>
        <a
          href={firebaseLink}
          target="_blank"
          className="ml-auto mr-4"
          rel="noreferrer"
        >
          <p className="text-slate-300 border border-1 p-2 border-slate-300 rounded-lg"> CV</p>
        </a>
      </div>
      <div id = "sidebar-button" >
        <div className={`z-40 left-0 fixed duration-150 ${sidebar ? "text-zinc-800" : "text-slate-300"} top-[40vh] ml-6 rotate-[75deg] flex flex-row`}>
          <div id="v" className="ml-2 mt-3 duration-150">{sidebar ? "C" : "V"}</div>
          <div id="i" className="duration-200 ">{sidebar ? "l" : "i"}</div>
          <div id="e" className="duration-[300ms] ">{sidebar ? "o" : "e"}</div>
          <div id="w"className="duration-[400ms] ">{sidebar ? "s" : "w"}</div>
          <div id="s"className="duration-[500ms] ">{sidebar ? "e" : "s"}</div>
        </div>
        <motion.div
          className={`${sidebar ? "bg-zinc-800" : "bg-main-teal"} duration-500 shadow shadow-zinc-800 left-0 ml-6 cursor-pointer fixed w-12 h-12 rounded-full z-50 top-[40vh]`}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => rotate()}
          onHoverEnd={() => unrotate()}
          onClick={() => shift(false)}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group"
          >
            <div
              className={`${genericHamburgerLine} ${
                sidebar
                  ? "rotate-45 translate-y-2 bg-[#a2a19b] group-hover:bg-[#f1efe6]"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                sidebar ? "opacity-0" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                sidebar
                  ? "-rotate-45  -translate-y-2 bg-[#a2a19b] group-hover:bg-[#f1efe6]"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </button>
        </motion.div>
      </div>
      <div className="flex flex-nowrap overlay-element duration-500 fixed ml-4 left-0 top-[76vh] text-slate-300 text-3xl z-40">
        <div className="relative">
          <div className="ml-6 hover:-translate-y-1 hover:text-main-teal duration-300 w-6 h-6">
            <a href="https://github.com/jren2" aria-label="GitHub" target="_blank" rel="noreferrer" cursorshover="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
                cursorshover="true"
              >
                <title>GitHub</title>
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  cursorshover="true"
                />
              </svg>
            </a>
          </div>
          <div className="ml-6 hover:-translate-y-1 hover:text-main-teal duration-300 my-4 w-6 h-6">
            <a href="https://www.instagram.com/_jren2/" aria-label="Instagram" target="_blank" rel="noreferrer" cursorshover="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
                cursorshover="true"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" cursorshover="true" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" cursorshover="true" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
          <div className="ml-6 hover:-translate-y-1 hover:text-main-teal duration-300 w-6 h-6">
            <a href="https://www.linkedin.com/in/jasonrendev" aria-label="Linkedin" target="_blank" rel="noreferrer" cursorshover="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
                cursorshover="true"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" cursorshover="true" />
                <rect x="2" y="9" width="4" height="12" cursorshover="true" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="overlay-bar relative mt-28 -left-[13px] w-2 h-[14vh]" />
      </div>

      <div className="flex flex-col z-40 overlay-text fixed right-6 text-slate-300 text-sm tracking-widest">
        <div className="overlay-text rotate-90 fixed mt-10 w-8 h-28">jren2@seas.upenn.edu</div>
        <div className="overlay-bar fixed mt-10 right-8 w-2 h-1/6" />
      </div>
    </>
  )
}

export default Overlay
