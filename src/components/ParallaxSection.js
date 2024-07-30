import React from 'react';
import { Parallax } from 'react-parallax';
import { FaReact, FaPhp, FaDocker, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiDrupal, SiNextdotjs, SiMysql, SiUbuntu, SiVisualstudiocode, SiTailwindcss, SiTwig } from 'react-icons/si';

import BackgroundImage from '../assets/OU.png'; // Update with the correct path to your image

const ParallaxSection = () => (
  <Parallax bgImage={BackgroundImage} strength={10}>
    <div style={{ height: 500 }}>
      <div className="flex justify-center items-center h-full">
        {/* Your content goes here */}
      </div>
    </div>
    <div className="bg-gray-800 py-4">
    <div className="container mx-auto flex justify-center space-x-6 flex-wrap">
        <FaReact size={40} className="text-blue-500" />
        <FaPhp size={40} className="text-indigo-700" />
        <SiDrupal size={40} className="text-blue-600" />
        <SiNextdotjs size={40} className="text-black" />
        <SiMysql size={40} className="text-orange-600" />
        <FaDocker size={40} className="text-blue-400" />
        <SiUbuntu size={40} className="text-orange-700" />
        <FaHtml5 size={40} className="text-orange-600" />
        <FaCss3Alt size={40} className="text-blue-600" />
        <FaJs size={40} className="text-yellow-500" />
        <SiVisualstudiocode size={40} className="text-blue-500" />
        <SiTailwindcss size={40} className="text-teal-400" />
      </div>
    </div>
  </Parallax>
);

export default ParallaxSection;
