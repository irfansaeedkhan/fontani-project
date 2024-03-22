"use client";

import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

const AboutUs = ({ textColor }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  gsap.registerPlugin(ScrollTrigger);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const textAnimation = useMemo(() => {
    return () => {
      const linesText = document.querySelectorAll(".fade-up");

      linesText.forEach((lineText, i) => {
        const split = new SplitType(lineText, {
          types: "lines",
        });

        split.lines.map((line) => {
          const wrapEl = document.createElement("div");
          wrapEl.classList.add("line-wrapper");
          // or wrapEl.style.overflow = 'hidden'
          line.parentNode.appendChild(wrapEl);
          wrapEl.appendChild(line);
        });

        gsap.from(split.lines, {
          opacity: 0,
          y: "160",
          duration: 1.25,
          ease: "power3.inOut",
          stagger: 0.05,
        });
      });
    };
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      textAnimation();
    }
  }, [isDrawerOpen, textAnimation]);

  return (
    <div className="absolute top-0 right-0 w-full z-50">
      <header>
        <button
          className="text-lg lg:text-2xl font-semibold absolute top-0 right-0 px-4 py-3 lg:py-6 hover:scale-105 duration-500 ease-out"
          style={{ color: textColor }}
          type="button"
          data-drawer-target="#drawer-navigation"
          data-drawer-toggle
          aria-controls="drawer-navigation"
          onClick={toggleDrawer}
        >
          Menu
        </button>
      </header>
      <div
        id="drawer-navigation"
        className={`bg-opacity-70 backdrop-filter backdrop-blur-lg fixed top-1 mb-1 right-0 z-40 w-[98vw] lg:w-[70vw] h-[calc(100vh-8px)] p-4 custom-scrollbar overflow-y-auto transition-transform duration-700 bg-[#1f1f1f] rounded-lg ${
          isDrawerOpen ? " right-1" : "translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          data-drawer-hide="#drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent rounded-lg text-sm md:text-base p-1.5 absolute top-2.5 end-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white"
          onClick={toggleDrawer}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <div
            className={`my-5 ${
              isDrawerOpen ? "animate-drawLine border-b-2 border-gray-500" : ""
            }`}
          ></div>
          <div className="flex flex-col lg:flex-row justify-between items-start p-2">
            <h5 className="text-base lg:text-lg font-semibold uppercase text-gray-400 fade-up">
              Menu
            </h5>
            <div className="flex flex-col gap-10 text-sm md:text-base w-full lg:w-[60%] text-gray-200 fade-up">
              <p>
                I am a multidisciplinary creative driven by a passion for
                innovation, craftsmanship, and entrepreneurship. My diverse
                international experiences have cultivated a global perspective
                and ignited my desire to make a meaningful difference. As an
                intrepid risk-taker, I embrace challenges as opportunities to
                push the boundaries of design and business.
              </p>
              <p>
                I am committed to employing my skills and expertise to shape a
                better world, one project at a time. I believe that design has
                the power to transcend its physical form, shaping not just
                products but also the interactions between people and their
                world.
              </p>
              <p>
                My approach is not confined to the constraints of traditional
                design disciplines; rather, I embrace the freedom to explore
                unconventional avenues, drawing inspiration from diverse fields
                and perspectives. I embrace change, constantly seeking
                opportunities to challenge the present and reimagine the way we
                interact with the world around us.
              </p>
              <p>
                I am committed to using my skills and talents to bridge the gap
                between design and business, creating solutions that are not
                only aesthetically pleasing and functional but also socially
                responsible and sustainable.
              </p>
            </div>
          </div>
          <div
            className={`my-5 ${
              isDrawerOpen ? "animate-drawLine border-b-2 border-gray-500" : ""
            }`}
          ></div>
          <Image
            src="/images/alex.png"
            width={500}
            height={500}
            alt="Picture of the Alex Fotani"
            className="w-full h-auto max-w-[50%] lg:max-w-[25%] rounded-xl mx-auto"
          />
          <div
            className={`my-5 ${
              isDrawerOpen ? "animate-drawLine border-b-2 border-gray-500" : ""
            }`}
          ></div>
          <div className="flex flex-col items-start p-2 pb-10">
            <h5 className="text-base lg:text-lg font-semibold uppercase text-gray-400 pb-5 -mt-4">
              PROJECTS
            </h5>

            <ul className="flex flex-col gap-3 w-full text-center text-sm md:text-base lg:text-lg text-white">
              <li className="py-1 fade-up text-white">
                <a href="/sail-of-time">Sail Of Time</a>
              </li>
              <li className="py-1 fade-up text-white">
                <a href="/lobius-lamp">Lobius Lamp</a>
              </li>
              <li className="py-1 fade-up text-white">
                <a href="/biolumiinscent">Biolumiinscent</a>
              </li>
              <li className="py-1 fade-up text-white">
                <a href="/dutch-design-week">Dutch Design Week</a>
              </li>
              <li className="py-1 fade-up text-white">
                <a href="/innoca">Innoca</a>
              </li>
              <li className="py-1 fade-up text-white">
                <a href="/carbon-circularity">Carbon Circularity</a>
              </li>
              <li className="py-1 fade-up text-white">
                <a href="/printed-3d-carabiner">3d Printed Carabiner</a>
              </li>
            </ul>
          </div>
          <div
            className={`my-5 ${
              isDrawerOpen ? "animate-drawLine border-b-2 border-gray-500" : ""
            }`}
          ></div>
          <div className="flex flex-col items-start p-2 pr-10">
            <h5 className="text-base lg:text-lg font-semibold uppercase text-gray-400 pb-5 -mt-4">
              CONTACT
            </h5>

            <div className="w-full flex justify-end text-sm md:text-base">
              <div className="w-full lg:w-[50%] flex justify-between items-center gap-5">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h5 className="text-gray-500">Say Hello</h5>
                    <h6 className="text-gray-200">Hi@fontani.studio</h6>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-gray-500">Projects</h5>
                    <h6 className="text-gray-200">Biz@fontani.studio</h6>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-200 hover:text-white">
                  <a href="#">Linkedin</a>
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
                  <a href="#">Dribbble</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
