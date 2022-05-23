import github from './images/GitHub-Mark-Light-32px.png'

const Home = () => {
  return (
    <>
      <div class="bg-zinc-900">
        <div className="h-screen px-36 py-16 grid grid-cols-2 gap-4">
          <div className="mt-40">
            <div className="text-teal-400">
              Hi, my name is
            </div>
            <div className="text-slate-100 text-8xl font-bold my-6">
              Jason Ren
            </div>
            <div className="text-slate-200 w-96 text-lg tracking-wide">
              I'm a CS student with interests in software engineering and web development
            </div>
          </div>
          <div className="text-slate-100 text-center items-center">
            <img className="hover:rotate-180 duration-300 rounded-full mx-auto" width="400" height="1000" src="https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg"></img>
            <div className="mt-14">
              <a href="#" className=" m-10 p-4 rounded-lg hover:bg-teal-400/25 duration-300 text-teal-400 border-teal-400 border-2">
                Resume
              </a>

              <a href="https://github.com/jren2" target="_blank" className=" hover:bg-teal-400/25 duration-300 m-10 p-4 rounded-lg text-teal-400 border-teal-400 border-2">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/jason-ren-89855b203/" target="_blank" className=" hover:bg-teal-400/25 duration-300 m-10 p-4 rounded-lg text-teal-400 border-teal-400 border-2">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>
    </>
  )
}

export default Home