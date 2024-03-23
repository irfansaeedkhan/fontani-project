import React from "react";
import Link from "next/link";
import Image from "next/image";

const CarbonCircularity = () => {
  return (
    <div className="bg-white w-full min-h-screen text-[#020202] relative">
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
        <div className="bg-black text-white">
          <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between items-center min-h-screen">
            <div className="flex px-6 flex-col gap-8 lg:gap-20 justify-center w-full lg:w-[45%] max-w-[550px] pt-5 pb-10 lg:pb-20 lg:py-20 mx-auto">
              <h1 className="text-h1">Carbon Circularity</h1>
              <h5 className="text-h2">
                Embrace the power of circularity with Carbon Circularity, where
                sustainability meets innovation in crafting luxurious furniture
                from recycled carbon fiber.
              </h5>
              <div className="description">
                <p className="text-p pb-5">
                  The Carbon Circularity project emerged when I embarked on a
                  journey to design a working prototype grounded in research and
                  experimentation, all within the ethos of self-directed
                  learning. Embracing the principles of circularity, I sought to
                  repurpose carbon fiber sourced sustainably, aiming to craft a
                  luxurious piece of furniture that symbolized the intersection
                  of sustainability and innovation.
                </p>
                <p className="text-p">
                  In the quest to fulfill this vision, I meticulously analyzed
                  various types of carbon fiber sheets, ultimately selecting
                  unidirectional sheets for their superior strength and
                  stiffness, ideal for crafting durable yet lightweight
                  furniture. Through experimentation and iteration, I honed my
                  methods, culminating in the creation of a prototype stool.
                  Utilizing the pinch-and weld technique alongside metalwork,
                  the stool epitomizes the transformative potential of recycled
                  carbon fiber waste in high-end furniture design.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[55%] flex  items-center justify-center">
              <Image
                src="/images/p6-img-1.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-[50vh] lg:h-screen object-cover"
              />
            </div>
          </div>
        </div>

        {/* section2 */}
        <div className="container mx-auto flex flex-col lg:min-h-screen gap-10 py-10 lg:pb-20 relative">
          <h2 className="text-h3 text-left pt-10 p-5 z-10">Sketches</h2>
          <Image
            src="/images/p6-img-2.png"
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-[90%] lg:max-w-[70%] mx-auto h-full object-contain lg:absolute left-0"
          />
          <p className="px-6 text-p w-full max-w-[600px] lg:absolute bottom-20 right-10">
            The journey wasn&apos;t without its challenges; countless trials and
            refinements were necessary to bring the prototype to fruition. Yet,
            each experiment offered valuable insights, shaping not only the
            final product but also my understanding of circular design
            principles. The stool, while a preliminary iteration, serves as a
            tangible testament to the adaptability of the process and the
            promise of circularity in design.
          </p>
        </div>
        {/* section3 */}
        <div className="bg-black lg:px-20">
          <div className="container mx-auto flex flex-col lg:flex-row lg:min-h-screen text-white">
            <div className="w-full flex justify-center flex-col  items-center">
              <Image
                src="/images/p6-img-3.jpg"
                width={500}
                height={500}
                alt="image"
                className="w-full max-h-screen object-contain"
              />
            </div>
          </div>
        </div>
        {/* section4 desktop */}
        <div className="bg-black lg:py-20 hidden lg:block">
          <div className="container mx-auto flex flex-col lg:flex-row lg:max-h-[88vh] gap-8 text-white">
            <div className="w-full lg:w-[30%] flex justify-center flex-col  items-center gap-16">
              <Image
                src="/images/p6-img-4.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full lg:max-h-[80vh] object-cover"
              />
            </div>
            <div className="w-full lg:w-[20%] flex justify-between flex-col  items-center">
              <Image
                src="/images/p6-img-5.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-[inherit] object-contain"
              />
              <Image
                src="/images/p6-img-6.png"
                width={500}
                height={500}
                alt="image"
                className="w-full object-contain"
              />
            </div>
            <div className="w-full lg:w-[40%] flex flex-col justify-between">
              <div className="flex gap-8 justify-start items-start">
                <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-16">
                  <Image
                    src="/images/p6-img-7.png"
                    width={500}
                    height={500}
                    alt="image"
                    className="w-full object-contain"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-16">
                  <Image
                    src="/images/p6-img-8.png"
                    width={500}
                    height={500}
                    alt="image"
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-p pt-5">
                Reflecting on this experience, I&apos;ve come to appreciate the
                dynamic nature of prototyping and the evolution of vision
                throughout a project. It&apos;s a reminder that concepts are not
                static; they evolve and grow with each iteration, manifesting in
                physical form to express ideas that transcend mere imagination.
                The stool isn&apos;t just a piece of furniture; it&apos;s a
                bridge to the future—a beacon of innovation that inspires
                further exploration in the world of sustainable high-end design.
              </p>
            </div>
          </div>
        </div>
        {/* section4 mobile*/}
        <div className="bg-black text-white block lg:hidden">
          <div className="container mx-auto flex flex-col min-h-[80vh]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="col-span-2 w-full h-[50vh]">
                <Image
                  src="/images/p6-img-4.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p6-img-5.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p6-img-6.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p6-img-7.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p6-img-8.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-p text-balance lg:text-center w-full px-6 py-10 mx-auto lg:max-w-[90%]">
              Reflecting on this experience, I&apos;ve come to appreciate the
              dynamic nature of prototyping and the evolution of vision
              throughout a project. It&apos;s a reminder that concepts are not
              static; they evolve and grow with each iteration, manifesting in
              physical form to express ideas that transcend mere imagination.
              The stool isn&apos;t just a piece of furniture; it&apos;s a bridge
              to the future—a beacon of innovation that inspires further
              exploration in the world of sustainable high-end design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCircularity;
