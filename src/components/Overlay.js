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

  return (
    <>
      <div className={`${sidebar ? 'left-[26vw]' : 'left-0'} flex duration-500 w-full flex-nowrap top-4 fixed z-40`}>
        <a href="#home" onClick={() => setSidebar(false)} className="flex flex-row ml-4 h-14 w-14">
          <svg width="50" height="50" viewBox="0 0 757 802" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M673.733 2.99989C672.267 4.06656 670.667 6.59989 670.267 8.59989C670 10.7332 668.267 15.6666 666.667 19.6666C665.067 23.6666 663.333 28.4666 662.667 30.3332C662 32.1999 660.267 36.9999 658.667 40.9999C657.067 44.9999 655.333 50.0666 654.667 52.3332C654 54.4666 652.267 59.6666 650.667 63.6666C649.067 67.6666 647.333 72.4666 646.667 74.3332C646 76.1999 644.267 80.9999 642.667 84.9999C641.067 88.9999 638.4 96.4666 636.667 101.667C633.2 111.8 630.933 117.667 626.667 129C625.067 133 622.4 140.467 620.667 145.667C618.933 150.733 616.133 158.333 614.667 162.333C613.067 166.333 611.333 171.133 610.667 173C610 174.867 608.267 179.667 606.667 183.667C605.067 187.667 603.333 192.733 602.667 195C602 197.133 600.267 202.333 598.667 206.333C597.067 210.333 595.333 215.133 594.667 217C594 218.867 592.267 223.667 590.667 227.667C589.067 231.667 587.333 236.733 586.667 239C586 241.133 584.267 246.333 582.667 250.333C581.067 254.333 579.333 259.133 578.667 261C578 262.867 576.267 267.667 574.667 271.667C573.067 275.667 571.333 280.733 570.667 283C570 285.133 568.267 290.333 566.667 294.333C565.067 298.333 563.333 303.133 562.667 305C562 306.867 560.267 311.667 558.667 315.667C557.067 319.667 555.333 324.733 554.667 327C554 329.133 552.267 334.333 550.667 338.333C549.067 342.333 547.333 347.133 546.667 349C546 350.867 544.267 355.667 542.667 359.667C541.067 363.667 539.333 368.733 538.667 371C538 373.133 536.267 378.333 534.667 382.333C533.067 386.333 531.333 391.133 530.667 393C530 394.867 528.267 399.667 526.667 403.667C525.067 407.667 523.333 412.733 522.667 415C522 417.133 520.267 422.333 518.667 426.333C517.067 430.333 515.333 435.133 514.667 437C514 438.867 512.267 443.667 510.667 447.667C509.2 451.667 506.4 459.133 504.667 464.333C502.933 469.4 500.267 477 498.667 481C497.067 485 495.333 489.8 494.667 491.667C494 493.533 492.267 498.333 490.667 502.333C489.067 506.333 487.333 511.4 486.667 513.667C486 515.8 484.267 521 482.667 525C481.067 529 479.333 533.8 478.667 535.667C478 537.533 476.267 542.333 474.667 546.333C473.067 550.333 471.333 555.4 470.667 557.667C470 559.8 468.267 565 466.667 569C461.467 582.467 459.867 587 458.4 591.667C457.733 594.2 456.533 596.867 456 597.667C455.467 598.333 454.667 600.467 454.267 602.333C453.867 604.2 452.267 609 450.667 613C449.067 617 447.333 621.8 446.667 623.667C446 625.533 444.267 630.333 442.667 634.333C441.067 638.333 439.333 643.4 438.667 645.667C438 647.8 436.267 653 434.667 657C433.067 661 431.333 665.8 430.667 667.667C430 669.533 428.267 674.333 426.667 678.333C425.2 682.333 422.4 689.8 420.667 695C418.933 700.067 416.267 707.667 414.667 711.667C410.4 722.733 408.267 728.733 404.667 739C401.467 748.467 399.733 753.133 394.667 766.333C393.067 770.333 390.4 777.933 388.667 783.267C386.933 788.6 384.8 794.2 384 795.8C382.933 797.533 382.933 799.133 383.733 799.933C384.4 800.6 401.467 801.133 425.333 801C469.867 800.867 467.733 801.4 470.533 792.333C471.2 790.067 473.067 785 474.667 781C478.8 770.067 481.067 764.067 484.667 753.667C486.4 748.467 489.067 741 490.667 737C494.933 725.667 497.2 719.8 500.667 709.667C502.4 704.467 505.067 697 506.667 693C512.267 678.333 513.467 674.867 514.933 670.333C515.6 667.8 516.8 665 517.333 664.333C517.867 663.533 518.667 661.533 519.067 659.667C519.467 657.8 521.067 653 522.533 649C527.6 636.067 529.467 631.133 530.933 626.333C531.6 623.8 532.8 621 533.333 620.333C533.867 619.533 534.667 617.533 535.067 615.667C535.467 613.8 537.067 609 538.667 605C540.267 601 542 596.2 542.667 594.333C543.333 592.467 545.067 587.667 546.667 583.667C548.267 579.667 550 574.467 550.667 572.333C551.333 570.067 553.067 565 554.667 561C556.267 557 558 552.2 558.667 550.333C559.333 548.467 561.067 543.667 562.667 539.667C564.267 535.667 566 530.467 566.667 528.333C567.333 526.067 569.067 521 570.667 517C572.267 513 574 508.2 574.667 506.333C575.333 504.467 577.067 499.667 578.667 495.667C580.267 491.667 582 486.467 582.667 484.333C583.333 482.067 585.067 477 586.667 473C588.267 469 590 464.2 590.667 462.333C591.333 460.467 593.067 455.667 594.667 451.667C596.267 447.667 598 442.467 598.667 440.333C599.333 438.067 601.067 433 602.667 429C604.267 425 606 420.2 606.667 418.333C607.333 416.467 609.067 411.667 610.667 407.667C612.267 403.667 614 398.467 614.667 396.333C615.333 394.067 617.067 389 618.667 385C620.267 381 622 376.2 622.667 374.333C623.333 372.467 625.067 367.667 626.667 363.667C628.267 359.667 630 354.467 630.667 352.333C631.333 350.067 633.067 345 634.667 341C636.267 337 638 332.2 638.667 330.333C639.333 328.467 641.067 323.667 642.667 319.667C644.267 315.667 646.933 308.067 648.667 303C650.4 297.8 653.2 290.333 654.667 286.333C656.267 282.333 658 277.533 658.667 275.667C659.333 273.8 661.067 269 662.667 265C664.267 261 666 255.8 666.667 253.667C667.333 251.4 669.067 246.333 670.667 242.333C672.267 238.333 674 233.533 674.667 231.667C675.333 229.8 677.067 225 678.667 221C680.267 217 682 211.8 682.667 209.667C683.333 207.4 685.067 202.333 686.667 198.333C688.267 194.333 690 189.533 690.667 187.667C691.333 185.8 693.067 181 694.667 177C696.267 173 698 167.8 698.667 165.667C699.333 163.4 701.067 158.333 702.667 154.333C704.267 150.333 706 145.533 706.667 143.667C707.333 141.8 709.067 137 710.667 133C712.267 129 714 123.8 714.667 121.667C715.333 119.4 717.067 114.333 718.667 110.333C720.267 106.333 722 101.533 722.667 99.6666C723.333 97.7999 725.067 92.9999 726.667 88.9999C728.267 84.9999 730 79.7999 730.667 77.6666C731.333 75.3999 733.067 70.3332 734.667 66.3332C736.267 62.3332 738 57.5332 738.667 55.6666C739.333 53.7999 741.067 48.9999 742.667 44.9999C744.133 40.9999 746.933 33.3999 748.667 28.3332C750.4 23.1332 753.067 15.6666 754.533 11.6666C756.133 7.66656 757.067 3.53323 756.667 2.59989C755.733 0.0665598 677.6 0.333226 673.733 2.99989Z" fill="#7256FF" />
            <path d="M252.4 107.266C251.067 107.8 250.667 147.133 250.533 297.4C250.4 469 250 497.4 247.333 515C245.733 524.733 235.467 543.933 227.333 551.933C211.2 567.933 188.133 574.467 160 571C153.067 570.2 146.133 568.867 144.667 568.067C143.2 567.267 139.6 565.533 136.667 564.2C123.333 557.933 111.2 544.867 105.333 530.333C103.733 526.333 101.6 521 100.533 518.6C99.4666 516.2 98.6666 511.667 98.6666 508.6C98.6666 497.8 101.2 498.333 48.9333 498.333C23.4666 498.2 1.99995 498.6 1.19995 499.133C-1.06671 500.467 2.26662 533.933 5.19995 539.267C5.99995 540.867 6.66662 543.933 6.66662 546.2C6.66662 548.333 7.19995 550.467 7.86662 551C8.53329 551.4 9.59995 553.667 9.99995 556.067C10.5333 558.333 11.7333 562.067 12.6666 564.333C13.6 566.467 14.8 569.267 15.2 570.333C16.9333 574.733 27.4666 593 30.6666 597.133C34.9333 602.867 51.0666 619 58.2666 624.733C66.2666 631.267 74.7999 636.467 85.0666 641.133C89.9999 643.4 96.2666 646.333 99.0666 647.8C101.867 649.133 104.933 650.333 106 650.333C107.067 650.333 109.867 651.133 112.267 652.2C123.333 656.867 140 658.6 172.667 658.6C213.2 658.6 227.467 656.333 253.333 646.067C265.067 641.4 269.333 639.267 277.067 634.067C280.267 632.067 283.2 630.333 283.867 630.333C284.4 630.333 286.533 628.6 288.8 626.6C290.933 624.6 295.333 620.867 298.533 618.333C309.333 609.933 326.4 586.467 332.8 571.4C334.667 566.733 336.8 562.467 337.467 561.667C338.133 561 338.667 558.867 338.667 557C338.667 555.133 339.467 552.467 340.533 551C342.4 548.2 342.667 547.267 345.733 529.667C350.4 504.2 350.667 489.4 350.667 298.6C350.667 112.6 350.667 109.133 348.133 107.666C345.467 106.333 255.733 105.8 252.4 107.266Z" fill="#7256FF" />
          </svg>
        </a>
        <a
          href={firebaseLink}
          target="_blank"
          className="ml-auto mr-4"
          rel="noreferrer"
        >
          <p className="text-secondary-violet border-1 p-2 px-4 text-sm border-secondary-violet rounded-md hover:bg-secondary-violet/10 duration-200"> Resume</p>
        </a>
      </div>
      <div id="sidebar-button">
        <div className={`z-40 left-0 fixed duration-150 ${sidebar ? 'text-zinc-800' : 'text-[#8971ff]'} top-[40vh] ml-6 rotate-[75deg] flex flex-row`}>
          <div id="v" className="xs:invisible lg:visible ml-2 mt-3 duration-150">{sidebar ? 'C' : 'V'}</div>
          <div id="i" className="xs:invisible lg:visible duration-200 ">{sidebar ? 'l' : 'i'}</div>
          <div id="e" className="xs:invisible lg:visible duration-[300ms] ">{sidebar ? 'o' : 'e'}</div>
          <div id="w" className="xs:invisible lg:visible duration-[400ms] ">{sidebar ? 's' : 'w'}</div>
          <div id="s" className="xs:invisible lg:visible duration-[500ms] ">{sidebar ? 'e' : 's'}</div>
        </div>
        <motion.div
          className={`${sidebar ? 'bg-zinc-800' : 'bg-secondary-violet'} xs:invisible lg:visible duration-500 shadow shadow-zinc-800 left-0 ml-6 cursor-pointer fixed w-12 h-12 rounded-full z-40 top-[40vh]`}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => rotate()}
          onHoverEnd={() => unrotate()}
          onClick={() => setSidebar(!sidebar)}
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
      <div className={`${sidebar ? 'left-[26vw]' : 'left-0'} flex flex-nowrap duration-500 fixed ml-4 left-0 top-[76vh] text-gray-500 text-3xl z-40`}>
        <div className="relative">
          <div className="ml-6 hover:scale-110 hover:text-[#8971ff] duration-300 w-6 h-6">
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
                className="feather feather-github "
              >
                <title>GitHub</title>
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
            </a>
          </div>
          <div className="ml-6 hover:scale-110 hover:text-[#8971ff] duration-300 my-4 w-6 h-6">
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
          <div className="ml-6 hover:scale-110 hover:text-[#8971ff] duration-300 w-6 h-6">
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

      <div className="flex flex-col z-40 overlay-text fixed right-6 text-gray-500 text-sm tracking-widest">
        <div className="overlay-text rotate-90 fixed mt-10 w-8 h-28">jren2@seas.upenn.edu</div>
        <div className="overlay-bar fixed mt-10 right-8 w-2 h-1/6" />
      </div>
    </>
  );
}

export default Overlay;
