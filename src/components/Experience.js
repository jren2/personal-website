/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React from 'react';

const experiences = [
  {
    title: 'CIS 3200 TA',
    company: 'University of Pennsylvania',
    link: 'https://www.cis.upenn.edu/',
    date: 'Jan 2023 - May 2023, Aug 2023 - Present',
    description: [
      'TA\'d the advanced algorithms and data structures class of 175+ students in topics such as graphs algorithms, flow networks and approximation algorithms.',
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
  return (
    <div id="experience" className="bg-zinc-800">
      &nbsp;
      <div className="experience-padding h-fit py-16">
        <div className="relative experienceSubtitle mb-10 text-center w-fit mx-auto text-3xl font-medium tracking-wider text-slate-200">
          <div 
            style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} 
            className="typeDisappear absolute w-full h-full bg-zinc-800"
          />
          Experience
        </div>
        {
          experiences.map((experience) => (
            <div 
              style={{ '--delay': '0.2s', '--slideDuration': '0.2s' }} 
              className="flex slideUp opacity-0 translate-y-5 xs:flex-col xs:items-center md:flex-row mt-12 mb-6 gap-4"
            >
              <img alt="css logo" width="180" className="rounded-3xl" src={experience.image} />
              <div className="text-xl xs:text-center md:text-left font-medium tracking-normal text-slate-200">
                {experience.title}
                <a href={experience.link} target="blank_" className="text-main-teal inline">
                  {' '}
                  @ 
                  {' '}
                  {experience.company}
                  {' '}
                </a>
                <div className="mt-1 mb-4 text-slate-200/70 text-sm">{experience.date}</div>
                {
                  experience.description.map((description) => (
                    <div className="list-element my-2 text-slate-200/70 text-base font-normal tracking-wide">
                      {' '}
                      {description}
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Experience;
