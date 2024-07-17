import React from 'react';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../assets/intp.jpg'; // Update with the correct path to your image

const ParallaxSection = () => (
  <Parallax bgImage={BackgroundImage} strength={500}>
    <div style={{ height: 500 }}>
      <div className="flex justify-center items-center h-full">
        <h1 className="text-6xl text-white text-shadow">Welcome to My Portfolio</h1>
      </div>
    </div>
  </Parallax>
);

export default ParallaxSection;
