import React from 'react';

function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/jasonrendev"
      target="_blank"
      className="relative sm:my-4 xl:my-0 border-main-teal border-2 inline-flex items-center justify-start px-9 p-3 overflow-hidden transition-all rounded-xl group"
      rel="noreferrer"
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-violet-500 via-main-teal to-main-teal absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
      <span className="absolute -left-10 flex items-center justify-start w-5 h-5 duration-300 transform  group-hover:translate-x-12 ease">
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
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </span>
      <span className="relative w-full text-main-teal transition-colors duration-300 text-lg font-normal tracking-wider group-hover:text-zinc-800">LinkedIn</span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
        <svg className="w-5 h-5 mt-0.5" stroke="#27272a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </a>
  );
}

export default LinkedinButton;
