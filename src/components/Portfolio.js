/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import PortfolioCard from './PortfolioCard';

const featuredProjects = [
  {
    image_alt: 'pick it project',
    image_src: require('./images/projects/pickit.png'),
    title: 'Pick.It',
    description: [
      'A medical supply delivery management system built for nurses and storeroom managers to save time, supplies, and money with an efficient setup.',
      'Optimize and analyze your supply usage with an intuitive supply analytics dashboard. Track your supply orders and increase patient satisfaction.',
    ],
    technologies: ['Jest', 'MongoDB', 'NodeJS', 'React', 'JavaScript', 'GitHub Actions'],
    position: 'right',
    github: '',
  },
  {
    image_alt: 'sky high entertainment project',
    image_src: require('./images/projects/SkyHighEntertainment.png'),
    title: 'Sky High Entertainment',
    description: [
      'An app that fulfills humanity\'s need for thematically appropriate flight entertainment. Filter flights based on price, destination, duration, and more, while receiving movies tailored to your flight.',
      'Explore airport information and discover movies based on production country, companies, genres, and more.',
    ],
    technologies: ['JavaScript', 'React', 'MySQL', 'ExpressJS', 'NodeJS'],
    position: 'left',
    github: 'https://github.com/jren2/sky-high-entertainment/',
  },
  {
    image_alt: 'pennbook project',
    image_src: require('./images/projects/pennbook.png'),
    title: 'PennBook',
    description: [
      'A scalable social media platform built on the cloud. Users can register accounts, visualize their friend networks, join real-time chat channels and read relevant news articles powered by distributed PageRank.',
    ],
    technologies: ['React', 'NodeJS', 'AWS EC2', 'Apache Spark', 'DynamoDB'],
    position: 'right',
    github: '',
  },
  {
    image_alt: 'plantr project',
    image_src: require('./images/projects/plantr.png'),
    title: 'Plantr',
    description: [
      'Winner of PennApps \'23 Best use of non-REST API Data Sources!',
      'A plant image recognition + identification service utilizing Google NLP API!',
    ],
    technologies: ['JavaScript', 'React', 'WikiJS', 'Google NLP', 'Pl@ntNet API'],
    position: 'left',
    github: 'https://devpost.com/software/some-name-z93vhn',
  },
  {
    image_alt: 'penn course cart',
    image_src: require('./images/projects/pennbook.png'),
    title: 'Penn Course Cart',
    description: [
      'A platform for students to search, filter, compare, and checkout their future courses based on difficulty, work required, and amount learned.',
    ],
    technologies: ['TypeScript', 'React', 'Redux', 'Tailwind'],
    position: 'left',
    github: 'https://github.com/jren2/pennlabs-technical',
  },
];

const portfolioProjects = [
  {
    title: 'DailyXpert',
    link: '',
    description: 'Keeping up with your hundreds of followed X accounts is hard! Authenticate your X account for daily personalized summaries from your followed accounts.',
    technologies: ['React', 'NodeJS', 'X API', 'OpenAI'],
  },
  {
    title: 'Penn Search',
    link: '',
    description: 'A peer-to-peer search engine built on ns3 implementing the Chord DHT architecture. Supports finger table efficient and fully distributed text search and storage.',
    technologies: ['C++', 'ns3'],
  },
  {
    title: 'Leo DiCaprio Detector',
    link: 'https://github.com/jren2/CIS581',
    description: 'A deep learning architecture built from MTCNN and fine tuned InceptionResNet50 for detecting images of Leonardo DiCaprio on real time video feed 96% accuracy.',
    technologies: ['Python', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Stock Trading Simulator',
    link: 'https://github.com/jren2/stock-trader',
    description: 'Simulate the stock trading experience without risking your own money! Register an account to buy and sell real time paper stocks and update your portfolio.',
    technologies: ['React', 'ExpressJS', 'MongoDB', 'Bootstrap'],
  },
  {
    title: 'Cassava Leaf Classifier',
    link: '',
    description: 'A deep dive into CNNs, decision trees, and transfer learning to classify images of cassava leaves into 4 disease classifications with 89% accuracy.',
    technologies: ['Python', 'Pandas', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Sorting Visualizer',
    link: 'https://github.com/jren2/sorting-visualizer',
    description: 'Visualizes various sorts including Merge Sort, Insertion Sort and Selection Sort and compares/displays each of their number of comparisons to compare efficiency.',
    technologies: ['Java', 'Java Swing'],
  },
  {
    title: 'PennOS',
    link: '',
    description: 'A full fledged OS with a file system, shell, and priority scheduler. Supports multiple processes and threads with contexts.',
    technologies: ['C'],
  },
  {
    title: 'Personal Website',
    link: 'https://github.com/jren2/personal-website',
    description: 'I created this website to experiment with Tailwind and React, showcase my projects, and build a place to get to know me better!',
    technologies: ['JavaScript', 'React', 'Tailwind', 'Firebase'],
  },
];

function Portfolio() {
  useEffect(() => {
    const highlight = (elements, clientX, clientY) => {
      Array.from(elements).forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.getElementById('project-cards').onmousemove = (e) => {
      highlight(document.getElementsByClassName('project-card'), e.clientX, e.clientY);
    };
  }, []);

  return (
    <div id="portfolio" className="bg-white-background px-32">
      <div className="h-fit border-l-1 border-r-1 border-t-1 border-grid">
        <div className="w-full h-5 border-1 border-t-0 border-grid" />
        <div className="h-20 w-full flex items-center px-10 text-4xl font-medium mx-auto border-b-1 border-grid">
          Portfolio
        </div>
        <div className="flex flex-row p-2 border-b-1 border-grid h-fit">
          <div className="w-[62%] pr-2">
            {
                featuredProjects.slice(0, 2).map((project) => (
                  <div className="relative group rounded-lg border-1 overflow-hidden border-grid mb-2">
                    <img
                      alt={project.image_alt}
                      src={project.image_src}
                      style={{ '--delay': '0.5s', '--slideDuration': '0.5s' }}
                      className="rounded-lg z-40"
                    />
                    <div className="group-hover:right-0 p-2 px-4 duration-150 bg-[#f4f3f1] top-0 ease-in-out rounded-lg -right-[45%] w-[45%] h-full z-20 absolute border-grid border-1 border-r-0">
                      <div className="text-2xl text-off-black font-medium w-fit mx-auto mb-2">
                        {project.title}
                      </div>
                      <div className="text-off-black/70">
                        {
                          project.description.map((description) => (
                            <div className="mb-2">
                              {description}
                            </div>
                          ))
                        }
                      </div>
                      <div className="group flex flex-row flex-wrap mt-2">
                        {
                          project.technologies.map((technology) => (
                            <div className=" bg-[#7256ff] text-xs mr-1 my-1 rounded-3xl  py-1 px-2 text-[#f4f3f1]">
                              {technology}
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                ))
                }
          </div>
          <div className="w-[38%]">
            {
                featuredProjects.slice(2, 5).map((project) => (
                  <div className="relative group rounded-lg border-1 overflow-hidden border-grid mb-2">
                    <img
                      alt={project.image_alt}
                      src={project.image_src}
                      style={{ '--delay': '0.5s', '--slideDuration': '0.5s' }}
                      className="rounded-lg z-40"
                    />
                    <div className="group-hover:right-0 p-2 px-4 duration-150 bg-[#f4f3f1] top-0 ease-in-out rounded-lg -right-[50%] w-[50%] h-full z-20 absolute border-grid border-1 border-r-0">
                      <div className="text-lg text-off-black font-medium w-fit mx-auto mb-1">
                        {project.title}
                      </div>
                      <div className="text-sm text-off-black/70">
                        {
                        project.description.map((description) => (
                          <div className="mb-2">
                            {description}
                          </div>
                        ))
                      }
                      </div>
                      <div className="group flex flex-row flex-wrap mt-2">
                        {
                        project.technologies.map((technology) => (
                          <div className=" bg-[#7256ff] text-xs mr-1 mb-1 rounded-3xl  py-1 px-2 text-[#f4f3f1]">
                            {technology}
                          </div>
                        ))
                      }
                      </div>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
        <div
          id="project-cards"
          className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 w-full h-fit mx-auto text-off-black"
        >
          {
              portfolioProjects.map((project, idx) => (
                <PortfolioCard
                  index={idx}
                  title={project.title}
                  link={project.link}
                  description={project.description}
                  technologies={project.technologies}
                />
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
