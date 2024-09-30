import { assets } from "@/data";
import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <section className="">
      <div className="bg-white pb-5">
        <div className="container mx-auto text-center">
          {/* get started */}
          <div className="rounded-[30px] pb-10 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="w-full">
                <p className="text-xs mt-[6%] mb-4 font-light text-gray-700 text-center md:text-left">
                  <span className="border-b-2 border-b-green-400">Support</span>
                </p>

                <h3 className="text-3xl pt-2 font-semibold mb-4 text-center md:text-left">
                  Frequently <br /> Asked Questions
                </h3>

                <p className="text-xs font-light text-gray-700 text-center md:text-left">
                  Sed ut perspiciatis unde omnis iste natus error <br /> Sit voluptatem accusantium.
                </p>

                <div className="flex flex-col md:flex-row mt-8">
                  <button className="mx-auto md:mx-0 mb-10  md:mb-0 bg-gradient-to-b z-10 h-[35px] w-[50%] from-green-500 to-green-600 text-xs rounded-lg shadow-purple-bottom px-4 py-2 text-white">
                    Get in Touch
                  </button>
                  <img
                    src={assets.faqImg}
                    alt={assets.faqImg}
                    className="object-fill w-full h-[300px] md:-ml-20 mr-10"
                  />
                </div>
              </div>

              <div className="flex justify-between flex-col ">
                <div className="">
                  <div className="divide-y divide-gray-100">
                    <details className="group" open={false}>
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        <span className="p-2">Do I need to change banks?</span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="block h-5 w-5 group-open:hidden"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="hidden h-5 w-5 group-open:block"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                          </svg>
                        </div>
                      </summary>
                      <div className="pb-4 text-xs text-left shadow-lg p-2 rounded-md text-secondary-500">
                        The Teamforce iS built righti into your account dashboard, andi is
                        accessible immediately: after signing up.
                      </div>
                    </details>

                    <details className="group" open={true}>
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        <span className="p-2">Do I need to change banks?</span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="block h-5 w-5 group-open:hidden"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="hidden h-5 w-5 group-open:block"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                          </svg>
                        </div>
                      </summary>
                      <div className="pb-4 text-xs text-left shadow-lg p-2 rounded-md text-secondary-500">
                        The Teamforce iS built righti into your account dashboard, andi is
                        accessible immediately: after signing up.
                      </div>
                    </details>

                    <details className="group" open={false}>
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        <span className="p-2">How can I order equipments?</span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="block h-5 w-5 group-open:hidden"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="hidden h-5 w-5 group-open:block"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                          </svg>
                        </div>
                      </summary>
                      <div className="pb-4 text-xs text-left shadow-lg p-2 rounded-md text-secondary-500">
                        The Teamforce iS built righti into your account dashboard, andi is
                        accessible immediately: after signing up.
                      </div>
                    </details>

                    <details className="group" open={false}>
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        <span className="p-2">Do you offer volume discount?</span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="block h-5 w-5 group-open:hidden"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="hidden h-5 w-5 group-open:block"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                          </svg>
                        </div>
                      </summary>
                      <div className="pb-4 text-xs text-left shadow-lg p-2 rounded-md text-secondary-500">
                        The Teamforce iS built righti into your account dashboard, andi is
                        accessible immediately: after signing up.
                      </div>
                    </details>

                    <details className="group" open={false}>
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        <span className="p-2">Do does signing up work?</span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="block h-5 w-5 group-open:hidden"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="hidden h-5 w-5 group-open:block"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                          </svg>
                        </div>
                      </summary>
                      <div className="pb-4 text-xs text-left shadow-lg p-2 rounded-md text-secondary-500">
                        The Teamforce iS built righti into your account dashboard, andi is
                        accessible immediately: after signing up.
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-10 -mb-[280px] z-60 w-[100%] md:w-[80%] rounded-[15px] md:rounded-[30px] mx-auto mt-[40px] md:mt-20 bg-[#6d38c3]">
            <div className="w-full max-w-sm min-w-[200px] mx-auto">
              <input
                className="w-full bg-[#d5c5ee] placeholder:text-slate-400 text-white text-sm rounded-full px-3 py-4 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                placeholder="Full Name"
              />
            </div>

            <div className="w-full mt-5 max-w-sm min-w-[200px] mx-auto">
              <input
                type="email"
                className="w-full bg-[#d5c5ee] placeholder:text-slate-400 text-white text-sm rounded-full px-3 py-4 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                placeholder="Email address"
              />
            </div>

            <div className="w-full mt-5 max-w-sm min-w-[200px] mx-auto">
              <input
                type="text"
                className="w-full bg-[#d5c5ee] placeholder:text-slate-400 text-white text-sm rounded-full px-3 py-4 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                placeholder="Phone number"
              />
            </div>

            <div className="w-full mt-5 max-w-sm min-w-[200px] mx-auto">
              <input
                type="text"
                className="w-full h-[100px] bg-[#d5c5ee] placeholder:text-slate-400 text-white text-sm rounded-lg px-3 pb-4 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                placeholder="Enter your message"
              />
            </div>

            <button className="bg-gradient-to-b text-white from-green-500 to-green-600 rounded-lg shadow-purple-bottom mt-7 px-6 py-3">
              Get Started for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
