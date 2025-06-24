import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4 sm:px-6 md:px-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-3xl sm:text-4xl"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden sm:block absolute left-1/2 sm:left-1/2 lg:left-1/4 h-full w-1 -translate-x-1/2 transform bg-purple-500/30"></div>

        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 flex flex-col sm:flex-row items-center sm:items-start justify-start"
          >
            {/* Timeline dot */}
            <div className="mb-4 sm:mb-0 sm:w-1/12 flex items-center justify-center sm:justify-end lg:w-1/4">
              <div className="relative h-5 w-5 rounded-full bg-purple-500">
                <div className="absolute inset-0 h-5 w-5 animate-ping rounded-full bg-purple-500/50"></div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full sm:w-11/12 lg:w-3/4 rounded-lg bg-neutral-900/50 p-4 sm:p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {experience.role}
                </h3>
                <span className="text-sm text-purple-300">
                  {experience.year}
                </span>
              </div>
              <h4 className="mb-2 text-sm text-purple-100 sm:text-base">
                {experience.company}
              </h4>
              <p className="mb-4 text-sm text-neutral-300 sm:text-base">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-300 sm:text-sm"
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
