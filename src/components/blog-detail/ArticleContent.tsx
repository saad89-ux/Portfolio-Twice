"use client";
import React, { useEffect, useRef, useState } from 'react';
import type { Article } from '../../data/articles';

type ArticleContentProps = {
  article: Article;
};

/* ── Stat Card with micro data viz ── */
const StatCard: React.FC<{ value: string; label: string; delay?: number }> = ({ value, label, delay = 0 }) => {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const barW = Math.min(isNaN(num) ? 60 : num, 100);

  return (
    <div ref={ref} style={{
      padding: '22px 20px', borderRadius: '16px',
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column', gap: '14px',
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(10px)',
      transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <span style={{ color: 'rgba(0,194,255,0.7)', fontSize: '13px' }}>↗</span>
        <span style={{
          color: 'var(--text-primary)', fontSize: '22px', fontWeight: 800,
          fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em'
        }}>{value}</span>
      </div>
      {/* Progress bar — micro chart */}
      <div style={{ width: '100%', height: '4px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div style={{
          width: vis ? `${barW}%` : '0%', height: '100%', borderRadius: '999px',
          background: 'linear-gradient(90deg, rgba(0,194,255,0.55), rgba(147,51,234,0.55))',
          transition: `width 1.1s cubic-bezier(0.16,1,0.3,1) ${delay + 0.25}s`
        }} />
      </div>
      <span style={{
        color: 'var(--text-muted)', fontSize: '11px', fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.12em',
        fontFamily: '"Inter", sans-serif'
      }}>{label}</span>
    </div>
  );
};

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const blocks = article.contentBlocks;

  return (
    <section style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '88px' }}>

      {/* ── Content Blocks — Alternating Storytelling ── */}
      {blocks.map((block, bi) => {
        const reversed = bi % 2 !== 0;
        return (
          <article key={bi} style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>

            {/* Big Statement */}
            <div style={{ maxWidth: '780px', margin: reversed ? '0 0 0 auto' : '0', textAlign: reversed ? 'right' : 'left' }}>
              <h2 style={{
                margin: 0, color: 'var(--text-primary)',
                fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)',
                lineHeight: 1.15, fontWeight: 800,
                fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em'
              }}>{block.title}</h2>
            </div>

            {/* Supporting Copy + Data Viz + Immersive Image */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: reversed ? '0.9fr 1.1fr' : '1.1fr 0.9fr',
              gap: '44px', alignItems: 'start'
            }}>
              {/* Text + Stats Side */}
              <div style={{ order: reversed ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <p style={{
                  margin: 0, color: 'var(--text-muted)',
                  fontSize: '16px', lineHeight: 1.85, fontFamily: '"Barlow", sans-serif'
                }}>{block.body}</p>

                {/* Highlight Card */}
                <div style={{
                  padding: '22px 24px', borderRadius: '16px',
                  borderLeft: '3px solid rgba(0,194,255,0.45)',
                  background: 'rgba(0,194,255,0.025)'
                }}>
                  <h3 style={{
                    margin: 0, color: 'var(--text-primary)', fontSize: '15px',
                    fontWeight: 700, fontFamily: '"Inter", sans-serif'
                  }}>{block.highlightTitle}</h3>
                  <p style={{
                    margin: '10px 0 0', color: 'var(--text-muted)',
                    fontSize: '14px', lineHeight: 1.7, fontFamily: '"Barlow", sans-serif'
                  }}>{block.highlightBody}</p>
                </div>

                {/* Stats — Micro Data Viz */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {block.stats.map((s, si) => (
                    <StatCard key={s.label} value={s.value} label={s.label} delay={si * 0.08} />
                  ))}
                </div>
              </div>

              {/* Image Side — Immersive Framed Canvas */}
              <div style={{
                order: reversed ? 1 : 2,
                position: 'relative', borderRadius: '24px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.16)', aspectRatio: '4 / 3'
              }}>
                <img src={block.image} alt={block.imageAlt} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'contrast(1.02) saturate(0.9)'
                }} />
                {/* Layered depth overlays */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.4))', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 25%, rgba(0,194,255,0.07), transparent 55%)', pointerEvents: 'none' }} />

                {/* Floating stat badge on image */}
                {block.stats[0] && (
                  <div style={{
                    position: 'absolute', bottom: '18px', left: '18px',
                    padding: '14px 18px', borderRadius: '13px',
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', gap: '10px'
                  }}>
                    <span style={{ color: 'rgba(0,194,255,1)', fontSize: '16px', fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>{block.stats[0].value}</span>
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '11px', fontFamily: '"Barlow", sans-serif' }}>{block.stats[0].label}</span>
                  </div>
                )}
              </div>
            </div>
          </article>
        );
      })}

      {/* ── Closing Section ── */}
      <article style={{
        position: 'relative', overflow: 'hidden',
        padding: '44px 48px', borderRadius: '24px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{
          position: 'absolute', top: '-35%', right: '-10%',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,51,234,0.06), transparent 55%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', gap: '22px', alignItems: 'center', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(0,194,255,0.1), rgba(147,51,234,0.08))',
            border: '1px solid rgba(0,194,255,0.2)',
            display: 'grid', placeItems: 'center',
            color: 'rgba(0,194,255,1)', fontSize: '20px'
          }}>↗</div>
          <div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '20px', fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>
              {article.closingTitle}
            </h3>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, fontFamily: '"Barlow", sans-serif' }}>
              {article.closingBody}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          {article.closingStats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
          ))}
        </div>
      </article>
    </section>
  );
};
