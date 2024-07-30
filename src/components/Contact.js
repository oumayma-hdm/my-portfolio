import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl mb-6">Contact</h2>
        <p className="mb-8">Connect with me and let's build great things:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/oumayma-el-haddam"   
            className="text-purple-400 hover:text-purple-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/oumayma-hdm"
            className="text-purple-400 hover:text-purple-600 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="mailto:oumayma.elhaddam@gmail.com"
            className="text-purple-400 hover:text-purple-600 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
