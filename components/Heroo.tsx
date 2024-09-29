import { assets } from "@/data";
import React from "react";
import { gridItems, projects } from "@/data";

type Props = {};

const Heroo = (props: Props) => {
  return (
    <section
      className="relative bg-gradient-to-r from-purple-700 to-purple-900 flex text-white justify-center items-center
      flex-col overflow-clip mx-auto sm:px-10 px-5 pb-4 pt-[70px] bg-[#6624d1]"
    >
      <div className="max-w-7xl w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              The Next <br /> Generation <br /> Payment <br /> Ways.
            </h1>

            <button className="bg-gradient-to-b from-green-500 to-green-600 rounded-lg shadow-purple-bottom mt-7 px-6 py-3">
              Get Started for free
            </button>

            <div className="ml-0 mt-[50px]">
              <img src={assets.listText} alt={assets.listText} className="" />
            </div>
            <div className="flex items-center ml-2">
              {assets.iconLists.map((icon, index) => (
                <>
                  <div
                    key={icon}
                    className="ml-1 border border-[#3a4bc3]/[0.2] rounded-full 
                    h-8 w-8 bg-gray-300 flex justify-center items-center"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <img src={icon} alt={icon} className="rounded-full" />
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={assets?.img} alt="Mobile App" className="w-full border-none rounded-lg" />
          </div>
        </div>
      </div>
      {/* <div>
        <div
          className="bg-white h-[100px] w-[80px]
          rounded-full mb-[-70%]"
        ></div>
      </div> */}
    </section>
  );
};

export default Heroo;
