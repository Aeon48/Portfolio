import React from "react";
import logo from "../assets/Image/Name.png";
import { FaLinkedin, FaBehance, FaGit, FaInstagram } from "react-icons/fa";
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
      <div className="flex items-center gap-4 text-base font-medium text-neutral-300">
        <a
          href={resume}
          download="Abhishek_Tuladhar_Resume.pdf"
          className="flex items-center gap-2 group transition-colors duration-300 hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z"
            />
          </svg>
          <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
            Download Resume
          </span>
        </a>
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Aeon48"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#379e33]"
          aria-label="GitHub"
        >
          <FaGit />
        </a>
        <a
          href="https://www.instagram.com/abhishektuladhar/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#E4405F]"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-tuladhar-4943562aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#0077B5]"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.behance.net/abhishetuladha/projects/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-[#1769FF]"
          aria-label="Behance"
        >
          <FaBehance />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
