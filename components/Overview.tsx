import { assets } from "@/data";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Wave from "react-wavify";

type Props = {};

const Overview = (props: Props) => {
  return (
    <section className="">
      <Wave
        fill="#f3f1f6"
        paused={false}
        style={{ display: "flex", height: "60px" }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.3,
          points: 7,
        }}
      />
      <div className=" h-20 bg-gradient-to-b pt-[100px] from-[#f3f1f6] via-[#fdfdfd] via-99.9% to-[#fdfdfd]"></div>
      <div className="bg-white pb-20">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pt-10 md:text-left">
              <h2 className="text-3xl font-bold mb-2 leading-1">
                We provide the <br /> best service for you
              </h2>
              <TextGenerateEffect
                className="text-xs font-light leading-1 mb-0 h2"
                words="We've got all your payments covered"
              />
            </div>

            <div className="pt-10 md:pt-[3.5rem]  md:text-left">
              <div className="text-xl font-semibold flex justify-between md:w-[70%]">
                <div>
                  <h3 className="text-xl font-semibold md:text-left">3.5m</h3>
                  <p className="text-xs font-light text-gray-700 text-left">Active Users</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold md:text-left">240+</h3>
                  <p className="text-xs font-light text-gray-700 md:text-left">Trusted Companies</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold md:text-left">78k</h3>
                  <p className="text-xs font-light text-gray-700 text-left">Customer Care</p>
                </div>
              </div>
              <div className="ml-0 md:w-[69%]">
                <img src={assets.overviewTextLine} alt={assets.overviewTextLine} className="" />
              </div>
            </div>
          </div>

          {/* cards */}
          <div className="flex bg-[#fff] flex-col md:flex-row justify-between gap-10 md:gap-0">
            <img
              src={assets.overviewCard1}
              alt={assets.overviewCard1}
              className="
    rounded-[30px] 
    border-white 
    shadow-md 
    transition 
    duration-500 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:shadow-xl 
    hover:rotate-2
  "
            />

            <img
              src={assets.overviewCard2}
              alt={assets.overviewCard2}
              className="
    rounded-[30px] 
    border-white 
    shadow-md 
    transition 
    duration-500 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:shadow-xl 
    hover:rotate-2
  "
            />
            <img
              src={assets.overviewCard3}
              alt={assets.overviewCard3}
              className="
    rounded-[30px] 
    border-white 
    shadow-md 
    transition 
    duration-500 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:shadow-xl 
    hover:rotate-2
  "
            />
            <img
              src={assets.overviewCard4}
              alt={assets.overviewCard4}
              className="
    rounded-[30px] 
    border-white 
    shadow-md 
    transition 
    duration-500 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:shadow-xl 
    hover:rotate-2
  "
            />
          </div>

          {/* big card */}
          <div
            className="
    p-10 
    md:p-20 
    w-[100%] 
    md:w-[80%] 
    mb-20 
    rounded-[15px] 
    md:rounded-[30px] 
    mx-auto 
    mt-[40px] 
    md:mt-20 
    bg-[#fceff0] 
    opacity-0 
    animate-fadeIn 
    transition-all 
    duration-700 
    hover:scale-105 
    hover:shadow-lg"
          >
            <h2 className="text-xl md:text-3xl text-black text-center md:text-left font-bold mb-2 leading-1">
              More free tools that you can handle
            </h2>
            <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between ms-10 md:ms-0">
              <ul className="list-disc text-left px-3">
                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Invoicing
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      my-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Icard Vault
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-0 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Recurring Plans
                </li>
              </ul>

              <ul className="list-disc text-left px-3">
                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Online Checkout
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      my-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Customer Portal
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-0 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Payment Links
                </li>
              </ul>

              <ul className="list-disc text-left px-3">
                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Point-of-Sale
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      my-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Inventory
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-0 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  SMS Payment
                </li>
              </ul>

              <ul className="list-disc text-left px-3">
                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Online Food Ordering
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      my-2 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  Virtual Terminal
                </li>

                <li
                  className="
      text-xs 
      font-light 
      leading-1 
      mb-0 
      relative 
      transition-all 
      duration-500 
      hover:before:w-full
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-0 
      before:h-[2px] 
      before:bg-gray-700 
      before:transition-all 
      before:duration-500
    "
                >
                  QR Codes
                </li>
              </ul>
            </div>
          </div>

          {/* get started */}
          <div className="rounded-[30px] mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <img
                  src={assets.getStarted}
                  alt={assets.getStarted}
                  className="object-fill w-full h-full"
                />
              </div>

              <div className="flex justify-between flex-col items-center">
                <div className="">
                  <p className="text-xs mt-[6%] mb-4 font-light text-gray-700 text-left">
                    <span className="border-b-2 border-b-green-400">Open An Account</span>
                  </p>
                  <h3 className="text-3xl pt-2 font-semibold mb-4 text-left">
                    Let&apos;s get started
                  </h3>

                  <div className="text-left mt-10 flex flex-row items-center gap-2 md:gap-4">
                    <span>01</span>
                    <span className="text-xs font-light text-gray-700 text-left">
                      Sign up in a few minutes
                    </span>
                  </div>

                  <div className="text-left mt-8 flex flex-row items-center gap-2 md:gap-4">
                    <span>02</span>
                    <span className="text-xs font-light text-gray-700 text-left">
                      Let us verify your identity
                    </span>
                  </div>

                  <div className="text-left mt-8 flex flex-row items-center gap-2 md:gap-4">
                    <span>03</span>
                    <span className="text-xs font-light text-gray-700 text-left">
                      Your account is open: you can send <br /> your first payment
                    </span>
                  </div>

                  <div className="text-left mt-10">
                    <button className="bg-gradient-to-b from-green-500 to-green-600 text-xs rounded-lg shadow-purple-bottom px-4 py-2 text-white">
                      Open An Account in Minutes
                    </button>
                    <div className="text-xs mt-4 font-light text-gray-700 text-left">
                      Try it for 30 days. For free. No obligation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
