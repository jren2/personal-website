/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React from 'react'

const Experience = () => (
  <>
    <div id="experience" className="bg-zinc-800">
      &nbsp;
      <div className="experience-padding h-fit py-16">
        <div className="relative mb-10 text-center text-3xl font-medium tracking-wider text-slate-200">
          4. Experience
          {/* <div className="absolute bottom-4 left-56 border-b-zinc-700 border-b-2 h-2 w-20 font-light" />
          <div className="absolute bottom-4 right-56 border-b-zinc-700 border-b-2 h-2 w-20 font-light" /> */}
        </div>

        <div className="flex xs:flex-col xs:items-center md:flex-row mt-16 mb-6 gap-4">
          <img alt="juni logo" className="mt-6 w-1/2 h-1/2 rounded-3xl" width="1000" src={require('./images/juni.png')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Computer Science Instructor
            <div className="text-teal-400 inline"> @ Juni Learning </div>
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
