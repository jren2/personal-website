/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React, { useState } from 'react';

const experiences = [
  {
    title: 'Teaching Assistant',
    company: 'University of Pennsylvania',
    link: 'https://www.cis.upenn.edu/',
    date: 'Jan 2023 - May 2023, Aug 2023 - Present',
    description: [
      'TA for CIS 3200 Introduction to Algorithms + CIS 3500 Software Design and Engineering',
      'Taught advanced algorithms and data structures class of 175+ students in topics such as graphs algorithms, flow networks and approximation algorithms.',
      'Helped design and debug projects/homeworks in JavaScript, React, NodeJS',
    ],
    image: require('./images/icons/upenn.webp'),
  },
  {
    title: 'Research Assistant',
    company: 'Computational Social Science Lab',
    link: 'https://css.seas.upenn.edu/',
    date: 'Sep 2022 - May 2023, Aug 2023 - Present',
    description: [
      'Built digital experiments to assist with high throughput on group dynamics research with JavaScript, React, Meteor and Empirica stack',
      'Deployed weekly real time experiments with 15+ participants from MTurk to collect group dynamics data',
      'Collaborated with senior researchers and research assistants weekly to accelerate the data analysis process',
    ],
    image: require('./images/icons/csslogo.webp'),
  },
  {
    title: 'Software Engineering Intern',
    company: 'Mathworks',
    link: 'https://www.mathworks.com/products/signal-integrity.html',
    date: 'May 2023 - Aug 2023',
    description: [
      'Worked with the MATLAB Signal Integrity team to make a better user experience for the toolbox!',
      'Designed and implemented a new user facing introduction modal for all beginner and experienced users picking up the toolbox',
      'Integrated an editor for Clock Domain changes to allow for an error safe and intuitive editing experience for anyone editing their circuits',
      'Collaborated with senior developers and UX designers to ensure a smooth transition for the new features into the toolbox',
      'Catch my changes in the SI Toolbox in the 2024a release :)',
    ],
    image: require('./images/icons/mathworks.webp'),
  },
  {
    title: 'Software Developer Intern',
    company: 'Ren Energy',
    link: 'https://www.ren.inc/',
    date: 'Aug 2022 - Dec 2022',
    description: [
      'Assembled production level components with Angular, TypeScript and frameworks such as MapBoxGL for Ren’s main user facing application which led to a smoother client targeted experience',
      'Decreased carbon emission data loading time on the user facing map by designing an aggregation pipeline for emissions/country',
      'Maintained a mature codebase and optimized workflow in 2-week sprints through version control on GitLab',
    ],
    image: require('./images/icons/ren.webp'),
  },
  {
    title: 'Computer Science Instructor',
    company: 'Juni Learning',
    link: 'https://junilearning.com/',
    date: 'June 2021 - Sep 2022',
    description: [
      'Tutored students and developed projects in Python, Java and Scratch for children ages 8-18 and encouraged resiliency and problem-solving skills while facilitating a motivating environment',
      'Developed communication skills with parents via updates on student progress and learning assessments',
    ],
    image: require('./images/icons/juni.webp'),
  },
];

function Experience() {
  const [experienceIdx, setExperienceIdx] = useState(0);

  const changeSem = (semester) => {
    const slider = document.getElementById('coursework-chooser');
    slider.style.setProperty('--coursework-chooser-index', semester);
  };
  
  return (
    <div className="bg-white-background px-32">
      <div className="relative w-full h-5 border-1 border-grid" />
      <div className="h-fit">
        <div className="w-full h-20 flex flex-row relative">
          <div className="w-32 h-20 flex-shrink-0 border-1 border-b-0 border-t-0 border-grid" />
          <div className="text-3xl relative w-full text-center flex items-center justify-center font-medium mx-auto border-b-[1px] border-grid">
            <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
              <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
            </div>
            <div className="group relative cursor-default w-fit overflow-hidden">
              <div id="experience" className="w-1 h-1" />
              <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-white-background z-10" />
              Experience
              <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
            </div>
          </div>
          <div className="w-32 h-20 flex-shrink-0 border-1 border-b-0 border-t-0 border-grid" />
        </div>
        <div className="flex flex-row">
          <div className="w-32 flex-shrink-0 border-1 border-b-0 border-grid border-t-0" />
          <div className="w-40 flex-shrink-0 border-r-1 border-grid" />
          <div className="w-full flex flex-row">
            <div className="w-20 h-fit relative">
              <div id="coursework-chooser" style={{ '--coursework-chooser-index': experienceIdx }} className="duration-300" />
              {
                experiences.map((experience, idx) => (
                  <div onClick={() => { setExperienceIdx(idx); changeSem(idx); }} className="cursor-pointer border-r-1 border-b-1 border-grid w-20 h-20">
                    <img loading="lazy" alt="css logo" width="160" className="" src={experience.image} />
                  </div>
                ))
              }
            </div>
            <div className="text-xl xs:text-center md:text-left p-3 font-medium tracking-normal text-off-black">
              {experiences[experienceIdx].title}
              <a href={experiences[experienceIdx].link} target="blank_" className="text-[#7256ff] inline">
                {' '}
                @ 
                {' '}
                {experiences[experienceIdx].company}
                {' '}
              </a>
              <div className="mt-1 mb-4 text-off-black/70 text-sm">{experiences[experienceIdx].date}</div>
              {
                      experiences[experienceIdx].description.map((description) => (
                        <div className="list-element my-2 text-off-black/70 text-base font-normal tracking-wide">
                          {' '}
                          {description}
                        </div>
                      ))
                    }
            </div>
          </div>
          <div className="w-36 flex-shrink-0 border-l-1 border-grid" />
          <div className="w-32 flex-shrink-0 border-1 border-b-0 border-gray-500/40 border-t-0" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
