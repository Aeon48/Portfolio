import React from "react";
import logo from "../assets/Image/Name.png";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Logo with red hover effect */}
        <img
          src={logo}
          alt="Logo"
          className="mx-2 w-36 transition duration-300 hover:brightness-50 hover:sepia hover:hue-rotate-350 hover:saturate-10"
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* GitHub Icon with hover effect */}
        <a
          href="https://github.com/Aeon48"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#379e33]" // GitHub color: #211F1F
        >
          <FaGit />
        </a>

        {/* Instagram Icon with hover effect */}
        <a
          href="https://www.instagram.com/abhishektuladhar/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#E4405F]" // Instagram color: #E4405F
        >
          <FaInstagram />
        </a>

        {/* LinkedIn Icon with hover effect */}
        <a
          href="https://www.linkedin.com/in/abhishek-tuladhar-4943562aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#0077B5]" // LinkedIn color: #0077B5
        >
          <FaLinkedin />
        </a>

        {/* Behance Icon with hover effect */}
        <a
          href="https://www.behance.net/abhishetuladha/projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#1769FF]" // Behance color: #1769FF
        >
          <FaBehance />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
