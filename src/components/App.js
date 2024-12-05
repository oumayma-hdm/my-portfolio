import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '100vh' }}> {/* Full height for Home section */}
        <Home />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;