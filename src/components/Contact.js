/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GithubButton from './GithubButton';
import LinkedinButton from './LinkedinButton';
import ResumeButton from './ResumeButton';

function Contact() {
  return (
    <div>
      <div id="contact" className="bg-zinc-900 m-auto w-fit pt-10 pb-20 px-20">
        <div className="relative mb-2 w-fit mx-auto text-3xl font-medium text-slate-200">
          <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-zinc-900" />
          Contact
        </div>
        <div className="mb-2 text-center text-base font-medium tracking-wide text-slate-200/50"> Feel free to reach out to me through any of the resources below!</div>
        <div className="text-center mt-6 flex xs:flex-col sm:flex-row">
          <div className="flex xs:flex-col m-auto sm:flex-row">
            <ResumeButton />
          </div>
          <div className="flex xs:flex-col m-auto sm:flex-row">
            <GithubButton />
            <LinkedinButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
