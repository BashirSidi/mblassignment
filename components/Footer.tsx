import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoChatbubbleSharp } from "react-icons/io5";
import { assets, socialMedia } from "@/data";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="pt-80 pb-5 bg-[#eeeef5] -z-10">
      <div className="container mx-auto">
        {/* links */}
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between md:ms-0">
          <div>
            <img src={assets.footerLogo} alt={assets.footerLogo} className="mb-5" />
            <p className="text-xs font-light text-gray-700 text-left">Lorem ipsum lorem ipsum</p>

            <div className="flex flex-row gap-2 mt-5">
              <BsFillTelephoneInboundFill />
              <p className="text-sm font-light text-gray-700 text-left">+9999999999</p>
            </div>

            <div className="flex flex-row gap-2 mt-3">
              <IoChatbubbleSharp />
              <p className="text-xs font-light text-gray-700 text-left">teamforce@loremipsum.com</p>
            </div>
          </div>

          <div>
            <div className="mb-5">Solutions</div>
            <ul className="list-disc text-left px-3">
              <li className="text-xs font-light leading-1 mb-2 h2">Payments</li>
              <li className="text-xs font-light leading-1 my-2 h2">Advances</li>
              <li className="text-xs font-light leading-1 mb-2 h2">Online Checkout</li>
              <li className="text-xs font-light leading-1 mb-2 h2">Dashboard</li>
              <li className="text-xs font-light leading-1 mb-0 h2">Get started</li>
            </ul>
          </div>

          <div>
            <div className="mb-5">Other Pages</div>
            <ul className="list-disc text-left px-3">
              <li className="text-xs font-light leading-1 mb-2 h2">About</li>
              <li className="text-xs font-light leading-1 my-2 h2">Services</li>
              <li className="text-xs font-light leading-1 mb-2 h2">How It Works</li>
              <li className="text-xs font-light leading-1 mb-2 h2">Pricing plan</li>
              <li className="text-xs font-light leading-1 mb-2 h2">Blog</li>
              <li className="text-xs font-light leading-1 mb-0 h2">Contact</li>
            </ul>
          </div>

          <div>
            <div className="mb-5">Download App</div>
            <img
              src={assets.downloadApp}
              alt={assets.downloadApp}
              className="mb-5 w-full h-[80px]"
            />
          </div>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <div className="flex items-center md:gap-3 gap-6 mb-5">
            {socialMedia.map((data) => (
              <div
                key={data.id}
                className="w-9 h-9 cursor-pointer flex justify-center items-center
              backdrop-filter text-black backdrop-blur-lg saturate-180 bg-white-200 bg-opacity-75
              rounded-lg"
              >
                <img src={data.img} alt={data.id + ""} height={20} width={20} />
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-xs mb-5 md:font-normal font-light">
            Full Copyright & Design by TeamForce - 2024
          </p>

          <select
            id="countries"
            className="bg-gray-50 mb-5 text-xs border border-gray-300 text-gray-900  rounded-lg"
          >
            <option selected>English [US]</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
