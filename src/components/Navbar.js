import React from 'react';
import { Link } from 'react-scroll';
import { FaLaptopCode, FaFileDownload } from 'react-icons/fa'; // Import both icons

const Navbar = () => {
  return (
    <nav className="bg-black p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold cursor-pointer flex items-center space-x-2">
          <FaLaptopCode size={28} />
          <Link to="home" smooth={true} duration={500}>
            Hi Dev
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-purple-500 transition duration-300 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-purple-500 transition duration-300 cursor-pointer">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="text-white hover:text-purple-500 transition duration-300 cursor-pointer">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-white hover:text-purple-500 transition duration-300 cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-purple-500 transition duration-300 cursor-pointer">
            Contact
          </Link>
          <a href="/path/to/resume.pdf" className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
            {/* Lucide file text icon */}
            <svg className="lucide lucide-file-text w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <path d="M14 2v6h6" />
              <path d="M9 12h6" />
              <path d="M9 16h6" />
            </svg>
             Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
