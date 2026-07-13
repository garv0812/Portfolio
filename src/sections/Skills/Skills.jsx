import React from 'react';
import { Network, Database, Layout, Layers } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { skillsCategories } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  // Map icons to categories
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'systems architecture':
        return <Network size={22} className="skills-card-icon" />;
      case 'backend & apis':
        return <Database size={22} className="skills-card-icon" />;
      case 'frontend engineering':
        return <Layout size={22} className="skills-card-icon" />;
      case 'devops & infrastructure':
        return <Layers size={22} className="skills-card-icon" />;
      default:
        return <Layers size={22} className="skills-card-icon" />;
    }
  };

  return (
    <section id="skills" className="skills-section section-container">
      <SectionHeader 
        number="02" 
        title="Skills & Tech" 
        subtitle="Languages, frameworks, databases, and tools I use to build scalable web applications." 
      />

      <div className="skills-grid">
        {skillsCategories.map((category) => (
          <div key={category.title} className="skills-card glass-panel">
            <div className="skills-card-header">
              <h3 className="skills-card-title">
                {getIcon(category.title)}
                {category.title}
              </h3>
              <p className="skills-card-desc">
                {category.description}
              </p>
            </div>

            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
