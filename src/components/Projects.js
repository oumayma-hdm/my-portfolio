import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-purple-900 to-blue-300 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl mb-2">Restaurant Management System</h3>
            <p className="text-gray-200">Full Stack development of a restaurant management system using Vue.js and Strapi.</p>

          </div>
          <div className="bg-gray-700  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl mb-2">Custom Technical Modules for Drupal 9</h3>
            <p className="text-gray-200">Developing new custom technical modules for Drupal 9 to improve the technical production team's efficiency.</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
