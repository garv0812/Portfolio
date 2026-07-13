import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { experienceTimeline, education } from '../../data/portfolioData';
import './Experience.css';

export default function Experience() {
  // Helper to dynamically highlight metrics and numbers in experience descriptions
  const highlightMetrics = (text) => {
    const regex = /(\d+(?:\.\d+)?%|\$\d+(?:\.\d+)?\w*|\b\d+,\d+\+?|\b\d+\+?|\b\d+\s+(?:days|minutes|hours|weeks|months|years|accounts|developers|tables|apps)\b|sub-\d+ms)/g;
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (regex.test(part)) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="experience" className="experience-section section-container">
      <SectionHeader 
        number="03 // PATHWAY" 
        title="Professional Pathway" 
        subtitle="Chronology of professional experience and academic credentials detailing development sprints and architectures." 
      />

      <div className="timeline-container">
        {experienceTimeline.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot"></div>
            
            <div className="timeline-card">
              <div className="timeline-header">
                <div className="timeline-role-info">
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-company">{item.company}</span>
                </div>
                <div className="timeline-period">
                  {item.period}
                </div>
              </div>

              <p className="timeline-desc">
                {item.description}
              </p>

              <ul className="timeline-metrics-list">
                {item.metrics.map((metric, idx) => (
                  <li key={idx} className="timeline-metric-item">
                    {highlightMetrics(metric)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Credentials timeline block */}
      <div style={{ marginTop: '64px' }}>
        <h3 className="timeline-role" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', color: 'var(--accent-primary)', marginBottom: '32px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>// ACADEMIC_CREDENTIALS</span>
        </h3>
        
        <div className="timeline-container">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item" style={{ marginBottom: idx === education.length - 1 ? 0 : '36px' }}>
              <div className="timeline-dot" style={{ borderColor: 'var(--accent-secondary)' }}></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-role-info">
                    <h3 className="timeline-role" style={{ fontSize: '1.2rem' }}>{edu.degree}</h3>
                    <span className="timeline-company" style={{ color: 'var(--text-secondary)' }}>{edu.institution}</span>
                  </div>
                  <div className="timeline-period">
                    {edu.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
