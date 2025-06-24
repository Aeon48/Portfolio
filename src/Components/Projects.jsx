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
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-[#0a0f1b] p-8 shadow-2xl lg:p-12"
        >
          {/* 🔷 Wave SVG Top Separator */}
          <svg
            className="absolute top-0 left-0 w-full h-12 -translate-y-full fill-current text-[#0a0f1b]"
            viewBox="0 0 1440 320"
          >
            <path d="M0,64L120,64C240,64,480,64,720,106.7C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0..." />
          </svg>

          {/* 🌟 Gradient Accent */}
          <div className="absolute inset-0 mx-auto w-3/4 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-60"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className="text-4xl font-bold text-white">Figma UI Showcase</h3>
            <p className="max-w-2xl text-center text-neutral-400">
              Interactive preview of EarnSikka Website
            </p>

            <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-neutral-800 shadow-inner">
              <iframe
                className="w-full aspect-video"
                src="https://embed.figma.com/design/D9OFVTpuFx508gYsaXJq2H/Untitled?node-id=0-1&embed-host=share"
                allowFullScreen
                style={{ border: "none" }}
                title="Embedded Figma Design"
              />
            </div>
          </div>

          {/* 🔷 Wave SVG Bottom Separator */}
          <svg
            className="absolute bottom-0 left-0 w-full h-12 translate-y-full fill-current text-[#0a0f1b]"
            viewBox="0 0 1440 320"
          >
            <path d="M0,224L120,202.7C240,181,480,139,720,117.3C960,96,1200,96,1320,96L1440,96L1440,320L1320,320..." />
          </svg>
        </motion.div>

        {/* 🚀 Other Projects from Constant */}
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative overflow-hidden rounded-xl bg-neutral-900/50 shadow-2xl transition-all hover:bg-neutral-900/70 hover:shadow-purple-500/20"
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden lg:h-auto lg:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Project Content */}
              <div className="flex-1 p-8 lg:p-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="my-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>

                <p className="mb-8 text-lg text-neutral-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-medium text-purple-300 shadow-md transition-all hover:bg-purple-900/30 hover:text-white"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-purple-500/30"
                  >
                    View Project
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
