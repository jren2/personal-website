/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { firebaseLink } from '../config';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('typeAnimation');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const types = document.querySelectorAll('.typeDisappear');
    types.forEach((type) => {
      observer.observe(type);
    });

    return () => {
      types.forEach((type) => {
        observer.unobserve(type);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen h-fit bg-zinc-900">
      <div className="flex flex-row justify-between xs:px-32 lg:px-36 xl:px-44 xs:flex-col xs:pb-14 lg:pt-24 lg:flex-row">
        <div className="mt-24 z-10 xs:w-full lg:w-1/2 xs:justify-center lg:justify-start xs:text-center md:text-left ">
          <div className="text-slate-200 relative tracking-wide xs:mx-auto lg:m-0 overflow-hidden text-lg xs:text-center lg:text-left">
            <div
              style={{ '--shift': '250px', '--duration': '0.7s', '--delay': '0.8s' }}
              className="typeAnimation absolute w-full h-full bg-zinc-900"
            />
            Hello! My name is,
          </div>
          <div className="xs::mx-auto xs:w-fit lg:w-full xs:text-8xl lg:text-7xl xl:text-8xl overflow-hidden xs:m-auto xs:text-center md:text-left animate-gradient relative bg-clip-text text-transparent bg-gradient-to-r from-secondary-violet via-violet-400 to-secondary-violet xs:my-6 font-medium tracking-normal">
            <div
              style={{ '--shift': '500px', '--duration': '0.6s', '--delay': '0.9s' }}
              className="typeAnimation absolute w-full h-full bg-zinc-900"
            />
            Jason Ren
          </div>
          <div
            style={{ '--delay': '1.4s', '--slideDuration': '0.2s' }}
            className="text-slate-200/80 slideAnimation xs:text-center lg:text-left translate-y-5 relative w-auto tracking-wide xs:mx-auto md:w-96 lg:m-0 lg:w-96"
          >
            I&apos;m a CS student excited about solving challenging
            problems and building through software engineering!
          </div>
          <div className="xs:mt-10 text-white-background flex flex-row w-fit xs:mx-auto lg:mx-0">
            <div className="hover:scale-110 hover:text-[#8971ff] w-6 h-6 duration-300">
              <a href={firebaseLink}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </a>
            </div>
            <div className="hover:scale-110 hover:text-[#8971ff] mx-3 justify-center duration-300 w-6 h-6">
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
            <div className="mr-3 hover:scale-110 hover:text-[#8971ff] duration-300 w-6 h-6">
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
            <div className="hover:scale-110 hover:text-[#8971ff] duration-300 w-6 h-6">
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
        </div>
        <div className="group text-slate-100 relative text-center w-fit h-fit items-center mx-auto z-10 mt-14">
          <img
            loading="lazy"
            alt="profile"
            className="object-cover mx-auto mlg:w-80"
            width="400"
            height="400"
            src={require('./images/portrait.webp')}
          />
          <div className="group-hover:top-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-r-[1px] border-r-white-background" />
          <div className="group-hover:right-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-t-[1px] border-t-white-background" />
          <div className="group-hover:left-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-b-[1px] border-b-white-background" />
          <div className="group-hover:bottom-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-l-[1px] border-l-white-background" />
        </div>
      </div>
      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <div />
    </div>
  );
}

export default Home;
