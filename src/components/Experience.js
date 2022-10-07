/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React from "react"

const Experience = () => (
  <>
    <div id="experience" className="bg-zinc-800">
      &nbsp;
      <div className="experience-padding h-fit py-16">
        <div className="experienceSubtitle mb-10 text-center w-fit mx-auto text-3xl font-medium tracking-wider text-slate-200">Experience</div>
        <div className="flex xs:flex-col xs:items-center md:flex-row mt-16 mb-6 gap-4">
          <img alt="css logo" className="h-1/2 rounded-3xl" width="180" src={require("./images/csslogo.png")} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Research Assistant
            <a href="https://css.seas.upenn.edu/" target="blank_" className="text-main-teal inline">
              {" "}
              @ Computational Social Science Lab{" "}
            </a>
            <div className="mt-1 mb-4 text-slate-400 text-sm">September 2022 - Present</div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Built digital experiments to assist with high throughput on group dynamics research with JavaScript, React, Meteor and Empirica stack
            </div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Collaborated with senior researchers and research assistants weekly to accelerate the data analysis process
            </div>
          </div>
        </div>
        <div className="flex xs:flex-col xs:items-center md:flex-row mt-10 mb-6 gap-4">
          <img alt="ren logo" className="h-1/2 rounded-3xl" width="180" src={require("./images/ren.png")} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Software Developer Intern
            <a href="https://www.renenergyglobal.com/" target="blank_" className="text-main-teal inline">
              {" "}
              @ Ren Energy{" "}
            </a>
            <div className="mt-1 mb-4 text-slate-400 text-sm">August 2022 - Present</div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Assembled production level components with Angular, TypeScript and frameworks such as MapBoxGL for Ren’s main user facing application which led to a smoother client targeted
              experience
            </div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              Maintained a mature codebase and optimized workflow in 2-week sprints through version control on GitLab
            </div>
          </div>
        </div>
        <div className="flex xs:flex-col xs:items-center md:flex-row mt-16 mb-6 gap-4">
          <img alt="juni logo" className=" h-1/2 rounded-3xl" width="180" src={require("./images/juni.png")} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Computer Science Instructor
            <a href="https://junilearning.com/" target="blank_" className="text-main-teal inline">
              {" "}
              @ Juni Learning{" "}
            </a>
            <div className="mt-1 mb-4 text-slate-400 text-sm">June 2021 - Present</div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Tutored students and developed projects in Python, Java and Scratch for children ages 8-18 and encouraged resiliency and problem-solving skills while facilitating a motivating
              environment
            </div>
            <div className="list-element my-2 text-slate-400 text-base font-normal tracking-wide">
              &emsp; Developed communication skills with parents via updates on student progress and learning assessments
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Experience
