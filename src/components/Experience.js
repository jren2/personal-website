/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React from 'react'

const Experience = () => (
  <>
    <div id="experience" className="bg-zinc-800">
      <div className="h-screen px-52 py-16">
        <div className="mb-10 text-center text-3xl font-medium tracking-wider text-slate-200">Experience</div>

        <div className="my-16 grid grid-cols-5">
          <img alt="juni logo" className="rounded-3xl" src={require('./images/juni.png')} />
          <div className="col-span-4 text-xl font-medium tracking-normal text-slate-200">
            Computer Science Instructor
            <div className="text-teal-400 inline"> @ Juni Learning </div>
            <div className="mt-1 mb-4 text-slate-400 text-sm">
              June 2021 - Present
            </div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Teach and develop projects relating to data structures and algorithms in Python and Java to students
              ages 8-18, encouraging resiliency and problem-solving skills
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
