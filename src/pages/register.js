import Layout from "@/layout/Layout";
import React, { useState } from "react";
import Image from "next/image";
import graphicMan from "../../public/graphicMan.png";
import purpleFlare from "../../public/purpleFlare.png";
import Success from "@/components/Success";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: true,
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
        "https://backend.getlinked.ai/hackathon/registration",
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
        setSuccess(true);
      } else {
        // Handle error response
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(formData);
  return (
    <Layout>
      <div className="pt-28 pb-12 grid md:grid-cols-2 md:px-20 px-4 text-white relative overflow-hidden">
        <Success success={success} setSuccess={setSuccess} />
        <Image
          src={purpleFlare}
          alt="purple flare"
          className="absolute w-[50%] -left-40 top-10 contrast-150 brightness-75"
        />
        <section>
          <Image src={graphicMan} alt="graphic man" className="w-full" />
        </section>
        <section className="md:border p-12 space-y-4 md:mx-0 border-[#D434FE] bg-[#D434FE1F] border-1 rounded-lg">
          <h2 className="text-xl md:text-3xl font-clash font-semibold text-[#D434FE] mb-4">
            Register
          </h2>
          <p className="text-sm font-montserrat">
            Be part of this movement!{" "}
            <div className="underline inline-flex">🚶🏻‍♂️🚶🏻‍♀️</div>
          </p>
          <p className="text-2xl font-montserrat mb-4">CREATE YOUR ACCOUNT</p>
          <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="md:col-span-1 col-span-2">
              <label className="font-montserrat text-sm">Team’s Name</label>
              <input
                type="text"
                required
                name="team_name"
                value={formData.team_name}
                onChange={handleInputChange}
                className="w-full border border-white py-2 mt-1 pl-2 rounded-sm bg-inherit placeholder:text-xs placeholder:font-montserrat placeholder:pl-2"
                placeholder="Enter the name of your group"
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <label className="font-montserrat text-sm">Phone</label>
              <input
                type="tel"
                required
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="w-full border border-white py-2 mt-1 pl-2 rounded-sm bg-inherit placeholder:text-xs placeholder:font-montserrat placeholder:pl-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <label className="font-montserrat text-sm">Email</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-white py-2 mt-1 pl-2 rounded-sm bg-inherit placeholder:text-xs placeholder:font-montserrat placeholder:pl-2"
                placeholder="Enter your email address"
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <label className="font-montserrat text-sm">Project Topic</label>
              <input
                type="text"
                required
                name="project_topic"
                value={formData.project_topic}
                onChange={handleInputChange}
                className="w-full border border-white py-2 mt-1 pl-2 rounded-sm bg-inherit placeholder:text-xs placeholder:font-montserrat placeholder:pl-2"
                placeholder="What is your group project topic"
              />
            </div>
            <div className="block md:col-span-1 col-span-2">
              <label className="font-montserrat text-sm">Category</label>
              <select
                className="w-full py-3 border border-white mt-1 rounded-sm bg-[#D434FE1F] border-opacity text-sm font-montserrat pl-4"
                required
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option>Select your category</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="block md:col-span-1 col-span-2">
              <label className="font-montserrat text-sm">Group Size</label>
              <select
                className="w-full py-3 border border-white mt-1 rounded-sm bg-[#D434FE1F] border-opacity text-sm font-montserrat pl-4"
                name="group_size"
                required
                value={formData.group_size}
                onChange={handleInputChange}
              >
                <option>Select</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>
            <div className="col-span-2 text-[#FF26B9] font-montserrat italic text-sm my-3">
              Please review your registration details before submitting
            </div>
            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                name="privacy_policy_accepted"
                required
                value={formData.privacy_poclicy_accepted}
                onChange={handleInputChange}
                className="border border-white rounded-sm bg-inherit mr-2"
              />
              <label className="text-xs font-montserrat">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="col-span-2 text-white bg-[#D434FE] rounded-sm text-base py-2 font-montserrat mt-4"
            >
              Register
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Register;
