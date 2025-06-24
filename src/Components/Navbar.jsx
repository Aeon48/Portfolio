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
        <img src={logo} alt="Logo" className="mx-2 w-36" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Aeon48"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGit />
        </a>
        <a
          href="https://www.instagram.com/abhishektuladhar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-tuladhar-4943562aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.behance.net/abhishetuladha/projects/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
