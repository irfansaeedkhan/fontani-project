import React from "react";
import Link from "next/link";
import Image from "next/image";

const Biolumiinscent = () => {
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
        <div className="bg-black">
          <div className="container max-width-desktop mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between min-h-screen pt-20 px-6 max-width-desktop">
            <div className="text-white flex  flex-col gap-8 lg:gap-24 justify-center w-full lg:w-[45%] pt-5 pb-20 lg:py-20">
              <h1 className="text-h1">Biolumiinscent</h1>
              <h5 className="text-h2">
                Transforming cityscapes at night, discover the innovative use of
                bioluminescent plankton to illuminate urban environments through
                biomimicry.
              </h5>
              <div className="description">
                <p className="text-p pb-5">
                  “Biolumiscent” delves into speculative design for our future
                  cities, envisioning the integration of bioluminescent
                  technology to illuminate urban landscapes without reliance on
                  traditional electricity sources, thereby mitigating CO2
                  emissions. This innovative approach entails the installation
                  of “light tubes” along buildings, roads, and street signs,
                  providing nocturnal illumination while the underground system
                  adapts its functionality based on daylight cycles.
                </p>
                <p className="text-p">
                  Operating autonomously with minimal maintenance, the
                  underground infrastructure sustains bioluminescent plankton,
                  organisms requiring oxygen, nutrients, and sunlight to thrive.
                  These plankton, known for their natural light-emitting
                  properties, offer an eco-friendly alternative to conventional
                  lighting methods. Moreover, the system enables precise control
                  over oxygen and nutrient levels, modulating the brightness of
                  the bioluminescent liquid for customizable illumination.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex  items-center justify-center">
              <Image
                src="/images/p3-img-1.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="bg-black">
          <div className="container mx-auto flex lg:min-h-screen py-10 gap-6 text-white">
            <div className="w-1/2 flex justify-center flex-col  items-center gap-16">
              <Image
                src="/images/p3-img-2.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 flex justify-center flex-col  items-center gap-16">
              <Image
                src="/images/p3-img-3.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="bg-black text-white relative">
          <div className="container mx-auto flex flex-col lg:flex-row min-h-[80vh] lg:min-h-screen pt-20">
            <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-16">
              <Image
                src="/images/p3-img-4.png"
                width={500}
                height={500}
                alt="Burj Al Arab"
                className="w-full max-w-[80%] h-full object-contain"
              />
              <p className="text-p lg:max-w-[80%] lg:pb-20 absolute lg:static bottom-0 right-0 z-10 bg-black/20 backdrop-blur-sm w-full p-6">
                By harnessing sunlight during the day, the plankton recharge
                within the tubes, ready to emit light at nightfall. Unlike
                traditional artificial lighting, which contributes to light
                pollution and disrupts ecosystems, bioluminescent technology
                offers a sustainable solution that harmonizes with nature,
                minimizing.
              </p>
            </div>
            <div className="w-1/2 flex justify-center flex-col  items-center gap-16 absolute lg:static bottom-0 left-0">
              <Image
                src="/images/p3-img-5.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div className="container mx-auto flex flex-col lg:min-h-[80vh] gap-10 pt-20">
          <Image
            src="/images/p3-img-6.png"
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-[90%] lg:max-w-[70%] mx-auto h-full object-cover"
          />
          <p className="text-p max-w-[90%] lg:max-w-[50%] mx-auto pb-20">
            The overarching goal of this project is to inspire forward-thinking
            discussions about our environmental impact and the choices we make
            for future generations. With the electricity sector responsible for
            a significant portion of CO2 emissions, exploring alternative energy
            sources becomes imperative in our quest for sustainability.
          </p>
        </div>
        {/* section 5 */}
        <div className="bg-black text-white">
          <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="lg:w-1/2 flex justify-center flex-col  items-center gap-10">
              <Image
                src="/images/p3-img-7.png"
                width={500}
                height={500}
                alt="Burj Al Arab"
                className="w-full lg:max-w-[80%] h-auto object-contain"
              />
              <p className="text-p max-w-[90%] lg:max-w-[70%] pb-10 lg:pb-20 text-center">
                Through collaborative efforts and innovative solutions like
                bioluminescent technology, we can navigate toward a brighter,
                more sustainable future.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center">
              <Image
                src="/images/p3-img-8.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biolumiinscent;
