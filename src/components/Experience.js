/* eslint-disable global-require */
import React from 'react'

const Experience = () => (
  <>
    <div id="experience" className="bg-zinc-800">
      <div className="h-screen px-36 py-16">
        <div className="text-center text-3xl text-slate-200">Experience</div>
        <img alt="juni logo" className="rounded-3xl" src={require('./images/juni.png')} />
      </div>
    </div>
  </>
)

export default Experience
