import React from "react";
import { FaReact } from "react-icons/fa"; // Import React icon
import { SiTailwindcss } from "react-icons/si"; // Import Tailwind CSS icon

function Footer() {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
          Made with{" "}
          <span className="flex items-center">
            React{" "}
            <FaReact className="ml-1 text-blue-500 text-xl md:text-2xl glow-effect" />
          </span>
          and{" "}
          <span className="flex items-center">
            Tailwind{" "}
            <SiTailwindcss className="ml-1 text-teal-400 text-xl md:text-2xl glow-effect" />
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
