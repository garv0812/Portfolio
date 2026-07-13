import React, { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  // Update server telemetry clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="footer-container section-container" style={{ padding: '0 24px' }}>
        <div className="footer-copyright">
          © {new Date().getFullYear()} <span>ARCHITECT.DEV</span>. All pipelines nominal.
        </div>

        {/* Server status & telemetry metadata */}
        <div className="footer-telemetry">
          <div className="telemetry-item">
            <span className="label">STATUS:</span>
            <span className="telemetry-status-dot"></span>
            <span className="value" style={{ color: '#10b981' }}>ACTIVE</span>
          </div>

          <div className="telemetry-item">
            <span className="label">UPTIME:</span>
            <span className="value">99.998%</span>
          </div>

          <div className="telemetry-item">
            <span className="label">LATENCY:</span>
            <span className="value">42ms</span>
          </div>

          <div className="telemetry-item">
            <span className="label">LOG_TIME:</span>
            <span className="value" style={{ fontSize: '0.7rem' }}>{timestamp}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
