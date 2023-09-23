import React from 'react'
import Image from 'next/image';
import boyLock from "../../public/boyLock.png";
import manGlasses from "../../public/manGlasses.png";
import purpleFlare from "../../public/purpleFlare.png";
import web from "../../public/web.png";
import starPurple from "../../public/starPurple.png";
import starPurpleSmall from "../../public/starPurpleSmall.png";
import starPurpleSmallest from "../../public/starPurpleSmallest.png";
import twistedArrow from "../../public/twistedArrow.png";
import star from "../../public/star.png";
import star3 from "../../public/star3.png";
import star2 from "../../public/star2.png";
import rewards from "../../public/rewards.png";
import trophy from "../../public/trophy.png";


const Trophy = () => {
  return (
    <div className="py-10 flex lg:flex-row flex-col px-10 md:px-20">
      <section className="lg:basis-1/3 relative isolate flex lg:flex-row flex-col items-center basis-full">
        <div className="lg:hidden block mb-8">
          <h2 className="font-clash lg:text-3xl text-xl text-center lg:ml-20 font-bold">
            Prizes and <p className="text-[#D434FE]">tech Hackathon 1.0</p>
          </h2>

          <p className="lg:text-base lg:ml-20 text-sm font-montserrat text-center lg:text-start lg:mt-5 leading-7 lg:leading-7">
            Highlight of the prizes or rewards for winners and
            <br className="hidden lg:block" /> for participants.
          </p>
        </div>
        <Image src={trophy} className="lg:h-auto h-64" alt="trophy asset" />
        <Image
          src={starPurpleSmall}
          className="lg:h-7 h-4 top-0 absolute left-1/4"
          alt="purple star"
        />
        <Image
          src={purpleFlare}
          className="absolute -z-10 lg:left-auto -left-8 lg:top-auto -top-16"
          alt="purple flare"
        />
      </section>

      <section className="lg:basis-2/3 relative isolate flex justify-center basis-full">
        <Image
          src={star2}
          className="lg:h-7 h-4 top-[25%] absolute left-1/4"
          alt="purple star"
        />
        <Image
          src={star2}
          className="lg:h-7 h-4 top-[30%] absolute right-0"
          alt="purple star"
        />

        <div>
          <div className="lg:block hidden">
            <h2 className="font-clash lg:text-3xl text-xl text-center lg:ml-20 font-bold md:text-left">
              Prizes and <p className="text-[#D434FE]">tech Hackathon 1.0</p>
            </h2>

            <p className="lg:text-base font-montserrat lg:ml-20 text-[13px] text-center lg:text-start lg:mt-5 leading-7 lg:leading-7">
              Highlight of the prizes or rewards for winners and
              <br className="hidden lg:block" /> for participants.
            </p>
          </div>

          <Image src={rewards} className="h-auto mt-10" alt="trophy podium" />
        </div>
      </section>
    </div>
  );
}

export default Trophy