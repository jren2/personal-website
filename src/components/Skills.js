/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';

const semesters = ['Fall 2020', 'Spring 2021', 'Fall 2021', 'Spring 2022', 'Fall 2022', 'Spring 2023', 'Fall 2023', 'Spring 2024'];

function Skills() {
  const [activeSem, setActiveSem] = useState(6);

  const changeSem = (semester) => {
    const slider = document.getElementById('coursework-chooser');
    slider.style.setProperty('--coursework-chooser-index', semester);
  };

  useEffect(() => {
    const slider = document.getElementById('coursework-chooser');
    slider.style.setProperty('--coursework-chooser-index', activeSem);
  }, []);

  return (
    <div className="bg-zinc-800" id="skills">
      <div className="flex xs:flex-col lg:flex-row text-teal-50 h-fit xs:px-16 lg:px-20 py-16 ">
        <div className="xs:w-full lg:w-6/12 h-fit text-center text-slate-200 text-3xl font-medium tracking-wide">
          <div className="courseSubtitle relative w-fit mx-auto flex flex-col text-center my-6">
            <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-zinc-800" />
            Coursework
          </div>
          <div style={{ '--delay': '0.4s' }} className="reveal opacity-0 relative w-full m-auto flex flex-row text-slate-200/70">
            <div className="m-auto w-32 relative">
              <div id="coursework-chooser" className="absolute w-[2px] h-full bg-slate-400/50 rounded-lg" />
              {
                  semesters.map((semester, idx) => (
                    <button
                      key={`${semester}`}
                      type="button"
                      className={`${activeSem === idx ? 'text-main-teal bg-zinc-700' : ''} semester-choice w-32 hover:border-l-main-teal hover:text-main-teal hover:bg-zinc-700 duration-500 text-left  text-base p-3`}
                      onClick={() => { setActiveSem(idx); changeSem(idx); }}
                    >
                      {semester}
                    </button>
                  ))
                }
            </div>

            <div className="w-fit m-auto my-2 text-left">
              {activeSem === 0 && (
              <div className="text-base semester duration-300">
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
              )}
              {activeSem === 1 && (
              <div className="text-base semester sp21 duration-300">
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
              )}
              {activeSem === 2 && (
              <div className="text-base semester fa21">
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
              )}
              {activeSem === 3 && (
              <div className="text-base semester sp22">
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
              )}
              {activeSem === 4 && (
              <div className="text-base semester fa22">
                <div className="text-left">Fall 2022:</div>
                <br />
                <div className="mb-2">
                  CIS 521: Artificial Intelligence
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
                  MKTG 101: Introduction to Marketing
                  <br />
                </div>
                <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
              </div>
              )}
              {activeSem === 5 && (
              <div className="text-left text-base semester sp23">
                <div className="text-left">Spring 2023:</div>
                <br />
                <div className=" mb-2">
                  CIS 5190: Applied Machine Learning
                  <br />
                </div>
                <div className="my-2">
                  CIS 3500: Software Design and Engineering
                  <br />
                </div>
                <div className="my-2">
                  MATH 5140: Advanced Linear Algebra
                  <br />
                </div>
                <div className="my-2">
                  CIS 5500: Database and Information Systems
                  <br />
                </div>
                <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
              </div>
              )}
              {activeSem === 6 && (
              <div className="text-left text-base semester fa23">
                <div className="text-left">Fall 2023:</div>
                <br />
                <div className=" mb-2">
                  CIS 3990: Introduction to Quantum Computing
                  <br />
                </div>
                <div className="my-2">
                  CIS 5530: Networked Systems
                  <br />
                </div>
                <div className="my-2">
                  ESE 5140: Graph Neural Networks
                  <br />
                </div>
                <div className="my-2">
                  STAT 4330: Introduction to Stochastic Processes
                  <br />
                </div>
                <div className="my-2">
                  MGMT 2670: Entrepreneurship and Tech Innovation
                  <br />
                </div>
                <div className="my-2">
                  CIS 4000: Senior Project
                  <br />
                </div>
                <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
              </div>
              )}
              {activeSem === 7 && (
              <div className="text-left text-base semester sp24">
                TBD
                <div className="invisible h-1">CIS 160: Mathematical Foundations of Computer Science</div>
              </div>
              )}
            </div>
          </div>
        </div>
        <div className="xs:w-full lg:w-6/12 h-fit items-center text-center text-slate-200 text-3xl font-medium tracking-wide">
          <div className="skillSubtitle relative w-fit mx-auto my-6 text-center">
            <div style={{ '--shift': '150px', '--duration': '0.4s', '--delay': '0.3s' }} className="typeDisappear absolute w-full h-full bg-zinc-800" />
            Skills
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full cursor-default flex flex-row justify-center">
              <div style={{ '--delay': '0.3s', '--slideDuration': '0.3s', '--slideUpShift': '-0.5rem' }} className="slideUp opacity-0 hover:scale-110 translate-y-5 h-fit w-1/2 group mr-2 duration-300 card text-teal-300 text-left border-b-main-teal border-b-8">
                <div>
                  <img alt="sde" className="object-cover" width="70px" height="70px" src={require('./images/icons/sde.webp')} />
                </div>
                <div className="group-hover:text-teal-300 duration-300 my-2 text-slate-200 text-xl">Software Development</div>
                <div className="text-slate-200/70 text-lg">
                  <ul className="text-slate-200/70">
                    <li className="list-element tracking-wide font-normal text-sm"> Java</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Python</li>
                    <li className="list-element tracking-wide font-normal text-sm"> C</li>
                    <li className="list-element tracking-wide font-normal text-sm"> OCaml</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Git</li>
                  </ul>
                </div>
              </div>

              <div style={{ '--delay': '0.5s', '--slideDuration': '0.3s', '--slideUpShift': '-0.5rem' }} className="slideUp opacity-0 translate-y-5 h-fit w-1/2 mx-auto group hover:-translate-y-3 duration-300 card text-teal-300 text-left border-b-main-teal border-b-8">
                <div>
                  <img alt="ds" width="70px" height="70px" src={require('./images/icons/ds.webp')} />
                </div>
                <div className="group-hover:text-teal-300 duration-300 my-2 text-slate-200 text-xl">Data Science</div>
                <div className="text-slate-200/70 text-lg">
                  <ul className="text-slate-200/70">
                    <li className="list-element tracking-wide font-normal text-sm"> Python</li>
                    <li className="ml-4 list-element tracking-wide font-normal text-xs"> Pandas</li>
                    <li className="ml-4 list-element tracking-wide font-normal text-xs"> TensorFlow</li>
                    <li className="ml-4 list-element tracking-wide font-normal text-xs"> PyTorch</li>
                    <li className="list-element tracking-wide font-normal text-sm"> R</li>
                    <li className="list-element tracking-wide font-normal text-sm"> MATLAB</li>
                  </ul>
                </div>
              </div>
              <div />
            </div>

            <div style={{ '--delay': '0.3s', '--slideDuration': '0.3s', '--slideUpShift': '-0.5rem' }} className="slideUp opacity-0 translate-y-5 h-fit w-1/2 group card cursor-default text-teal-300 text-left m-auto  border-b-main-teal border-b-8 hover:-translate-y-3 duration-300">
              <div className="object-fill">
                <img alt="wde" className="ml-1" width="50px" height="50px" src={require('./images/icons/wde.webp')} />
              </div>
              <div className="group-hover:text-teal-300 duration-300 mt-5 mb-2 text-slate-200 text-xl">Web Development</div>
              <div className="text-slate-300 text-lg grid grid-cols-2 gap-4">
                <div>
                  Frontend
                  <ul className="text-slate-200/70">
                    <li className="truncate list-element tracking-wide font-normal text-sm"> JavaScript</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> React</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> Redux</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> Angular</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> HTML/CSS</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> jQuery</li>
                  </ul>
                </div>
                <div>
                  Backend
                  <ul className="text-slate-200/70">
                    <li className="truncate list-element tracking-wide font-normal text-sm"> NodeJS</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> MongoDB</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> MySQL</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> DynamoDB</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> Python</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> ExpressJS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
