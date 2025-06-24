import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="relative border-b border-neutral-900 px-4 sm:px-6 md:px-10 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-purple-500/30 z-0" />

        {EXPERIENCES.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative z-10 mb-16 flex flex-col sm:flex-row sm:items-center"
            >
              {/* Side for content alignment */}
              <div
                className={`hidden sm:block w-1/2 ${
                  isLeft ? "order-1 pr-8" : "order-3 pl-8"
                }`}
              />

              {/* Dot and Line */}
              <div className="relative w-full sm:w-auto flex justify-center items-start sm:items-center order-1 sm:order-2">
                <div className="relative z-10 h-5 w-5 rounded-full bg-purple-500 shadow-lg">
                  <div className="absolute inset-0 h-5 w-5 animate-ping rounded-full bg-purple-500/50" />
                </div>
              </div>

              {/* Experience Card */}
              <div
                className={`w-full sm:w-1/2 mt-6 sm:mt-0 bg-neutral-900/70 backdrop-blur-md p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-purple-500/30 ${
                  isLeft ? "order-3 sm:ml-auto" : "order-1 sm:mr-auto"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-purple-300">{exp.year}</span>
                </div>
                <h4 className="text-sm text-purple-100 mb-2">{exp.company}</h4>
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
