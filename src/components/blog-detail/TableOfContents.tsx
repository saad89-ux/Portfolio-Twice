"use client";
import React from 'react';
import type { Article } from '../../data/articles';

type TableOfContentsProps = {
  article: Article;
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({ article }) => {
  return (
    <section style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: '30px', alignItems: 'start' }}>
      <div style={{ position: 'relative', borderRadius: '34px', padding: '36px 28px', backgroundColor: 'var(--bg-card-alt)', border: '1px solid var(--border-light)', boxShadow: '0 48px 110px rgba(15, 23, 42, 0.12)' }}>
        <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '28px' }}>Table of Contents</span>
        <div style={{ position: 'absolute', top: '30px', left: '48px', bottom: '28px', width: '2px', background: 'linear-gradient(180deg, var(--border-light), transparent)' }} />
        <div style={{ display: 'grid', gap: '24px' }}>
          {article.toc.map((item, index) => (
            <div key={item.step} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '18px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', paddingTop: '4px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)', color: 'var(--text-primary)', display: 'grid', placeItems: 'center', fontSize: '12px', fontWeight: 700, backgroundColor: 'rgba(255,255,255,0.1)' }}>{item.step}</div>
                {index !== article.toc.length - 1 && <div style={{ width: '2px', flex: 1, background: 'linear-gradient(180deg, rgba(255,255,255,0.22), transparent)' }} />}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '15px', lineHeight: 1.4, color: 'var(--text-primary)', fontWeight: 700, fontFamily: '"Inter", sans-serif' }}>{item.title}</h3>
                <p style={{ margin: '10px 0 0', color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.7, fontFamily: '"Barlow", sans-serif' }}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderRadius: '34px', padding: '32px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', boxShadow: '0 34px 80px rgba(15, 23, 42, 0.08)' }}>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ color: 'var(--text-primary)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>{article.category}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{article.date} · {article.read}</span>
        </div>
        <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(38px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>{article.summaryTitle}</h2>
        <p style={{ margin: '24px 0 0', color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, maxWidth: '640px', fontFamily: '"Barlow", sans-serif' }}>
          {article.summary}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '18px', marginTop: '32px' }}>
          {article.takeaways.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '22px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid var(--border-light)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '16px', display: 'grid', placeItems: 'center', backgroundColor: 'rgba(0, 194, 255, 0.08)', color: 'rgba(0, 194, 255, 1)', fontSize: '20px' }}>{item.icon}</div>
              <div>
                <h3 style={{ margin: 0, fontSize: '15px', color: 'var(--text-primary)', fontWeight: 700, fontFamily: '"Inter", sans-serif' }}>{item.title}</h3>
                <p style={{ margin: '10px 0 0', color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.65, fontFamily: '"Barlow", sans-serif' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
