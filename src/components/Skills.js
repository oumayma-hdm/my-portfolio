import React from 'react';
import {
  FaReact,
  FaPhp,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiDrupal,
  SiNextdotjs,
  SiMysql,
  SiUbuntu,
  SiVisualstudiocode,
  SiTailwindcss,
} from "react-icons/si";

const skillsData = [
  { icon: <FaReact size={50} className="text-purple-500 group-hover:text-purple-700" />, name: 'React' },
  { icon: <FaPhp size={50} className="text-blue-600 group-hover:text-blue-800" />, name: 'PHP' },
  { icon: <SiDrupal size={50} className="text-blue-600 group-hover:text-blue-800" />, name: 'Drupal' },
  { icon: <SiNextdotjs size={50} className="text-grey-500 group-hover:text-gray-800" />, name: 'Next.js' },
  { icon: <SiMysql size={50} className="text-blue-600 group-hover:text-blue-800" />, name: 'MySQL' },
  { icon: <FaDocker size={50} className="text-blue-500 group-hover:text-blue-700" />, name: 'Docker' },
  { icon: <SiUbuntu size={50} className="text-orange-500 group-hover:text-orange-700" />, name: 'Ubuntu' },
  { icon: <FaHtml5 size={50} className="text-orange-500 group-hover:text-orange-700" />, name: 'HTML5' },
  { icon: <FaCss3Alt size={50} className="text-blue-500 group-hover:text-blue-700" />, name: 'CSS3' },
  { icon: <FaJs size={50} className="text-yellow-500 group-hover:text-yellow-700" />, name: 'JavaScript' },
  { icon: <SiVisualstudiocode size={50} className="text-blue-500 group-hover:text-blue-700" />, name: 'VS Code' },
  { icon: <SiTailwindcss size={50} className="text-teal-400 group-hover:text-teal-600" />, name: 'Tailwind CSS' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="bg-black py-4">
        <div className="container mx-auto flex justify-center flex-wrap px-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="relative group flex items-center m-4">
              <div className="flex justify-center items-center">
                {skill.icon}
              </div>
              <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 text-sm text-white bg-gray-800 rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
