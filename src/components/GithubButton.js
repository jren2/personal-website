import React from "react"

const GithubButton = () => {
  return (
    <a
      href="https://github.com/jren2"
      target="_blank"
      className="relative xs:mx-4 xs:my-4 xl:my-0 sm:mx-8 border-main-teal border-2 inline-flex items-center justify-start px-9 p-3 overflow-hidden transition-all rounded-xl group"
      rel="noreferrer"
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-violet-500 via-main-teal to-main-teal absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
      <span className="absolute -left-10 flex items-center justify-start w-6 h-6 duration-300 transform  group-hover:translate-x-12 ease">
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
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            cursorshover="true"
          />
        </svg>
      </span>
      <span className="relative w-full text-[#26C9CB] transition-colors duration-300 text-lg font-normal tracking-wider group-hover:text-zinc-800">GitHub</span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
        <svg className="w-5 h-5 mt-0.5" stroke="#27272a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>
  )
}

export default GithubButton
