/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import { firebaseLink } from "../config"
import GithubButton from "./GithubButton"
import Name from "./Name"
import ResumeButton from "./ResumeButton"
import LinkedinButton from "./LinkedinButton"

const Home = () => {
  useEffect(() => {
    const logo = document.querySelectorAll("#new-logo path")
    // for (let i = 0; i < logo.length; i++) {
    //   console.log("Letter is " + logo[i].getTotalLength())
    // }
  })

  return (
    <>
        <div className="relative">
          {/* <div className="flex flex-row h-16 items-center">
            <a href="#home" className="flex flex-row mt-3 ml-3 h-16 w-16">
              <img alt="logo" className="rounded-3xl" src={require("./images/logo.png")} />
            </a>
            <div className="ml-auto flex rounded-full bg-main-teal h-16 w-16">

            </div>

          </div> */}
          <div className="flex flex-row mb-8 justify-between xs:px-24 md:px-36 xs:flex-col xs:pb-14 lg:pt-28 lg:flex-row">
            <div className="mt-16 z-10 xs:text-center xs:justify-center lg:justify-start lg:text-left ">
              <div className="text-slate-300 relative tracking-wide xs:m-auto lg:m-0">
                <div style={{ "--shift": "250px", "--duration": "0.7s", "--delay": "0.3s" }} className="typeAnimation absolute w-full h-full bg-zinc-900" />
                Hello! My name is,
              </div>
              <div className="animate-gradient relative bg-clip-text text-transparent bg-gradient-to-r from-main-teal via-blue-300 to-main-teal text-8xl xs:my-6 xs:m-auto font-bold tracking-normal">
                <div style={{ "--shift": "500px", "--duration": "0.6s", "--delay": "0.4s" }} className="typeAnimation absolute w-full h-full bg-zinc-900" />
                Jason Ren
              </div>
              <div style={{ "--delay": "0.8s" }} className="text-slate-400 opacity-0 enterFade relative w-auto text-base tracking-wide xs:m-auto md:w-96 lg:m-0 lg:w-96">
                I&apos;m a CS student with interests and experience in software engineering, web development and data analysis!
              </div>
              <div className="xs:mt-8">
                <div style={{ "--delay": "1.1s" }} className="inline-block opacity-0 enterFade">
                  <ResumeButton />
                </div>
                <div style={{ "--delay": "1.1s" }} className="inline-block opacity-0 enterFade">
                  <GithubButton />
                </div>
                <div style={{ "--delay": "1.1s" }} className="inline-block opacity-0 enterFade">
                  <LinkedinButton />
                </div>
              </div>
            </div>
            <div className="text-slate-100 text-center items-center z-10 xs:mt-12 lg:mt-0">
              <img
                alt="cat picture"
                style={{ "--delay": "1.3s" }}
                className="enterFade opacity-0 object-cover hover:rotate-12 duration-300 rounded-full  mx-auto mlg:w-80"
                width="500"
                height="400"
                src={require("./images/philly.png")}
              />
            </div>
          </div>
          <div className="bg-zinc-800">
            <svg className="-translate-y-2" width="full" height="41" viewBox="0 0 1514 41" fill="#1f2937" xmlns="http://www.w3.org/2000/svg">
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
