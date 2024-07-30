import React from 'react';
import Timeline from './Timeline'; // Assuming you have a Timeline component

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-purple-400">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 leading-relaxed">
            Hi! I'm <span className="font-bold text-purple-400">Oumayma El Haddam</span>, an enthusiastic Junior Web Developer with over 2 years of experience in crafting dynamic Drupal and React.js websites. I'm passionate about innovation, web development, and continuous learning.
          </p>
          <p className="text-lg mb-10 leading-relaxed">
            I love transforming ideas into high-performance digital experiences and always look for new challenges to grow my skills.
          </p>
          <div className="bg-purple-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 inline-block max-w-xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-purple-200">Fun Facts</h3>
            <ul className="list-disc list-inside text-left text-lg leading-relaxed space-y-2">
              <li>I can code in three different languages: French, English, and Arabic!</li>
              <li>I'm a fan of anime and often draw inspiration from it for my projects.</li>
              <li>When I'm not coding, you can find me exploring the latest trends in tech.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
