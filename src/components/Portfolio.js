/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React from "react"

const Portfolio = () => (
  <>
    <div id="portfolio" className="bg-zinc-800">
      &nbsp;
      <div className="portfolio-padding h-fit px-60 py-16">
        <div className="offsetSubtitle w-fit xs:mx-auto lg:ml-28 text-3xl font-medium tracking-wider text-slate-200">Portfolio</div>

        <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
          <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:left-0 md:left-10 z-10 md:mt-10 text-xl md:text-left font-medium tracking-normal text-slate-200">
            Plantr &nbsp;
            <p className="shadow-md my-2 xs:ml-2 md:ml-0 md:mr-10 pl-4 pr-4 py-4 text-slate-400 w-full rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
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
            <div className="my-2 text-main-teal font-light text-sm tracking-wide ">JavaScript &nbsp; React &nbsp; Google Natural Language API &nbsp; Pl@ntNet API &nbsp; WikiJS</div>
            <a href="https://github.com/jren2/Stock-Predictor" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
          <img alt="plantr" src={require("./images/plantr.png")} className="duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2  h-1/6 xs:right-0 md:right-10 relative mt-6 rounded-sm" />
        </div>

        <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
          <img alt="paper trader" src={require("./images/stock.png")} className="duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2 h-1/6 xs:left-0 md:left-10 relative mt-6 rounded-sm" />
          <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:right-0 md:right-10 z-10 md:mt-10 text-xl md:text-right font-medium tracking-normal text-slate-200">
            Stock Trading Simulator &nbsp;
            <div className="shadow-md my-2 xs:ml-2 md:ml-10 pl-4 pr-4 py-4 text-slate-400 rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
              A web app for simulating the stock trading experience without risking your own money! Sign up for an account to buy and sell real time updated stocks and view your progress in the
              portfolio tab.
            </div>
            <div className="my-2 text-main-teal font-light text-sm tracking-wide ">React &nbsp; JavaScript &nbsp; MongoDB &nbsp; Express JS &nbsp; Bootstrap</div>
            <a href="https://github.com/jren2/stock-trader" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
        </div>

        <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
          <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:left-0 md:left-10 z-10 md:mt-10 text-xl md:text-left font-medium tracking-normal text-slate-200">
            Stock Predictor Bot &nbsp;
            <div className="shadow-md my-2 xs:ml-2 md:ml-0 md:mr-10 pl-4 pr-4 py-4 text-slate-400 rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
              Retrieves real time stock prices from various tech stocks and calculates their RSI and mean reversion line. Analyzes these values and predicts future outcomes to arrive at one decision -
              buy or sell - automated on Alpaca.
            </div>
            <div className="my-2 text-main-teal font-light text-sm tracking-wide ">Python &nbsp; Pandas &nbsp; NumPy &nbsp; Matplotlib &nbsp; Alpaca API &nbsp;</div>
            <a href="https://github.com/jren2/Stock-Predictor" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
          <img
            alt="stock predictor"
            src={require("./images/stockPredictor.png")}
            className="duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2  h-1/6 xs:right-0 md:right-10 relative mt-6 rounded-sm"
          />
        </div>

        <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
          <img
            alt="paper trader"
            src={require("./images/sortingVisualizer.png")}
            className="duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2 h-1/6 xs:left-0 md:left-10 relative mt-6 rounded-sm"
          />
          <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:right-0 md:right-10 z-10 md:mt-10 text-xl md:text-right font-medium tracking-normal text-slate-200">
            Sorting Visualizer
            <div className="shadow-md my-2 xs:ml-2 md:ml-10 pl-4 pr-4 py-4 text-slate-400 rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
              A Java Swing app which simulates various sorts including Insertion Sort, Bubble Sort and Selection Sort while keeping track of the number of comparisons and displaying each at the end.
            </div>
            <div className="my-2 text-main-teal font-light text-sm tracking-wide ">Java &nbsp; Java Swing &nbsp;</div>
            <a href="https://github.com/jren2/Stock-Predictor" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
        </div>

        <div className="relative my-8 flex xs:flex-col md:flex-row items-center ">
          <div className="relative xs:text-center xs:mt-4 xs:m-auto xs:left-0 md:left-10 z-10 md:mt-10 text-xl md:text-left font-medium tracking-normal text-slate-200">
            Personal Website
            <div className="shadow-md my-2 xs:ml-2 md:ml-0 md:mr-10 pl-4 pr-4 py-4 text-slate-400 rounded-sm text-base font-normal tracking-wide bg-zinc-900/90">
              I created this website to experiment with Tailwind and React and centralize my projects!
            </div>
            <div className="my-2 text-main-teal font-light text-sm tracking-wide ">JavaScript &nbsp; React &nbsp; Tailwind &nbsp; Firebase &nbsp;</div>
            <a href="https://github.com/jren2/personal-website" target="_blank" className="hover:text-main-teal duration-300 hover:mr-1 text-base font-normal" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
          <img alt="stock predictor" src={require("./images/website.png")} className="duration-300 hover:scale-105 xs:m-auto md:mt-6 w-1/2 h-1/6 xs:right-0 md:right-10 relative mt-6 rounded-sm" />
        </div>
      </div>
    </div>
    <div className="bg-zinc-900">
      <svg className="-translate-y-2" width="full" height="41" viewBox="0 0 1514 41" fill="#1f2937" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40.5V0.5H753H1513.5V40.5C1242.5 -36.5003 1122.96 40.5 937 40.5C772 40.5 217.5 -34 0 40.5Z" fill="#27272a" />
      </svg>
    </div>
  </>
)

export default Portfolio
