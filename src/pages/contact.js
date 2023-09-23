import Layout from "@/layout/Layout";
import React, { useState } from "react";
import Image from "next/image";
import purpleFlare from "../../public/purpleFlare.png";
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
import twistedArrow from "../../public/twistedArrow.png";
import star from "../../public/star.png";
import star3 from "../../public/star3.png";
import star2 from "../../public/star2.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);

      if (response.ok) {
        // Handle successful response
        console.log("Registration successful!");
        e.reset();
      } else {
        // Handle error response
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <div className="grid md:grid-cols-[1fr,1.5fr] pt-40 pb-10 px-4 md:px-20 items-center text-white bg-[#150E28] relative overflow-hidden">
        <Image
          src={purpleFlare}
          alt="purple flare"
          className="absolute w-1/2 -left-40 top-10 contrast-150 brightness-75"
        />
        <Image
          src={starPurpleSmall}
          alt="purple flare"
          className="absolute left-[13%] top-[20%] "
        />
        <Image
          src={starPurple}
          alt="purple flare"
          className="absolute left-[45%] top-[75%] "
        />
        <Image
          src={purpleFlare}
          alt="purple flare"
          className="absolute w-1/2 -right-20 -bottom-60 contrast-150 brightness-75"
        />
        <div className="font-montserrat space-y-6 md:w-[60%] mx-auto hidden md:grid">
          <h3 className="font-clash font-bold text-xl text-[#D434FE]">
            Get in touch
          </h3>
          <p>Contact Information</p>
          <div className="w-2/4">27,Alara Street Yaba 100012 Lagos State</div>
          <p>Call Us : 07067981819</p>
          <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          <p className="text-[#D434FE]">
            Share on{" "}
            <div className="flex items-center gap-2 text-white text-base mt-2">
              <BsInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </p>
        </div>
        <div className="shadow-md border-none md:border rounded-lg md:w-[70%] mx-auto p-4 md:p-16 drop-shadow-md">
          <div className="text-[#D434FE] font-clash font-bold text-lg">
            <h4 className="w-1/2 md:w-full">Questions or need assistance</h4>
            <h4>Let us know about it</h4>
          </div>
          <form
            className="space-y-8 font-montserrat mt-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              placeholder="First Name"
              className="border border-white pl-2 border-opacity-60 rounded-sm bg-inherit w-full placeholder:text-white placeholder:text-sm placeholder:font-montserrat placeholder:pl-2 py-2"
            />
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="border border-white pl-2 border-opacity-60 rounded-sm bg-inherit w-full placeholder:text-white placeholder:text-sm placeholder:font-montserrat placeholder:pl-2 py-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Mail"
              className="border border-white pl-2 border-opacity-60 rounded-sm bg-inherit w-full placeholder:text-white placeholder:text-sm placeholder:font-montserrat placeholder:pl-2 py-2"
            />
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="border border-white pl-2 border-opacity-60 rounded-sm h-30 bg-inherit w-full placeholder:text-white placeholder:text-sm placeholder:font-montserrat placeholder:pl-2 py-2"
            />
            <button
              type="submit"
              className="text-white bg-[#D434FE] px-8 rounded-sm text-sm py-2.5 flex mx-auto font-montserrat mt-8"
            >
              Submit
            </button>
          </form>
          <p className="text-[#D434FE] grid justify-items-center md:hidden text-xs font-medium mt-4">
            Share on{" "}
            <div className="flex items-center gap-2 text-white text-base mt-2">
              <BsInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
