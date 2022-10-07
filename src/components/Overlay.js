import React from "react"

const Overlay = () => (
  <>
    <div className="flex flex-col fixed left-4 overlay-bottom text-slate-300 text-3xl z-40">
      <div className="relative mt-72">
        <div className="center-overlay hover:-translate-y-1 hover:text-main-teal duration-300 w-6 h-6">
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
        <div className="center-overlay hover:-translate-y-1 hover:text-main-teal duration-300 my-4 w-6 h-6">
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
        <div className="center-overlay hover:-translate-y-1 hover:text-main-teal duration-300 w-6 h-6">
          <a href="https://www.linkedin.com/in/jason-ren-89855b203/" aria-label="Linkedin" target="_blank" rel="noreferrer" cursorshover="true">
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
      <div className="overlay-bar fixed mt-10 left-10 w-2 h-1/6" />
    </div>

    <div className="flex flex-col z-40 overlay-text fixed right-8 text-slate-300 text-sm tracking-widest">
      <div className="overlay-text rotate-90 fixed mt-10 w-8 h-28">jren2@seas.upenn.edu</div>
      <div className="overlay-bar fixed mt-10 right-8 w-2 h-1/6" />
    </div>
  </>
)

export default Overlay
