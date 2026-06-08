"use client";
import React, { useState, useEffect, useRef } from 'react';
import type { Article } from '../../data/articles';

type TableOfContentsProps = {
  article: Article;
};

/* ── Minimal Monochrome Icons ── */
const TakeawayIcon: React.FC<{ index: number }> = ({ index }) => {
  const icons = [
    <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
    <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/></svg>,
  ];
  return icons[index % icons.length];
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({ article }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSummaryVisible(true); },
      { threshold: 0.15 }
    );
    if (summaryRef.current) observer.observe(summaryRef.current);
    return () => observer.disconnect();
  }, []);

  /* Animate reading progress bar */
  useEffect(() => {
    if (!summaryVisible) return;
    const id = setInterval(() => setProgressWidth(p => (p >= 100 ? 100 : p + 1)), 40);
    return () => clearInterval(id);
  }, [summaryVisible]);

  return (
    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
      <style>{`
        @keyframes summaryGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════
          EXECUTIVE SUMMARY — Glassmorphism Panel
         ═══════════════════════════════════════════ */}
      <div ref={summaryRef} style={{
        position: 'relative', padding: '48px 52px',
        borderRadius: '28px', overflow: 'hidden',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.12)',
        opacity: summaryVisible ? 1 : 0,
        transform: summaryVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '-40%', right: '-15%',
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,194,255,0.05), transparent 55%)',
          pointerEvents: 'none', animation: 'summaryGlow 5s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute', bottom: '-30%', left: '-10%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,51,234,0.04), transparent 55%)',
          pointerEvents: 'none'
        }} />

        {/* Label + Reading Progress */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '32px', position: 'relative', zIndex: 1
        }}>
          <span style={{
            padding: '5px 16px', borderRadius: '999px',
            background: 'rgba(0,194,255,0.08)', border: '1px solid rgba(0,194,255,0.18)',
            color: 'rgba(0,194,255,1)', fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            fontFamily: '"Inter", sans-serif'
          }}>
            Executive Summary
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: '"Barlow", sans-serif' }}>
              Reading Progress
            </span>
            <div style={{
              width: '100px', height: '3px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.06)', overflow: 'hidden'
            }}>
              <div style={{
                width: `${progressWidth}%`, height: '100%', borderRadius: '999px',
                background: 'linear-gradient(90deg, rgba(0,194,255,0.7), rgba(147,51,234,0.7))',
                transition: 'width 60ms linear'
              }} />
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: '"Inter", sans-serif', minWidth: '28px' }}>
              {progressWidth}%
            </span>
          </div>
        </div>

        {/* Meta row */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '22px', position: 'relative', zIndex: 1 }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: '"Barlow", sans-serif' }}>
            {article.category} · {article.date} · {article.read}
          </span>
        </div>

        {/* Summary Title */}
        <h2 style={{
          margin: 0, position: 'relative', zIndex: 1,
          color: 'var(--text-primary)',
          fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
          lineHeight: 1.1, fontWeight: 800,
          fontFamily: '"Inter", sans-serif', letterSpacing: '-0.035em'
        }}>
          {article.summaryTitle}
        </h2>

        {/* Summary Body */}
        <p style={{
          margin: '24px 0 0', position: 'relative', zIndex: 1,
          color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.85,
          maxWidth: '700px', fontFamily: '"Barlow", sans-serif'
        }}>
          {article.summary}
        </p>
      </div>

      {/* ═══════════════════════════════════════════
          STICKY ROADMAP — Timeline Navigation
         ═══════════════════════════════════════════ */}
      <section>
        <div style={{ marginBottom: '28px' }}>
          <span style={{
            color: 'rgba(0,194,255,1)', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            fontFamily: '"Inter", sans-serif'
          }}>
            Strategic Roadmap
          </span>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '72px 1fr', gap: '28px',
          position: 'relative'
        }}>
          {/* Left — Sticky Step Numbers */}
          <div style={{
            position: 'sticky', top: '120px', alignSelf: 'start',
            display: 'flex', flexDirection: 'column', gap: '0',
            height: 'fit-content'
          }}>
            {article.toc.map((item, index) => (
              <div key={item.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button
                  onClick={() => setActiveStep(index)}
                  style={{
                    all: 'unset', cursor: 'pointer',
                    width: '44px', height: '44px', borderRadius: '13px',
                    display: 'grid', placeItems: 'center',
                    fontSize: '13px', fontWeight: 800,
                    fontFamily: '"Inter", sans-serif',
                    color: activeStep === index ? 'rgba(0,194,255,1)' : 'var(--text-muted)',
                    background: activeStep === index ? 'rgba(0,194,255,0.08)' : 'transparent',
                    border: activeStep === index ? '1px solid rgba(0,194,255,0.25)' : '1px solid transparent',
                    boxShadow: activeStep === index ? '0 0 20px rgba(0,194,255,0.06)' : 'none',
                    transition: 'all 0.35s ease'
                  }}
                >
                  {item.step}
                </button>
                {index !== article.toc.length - 1 && (
                  <div style={{
                    width: '2px', height: '28px',
                    background: index < activeStep ? 'rgba(0,194,255,0.35)' : 'rgba(255,255,255,0.05)',
                    transition: 'background 0.35s ease'
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Right — Section Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {article.toc.map((item, index) => (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                style={{
                  all: 'unset', cursor: 'pointer',
                  padding: activeStep === index ? '28px 32px' : '20px 32px',
                  borderRadius: '18px',
                  background: activeStep === index ? 'rgba(255,255,255,0.03)' : 'transparent',
                  border: activeStep === index ? '1px solid rgba(0,194,255,0.12)' : '1px solid rgba(255,255,255,0.03)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity: activeStep === index ? 1 : 0.5,
                  display: 'block', width: '100%', boxSizing: 'border-box',
                  textAlign: 'left'
                }}
              >
                <span style={{
                  display: 'block',
                  color: activeStep === index ? 'rgba(0,194,255,1)' : 'var(--text-muted)',
                  fontSize: '10px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.16em',
                  marginBottom: '8px', transition: 'color 0.3s ease',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  Step {item.step}
                </span>
                <span style={{
                  display: 'block', margin: 0, fontSize: '18px', lineHeight: 1.35,
                  color: 'var(--text-primary)', fontWeight: 700,
                  fontFamily: '"Inter", sans-serif'
                }}>
                  {item.title}
                </span>
                <span style={{
                  display: 'block',
                  margin: '10px 0 0', color: 'var(--text-muted)',
                  fontSize: '14px', lineHeight: 1.7,
                  fontFamily: '"Barlow", sans-serif',
                  maxHeight: activeStep === index ? '200px' : '0',
                  overflow: 'hidden', opacity: activeStep === index ? 1 : 0,
                  transition: 'all 0.4s ease'
                }}>
                  {item.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STRATEGIC INSIGHTS — 2×2 Takeaways Grid
         ═══════════════════════════════════════════ */}
      <section>
        <div style={{ marginBottom: '28px' }}>
          <span style={{
            color: 'rgba(0,194,255,1)', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            fontFamily: '"Inter", sans-serif'
          }}>
            Key Strategic Insights
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {article.takeaways.map((item, idx) => (
            <div key={idx} style={{
              display: 'flex', gap: '18px', alignItems: 'flex-start',
              padding: '26px 28px', borderRadius: '18px',
              background: 'rgba(255,255,255,0.015)',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease', cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.border = '1px solid rgba(0,194,255,0.18)';
              e.currentTarget.style.background = 'rgba(0,194,255,0.025)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '11px', flexShrink: 0,
                display: 'grid', placeItems: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'var(--text-muted)'
              }}>
                <TakeawayIcon index={idx} />
              </div>
              <div>
                <h3 style={{
                  margin: 0, fontSize: '15px', color: 'var(--text-primary)',
                  fontWeight: 700, fontFamily: '"Inter", sans-serif'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  margin: '8px 0 0', color: 'var(--text-muted)',
                  fontSize: '13px', lineHeight: 1.7,
                  fontFamily: '"Barlow", sans-serif'
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
