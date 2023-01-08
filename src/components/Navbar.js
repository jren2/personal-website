/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react"
import { firebaseLink } from "../config"
import ResumeButton from "./ResumeButton"

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector(".nav")

    const { scrollY } = window
    let lastScrollY = scrollY

    window.addEventListener("scroll", () => {
      if (lastScrollY >= 0) {
        if (lastScrollY < window.scrollY) {
          nav.classList.add("nav-hide")
        } else {
          nav.classList.remove("nav-hide")
        }
        lastScrollY = window.scrollY
      } else {
        lastScrollY = 0
      }
    })

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }, [])

  return (
    <>
      <nav id="nav" className="w-full nav backdrop-blur bg-zinc-900/80 sticky top-0 items-center z-40">
        <div className="flex flex-nowrap shadow-zinc-900 justify-between shadow-md">
          <a href="#home" className="flex flex-row mt-3 ml-6 h-16 w-16">
            <img alt="logo" className="rounded-3xl" src={require("./images/logo.png")} />
          </a>
          {/* <div className="m-auto flex justify-end flex-row items-center h-20 ml-auto tracking-wide">
            <a
              href="#about"
              className="xs:invisible xs:absolute md:static md:visible text-slate-200 mx-4 hover:duration-100 hover:border-main-teal hover:border-b-[3px] hover:text-main-teal px-1 py-[0.75] text-base font-normal"
              aria-current="page"
            >
              About

            </a>

            <a
              href="#skills"
              className="md:static md:visible text-slate-200 mx-4 hover:duration-100 hover:border-main-teal hover:border-b-[3px] hover:text-main-teal px-1 py-[0.75] text-base font-normal"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="md:static md:visible text-slate-200 mx-4 hover:duration-100 hover:border-main-teal hover:border-b-[3px] hover:text-main-teal px-1 py-[0.75] text-base font-normal"
            >
              Experience
            </a>

            <a
              href="#portfolio"
              className="md:static md:visible text-slate-200 mx-4 hover:duration-100 hover:border-main-teal hover:border-b-[3px] hover:text-main-teal px-1 py-[0.75] text-base font-normal"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="md:static md:visible text-slate-200 mx-4 hover:duration-100 hover:border-main-teal hover:border-b-[3px] hover:text-main-teal px-1 py-[0.75] text-base font-normal"
            >
              Contact Me
            </a>
          </div> */}
          {/* <div className="flex rounded-full bg-main-teal h-16 w-16 mr-2 mt-2">
            <p className="hover:rotate-45">HELLO</p>
          </div> */}

          <div className="mr-6 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#cbd4e1" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>  
            
          </div>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar
