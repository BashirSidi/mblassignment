"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import ShimmerButton from "./ui/ShimmerButton";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-[#43ce79]">
        My <span className="text-[#fac500]">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning & Strategy"
          description="We'll collaborate to map out the 
          feature's goals, and key functionalities.
          We'll discuss things like site structure, navigation, 
          and content requirements."
          icon={
            <button
              className={`inline-flex w-full h-12 animate-shimmer items-center justify-center rounded-full border
              border-none bg-[linear-gradient(110deg,#3db4e5,45%,#55b4e7bf,55%,#3db4e5)] 
              bg-[length:200%_100%] px-7 lg:text-2xl font-bold text-white transition-colors focus:outline-none md:w-60 md:mt-10
              gap-2`}
            >
              Phase 1
            </button>
          }
        >
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
        <Card
          title="Development & Progress Update"
          description="Once we agree on the plan, I cue my lofi playlist 
          and dive into coding. From initial sketches to polished 
          code, I keep you updated every step of the way."
          icon={
            <button
              className={`inline-flex w-full h-12 animate-shimmer items-center justify-center rounded-full border
              border-none bg-[linear-gradient(110deg,#fac500,45%,#e3c220bf,55%,#fac500)] 
              bg-[length:200%_100%] lg:text-2xl px-7 font-bold  text-white transition-colors focus:outline-none md:w-60 md:mt-10
              gap-2`}
            >
              Phase 2
            </button>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development"
          description="This is where the magic happens! Based on 
          the approved design, I'll translate everything into 
          functional code, from the ground up."
          icon={
            <button
              className={`inline-flex w-full h-12 animate-shimmer items-center justify-center rounded-full border
              border-none bg-[linear-gradient(110deg,#43ce79,45%,#5cc187ad,55%,#43ce79)] 
              bg-[length:200%_100%] font-bold lg:text-2xl px-7 text-white transition-colors focus:outline-none md:w-60 md:mt-10
              gap-2`}
            >
              Phase 3
            </button>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[20rem] lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
