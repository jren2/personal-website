/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import GithubButton from "./GithubButton"
import ResumeButton from "./ResumeButton"
import LinkedinButton from "./LinkedinButton"

const Home = () => {
  useEffect(() => {
    const reveal = () => {
      let type = document.querySelectorAll(".slideUp")
      for (let i = 0; i < type.length; i++) {
        let windowHeight = window.innerHeight
        let elementTop = type[i].getBoundingClientRect().top

        if (elementTop < windowHeight - 100) {
          type[i].classList.add("slideAnimation")
        }
      }
    }

    window.addEventListener("scroll", reveal)
  }, [])

  return (
    <>
        <div className="relative">
          <div className="flex flex-row mb-8 justify-between xs:px-24 md:px-36 xs:flex-col xs:pb-14 lg:pt-28 lg:flex-row">
            <div className="mt-16 z-10 xs:text-center xs:justify-center lg:justify-start lg:text-left ">
              <div className="text-slate-200 relative tracking-wide xs:m-auto lg:m-0 overflow-hidden">
                <div style={{ "--shift": "250px", "--duration": "0.7s", "--delay": "0.8s" }} className="typeAnimation absolute w-full h-full bg-zinc-900" />
                Hello! My name is,
              </div>
              <div className="overflow-hidden animate-gradient relative bg-clip-text text-transparent bg-gradient-to-r from-main-teal via-blue-300 to-main-teal text-8xl xs:my-6 xs:m-auto font-bold tracking-normal">
                <div style={{ "--shift": "500px", "--duration": "0.6s", "--delay": "0.9s" }} className="typeAnimation absolute w-full h-full bg-zinc-900" />
                Jason Ren
              </div>
              <div style={{ "--delay": "1.4s", "--slideDuration":"0.2s" }} className="text-slate-200/80 opacity-0 slideAnimation translate-y-5 relative w-auto text-base tracking-wide xs:m-auto md:w-96 lg:m-0 lg:w-96">
                I&apos;m a CS student with interests and experience in software engineering, web development and data analysis!
              </div>
              <div className="xs:mt-8">
                <div style={{ "--delay": "1.6s", "--slideDuration":"0.2s" }} className="inline-block opacity-0 slideAnimation translate-y-5">
                  <ResumeButton />
                </div>
                <div style={{ "--delay": "1.68s", "--slideDuration":"0.2s" }} className="inline-block opacity-0 slideAnimation translate-y-5">
                  <GithubButton />
                </div>
                <div style={{ "--delay": "1.76s", "--slideDuration":"0.2s" }} className="inline-block opacity-0 slideAnimation translate-y-5">
                  <LinkedinButton />
                </div>
              </div>
            </div>
            <div className="text-slate-100 text-center items-center h-[60vh] z-10 xs:mt-12 lg:mt-0">
              <img
                alt="profile picture"
                style={{ "--delay": "1.6s" }}
                className="enterFade opacity-0 object-cover hover:rotate-12 duration-300 rounded-full  mx-auto mlg:w-80"
                width="500"
                height="400"
                src={require("./images/FullSizeRender.jpeg")}
              />
            </div>
          </div>
          <div className="bg-zinc-800">
            <svg className="-translate-y-2 w-full" height="41" viewBox="0 0 1514 41" fill="#1f2937" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40.5V0.5H753H1513.5V40.5C1242.5 -36.5003 1122.96 40.5 937 40.5C772 40.5 217.5 -34 0 40.5Z" fill="#18181B" />
            </svg>
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
    </>
  )
}

export default Home
