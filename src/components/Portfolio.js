/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React, { useEffect } from "react"
import PortfolioCard from "./PortfolioCard"

const Portfolio = () => {
  useEffect(() => {
    document.getElementById("project-cards").onmousemove = e => {
      for(const card of document.getElementsByClassName("project-card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }
  }, [])

  return (
    <>
      <div id="portfolio" className="bg-zinc-800">
        &nbsp;
        <div className="portfolio-padding h-fit px-60 py-16">
          <div className="offsetSubtitle relative w-fit xs:mx-auto lg:ml-28 text-3xl font-medium tracking-wider text-slate-200">
            <div style={{ "--shift": "250px", "--duration": "0.4s", "--delay": "0.1s" }} className="typeDisappear absolute w-full h-full bg-zinc-800" />
            Portfolio
          </div>

          <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
            <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:left-0 md:left-10 z-10 md:mt-10 text-xl md:text-left font-medium tracking-normal text-slate-200">
              <div style={{"--delay" : "0.3s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 -translate-x-12">
                Sky High Entertainment &nbsp;
                <p className="shadow-md my-2 xs:ml-2 md:ml-0 md:mr-10 pl-4 pr-4 py-4 text-slate-200/70 w-full rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
                  An app that fulfills humanity's need for thematically appropriate in-flight entertainment. 
                  Search for flights based on price, destination, duration, and more, while receiving movie recommendations tailored to your flight specifics.
                  <br />
                  <br />
                  Enhance your travel experience with the perfect film that matches your flight time and location. 
                  Explore airport information and discover movies based on production country, companies, genres, and more.
                </p>
              </div>
              <div className="my-2 text-main-teal font-light text-sm tracking-wide flex flex-row">
                <div style={{"--delay" : "0.5s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  JavaScript &nbsp; 
                </div>
                <div style={{"--delay" : "0.56s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  React &nbsp; 
                </div>
                <div style={{"--delay" : "0.64s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  MySQL &nbsp; 
                </div>
                <div style={{"--delay" : "0.70s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  ExpressJS &nbsp; 
                </div>
                <div style={{"--delay" : "0.76s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  NodeJS &nbsp; 
                </div>
              </div>
              <div  style={{"--delay" : "0.8s", "--slideDuration":"0.2s"}}  className="slideUp opacity-0 -translate-x-6">
                <a href="https://github.com/jren2/sky-high-entertainment/" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
            <img alt="sky high entertainment" src={require("./images/projects/SkyHighEntertainment.png")} style={{"--delay" : "0.5s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 translate-x-12 duration-300 hover:scale-105 relative w-1/2 h-1/6 xs:m-auto md:mt-6 xs:right-0 md:right-10 mt-6 rounded-sm" />
          </div>

          <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
            <img alt="paper trader" src={require("./images/projects/pennbook.png")} style={{"--delay" : "0.5s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 -translate-x-12 duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2 h-1/6 xs:left-0 md:left-10 relative mt-6 rounded-sm" />
            <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:right-0 md:right-10 z-10 md:mt-10 text-xl md:text-right font-medium tracking-normal text-slate-200">
              <div style={{"--delay" : "0.3s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 translate-x-12">
                PennBook &nbsp;
                <div className="shadow-md my-2 xs:ml-2 md:ml-10 pl-4 pr-4 py-4 text-slate-200/70 rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
                  A scalable social media platform built on top of the cloud. Users can register accounts, add friends,
                  visualize their first and second degree friend networks, post dynamic content, and join real-time chat channels. 
                  Users will also be recommended relevant news articles based on their interests through distributed PageRank.
                </div>
              </div>
              <div className="my-2 text-main-teal font-light text-sm tracking-wide flex flex-row-reverse">
                <div style={{"--delay" : "0.5s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  React &nbsp; 
                </div>
                <div style={{"--delay" : "0.56s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  NodeJS &nbsp; 
                </div>
                <div style={{"--delay" : "0.64s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  Apache Spark &nbsp; 
                </div>
                <div style={{"--delay" : "0.70s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  DynamoDB &nbsp; 
                </div>
                <div style={{"--delay" : "0.76s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  AWS EC2 &nbsp; 
                </div>
              </div>
              <div  style={{"--delay" : "0.8s", "--slideDuration":"0.2s"}}  className="slideUp opacity-0 -translate-x-6">
                <a href="https://github.com/jren2/stock-trader" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
            <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:left-0 md:left-10 z-10 md:mt-10 text-xl md:text-left font-medium tracking-normal text-slate-200">
              <div style={{"--delay" : "0.3s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 -translate-x-12">
                Plantr &nbsp;
                <p className="shadow-md my-2 xs:ml-2 md:ml-0 md:mr-10 pl-4 pr-4 py-4 text-slate-200/70 w-full rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
                  Winner of{" "}
                  <a href="https://pennapps.com/" className="text-slate-300" target="_blank" rel="noreferrer">
                    PennApps XXIII
                  </a>{" "}
                  Best use of Web Automation/non-REST API Data Sources!
                  <br />
                  We built Plantr to use Pl@nt Net's image recognition to identify any picture of a plant you give it along with similar plants!
                  <br />
                  We then web scrape each plant's Wiki and run a sentiment analysis with Google's Natural Language API to help you decide if this plant is best for you!
                </p>
              </div>
              <div className="my-2 text-main-teal font-light text-sm tracking-wide flex flex-row">
                <div style={{"--delay" : "0.5s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  JavaScript &nbsp; 
                </div>
                <div style={{"--delay" : "0.56s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  React &nbsp; 
                </div>
                <div style={{"--delay" : "0.64s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  Google Natural Language API &nbsp; 
                </div>
                <div style={{"--delay" : "0.70s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  Pl@ntNet API &nbsp; 
                </div>
                <div style={{"--delay" : "0.76s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  WikiJS &nbsp; 
                </div>
              </div>
              <div  style={{"--delay" : "0.8s", "--slideDuration":"0.2s"}}  className="slideUp opacity-0 -translate-x-6">
                <a href="https://github.com/jren2/Stock-Predictor" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
            <img alt="plantr" src={require("./images/projects/plantr.png")} style={{"--delay" : "0.5s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 translate-x-12 duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2  h-1/6 xs:right-0 md:right-10 relative mt-6 rounded-sm" />
          </div>

          <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
            <img alt="paper trader" src={require("./images/projects/stock.png")} style={{"--delay" : "0.5s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 -translate-x-12 duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2 h-1/6 xs:left-0 md:left-10 relative mt-6 rounded-sm" />
            <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:right-0 md:right-10 z-10 md:mt-10 text-xl md:text-right font-medium tracking-normal text-slate-200">
              <div style={{"--delay" : "0.3s", "--slideDuration":"0.5s"}} className="slideUp opacity-0 translate-x-12">
                Stock Trading Simulator &nbsp;
                <div className="shadow-md my-2 xs:ml-2 md:ml-10 pl-4 pr-4 py-4 text-slate-200/70 rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
                  A web app for simulating the stock trading experience without risking your own money! Sign up for an account to buy and sell real time updated stocks and view your progress in the
                  portfolio tab.
                </div>
              </div>
              <div className="my-2 text-main-teal font-light text-sm tracking-wide flex flex-row-reverse">
                <div style={{"--delay" : "0.5s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  React &nbsp; 
                </div>
                <div style={{"--delay" : "0.56s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  JavaScript &nbsp; 
                </div>
                <div style={{"--delay" : "0.64s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  MongoDB &nbsp; 
                </div>
                <div style={{"--delay" : "0.70s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  ExpressJS &nbsp; 
                </div>
                <div style={{"--delay" : "0.76s", "--slideDuration":"0.2s"}} className="slideUp opacity-0 translate-y-4">
                  Bootstrap &nbsp; 
                </div>
              </div>
              <div  style={{"--delay" : "0.8s", "--slideDuration":"0.2s"}}  className="slideUp opacity-0 -translate-x-6">
                <a href="https://github.com/jren2/stock-trader" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>

          <div id="project-cards" className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 w-11/12 h-fit mx-auto text-slate-200">
            <PortfolioCard 
              title="Stock Predictor Bot" 
              link="https://github.com/jren2/Stock-Predictor" 
              description="Retrieves real time stock prices from tech stocks and predicts future outcomes with RSI and mean reversion." 
              technologies={["Python", "Pandas", "NumPy", "Matplotlib"]} 
            />
            <PortfolioCard 
              title="Penn Course Cart" 
              link="https://github.com/jren2/pennlabs-technical" 
              description="Allows students to search, filter, compare, and checkout their future courses based on difficulty, work required, and amount learned." 
              technologies={["TypeScript", "React", "Redux", "Tailwind"]} 
            />
            <PortfolioCard 
              title="Cassava Leaf Classifier" 
              description="A deep dive into CNNs, decision trees, and transfer learning to classify images of cassava leaves into 4 diseases with 89% accuracy." 
              technologies={["Python", "Pandas", "TensorFlow", "PyTorch"]} 
            />
            <PortfolioCard 
              title="Sorting Visualizer" 
              link="https://github.com/jren2/sorting-visualizer"
              description="Visualizes various sorts including Merge Sort, Insertion Sort and Selection Sort and compares their number of comparisons." 
              technologies={["Java", "Java Swing"]} 
            />
            <PortfolioCard 
              title="PennOS" 
              description="A full fledged OS with a file system, shell, and priority scheduler. Supports multiple processes and threads with contexts." 
              technologies={["C"]} 
            />
            <PortfolioCard 
              title="Personal Website" 
              link="https://github.com/jren2/personal-website"
              description="I created this website to experiment with Tailwind and React, showcase my projects, and build a place to get to know me better!" 
              technologies={["JavaScript", "React", "Tailwind", "Firebase"]} 
            />
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <svg className="-translate-y-2 w-full" height="41" viewBox="0 0 1514 41" fill="#1f2937" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40.5V0.5H753H1513.5V40.5C1242.5 -36.5003 1122.96 40.5 937 40.5C772 40.5 217.5 -34 0 40.5Z" fill="#27272a" />
        </svg>
      </div>
    </>
  )
}

export default Portfolio
