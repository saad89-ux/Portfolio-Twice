"use client";
import React, { useEffect, useRef, useState } from 'react';

type QuoteBreakProps = {
  quote: string;
  author: string;
  role: string;
};

export const QuoteBreak: React.FC<QuoteBreakProps> = ({ quote, author, role }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      padding: '72px 0',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      position: 'relative', overflow: 'hidden'
    }}>
      <style>{`
        @keyframes quoteLineExpand {
          0% { width: 0; opacity: 0; }
          100% { width: 140px; opacity: 1; }
        }
        @keyframes quoteGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(260px, 28vw, 400px)', height: 'clamp(140px, 18vw, 200px)', borderRadius: '50%',
        background: 'radial-gradient(ellipse, var(--brand-500-soft), transparent 70%)',
        pointerEvents: 'none',
        animation: visible ? 'quoteGlow 4s ease-in-out infinite' : 'none'
      }} />

      {/* Top decorative line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--brand-500-strong), var(--brand-400-medium), transparent)',
        marginBottom: '48px',
        animation: visible ? 'quoteLineExpand 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
        width: visible ? 'clamp(6rem, 15vw, 8.75rem)' : '0'
      }} />

      {/* Quote mark */}
      <span style={{
        fontSize: 'clamp(3rem, 7vw, 4.5rem)', lineHeight: 0.8,
        color: 'var(--brand-500-soft)',
        fontFamily: 'Georgia, serif', fontWeight: 700,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease 0.15s'
      }}>"</span>

      {/* Quote text */}
      <blockquote style={{
        margin: '20px 0 0', padding: 0,
        maxWidth: '680px', textAlign: 'center',
        color: 'var(--text-primary)',
        fontSize: 'clamp(1.35rem, 2.5vw, 1.8rem)',
        lineHeight: 1.55, fontWeight: 600,
        fontFamily: '"Inter", sans-serif',
        letterSpacing: '-0.02em',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
      }}>
        {quote}
      </blockquote>

      {/* Attribution */}
      <div style={{
        marginTop: '28px',
        display: 'flex', alignItems: 'center', gap: '10px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease 0.5s'
      }}>
        <span style={{
          width: '24px', height: '1px',
          background: 'var(--brand-500-strong)'
        }} />
        <span style={{
          color: 'var(--text-primary)', fontSize: '14px', fontWeight: 700,
          fontFamily: '"Inter", sans-serif'
        }}>
          {author}
        </span>
        <span style={{
          color: 'var(--text-muted)', fontSize: '13px',
          fontFamily: '"Barlow", sans-serif'
        }}>
          {role}
        </span>
      </div>

      {/* Bottom decorative line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--brand-400-medium), var(--brand-500-strong), transparent)',
        marginTop: '48px',
        animation: visible ? 'quoteLineExpand 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' : 'none',
        width: visible ? '140px' : '0'
      }} />
    </section>
  );
};
