import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import ParallaxSection from './components/ParallaxSection';
// import Testimonials from './components/Testimonials';
import Loading from './components/Loading';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <Navbar />
      <DarkModeToggle />
      <ParallaxSection />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default App;
