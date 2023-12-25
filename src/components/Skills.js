/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';

const semesters = [
  {
    semester: 'Fall 2020',
    courses: [
      { code: 'CHEM 101', name: 'General Chemistry I' },
      { code: 'CIS 120', name: 'Programming Languages & Techniques I' },
      { code: 'ECON 001', name: 'Introduction to Microeconomics' },
      { code: 'MATH 114', name: 'Calculus II' },
      { code: 'PHYS 150', name: 'Physics Principles I' },
    ],
  },
  {
    semester: 'Spring 2021',
    courses: [
      { code: 'CIS 160', name: 'Mathematical Foundations of Computer Science' },
      { code: 'ESE 150', name: 'Digital Audio Basics' },
      { code: 'MATH 240', name: 'Calculus III' },
      { code: 'PHYS 151', name: 'Physics Principles II' },
      { code: 'WRIT 031', name: 'Writing Seminar in Cognitive Science' },
    ],
  },
  {
    semester: 'Fall 2021',
    courses: [
      { code: 'CIS 121', name: 'Data Structures and Algorithms' },
      { code: 'CIS 261', name: 'Discrete Probability & Statistical Inference' },
      { code: 'CIS 262', name: 'Automata, Computation & Complexity' },
      { code: 'ESE 215', name: 'Electrical Circuits & Systems' },
      { code: 'MUSC 007', name: 'Orchestra' },
    ],
  },
  {
    semester: 'Spring 2022',
    courses: [
      { code: 'CIS 197', name: 'JavaScript' },
      { code: 'CIS 240', name: 'Introduction to Computer Systems' },
      { code: 'CIS 320', name: 'Introduction to Algorithms' },
      { code: 'CIS 423', name: 'Ethical Algorithm Design' },
      { code: 'STAT 431', name: 'Statistical Inference' },
    ],
  },
  {
    semester: 'Fall 2022',
    courses: [
      { code: 'CIS 3800', name: 'Operating Systems' },
      { code: 'CIS 5210', name: 'Artificial Intelligence' },
      { code: 'CIS 5450', name: 'Big Data Analytics' },
      { code: 'MKTG 1010', name: 'Introduction to Marketing' },
      { code: 'NETS 2120', name: 'Scalable and Cloud Computing' },
    ],
  },
  {
    semester: 'Spring 2023',
    courses: [
      { code: 'CIS 3500', name: 'Software Design/Engineering' },
      { code: 'CIS 5190', name: 'Applied Machine Learning' },
      { code: 'CIS 5500', name: 'Database and Information Systems' },
      { code: 'MATH 3140', name: 'Advanced Linear Algebra' },
    ],
  },
  {
    semester: 'Fall 2023',
    courses: [
      { code: 'CIS 4000', name: 'Senior Project' },
      { code: 'CIS 5530', name: 'Networked Systems' },
      { code: 'CIS 5810', name: 'Computer Vision & Computational Photography' },
      { code: 'MGMT 2670', name: 'Entrepreneurship & Technological Innovation' },
      { code: 'MKTG 2340', name: 'Creativity & Idea Generation' },
    ],
  },
  {
    semester: 'Spring 2024',
    courses: [
      { code: 'CIS 5050', name: 'Software Systems' },
      { code: 'CIS 4510', name: 'Computer and Network Security' },
      { code: 'CIS 4710', name: 'Computer Organization and Design' },
      { code: 'CIS 5800', name: 'Machine Perception' },
      { code: 'CIS 4010', name: 'Senior Project II' },
    ],
  },
];
const outerLeftStyle = 'w-full h-[80%] top-[10%] -translate-x-[60%] z-0 blur-[2px]';
const leftCourseStyle = 'w-full h-[80%] top-[10%] -translate-x-[60%] z-10 blur-[2px]';
const middleCourseStyle = 'w-full h-full top-0 delay-50 translate-x-0 z-20 blur-none shadow-md';
const rightCourseStyle = 'w-full h-[80%] top-[10%] translate-x-[60%] z-10 blur-[2px]';
const outerRightStyle = 'w-full h-[80%] top-[10%] translate-x-[60%] z-0 blur-[2px]';
const commonCardStyle = 'ease-in-out duration-200 absolute border-1 border-gray-300 rounded-md bg-white-background text-lg px-4 py-2';

function Skills() {
  const [activeSem, setActiveSem] = useState(6);
  const [semesterIdx, setSemesterIdx] = useState(6);

  // const changeSem = (semester) => {
  //   const slider = document.getElementById('coursework-chooser');
  //   slider.style.setProperty('--coursework-chooser-index', semester);
  // };

  useEffect(() => {
  //   const slider = document.getElementById('coursework-chooser');
  //   slider.style.setProperty('--coursework-chooser-index', activeSem);
  }, []);

  return (
    <div className="bg-white-background px-32" id="skills">
      <div className="w-full h-5 border-1 border-t-0 border-grid" />
      <div className="flex xs:flex-col lg:flex-row h-fit border-l-1 border-r-1 border-grid">
        <div className=" border-b-1 border-grid xs:w-full lg:w-6/12 h-fit text-center text-off-black text-3xl font-medium tracking-wide p-4">
          <div className="text-4xl font-medium  relative w-fit mx-auto flex flex-col text-center mb-6">
            <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-zinc-800" />
            Coursework
          </div>
          <div className="relative w-64 h-80 mx-auto">
            {
              semesters.map((semester, idx) => {
                let cardStyle = '';
                switch (idx) {
                  case semesterIdx - 2:
                    cardStyle = outerLeftStyle;
                    break;
                  case semesterIdx - 1:
                    cardStyle = leftCourseStyle;
                    break;
                  case semesterIdx:
                    cardStyle = middleCourseStyle;
                    break;
                  case semesterIdx + 1:
                    cardStyle = rightCourseStyle;
                    break;
                  case semesterIdx + 2:
                    cardStyle = outerRightStyle;
                    break;
                  default:
                    break;
                }
                if (idx >= semesterIdx - 2 && idx <= semesterIdx + 2) {
                  return (
                    <div className={`${cardStyle} ${commonCardStyle} overflow-hidden`}>
                      {/* <div className="w-fit mx-auto">
                        {semester.semester}
                      </div> */}
                      <div className="text-left">
                        {
                        semester.courses.map((course, idx) => (
                          <div className="mt-3 text-sm">
                            {course.code}
                            <br />
                            {' '}
                            <div className="text-xs text-black/60">
                              {course.name}
                            </div>
                          </div>
                        ))
                      }
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
          <div className="flex flex-row w-fit mx-auto mt-6 text-base">
            <button type="button" onClick={() => setSemesterIdx((state) => Math.max(state - 1, 0))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="w-52">
              {semesters[semesterIdx].semester}
            </div>
            <button type="button" onClick={() => setSemesterIdx((state) => Math.min(state + 1, semesters.length - 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
          {/* <div style={{ '--delay': '0.4s' }} className="reveal opacity-0 relative w-full m-auto flex flex-row text-off-black/70">
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
          </div> */}
        </div>
        <div className="xs:w-full lg:w-6/12 h-fit border-grid border-l-1 items-center text-center text-off-black text-3xl font-medium tracking-wide p-4">
          <div className="relative w-fit mx-auto text-center mb-4 text-4xl font-medium ">
            <div style={{ '--shift': '150px', '--duration': '0.4s', '--delay': '0.3s' }} className="typeDisappear absolute w-full h-full bg-white-background" />
            Skills
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full cursor-default flex flex-row justify-center">
              <div style={{ '--delay': '0.3s', '--slideDuration': '0.3s', '--slideUpShift': '-0.5rem' }} className="slideUp bg-white-background border-1 border-r-grid border-t-grid border-l-grid opacity-0 hover:scale-110 translate-y-5 h-fit w-1/2 group mr-2 duration-300 card text-left border-b-secondary-violet border-b-8">
                <div>
                  <img alt="sde" className="object-cover" width="70px" height="70px" src={require('./images/icons/sde.webp')} />
                </div>
                <div className="group-hover:text-secondary-violet duration-300 my-2 text-off-black text-xl">Software Development</div>
                <div className="text-off-black/70 text-lg">
                  <ul className="text-off-black/70">
                    <li className="list-element tracking-wide font-normal text-sm"> Java</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Python</li>
                    <li className="list-element tracking-wide font-normal text-sm"> C</li>
                    <li className="list-element tracking-wide font-normal text-sm"> OCaml</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Git</li>
                  </ul>
                </div>
              </div>

              <div style={{ '--delay': '0.3s', '--slideDuration': '0.3s', '--slideUpShift': '-0.5rem' }} className="slideUp bg-white-background border-1 border-r-grid border-t-grid border-l-grid opacity-0 hover:scale-110 translate-y-5 h-fit w-1/2 group mr-2 duration-300 card text-left border-b-secondary-violet border-b-8">
                <div>
                  <img alt="ds" width="70px" height="70px" src={require('./images/icons/ds.webp')} />
                </div>
                <div className="group-hover:text-secondary-violet duration-300 my-2 text-off-black text-xl">Data Science</div>
                <div className="text-off-black/70 text-lg">
                  <ul className="text-off-black/70">
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

            <div style={{ '--delay': '0.3s', '--slideDuration': '0.3s', '--slideUpShift': '-0.5rem' }} className="slideUp bg-white-background border-1 border-r-grid border-t-grid border-l-grid opacity-0 hover:scale-110 translate-y-5 h-fit w-1/2 group m-auto duration-300 card text-left border-b-secondary-violet border-b-8">
              <div className="object-fill">
                <img alt="wde" className="ml-1" width="50px" height="50px" src={require('./images/icons/wde.webp')} />
              </div>
              <div className="group-hover:text-secondary-violet duration-300 mt-5 mb-2 text-off-black text-xl">Web Development</div>
              <div className="text-off-black/90 text-lg grid grid-cols-2 gap-4">
                <div>
                  Frontend
                  <ul className="text-off-black/70">
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
                  <ul className="text-off-black/70">
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
