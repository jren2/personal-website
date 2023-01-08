import { useEffect } from "react"

const Underlay = ({sidebar, setSidebar}) => {
  const shift = () => {
    if (sidebar) {
      document.getElementById("body").classList.remove("translate-x-[26vw]")

      const underlayWrapperElement = document.getElementById("underlay-wrapper")
      underlayWrapperElement.classList.remove("duration-[1500ms]")
      underlayWrapperElement.classList.remove("z-10")
      underlayWrapperElement.classList.add("-z-10")

      const elements = document.querySelectorAll(".overlay-element")
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.left = "0"
      }

      const underlayElements = document.querySelectorAll(".underlay-element")
      for (let i = 0; i < underlayElements.length; i++) {
        underlayElements[i].classList.remove("scale-100")
        underlayElements[i].classList.add("scale-95")
        underlayElements[i].classList.add("-translate-x-32")
      }
    } else {
      document.getElementById("body").classList.add("translate-x-[26vw]")

      const underlayWrapperElement = document.getElementById("underlay-wrapper")
      underlayWrapperElement.classList.add("duration-[1500ms]")
      underlayWrapperElement.classList.remove("-z-10")
      underlayWrapperElement.classList.add("z-10")

      const underlayElements = document.querySelectorAll(".underlay-element")
      for (let i = 0; i < underlayElements.length; i++) {
        underlayElements[i].classList.remove("scale-95")
        underlayElements[i].classList.remove("-translate-x-32")
        underlayElements[i].classList.add("scale-100")
      }

      const elements = document.querySelectorAll(".overlay-element")
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.left = "26vw"
      }
    }
    setSidebar(!sidebar)
  }
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }, [])

  return (
    <>
      <div className="ml-[6vw] flex flex-col">
        <a href="#skills" onClick={() => shift(false)} className="underlay-element mb-4 duration-500 scale-95 -translate-x-32 flex flex-col w-full px-5">
          <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-semibold tracking-wider">
            Skills
          </p>
          <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
            <img alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]"  src={require("./images/skills.png")} />
          </div>
        </a>
        <a href="#experience" onClick={() => shift(false)}  className="underlay-element mb-4 duration-500 scale-95 -translate-x-32 flex flex-col w-full px-5">
          <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-semibold tracking-wider">
            Experience
          </p>
          <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
            <img alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]"  src={require("./images/experience.png")} />
          </div>
        </a>
        <a href="#portfolio" onClick={() => shift(false)}  className="underlay-element mb-4 duration-500 scale-95 -translate-x-32 flex flex-col w-full px-5">
          <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-semibold tracking-wider">
            Projects
          </p>
          <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
            <img alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]"  src={require("./images/projects.png")} />
          </div>
        </a>
        <a href="#contact" onClick={() => shift(false)}  className="underlay-element duration-500 scale-95 -translate-x-32 flex flex-col w-full px-5">
          <p className="w-fit pl-1 pb-1 text-left text-zinc-900 uppercase font-semibold tracking-wider">
            Contact
          </p>
          <div className="cursor-pointer bg-zinc-800 overflow-hidden max-w-[18vw] w-[17vw] rounded-lg">
            <img alt="logo" className="hover:scale-95 duration-150 rounded-lg w-[17vw]"  src={require("./images/contact.png")} />
          </div>
        </a>
      </div>
    </>
  )
}

export default Underlay
