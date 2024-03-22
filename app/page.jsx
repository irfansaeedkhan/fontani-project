"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Image from "next/image";
import { redirect } from "next/navigation";

import Clock from "./assets/svgs/clock";
import { DrawSVGPlugin } from "../public/DrawSVGPlugin.min";
import AboutUs from "./components/about-us";

import project1Image from "../public/images/project-1.png";
import project2Image from "../public/images/project-2.png";
import project3Image from "../public/images/project-3.jpeg";
import project4Image from "../public/images/project-4.png";
import project5Image from "../public/images/project-5.png";
import project6Image from "../public/images/project-6.png";
import project7Image from "../public/images/project-7.jpg";

gsap.registerPlugin(DrawSVGPlugin);

export default function Home() {
  const router = useRouter();
  const headerref = useRef(null);
  const [project, setProject] = useState("project1");
  const [uiState, setUIState] = useState({
    bgColor: "#baaea8",
    textColor: "#392a25",
    text: "Updated Text for Project 1",
    imageUrl: project1Image.src,
    websiteName: "Carbon Circularity",
    websiteYear: "2023",
    url: "/carbon-circularity",
  });

  function DateDisplay() {
    const today = new Date();

    const dayName = format(today, "EEE", { locale: enUS });
    const monthAndDate = format(today, "MMM. d", { locale: enUS });

    return (
      <div className="left">
        <h5 className="text-xs lg:text-sm font-medium">{dayName}</h5>
        <h5 className="text-xs lg:text-sm font-medium">{monthAndDate}</h5>
      </div>
    );
  }

  const stripeAnimation = () => {
    const projectPoints = [51.42, 102.84, 154.26, 205.68, 257.1, 308.52, 360];
    const projectNames = [
      "project1",
      "project2",
      "project3",
      "project4",
      "project5",
      "project6",
      "project7",
    ];

    const clockElement = headerref.current;
    const stripe = clockElement.querySelector("#stripe");
    const bgNeedle = clockElement.querySelector("#bigstick");

    gsap.defaults({
      ease: "linear",
      duration: 7,
    });
    const tl = gsap.timeline({
      repeat: -1,
      onUpdate: () => {
        const rotation = gsap.getProperty(bgNeedle, "rotation") % 360;
        if (!isNaN(rotation)) {
          for (let i = 0; i < projectPoints.length; i++) {
            if (rotation < projectPoints[i]) {
              setProject(projectNames[i]);
              break;
            }
          }
        }
      },
    });

    tl.set(stripe, { rotate: -90, transformOrigin: "50% 50%", drawSVG: "0%" });
    tl.set(bgNeedle, { transformOrigin: "50% 50%", rotation: 0 });

    tl.fromTo(stripe, { drawSVG: "0" }, { drawSVG: "14.17%" });
    tl.to(
      bgNeedle,
      {
        rotation: 51,
      },
      "<"
    );

    tl.to(
      stripe,
      { drawSVG: "14.17% 14.17%", duration: 0.3, ease: "slow" },
      "-=0.3"
    );

    tl.to(stripe, { drawSVG: "14.17% 28.34%" });
    tl.to(bgNeedle, { rotation: 102 }, "<");
    tl.to(
      stripe,
      { drawSVG: "28.34% 28.34%", duration: 0.3, ease: "slow" },
      "-=0.3"
    );

    tl.to(stripe, { drawSVG: "28.34% 42.51%" });
    tl.to(bgNeedle, { rotation: 153 }, "<");
    tl.to(
      stripe,
      { drawSVG: "42.51% 42.51%", duration: 0.3, ease: "slow" },
      "-=0.3"
    );

    tl.to(stripe, { drawSVG: "42.51% 56.68%" });
    tl.to(bgNeedle, { rotation: 204 }, "<");
    tl.to(
      stripe,
      { drawSVG: "56.68% 56.68%", duration: 0.3, ease: "slow" },
      "-=0.3"
    );

    tl.to(stripe, { drawSVG: "56.68% 70.85%" });
    tl.to(bgNeedle, { rotation: 255 }, "<");
    tl.to(
      stripe,
      { drawSVG: "70.85% 70.85%", duration: 0.3, ease: "slow" },
      "-=0.3"
    );

    tl.to(stripe, { drawSVG: "70.85% 85.02%" });
    tl.to(bgNeedle, { rotation: 306 }, "<");
    tl.to(
      stripe,
      { drawSVG: "85.02% 85.02%", duration: 0.3, ease: "slow" },
      "-=0.3"
    );

    tl.to(stripe, { drawSVG: "85.02% 100%" });
    tl.to(bgNeedle, { rotation: 360 }, "<");
    tl.to(
      stripe,
      { drawSVG: "100% 100%", duration: 0.3, ease: "slow" },
      "-=0.3"
    );
    tl.timeScale(3);

    const pinsContainer = clockElement.querySelector("#pins-container");
    const pins = pinsContainer.querySelectorAll(".project-pin");

    pins.forEach((pin, index) => {
      pin.addEventListener("mouseenter", () => {
        handlePinHover(`project${index + 1}`);
        // pin.classList.add("opacity-pin");
      });
    });

    pinsContainer.addEventListener("mouseleave", () => {
      // pins.forEach((pin) => {
      //   pin.classList.remove("opacity-pin");
      // });
      tl.play();
    });

    function handlePinHover(projectName) {
      setProject(projectName);
      tl.pause();
    }
  };

  const updateUI = (project) => {
    gsap.to("#img-parent", {
      duration: 0.5,
      alpha: 0,
      scale: 0.9,
    });

    gsap.to("#img-parent", {
      duration: 0.5,
      alpha: 1,
      delay: 0.1,
      scale: 1,
    });

    gsap.fromTo(
      ".revealing-text",
      {
        y: "100%",
        alpha: 0,
        ease: "power2.inOut",
        duration: 1,
      },
      {
        y: "0",
        alpha: 1,
        ease: "power2.inOut",
        duration: 1,
      }
    );

    if (project === "project1") {
      setUIState({
        bgColor: "#dad5cf",
        textColor: "#392a25",
        text: "Updated Text for Project 1",
        imageUrl: project1Image.src,
        websiteName: "Carbon Circularity",
        websiteYear: "2023",
        url: "/carbon-circularity",
      });
    } else if (project === "project2") {
      setUIState({
        bgColor: "#ef9b80",
        textColor: "#735959",
        text: "Updated Text for Project 1",
        imageUrl: project2Image.src,
        websiteName: "Bioluminescent City",
        websiteYear: "2022",
        url: "/biolumiinscent",
      });
    } else if (project === "project3") {
      setUIState({
        bgColor: "#000008",
        textColor: "#eeeeee",
        text: "Updated Text for Project 1",
        imageUrl: project3Image.src,
        websiteName: "Lobius Lamp",
        websiteYear: "2021",
        url: "/lobius-lamp",
      });
    } else if (project === "project4") {
      setUIState({
        bgColor: "#ffffff",
        textColor: "#ababab",
        text: "Updated Text for Project 1",
        imageUrl: project4Image.src,
        websiteName: "Innoca",
        websiteYear: "2020",
        url: "/innoca",
      });
    } else if (project === "project5") {
      setUIState({
        bgColor: "#e9e8ed",
        textColor: "#58531b",
        text: "Updated Text for Project 1",
        imageUrl: project6Image.src,
        websiteName: "3d printed carabiner",
        websiteYear: "2018",
        url: "/printed-3d-carabiner",
      });
    } else if (project === "project6") {
      setUIState({
        bgColor: "#f8f7f7",
        textColor: "#3c3b38",
        text: "Updated Text for Project 1",
        imageUrl: project5Image.src,
        websiteName: "Dutch Design Week x In-zee",
        websiteYear: "2019",
        url: "/dutch-design-week",
      });
    } else if (project === "project7") {
      setUIState({
        bgColor: "#bbbbbb",
        textColor: "#5c5c5c",
        text: "Updated Text for Project 1",
        imageUrl: project7Image.src,
        websiteName: "Sail Of Time",
        websiteYear: "2017",
        url: "/sail-of-time",
      });
    } else {
      // handle other projects or default state here
      setUIState({
        bgColor: "#baaea8",
        textColor: "#392a25",
        text: "Updated Text for Project 1",
        imageUrl: project1Image.src,
        websiteName: "Carbon Circularity",
        websiteYear: "2023",
        url: "/carbon-circularity",
      });
    }

    const pins = document.querySelectorAll(".project-pin");
    pins.forEach((pin, index) => {
      if (`project${index + 1}` === project) {
        pin.style.opacity = 0;
      } else {
        pin.style.opacity = 1;
      }
    });
  };

  useEffect(() => {
    stripeAnimation();
  }, []);

  useEffect(() => {
    updateUI(project);
  }, [project]);

  const projectImages = [
    project1Image,
    project2Image,
    project3Image,
    project4Image,
    project5Image,
    project6Image,
    project7Image,
  ];

  useEffect(() => {
    projectImages.forEach((image) => {
      let src = image.src;

      <Image
        src={src}
        width={500}
        height={500}
        alt="test"
        className="w-full"
      />;
    });
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center relative overflow-hidden`}
      style={{ backgroundColor: uiState.bgColor }}
    >
      <nav className="absolute top-0 right-0 w-full z-40 px-4 py-4 lg:py-6">
        <a href="/" rel="noopener noreferrer" className="block w-28 lg:w-36">
          <Image
            src="/images/logo.png"
            alt="fontani logo"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </a>
      </nav>
      <AboutUs textColor={uiState?.textColor} />
      <div className="aspect-[5/3] w-[90vw] lg:w-[100vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
        <div
          id="img-parent"
          className="w-full h-full bg-contain bg-no-repeat bg-center rounded-md"
          style={{
            backgroundImage: `url(${
              uiState.imageUrl || "/images/project-1.png"
            })`,
          }}
        />
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full z-40"
        onClick={() => router.push(uiState?.url)}
      />

      <div className="flex w-full h-full">
        <Clock
          headerref={headerref}
          className="w-full h-full scale-[2.5] lg:scale-[2] absolute inset-0"
        />
      </div>
      <div className="text-gray-300 font-bold text-lg lg:text-2xl absolute top-[75%] lg:top-[50%] left-[3%] lg:translate-y-[-50%] overflow-hidden h-[60px] flex justify-center items-center max-w-[50%] md:max-w-[22%]">
        <h2 className="revealing-text" style={{ color: uiState.textColor }}>
          {uiState.websiteName}
        </h2>
      </div>
      <div className="text-gray-300 font-bold text-lg lg:text-2xl absolute top-[75%] lg:top-[50%] right-[3%] lg:translate-y-[-50%] overflow-hidden h-[60px] flex justify-center items-center">
        <h2 className="revealing-text" style={{ color: uiState.textColor }}>
          {/* {uiState.websiteYear} */}
        </h2>
      </div>

      <footer
        className="flex items-end justify-between w-full  absolute bottom-0 px-4 py-4 lg:py-6"
        style={{ color: uiState.textColor }}
      >
        <DateDisplay />
        <div className="right">
          <h5 className="text-xs lg:text-sm font-normal h-[20px] overflow-hidden">
            <span className="font-semibold revealing-text">
              0{project.replace("project", "")}
            </span>{" "}
            / 07
          </h5>
        </div>
      </footer>
    </main>
  );
}
