import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to dark
    const savedTheme = localStorage.getItem('architect-portfolio-theme');
    if (savedTheme) return savedTheme;
    return 'dark'; // default theme
  });

  useEffect(() => {
    // Apply theme attribute to document element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('architect-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-btn" 
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Toggle theme`}
    >
      <div className="theme-icon-container">
        {theme === 'dark' ? (
          <Sun size={18} strokeWidth={2} />
        ) : (
          <Moon size={18} strokeWidth={2} />
        )}
      </div>
    </button>
  );
}
