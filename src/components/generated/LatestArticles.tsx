"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export const LatestArticles = () => {
  const router = useRouter();
  const articles = [
    {
      slug: 'advanced-seo-strategies',
      category: 'SEO & Growth',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      date: 'May 20, 2025',
      read: '8 min read',
      title: '10 Advanced SEO Strategies Driving 300% More Organic Traffic',
      description: 'Discover the proven SEO strategies that helped our clients achieve exponential organic growth and dominate search rankings.',
      author: 'Alex Morgan',
      role: 'SEO Strategist',
      badge: 'SEO & Growth'
    },
    {
      slug: 'ecommerce-roas-case-study',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      date: 'May 18, 2025',
      read: '6 min read',
      title: 'How We Achieved 8.6x ROAS for an E-commerce Brand',
      description: 'Deep dive into the performance marketing strategy that scaled revenue while reducing ad spend by 35%.',
      author: 'Jordan Lee',
      role: 'Performance Marketer',
      badge: 'Performance'
    },
    {
      slug: 'web-design-trends-2025',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de01d50?auto=format&fit=crop&w=1200&q=80',
      date: 'May 15, 2025',
      read: '7 min read',
      title: 'Web Design Trends 2025 That Drive Conversions',
      description: 'Explore the latest web design trends that not only look stunning but also convert visitors into customers.',
      author: 'Taylor Smith',
      role: 'UI/UX Designer',
      badge: 'Web Design'
    }
  ];

  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '80px clamp(24px, 5vw, 80px) 120px',
      position: 'relative',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at top, rgba(168, 85, 247, 0.14), transparent 22%), radial-gradient(circle at left bottom, rgba(59, 130, 246, 0.08), transparent 20%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 18px',
          borderRadius: '999px',
          backgroundColor: 'rgba(168, 85, 247, 0.12)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          color: '#a855f7',
          fontWeight: 700,
          letterSpacing: '0.14em',
          fontSize: '12px',
          textTransform: 'uppercase'
        }}>
          Our Blog
        </div>
        <h2 style={{
          fontSize: 'clamp(42px, 4.5vw, 68px)',
          lineHeight: 1.05,
          margin: 0,
          color: 'var(--text-primary)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 800
        }}>
          Latest <span style={{ color: '#a855f7' }}>Articles</span>
        </h2>
        <p style={{
          maxWidth: '720px',
          margin: 0,
          fontSize: '16px',
          lineHeight: '1.8',
          color: 'var(--text-muted)',
          fontFamily: '"Barlow", sans-serif'
        }}>
          Stay ahead with our latest insights, strategies, and industry trends designed to drive real business growth.
        </p>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '24px',
        marginTop: '40px'
      }}>
        {articles.map((article, idx) => (
          <div
            key={article.slug}
            role="link"
            tabIndex={0}
            onClick={() => router.push(`/blog/${article.slug}`)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                router.push(`/blog/${article.slug}`);
              }
            }}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            aria-label={`Read ${article.title}`}
          >
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.32)'
          }}>
            <div style={{ position: 'relative', minHeight: '240px', overflow: 'hidden' }}>
              <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.78)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20, 23, 44, 0.15), rgba(5, 8, 20, 0.82))' }} />
              <div style={{ position: 'absolute', top: '22px', left: '22px', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 14px', backgroundColor: 'rgba(20, 23, 44, 0.84)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', color: '#a855f7', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.14em', fontWeight: 700 }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '12px', backgroundColor: 'rgba(168, 85, 247, 0.18)', display: 'grid', placeItems: 'center' }}>✦</span>
                {article.badge}
              </div>
              <div style={{ position: 'absolute', bottom: '20px', left: '22px', display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(0, 0, 0, 0.52)', borderRadius: '999px', padding: '10px 14px', color: 'rgba(255,255,255,0.85)', fontSize: '12px' }}>
                <span>{article.date}</span>
                <span style={{ width: '2px', height: '14px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
                <span>{article.read}</span>
              </div>
            </div>

              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '999px', backgroundColor: '#a855f7' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#d8b4fe', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{article.category}</span>
                </div>
                <div style={{ width: '38px', height: '38px', borderRadius: '14px', backgroundColor: 'rgba(168, 85, 247, 0.12)', display: 'grid', placeItems: 'center', color: '#a855f7', fontSize: '16px' }}>→</div>
              </div>
                <div>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '24px', lineHeight: 1.2, fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>{article.title}</h3>
                <p style={{ margin: '16px 0 0', color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.75', fontFamily: '"Barlow", sans-serif' }}>{article.description}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.22)' }}>
                    <img src={`https://i.pravatar.cc/150?img=${idx + 12}`} alt={article.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '14px' }}>{article.author}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{article.role}</span>
                  </div>
                </div>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', backgroundColor: '#7c3aed', display: 'grid', placeItems: 'center', color: '#fff', boxShadow: '0 14px 28px rgba(124, 58, 237, 0.3)', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
        <button style={{
          padding: '14px 28px',
          borderRadius: '999px',
          border: '1px solid rgba(168, 85, 247, 0.35)',
          backgroundColor: 'rgba(168, 85, 247, 0.12)',
          color: '#a855f7',
          fontWeight: 700,
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, background-color 0.2s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.18)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.12)'; }}>
          View All Articles →
        </button>
      </div>
    </section>
  );
};
