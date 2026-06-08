"use client";
import React, { useEffect, useRef, useState } from 'react';
import type { ArticleCaseStudy } from '../../data/articles';

type CaseStudyHighlightProps = {
  caseStudy: ArticleCaseStudy;
};

export const CaseStudyHighlight: React.FC<CaseStudyHighlightProps> = ({ caseStudy }) => {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const phases = ['Challenge', 'Strategy', 'Execution', 'Results'];

  return (
    <section ref={ref} className="case-study-highlight">
      <style>{`
        @keyframes csGlow { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.7;transform:scale(1.06)} }
        @keyframes csPulse { 0%,100%{box-shadow:0 0 0 var(--brand-400-soft)} 50%{box-shadow:0 0 40px var(--brand-400-soft)} }
        .cs-card-hover { transition: all .35s cubic-bezier(.16,1,.3,1) !important; }
        .cs-card-hover:hover { border-color: var(--brand-400-strong) !important; transform: translateY(-4px) !important; box-shadow: 0 30px 60px rgba(0,0,0,.25), 0 0 30px var(--brand-400-soft) !important; }

        .case-study-highlight {
          margin-top: clamp(3rem, 4vw, 5rem);
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          background: linear-gradient(175deg, #020410 0%, #080c1e 40%, #0c0f24 100%);
          border: 1px solid rgba(255,255,255,0.07);
          padding: clamp(3rem, 4vw, 4.5rem) clamp(2rem, 3vw, 3.5rem) clamp(2.5rem, 3.5vw, 4rem);
        }

        .case-study-highlight__header {
          position: relative;
          z-index: 1;
          margin-bottom: clamp(2rem, 3vw, 3rem);
        }

        .case-study-highlight__header-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: clamp(1.75rem, 2.5vw, 2.75rem);
          align-items: start;
        }

        .case-study-highlight__badge {
          display: flex;
          align-items: center;
          gap: clamp(0.75rem, 1.5vw, 1rem);
          padding: clamp(1rem, 1.5vw, 1.25rem) clamp(1.25rem, 1.5vw, 1.5rem);
          border-radius: 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          opacity: 0;
          transition: opacity 0.6s ease 0.25s;
        }

        .case-study-highlight__hero {
          position: relative;
          z-index: 1;
          border-radius: 1.25rem;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          margin-bottom: clamp(2rem, 3vw, 3rem);
          opacity: 0;
          transform: scale(0.97);
          transition: all 1s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }

        .case-study-highlight__hero img {
          width: 100%;
          height: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          filter: brightness(0.75) saturate(0.85) contrast(1.05);
        }

        .case-study-highlight__metrics {
          position: absolute;
          bottom: clamp(1.25rem, 2vw, 1.75rem);
          left: clamp(1.25rem, 2vw, 1.75rem);
          right: clamp(1.25rem, 2vw, 1.75rem);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.75rem, 1.5vw, 1rem);
        }

        .case-study-highlight__phases {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 0.25rem;
          margin-bottom: clamp(2rem, 3vw, 2.5rem);
        }

        .case-study-highlight__cards {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(1rem, 1.5vw, 1.5rem);
        }

        .case-study-highlight__card-image {
          position: relative;
          height: 170px;
          overflow: hidden;
        }

        .case-study-highlight__card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7) saturate(0.85);
        }

        @media (max-width: 1024px) {
          .case-study-highlight__header-grid {
            grid-template-columns: 1fr;
          }

          .case-study-highlight__metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .case-study-highlight__cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .case-study-highlight {
            padding: clamp(2rem, 4vw, 2.75rem) clamp(1.5rem, 4vw, 1.75rem) clamp(2rem, 4vw, 2.75rem);
          }

          .case-study-highlight__hero {
            margin-bottom: clamp(1.5rem, 3vw, 2rem);
          }

          .case-study-highlight__metrics {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .case-study-highlight {
            padding: clamp(1.5rem, 4vw, 2rem);
          }

          .case-study-highlight__badge {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.12,
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '76px 76px'
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '-15%', right: '8%',
        width: 'clamp(260px, 28vw, 480px)', height: 'clamp(260px, 28vw, 480px)', borderRadius: '50%',
        background: 'radial-gradient(circle, var(--brand-400-soft), transparent 55%)',
        pointerEvents: 'none', animation: 'csGlow 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', bottom: '-25%', left: '3%',
        width: 'clamp(210px, 22vw, 360px)', height: 'clamp(210px, 22vw, 360px)', borderRadius: '50%',
        background: 'radial-gradient(circle, var(--brand-500-soft), transparent 55%)',
        pointerEvents: 'none'
      }} />

      {/* ── Header ── */}
      <div className="case-study-highlight__header">
        <span style={{
          display: 'inline-block', padding: '5px 16px', borderRadius: '999px',
          background: 'var(--brand-400-soft)', border: '1px solid var(--brand-400-strong)',
          color: 'var(--brand-400-strong)', fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          fontFamily: '"Inter", sans-serif', marginBottom: '28px'
        }}>Case Study</span>

        <div className="case-study-highlight__header-grid">
          <div>
            <h2 style={{
              margin: 0, color: '#f7f8ff',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: 1.08, fontWeight: 800,
              fontFamily: '"Inter", sans-serif', letterSpacing: '-0.04em',
              opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(18px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)'
            }}>{caseStudy.headline}</h2>
            <p style={{
              margin: '20px 0 0', maxWidth: '520px',
              color: 'rgba(236,239,250,0.55)', fontSize: '15px', lineHeight: 1.75,
              fontFamily: '"Barlow", sans-serif',
              opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease 0.15s'
            }}>{caseStudy.description}</p>
          </div>

          {/* Brand badge */}
          <div className="case-study-highlight__badge" style={{
            opacity: vis ? 1 : 0
          }}>
            <img src={caseStudy.logoImage} alt={caseStudy.brand} style={{ width: '44px', height: '44px', borderRadius: '11px', objectFit: 'cover' }} />
            <div>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: '15px', fontFamily: '"Inter", sans-serif' }}>{caseStudy.brand}</div>
              <div style={{ color: 'rgba(236,239,250,0.45)', fontSize: '11px', marginTop: '2px', fontFamily: '"Barlow", sans-serif' }}>Partner Brand</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cinematic Hero Image ── */}
      <div className="case-study-highlight__hero" style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'scale(1)' : 'scale(0.97)'
      }}>
        <img src={caseStudy.heroImage} alt={caseStudy.headline} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: 'brightness(0.75) saturate(0.85) contrast(1.05)'
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2,4,16,0.15) 0%, rgba(2,4,16,0.65) 100%)' }} />

        {/* Floating revenue metrics on image */}
        <div className="case-study-highlight__metrics" style={{
          opacity: vis ? 1 : 0,
          transform: vis ? 'translateY(0)' : 'translateY(14px)'
        }}>
          {caseStudy.stats.map((stat, i) => (
            <div key={stat.label} style={{
              flex: 1, padding: '18px', borderRadius: '14px', textAlign: 'center',
              background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.09)',
              opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(14px)',
              transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.35 + i * 0.1}s`
            }}>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: '22px', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>{stat.value}</div>
              <div style={{ color: 'rgba(236,239,250,0.55)', fontSize: '11px', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: '"Inter", sans-serif' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Growth Timeline: Challenge → Strategy → Execution → Results ── */}
      <div className="case-study-highlight__phases" style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(10px)'
      }}>
        {phases.map((phase, i) => (
          <div key={phase} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
            opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(10px)',
            transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.45 + i * 0.1}s`
          }}>
            <div style={{
              width: '100%', height: '3px', borderRadius: '999px',
              background: `linear-gradient(90deg, rgba(147,51,234,${0.25 + i * 0.2}), rgba(0,194,255,${0.2 + i * 0.2}))`
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                width: '18px', height: '18px', borderRadius: '5px', display: 'grid', placeItems: 'center',
                background: 'var(--brand-400-medium)', border: '1px solid var(--brand-400-strong)',
                color: 'var(--brand-400-strong)', fontSize: '8px', fontWeight: 800, fontFamily: '"Inter", sans-serif'
              }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{
                color: 'rgba(236,239,250,0.5)', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: '"Inter", sans-serif'
              }}>{phase}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Case Study Cards ── */}
      <div className="case-study-highlight__cards" style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(18px)'
      }}>
        {caseStudy.cards.map((card, i) => (
          <div key={card.title} className="cs-card-hover" style={{
            borderRadius: '20px', overflow: 'hidden',
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
            opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(18px)',
            transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.55 + i * 0.12}s`
          }}>
            {/* Card image */}
            <div className="case-study-highlight__card-image">
              <img src={card.image} alt={card.imageAlt} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'brightness(0.7) saturate(0.85)'
              }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 25%, rgba(2,4,16,0.75))' }} />
              {/* Phase number overlay */}
              <div style={{
                position: 'absolute', top: '14px', left: '14px',
                padding: '4px 10px', borderRadius: '8px',
                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--brand-400-strong)', fontSize: '10px', fontWeight: 800,
                letterSpacing: '0.12em', fontFamily: '"Inter", sans-serif'
              }}>{phases[i] || `Phase ${i + 1}`}</div>
            </div>

            {/* Card content */}
            <div style={{ padding: '22px 24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <div style={{
                  width: '26px', height: '26px', borderRadius: '7px',
                  background: 'linear-gradient(135deg, var(--brand-400-medium), var(--brand-500-medium))',
                  display: 'grid', placeItems: 'center',
                  color: '#fff', fontSize: '9px', fontWeight: 800, fontFamily: '"Inter", sans-serif'
                }}>{String(i + 1).padStart(2, '0')}</div>
                <span style={{ color: 'rgba(236,239,250,0.45)', fontSize: '12px', fontFamily: '"Barlow", sans-serif' }}>{card.brand}</span>
              </div>

              <h3 style={{
                margin: 0, color: '#fff', fontSize: '16px', fontWeight: 700,
                fontFamily: '"Inter", sans-serif', lineHeight: 1.35
              }}>{card.title}</h3>

              <div style={{ display: 'flex', gap: '18px', marginTop: '16px' }}>
                {card.stats.map(s => (
                  <div key={s.label}>
                    <div style={{ color: 'var(--brand-400-strong)', fontWeight: 800, fontSize: '15px', fontFamily: '"Inter", sans-serif' }}>{s.value}</div>
                    <div style={{ color: 'rgba(236,239,250,0.45)', fontSize: '11px', marginTop: '2px', fontFamily: '"Barlow", sans-serif' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
