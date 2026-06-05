"use client";
import React from 'react';
import type { Article } from '../../data/articles';

type ArticleContentProps = {
  article: Article;
};

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const [primaryBlock, secondaryBlock] = article.contentBlocks;

  return (
    <section style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '44px' }}>
      <article style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: '36px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '28px', lineHeight: 1.15, fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>{primaryBlock.title}</h2>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.85, fontFamily: '"Barlow", sans-serif' }}>
            {primaryBlock.body}
          </p>

          <div style={{ display: 'grid', gap: '18px' }}>
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: 'rgba(168,85,247,0.06)', display: 'grid', placeItems: 'center', color: '#7c3aed', fontSize: '22px' }}>💡</div>
              <div>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700 }}>{primaryBlock.highlightTitle}</h3>
                <p style={{ margin: '6px 0 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>{primaryBlock.highlightBody}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
              {primaryBlock.stats.map((stat) => (
                <div key={stat.label} style={{ padding: '18px', borderRadius: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '20px' }}>{stat.value}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <img src={primaryBlock.image} alt={primaryBlock.imageAlt} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border-light)' }} />

          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
            <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 700 }}>{article.quote}</p>
            <span style={{ display: 'block', marginTop: '10px', color: 'var(--text-muted)', fontSize: '13px' }}>— {article.author}, {article.role}</span>
          </div>
        </aside>
      </article>

      <article style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '28px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '22px', fontWeight: 800 }}>{secondaryBlock.title}</h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>{secondaryBlock.body}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginTop: '12px' }}>
            {secondaryBlock.stats.map((card) => (
              <div key={card.label} style={{ padding: '18px', borderRadius: '14px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700 }}>{card.value}</h4>
                <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '13px' }}>{card.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img src={secondaryBlock.image} alt={secondaryBlock.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--border-light)' }} />
        </div>
      </article>

      <article style={{ padding: '28px', borderRadius: '18px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '12px', backgroundColor: 'rgba(168,85,247,0.06)', display: 'grid', placeItems: 'center', color: '#7c3aed', fontSize: '26px' }}>↗</div>
          <div>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '18px', fontWeight: 800 }}>{article.closingTitle}</h3>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '14px' }}>{article.closingBody}</p>
          </div>
        </div>

        <div style={{ marginTop: '18px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {article.closingStats.map((stat) => (
            <div key={stat.label} style={{ padding: '14px 18px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.96)', border: '1px solid var(--border-light)', minWidth: '160px' }}>
              <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '18px' }}>{stat.value}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
