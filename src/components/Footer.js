import React from "react";
import Image from "next/image";
import star from "../../public/star.png";
import star3 from "../../public/star3.png";
import star2 from "../../public/star2.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import {
  FaLocationDot,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";
import starPurple from "../../public/starPurple.png";
import starPurpleSmall from "../../public/starPurpleSmall.png";
import starPurpleSmallest from "../../public/starPurpleSmallest.png";

const Footer = () => {
  return (
    <section className="px-6 md:px-24 py-12 grid md:grid-cols-3 font-montserrat md:justify-items-center bg-black relative">
      <Image
        src={star3}
        alt="star"
        className="absolute left-[2.5rem] top-[30%]"
      />
      <Image
        src={star3}
        alt="star"
        className="absolute right-[10%] bottom-[20%]"
      />
      <Image
        src={starPurpleSmallest}
        alt="star"
        className="absolute right-1/2 bottom-5"
      />
      <Image src={star} alt="star" className="absolute right-20 top-1/3" />
      <div className="grid">
        <div>
          <div className="text-white font-bold text-xl md:text-3xl font-clash">
            get<span className="text-[#D434FE]">linked</span>
          </div>
          <p className="text-xs font-montserrat leading-6">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
        </div>
        <div className="flex text-xs mt-12">
          <p>Terms of Use</p>
          <div className="w-1 h-4 bg-[#D434FE] mx-3"></div>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <ul className="text-xs grid space-y-4">
          <li className="text-[#D434FE] font-semibold">Useful links</li>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>
          <li className="text-[#D434FE] flex items-center gap-3">
            Follow us{" "}
            <div className="flex items-center gap-2 text-white text-base">
              <BsInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-12 md:mt-0">
        <ul className="text-xs space-y-2">
          <li className="text-[#D434FE] font-semibold">Contact Us</li>
          <li className="flex space-x-1 items-center">
            <BiSolidPhoneCall /> <span>+234 6707653444</span>
          </li>
          <li className="flex space-x-1">
            <FaLocationDot />{" "}
            <div className="w-2/5">27,Alara Street Yaba 100012 Lagos State</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
