/* eslint-disable global-require */
import React from 'react'

const Skills = () => {
  const hideSems = () => {
    const sems = document.querySelectorAll('.semester')
    sems.forEach(semester => {
      semester.classList.add('hidden')
    })
  }

  const showFA20 = () => {
    const fa20 = document.querySelector('.fa20')
    hideSems()
    fa20.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const fa20s = document.querySelector('.fa20s')

    fa20s.classList.add('active-sem')
  }

  const showSP21 = () => {
    const sp21 = document.querySelector('.sp21')
    hideSems()
    sp21.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const sp21s = document.querySelector('.sp21s')

    sp21s.classList.add('active-sem')
  }

  const showFA21 = () => {
    const fa21 = document.querySelector('.fa21')
    hideSems()
    fa21.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const fa21s = document.querySelector('.fa21s')

    fa21s.classList.add('active-sem')
  }

  const showSP22 = () => {
    const sp22 = document.querySelector('.sp22')
    hideSems()
    sp22.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const sp22s = document.querySelector('.sp22s')

    sp22s.classList.add('active-sem')
  }

  const showFA22 = () => {
    const fa22 = document.querySelector('.fa22')
    hideSems()
    fa22.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const fa22s = document.querySelector('.fa22s')

    fa22s.classList.add('active-sem')
  }

  const showSP23 = () => {
    const sp23 = document.querySelector('.sp23')
    hideSems()
    sp23.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const sp23s = document.querySelector('.sp23s')

    sp23s.classList.add('active-sem')
  }

  const showFA23 = () => {
    const fa23 = document.querySelector('.fa23')
    hideSems()
    fa23.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const fa23s = document.querySelector('.fa23s')

    fa23s.classList.add('active-sem')
  }

  const showSP24 = () => {
    const sp24 = document.querySelector('.sp24')
    hideSems()
    sp24.classList.remove('hidden')

    const activeSem = document.querySelector('.active-sem')
    activeSem.classList.remove('active-sem')

    const sp24s = document.querySelector('.sp24s')

    sp24s.classList.add('active-sem')
  }

  return (
    <>
      <div className="bg-zinc-800" id="skills">
        <div className="flex xs:flex-col lg:flex-row text-teal-50 h-fit xs:px-16 lg:px-20 py-16 ">
          <div className="xs:w-full lg:w-6/12 h-fit text-center text-slate-200 text-3xl font-medium tracking-wide">
            <div className="courseSubtitle w-fit mx-auto flex flex-col text-center my-6">
              Coursework
            </div>
            <div className="w-full m-auto flex flex-row text-slate-400 ">
              <div className="m-auto w-32 lg:ml-8 mr-8  border-solid border-l-2 border-zinc-600">
                <button type="button" className="fa20s w-32 active-sem hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3" onClick={() => showFA20()}>
                  Fall 2020
                </button>
                <button type="button" className="sp21s w-32 hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3 " onClick={() => showSP21()}>
                  Spring 2021
                </button>
                <button type="button" className="fa21s w-32 hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3" onClick={() => showFA21()}>
                  Fall 2021
                </button>
                <button type="button" className="sp22s w-32 hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3" onClick={() => showSP22()}>
                  Spring 2022
                </button>
                <button type="button" className="fa22s w-32 hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3" onClick={() => showFA22()}>
                  Fall 2022
                </button>
                <button type="button" className="sp23s w-32 hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3" onClick={() => showSP23()}>
                  Spring 2023
                </button>
                <button type="button" className="fa23s w-32 hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3" onClick={() => showFA23()}>
                  Fall 2023
                </button>
                <button type="button" className="sp24s w-32 hover:border-l-teal-400 hover:text-teal-400 hover:bg-zinc-700 duration-500 text-left  text-base p-3" onClick={() => showSP24()}>
                  Spring 2024
                </button>
              </div>

              <div className="w-fit m-auto my-2 text-left">
                <div className="text-base semester fa20 duration-300">
                  <div className="text-left">Fall 2020:</div>
                  <br />
                  <div className="mb-2">
                    CIS 120: Programming Languages & Techniques I
                    <br />
                  </div>
                  <div className="mb-2">
                    MATH 114: Calculus II
                    <br />
                  </div>
                  <div className="mb-2">
                    PHYS 150: Principles I
                    <br />
                  </div>
                  <div className="mb-2">
                    CHEM 101: General Chemistry I
                    <br />
                  </div>
                  <div className="mb-2">
                    ECON 001: Introduction to Microeconomics
                    <br />
                  </div>
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
                <div className="text-base hidden semester sp21 duration-300">
                  <div className="text-left">Spring 2021:</div>
                  <br />
                  <div className="mb-2">
                    CIS 160: Mathematical Foundations of Computer Science
                    <br />
                  </div>
                  <div className="mb-2">
                    ESE 150: Digital Audio Basics
                    <br />
                  </div>
                  <div className="mb-2">
                    MATH 240: Calculus III
                    <br />
                  </div>
                  <div className="mb-2">
                    PHYS 151: Principles II
                    <br />
                  </div>
                  <div className="mb-2">
                    WRIT 031: Writing Seminar in Cognitive Science
                    <br />
                  </div>
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
                <div className="text-base hidden semester fa21">
                  <div className="text-left">Fall 2021:</div>
                  <br />
                  <div className="mb-2">
                    CIS 121: Data Structures and Algorithms
                    <br />
                  </div>
                  <div className="my-2">
                    CIS 262: Automata, Computability and Complexity
                    <br />
                  </div>
                  <div className="my-2">
                    CIS 261: Discrete Probability and Statistical Inference
                    <br />
                  </div>
                  <div className="my-2">
                    ESE 215: Electrical Circuits and Systems
                    <br />
                  </div>
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
                <div className="text-base hidden semester sp22">
                  <div className="text-left ">Spring 2022:</div>
                  <br />
                  <div className="mb-2">
                    CIS 320: Introduction to Algorithms
                    <br />
                  </div>
                  <div className="my-2">
                    CIS 423: Ethical Algorithm Design
                    <br />
                  </div>
                  <div className="my-2">
                    CIS 240: Introduction to Computer Systems
                    <br />
                  </div>
                  <div className="my-2">
                    CIS 197: JavaScript
                    <br />
                  </div>
                  <div className="my-2">
                    STAT 431: Statistical Inference
                    <br />
                  </div>
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
                <div className="text-base hidden semester fa22">
                  <div className="text-left">Fall 2022:</div>
                  <br />
                  <div className="mb-2">
                    CIS 421: Artificial Intelligence
                    <br />
                  </div>
                  <div className="my-2">
                    CIS 545: Big Data Analytics
                    <br />
                  </div>
                  <div className="my-2">
                    CIS 380: Computer Operating Systems
                    <br />
                  </div>
                  <div className="my-2">
                    NETS 212: Scalable and Cloud Computing
                    <br />
                  </div>
                  <div className="my-2">
                    PSYC 001: Introduction to Experimental Psychology
                    <br />
                  </div>
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
                <div className="text-left text-base hidden semester sp23">
                  TBD
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
                <div className="text-left text-base hidden semester fa23">
                  TBD
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
                <div className="text-left text-base hidden semester sp24">
                  TBD
                  <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
                </div>
              </div>
            </div>
          </div>
          <div className="xs:w-full lg:w-6/12 h-fit items-center text-center text-slate-200 text-3xl font-medium tracking-wide">
            <div className="skillSubtitle w-fit mx-auto my-6 text-center">
              Skills
            </div>
            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-row justify-center">
                <div className="h-fit w-1/2 group hover:-translate-y-3 mr-2 duration-300 card text-teal-300 text-left border-b-teal-400 border-b-8">
                  <div>
                    <img alt="sde" className="object-cover" width="70px" height="70px" src={require('./images/sde.png')} />
                  </div>
                  <div className="group-hover:text-teal-300 duration-300 my-2 text-slate-200 text-xl">
                    Software Development
                  </div>
                  <div className="text-slate-400 text-lg">
                    <ul className="text-slate-400">
                      <li className="list-element tracking-wide font-normal text-sm"> Java</li>
                      <li className="list-element tracking-wide font-normal text-sm"> Python</li>
                      <li className="list-element tracking-wide font-normal text-sm"> C</li>
                      <li className="list-element tracking-wide font-normal text-sm"> OCaml</li>
                      <li className="list-element tracking-wide font-normal text-sm"> Git</li>
                    </ul>
                  </div>
                </div>

                <div className="h-fit w-1/2 mx-auto group hover:-translate-y-3 duration-300 card text-teal-300 text-left border-b-teal-400 border-b-8">
                  <div>
                    <img alt="ds" width="70px" height="70px" src={require('./images/ds.png')} />
                  </div>
                  <div className="group-hover:text-teal-300 duration-300 my-2 text-slate-200 text-xl">
                    Data Science
                  </div>
                  <div className="text-slate-400 text-lg">
                    <ul className="text-slate-400">
                      <li className="list-element tracking-wide font-normal text-sm"> Python</li>
                      <li className="ml-4 list-element tracking-wide font-normal text-xs"> Pandas</li>
                      <li className="ml-4 list-element tracking-wide font-normal text-xs"> Matplotlib</li>
                      <li className="ml-4 list-element tracking-wide font-normal text-xs"> NumPy</li>
                      <li className="list-element tracking-wide font-normal text-sm"> R</li>
                      <li className="list-element tracking-wide font-normal text-sm"> MATLAB</li>
                    </ul>
                  </div>
                </div>
                <div />
              </div>

              <div className="h-fit w-1/2 group card text-teal-300 text-left m-auto  border-b-teal-400 border-b-8 hover:-translate-y-3 duration-300">
                <div className="object-fill">
                  <img alt="wde" className="ml-1" width="50px" height="50px" src={require('./images/wde.png')} />
                </div>
                <div className="group-hover:text-teal-300 duration-300 mt-5 mb-2 text-slate-200 text-xl">
                  Web Development
                </div>
                <div className="text-slate-300 text-lg grid grid-cols-2 gap-4">
                  <div>
                    Frontend
                    <ul className="text-slate-400">
                      <li className="truncate list-element tracking-wide font-normal text-sm"> JavaScript</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> React</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> HTML/CSS</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> Bootstrap</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> Tailwind</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> jQuery</li>
                    </ul>
                  </div>
                  <div>
                    Backend
                    <ul className="text-slate-400">
                      <li className="truncate list-element tracking-wide font-normal text-sm"> Node JS</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> MongoDB</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> Python</li>
                      <li className="truncate list-element tracking-wide font-normal text-sm"> Express JS</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
