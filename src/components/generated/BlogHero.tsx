"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { articles } from '../../data/articles';

export const BlogHero = () => {
  const router = useRouter();
  const openArticle = (slug: string) => {
    router.push(`/blog/${slug}`);
  };
  const slugOrFallback = (key: string) => articles.find(a => a.slug === key)?.slug ?? key;

  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '80px clamp(24px, 5vw, 80px) 100px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '60px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '700px'
    }}>
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 60%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </div>

      {/* LEFT COLUMN */}
      <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', gap: '28px', zIndex: 2, paddingTop: '20px' }}>
        
        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#a855f7', boxShadow: '0 0 10px rgba(168, 85, 247, 0.6)' }} />
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>OUR BLOG</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(40px, 4.5vw, 64px)',
          fontWeight: 800,
          lineHeight: 1.05,
          color: 'var(--text-primary)',
          fontFamily: '"Inter", sans-serif',
          margin: 0,
          letterSpacing: '-0.03em'
        }}>
          Insights that drive smarter marketing <span style={{ color: '#a855f7' }}>decisions</span>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'var(--text-muted)',
          fontFamily: '"Barlow", sans-serif',
          margin: 0,
          maxWidth: '440px'
        }}>
          Practical strategies, in-depth guides, and industry insights to help you grow your brand and stay ahead.
        </p>

        {/* 3 Value Props */}
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginTop: '8px' }}>
          {[
            { icon: '🎯', title: 'Actionable Insights', desc: 'Real strategies you can use' },
            { icon: '📊', title: 'Industry Expertise', desc: 'From marketers, for marketers' },
            { icon: '💡', title: 'Fresh Perspectives', desc: 'Stay ahead of the curve' },
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Bar */}
        <div style={{
          backgroundColor: 'var(--bg-card-light)',
          border: '1px solid var(--border-light)',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 200px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', flexShrink: 0
            }}>
              ✉️
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>Get the latest insights</span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Join 10,000+ marketers who get our weekly roundup</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 280px' }}>
            <input type="email" placeholder="Enter your email" style={{
              flex: 1, padding: '12px 16px', backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-light)', borderRadius: '10px',
              color: 'var(--text-primary)', fontSize: '13px', outline: 'none',
              fontFamily: '"Barlow", sans-serif'
            }} />
            <button style={{
              padding: '12px 24px', backgroundColor: '#a855f7',
              border: 'none', borderRadius: '10px', color: '#fff',
              fontSize: '13px', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
              transition: 'all 0.2s', whiteSpace: 'nowrap'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — Floating Blog Cards Collage */}
      <div style={{
        flex: '0 0 50%', position: 'relative', height: '680px',
        zIndex: 2, perspective: '1200px'
      }}>
        <div style={{
          position: 'relative', width: '100%', height: '100%',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(5deg) rotateY(-8deg)',
          pointerEvents: 'auto'
        }}>

          {/* Card 1: Top Left — The Ultimate SEO Checklist */}
          <div style={{
            position: 'absolute', top: '0', left: '5%', width: '320px', height: '200px',
            borderRadius: '20px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            transform: 'translateZ(60px)', background: '#0a0d14',
            cursor: 'pointer'
          }}
          role="link"
          tabIndex={0}
          onClick={() => openArticle(slugOrFallback('advanced-seo-strategies'))}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openArticle('advanced-seo-strategies');
            }
          }}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="SEO" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(10,13,20,0.95) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>The Ultimate SEO Checklist for 2025</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="https://i.pravatar.cc/100?img=32" alt="" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>David Kim · May 8, 2025</span>
              </div>
            </div>
          </div>

          {/* Card 2: Top Right — Proven Ways to Increase ROAS */}
          <div style={{
            position: 'absolute', top: '20px', right: '-5%', width: '280px', height: '240px',
            borderRadius: '20px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            transform: 'translateZ(30px)', background: '#0a0d14',
            cursor: 'pointer'
          }}
          role="link"
          tabIndex={0}
          onClick={() => openArticle(slugOrFallback('ecommerce-roas-case-study'))}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openArticle('ecommerce-roas-case-study');
            }
          }}>
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=800&auto=format&fit=crop" alt="ROAS" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(10,13,20,0.95) 100%)' }} />
            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#a855f7', letterSpacing: '0.1em', textTransform: 'uppercase' }}>PERFORMANCE MARKETING</span>
            </div>
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>Proven Ways to Increase ROAS in Paid Campaigns</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="https://i.pravatar.cc/100?img=48" alt="" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Emily Carter · May 14, 2025</span>
              </div>
            </div>
          </div>

          {/* Card 3: Center — Featured Article (Largest) */}
          <div style={{
            position: 'absolute', top: '200px', left: '10%', width: '380px', height: '280px',
            borderRadius: '24px', overflow: 'hidden',
            border: '1px solid rgba(168, 85, 247, 0.15)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(168, 85, 247, 0.08)',
            transform: 'translateZ(100px)', background: '#0a0d14',
            cursor: 'pointer'
          }}
          role="link"
          tabIndex={0}
          onClick={() => openArticle(slugOrFallback('future-of-growth-marketing-2025'))}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openArticle(slugOrFallback('future-of-growth-marketing-2025'));
            }
          }}>
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" alt="AI" style={{ width: '100%', height: '50%', objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, transparent 0%, rgba(10,13,20,1) 100%)' }} />
            
            <div style={{ padding: '0 24px 24px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#a855f7', letterSpacing: '0.1em', textTransform: 'uppercase' }}>FEATURED ARTICLE</span>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2, fontFamily: '"Inter", sans-serif' }}>
                The Future of AI in Digital Marketing
              </h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0 }}>
                How AI is transforming marketing strategies, customer experiences, and business growth.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="https://i.pravatar.cc/100?img=44" alt="" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid rgba(168,85,247,0.3)' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>Alex Morgan</span>
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>May 12, 2025</span>
                  </div>
                </div>
                <div style={{
                  padding: '4px 10px', borderRadius: '999px',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)',
                  color: '#a855f7', fontSize: '10px', fontWeight: 600
                }}>
                  8 min read
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom Left — Social Media Trends */}
          <div style={{
            position: 'absolute', top: '490px', left: '2%', width: '300px', height: '150px',
            borderRadius: '16px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            transform: 'translateZ(40px)', background: '#0a0d14',
            cursor: 'pointer'
          }}
          role="link"
          tabIndex={0}
          onClick={() => openArticle(slugOrFallback('digital-marketing-trends-2025'))}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openArticle('digital-marketing-trends-2025');
            }
          }}>
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Social" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(10,13,20,0.95) 100%)' }} />
            <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#3b82f6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>SOCIAL MEDIA</span>
            </div>
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>Social Media Trends You Can't Ignore in 2025</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="https://i.pravatar.cc/100?img=22" alt="" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>Michael Brown · May 5, 2025</span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', marginLeft: 'auto' }}>6 min read</span>
              </div>
            </div>
          </div>

          {/* Card 5: Bottom Right — Content Strategy */}
          <div style={{
            position: 'absolute', top: '380px', right: '-10%', width: '260px', height: '180px',
            borderRadius: '16px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            transform: 'translateZ(10px)', background: '#0a0d14',
            cursor: 'pointer'
          }}
          role="link"
          tabIndex={0}
          onClick={() => openArticle(slugOrFallback('content-strategies-that-convert'))}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openArticle('content-strategies-that-convert');
            }
          }}>
            <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(10,13,20,0.95) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>How to Build a Content Strategy That Converts</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="https://i.pravatar.cc/100?img=5" alt="" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>Sarah Johnson</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1000px) {
          section > div:first-of-type { flex: 1 1 100% !important; }
          section > div:last-of-type { display: none !important; }
        }
      `}</style>
    </section>
  );
};
