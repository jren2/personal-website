/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React from 'react'

const Experience = () => (
  <>
    <div id="experience" className="bg-zinc-800">
      &nbsp;
      <div className="experience-padding h-fit py-16">
        <div className="experienceSubtitle mb-10 text-center w-fit mx-auto text-3xl font-medium tracking-wider text-slate-200">
          Experience
        </div>
        <div className="flex xs:flex-col xs:items-center md:flex-row mt-10 mb-6 gap-4">
          <img alt="ren logo" className="mt-6 h-1/2 rounded-3xl" width="180" src={require('./images/ren.png')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Software Developer Intern
            <a href="https://www.renenergyglobal.com/" target="blank_" className="text-teal-400 inline"> @ Ren Energy </a>
            <div className="mt-1 mb-4 text-slate-400 text-sm">
              August 2022 - Present
            </div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Learned Angular and TypeScript to develop production level user facing components with frameworks such as mapbox
            </div>
          </div>
        </div>
        <div className="flex xs:flex-col xs:items-center md:flex-row mt-16 mb-6 gap-4">
          <img alt="juni logo" className="mt-6 h-1/2 rounded-3xl" width="180" src={require('./images/juni.png')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Computer Science Instructor
            <a href="https://junilearning.com/" target="blank_" className="text-teal-400 inline"> @ Juni Learning </a>
            <div className="mt-1 mb-4 text-slate-400 text-sm">
              June 2021 - Present
            </div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Teach and develop projects relating to data structures and algorithms in Python and Java to students
              ages 8-18, encouraging resiliency and problem solving skills
            </div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Maintain constant communication with parents through updates on student progress and learning assessments
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
)

export default Experience
