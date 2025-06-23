import React from 'react'
import logo from "../assets/Image/Name.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGit} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"


function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src= {logo} alt="" className='mx-2 w-36'/>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/Aeon48"><FaGit /></a>
            <a href="https://www.instagram.com/abhishektuladhar/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/abhishek-tuladhar-4943562aa/"><FaLinkedin /></a>
        </div>
    </nav>
  )
}

export default Navbar