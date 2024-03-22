"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "../public/DrawSVGPlugin.min";
import { useRef, useState } from "react";
import LogoSvg from "./components/logo";

export default function Template({ children }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const containerChildRef = useRef(null);

  const [isReady, setIsReady] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const timeline = gsap.timeline({
      onStart: () => document.body.classList.add("no-scroll"),
      onComplete: () => {
        document.body.classList.remove("no-scroll");
      },
    });

    timeline.set(containerRef.current, { y: "-100%" });
    timeline
      .fromTo(
        containerChildRef.current,
        { opacity: 1 },
        { duration: 0.5, opacity: 0 }
      )
      .fromTo(
        containerRef.current,
        { immediateRender: true, y: "-100%" },
        { y: 0, duration: 0.5, ease: "power3.inOut" },
        "-=0.5"
      )
      .fromTo(
        svgRef.current?.querySelectorAll("path"),
        { opacity: "0", y: 50 },
        { duration: 0.3, stagger: 0.1, opacity: 1, y: 0 }
      )
      .to(containerRef.current, {
        y: "100%",
        duration: 1,
        ease: "power3.inOut",
        onStart: () => setIsReady(true),
      })
      .fromTo(
        containerChildRef.current,
        { opacity: 0 },
        { duration: 0.5, opacity: 1 },
        "-=0.5"
      );

    () => timeline.kill();
  }, [containerRef, svgRef]);

  return (
    <div className="relative w-full h-full bg-[#cd5c86]. bg-white">
      <div
        ref={containerRef}
        className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
      >
        <div ref={svgRef}>
          {/* test */}
          <LogoSvg />
        </div>
      </div>

      <div ref={containerChildRef}>{isReady && children}</div>
    </div>
  );
}
