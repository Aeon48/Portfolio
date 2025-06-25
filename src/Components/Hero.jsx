import React from "react";
import profilePic from "../assets/Image/profile_pic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Abhishek Tuladhar
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Graphics Designer | UI/UX Designer <br /> and Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="font-light text-justify my-2 max-w-xl py-6 tracking-tighter leading-8"
            >
              Experienced creative professional with 5 years in Graphic Design,
              over 2 years in UI/UX Design, and 2 years as a 3D Artist. Combines
              strong visual design skills with technical expertise to deliver
              intuitive, responsive, and engaging user experiences. Passionate
              about crafting designs that are not only visually compelling but
              also functionally seamless. Adept at collaborating with
              cross-functional teams to bring innovative ideas to life, with a
              consistent focus on user-centered design principles and real-world
              usability.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Abhishek Tuladhar"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
