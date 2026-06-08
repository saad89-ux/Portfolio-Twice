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
    <section ref={ref} className="related-articles-section">
      <style>{`
        .related-articles-section {
          margin-top: clamp(4rem, 5vw, 5.5rem);
          padding: clamp(3rem, 4vw, 3.5rem) 0 0;
        }

        .related-articles-section__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.5rem);
        }

        .ra-tile {
          transition: all .4s cubic-bezier(.16,1,.3,1) !important;
          text-decoration: none;
          color: inherit;
          display: grid;
          grid-template-columns: 1fr 140px;
          gap: clamp(1.25rem, 1.75vw, 1.5rem);
          align-items: center;
          padding: clamp(1.75rem, 2vw, 2rem) clamp(1.75rem, 2vw, 2rem) clamp(1.75rem, 2vw, 2rem) clamp(2rem, 2vw, 2.5rem);
          border-radius: 1.5rem;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .ra-tile:hover {
          border-color: var(--brand-500-medium) !important;
          background: var(--brand-500-soft) !important;
          transform: translateY(-4px) !important;
        }

        .ra-tile:hover .ra-arrow {
          color: var(--brand-500-strong) !important;
          transform: translateX(3px) !important;
        }

        .ra-tile__image {
          width: 100%;
          max-width: 140px;
          aspect-ratio: 1 / 1;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }

        .ra-tile__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8) saturate(0.85);
        }

        .ra-tile__body {
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1vw, 1rem);
          min-width: 0;
        }

        @media (max-width: 1024px) {
          .related-articles-section__grid,
          .ra-tile {
            grid-template-columns: 1fr;
          }

          .ra-tile {
            padding: clamp(1.5rem, 2vw, 1.75rem);
          }

          .ra-tile__image {
            max-width: 100%;
            aspect-ratio: 16 / 9;
          }
        }

        @media (max-width: 768px) {
          .related-articles-section {
            padding-top: clamp(2rem, 4vw, 2.5rem);
          }
        }
      `}</style>

      {/* ── Header ── */}
      <div style={{ marginBottom: '44px' }}>
        <span style={{
          display: 'block',
          color: 'var(--brand-500-strong)', fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          fontFamily: '"Inter", sans-serif', marginBottom: '14px'
        }}>Continue Exploring</span>
        <h2 style={{
          margin: 0, color: 'var(--text-primary)',
          fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
          lineHeight: 1.1, fontWeight: 800,
          fontFamily: '"Inter", sans-serif', letterSpacing: '-0.04em'
        }}>
          More insights that{'\u00A0'}drive growth<span style={{ color: 'var(--brand-500-strong)' }}>.</span>
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
      <div className="related-articles-section__grid">
        {articles.map((article, idx) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="ra-tile"
            style={{
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
                  color: 'var(--brand-500-strong)', fontSize: '10px', fontWeight: 700,
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
            <div className="ra-tile__image">
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
