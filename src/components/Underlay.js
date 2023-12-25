import React, { useEffect } from 'react';

function Underlay({ sidebar, setSidebar }) {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <div id="underlay" className={`${sidebar ? 'opacity-100' : 'opacity-0'} ml-[6vw] flex flex-col duration-1000`}>
      <a href="#skills" onClick={() => setSidebar(false)} className={`${sidebar ? 'scale-100 translate-x-0' : 'scale-95 -translate-x-32'} mb-4 duration-500 flex flex-col w-full px-5`}>
        <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-medium tracking-wider">
          Skills
        </p>
        <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
          <img loading="lazy" alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]" src={require('./images/sidebar/skills.png')} />
        </div>
      </a>
      <a href="#experience" onClick={() => setSidebar(false)} className={`${sidebar ? 'scale-100 translate-x-0' : 'scale-95 -translate-x-32'} mb-4 duration-500 scale-95  flex flex-col w-full px-5`}>
        <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-medium tracking-wider">
          Experience
        </p>
        <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
          <img loading="lazy" alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]" src={require('./images/sidebar/experience.png')} />
        </div>
      </a>
      <a href="#portfolio" onClick={() => setSidebar(false)} className={`${sidebar ? 'scale-100 translate-x-0' : 'scale-95 -translate-x-32 '} mb-4 duration-500 scale-95  flex flex-col w-full px-5`}>
        <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-medium tracking-wider">
          Projects
        </p>
        <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
          <img loading="lazy" alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]" src={require('./images/sidebar/projects.png')} />
        </div>
      </a>
      <a href="#contact" onClick={() => setSidebar(false)} className={`${sidebar ? 'scale-100 translate-x-0' : 'scale-95 -translate-x-32'} duration-500 scale-95 flex flex-col w-full px-5`}>
        <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-medium tracking-wider">
          Contact
        </p>
        <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
          <img loading="lazy" alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]" src={require('./images/sidebar/contact.png')} />
        </div>
      </a>
    </div>
  );
}

export default Underlay;
