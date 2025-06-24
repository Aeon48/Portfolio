import React from "react";
import { FaReact } from "react-icons/fa"; // Import React icon
import { SiTailwindcss } from "react-icons/si"; // Import Tailwind CSS icon

function Footer() {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-4">
          Made with{" "}
          <span className="flex items-center">
            React{" "}
            <FaReact className="ml-2 text-blue-500 text-3xl md:text-4xl glow-effect" />
          </span>
          and{" "}
          <span className="flex items-center">
            Tailwind{" "}
            <SiTailwindcss className="ml-2 text-teal-400 text-3xl md:text-4xl glow-effect" />
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
