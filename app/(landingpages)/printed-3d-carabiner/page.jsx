import React from "react";
import Link from "next/link";
import Image from "next/image";

const PrintedCarabiner = () => {
  return (
    <div className="bg-white w-full min-h-screen text-[#020202] relative">
      <div className="absolute top-0 right-0 crossBtn p-5">
        <Link
          href="/"
          className="text-gray-400 bg-transparent rounded-lg text-sm md:text-base p-1.5 absolute top-2.5 end-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8"
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
              <h1 className="text-h1">3d Printed Carabiner</h1>
              <h5 className="text-h2">
                Delving into PLA&apos;s capabilities and demonstrating advanced
                3D printing applications.
              </h5>
              <div className="description">
                <p className="text-p pb-5">
                  Intrigued by the potential of 3D printing, I delved into
                  crafting a carabiner using PLA—a material commonly used in 3D
                  printing. It was an exploration of endless possibilities.
                </p>
                <p className="text-p">
                  Through tireless experimentation and expert guidance, I honed
                  designs and tested methods to strike the perfect balance of
                  strength and style. Though the journey wasn&apos;t always
                  smooth, each setback fueled my determination. In the end, I
                  unveiled a carabiner that surpassed expectations and ignited a
                  newfound passion for 3D printing.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[55%] flex  items-center justify-center">
              <Image
                src="/images/p7-img-1.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-[50vh] lg:h-screen object-cover"
              />
            </div>
          </div>
        </div>

        {/* section2 */}
        <div className="container mx-auto flex flex-col lg:min-h-screen gap-10 lg:pb-20 relative">
          <Image
            src="/images/p7-img-2.png"
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-[90%] lg:max-w-[30%] mx-auto object-contain lg:absolute top-0 left-0"
          />
          <Image
            src="/images/code.png"
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-[90%] lg:max-w-[30%] mx-auto object-contain lg:absolute bottom-10 left-0"
          />
          <Image
            src="/images/p7-img-3.png"
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-[90%] lg:max-w-[60%] mx-auto h-full object-contain lg:absolute right-0 hidden lg:block"
          />
        </div>
        {/* section3 */}
        <div className="flex flex-col lg:min-h-screen gap-10 relative py-10 lg:py-0">
          <Image
            src="/images/p7-img-4.png"
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-[90%] lg:max-w-[64%] mx-auto h-full object-contain lg:absolute left-0 bottom-0"
          />
          <div className="w-[90%] lg:w-[35%] mx-auto h-[60vh] lg:absolute lg:translate-y-[-50%] top-[50%] right-20 flex flex-col gap-10">
            <Image
              src="/images/p7-img-5.png"
              width={500}
              height={500}
              alt="image"
              className="w-full object-contain"
            />
            <p className="px-6 text-p w-full">
              Fascinated by CNC technology, I embarked on crafting a carabiner
              using innovative 3D printing techniques. PLA became my canvas a
              versatile material full of potential. It was a journey of
              discovery, navigating the complexities of design and
              functionality. Collaborating with experts, I absorbed their wisdom
              and applied it to my craft. Despite challenges, fueled by a vision
              of extraordinary creation, I persevered. In the end, I emerged
              with a carabiner that captivated the imagination, hinting at the
              boundless possibilities of 3D printing.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintedCarabiner;
