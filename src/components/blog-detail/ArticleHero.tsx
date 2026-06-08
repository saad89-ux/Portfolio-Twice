"use client";
import React, { useEffect, useState } from 'react';
import type { Article } from '../../data/articles';

type ArticleHeroProps = {
  article: Article;
};

export const ArticleHero: React.FC<ArticleHeroProps> = ({ article }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 96px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <style>{`
        @keyframes heroGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes metricPulse {
          0%, 100% { box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 0 0 rgba(0,194,255,0); }
          50% { box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 0 40px rgba(0,194,255,0.06); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Atmospheric Background — subtle, not dominant */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${article.heroImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.04, filter: 'blur(60px) saturate(1.4)'
      }} />

      {/* Gradient atmosphere */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at 75% 15%, rgba(0,194,255,0.06), transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(147,51,234,0.04), transparent 45%)'
      }} />

      {/* Content Grid — 70% Typography / 30% Visual */}
      <div style={{
        position: 'relative', zIndex: 2, width: '100%',
        display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '56px', alignItems: 'center'
      }}>
        {/* ─── Left: Typography Dominant ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Category Kicker */}
          <div style={{
            display: 'inline-flex', gap: '14px', alignItems: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <span style={{
              padding: '5px 14px', borderRadius: '999px',
              background: 'rgba(0,194,255,0.08)', border: '1px solid rgba(0,194,255,0.2)',
              color: 'rgba(0,194,255,1)', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              fontFamily: '"Inter", sans-serif'
            }}>
              {article.category}
            </span>
            <span style={{
              color: 'var(--text-muted)', fontSize: '13px', fontWeight: 500,
              fontFamily: '"Barlow", sans-serif'
            }}>
              {article.read}
            </span>
          </div>

          {/* Massive Headline */}
          <h1 style={{
            margin: 0, color: 'var(--text-primary)',
            fontSize: 'clamp(3rem, 5.2vw, 4.8rem)',
            lineHeight: 1.04, fontWeight: 800,
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '-0.045em',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s'
          }}>
            {article.title}
          </h1>

          {/* Supporting Excerpt */}
          <p style={{
            margin: 0, maxWidth: '540px',
            color: 'var(--text-muted)', fontSize: '17px',
            lineHeight: 1.8, fontFamily: '"Barlow", sans-serif',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s'
          }}>
            {article.excerpt}
          </p>

          {/* Author Row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '18px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.28s'
          }}>
            <img src={article.authorImage} alt={article.author} style={{
              width: '46px', height: '46px', borderRadius: '50%',
              objectFit: 'cover', border: '2px solid rgba(0,194,255,0.25)',
              boxShadow: '0 0 20px rgba(0,194,255,0.08)'
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span style={{
                color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700,
                fontFamily: '"Inter", sans-serif'
              }}>
                {article.author}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: '"Barlow", sans-serif' }}>
                {article.role}
              </span>
            </div>

            <div style={{ height: '28px', width: '1px', background: 'var(--border-light)', margin: '0 4px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: '"Inter", sans-serif' }}>Published</span>
              <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: '"Barlow", sans-serif' }}>{article.date}</span>
            </div>

            <div style={{ height: '28px', width: '1px', background: 'var(--border-light)', margin: '0 4px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: '"Inter", sans-serif' }}>Updated</span>
              <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: '"Barlow", sans-serif' }}>{article.updated}</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            display: 'inline-flex', gap: '10px', alignItems: 'center',
            color: 'var(--text-muted)', fontSize: '12px',
            fontFamily: '"Barlow", sans-serif',
            opacity: visible ? 0.6 : 0,
            transition: 'opacity 1.2s ease 0.6s'
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'rgba(0,194,255,0.4)',
              animation: 'heroGlow 2.5s ease-in-out infinite'
            }} />
            <span>Scroll to explore</span>
          </div>
        </div>

        {/* ─── Right: Visual Accent (30%) ─── */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '20px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(32px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
        }}>
          {/* Hero Image — Premium Framed Canvas */}
          <div style={{
            position: 'relative', borderRadius: '24px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 80px rgba(0,194,255,0.04)',
            aspectRatio: '4 / 3'
          }}>
            <img src={article.heroImage} alt={article.title} style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'contrast(1.03) saturate(0.92)'
            }} />
            {/* Layered depth */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.45))'
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 25% 20%, rgba(0,194,255,0.08), transparent 55%)'
            }} />

            {/* Quote overlay on image */}
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px', right: '20px',
              padding: '18px 22px', borderRadius: '16px',
              background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <span style={{ display: 'block', color: 'rgba(0,194,255,0.6)', fontSize: '20px', fontWeight: 700, lineHeight: 1, marginBottom: '6px' }}>"</span>
              <p style={{
                margin: 0, color: 'rgba(255,255,255,0.85)',
                fontSize: '13px', lineHeight: 1.65, fontFamily: '"Barlow", sans-serif',
                display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
              }}>
                {article.quote}
              </p>
            </div>
          </div>

          {/* Floating Insight Card — Hero Metric */}
          <div style={{
            position: 'relative', padding: '26px 28px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.025)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            animation: 'metricPulse 4s ease-in-out infinite',
            display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '18px', alignItems: 'center',
            overflow: 'hidden'
          }}>
            {/* Glow accent */}
            <div style={{
              position: 'absolute', top: '-60%', right: '-25%',
              width: '180px', height: '180px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,194,255,0.1), transparent 65%)',
              pointerEvents: 'none', animation: 'heroGlow 3s ease-in-out infinite'
            }} />

            <div style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(0,194,255,0.12), rgba(147,51,234,0.08))',
              border: '1px solid rgba(0,194,255,0.2)',
              display: 'grid', placeItems: 'center',
              color: 'rgba(0,194,255,1)', fontSize: '20px',
              animation: 'floatUp 3s ease-in-out infinite'
            }}>↗</div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                color: 'var(--text-primary)', fontSize: '30px', fontWeight: 800,
                fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em', lineHeight: 1
              }}>
                {article.heroMetric.value}
              </div>
              <div style={{
                color: 'var(--text-muted)', fontSize: '13px', marginTop: '6px',
                fontFamily: '"Barlow", sans-serif'
              }}>
                {article.heroMetric.label}
              </div>
            </div>

            {/* Mini trend indicator */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
              <svg width="60" height="28" viewBox="0 0 60 28" fill="none" style={{ opacity: 0.6 }}>
                <path d="M2 26 L12 20 L22 22 L32 14 L42 10 L52 6 L58 2" stroke="rgba(0,194,255,0.5)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M2 26 L12 20 L22 22 L32 14 L42 10 L52 6 L58 2 L58 28 L2 28 Z" fill="url(#heroTrendGrad)" opacity="0.15" />
                <defs>
                  <linearGradient id="heroTrendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,194,255,1)" />
                    <stop offset="100%" stopColor="rgba(0,194,255,0)" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ color: 'rgba(0,194,255,0.6)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em' }}>TRENDING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
