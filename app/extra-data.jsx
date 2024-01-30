"use client"

import React, { useRef, useEffect, useState } from "react";
import Clock from "./assets/svgs/clock";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "../public/DrawSVGPlugin.min";


gsap.registerPlugin(DrawSVGPlugin);

export default function Home() {
  const headerref = useRef(null);
  const [project, setProject] = useState("project1");
  const [uiState, setUIState] = useState({
    bgColor: "black",
    // bgImage: "#1f2330",
    text: "Default Text",
    imageUrl: "default-image-url.jpg"
  });
  //todo :  mouse over should also change state
//  and state will handle background color, image, project name etc
//  we can also make object in project state which will have image, name, background color etc
//  and we can use that object to change the state
// also state of project can have the degrees of rotation of the needle

  const needleAnimation = () => {
    const clockElement = headerref.current;
    const bgNeedle = clockElement.querySelector("#bigstick");

    const projectPoints = [51.42, 102.84, 154.26, 205.68, 257.1, 308.52, 360];
    const projectNames = ["project1", "project2", "project3", "project4", "project5", "project6", "project7"];

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
    }).to(bgNeedle, {
      transformOrigin: "50% 50%",
      rotation: 360,
      duration: 70,
      ease: "linear",
    })
}

// 
const stripeAnimation = () => {
  const stripeKeyframes = [
    { drawSVG: "14.17%" },
    { drawSVG: "28.34%" },
    { drawSVG: "42.51%" },
    { drawSVG: "56.68%" },
    { drawSVG: "70.85%" },
    { drawSVG: "85.02%" },
    { drawSVG: "100%" },
  ];

  const projectPoints = [51.42, 102.84, 154.26, 205.68, 257.1, 308.52, 360];
  const projectNames = ["project1", "project2", "project3", "project4", "project5", "project6", "project7"];

  const clockElement = headerref.current;
  const stripe = clockElement.querySelector("#stripe");
  const bgNeedle = clockElement.querySelector("#bigstick");
  gsap.defaults({
    ease: "linear",
    duration: 7,
  });
  const tl = gsap.timeline(
    {
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
    }
    );

  tl.set(stripe, { rotate: -90, transformOrigin: "50% 50%", drawSVG: "0%" });
  tl.set(bgNeedle, {transformOrigin: "50% 50%",rotation: 0})

  tl.fromTo( stripe, { drawSVG: '0' }, { drawSVG: '14.17%' })
  tl.to(bgNeedle, {rotation: 51},"<")
  tl.to( stripe, { drawSVG: '14.17% 14.17%' , duration: 1, ease:"linear"}, "-=1")

  tl.to( stripe, { drawSVG: '14.17% 28.34%' , ease:"linear"})
  tl.to(bgNeedle, {rotation: 102},"<")
  tl.to( stripe, { drawSVG: '28.34% 28.34%' , duration: 1,ease:"linear"}, "-=1")

  tl.to( stripe, { drawSVG: '28.34% 42.51%' , ease:"linear"})
  tl.to(bgNeedle, {rotation: 153},"<")
  tl.to( stripe, { drawSVG: '42.51% 42.51%' ,duration: 1, ease:"linear"}, "-=1")

  tl.to( stripe, { drawSVG: '42.51% 56.68%' , ease:"linear"})
  tl.to(bgNeedle, {rotation: 204},"<")
  tl.to( stripe, { drawSVG: '56.68% 56.68%' ,duration: 1, ease:"linear"}, "-=1")

  tl.to( stripe, { drawSVG: '56.68% 70.85%' , ease:"linear"})
  tl.to(bgNeedle, {rotation: 255},"<")
  tl.to( stripe, { drawSVG: '70.85% 70.85%' ,duration: 1, ease:"linear"}, "-=1")

  tl.to( stripe, { drawSVG: '70.85% 85.02%' , ease:"linear"})
  tl.to(bgNeedle, {rotation: 306},"<")
  tl.to( stripe, { drawSVG: '85.02% 85.02%' ,duration: 1, ease:"linear"}, "-=1")

  tl.to( stripe, { drawSVG: '85.02% 100%' , ease:"linear"})
  tl.to(bgNeedle, {rotation: 360},"<")
  tl.to( stripe, { drawSVG: '100% 100%' ,duration: 1, ease:"linear"}, "-=1")
};



const updateUI = (project) => {
  if (project === "project1") {
    setUIState({
      bgColor: "black",
      text: "Updated Text for Project 1",
      imageUrl: "project1-image-url.jpg"
    });
  } 
  else if (project === "project2") {
    setUIState({
      bgColor: "red",
      text: "Updated Text for Project 1",
      imageUrl: "project1-image-url.jpg"
    });
  } 
  else if (project === "project3") {
    setUIState({
      bgColor: "blue",
      text: "Updated Text for Project 1",
      imageUrl: "project1-image-url.jpg"
    });
  } 
  else if (project === "project4") {
    setUIState({
      bgColor: "green",
      text: "Updated Text for Project 1",
      imageUrl: "project1-image-url.jpg"
    });
  } 
  else if (project === "project5") {
    setUIState({
      bgColor: "yellow",
      text: "Updated Text for Project 1",
      imageUrl: "project1-image-url.jpg"
    });
  } 
  else if (project === "project6") {
    setUIState({
      bgColor: "pink",
      text: "Updated Text for Project 1",
      imageUrl: "project1-image-url.jpg"
    });
  } 
  else if (project === "project7") {
    setUIState({
      bgColor: "black",
      text: "Updated Text for Project 1",
      imageUrl: "project1-image-url.jpg"
    });
  } 
  
  
  
  else {
    // handle other projects or default state here
    setUIState({
      bgColor: "#1f2330",
      // bgImage: "#1f2330",
      text: "Default Text",
      imageUrl: "default-image-url.jpg"
    });
  }
};

  useEffect(() => {
    stripeAnimation()
  }, []);

  useEffect(() => {
    console.log(project);
    updateUI(project);
  }, [project]);


  return (
    <main className={`flex min-h-screen flex-col items-center justify-center relative overflow-hidden`} style={{ backgroundColor: uiState.bgColor }}>
       <div className="flex w-full h-full">
       <Clock headerref={headerref} className="w-full h-full scale-[2] absolute inset-0 "/>
       </div>
    </main>
  )
}


      // tl.fromTo(stripe, 
    //   {
    //     drawSVG: "0%"
    //   },
    //   {
    //     duration: 10,
    //     drawSVG: "100%",
    //     ease: "linear",
    //   })

        // tl.fromTo(stripe,
    //   {
    //     drawSVG: "0%"
    //   }, 
    //   {
    //     keyframes: stripeKeyframes,
    //     duration: 10, 
    //     ease: "linear",
    //  }
    // );


    // const stripeAnimation = () => {
    //   const stripeKeyframes = [
    //     { drawSVG: "14.17%" },
    //     { drawSVG: "28.34%" },
    //     { drawSVG: "42.51%" },
    //     { drawSVG: "56.68%" },
    //     { drawSVG: "70.85%" },
    //     { drawSVG: "85.02%" },
    //     { drawSVG: "100%" },
    //   ];
    
    //   const clockElement = headerRef.current;
    //   const stripe = clockElement.querySelector("#stripe");
    
    //   const tl = gsap.timeline();
    //   tl.set(stripe, { rotate: -90, transformOrigin: "50% 50%" });
    
    //   // Iterate through keyframes, animating draw and undraw continuously
    //   stripeKeyframes.forEach((keyframe, index) => {
    //     const nextKeyframe = stripeKeyframes[index + 1];
    
    //     tl.to(stripe, {
    //       duration: 1, // Adjust duration as needed
    //       drawSVG: keyframe.drawSVG,
    //       ease: "power1.out",
    //     })
    //     .then(() => {
    //       if (nextKeyframe) {
    //         tl.to(stripe, {
    //           duration: 1, // Adjust duration as needed
    //           drawSVG: nextKeyframe.drawSVG, // Draw to the next keyframe
    //           ease: "power1.out",
    //           onUpdate: () => {
    //             const currentProgress = gsap.getProperty(stripe, "drawSVG");
    //             const previousSegmentToUndraw =
    //               keyframe.drawSVG.slice(0, -1) -
    //               (currentProgress - keyframe.drawSVG.slice(0, -1));
    //             gsap.set(stripe, { drawSVG: `${previousSegmentToUndraw}%` });
    //           },
    //         });
    //       }
    //     });
    //   });
    // };
                   // onUpdate: () => {
                //   const currentProgress = gsap.getProperty(stripe, "drawSVG");
                //   const previousSegmentToUndraw =
                //     keyframe.drawSVG.slice(0, -1) -
                //     (currentProgress - keyframe.drawSVG.slice(0, -1));
                //   gsap.set(stripe, { drawSVG: `${previousSegmentToUndraw}%` });
                // },
                // onComplete: () => {
                //   const currentProgress = gsap.getProperty(stripe, "drawSVG");
                //   const previousSegmentToUndraw =
                //     keyframe.drawSVG.slice(0, -1) -
                //     (currentProgress - keyframe.drawSVG.slice(0, -1));
                //   gsap.set(stripe, { drawSVG: `${previousSegmentToUndraw}%` });
                // }

                  // let fill_duration = 1.2;
  // let fill_position = '+=.25'; // place tween .25secs after end of init tween 
  // tl1.fromTo( stripe, fill_duration, { drawSVG: '0' }, { drawSVG: '100%' }, fill_position )
  //   .to( stripe, fill_duration, { drawSVG: '100% 100%' }, fill_position );
  
  // const tl2 = gsap.timeline({reversed: true}); // Set reversed to true for the undraw effect
  // tl2.to(stripe, { duration: 1, drawSVG: "0% 14%" },2); // Adjust drawSVG for undraw effect
  
  // const masterTimeline = gsap.timeline();
  // masterTimeline.add(tl1);
  // masterTimeline.add(tl2);


  // tl.fromTo(
  //   stripe,
  //   {
  //     drawSVG: "0%", // Start from 0% draw
  //   },
  //   {
  //     duration: 7,
  //     drawSVG: "100%",
  //     ease: "linear",
  //   }
  // )
  // .fromTo(
  //   stripe,
  //   {
  //     drawSVG: "0%", // Start from 0% draw
  //   },
  //   {
  //     duration: 7,
  //     drawSVG: "100% 0%",
  //     ease: "linear",
  //   }, "+=1"
  // )
      // Draw animation
    // tl.fromTo(
    //   stripe,
    //   {
    //     drawSVG: "0%", // Start from 0% draw
    //   },
    //   {
    //     duration: 1,
    //     drawSVG: keyframe.drawSVG,
    //     ease: "linear",
    //   }
    // );

    // Create a separate timeline for undraw animation
    // const undrawTl = gsap.timeline();
    // undrawTl.to(
    //   stripe,
    //   {
    //     duration: 1,
    //     drawSVG: "0% 100%",// Undraw from 0% to the current keyframe
    //     ease: "linear",
    //   },
    //   1 // Start undraw animation immediately after draw animation starts
    // );

    // tl.add(undrawTl, `-=${1}`); // Synchronize undraw timeline with draw timeline
    