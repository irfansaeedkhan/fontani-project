import React from "react";
import Link from "next/link";
import Image from "next/image";

const sailOfTime = () => {
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
        <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between min-h-screen pt-20 px-6 max-width-desktop">
          <div className="flex  flex-col gap-8 lg:gap-24 justify-center w-full lg:w-[45%] pt-5 pb-20 lg:py-20">
            <h1 className="text-h1">Sail Of Time</h1>
            <h2 className="text-h2">
              A one-of-a-kind collectible watch stand meticulously crafted over
              100 hours, reflecting the essence of timeless elegance and
              unparalleled craftsmanship
            </h2>
            <p className="text-p">
              Meet &apos;Sail of Time,&apos; my labor of love and exploration
              into the world of craftsmanship. In the heart of Carpenters
              Workshop Gallery, I embarked on a journey of discovery, spending
              over 100 hours honing my skills and bringing this watch box to
              life. From the brass to the final touch of the green croco patina,
              every moment was a lesson in patience and dedication. The vibrant
              red skin interior, meticulously crafted, reflects my passion for
              detail and design. &apos;Sail of Time&apos; isn&apos;t just a box;
              it&apos;s a testament to the hours spent learning, refining, and
              creating something truly unique. It&apos;s a reminder of the
              craftsmanship journey I&apos;ve undertaken and the skills
              I&apos;ve gained along the way.
            </p>
          </div>
          <div className="w-full lg:w-[50%] flex  items-center justify-center">
            <Image
              src="/images/p1-img-1.png"
              width={500}
              height={500}
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* section2 */}
        <div className="container mx-auto flex flex-col lg:flex-row min-h-[80vh] pb-20 gap-14 lg:gap-20">
          <div className="w-full lg:w-1/2 flex justify-center flex-col-reverse lg:flex-col  items-center gap-8 lg:gap-16">
            <p className="text-p max-w-[80%]">
              Inspired by the architectural elegance of the Burj Al Arab. The
              deep green colour patina, vibrant red skin interior, and sweeping
              curves are reflections of Dubai&apos;s iconic sail-shaped
              building, and they symbolise the grace, strength, and innovation
              that fuel my passion as a designer.
            </p>
            <Image
              src="/images/p1-img-2.png"
              width={500}
              height={500}
              alt="image"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center flex-col  items-center  gap-8 lg:gap-16">
            <Image
              src="/images/p1-img-3.png"
              width={500}
              height={500}
              alt="image"
              className="w-full h-auto object-contain"
            />
            <p className="text-p max-w-[80%]">
              This piece is more than a physical object; it&apos;s a piece of my
              journey. It reminds me that beauty is found in the details, and
              dreams are shaped by persistence and vision. It&apos;s a testament
              to creativity and the endless possibilities that lie ahead.
            </p>
          </div>
        </div>
        {/* section3 */}
        <div className="flex items-center gap-5 min-h-screen relative">
          <div
            class="absolute bg-fixed inset-0 bg-center bg-contain lg:bg-cover bg-no-repeat h-screen w-full"
            style={{ backgroundImage: "url('/images/p1-img-4.jpg')" }}
          >
            <div class="absolute bottom-[50%] lg:bottom-[10%] lg:right-[10%] w-full lg:max-w-[40%]  bg-[#00000059] backdrop-filter backdrop-blur-lg rounded-md p-5">
              <p class="text-p text-[#bcbcbc]">
                Sail of Time stands as a testament to a multitude of
                craftsmanship techniques meticulously employed in its creation.
                From hand grinding and hand sawing to surface grinding and
                tempering, each step in its fabrication required trial and
                error. Torch heating and hand hammering transformed metal into a
                malleable canvas, while gas metal arc welding (GMAW) fused brass
                with precision.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 min-h-[80vh] pb-10 lg:pb-5">
          <h2 className="text-h3 self-start pt-10 p-5">Process</h2>
          {/* generate grid for 5 images */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
            <div className="aspect-[3/5]">
              <Image
                src="/images/process-1.png"
                width={500}
                height={500}
                alt="process images"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/5]">
              <Image
                src="/images/process-2.png"
                width={500}
                height={500}
                alt="process images"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/5]">
              <Image
                src="/images/process-3.png"
                width={500}
                height={500}
                alt="process images"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/5]">
              <Image
                src="/images/process-4.png"
                width={500}
                height={500}
                alt="process images"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/5]">
              <Image
                src="/images/process-5.png"
                width={500}
                height={500}
                alt="process images"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/5]">
              <Image
                src="/images/process-6.png"
                width={500}
                height={500}
                alt="process images"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-p text-center w-full px-6 lg:max-w-[70%]">
            Hand polishing and vibratory finishing lent the piece a smooth,
            reflective surface, complemented by meticulous hand sanding.
            Heat-induced and chemical patination techniques imbued the metal
            with depth and character, while sand blasting etched texture and
            detail. Gilding iron added a touch of opulence, adding detail in the
            unseen, while the upholstery work with the red skin long hair
            leather crafted leather handle brought a touch of organic warmth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default sailOfTime;
