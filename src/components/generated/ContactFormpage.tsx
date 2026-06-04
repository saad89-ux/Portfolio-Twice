"use client";
import React, { useState, useEffect } from 'react';
import { Navbar, PageName } from './ServicedetailPage';
import { ContactFormSection } from './ContactFormSection';
import { GlobalMapSection } from './GlobalMapSection';
import { Footer } from './LandingPage';

export interface ContactFormpageProps {
  onNavigate?: (page: PageName) => void;
}

export const ContactFormpage: React.FC<ContactFormpageProps> = ({ onNavigate }) => {
  const [activePage, setActivePage] = useState<PageName>('Contact');
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = (page: PageName) => {
    setActivePage(page);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      fontFamily: '"Barlow", sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <Navbar activePage={activePage} onNavigate={handleNavigate} scrolled={scrolled} />
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: '80px' }} />

      <ContactFormSection />
      
      <GlobalMapSection />

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};
