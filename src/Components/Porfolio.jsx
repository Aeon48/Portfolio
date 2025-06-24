import React from "react";
import { BEHANCE_PORTFOLIO } from "../constants";

function Portfolio() {
  return (
    <section className="my-24">
      {/* Behance Portfolio Section */}
      <div className="bg-neutral-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {BEHANCE_PORTFOLIO.title}
        </h2>
        <p className="text-lg text-neutral-300 text-center mb-6">
          {BEHANCE_PORTFOLIO.description}
        </p>
        <div className="flex justify-center mb-6">
          {BEHANCE_PORTFOLIO.image && (
            <img
              src={BEHANCE_PORTFOLIO.image}
              alt="Behance Portfolio Preview"
              className="rounded-lg shadow-md w-[20px] sm:w-[250px] lg:w-[300px] object-scale-down"
            />
          )}
        </div>
        <div className="flex justify-center">
          <a
            href={BEHANCE_PORTFOLIO.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-lg font-medium text-white rounded-md hover:scale-105 transition-transform"
          >
            Visit My Behance Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
