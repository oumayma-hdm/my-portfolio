import React from 'react';
import Timeline from './Timeline';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-6 text-center">About Me</h2>
        <div className="text-center">
          <p className="text-lg mb-6">
            Hi! I'm Oumayma El Haddam, an enthusiastic Junior Web Developer with over 2 years of experience in crafting dynamic Drupal and React.js websites. I'm passionate about innovation, web development, and continuous learning.
          </p>
          <p className="text-lg mb-6">
            I love transforming ideas into high-performance digital experiences and always look for new challenges to grow my skills.
          </p>
          <div className="bg-purple-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 inline-block">
            <h3 className="text-2xl mb-4">Fun Facts</h3>
            <ul className="list-disc list-inside">
              <li>I can code in three different languages: French, English, and Arabic!</li>
              <li>I'm a fan of anime and often draw inspiration from it for my projects.</li>
              <li>When I'm not coding, you can find me exploring the latest trends in cybersecurity and cloud computing.</li>
            </ul>
          </div>
        </div>
        <Timeline />
      </div>
    </section>
  );
};

export default About;
