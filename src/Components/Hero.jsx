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
              I’m a designer and developer with 4 years of experience in
              Graphics Design, 2 years in UI/UX Design and Frontend Development,
              and 2 years as a 3D Artist. My work blends creativity with
              technical expertise, focusing on visually impactful designs that
              communicate brand identity and create seamless user experiences.
              In my 2 years as a UI/UX Designer and Frontend Developer, I’ve
              focused on delivering user-centric digital solutions, crafting
              intuitive interfaces that prioritize usability and accessibility.
              My expertise in front-end technologies, particularly in frameworks
              like React, allows me to develop scalable and responsive web
              applications that enhance user experiences and drive business
              outcomes.
              <br /> <br />
              In UI/UX and Frontend Development, I craft intuitive, user-centric
              interfaces using React and other technologies, ensuring responsive
              and accessible digital solutions. As a 3D Artist, I specialize in
              modeling, texturing, and rendering, creating detailed and
              immersive visuals for various projects.
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
