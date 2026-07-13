import React from 'react';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* Ambient Graphic Glows for Synthetic Logic Aesthetic */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
