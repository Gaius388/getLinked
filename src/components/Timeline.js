import React from "react";
import Image from "next/image";
import starPurple from "../../public/starPurple.png";
import starPurpleSmall from "../../public/starPurpleSmall.png";
import starPurpleSmallest from "../../public/starPurpleSmallest.png";
import twistedArrow from "../../public/twistedArrow.png";
import star from "../../public/star.png";
import star3 from "../../public/star3.png";
import star2 from "../../public/star2.png";

const Timeline = () => {
  return (
    // <!-- component -->
    <div className="py-16 container mx-auto px-8 lg:px-20 font-montserrat">
      <section className="relative">
        <Image
          src={starPurpleSmallest}
          className="lg:h-6 h-4 absolute lg:top-0 -top-6 left-1/4 lg:left-[20%]"
          alt="purple star"
        />
        <Image
          src={starPurpleSmall}
          className="lg:h-6 h-2 absolute top-[45%] left-[90%] lg:left-[85%]"
          alt="white star"
        />
        <Image
          src={star3}
          className="lg:h-6 h-3 absolute bottom-0 lg:left-0"
          alt="white star"
        />
        {/* Article 1 */}
        <article className="flex">
          <div className="lg:basis-2/5 basis-5/6 flex lg:order-1 order-3 justify-start items-end">
            <div className="text-left lg:text-right">
              <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
                Hackathon Announcement
              </p>
              <p className="lg:mt-3 mt-2 lg:text-base text-xs">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>

              <p className="body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className="lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center">
            <hr className="lg:w-1 w-[2px] lg:h-32 h-[50%] mb-2 border-0 bg-[#D434FE]" />
            <p className="bg-gradient-to-r from-[#D434FE] body lg:text-base text-xs font-bold to-[#D434FE] lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full">
              1
            </p>
          </div>

          <div className="basis-2/5 order-3 hidden lg:flex justify-start items-end mb-8">
            <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className="flex mt-4 lg:mt-8">
          <div className="lg:basis-2/5 basis-5/6 flex lg:order-3 order-3 justify-start items-end">
            <div className="text-left">
              <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
                Team Registration begins
              </p>
              <p className="lg:mt-3 mt-2 lg:text-base text-xs body">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>

              <p className="body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className="lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center">
            <hr className="lg:w-1 w-[2px] lg:h-20 h-[50%] mb-2 border-0 bg-[#D434FE]" />
            <p className="bg-gradient-to-r from-[#D434FE] body lg:text-base text-xs font-bold to-[#D434FE] lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full">
              2
            </p>
          </div>

          <div className="basis-2/5 order-1 hidden lg:flex justify-end items-end mb-8">
            <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 3 */}
        <article className="flex mt-4 lg:mt-8">
          <div className="lg:basis-2/5 basis-5/6 flex lg:order-1 order-3 justify-end items-end">
            <div className="text-left lg:text-right">
              <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
                Teams Registration ends
              </p>
              <p className="lg:mt-3 mt-2 lg:text-base text-xs body">
                Interested Participants are no longer Allowed to register
              </p>

              <p className="body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className="lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center">
            <hr className="lg:w-1 w-[2px] lg:h-32 h-[50%] mb-2 border-0 bg-[#D434FE]" />
            <p className="bg-gradient-to-r from-[#D434FE] body lg:text-base text-xs font-bold to-[#D434FE] lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full">
              3
            </p>
          </div>

          <div className="basis-2/5 order-3 hidden lg:flex justify-start items-end mb-4">
            <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 4 */}
        <article className="flex mt-4 lg:mt-8">
          <div className="lg:basis-2/5 basis-5/6 flex lg:order-3 order-3 justify-start items-end">
            <div className="text-left">
              <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
                Announcement of the accepted teams and ideas
              </p>
              <p className="lg:mt-3 mt-2 lg:text-base text-xs body">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>

              <p className="body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className="lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center">
            <hr className="lg:w-1 w-[2px] lg:h-20 h-[50%] mb-2 border-0 bg-[#D434FE]" />
            <p className="bg-gradient-to-r from-[#D434FE] body lg:text-base text-xs font-bold to-[#D434FE] lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full">
              4
            </p>
          </div>

          <div className="basis-2/5 order-1 hidden lg:flex justify-end items-end mb-8">
            <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 5 */}
        <article className="flex mt-4 lg:mt-8">
          <div className="lg:basis-2/5 basis-5/6 flex lg:order-1 order-3 justify-end items-end">
            <div className="text-left lg:text-right">
              <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className="lg:mt-3 mt-2 lg:text-base text-xs body">
                Accepted teams can now proceed to build their ground breaking
                skill driven
              </p>

              <p className="body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className="lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center">
            <hr className="lg:w-1 w-[2px] lg:h-32 h-[50%] mb-2 border-0 bg-[#D434FE]" />
            <p className="bg-gradient-to-r from-[#D434FE] body lg:text-base text-xs font-bold to-[#D434FE] lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full">
              5
            </p>
          </div>

          <div className="basis-2/5 order-3 hidden lg:flex justify-start items-end mb-4">
            <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 6 */}
        <article className="flex mt-4 lg:mt-8">
          <div className="lg:basis-2/5 basis-5/6 flex lg:order-3 order-3 justify-start items-end">
            <div className="text-left">
              <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
                Demo Day
              </p>
              <p className="lg:mt-3 mt-2 lg:text-base text-xs body">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>

              <p className="body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-[#D434FE]">
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className="lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center">
            <hr className="lg:w-1 w-[2px] lg:h-20 h-[50%] mb-2 border-0 bg-[#D434FE]" />
            <p className="bg-gradient-to-r from-[#D434FE] body lg:text-base text-xs font-bold to-[#D434FE] lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full">
              6
            </p>
          </div>

          <div className="basis-2/5 order-1 hidden lg:flex justify-end items-end mb-8">
            <p className="body font-bold text-xs lg:text-2xl text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Timeline;
