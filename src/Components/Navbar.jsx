import React from "react";
import logo from "../assets/Image/Name.png";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import resume from "../assets/portfolio/resume.pdf";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="Logo"
          className="mx-2 w-36 transition duration-300 hover:brightness-50 hover:sepia hover:hue-rotate-350 hover:saturate-10"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-base font-medium text-neutral-300">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-neutral-950 transition duration-300"
        >
          <FaFileAlt className="text-cyan-400 group-hover:text-neutral-950" />
          Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Aeon48"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#379e33]"
        >
          <FaGit />
        </a>
        <a
          href="https://www.instagram.com/abhishektuladhar/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#E4405F]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-tuladhar-4943562aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#0077B5]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.behance.net/abhishetuladha/projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#1769FF]"
        >
          <FaBehance />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
