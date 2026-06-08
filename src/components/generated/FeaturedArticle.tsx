"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { articles } from '../../data/articles';

export const FeaturedArticle = () => {
  const router = useRouter();
  const metrics = [
    {
      title: 'Data-Driven Strategies',
      desc: 'Leverage analytics and real-time insights to drive growth.',
      icon: '📊'
    },
    {
      title: 'Audience First',
      desc: 'Build meaningful connections that convert and retain.',
      icon: '🤝'
    },
    {
      title: 'Multi-Channel Growth',
      desc: 'Integrate channels and maximize your marketing impact.',
      icon: '🚀'
    },
    {
      title: 'Agile & Scalable',
      desc: 'Test, optimize, and scale strategies that deliver results.',
      icon: '⚡'
    }
  ];
  const featuredSlug = articles.find(a => a.slug === 'future-of-growth-marketing-2025')?.slug ?? 'future-of-growth-marketing-2025';

  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '80px clamp(24px, 5vw, 80px) 120px',
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at top left, var(--brand-400-medium), transparent 22%), radial-gradient(circle at bottom right, rgba(96, 165, 250, 0.12), transparent 26%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '10px 18px', backgroundColor: 'var(--brand-400-soft)', border: '1px solid var(--brand-400-medium)', borderRadius: '999px', color: 'var(--brand-400)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          FEATURED ARTICLE
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '40px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 16px', backgroundColor: 'var(--brand-400-soft)', border: '1px solid var(--brand-400-medium)', borderRadius: '999px', color: '#d8b4fe', fontSize: '12px', fontWeight: 600, maxWidth: 'fit-content' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '10px', backgroundColor: 'var(--brand-400-medium)', color: 'var(--brand-400)', fontSize: '14px' }}>✈️</span>
              GROWTH STRATEGY
            </div>

            <h2
              role="link"
              tabIndex={0}
              onClick={() => router.push(`/blog/${featuredSlug}`)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  router.push(`/blog/${featuredSlug}`);
                }
              }}
              style={{ fontSize: 'clamp(44px, 4.2vw, 64px)', lineHeight: 1.02, color: 'var(--text-primary)', fontWeight: 800, margin: 0, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em', cursor: 'pointer' }}
            >
              The Future of Growth Marketing in 2025
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)', margin: 0, maxWidth: '680px', fontFamily: '"Barlow", sans-serif' }}>
              Emerging trends, platforms, and strategies that leading brands are using to scale faster and smarter.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)' }}>
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Sarah Johnson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '14px' }}>By Sarah Johnson</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>May 12, 2025 · 8 min read</span>
                </div>
              </div>

              <button style={{
                padding: '14px 28px',
                borderRadius: '999px',
                border: '1px solid var(--brand-400-strong)',
                background: 'linear-gradient(135deg, var(--brand-400-strong), var(--brand-400-strong))',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 18px 45px var(--brand-400-medium)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 22px 55px var(--brand-400-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                e.currentTarget.style.boxShadow = '0 18px 45px var(--brand-400-medium)';
              }}
              onClick={() => router.push(`/blog/${featuredSlug}`)}>
                Read Full Article →
              </button>
            </div>
          </div>

          <div
            role="link"
            tabIndex={0}
            onClick={() => router.push(`/blog/${featuredSlug}`)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                router.push(`/blog/${featuredSlug}`);
              }
            }}
            style={{ position: 'relative', width: '100%', minHeight: '510px', borderRadius: '36px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'rgba(15, 23, 42, 0.6)', boxShadow: '0 40px 120px rgba(0,0,0,0.45)', cursor: 'pointer' }}
            aria-label="Open featured article"
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent 35%)' }} />
            <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'grid', gap: '18px' }}>
              {['📈', '⏱️', '📣', '👥'].map((icon, idx) => (
                <div key={idx} style={{ width: '58px', height: '58px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-400)', fontSize: '22px', boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}>
                  {icon}
                </div>
              ))}
            </div>

            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '620px',
                height: '100%',
                maxHeight: '440px',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 48px 90px rgba(0,0,0,0.45)'
              }}>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Growth overview dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10, 10, 22, 0.15), rgba(10, 10, 22, 0.75))' }} />
                <div style={{ position: 'absolute', top: '22px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    {['Total Users', 'Revenue', 'Conversion Rate'].map((label, idx) => (
                      <div key={idx} style={{ padding: '16px 18px', borderRadius: '20px', backgroundColor: 'rgba(15, 23, 42, 0.72)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)' }}>{label}</div>
                        <div style={{ marginTop: '6px', fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                          {label === 'Conversion Rate' ? '4.32%' : label === 'Revenue' ? '$45.2K' : '24.8K'}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '12px 16px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px' }}>
                    This Year
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '26px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '14px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: '12px' }}>Performance Over Time</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#22c55e', fontSize: '12px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                    +15.3%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '18px',
        marginTop: '4px'
      }}>
        {metrics.map((metric, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '24px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--brand-400-medium)',
              color: 'var(--brand-400)',
              fontSize: '18px'
            }}>
              {metric.icon}
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{metric.title}</h3>
              <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{metric.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
