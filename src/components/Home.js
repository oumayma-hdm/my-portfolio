import React from 'react';
import BackgroundImage from '../assets/intp.jpg'; // Update with the correct path to your image

const Home = () => {
    return (
      <section id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-6">
            <img src={BackgroundImage} alt="INTP background" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="md:w-1/2 p-6 text-center md:text-left">
            <div className="bg-black bg-opacity-50 p-10 rounded-lg">
              <h1 className="text-6xl mb-4 text-white animate-fade-in">Welcome to My Portfolio</h1>
              <p className="text-2xl text-white animate-slide-in">A creative space for innovation and analytical thinking</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;