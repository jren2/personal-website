/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { firebaseLink } from '../config';

function Contact() {
  return (
    <div className="w-full">
      <div id="contact" className="w-full bg-white-background m-auto">
        <div className="w-full h-5 border-1 border-r-0 border-l-0 border-grid" />
        <div className="px-32">
          <div className="w-full border-1 border-t-0 border-b-0 border-grid p-4 text-off-black flex flex-row">
            <div>
              Jason Ren
            </div>
            <div className="text-off-black w-fit mx-auto flex flex-row">
              <div className="hover:-translate-y-1 hover:text-[#8971ff] w-6 h-6 duration-300">
                <a href={firebaseLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </a>
              </div>
              <div className="hover:-translate-y-1 hover:text-[#8971ff] mx-3 justify-center duration-300 w-6 h-6">
                <a href="https://github.com/jren2" aria-label="GitHub" target="_blank" rel="noreferrer">
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
                  >
                    <title>GitHub</title>
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                </a>
              </div>
              <div className="mr-3 hover:-translate-y-1 hover:text-[#8971ff] duration-300 w-6 h-6">
                <a href="https://www.instagram.com/_jren2/" aria-label="Instagram" target="_blank" rel="noreferrer">
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
                  >
                    <title>Instagram</title>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
              <div className="hover:-translate-y-1 hover:text-[#8971ff] duration-300 w-6 h-6">
                <a href="https://www.linkedin.com/in/jasonrendev" aria-label="Linkedin" target="_blank" rel="noreferrer">
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
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="invisible">
              Jason Ren
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
