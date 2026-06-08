"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { RelatedArticle } from '../../data/articles';

type RelatedArticlesSectionProps = {
  articles: RelatedArticle[];
};

export const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({ articles }) => {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ marginTop: '80px', padding: '56px 0 0' }}>
      <style>{`
        .ra-tile { transition: all .4s cubic-bezier(.16,1,.3,1) !important; }
        .ra-tile:hover { border-color: rgba(0,194,255,.18) !important; background: rgba(0,194,255,.025) !important; transform: translateY(-4px) !important; }
        .ra-tile:hover .ra-arrow { color: rgba(0,194,255,1) !important; transform: translateX(3px) !important; }
      `}</style>

      {/* ── Header ── */}
      <div style={{ marginBottom: '44px' }}>
        <span style={{
          display: 'block',
          color: 'rgba(0,194,255,1)', fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          fontFamily: '"Inter", sans-serif', marginBottom: '14px'
        }}>Continue Exploring</span>
        <h2 style={{
          margin: 0, color: 'var(--text-primary)',
          fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
          lineHeight: 1.1, fontWeight: 800,
          fontFamily: '"Inter", sans-serif', letterSpacing: '-0.04em'
        }}>
          More insights that{'\u00A0'}drive growth<span style={{ color: 'rgba(0,194,255,0.6)' }}>.</span>
        </h2>
        <p style={{
          margin: '14px 0 0', maxWidth: '480px',
          color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7,
          fontFamily: '"Barlow", sans-serif'
        }}>
          Dive deeper into expert perspectives, trends, and strategies shaping the future of marketing.
        </p>
      </div>

      {/* ── Editorial Tiles — 70% Typography / 30% Image ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {articles.map((article, idx) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="ra-tile"
            style={{
              textDecoration: 'none', color: 'inherit',
              display: 'grid', gridTemplateColumns: '1fr 130px',
              gap: '22px', alignItems: 'center',
              padding: '28px 28px 28px 32px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.015)',
              border: '1px solid rgba(255,255,255,0.05)',
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(14px)',
              transition: `all .5s cubic-bezier(.16,1,.3,1) ${idx * 0.08}s`
            }}
          >
            {/* Typography Side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 0 }}>
              {/* Number + Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800,
                  fontFamily: '"Inter", sans-serif', opacity: 0.1, lineHeight: 1,
                  letterSpacing: '-0.04em'
                }}>{article.number}</span>
                <span style={{
                  color: 'rgba(0,194,255,0.7)', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  fontFamily: '"Inter", sans-serif'
                }}>{article.eyebrow}</span>
              </div>

              {/* Title */}
              <h3 style={{
                margin: 0, color: 'var(--text-primary)',
                fontSize: '17px', lineHeight: 1.35, fontWeight: 700,
                fontFamily: '"Inter", sans-serif'
              }}>{article.title}</h3>

              {/* Copy */}
              <p style={{
                margin: 0, color: 'var(--text-muted)',
                fontSize: '13px', lineHeight: 1.65,
                fontFamily: '"Barlow", sans-serif',
                display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>{article.copy}</p>

              {/* Footer */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'var(--text-muted)', fontSize: '11px', fontWeight: 600,
                fontFamily: '"Barlow", sans-serif', marginTop: '2px'
              }}>
                <span>{article.readTime}</span>
                <ArrowRight className="ra-arrow" size={13} strokeWidth={1.5} style={{ transition: 'all .3s ease' }} />
              </div>
            </div>

            {/* Image Side (30%) */}
            <div style={{
              width: '130px', height: '130px',
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0
            }}>
              <img src={article.image} alt={article.title} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'brightness(0.8) saturate(0.85)'
              }} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
