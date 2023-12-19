import React from 'react';
import GithubIcon from './GithubIcon';

function PortfolioCard({
  title, description, technologies, link,
}) {
  return (
    <div className="project-card p-6 cursor-default group hover:scale-105 duration-200 overflow-hidden relative border border-zinc-800 bg-zinc-900/50 rounded-lg shadow-md w-full h-full">
      <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-folder text-main-teal" viewBox="0 0 16 16">
          <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
        </svg>
        {
        link && (
          <a href={link} className="w-fit h-fit z-50 ml-auto mt-2 hover:text-main-teal" aria-label="GitHub" target="_blank" rel="noreferrer" cursorshover="true">
            <GithubIcon />
          </a>
        )
      }
      </div>
      <div className="font-medium text-xl tracking-wide mt-5 group-hover:text-main-teal">
        {title}
      </div>
      <div className="text-slate-200/70 text-sm mt-2">
        {description}
      </div>
      <div className="mt-4 text-xs text-slate-200/50">
        {
          technologies.map((technology, index) => (
            <span key={technology} className="mr-2">
              {technology}
            </span>
          ))
        }
      </div>
    </div>
  );
}

export default PortfolioCard;
