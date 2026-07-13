import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import BrandIcon from '../../components/BrandIcon/BrandIcon';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [transmissionStatus, setTransmissionStatus] = useState('idle'); // idle, sending, complete
  const [logs, setLogs] = useState([]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ident descriptor required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Target route address required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Malformed route address format.';
    }
    if (!formData.message.trim()) newErrors.message = 'Payload block cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const sendLogs = [
    "Preparing email payload...",
    "Validating fields and address route...",
    "Connecting to email service API...",
    "Encrypting connection protocol...",
    "Delivering message packet...",
    "Awaiting gateway receipt...",
    "Message successfully delivered!"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setTransmissionStatus('sending');
    setLogs([sendLogs[0]]);

    // Progressively display terminal output logs
    let logIndex = 1;
    const interval = setInterval(() => {
      if (logIndex < sendLogs.length - 2) {
        setLogs(prev => [...prev, sendLogs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    let formspreeId = personalInfo.formspreeId;
    const isPlaceholder = !formspreeId || formspreeId === "your_form_id_here";

    if (isPlaceholder) {
      // Mock mode fallback when no ID is set
      setTimeout(() => {
        clearInterval(interval);
        setLogs(prev => [...prev, sendLogs[5], sendLogs[6]]);
        setTimeout(() => {
          setTransmissionStatus('complete');
          setFormData({ name: '', email: '', message: '' });
        }, 600);
      }, 2000);
      return;
    }

    // Decode the Base64 obfuscated ID at runtime
    try {
      formspreeId = atob(formspreeId);
    } catch (err) {
      // Graceful fallback if the string is not Base64 encoded
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      clearInterval(interval);

      if (response.ok) {
        setLogs(prev => [
          ...prev,
          "POST request dispatched... STATUS Code: 200 OK.",
          "Handshake complete. Payload transmitted successfully."
        ]);
        setTimeout(() => {
          setTransmissionStatus('complete');
          setFormData({ name: '', email: '', message: '' });
        }, 800);
      } else {
        const data = await response.json();
        setLogs(prev => [
          ...prev,
          "ERROR: Server refused transmission block.",
          `DETAILS: ${data.error || "Submission refused."}`
        ]);
        setTimeout(() => {
          setTransmissionStatus('idle');
          setErrors({ submit: data.error || "Formspree submission failed." });
        }, 2200);
      }
    } catch (error) {
      clearInterval(interval);
      setLogs(prev => [
        ...prev,
        "ERROR: Network socket timeout.",
        "DETAILS: Failed to resolve route gateway. Check connection."
      ]);
      setTimeout(() => {
        setTransmissionStatus('idle');
        setErrors({ submit: "Network connection failure." });
      }, 2200);
    }
  };

  const generateHash = () => {
    return '0x' + Array.from({ length: 16 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('') + '...';
  };

  return (
    <section id="contact" className="contact-section section-container">
      <SectionHeader 
        number="05" 
        title="Contact Me" 
        subtitle="Feel free to reach out for collaborations, job opportunities, or just to say hello!" 
      />

      <div className="contact-grid">
        {/* Transmission Form */}
        <div className="transmission-card glass-panel">
          {transmissionStatus === 'idle' && (
            <form onSubmit={handleSubmit} className="transmission-form" noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Your Name</label>
                <input 
                  type="text" 
                  id="form-name"
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input" 
                  placeholder="e.g. John Doe"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontFamily: 'monospace' }}>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-email">Your Email</label>
                <input 
                  type="email" 
                  id="form-email"
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input" 
                  placeholder="e.g. johndoe@domain.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontFamily: 'monospace' }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-message">Your Message</label>
                <textarea 
                  id="form-message"
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea" 
                  placeholder="Type your message here..."
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontFamily: 'monospace' }}>{errors.message}</span>}
              </div>

              {errors.submit && (
                <div style={{ color: '#ef4444', fontSize: '0.8rem', fontFamily: 'monospace', padding: '8px 12px', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.15)', borderRadius: '4px', maxWidth: '100%' }}>
                  Error: {errors.submit}
                </div>
              )}

              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message
                <Send size={16} />
              </button>
            </form>
          )}

          {transmissionStatus === 'sending' && (
            <div className="transmission-console">
              {logs.map((log, index) => (
                <div key={index} className="transmission-log-entry">
                  {log}
                </div>
              ))}
              <div className="transmission-log-entry">
                Sending message...<span className="terminal-cursor" style={{ marginLeft: '6px' }}></span>
              </div>
            </div>
          )}

          {transmissionStatus === 'complete' && (
            <div className="transmission-console" style={{ borderColor: '#10b981' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>
                <CheckCircle size={18} />
                <span>Message Sent Successfully</span>
              </div>
              <div className="transmission-log-entry">Status: Sent successfully.</div>
              <div className="transmission-log-entry">Receipt Hash: {generateHash()}</div>
              <div className="transmission-log-entry" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                Thank you! Your message has been delivered. I will respond to your email address as soon as possible.
              </div>
              <button 
                onClick={() => setTransmissionStatus('idle')} 
                className="terminal-run-btn"
                style={{ width: 'fit-content', marginTop: '16px' }}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Quick Connect Sidebar */}
        <div className="connect-info">
          <div className="connect-card glass-panel">
            <h4 className="connect-card-title">Contact Information</h4>
            
            <div className="info-item">
              <Mail size={16} className="info-icon" />
              <span className="info-text">{personalInfo.email}</span>
            </div>
            
            <div className="info-item">
              <MapPin size={16} className="info-icon" />
              <span className="info-text">{personalInfo.location}</span>
            </div>
          </div>

          <div className="connect-card glass-panel">
            <h4 className="connect-card-title">Find Me On</h4>
            
            <div className="social-links-grid">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-connect-btn"
                aria-label="Connect on GitHub"
              >
                <BrandIcon name="github" size={16} />
                GitHub
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-connect-btn"
                aria-label="Connect on LinkedIn"
              >
                <BrandIcon name="linkedin" size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
