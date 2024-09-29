import { assets } from "@/data";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaArrowRight } from "react-icons/fa6";

type Props = {};

const Features = (props: Props) => {
  return (
    <section
      className="relative bg-gradient-to-r from-purple-700 to-purple-900 flex justify-center items-center
      flex-col overflow-clip mx-auto sm:px-10 px-5 pb-4 pt-[70px] bg-white"
    >
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-3xl font-bold mb-2 leading-1">
          You'll Love Our <br /> Powerful Payments
        </h2>

        <TextGenerateEffect
          className="text-xs font-light leading-1 mb-12 h2"
          words="We've got all your payments covered"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#fdf1f0] pt-10 rounded-[30px]">
            <h3 className="text-xl px-10 font-semibold mb-2 text-left">Scan & Go</h3>
            <p className="text-xs px-10 font-light text-gray-700 text-left">
              Transform your payment link into a QR code that <br />
              customers can scan with their <br />
              phone to pay
            </p>

            <div className="w-full">
              <img
                src={assets.featureImg1}
                alt={assets.featureImg1}
                className="object-cover w-full rounded-b-[30px]"
              />
            </div>
          </div>

          <div className="bg-[#dfe8ff] pt-10 rounded-[30px]">
            <h3 className="text-xl px-10 font-semibold mb-2 text-left">
              Easily Send Requests via Email or SMS
            </h3>
            <p className="text-xs px-10 font-light text-gray-700 text-left">
              ..or copy-paste the link
            </p>

            <div className="w-full">
              <img
                src={assets.featureImg2}
                alt={assets.featureImg2}
                className="object-fill w-full h-full rounded-b-[30px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#efdefe] rounded-[30px] mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-between flex-col">
              <div>
                <h3 className="text-xl px-10 pt-10 font-semibold mb-4 text-left">
                  Online Billing & <br /> Invoicing Payment
                </h3>
                <p className="text-xs px-10 mt-[6%] font-light text-gray-700 text-left">
                  Get paid faster with Online Invoicing <br />
                  and Virtual Terminal.
                </p>
              </div>
              <div className="text-start pl-10 pb-10 flex items-center">
                Explore Invoicing Tools{" "}
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </div>
            </div>

            <div className="w-full">
              <img
                src={assets.featureImg3}
                alt={assets.featureImg3}
                className="object-fill w-full h-full rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
