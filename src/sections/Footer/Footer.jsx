import React, { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [localTime, setLocalTime] = useState(() => new Date().toLocaleTimeString());

  // Update local time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="footer-container section-container" style={{ padding: '0 24px' }}>
        <div className="footer-copyright">
          © {new Date().getFullYear()} <span>GARV YADAV</span>. All rights reserved.
        </div>

        {/* Local timezone & clock telemetry */}
        <div className="footer-telemetry">
          <div className="telemetry-item">
            <span className="label">Location:</span>
            <span className="value">Ahmedabad, India</span>
          </div>

          <div className="telemetry-item">
            <span className="label">Local Time:</span>
            <span className="value">{localTime}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
