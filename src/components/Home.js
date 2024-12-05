import React from 'react';
import BackgroundImage from '../assets/image.png'; // Update with the correct path to your image

const Home = () => {
    return (
      <section id="home" className="h-screen flex items-center justify-center bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-6">
          <a href="https://www.linkedin.com/in/oumayma-el-haddam/" target="_blank" >
            <img src={BackgroundImage} alt="INTP background" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
            </a>
          </div>
          <div className="md:w-1/2 p-6 text-center md:text-left">
          <div className="text-center mt-10">
          <p className="text-lg text-white">If you liked what you see, feel free to contact me!</p>
        </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;