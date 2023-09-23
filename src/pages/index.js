/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
import Layout from "@/layout/Layout";
import ladySitting from "../../public/lady.png";
import bigIdea from "../../public/bigIdea.png";
import manCriteria from "../../public/manCriteria.png";
import manCloud from "../../public/manCloud.png";
import Faqs from "@/components/Faqs";
import Timeline from "@/components/Timeline";
import circle from "../../public/circle.svg";
import starPurple from "../../public/starPurple.png";
import starPurpleSmall from "../../public/starPurpleSmall.png";
import starPurpleSmallest from "../../public/starPurpleSmallest.png";
import twistedArrow from "../../public/twistedArrow.png";
import star from "../../public/star.png";
import star3 from "../../public/star3.png";
import star2 from "../../public/star2.png";
import boyLock from "../../public/boyLock.png";
import LandingPage from "@/components/LandingPage";
import purpleFlare from "../../public/purpleFlare.png";
import sponsors from "../../public/sponsors.png";
import pinkQuestion from "../../public/pinkQuestion.svg";
import purpleQuestion from "../../public/purpleQuestion.svg";
import Trophy from "@/components/Trophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="text-white pt-28">
        <LandingPage />
        <section className="grid md:grid-cols-2 items-center px-4 md:px-20 p-12 gap-x-6">
          <div className="w-full relative">
            <Image
              src={starPurpleSmall}
              alt="idea"
              className="absolute top-1/3 left-10"
            />
            <div className="relative w-3/5 mx-auto">
              <Image src={bigIdea} alt="idea" className=" mx-auto" />
              <Image
                src={twistedArrow}
                alt="idea"
                className="absolute -right-8 -bottom-6"
              />
            </div>
          </div>

          <div className="w-[90%] mx-auto md:mx-0 mt-16 md:mt-0 space-y-4 md:space-y-0">
            <div className="relative">
              <Image
                src={starPurple}
                alt="idea"
                className="absolute right-4 bottom-4 hidden md:block"
              />
              <h2 className="font-clash text-xl md:text-3xl font-bold text-center md:text-left mb-4">
                Introduction to getlinked{" "}
                <p className="text-[#D434FE]">tech Hackathon 1.0</p>
              </h2>
            </div>
            <p className="font-montserrat text-sm leading-7 text-center md:text-left">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </section>
        <section className="md:grid md:grid-cols-2 flex flex-col-reverse items-center px-4 md:px-20 gap-x-6 border border-y-white border-transparent border-opacity-20">
          <div className="relative">
            <Image src={star} alt="star" className="absolute -top-9 left-1/2" />
            <Image
              src={star2}
              alt="star"
              className="absolute right-4 -bottom-4"
            />
            <div className="w-[90%] mx-auto md:mx-0 mt-10 md:mt-0">
              <h2 className="font-clash text-xl md:text-3xl font-bold text-center md:text-left">
                Rules and <p className="text-[#D434FE]">Guidelines</p>
              </h2>
              <p className="font-montserrat text-sm leading-7 text-center md:text-left">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image src={ladySitting} alt="womanSitting" className="mx-auto" />
          </div>
        </section>
        <section className="grid md:grid-cols-2 items-center px-4 md:px-20 py-12 gap-x-12 mt-8">
          <div className="w-full relative">
            <Image
              src={starPurple}
              alt="star"
              className="absolute -top-20 left-28"
            />
            <Image src={circle} alt="star" className="absolute top-2 left-16" />

            <div className="relative mt-16">
              <Image src={manCriteria} alt="idea" className="w-full" />
              <Image
                src={star}
                alt="star"
                className="absolute top-1/2 left-1/2"
              />
              <Image
                src={star2}
                alt="star"
                className="absolute bottom-0 right-4"
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="font-clash text-xl md:text-3xl font-bold mb-4 text-center md:text-left">
              Judging Criteria <p className="text-[#D434FE]">Key attributes</p>
            </h2>
            <div className="font-montserrat text-sm leading-7">
              <ul className="space-y-4 text-center md:text-left">
                <li>
                  <span className="font-bold text-[#FF26B9] text-base">
                    Innovation and Creativity
                  </span>
                  : Evaluate the uniqueness and creativity of the solution.
                  Consider whether it addresses a real-world problem in a novel
                  way or introduces innovative features.
                </li>
                <li>
                  <span className="font-bold text-[#FF26B9] text-base">
                    Functionality
                  </span>
                  : Assess how well the solution works. Does it perform its
                  intended functions effectively and without major issues?
                  Judges would consider the completeness and robustness of the
                  solution.
                </li>
                <li>
                  <span className="font-bold text-[#FF26B9] text-base">
                    Impact and Relevance
                  </span>
                  : Determine the potential impact of the solution in the real
                  world. Does it address a significant problem, and is it
                  relevant to the target audience? Judges would assess the
                  potential social, economic, or environmental benefits.
                </li>
                <li>
                  <span className="font-bold text-[#FF26B9] text-base">
                    Technical Complexity
                  </span>
                  : Evaluate the technical sophistication of the solution.
                  Judges would consider the complexity of the code, the use of
                  advanced technologies or algorithms, and the scalability of
                  the solution.
                </li>
                <li>
                  <span className="font-bold text-[#FF26B9] text-base">
                    Adherence to Hackathon Rules
                  </span>
                  : Judges will Ensure that the team adhered to the rules and
                  guidelines of the hackathon, including deadlines, use of
                  specific technologies or APIs, and any other
                  competition-specific requirements.
                </li>
                <button className="text-white bg-gradient-to-r from-[#903AFF] to-[#FE34B9] px-6 rounded-sm text-sm py-1.5 flex mx-auto md:mr-auto font-montserrat">
                  Register
                </button>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="faqs"
          className="grid md:grid-cols-2 items-center px-4 md:px-20 py-12 gap-x-6 border border-y-white border-transparent border-opacity-20"
        >
          <div className="md:w-[90%] ml-auto relative">
            <Image
              src={starPurple}
              alt="star"
              className="absolute -top-12 -left-4"
            />
            <div className="pl-4 mb-8 text-center md:text-left">
              <h2 className="font-clash text-xl md:text-3xl font-bold mb-4">
                Frequently Ask <p className="text-[#D434FE]">Question</p>
              </h2>
              <p className="my-3 text-sm w-[75%] mx-auto md:mx-0 font-montserrat">
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
            </div>
            <Faqs />
          </div>
          <div className="w-full relative mt-20">
            <Image
              src={starPurpleSmall}
              alt="star"
              className="absolute top-[5.5rem] left-24"
            />
            <Image
              src={starPurpleSmall}
              alt="star"
              className="absolute left-1/2 -top-4 "
            />
            <Image
              src={star2}
              alt="star"
              className="absolute bottom-0  right-1/4"
            />
            <Image
              src={star}
              alt="star"
              className="absolute top-[45%] left-10"
            />
            <Image
              src={purpleQuestion}
              className="absolute left-8 h-8 lg:h-16"
              alt="purple question mark"
            />
            <Image
              src={pinkQuestion}
              className="absolute h-12 lg:h-28 -top-20 left-1/3"
              alt="pink question mark"
            />
            <Image
              src={purpleQuestion}
              className="absolute left-2/3 -top-8 h-8 lg:h-16"
              alt="purple question mark"
            />
            <Image
              src={manCloud}
              className="lg:h-auto h-72"
              alt="man thinking"
            />
          </div>
        </section>
        <section className="pt-10" id="timeline">
          <h2 className="text-xl md:text-3xl font-clash text-center font-bold">
            Timeline
          </h2>
          <p className="text-sm font-montserrat text-center md:w-1/2 mx-auto pt-2 pb-6">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <Timeline />
        </section>
        <section className="py-10">
          <Trophy />
        </section>
        <section className="text-center border border-b-white border-transparent border-opacity-20">
          <div className="w-full h-fit p-[4%] py-[8%] flex flex-col items-center overflow-x-clip relative">
            <Image
              src={purpleFlare}
              alt="purple flare"
              className="absolute z-10 top-[-10%] lg:top-[-8%] left-[0%] lg:left-[-8%] w-[640px] h-[640px] object-contain"
            />
            <Image
              src={star2}
              alt="star"
              className="absolute z-10 top-[77%] left-[56%] w-[20px] object-contain"
            />
            <Image
              src={starPurple}
              alt="star"
              className="absolute z-10 top-[40%] left-[56%] w-[15px] object-contain"
            />
            <Image
              src={starPurpleSmallest}
              alt="star"
              className="absolute z-10 top-[26%] left-[15%] w-[20px] object-contain"
            />
            <Image
              src={purpleFlare}
              alt="purple flare"
              className="absolute z-10 top-[20%] lg:top-[48%] right-[-64%] lg:right-[-28%] w-[640px] h-[640px] object-contain"
            />
            <div className="w-full h-fit flex flex-col items-center relative z-20">
              <div className="space-y-2">
                <h2 className="font-clash font-bold text-xl md:text-3xl">
                  Partners and Sponsors
                </h2>
                <p className="font-montserrat sm:w-[40%] mx-auto text-sm leading-6">
                  Getlinked Hackathon 1.0 is honored to have the following major
                  companies as its partners and sponsors
                </p>
              </div>
              <div className="w-fit h-fit p-[8%] border border-[#D434FE] rounded border-1 mt-12">
                <Image
                  src={sponsors}
                  alt="partners and sponsors"
                  className=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 px-4 md:px-24 py-16 gap-x-6">
          <div className="relative">
            <Image src={star} alt="star" className="absolute left-1/2 -top-4" />
            <Image
              src={starPurple}
              alt="star"
              className="absolute bottom-1/4 -left-16"
            />
            <Image
              src={starPurpleSmall}
              alt="star"
              className="absolute right-0 top-[10%]"
            />
            <div className="w-[90%] space-y-4 mx-auto md:mx-0 text-center md:text-left">
              <h2 className="font-clash text-xl md:text-3xl font-bold">
                Privacy Policy and <p className="text-[#D434FE]">Terms</p>
              </h2>
              <p className="font-montserrat text-xs">
                Last updated on September 12, 2023
              </p>
              <p className="font-montserrat text-xs md:text-sm">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
            <div className="p-5 md:p-16 font-montserrat mt-12 w-[85%] mx-auto md:mx-0 border-[#D434FE] border bg-[#D434FE1F] border-1 rounded-lg">
              <p className="text-xs md:text-sm">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className=" font-montserrat mt-8 space-y-2">
                <h2 className="text-[#D434FE] font-bold text-[13px]">
                  Licensing Policy
                </h2>
                <p className="text-xs md:text-sm font-bold">
                  Here are terms of our Standard License:
                </p>
                <ul className="text-xs md:text-sm space-y-4">
                  <li className="leading-6 flex gap-2">
                    <AiFillCheckCircle className="text-green-400 text-2xl" />
                    <span className="text-xs">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </span>
                  </li>
                  <li className="leading-6 flex gap-2">
                    <AiFillCheckCircle className="text-green-400 text-2xl" />
                    <span className="text-xs">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </span>
                  </li>
                  <Link href={"/register"}>
                    <button className="text-white bg-[#D434FE] px-6 rounded-sm text-sm py-1.5 flex mx-auto font-montserrat mt-8">
                      Register
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid relative">
            <Image
              src={star3}
              alt="star"
              className="absolute left-[5rem] bottom-[32%]"
            />
            <Image
              src={star3}
              alt="star"
              className="absolute right-[4.5rem] top-[10%]"
            />
            <Image
              src={star}
              alt="star"
              className="absolute -right-4 bottom-[15%]"
            />
            <Image
              src={starPurpleSmallest}
              alt="star"
              className="absolute left-1/4 bottom-2/4"
            />
            <div className="w-full mt-8 md:mt-0 h-fit relative bg-backShield bg-no-repeat bg-contain">
              <Image src={boyLock} alt="boy lock" />
            </div>
          </div>
        </section>
        <Footer />
        <footer className="text-center bg-black font-montserrat text-xs pb-4">
          All rights reserved. © getlinked Ltd.
        </footer>
      </div>
    </Layout>
  );
}
