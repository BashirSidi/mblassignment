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
          speed: 0.15,
          points: 3,
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

          {/* card */}
          <div className="flex bg-[#fff] flex-col md:flex-row justify-between gap-10 md:gap-0">
            <img
              src={assets.overviewCard1}
              alt={assets.overviewCard1}
              className="rounded-[30px] border-white"
            />
            <img src={assets.overviewCard2} alt={assets.overviewCard2} className="rounded-[30px]" />
            <img src={assets.overviewCard3} alt={assets.overviewCard3} className="rounded-[30px]" />
            <img src={assets.overviewCard4} alt={assets.overviewCard4} className="rounded-[30px]" />
          </div>

          {/* big card */}

          <div className="ccard w-[100%] md:w-[80%] mx-auto mt-15 md:mt-20 bg-[#fceff0]">
            <h2>CARD</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
