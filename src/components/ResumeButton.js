import React from "react"
import { firebaseLink } from "../config"

const ResumeButton = () => {
  return (
    <a
      href={firebaseLink}
      target="_blank"
      className="relative border-main-teal border-2 inline-flex items-center justify-start px-9 p-3 overflow-hidden transition-all rounded-xl group"
      rel="noreferrer"
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-violet-500 via-main-teal to-main-teal absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
      <span className="absolute -left-10 flex items-center justify-start w-6 h-6 duration-300 transform  group-hover:translate-x-12 ease">
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
          <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z" />
        </svg>
      </span>
      <span className="relative w-full text-main-teal transition-colors duration-300 text-lg font-normal tracking-wider group-hover:text-zinc-800">Resume</span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
        <svg className="w-5 h-5 mt-0.5" stroke="#27272a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>
  )
}

export default ResumeButton
