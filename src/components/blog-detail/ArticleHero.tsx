"use client";
import React from 'react';
import type { Article } from '../../data/articles';

type ArticleHeroProps = {
  article: Article;
};

export const ArticleHero: React.FC<ArticleHeroProps> = ({ article }) => {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '40px', alignItems: 'center', minHeight: 'calc(100vh - 96px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ display: 'inline-flex', gap: '10px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
          <span>Insights</span>
          <span style={{ opacity: 0.45 }}>/</span>
          <span>{article.category}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(52px, 5vw, 70px)', lineHeight: 1.02, fontWeight: 800, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.04em' }}>
            {article.title}
          </h1>
          <p style={{ margin: 0, maxWidth: '640px', color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.85, fontFamily: '"Barlow", sans-serif' }}>
            {article.excerpt}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={article.authorImage} alt={article.author} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-light)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.13em' }}>Written by</span>
              <span style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700, fontFamily: '"Inter", sans-serif' }}>{article.author}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{article.role}</span>
            </div>
          </div>
          <button style={{ padding: '14px 24px', borderRadius: '999px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 700, cursor: 'pointer', minWidth: '180px' }}>
            Follow Author
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
          {[
            { label: 'Published', value: article.date },
            { label: 'Reading Time', value: article.read },
            { label: 'Updated', value: article.updated },
            { label: 'Save for Later', value: 'Bookmark' }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px', borderRadius: '24px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{item.label}</span>
              <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700 }}>{item.value}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'inline-flex', gap: '10px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--border-light)', display: 'inline-block' }} />
          <span>Scroll to explore</span>
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', minHeight: '660px', borderRadius: '36px', overflow: 'hidden', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card)', boxShadow: '0 34px 80px rgba(15, 23, 42, 0.08)' }}>
        <img
          src={article.heroImage}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.02) saturate(0.9)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.18)), radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent 28%)' }} />

        <div style={{ position: 'absolute', top: '28px', left: '28px', width: '190px', padding: '20px', borderRadius: '28px', backgroundColor: 'rgba(255,255,255,0.95)', border: '1px solid var(--border-light)', boxShadow: '0 24px 40px rgba(15, 23, 42, 0.12)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '16px', backgroundColor: 'rgba(0, 194, 255, 0.12)', color: 'rgba(0, 194, 255, 1)', fontSize: '18px' }}>↗</div>
          <div style={{ marginTop: '18px' }}>
            <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '24px', fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>{article.heroMetric.value}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{article.heroMetric.label}</span>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-primary)', fontSize: '12px', fontWeight: 700 }}>
            <span>4.9</span>
            <span>★★★★★</span>
          </div>
          <span style={{ display: 'block', marginTop: '6px', color: 'var(--text-muted)', fontSize: '12px' }}>Overall Rating</span>
        </div>

        <div style={{ position: 'absolute', bottom: '28px', right: '28px', width: '240px', padding: '24px', borderRadius: '32px', backgroundColor: 'rgba(255,255,255,0.96)', border: '1px solid var(--border-light)', boxShadow: '0 26px 60px rgba(15, 23, 42, 0.12)' }}>
          <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>"</span>
          <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '15px', lineHeight: 1.8, fontFamily: '"Barlow", sans-serif' }}>
            {article.quote}
          </p>
        </div>
      </div>
    </section>
  );
};
