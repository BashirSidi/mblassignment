"use client";
import { assets } from "@/data";
import React from "react";
import Slider from "react-slick";

type Props = {};

const Testimonial = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 bg-[#6d38c3] text-white">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">
          What people <br /> are saying about us
        </h2>
        <Slider {...settings}>
          {[
            {
              icon: assets.iconLists[2],
              name: "Lana Rey",
              role: "Founder & Leader",
              text: "''Is it possible to Love your credit card processor? with TeamForce, yes!''",
            },
            {
              icon: assets.iconLists[1],
              name: "J. McGhee",
              role: "Founder & Leader",
              text: "''Is it possible to Love your credit card processor? with TeamForce, yes!''",
            },
            {
              icon: assets.iconLists[0],
              name: "Michael H.",
              role: "Founder & Leader",
              text: "''Is it possible to Love your credit card processor? with TeamForce, yes!''",
            },
          ].map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#7f52cb] p-8 rounded-lg shadow-lg text-left relative bg-purple-900 before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:border-t-2 before:border-l-2 before:border-white before:rounded-tl-lg before:top-0 before:left-0 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:border-b-2 after:border-r-2 after:border-white after:rounded-br-lg after:bottom-0 after:right-0">
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="mb-6 text-sm">{testimonial.text}</p>
                <div className="flex items-center justify-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500">
                    <img
                      src={testimonial.icon}
                      alt={testimonial.icon}
                      className="object-fill rounded-full w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
