import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-purple-500/30 lg:left-1/4"></div>

        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 flex w-full items-center justify-between lg:justify-start"
          >
            {/* Timeline dot */}
            <div className="order-1 flex w-1/12 items-center justify-center lg:w-1/4">
              <div className="relative h-5 w-5 rounded-full bg-purple-500">
                <div className="absolute inset-0 h-5 w-5 animate-ping rounded-full bg-purple-500/50"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 w-10/12 rounded-lg bg-neutral-900/50 p-6 shadow-lg lg:w-3/4 lg:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white lg:text-xl">
                  {experience.role}
                </h3>
                <span className="text-sm text-purple-300">
                  {experience.year}
                </span>
              </div>
              <h4 className="mb-2 text-sm text-purple-100 lg:text-base">
                {experience.company}
              </h4>
              <p className="mb-4 text-sm text-neutral-300 lg:text-base">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-300 lg:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
