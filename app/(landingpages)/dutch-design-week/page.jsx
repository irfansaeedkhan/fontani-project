import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const DutchDesignWeek = () => {
  return (
    <div className="bg-white w-full min-h-screen text-[#020202] relative">
      <Head>
        <title>Dutch Design Week x In-zee</title>
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
        <div className="container max-width-desktop mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between min-h-screen pt-20 px-6 max-width-desktop">
          <div className="flex  flex-col gap-8 lg:gap-24 justify-center w-full lg:w-[45%] pt-5 pb-20 lg:py-20">
            <h1 className="text-h1">
              Dutch Design <br /> Week x In-zee
            </h1>
            <h5 className="text-h2">
              Introducing Stivy: the ingenious solution for effortless panel
              hanging, marrying sleek design with eco-conscious functionality
              for a seamless, happy customer and a sustainable future.
            </h5>
            <p className="text-p">
              During the development process for the client In-zee , I delved
              into biomimicry to seek solutions inspired by nature&apos;s
              adhesive mechanisms, exploring concepts such as a tape mimicking
              the micro 3D print pattern found on tiny mushrooms, akin to the
              gecko&apos;s ability to cling to surfaces. Eager to experiment, I
              opted to directly 3D print onto the Pet Felt, aiming for a
              seamless user experience where customers could effortlessly
              receive and mount panels anywhere. Initially, I experimented with
              a flex PLA miccelium pattern, inspired by miccelium&apos;s natural
              adhesive properties, before shifting focus from functionality to
              aesthetics, exploring intriguing contrasts between the printed
              patterns and Pet Felt colors. While attempts with root systems,
              leaf veins, and snake skin patterns proved aesthetically engaging,
              they fell short in achieving the primary goal of adhesion. A shift
              in perspective led me to closely examine the Pet Felt material
              under a microscope, revealing its composition of short plastic
              threads.
            </p>
          </div>
          <div className="w-full lg:w-[50%] flex  items-center justify-center">
            <Image
              src="/images/p4-img-1.png"
              width={500}
              height={500}
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* section2 */}
        <div className="flex flex-col lg:flex-row min-h-[80vh] lg:min-h-screen lg:pt-20">
          <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-6 lg:gap-16">
            <Image
              src="/images/p4-img-2.jpg"
              width={500}
              height={500}
              alt="spike light pattern"
              className="w-full max-w-[80%] h-full object-contain"
            />
            <p className="text-p lg:max-w-[80%] lg:pb-20 w-full p-6">
              This insight prompted experimentation with spike-like patterns,
              each with slight angle variations, ultimately proving effctive in
              securely affixing the panels. Subsequently, I developed a range of
              shapes featuring a French cleat system, offering users seamless
              panel interchangeability while facilitating end-of-life
              recycling—a testament to both functionality and sustainability
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center flex-col  items-center gap-16">
            <Image
              src="/images/p4-img-3.jpg"
              width={500}
              height={500}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* section 3 */}
        <div className="bg-black text-white">
          <div className="container mx-auto flex flex-col min-h-[80vh]">
            <div className="flex gap-5 lg:gap-10 items-center pt-14 pb-10">
              <hr class="w-16 lg:w-64 h-1 bg-white border-0 rounded"></hr>
              <h2 className="text-h3 self-start">Textures</h2>
            </div>
            {/* generate grid for 5 images */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-4.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-5.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-6.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-7.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-p text-balance lg:text-center w-full px-6 py-10 mx-auto lg:max-w-[90%]">
              The Stivy represents a versatile solution for panel hanging,
              ingeniously developed to address the challenge of mounting panels
              on horizontal walls without the need for adhesive. Designed
              primarily for Pet Felt, this innovative hanging system offers
              customizable options to cater to diverse needs. Its applications
              span across various environments, from corporate o&lt;ices to
              residential spaces, healthcare facilities, and educational
              institutions, providing flexible solutions for panel installation.
              With a vision to o&lt;er a range of attachment systems tailored to
              customer preferences, Stivy seeks to revolutionize panel hanging
              solutions for modern environments.
            </p>
          </div>
        </div>
        {/* section 4 */}
        <div className="bg-black text-white">
          <div className="container mx-auto flex flex-col min-h-[80vh]">
            <div className="flex gap-5 lg:gap-10 items-center pt-14 pb-10 justify-end">
              <h2 className="text-h3">Textures</h2>
              <hr class="w-16 lg:w-64 h-1 bg-white border-0 rounded"></hr>
            </div>
            {/* generate grid for 5 images */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 pb-2 lg:pb-20">
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-8.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-9.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-10.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/6]">
                <Image
                  src="/images/p4-img-11.png"
                  width={500}
                  height={500}
                  alt="process images"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DutchDesignWeek;
