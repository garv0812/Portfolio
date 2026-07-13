import React, { useState, useEffect } from 'react';
import { Home, Cpu, Briefcase, Folder, Send } from 'lucide-react';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home', icon: <Home size={18} /> },
    { label: 'Skills', href: '#skills', id: 'skills', icon: <Cpu size={18} /> },
    { label: 'Pathway', href: '#experience', id: 'experience', icon: <Briefcase size={18} /> },
    { label: 'Works', href: '#work', id: 'work', icon: <Folder size={18} /> },
    { label: 'Transmit', href: '#contact', id: 'contact', icon: <Send size={18} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // offset
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header - Logo and Theme Toggle */}
      <header className="navbar-wrapper">
        <nav className="navbar-container">
          <a href="#home" className="nav-logo" aria-label="Garv Yadav Portfolio Home">
            <Cpu size={18} strokeWidth={2.5} />
            GARV<span>.DEV</span>
          </a>

          {/* Desktop Nav Links (Hidden on Mobile) */}
          <div className="nav-links">
            {navItems.map(item => (
              <a 
                key={item.href}
                href={item.href} 
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                // {item.label.toUpperCase()}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Persistent Open Bottom Navigation Bar (Visible only on mobile/tablet <= 768px) */}
      <nav className="mobile-bottom-nav">
        <div className="mobile-bottom-nav-container">
          {navItems.map(item => (
            <a 
              key={item.href}
              href={item.href}
              className={`mobile-bottom-nav-item ${activeSection === item.id ? 'active' : ''}`}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className="mobile-bottom-nav-icon">
                {item.icon}
              </div>
              <span className="mobile-bottom-nav-label">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
