"use client";
import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const categories = [
  {
    num: '01',
    title: 'Search Engine Optimization',
    desc: 'Rank higher, get discovered, and drive consistent organic traffic that converts.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '02',
    title: 'Pay-Per-Click Advertising',
    desc: 'Target the right audience with laser-focused ads that deliver high-quality leads.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '03',
    title: 'Social Media Marketing',
    desc: 'Build your brand, engage your audience, and grow across all major social platforms.',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '04',
    title: 'Web Design & Development',
    desc: 'Stunning, high-performing websites designed to engage users and maximize conversions.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '05',
    title: 'Conversion Rate Optimization',
    desc: 'Turn more visitors into customers with data-driven CRO strategies that boost ROI.',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
  },
  {
    num: '06',
    title: 'Content Marketing & Strategy',
    desc: 'Create valuable content that builds trust, drives traffic, and positions you as an industry leader.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
  },
];

const stats = [
  { value: '250+', label: 'Brands Scaled' },
  { value: '1.2B+', label: 'Ad Impressions' },
  { value: '3.6M+', label: 'Leads Generated' },
  { value: '98%', label: 'Client Retention' },
  { value: '4.8X', label: 'Average ROI' },
];



/* Wave SVG for the stats bar */
const WaveLine = () => (
  <svg width="100%" height="60" viewBox="0 0 800 60" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.3 }}>
    <path d="M0 40 C100 20, 200 55, 300 35 S500 15, 600 35 S750 55, 800 30 L800 60 L0 60Z" fill="rgba(0,194,255,0.15)" />
    <path d="M0 40 C100 20, 200 55, 300 35 S500 15, 600 35 S750 55, 800 30" fill="none" stroke="rgba(0,194,255,0.5)" strokeWidth="1.5" />
  </svg>
);

export const ServiceCategoriesSection: React.FC = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#03050a',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    }}>

      {/* ═══════════════════════════════
          TOP HEADER
      ═══════════════════════════════ */}
      <div style={{
        width: '100%',
        padding: '100px clamp(24px, 5vw, 80px) 60px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, rgba(0,194,255,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

        {/* Badge */}
        <span style={{
          color: '#00c2ff',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: BarlowFont,
          position: 'relative',
          zIndex: 1,
        }}>
          SERVICE CATEGORIES
        </span>

        {/* Title */}
        <h2 style={{
          margin: 0,
          color: 'var(--text-primary)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontFamily: InterFont,
          fontWeight: 800,
          lineHeight: 1.15,
          position: 'relative',
          zIndex: 1,
          maxWidth: '800px',
        }}>
          Integrated Digital Solutions<br />
          Built For <span style={{ color: '#00c2ff' }}>Real Growth</span>
        </h2>

        {/* Subtitle */}
        <p style={{
          margin: 0,
          color: 'var(--text-muted)',
          fontSize: '16px',
          lineHeight: '28px',
          fontFamily: BarlowFont,
          maxWidth: '540px',
          position: 'relative',
          zIndex: 1,
        }}>
          We combine data, creativity, and technology to deliver end-to-end digital marketing solutions that drive measurable results.
        </p>
      </div>

      {/* ═══════════════════════════════
          6 CATEGORY CARDS ROW
      ═══════════════════════════════ */}
      <div style={{
        width: '100%',
        padding: '0 clamp(16px, 3vw, 40px)',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          maxWidth: '1440px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '10px',
          alignItems: 'end',
        }}>
          {categories.map((cat, i) => {
            /* middle cards (02, 03, 04, 05) are taller */
            const isCenter = i >= 1 && i <= 4;
            const isMostCenter = i === 2 || i === 3;
            const cardH = isMostCenter ? 480 : isCenter ? 440 : 400;

            return (
              <div
                key={cat.num}
                className="ca-hover-popup"
                style={{
                  position: 'relative',
                  height: `${cardH}px`,
                  borderRadius: '18px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}
              >
                {/* Background photo */}
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.45) saturate(0.7)',
                  }}
                />

                {/* Gradient overlay from bottom */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(3,5,10,0.1) 0%, rgba(3,5,10,0.5) 40%, rgba(3,5,10,0.97) 100%)',
                }} />

                {/* Cyan top-left glow */}
                <div style={{
                  position: 'absolute',
                  top: '-40px', left: '-40px',
                  width: '180px', height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Number badge */}
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '13px',
                  fontWeight: 800,
                  fontFamily: InterFont,
                  letterSpacing: '0.04em',
                  zIndex: 2,
                }}>
                  {cat.num}
                </span>

                {/* Content at bottom */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  <h3 style={{
                    margin: 0,
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: InterFont,
                    lineHeight: 1.35,
                  }}>
                    {cat.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '12px',
                    fontFamily: BarlowFont,
                    lineHeight: '18px',
                  }}>
                    {cat.desc}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#00c2ff',
                    fontSize: '12px',
                    fontWeight: 700,
                    fontFamily: BarlowFont,
                    marginTop: '4px',
                  }}>
                    Explore Service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════
          STATS BAR
      ═══════════════════════════════ */}
      <div style={{
        width: '100%',
        marginTop: '60px',
        backgroundColor: '#050816',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: '48px clamp(24px, 5vw, 80px)',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <WaveLine />

        <div style={{
          maxWidth: '1440px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Left: Text + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: BarlowFont }}>
              OUR IMPACT IN NUMBERS
            </span>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(28px, 3vw, 40px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.15 }}>
              Real Results.<br />
              <span style={{ color: '#00c2ff' }}>Real Impact.</span>
            </h3>
            <button className="ca-hover-popup" style={{
              alignSelf: 'flex-start',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '100px',
              padding: '10px 24px 10px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: BarlowFont,
              cursor: 'pointer',
            }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00c2ff" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              View Case Studies
            </button>
          </div>

          {/* Right: Stats */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'center' }}>
                  <span style={{ color: '#00c2ff', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 800, fontFamily: InterFont, lineHeight: 1 }}>
                    {s.value}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: BarlowFont }}>
                    {s.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: '1px', height: '48px', backgroundColor: 'rgba(255,255,255,0.06)', flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>



    </section>
  );
};
