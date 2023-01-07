/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react"
import { firebaseLink } from "../config"

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
        <div className="flex flex-nowrap flex-row shadow-zinc-900 shadow-md">
          <a href="#home" className="flex flex-row mt-3 ml-3 h-16 w-16">
            <img alt="logo" className="rounded-3xl" src={require("./images/logo.png")} />
          </a>
          <div className="flex justify-end flex-row items-center h-20 ml-auto tracking-wide">
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
            <a
              href={firebaseLink}
              target="_blank"
              className="relative inline-flex items-center justify-start truncate px-6 py-3 ml-4 mr-6 overflow-hidden text-base font-normal rounded-md group"
              rel="noreferrer"
            >
              <span className="w-16 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 opacity-[3%]" />
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-main-teal opacity-100 group-hover:-translate-x-4" />
              <span className="relative w-full text-left text-main-teal transition-colors duration-200 ease-in-out group-hover:text-gray-900">Download CV</span>
              <span className="absolute inset-0 border-2 rounded-md border-main-teal" />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
