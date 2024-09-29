import { assets } from "@/data";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

type Props = {};

const Payment = (props: Props) => {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 leading-1">
          All Major <br /> Payments Methods
        </h2>

        <TextGenerateEffect
          className="text-xs font-light leading-1 mb-12 h2"
          words="We've got all your payments covered"
        />

        <div className="mt-6">
          <div className="w-full">
            <img
              src={assets.paymentMethods}
              alt={assets.paymentMethods}
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
