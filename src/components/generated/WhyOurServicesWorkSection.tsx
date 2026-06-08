"use client";
import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

/* ── What makes our services work — 5 cards ── */
const pillars = [
  {
    title: 'Data-First Decisions',
    desc: 'We analyze real market data, audience behavior, and competitor insights before making any move.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Strategic Growth Planning',
    desc: 'We build custom strategies aligned with your business goals, market trends and growth opportunities.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'High-Performance Execution',
    desc: 'Our team executes with precision across channels, ensuring every campaign is built to perform.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Continuous Optimization',
    desc: 'We monitor, test, and refine campaigns daily to improve results and maximize ROI.',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Transparent Partnership',
    desc: 'You get full visibility into performance, decisions and results — no guesswork, just real outcomes.',
    img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=600&q=80',
  },
];

/* ── Proven process list ── */
const provenProcess = [
  { num: '01', title: 'Discovery & Research', desc: 'We dive deep into your business, audience, market and competitors to uncover opportunities.' },
  { num: '02', title: 'Strategy & Planning', desc: 'We craft data-driven strategies and detailed plans tailored to your goals.' },
  { num: '03', title: 'Execution & Launch', desc: 'Our experts execute high-performing campaigns across the right channels.' },
  { num: '04', title: 'Monitor & Optimize', desc: 'We analyze performance in real-time and optimize campaigns for better results.' },
  { num: '05', title: 'Scale & Grow', desc: 'We scale what works, increase ROI and drive sustainable business growth.' },
];

/* ── Bottom image stat cards ── */
const bottomStats = [
  { value: '3.6M+', label: 'Leads Generated', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80' },
  { value: '4.8x', label: 'average ROI', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80' },
  { value: '250+', label: 'Successful Campaigns', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { value: '98%', label: 'Client Satisfaction', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
];

/* Mini Revenue Growth chart */
const RevenueChart = () => (
  <div style={{ position: 'relative', width: '100%', height: '120px', marginTop: '10px' }}>
    <svg width="100%" height="120" viewBox="0 0 500 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="wsg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-500-strong)" />
          <stop offset="100%" stopColor="var(--brand-500-soft)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Fill Area */}
      <path d="M0 110 C80 100, 120 80, 200 70 S300 40, 380 30 L450 15 L500 10 L500 120 L0 120Z" fill="url(#wsg1)" />
      {/* Line */}
      <path d="M0 110 C80 100, 120 80, 200 70 S300 40, 380 30 L450 15 L500 10" fill="none" stroke="var(--brand-500)" strokeWidth="2.5" filter="url(#glow)" />
      {/* Dots */}
      {[[0,110],[200,70],[380,30],[500,10]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#03050a" stroke="var(--brand-500)" strokeWidth="2" filter="url(#glow)" />
      ))}
    </svg>
    <div style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.4)', fontSize: '9px', fontFamily: BarlowFont }}>
      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
    </div>
  </div>
);

export const WhyOurServicesWorkSection: React.FC = () => {
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

      {/* ═══════════════════════════════════════════
          BLOCK 1: Hero Left + Photo Right
      ═══════════════════════════════════════════ */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '40px' }}>
        <div style={{
          maxWidth: '1440px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'stretch',
          minHeight: '500px',
        }}>
          {/* LEFT: text */}
          <div style={{
            padding: '40px clamp(24px, 5vw, 60px) 40px 60px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            <span style={{ color: 'var(--brand-500)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: BarlowFont, marginBottom: '20px' }}>
              WHY OUR SERVICES WORK
            </span>
            <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(32px, 4vw, 56px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.15, marginBottom: '24px' }}>
              We combine insight,<br />
              creativity and<br />
              <span style={{ color: 'var(--brand-500)' }}>relentless optimization</span><br />
              to deliver real growth.
            </h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '24px', fontFamily: BarlowFont, maxWidth: '420px', marginBottom: '48px' }}>
              Our approach is built on data, driven by strategy, executed with precision, and optimized every day to ensure you get maximum returns.
            </p>
            {/* Stats */}
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              {[['$1.2B+','Revenue Generated'],['250+','Brands Scaled'],['98%','Client Retention']].map(([v,l],i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ color: 'var(--brand-500)', fontSize: '28px', fontWeight: 800, fontFamily: InterFont }}>{v}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 500, fontFamily: BarlowFont }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: large photo bleeding to edge */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Team analyzing data on screens"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) saturate(0.8)' }}
            />
            {/* Fade into left side */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #03050a 0%, transparent 40%)' }} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCK 2: "What makes our services work" — 5 Cards
      ═══════════════════════════════════════════ */}
      <div style={{
        width: '100%',
        padding: '80px clamp(24px, 5vw, 60px)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center' }}>
          <span style={{ color: 'var(--brand-500)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: BarlowFont }}>
            OUR ADVANTAGE
          </span>
          <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(28px, 3vw, 36px)', fontFamily: InterFont, fontWeight: 800 }}>
            What makes our services work
          </h3>
        </div>

        <div style={{ width: '100%', maxWidth: '1440px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {pillars.map((p, i) => (
            <div key={i} className="ca-hover-popup" style={{
              display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer'
            }}>
              <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.8)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,5,10,0.8) 0%, transparent 50%)' }} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 700, fontFamily: InterFont, lineHeight: 1.3 }}>{p.title}</h4>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: BarlowFont, lineHeight: '18px' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCK 3: Proven Process Left + Photo Right
      ═══════════════════════════════════════════ */}
      <div style={{
        width: '100%',
        padding: '40px clamp(24px, 5vw, 60px) 80px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          maxWidth: '1440px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left: numbered process */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--brand-500)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: BarlowFont, marginBottom: '16px' }}>
              HOW IT WORKS
            </span>
            <h3 style={{ margin: '0 0 32px 0', color: 'var(--text-primary)', fontSize: 'clamp(28px, 3vw, 40px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.15 }}>
              Our proven process<br />
              that drives results
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {provenProcess.map((step, i) => (
                <div key={i} className="ca-hover-popup" style={{
                  display: 'flex', gap: '20px', padding: '20px 0',
                  borderBottom: i < provenProcess.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  cursor: 'pointer'
                }}>
                  <span style={{ color: 'var(--brand-500)', fontSize: '22px', fontWeight: 800, fontFamily: InterFont, lineHeight: 1, minWidth: '32px' }}>{step.num}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700, fontFamily: InterFont }}>{step.title}</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: BarlowFont, lineHeight: '20px', maxWidth: '340px' }}>{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: clean photo */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '600px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Team meeting analyzing performance"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.8)' }}
            />
            {/* Subtle inner glow */}
            <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--brand-500-soft)', borderRadius: '16px', pointerEvents: 'none' }} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCK 4: Real Impact Row + 4 Image Cards
      ═══════════════════════════════════════════ */}
      <div style={{
        width: '100%',
        padding: '0 clamp(24px, 5vw, 60px) 60px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* Top part: Text + Chart Card side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'stretch' }}>
            {/* Dark box left */}
            <div style={{ backgroundColor: '#070a18', borderRadius: '16px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h3 style={{ margin: '0 0 16px 0', color: 'var(--text-primary)', fontSize: '24px', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.2 }}>
                Real impact.<br />
                Measurable Results.
              </h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: '20px', fontFamily: BarlowFont }}>
                We don't just run campaigns — we build growth engines that deliver compounding results month after month.
              </p>
            </div>
            
            {/* Dark box right (Chart) */}
            <div style={{ backgroundColor: '#070a18', borderRadius: '16px', padding: '32px 40px', border: '1px solid rgba(255,255,255,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 700, fontFamily: InterFont, marginBottom: '4px' }}>Revenue Growth</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: BarlowFont }}>Last 24 months</span>
                </div>
                <span style={{ color: 'var(--brand-500)', fontSize: '14px', fontWeight: 800, fontFamily: InterFont }}>+350%<br/><span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>Growth</span></span>
              </div>
              <RevenueChart />
            </div>
          </div>

          {/* Bottom part: 4 Image Background Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {bottomStats.map((s, i) => (
              <div key={i} className="ca-hover-popup" style={{
                position: 'relative',
                height: '240px',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px'
              }}>
                <img src={s.img} alt={s.label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) saturate(0.6)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,5,10,0.95) 0%, transparent 60%)' }} />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: '#e2e8f0', fontSize: '32px', fontWeight: 800, fontFamily: InterFont, lineHeight: 1 }}>{s.value}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: BarlowFont }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BOTTOM TAGLINE
      ═══════════════════════════════════════════ */}
      <div style={{
        width: '100%',
        padding: '32px clamp(24px, 5vw, 80px) 60px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: BarlowFont, textAlign: 'center' }}>
          We're not just another agency. We're your growth partner.
        </p>
      </div>

    </section>
  );
};
