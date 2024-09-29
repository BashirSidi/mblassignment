"use client";

import { assets } from "@/data";
import React, { useState } from "react";

type Props = {};

const Navigation = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="relative text-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 py-4 bg-[#6624d1]">
      <div className="max-w-7xl w-full">
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="logo text-2xl font-bold">
            <img src={assets.logo} alt={assets.logo} className="" />
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="lg:hidden z-50 relative">
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="focus:outline-none text-white"
            >
              {toggleMenu ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`${
              toggleMenu ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static fixed top-0 left-0 bg-[#6624d1] lg:bg-transparent w-full lg:w-auto h-screen lg:h-auto flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 lg:p-0 z-40`}
          >
            {/* Navigation at the top on mobile */}
            <ul className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
              <li>
                <a href="#home" className="hover:text-gray-300 font-light no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#pages" className="hover:text-gray-300 font-light no-underline">
                  Pages
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-300 font-light no-underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-gray-300 font-light no-underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 font-light no-underline">
                  Contact
                </a>
              </li>
            </ul>

            {/* Login and Sign Up buttons for mobile - centered at the bottom */}
            <div className="flex lg:hidden flex-col space-y-4 mt-auto mb-8 w-full items-center">
              <button className="bg-transparent px-4 py-2 rounded font-light w-1/2 no-border">
                Login
              </button>
              <button className="bg-gradient-to-b from-green-500 to-green-600 rounded-lg shadow-purple-bottom px-4 py-2 w-1/2">
                Sign Up
              </button>
            </div>
          </nav>

          {/* Desktop buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="bg-transparent px-4 py-2 rounded font-light no-border">Login</button>
            <button className="bg-gradient-to-b from-green-500 to-green-600 rounded-lg shadow-purple-bottom px-4 py-2">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
