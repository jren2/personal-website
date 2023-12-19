import React from 'react';
import { motion } from 'framer-motion';
import { firebaseLink } from '../config';

function Overlay({ sidebar, setSidebar }) {
  const genericHamburgerLine = 'h-[2px] w-5 my-[3px] bg-zinc-800 transition ease transform duration-300';

  const rotate = () => {
    const v = document.getElementById('v');
    const i = document.getElementById('i');
    const e = document.getElementById('e');
    const w = document.getElementById('w');
    const s = document.getElementById('s');

    v.classList.add('-translate-y-[19px]', '-translate-x-[16px]', '-rotate-[60deg]');
    i.classList.add('-translate-y-[17px]', '-translate-x-[14px]', '-rotate-[42deg]');
    e.classList.add('-translate-y-[23px]', '-translate-x-[14px]', '-rotate-[32deg]');
    w.classList.add('-translate-y-[27px]', '-translate-x-[14px]', '-rotate-[12deg]');
    s.classList.add('-translate-y-[28px]', '-translate-x-[13px]', 'rotate-[9deg]');
  };

  const unrotate = () => {
    const v = document.getElementById('v');
    const i = document.getElementById('i');
    const e = document.getElementById('e');
    const w = document.getElementById('w');
    const s = document.getElementById('s');

    v.classList.remove('-translate-y-[19px]', '-translate-x-[16px]', '-rotate-[60deg]');
    i.classList.remove('-translate-y-[17px]', '-translate-x-[14px]', '-rotate-[42deg]');
    e.classList.remove('-translate-y-[23px]', '-translate-x-[14px]', '-rotate-[32deg]');
    w.classList.remove('-translate-y-[27px]', '-translate-x-[14px]', '-rotate-[12deg]');
    s.classList.remove('-translate-y-[28px]', '-translate-x-[13px]', 'rotate-[9deg]');
  };

  const shift = (home) => {
    if (sidebar) {
      const elements = document.querySelectorAll('.overlay-element');
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].style.left = '0';
      }
      const underlayWrapperElement = document.getElementById('underlay-wrapper');
      underlayWrapperElement.classList.remove('duration-[1500ms]');
      underlayWrapperElement.classList.remove('z-10');
      underlayWrapperElement.classList.add('-z-10');
      document.getElementById('body').classList.remove('translate-x-[26vw]');

      const underlayElements = document.querySelectorAll('.underlay-element');
      for (let i = 0; i < underlayElements.length; i += 1) {
        underlayElements[i].classList.remove('scale-100');
        underlayElements[i].classList.add('scale-95');
        underlayElements[i].classList.add('-translate-x-32');
      }
      setSidebar(!sidebar);
    } else if (!home) {
      const elements = document.querySelectorAll('.overlay-element');
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].style.left = '26vw';
      }
      const underlayWrapperElement = document.getElementById('underlay-wrapper');
      underlayWrapperElement.classList.add('duration-[1500ms]');
      underlayWrapperElement.classList.remove('-z-10');
      underlayWrapperElement.classList.add('z-10');

      const underlayElements = document.querySelectorAll('.underlay-element');
      for (let i = 0; i < underlayElements.length; i += 1) {
        underlayElements[i].classList.remove('scale-95');
        underlayElements[i].classList.remove('-translate-x-32');
        underlayElements[i].classList.add('scale-100');
      }
      document.getElementById('body').classList.add('translate-x-[26vw]');
      setSidebar(!sidebar);
    }
  };

  return (
    <>
      <div className="overlay-element left-0 flex duration-500 w-full flex-nowrap top-4 fixed z-50">
        <a href="#home" onClick={() => shift(true)} className="flex flex-row ml-4 h-14 w-14">
          <svg width="50" height="50" viewBox="0 0 245 273" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M137.149 7.18122L226.259 58.8111C235.519 64.1761 241.219 74.0673 241.219 84.7688V188.231C241.219 198.933 235.519 208.824 226.259 214.189L137.149 265.819C127.847 271.208 116.372 271.208 107.07 265.819L17.9602 214.189C8.7006 208.824 3.00001 198.933 3.00001 188.231V84.7688C3.00001 74.0673 8.70059 64.1761 17.9602 58.8111L107.07 7.18123C116.372 1.79152 127.847 1.79152 137.149 7.18122Z"
              stroke="#06CBB9"
              strokeWidth="6"
            />
            <path d="M108.666 57.9592C108.143 58.3252 107.644 58.8743 107.53 59.1718C107.417 59.4463 107.281 81.9591 107.212 109.208C107.076 164.094 107.144 161.097 105.6 165.833C104.806 168.235 103.83 170.775 103.58 171.095C103.466 171.21 102.967 172.148 102.422 173.154C100.083 177.639 95.5198 182.558 90.5022 185.989C89.4124 186.744 85.8932 188.643 84.5082 189.238C78.0603 191.984 69.5689 193.15 63.9609 192.052C63.3252 191.938 62.1673 191.709 61.35 191.572C58.8298 191.091 54.5614 189.536 51.9277 188.117C49.4984 186.813 49.2259 186.63 47.8637 185.715C46.0246 184.479 45.5251 184.113 43.4136 182.466C42.3919 181.665 41.3021 180.933 41.007 180.796C39.2588 180.132 37.5332 181.002 36.4889 183.084C36.1256 183.816 36.1256 183.907 36.5116 184.914C37.0792 186.401 40.5075 189.559 44.0948 191.892C44.6624 192.258 45.3662 192.739 45.6841 192.945C46.9328 193.768 51.8142 196.148 52.3137 196.148C52.4726 196.148 52.9267 196.308 53.29 196.514C54.4479 197.154 58.3303 198.161 62.2808 198.87C64.3696 199.259 65.8454 199.351 69.2056 199.328C71.5668 199.328 74.0189 199.236 74.6319 199.099C75.2676 198.985 76.698 198.733 77.8332 198.55C78.9684 198.367 80.4896 198.001 81.2161 197.749C81.9427 197.497 82.6919 197.292 82.8963 197.292C83.1006 197.292 83.7817 197.04 84.3947 196.72C85.0304 196.422 85.6662 196.148 85.8478 196.148C86.143 196.148 88.368 195.164 89.5713 194.523C90.9789 193.768 92.0915 193.105 93.2267 192.35C94.2938 191.64 95.5198 190.817 96.4507 190.176C98.6984 188.643 103.761 183.404 105.464 180.819C105.669 180.498 106.145 179.812 106.531 179.263C106.895 178.737 107.439 177.867 107.712 177.364C108.007 176.838 108.507 175.946 108.847 175.351C109.188 174.779 109.574 174.047 109.71 173.726C110.8 171.393 111.072 170.706 111.072 170.455C111.072 170.294 111.277 169.768 111.526 169.288C111.753 168.807 112.071 167.846 112.23 167.137C112.366 166.428 112.639 165.444 112.82 164.941C113.002 164.415 113.297 162.767 113.502 161.257C113.842 158.832 113.887 153.112 113.956 111.633C114.024 68.6207 114.069 64.7085 114.41 64.3195C114.75 63.9306 115.954 63.9077 140.111 63.9077C154.233 63.9077 166.697 64.0221 168.264 64.1365C171.919 64.4339 176.279 65.5779 179.525 67.1336C180.025 67.3624 180.797 67.7285 181.228 67.9115C183.226 68.8266 185.587 70.3595 187.949 72.3042C190.151 74.0888 193.579 77.5435 194.306 78.6874C194.533 79.0535 195.123 79.9 195.6 80.5635C197.416 83.0802 199.233 87.1755 200.118 90.7904C200.368 91.7971 200.708 93.124 200.89 93.7646C201.299 95.3204 201.503 100.674 201.253 102.916C200.981 105.113 199.936 110.077 199.664 110.443C199.55 110.581 199.301 111.153 199.096 111.725C197.484 116.369 194.533 120.83 190.31 124.949C189.379 125.887 188.357 126.802 188.039 127.008C187.722 127.214 186.904 127.808 186.223 128.312C184.611 129.501 183.09 130.417 181.115 131.378C180.252 131.789 179.23 132.293 178.844 132.499C178.481 132.704 177.664 132.979 177.028 133.139C176.415 133.299 175.484 133.574 174.984 133.757C174.485 133.94 173.168 134.26 172.033 134.466C170.92 134.672 169.535 134.924 168.968 135.061C168.4 135.175 164.836 135.267 161.021 135.29C155.118 135.29 154.006 135.336 153.574 135.656C153.302 135.839 153.075 136.182 153.075 136.388C153.098 136.754 153.779 138.035 154.755 139.545C155.209 140.232 155.913 141.376 156.867 142.886C157.162 143.366 157.638 144.144 157.911 144.602C158.206 145.082 158.751 145.951 159.114 146.546C160.159 148.262 161.93 151.122 162.565 152.106C163.36 153.341 163.814 154.119 166.039 157.711C167.083 159.404 168.151 161.12 168.4 161.509C168.65 161.921 169.036 162.539 169.24 162.882C169.467 163.248 169.763 163.751 169.921 163.98C171.738 166.725 172.601 168.144 172.601 168.373C172.601 168.51 172.759 168.762 172.964 168.945C173.145 169.105 173.509 169.608 173.758 170.043C174.008 170.5 174.508 171.324 174.871 171.896C175.257 172.468 175.711 173.223 175.893 173.612C176.074 173.978 176.415 174.55 176.665 174.87C176.892 175.191 177.346 175.877 177.664 176.403C178.004 176.952 178.549 177.822 178.89 178.348C179.207 178.897 179.73 179.721 180.025 180.178C180.32 180.659 180.819 181.482 181.16 182.008C181.478 182.558 181.977 183.358 182.25 183.793C182.522 184.228 183.022 185.028 183.34 185.555C184.066 186.744 184.793 187.888 185.678 189.307C186.041 189.902 186.745 191.023 187.245 191.824C188.811 194.34 189.038 194.706 189.788 195.965C191.173 198.321 192.126 198.87 194.215 198.596C194.873 198.504 195.373 198.23 195.963 197.658C196.712 196.903 196.781 196.72 196.758 195.507C196.758 194.455 196.622 193.997 196.099 193.173C195.486 192.212 195.191 191.732 193.874 189.559C193.579 189.101 193.057 188.254 192.694 187.682C192.331 187.11 191.808 186.264 191.513 185.783C190.855 184.708 190.015 183.381 189.243 182.123C188.925 181.597 188.403 180.773 188.108 180.293C187.812 179.835 187.336 179.057 187.04 178.577C186.745 178.119 186.223 177.227 185.86 176.632C185.497 176.014 184.974 175.236 184.702 174.893C184.429 174.527 184.089 174.001 183.953 173.703C183.816 173.406 183.43 172.72 183.09 172.216C182.749 171.69 181.864 170.249 181.115 169.036C180.365 167.801 179.525 166.428 179.23 165.97C178.958 165.513 178.526 164.781 178.299 164.323C178.05 163.888 177.686 163.385 177.505 163.225C177.3 163.042 177.141 162.836 177.141 162.722C177.141 162.63 176.596 161.715 175.961 160.708C175.302 159.679 174.258 158.031 173.622 157.002C171.284 153.158 170.489 151.9 169.059 149.703C168.446 148.765 167.901 147.873 167.855 147.759C167.81 147.622 167.56 147.164 167.265 146.729C164.995 143.16 164.927 143 165.085 142.52C165.244 142.131 165.54 142.016 166.72 141.879C167.515 141.787 169.308 141.604 170.671 141.467C172.056 141.307 173.736 141.032 174.417 140.826C175.098 140.643 176.392 140.3 177.255 140.071C180.138 139.339 184.089 137.623 187.608 135.564C192.648 132.613 198.688 126.779 201.594 122.02C202.661 120.258 204.523 116.804 205.022 115.614C206.067 113.166 206.997 109.963 207.588 106.806C208.155 103.831 208.405 97.7684 208.065 95.3661C207.088 88.8457 206.362 86.3061 203.887 81.1812C200.504 74.0888 194.805 67.9344 187.585 63.5874C187.154 63.3128 186.586 62.9697 186.337 62.8095C185.655 62.3977 182.159 60.7047 181.977 60.7047C181.887 60.7047 181.41 60.5216 180.91 60.2699C179.639 59.698 175.938 58.5769 173.055 57.9363L170.671 57.3872L140.134 57.3186L109.596 57.2499L108.666 57.9592Z" fill="url(#paint0_linear_0_1)" />
            <path d="M132.641 135.862C132.346 136.228 132.641 137.006 133.776 138.722C133.981 139.042 134.412 139.705 134.73 140.209C135.048 140.712 135.479 141.421 135.729 141.787C135.956 142.153 136.251 142.611 136.387 142.817C136.501 143.023 137.159 144.052 137.84 145.128C139.021 146.981 139.43 147.644 140.656 149.635C141.814 151.511 142.381 152.403 143.494 154.119C144.152 155.103 144.674 155.972 144.674 156.064C144.674 156.155 144.992 156.636 145.356 157.116C145.741 157.62 146.037 158.1 146.037 158.192C146.037 158.283 146.786 159.496 147.694 160.868C148.58 162.241 149.851 164.209 150.464 165.238C151.1 166.268 152.348 168.258 153.279 169.677C154.187 171.072 155.027 172.445 155.141 172.697C155.255 172.948 155.527 173.406 155.754 173.726C156.004 174.047 156.435 174.71 156.753 175.213C157.888 177.044 159.069 178.897 159.932 180.224C160.408 180.956 160.794 181.597 160.794 181.665C160.794 181.734 161.09 182.192 161.43 182.718C161.793 183.244 162.338 184.09 162.656 184.594C162.951 185.097 163.496 185.944 163.814 186.47C164.155 187.019 164.677 187.843 164.972 188.3C165.244 188.781 165.948 189.879 166.516 190.771C167.083 191.64 167.674 192.624 167.833 192.945C167.992 193.265 168.332 193.768 168.559 194.089C168.809 194.409 169.331 195.187 169.717 195.804C171.238 198.23 171.806 198.664 173.486 198.664C174.803 198.664 175.62 198.275 176.188 197.337C177.051 196.01 177.051 195.278 176.233 193.631C175.825 192.83 175.325 191.915 175.098 191.595C174.644 190.908 172.805 188.003 171.965 186.653C171.647 186.15 171.102 185.303 170.739 184.777C170.398 184.251 170.103 183.724 170.103 183.61C170.103 183.496 169.944 183.267 169.763 183.107C169.513 182.901 168.355 181.048 167.833 180.018C167.765 179.881 167.22 179.011 166.607 178.073C165.994 177.135 165.267 175.991 164.995 175.557C164.722 175.122 163.973 173.955 163.337 172.971C162.679 171.988 162.157 171.141 162.157 171.072C162.157 171.004 161.861 170.523 161.521 169.997C161.158 169.471 160.59 168.601 160.272 168.052C159.932 167.526 159.409 166.703 159.114 166.222C158.842 165.764 158.093 164.598 157.48 163.66C156.867 162.722 156.254 161.738 156.117 161.486C155.845 161.006 155.118 159.816 153.643 157.482C153.143 156.704 152.439 155.583 152.076 154.989C151.713 154.417 150.986 153.273 150.464 152.449C149.942 151.625 148.875 149.932 148.08 148.674C147.308 147.416 146.082 145.448 145.333 144.327C144.606 143.183 143.789 141.856 143.516 141.376C143.267 140.895 142.949 140.369 142.835 140.232C142.495 139.843 141.541 138.31 141.178 137.623C140.996 137.28 140.52 136.663 140.134 136.251L139.43 135.519H136.183C133.527 135.519 132.868 135.587 132.641 135.862Z" fill="url(#paint1_linear_0_1)" />
            <defs>
              <linearGradient id="paint0_linear_0_1" x1="212.219" y1="59.25" x2="39.2192" y2="203.75" gradientUnits="userSpaceOnUse">
                <stop offset="0.09375" stopColor="#B9FFF8" />
                <stop offset="0.317708" stopColor="#03DAC6" />
                <stop offset="0.770833" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#503295" />
              </linearGradient>
              <linearGradient id="paint1_linear_0_1" x1="177.871" y1="136.407" x2="116.581" y2="166.079" gradientUnits="userSpaceOnUse">
                <stop offset="0.09375" stopColor="#B9FFF8" />
                <stop offset="0.317708" stopColor="#03DAC6" />
                <stop offset="0.770833" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#503295" />
              </linearGradient>
            </defs>
          </svg>

          {/* <img alt="logo" className="rounded-3xl" src={require("./images/icons/logo.png")} /> */}
        </a>
        <a
          href={firebaseLink}
          target="_blank"
          className="ml-auto mr-4"
          rel="noreferrer"
        >
          <p className="text-main-teal border border-1 p-2 px-4 text-sm border-main-teal rounded-md hover:bg-main-teal/10 duration-200"> Resume</p>
        </a>
      </div>
      <div id="sidebar-button">
        <div className={`z-40 left-0 fixed duration-150 ${sidebar ? 'text-zinc-800' : 'text-slate-300'} top-[40vh] ml-6 rotate-[75deg] flex flex-row`}>
          <div id="v" className="ml-2 mt-3 duration-150">{sidebar ? 'C' : 'V'}</div>
          <div id="i" className="duration-200 ">{sidebar ? 'l' : 'i'}</div>
          <div id="e" className="duration-[300ms] ">{sidebar ? 'o' : 'e'}</div>
          <div id="w" className="duration-[400ms] ">{sidebar ? 's' : 'w'}</div>
          <div id="s" className="duration-[500ms] ">{sidebar ? 'e' : 's'}</div>
        </div>
        <motion.div
          className={`${sidebar ? 'bg-zinc-800' : 'bg-main-teal'} duration-500 shadow shadow-zinc-800 left-0 ml-6 cursor-pointer fixed w-12 h-12 rounded-full z-50 top-[40vh]`}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => rotate()}
          onHoverEnd={() => unrotate()}
          onClick={() => shift(false)}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <button
            type="button"
            className="flex flex-col h-12 w-12 justify-center items-center group"
          >
            <div
              className={`${genericHamburgerLine} ${
                sidebar
                  ? 'rotate-45 translate-y-2 bg-[#a2a19b] group-hover:bg-[#f1efe6]'
                  : 'opacity-0 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                sidebar ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                sidebar
                  ? '-rotate-45  -translate-y-2 bg-[#a2a19b] group-hover:bg-[#f1efe6]'
                  : 'opacity-0 group-hover:opacity-100'
              }`}
            />
          </button>
        </motion.div>
      </div>
      <div className="flex flex-nowrap overlay-element duration-500 fixed ml-4 left-0 top-[76vh] text-slate-300 text-3xl z-40">
        <div className="relative">
          <div className="ml-6 hover:-translate-y-1 hover:text-main-teal duration-300 w-6 h-6">
            <a href="https://github.com/jren2" aria-label="GitHub" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
            </a>
          </div>
          <div className="ml-6 hover:-translate-y-1 hover:text-main-teal duration-300 my-4 w-6 h-6">
            <a href="https://www.instagram.com/_jren2/" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"

              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
          <div className="ml-6 hover:-translate-y-1 hover:text-main-teal duration-300 w-6 h-6">
            <a href="https://www.linkedin.com/in/jasonrendev" aria-label="Linkedin" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"

              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="overlay-bar relative mt-28 -left-[13px] w-2 h-[14vh]" />
      </div>

      <div className="flex flex-col z-40 overlay-text fixed right-6 text-slate-300 text-sm tracking-widest">
        <div className="overlay-text rotate-90 fixed mt-10 w-8 h-28">jren2@seas.upenn.edu</div>
        <div className="overlay-bar fixed mt-10 right-8 w-2 h-1/6" />
      </div>
    </>
  );
}

export default Overlay;
