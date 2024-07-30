import React from 'react';
import { Link } from 'react-scroll';
import { FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-blue-300 p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold cursor-pointer flex items-center space-x-2">
          <FaLaptopCode size={28} />
          <Link to="home" smooth={true} duration={500}>
            Hi Dev
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-500 transition duration-300 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
