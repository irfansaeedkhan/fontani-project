import React from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPLayer from "../../components/video-player";
import Head from "next/head";

const LobiusLamp = () => {
  return (
    <div className="bg-white w-full min-h-screen text-[#020202] relative">
      <Head>
        <title>Lobius Lamp</title>
      </Head>
      <div className="absolute top-0 left-5 lg:top-2 lg:right-20 crossBtn p-5">
        <Link
          href="/"
          className="text-gray-400 bg-transparent rounded-lg text-sm md:text-base p-1.5 absolute top-2.5 end-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 lg:w-8 lg:h-8"
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
          <span className="sr-only">Back butn</span>
        </Link>
      </div>
      <div className="">
        {/* section1 */}
        <div className="bg-black">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between min-h-screen pt-20 px-6 max-width-desktop">
            <div className="text-white flex  flex-col gap-8 lg:gap-24 justify-center w-full lg:w-[45%] pt-5 pb-20 lg:py-20">
              <h1 className="text-h1">Lobius Lamp</h1>
              <h2 className="text-h2">
                Unveiling the hidden with light, the Lobius Lamp employs 3D
                printer infill shapes to project patterns, making the invisible
                visible.
              </h2>
              <p className="text-p">
                At the heart of the Lobius Lamp project lies a quest to redefine
                the capabilities of CNC machining and explore design innovation.
                Motivated by a desire to alter the outcomes of conventional
                manufacturing processes, I turned to 3D printing for its
                versatility and transformative potential. Three compelling
                reasons guided this decision: I use 3D printing as a tool in
                almost every project, its rapid prototyping capabilities
                facilitating swift design iterations, and its environmentally
                friendly nature, enabling material upcycling through shredding
                and reuse. As I divd deeper into the intricacies of 3D printing,
                I identified a pivotal yet overlooked aspect: the infill
                material. Through rigorous experimentation, a breakthrough
                emerged—by passing light beneath the open infill material, the
                resulting projection mirrored the intricate patterns of the
                infill on the surface of the print, unveiling the invisible and
                making it palpably visible. This revelation sparked a journey of
                exploration and innovation, paving the way for the creation of
                the Lobius Lamp—a symbol of ingenuity, sustainability, and the
                transformative power of design
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex  items-center justify-center">
              <Image
                src="/images/p2-img-1.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="flex flex-col lg:justify-center items-center gap-10 lg:gap-16 lg:min-h-[80vh] pb-10">
          <h2 className="text-h3 self-start pt-10 p-5">Sketches</h2>
          {/* generate grid for 5 images */}
          <Image
            src="/images/p2-img-2.png"
            width={500}
            height={500}
            alt="process images"
            className="w-full h-full object-contain max-w-[90%] lg:max-w-[70%] mx-auto"
          />
        </div>
        {/* video section */}
        <div className="bg-black py-20 flex justify-center items-center gap-10 lg:gap-16 lg:min-h-[80vh] pb-10">
          <div className="w-1/2 bg-black">
            <div className="p-5">
              <VideoPLayer videoSrc="/videos/infinitemobius.mp4" />
            </div>
          </div>
          <div className="w-1/2 bg-black">
            <div className="p-5">
              <VideoPLayer videoSrc="/videos/mobiusvideo.mp4" />
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="flex flex-col lg:justify-center items-center gap-16 lg:min-h-[80vh] pt-20 pb-20 bg-black">
          {/* generate grid for 5 images */}
          <Image
            src="/images/p2-img-3.png"
            width={500}
            height={500}
            alt="process images"
            className="w-full h-full object-contain max-w-[90%] lg:max-w-[70%] mx-auto"
          />
        </div>
        {/* section3 */}
        <div className="bg-black text-white">
          <div className="container mx-auto flex flex-col lg:flex-row min-h-[80vh]  gap-16 lg:gap-20 bg-black">
            <div className="w-full lg:w-1/2 flex justify-between flex-col-reverse lg:flex-col  items-center gap-8 lg:gap-16 pt-10">
              <p className="text-p max-w-[80%]">
                In the journey of creating the Lobius Lamp, I tested out
                different infill shapes like triangles, zigzags, hexagons,
                cubes, and gyroids. After numerous trials, I found that the
                cross infill gave the best results. When it came to materials, I
                experimented with Nylon, PETG, ABS, and even metal-infused PLA.
                But, surprisingly, basic PLA turned out to be the best choice
                for transparency and light effects. I also played around with
                different PLA colors and noticed that darker shades dimmed the
                light, while lighter colors like light gold and red
              </p>
              <Image
                src="/images/p2-img-4.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center  gap-8 lg:gap-16 pb-20">
              <Image
                src="/images/p2-img-5.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-auto object-contain"
              />
              <p className="text-p max-w-[80%]">
                In the journey of creating the Lobius Lamp, I tested out
                different infill shapes like triangles, zigzags, hexagons,
                cubes, and gyroids. After numerous trials, I found that the
                cross infill gave the best results. When it came to materials, I
                experimented with Nylon, PETG, ABS, and even metal-infused PLA.
                But, surprisingly, basic PLA turned out to be the best choice
                for transparency and light effects. I also played around with
                different PLA colors and noticed that darker shades dimmed the
                light, while lighter colors like light gold and red
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LobiusLamp;
