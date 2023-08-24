/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React from 'react';

function Experience() {
  return (
    <div id="experience" className="bg-zinc-800">
      &nbsp;
      <div className="experience-padding h-fit py-16">
        <div className="relative experienceSubtitle mb-10 text-center w-fit mx-auto text-3xl font-medium tracking-wider text-slate-200">
          <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-zinc-800" />
          Experience
        </div>
        <div style={{ '--delay': '0.2s', '--slideDuration': '0.2s' }} className="flex slideUp opacity-0 translate-y-5 xs:flex-col xs:items-center md:flex-row mt-12 mb-6 gap-4">
          <img alt="css logo" width="180" className="rounded-3xl" src={require('./images/icons/upenn.webp')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            CIS 3200 TA
            <a href="https://www.cis.upenn.edu/" target="blank_" className="text-main-teal inline">
              {' '}
              @ University of Pennsylvlania
              {' '}
            </a>
            <div className="mt-1 mb-4 text-slate-200/70 text-sm">Jan 2023 - May 2023, Aug 2023 - Present</div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; TA'd the advanced algorithms and data structures class of 175+ students in topics such as graphs algorithms, flow networks and approximation algorithms.
            </div>
          </div>
        </div>
        <div style={{ '--delay': '0.2s', '--slideDuration': '0.2s' }} className="flex slideUp opacity-0 translate-y-5 xs:flex-col xs:items-center md:flex-row mt-12 mb-6 gap-4">
          <img alt="css logo" className="h-1/2 rounded-3xl" width="180" src={require('./images/icons/csslogo.webp')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Research Assistant
            <a href="https://css.seas.upenn.edu/" target="blank_" className="text-main-teal inline">
              {' '}
              @ Computational Social Science Lab
              {' '}
            </a>
            <div className="mt-1 mb-4 text-slate-200/70 text-sm">Sep 2022 - May 2023, Aug 2023 - Present</div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Built digital experiments to assist with high throughput on group dynamics research with JavaScript, React, Meteor and Empirica stack
            </div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Collaborated with senior researchers and research assistants weekly to accelerate the data analysis process
            </div>
          </div>
        </div>
        <div style={{ '--delay': '0.2s', '--slideDuration': '0.2s' }} className="flex slideUp opacity-0 translate-y-5 xs:flex-col xs:items-center md:flex-row mt-12 mb-6 gap-4">
          <img alt="css logo" className="h-3/4 rounded-3xl" width="180" src={require('./images/icons/mathworks.webp')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Software Engineering Intern
            <a href="https://www.mathworks.com/products/signal-integrity.html" target="blank_" className="text-main-teal inline">
              {' '}
              @ Mathworks
              {' '}
            </a>
            <div className="mt-1 mb-4 text-slate-200/70 text-sm">May 2023 - Aug 2023</div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Worked with the MATLAB Signal Integrity team to make a better user experience for the toolbox! 
            </div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Catch my changes in the SI Toolbox in the 2024a release :&#41;
            </div>
          </div>
        </div>
        <div style={{ '--delay': '0.2s', '--slideDuration': '0.2s' }} className="flex slideUp opacity-0 translate-y-5 xs:flex-col xs:items-center md:flex-row mt-10 mb-6 gap-4">
          <img alt="ren logo" className="h-1/2 rounded-3xl" width="180" src={require('./images/icons/ren.webp')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Software Developer Intern
            <a href="https://www.ren.inc/" target="blank_" className="text-main-teal inline">
              {' '}
              @ Ren Energy
              {' '}
            </a>
            <div className="mt-1 mb-4 text-slate-200/70 text-sm">Aug 2022 - Dec 2022</div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Assembled production level components with Angular, TypeScript and frameworks such as MapBoxGL for Ren’s main user facing application which led to a smoother client targeted
              experience
            </div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Maintained a mature codebase and optimized workflow in 2-week sprints through version control on GitLab
            </div>
          </div>
        </div>
        <div style={{ '--delay': '0.2s', '--slideDuration': '0.2s' }} className="flex slideUp opacity-0 translate-y-5 xs:flex-col xs:items-center md:flex-row mt-12 mb-6 gap-4">
          <img alt="juni logo" className=" h-1/2 rounded-3xl" width="180" src={require('./images/icons/juni.webp')} />
          <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
            Computer Science Instructor
            <a href="https://junilearning.com/" target="blank_" className="text-main-teal inline">
              {' '}
              @ Juni Learning
              {' '}
            </a>
            <div className="mt-1 mb-4 text-slate-200/70 text-sm">June 2021 - Sep 2022</div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Tutored students and developed projects in Python, Java and Scratch for children ages 8-18 and encouraged resiliency and problem-solving skills while facilitating a motivating
              environment
            </div>
            <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
              &emsp; Developed communication skills with parents via updates on student progress and learning assessments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
