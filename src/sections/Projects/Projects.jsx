import React from 'react';
import { Folder, ExternalLink, Database, Cpu, Shield, Globe } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import BrandIcon from '../../components/BrandIcon/BrandIcon';
import { projects } from '../../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const { featured, secondary } = projects;

  return (
    <section id="work" className="projects-section section-container">
      <SectionHeader 
        number="04" 
        title="Featured Projects" 
        subtitle="A selection of web applications and backend projects I have built." 
      />

      {/* Featured Project Spotlight */}
      <div className="featured-project-card glass-panel">
        <div className="featured-info">
          <span className="featured-tag">{featured.category}</span>
          <h3 className="featured-title">{featured.title}</h3>
          <p className="featured-desc">
            {featured.description}
          </p>

          <div className="featured-stats">
            {featured.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="featured-tech">
            {featured.tech.map((tag) => (
              <span key={tag} className="stack-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="featured-actions">
            <a 
              href={featured.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
              aria-label={`View code for ${featured.title} on GitHub`}
            >
              <BrandIcon name="github" size={16} />
              View on GitHub
            </a>
            <a 
              href={featured.demoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
              aria-label={`Launch live demo for ${featured.title}`}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>

        {/* High-Fidelity Infrastructure Schematic */}
        <div className="featured-schematic">
          <div className="schematic-title">System Architecture Overview</div>
          
          <div className="schematic-nodes">
            <div className="schema-node gateway">
              <Globe size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              React Frontend
            </div>
            
            <div className="schema-flow-arrow"></div>
            
            <div className="schema-node" style={{ borderColor: 'var(--accent-primary)' }}>
              <Cpu size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Django Backend
            </div>
            
            <div className="schema-flow-arrow"></div>

            <div className="schema-split-flow">
              <div className="schema-node cache" style={{ maxWidth: '100px' }}>
                DRF APIs
              </div>
              <div className="schema-node database" style={{ maxWidth: '100px' }}>
                SQL Server
              </div>
            </div>
            
            <div className="schema-flow-arrow" style={{ height: '14px' }}></div>
            
            <div className="schema-node database" style={{ borderStyle: 'dashed' }}>
              <Database size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              21 Table Schemas
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Projects Grid */}
      <div className="projects-grid">
        {secondary.map((project) => (
          <div key={project.title} className="project-card glass-panel">
            <div className="project-card-header">
              <Folder className="project-folder-icon" size={24} />
              
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-link-btn"
                  aria-label={`GitHub link for ${project.title}`}
                >
                  <BrandIcon name="github" size={18} />
                </a>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-link-btn"
                  aria-label={`Demo link for ${project.title}`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <h4 className="project-card-title">{project.title}</h4>
            
            <p className="project-card-desc">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((tag) => (
                <span key={tag} className="tech-badge-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
