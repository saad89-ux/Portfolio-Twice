"use client";
import React from 'react';
import { ContactFormSection } from './ContactFormSection';
import { GlobalMapSection } from './GlobalMapSection';

export interface ContactFormpageProps {
  
}

export const ContactFormpage: React.FC<ContactFormpageProps> = () => {
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
      <ContactFormSection />
      
      <GlobalMapSection />
    </div>
  );
};
