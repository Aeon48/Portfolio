import React from "react";
import { BEHANCE_PORTFOLIO } from "../constants";

function Portfolio() {
  return (
    <section className="my-24 px-6 lg:px-12">
      {/* Behance Portfolio Section */}
      <div className="bg-black p-8 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] transition-shadow transform hover:scale-[1.03] duration-300">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6 tracking-wide">
          {BEHANCE_PORTFOLIO.title}
        </h2>
        <p className="text-md text-gray-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
          {BEHANCE_PORTFOLIO.description}
        </p>
        <div className="flex justify-center mb-8">
          {BEHANCE_PORTFOLIO.image && (
            <img
              src={BEHANCE_PORTFOLIO.image}
              alt="Behance Portfolio Preview"
              className="rounded-lg shadow-lg w-full max-w-[320px] object-cover transition-transform duration-500 transform hover:scale-105"
            />
          )}
        </div>
        <div className="flex justify-center">
          <a
            href={BEHANCE_PORTFOLIO.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold tracking-wide shadow-lg hover:shadow-[0_0_15px_rgba(138,43,226,0.7)] hover:scale-105 transition-transform duration-300"
          >
            Visit My Behance Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
