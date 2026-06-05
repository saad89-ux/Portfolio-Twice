"use client";
import React, { useState, useEffect } from 'react';

const locations = [
  { id: 'ny', city: 'New York, USA', time: '10:30 PM EST', flag: '🇺🇸', top: '40%', left: '26%', pos: 'left' },
  { id: 'lon', city: 'London, UK', time: '03:30 AM GMT', flag: '🇬🇧', top: '30%', left: '48%', pos: 'top-right' },
  { id: 'dxb', city: 'Dubai, UAE', time: '07:30 AM GST', flag: '🇦🇪', top: '48%', left: '62%', pos: 'left' },
  { id: 'bom', city: 'Mumbai, India', time: '09:00 AM IST', flag: '🇮🇳', top: '52%', left: '70%', active: true, pos: 'top' },
  { id: 'sin', city: 'Singapore', time: '10:30 AM SGT', flag: '🇸🇬', top: '65%', left: '78%', pos: 'right' },
  { id: 'syd', city: 'Sydney, Australia', time: '12:30 PM AEST', flag: '🇦🇺', top: '80%', left: '88%', pos: 'right' }
];

const getTransformForPos = (pos: string) => {
  switch (pos) {
    case 'left': return 'translate(calc(-100% - 20px), -50%)';
    case 'right': return 'translate(20px, -50%)';
    case 'top': return 'translate(-50%, calc(-100% - 20px))';
    case 'top-right': return 'translate(12px, calc(-100% - 12px))';
    default: return 'translate(20px, -50%)';
  }
};

export const GlobalMapSection: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    setLocalTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    const timer = setInterval(() => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="global-map-section" style={{ 
      width: '100%', 
      padding: '100px 86px', 
      backgroundColor: 'var(--bg-primary)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      boxSizing: 'border-box',
      borderTop: '1px solid var(--border-light)'
    }}>
      
      {/* Header */}
      <span style={{ 
        color: 'rgba(0, 194, 255, 1)', 
        fontSize: '13px', 
        fontFamily: '"Barlow", sans-serif', 
        fontWeight: 700, 
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        marginBottom: '20px', 
        padding: '6px 16px', 
        borderRadius: '20px', 
        border: '1px solid rgba(0, 194, 255, 0.25)', 
        backgroundColor: 'rgba(0, 194, 255, 0.06)' 
      }}>
        OUR GLOBAL PRESENCE
      </span>
      
      <h2 style={{ 
        color: 'var(--text-primary)', 
        fontSize: '46px', 
        fontFamily: '"Barlow", sans-serif', 
        fontWeight: 800, 
        textAlign: 'center', 
        margin: '0 0 16px 0', 
        lineHeight: '1.2', 
        letterSpacing: '-0.5px' 
      }}>
        Strategically Located.<br/>
        <span style={{ 
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 1), rgba(0, 194, 255, 1))', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          backgroundClip: 'text' 
        }}>Globally</span> Connected.
      </h2>
      
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '16px', 
        fontFamily: '"Barlow", sans-serif', 
        fontWeight: 400, 
        textAlign: 'center', 
        maxWidth: '600px', 
        lineHeight: '1.6', 
        margin: '0 0 64px 0' 
      }}>
        We operate across key global markets to deliver local expertise with a worldwide perspective.
      </p>

      {/* Map Container */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '1200px', 
        height: '600px', 
        backgroundColor: 'var(--bg-card-alt)', 
        borderRadius: '24px', 
        border: '1px solid var(--border-light)', 
        overflow: 'hidden', 
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)' 
      }}>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6477663416454!2d67.05951117393555!3d24.875877044643243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0055aca87b%3A0xd603d832f740aa93!2sGohar%20Rabi%20Centre!5e0!3m2!1sen!2s!4v1780600104286!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0, position: 'absolute', inset: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
