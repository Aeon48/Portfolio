import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-20 text-center text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-16 px-4 md:px-8 lg:px-16">
        {/* Featured Project */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative overflow-hidden rounded-xl bg-neutral-900/80 shadow-xl ring-1 ring-purple-500/20 backdrop-blur-md"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="relative w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
              <iframe
                className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-[1.01]"
                src="https://embed.figma.com/design/D9OFVTpuFx508gYsaXJq2H/Untitled?node-id=0-1&embed-host=share"
                allowFullScreen
                style={{ border: "none" }}
                title="Figma Design Preview"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full lg:w-1/3 p-8 lg:p-10 text-left">
              <h3 className="text-3xl font-semibold text-white mb-4">
                EarnSikka UI Showcase
              </h3>
              <p className="text-neutral-300 mb-6 text-sm sm:text-base">
                A high-fidelity Figma prototype built to visualize modern
                finance app UX with elegant, responsive layouts and a strong
                visual hierarchy.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "UX Design", "Prototyping", "High-Fidelity"].map(
                  (tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-neutral-800 px-4 py-2 text-xs sm:text-sm font-medium text-purple-300 shadow-md hover:bg-purple-900/30 hover:text-white transition-all"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
              <motion.a
                href="https://www.figma.com/proto/D9OFVTpuFx508gYsaXJq2H/Untitled?node-id=0-1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block rounded-md bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-purple-500/40"
              >
                View Prototype
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Alternating Projects */}
        {PROJECTS.map((project, index) => {
          const isEven = (index + 1) % 2 === 0;

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-xl bg-neutral-900/80 shadow-xl ring-1 ring-purple-500/20 backdrop-blur-md"
            >
              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* Media Side */}
                <div className="relative w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
                  {project.figmaEmbedUrl ? (
                    <iframe
                      className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-[1.01]"
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      allowFullScreen
                      src={project.figmaEmbedUrl}
                      title={`${project.title} Preview`}
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-700 ease-in-out group-hover:scale-[1.01]"
                    />
                  ) : null}
                </div>

                {/* Text Side */}
                <div className="flex flex-col justify-center w-full lg:w-1/3 p-8 lg:p-10 text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-medium text-purple-300 shadow-md hover:bg-purple-900/30 hover:text-white transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Optional View Prototype Button */}
                  {project.figmaPrototypeLink && (
                    <motion.a
                      href={project.figmaPrototypeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 inline-block rounded-md bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-purple-500/40"
                    >
                      View Prototype
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
