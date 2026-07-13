import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import WindowFrame from '../../components/WindowFrame/WindowFrame';
import { personalInfo, coreStack } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section section-container">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>{personalInfo.availabilityStatus}</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span>{personalInfo.name}</span>
          </h1>
          
          <p className="hero-subtitle">
            {personalInfo.subTitle} Specializing in building secure, high-scale cloud platforms and interactive interfaces.
          </p>
          
          <div className="hero-buttons">
            <a href="#work" className="btn-primary">
              INITIALIZE WORK.BAT
              <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              TRANSMIT LOG
              <Terminal size={16} />
            </a>
          </div>
          
          <div>
            <h3 className="stack-tags-title">// Core Stack</h3>
            <div className="stack-tags">
              {coreStack.map(tag => (
                <div key={tag} className="stack-tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <WindowFrame />
        </div>
      </div>
    </section>
  );
}
