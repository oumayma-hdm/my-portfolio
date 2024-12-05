import React from 'react';
import { FaReact, FaPhp, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaEnvelope } from 'react-icons/fa'; // Import the email icon
import { SiDrupal, SiNextdotjs, SiMysql, SiUbuntu, SiVisualstudiocode, SiTailwindcss, SiTwig } from 'react-icons/si';

const ParallaxSection = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5"></div>
      <div style={{ height: '500px' }} className="relative z-10">
        <div className="flex flex-col justify-center items-center h-full px-4">
          <p className="text-gray-400 text-sm text-center">👋 Welcome to my portfolio</p>
          
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">
            Hi, <span className="text-purple-500">I'm</span> Oumayma El Haddam
          </h1>
          <div className="w-16 h-1 bg-purple-500 mt-2" />
          <p className="text-gray-400 text-sm text-center mt-1">
            I'm a <span className="text-purple-500">Software Engineer</span> specializing in full-stack development and cloud architecture, passionate about <span className="text-purple-500">building elegant solutions to complex problems.</span> 
          </p>
          
          {/* Buttons Section */}
          <div className="flex space-x-4 mt-4">
            <a href="#contact" className="flex items-center text-purple-500 border border-purple-500 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition duration-300">
              <FaEnvelope className="mr-2" /> {/* Email icon */}
              Get in Touch
            </a>
            <a href="/path/to/resume.pdf" className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
              <div className="w-4 h-1 bg-purple-500 mr-2" /> 
              Download Resume
            </a>
          </div>

          {/* Social Media Links Section */}
          <div className="mt-12 flex justify-center gap-6" style={{ opacity: 1 }}>
            <a href="https://github.com/oumayma-hdm" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-500 transition-colors duration-300" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-6 h-6">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/oumayma-el-haddam/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-500 transition-colors duration-300" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-6 h-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://leetcode.com/u/oumaymahdm/a" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-500 transition-colors duration-300" aria-label="LeetCode">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml w-6 h-6">
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </a>
            <a href="mailto:oumayma.elhaddam@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-500 transition-colors duration-300" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 mt-12">
        <span className="text-sm text-zinc-400">Scroll to explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-green-500">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;