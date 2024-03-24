import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Innoca = () => {
  return (
    <div className="bg-white w-full min-h-screen text-[#020202] relative">
      <Head>
        <title>Innoca</title>
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
        <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center min-h-screen pt-20 px-6">
          <div className="flex  flex-col gap-8 lg:gap-24 justify-center w-full lg:w-[50%] max-w-[550px] pt-5 pb-10 lg:pb-20 lg:py-20">
            <h1 className="text-h1">Innoca</h1>
            <h5 className="text-h2">
              The transformation of water utility company waste into a thriving
              business venture, exemplifying the power of creativity and
              sustainability.
            </h5>
            <div className="description">
              <p className="text-p pb-5">
                In my journey, I&apos;ve come to understand the delicate balance
                between business and creativity, especially in the context of
                teamwork. Each project has been a canvas where I blended
                business strategy with creative thinking alongside my team.
                Together, we navigated challenges, learned from each other, and
                crafted solutions that resonated deeply with both our clients
                and ourselves.
              </p>
              <p className="text-p">
                Throughout this journey, I&apos;ve realized that success
                isn&apos;t just about meeting client needs; it&apos;s about
                infusing our solutions with creativity and strategic thinking.
                It&apos;s about building relationships, learning from each
                other, and embracing moments of inspiration. By blending
                business strategy with creativity, we&apos;ve created solutions
                that are both purposeful and innovative. This journey has taught
                me the importance of collaboration, shared vision, and the power
                of human connection in achieving meaningful outcomes.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex  items-center justify-center">
            <Image
              src="/images/p5-img-1.png"
              width={500}
              height={500}
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* section2 */}
        <div className="container mx-auto flex flex-col lg:min-h-[80vh] gap-10 pb-10 lg:pb-0">
          <h2 className="text-h3 text-center pt-10 p-5">
            Green co2 reactor development
          </h2>
          <Image
            src="/images/p5-img-2.png"
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-[90%] lg:max-w-[70%] mx-auto h-full object-cover"
          />
        </div>
        {/* section3 */}
        <div className="bg-black lg:py-20">
          <div className="container mx-auto flex flex-col lg:flex-row lg:min-h-[80vh] lg:py-10 gap-6 text-white">
            <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-16">
              <Image
                src="/images/p5-img-3.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-16">
              <Image
                src="/images/p5-img-4.png"
                width={500}
                height={500}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className="container mx-auto flex flex-col lg:flex-row py-6 lg:py-10 gap-6">
          <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-16">
            <Image
              src="/images/p5-img-5.png"
              width={500}
              height={500}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center gap-10 lg:gap-16 pb-10">
            <Image
              src="/images/p5-img-6.png"
              width={500}
              height={500}
              alt="image"
              className="w-full h-auto object-contain"
            />
            <p className="text-p w-full max-w-[90%] lg:pb-20">
              In the culmination of our journey, I had the honor of pitching our
              project to a jury during the finals of the Circular Challenge at
              Blue City Lab. It was a moment of both excitement and nervous
              anticipation as we presented our innovative solution to the panel.
              Our project aimed to tackle a pressing issue: creating CO2 from a
              waste stream to replace fossil fuel burning methods for indoor
              farmers in the Netherlands. Through diligent research, creative
              problem solving, and collaborative teamwork, we developed a
              solution that not only addressed environmental concerns but also
              o&lt;ered a sustainable alternative for the farming industry. The
              experience of presenting our vision to the jury was a testament to
              the power of collective effort and the potential for impactful
              change through innovation and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innoca;
