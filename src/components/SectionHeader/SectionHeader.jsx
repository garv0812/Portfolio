import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="section-header-container">
      <div className="section-num">
        [{number}]
      </div>
      <h2 className="section-title-text">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle-text">
          {subtitle}
        </p>
      )}
    </div>
  );
}
