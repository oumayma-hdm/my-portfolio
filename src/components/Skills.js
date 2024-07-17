import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-6 text-center">Skills</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="m-4">
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Web Development</h3>
              <p className="text-white">PHP, Drupal (CMS), React/Next.js, Docker, LAMP/MAMP Stack</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-green-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Frontend Development</h3>
              <p className="text-white">React, Tailwind, HTML, CSS</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-purple-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Deployment</h3>
              <p className="text-white">Capistrano, Docker</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-pink-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Programming</h3>
              <p className="text-white">Bash scripting, C/C++, HTML, Twig, JavaScript/CSS, PHP</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-yellow-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Databases</h3>
              <p className="text-white">MySQL</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-teal-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Cloud</h3>
              <p className="text-white">AWS</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-indigo-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Operating Systems</h3>
              <p className="text-white">Windows, Linux, Ubuntu, Mac</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-red-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Methods & Design</h3>
              <p className="text-white">Agile, Merise</p>
            </div>
          </li>
          <li className="m-4">
            <div className="bg-orange-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl text-white mb-2">Languages</h3>
              <p className="text-white">French, English, Arabic</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
