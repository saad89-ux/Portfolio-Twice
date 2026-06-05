import React from 'react';
import { articles } from '../../data/articles';

export const TopicCategories = () => {
  const topics = [
    {
      title: 'SEO',
      desc: 'Improve your rankings and drive organic traffic that converts.',
      articles: '24 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8a3 3 0 0 0-3 3"></path></svg>,
      bgImg: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'PPC Advertising',
      desc: 'Maximize ROI with data-driven paid advertising strategies.',
      articles: '18 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
      bgImg: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Content Marketing',
      desc: 'Create content that engages your audience and drives results.',
      articles: '22 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 6.5l-15 15L2 22l4.5-4.5 15-15z"></path><path d="M13.5 6.5l4 4"></path></svg>,
      bgImg: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Analytics & Data',
      desc: 'Make smarter decisions with the right data and analytics.',
      articles: '16 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
      bgImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Email Marketing',
      desc: 'Build relationships and drive conversions with email.',
      articles: '14 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
      bgImg: 'https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Social Media',
      desc: 'Build your brand and engage audiences across platforms.',
      articles: '20 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
      bgImg: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'E-commerce',
      desc: 'Grow your online store and increase sales effectively.',
      articles: '12 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
      bgImg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Growth Hacking',
      desc: 'Innovative strategies to accelerate growth and scale fast.',
      articles: '10 Articles',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.5 2.5a6.5 6.5 0 1 1-13 13V22l4-4 4 4 2-5h3z"></path></svg>,
      bgImg: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '80px clamp(24px, 5vw, 80px) 100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '60px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at top left, rgba(168, 85, 247, 0.14), transparent 28%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 30%)'
      }} />

      {/* Header */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#a855f7'
        }}>
          EXPLORE TOPICS
        </div>
        <h2 style={{
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 800,
          lineHeight: 1.1,
          color: 'var(--text-primary)',
          fontFamily: '"Inter", sans-serif',
          margin: 0,
          letterSpacing: '-0.02em'
        }}>
          Topic Categories
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'var(--text-muted)',
          fontFamily: '"Barlow", sans-serif',
          margin: 0,
          maxWidth: '600px'
        }}>
          Explore expert insights, in-depth guides, and actionable strategies across all areas of digital marketing.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        width: '100%'
      }}>
        {topics.map((topic, idx) => {
          const target = articles.find(a => a.category.toLowerCase().includes(topic.title.toLowerCase()))?.slug || articles[0].slug;
          return (
          <a key={idx} href={`/blog/${target}`} style={{ textDecoration: 'none', color: 'inherit' }} aria-label={`Explore ${topic.title}`}>
          <div className="ca-interactive-card" style={{
            position: 'relative',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '28px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '320px',
            padding: '32px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(12px)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.3,
              zIndex: 0
            }}>
              <img src={topic.bgImg} alt={topic.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10, 13, 20, 0.02), rgba(10, 13, 20, 0.82))' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(168, 85, 247, 0.14)',
                border: '1px solid rgba(168, 85, 247, 0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a855f7',
                marginBottom: 'auto'
              }}>
                {topic.icon}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  {topic.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  margin: 0,
                  maxWidth: '85%'
                }}>
                  {topic.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  <span style={{ fontSize: '13px', fontWeight: 500 }}>{topic.articles}</span>
                </div>

                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#a855f7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, backgroundColor 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#9333ea'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#a855f7'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
          </a>
          );
        })}
      </div>
    </section>
  );
};
