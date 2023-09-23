import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/layout/Layout";
import starGlobe from "../../public/starGlobe.png";
import line from "../../public/line.svg";
import circle from "../../public/circle.svg";
import starPurple from "../../public/starPurple.png";
import starPurpleSmall from "../../public/starPurpleSmall.png";
import starPurpleSmallest from "../../public/starPurpleSmallest.png";
import twistedArrow from "../../public/twistedArrow.png";
import star from "../../public/star.png";
import star3 from "../../public/star3.png";
import star2 from "../../public/star2.png";
import manGlasses from "../../public/manGlasses.png";
import purpleFlare from "../../public/purpleFlare.png";
import smallBulb from "../../public/smallBulb.png";
import chain from "../../public/chain.png";
import spark from "../../public/spark.png";
import Link from "next/link";

const LandingPage = () => {
  const targetDate = new Date("2023-11-18"); // Replace with your target date
  const [countdown, setCountdown] = useState(calculateCountdown());

  function calculateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    return { days, hours, minutes };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="container mx-auto lg:pl-20 border-white/[18%] border-b-[1.5px] flex lg:flex-row flex-col px-6 overflow-hidden">
      {/* section 1 */}
      <section className="lg:pt-32 isolate relative lg:order-1 order-2 overflow-hidden basis-full lg:basis-1/2">
        <Image
          src={star3}
          className="absolute lg:left-12 left-24 lg:top-16 top-20"
          alt="white star"
        />
        <Image
          src={star}
          className="absolute right-0 h-4 top-20 lg:h-7"
          alt="gray star"
        />
        <Image
          src={star}
          className="absolute right-0 lg:right-36 h-4 lg:bottom-40 bottom-32 lg:h-7"
          alt="gray-star"
        />
        <Image
          src={purpleFlare}
          className="absolute -left-16 lg:left-auto contrast-150 brightness-75 lg:-top-36 -z-10"
          alt="purple-flare"
        />
        <div className="relative lg:hidden block">
          <p className="text-base lg:text-3xl font-clash font-bold italic text-center">
            Igniting a Revolution in HR Innovation
          </p>
          <Image
            src={line}
            className="lg:right-24 -right-10 lg:h-auto h-2 absolute"
            alt=""
          />
        </div>
        <Image
          src={smallBulb}
          alt="glowing bulb"
          className="absolute lg:right-36 right-16 lg:h-auto h-8 top-16"
        />
        <p className="lg:text-6xl text-3xl mt-16 lg:mt-0 leading-10 lg:leading-none text-center lg:text-start font-bold font-clash">
          getlinked Tech <br /> Hackathon <span className="text-alt">1.0 </span>
          <Image
            src={chain}
            alt="chain"
            className="inline lg:h-16 h-6 md:w-14 w-10"
          />
          <Image
            src={spark}
            alt="chain"
            className="flame inline lg:h-16 h-6 md:w-14 w-10"
          />
        </p>

        <p className="body my-5 text-center lg:text-start font-montserrat">
          Participate in getlinked tech Hackathon 2023 stand
          <br className="lg:block hidden" /> a chance to win a Big prize
        </p>

        <div className="flex lg:justify-start justify-center">
          <Link
            href={"/register"}
            className="text-base body   rounded"
          >
            Register
          </Link>
        </div>

        <p className="lg:my-16 my-8 text-5xl text-center lg:text-start lg:text-6xl font-unica">
          {String(countdown.hours).padStart(2, "0")}
          <span className="text-sm">H</span>{" "}
          {String(countdown.minutes).padStart(2, "0")}
          <span className="text-sm">M</span> 00
          <span className="text-sm">S</span>
        </p>
      </section>

      {/* section 2 */}
      <section className="lg:order-2 order-2 lg:overflow-visible lg:overflow-y-clip overflow-hidden basis-full lg:basis-1/2">
        <div className="relative lg:block hidden">
          <p className="text-base lg:text-[28px] font-bold italic font-montserrat">
            Igniting a Revolution in HR Innovation
          </p>
          <Image
            src={line}
            className="lg:right-0 right-5 lg:h-auto h-2 absolute"
            alt=""
          />
        </div>

        <div className="w-full relative h-auto mt-12">
          <Image
            src={manGlasses}
            className="hue-rotate-180 grayscale contrast-125"
            alt="man in VR-headset"
          />
          <Image
            src={starGlobe}
            className="absolute saturate-200 h-fit contrast-200 top-0"
            alt="blue ball"
          />
          <Image
            src={star}
            className="absolute top-0 lg:-right-16 -right-20"
            alt="starry metrix"
          />
          <Image
            src={purpleFlare}
            className="absolute -right-24 hidden lg:block -top-20"
            alt="purple flare"
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
