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
    <section className="article-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes heroGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes metricPulse {
          0%, 100% { box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 0 0 var(--brand-500-soft); }
          50% { box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 0 40px var(--brand-500-soft); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .article-hero {
          position: relative;
          min-height: min(88vh, 850px);
          display: flex;
          align-items: center;
          padding: calc(var(--section-gap) * 0.25) 0 calc(var(--section-gap) * 0.5);
        }

        .article-hero__grid {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(2.25rem, 4vw, 4rem);
          align-items: center;
        }

        .article-hero__column {
          display: flex;
          flex-direction: column;
          gap: clamp(1.75rem, 2.5vw, 2.5rem);
        }

        .article-hero__author-row {
          display: flex;
          align-items: center;
          gap: clamp(1rem, 1.5vw, 1.25rem);
          flex-wrap: wrap;
        }

        .article-hero__visual {
          display: flex;
          flex-direction: column;
          gap: clamp(1.25rem, 2vw, 1.75rem);
        }

        .article-hero__image-card {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 80px rgba(0,0,0,0.18), 0 0 80px var(--brand-500-soft);
          aspect-ratio: 4 / 3;
          width: 100%;
          min-height: 360px;
        }

        .article-hero__quote-overlay {
          position: absolute;
          bottom: clamp(1rem, 2vw, 1.5rem);
          left: clamp(1rem, 2vw, 1.5rem);
          right: clamp(1rem, 2vw, 1.5rem);
          padding: clamp(1rem, 1.75vw, 1.25rem);
          border-radius: 1rem;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .article-hero__insight-card {
          position: relative;
          padding: clamp(1.5rem, 2vw, 1.75rem);
          border-radius: 1.25rem;
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.08);
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: clamp(1rem, 1.5vw, 1.5rem);
          align-items: center;
          overflow: hidden;
        }

        .article-hero__insight-glow {
          position: absolute;
          top: -60%;
          right: -25%;
          width: clamp(120px, 16vw, 180px);
          height: clamp(120px, 16vw, 180px);
          border-radius: 50%;
          background: radial-gradient(circle, var(--brand-500-soft), transparent 65%);
          pointer-events: none;
          animation: heroGlow 3s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          .article-hero__grid {
            grid-template-columns: 1fr;
          }

          .article-hero {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .article-hero {
            padding: calc(var(--section-gap) * 0.35) 0 calc(var(--section-gap) * 0.35);
          }

          .article-hero__grid {
            gap: clamp(1.5rem, 5vw, 2.5rem);
          }
        }

        @media (max-width: 480px) {
          .article-hero {
            padding-left: var(--gutter);
            padding-right: var(--gutter);
          }
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
        background: 'radial-gradient(ellipse at 75% 15%, var(--brand-500-soft), transparent 55%), radial-gradient(ellipse at 15% 85%, var(--brand-400-soft), transparent 45%)'
      }} />

      {/* Content Grid — 70% Typography / 30% Visual */}
      <div className="article-hero__grid">
        {/* ─── Left: Typography Dominant ─── */}
        <div className="article-hero__column">
          {/* Category Kicker */}
          <div style={{
            display: 'inline-flex', gap: '14px', alignItems: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <span style={{
              padding: '5px 14px', borderRadius: '999px',
              background: 'var(--brand-500-soft)', border: '1px solid var(--brand-500-medium)',
              color: 'var(--brand-500-strong)', fontSize: '11px', fontWeight: 700,
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
          <div className="article-hero__author-row" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.28s'
          }}>
            <img src={article.authorImage} alt={article.author} style={{
              width: 'clamp(2.5rem, 4vw, 3rem)', height: 'clamp(2.5rem, 4vw, 3rem)', borderRadius: '50%',
              objectFit: 'cover', border: '2px solid var(--brand-500-medium)',
              boxShadow: '0 0 20px var(--brand-500-soft)'
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
              background: 'var(--brand-500-strong)',
              animation: 'heroGlow 2.5s ease-in-out infinite'
            }} />
            <span>Scroll to explore</span>
          </div>
        </div>

        {/* ─── Right: Visual Accent (30%) ─── */}
        <div className="article-hero__visual" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(32px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
        }}>
          {/* Hero Image — Premium Framed Canvas */}
          <div className="article-hero__image-card">
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
              background: 'radial-gradient(ellipse at 25% 20%, var(--brand-500-soft), transparent 55%)'
            }} />

            {/* Quote overlay on image */}
            <div className="article-hero__quote-overlay">
              <span style={{ display: 'block', color: 'var(--brand-500-strong)', fontSize: '20px', fontWeight: 700, lineHeight: 1, marginBottom: '6px' }}>"</span>
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
          <div className="article-hero__insight-card" style={{
            animation: 'metricPulse 4s ease-in-out infinite'
          }}>
            {/* Glow accent */}
            <div className="article-hero__insight-glow" />

            <div style={{
              width: 'clamp(3rem, 5vw, 3.25rem)', height: 'clamp(3rem, 5vw, 3.25rem)', borderRadius: '14px',
              background: 'linear-gradient(135deg, var(--brand-500-soft), var(--brand-400-soft))',
              border: '1px solid var(--brand-500-medium)',
              display: 'grid', placeItems: 'center',
              color: 'var(--brand-500-strong)', fontSize: '20px',
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
                <path d="M2 26 L12 20 L22 22 L32 14 L42 10 L52 6 L58 2" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M2 26 L12 20 L22 22 L32 14 L42 10 L52 6 L58 2 L58 28 L2 28 Z" fill="url(#heroTrendGrad)" opacity="0.15" />
                <defs>
                  <linearGradient id="heroTrendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-500-strong)" />
                    <stop offset="100%" stopColor="var(--brand-500-soft)" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ color: 'var(--brand-500-strong)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em' }}>TRENDING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
