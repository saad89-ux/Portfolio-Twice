"use client";
import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

/* ────────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────────── */
const processSteps = [
  { num: '01', title: 'Discovery & Deep Analysis', desc: 'We research your business, competitors, and audience to uncover the exact growth levers that move the needle.' },
  { num: '02', title: 'We Plan to Win', desc: 'A custom strategy built around your goals, your market, and your resources — no templates, no shortcuts.' },
  { num: '03', title: 'We Launch With Precision', desc: 'Campaigns are built and launched with an obsessive focus on quality, targeting, and conversion.' },
  { num: '04', title: 'We Optimize Relentlessly', desc: 'Data is reviewed daily. What works gets scaled. What doesn\'t gets fixed immediately.' },
  { num: '05', title: 'We Scale Your Business', desc: 'Once we find the winning formula, we pour fuel on it and build sustainable long-term growth.' },
];

const approaches = [
  { title: 'Elite Flex Standard', desc: 'We adapt our approach to your exact business stage and goals.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80' },
  { title: 'Proven Growth Standard', desc: 'Every decision is backed by data and validated market intelligence.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Creative That Converts', desc: 'We don\'t just make things look good. We make them perform.', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80' },
  { title: 'Continuous Optimization', desc: 'We never stop testing, learning, and improving your results.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
  { title: 'Transparent Collaboration', desc: 'You always know what we\'re doing, why, and what\'s coming next.', img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=600&q=80' },
];

const trustedPhotos = [
  { img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80', name: 'Sarah K.' },
  { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80', name: 'Mark L.' },
  { img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80', name: 'Priya M.' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', name: 'James W.' },
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', name: 'Elena R.' },
];

/* ────────────────────────────────────────────────────
   SUB-COMPONENTS
──────────────────────────────────────────────────── */

/* 3D stacked tower layers */
const StackedTower = () => {
  const layers = [
    { label: '+350%', sub: 'ROI Increase', w: 340 },
    { label: '$8.4M', sub: 'Revenue Driven', w: 290 },
    { label: '250+', sub: 'Clients Scaled', w: 240 },
    { label: '98%', sub: 'Client Retention', w: 195 },
    { label: '10+', sub: 'Years Experience', w: 150 },
  ];

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', paddingBottom: '20px' }}>
      {/* Apex glow */}
      <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,194,255,0.6) 0%, transparent 70%)', filter: 'blur(20px)', marginBottom: '-30px', zIndex: 0 }} />
      
      {layers.map((layer, i) => (
        <div key={i} style={{ position: 'relative', zIndex: layers.length - i, marginBottom: i < layers.length - 1 ? '3px' : '0' }}>
          {/* Layer body */}
          <div style={{
            width: `${layer.w}px`,
            height: '52px',
            borderRadius: '10px',
            background: `linear-gradient(135deg, rgba(0,194,255,${0.06 + i * 0.02}) 0%, rgba(0,15,40,0.95) 100%)`,
            border: '1px solid rgba(0,194,255,0.35)',
            boxShadow: `0 0 ${16 + i * 6}px rgba(0,194,255,${0.12 + i * 0.04}), inset 0 1px 0 rgba(0,194,255,0.2)`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 20px', boxSizing: 'border-box',
            position: 'relative',
          }}>
            {/* Top edge glow */}
            <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.9), transparent)' }} />
            <span style={{ color: '#00c2ff', fontSize: '20px', fontWeight: 800, fontFamily: InterFont }}>{layer.label}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontFamily: BarlowFont }}>{layer.sub}</span>
          </div>
        </div>
      ))}
      
      {/* Base glow */}
      <div style={{ width: '360px', height: '20px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,194,255,0.6) 0%, transparent 70%)', filter: 'blur(6px)', marginTop: '2px' }} />
    </div>
  );
};

/* Animated sparkle chart */
const GrowthChart = ({ compact }: { compact?: boolean }) => (
  <div style={{ position: 'relative', width: '100%', height: compact ? '120px' : '180px' }}>
    <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gc1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,194,255,0.35)" />
          <stop offset="100%" stopColor="rgba(0,194,255,0)" />
        </linearGradient>
        <filter id="glow1">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feComposite in="SourceGraphic" in2="b" operator="over" />
        </filter>
      </defs>
      <path d="M0 160 C80 155 120 140 180 120 C240 100 280 90 340 65 C400 40 440 25 500 15 L560 5 L600 2 L600 180 L0 180Z" fill="url(#gc1)" />
      <path d="M0 160 C80 155 120 140 180 120 C240 100 280 90 340 65 C400 40 440 25 500 15 L560 5 L600 2" fill="none" stroke="#00c2ff" strokeWidth="2.5" filter="url(#glow1)" />
      {[[0,160],[180,120],[340,65],[500,15],[600,2]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#050816" stroke="#00c2ff" strokeWidth="2" />
      ))}
    </svg>
  </div>
);

/* ────────────────────────────────────────────────────
   MAIN COMPONENT
──────────────────────────────────────────────────── */
export const ServiceProcessSection: React.FC = () => {
  return (
    <section style={{ width: '100%', backgroundColor: 'var(--bg-primary)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* ═════════ SECTION 1: Hero + Tower ═════════ */}
      <div style={{ width: '100%', padding: '100px clamp(24px,5vw,80px) 60px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%, rgba(0,194,255,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1400px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>

          {/* LEFT: Hero text + stats + numbered list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            <div>
              <span style={{ color: '#00c2ff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: BarlowFont }}>OUR SERVICE PROCESS</span>
              <h2 style={{ margin: '14px 0 0 0', color: 'var(--text-primary)', fontSize: 'clamp(36px,4vw,58px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.1 }}>
                We don't guess.<br />
                We engineer growth<br />
                that <span style={{ color: '#00c2ff' }}>compounds.</span>
              </h2>
              <p style={{ margin: '18px 0 0 0', color: 'var(--text-muted)', fontSize: '15px', lineHeight: '26px', fontFamily: BarlowFont }}>
                Our process is engineered to turn strategy into compounding, measurable growth. Not one-off wins — but systems that keep delivering month after month.
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', paddingTop: '8px' }}>
              {[['$1.2B+','Revenue Generated'],['250+','Brands Scaled'],['98%','Client Retention']].map(([v,l],i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: '#00c2ff', fontSize: '28px', fontWeight: 800, fontFamily: InterFont }}>{v}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont }}>{l}</span>
                </div>
              ))}
            </div>

            {/* Numbered process list */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '8px' }}>
              {processSteps.map((step, i) => (
                <div key={i} className="ca-hover-popup" style={{ display: 'flex', gap: '20px', padding: '18px 0', borderBottom: '1px solid var(--border-light)', cursor: 'pointer' }}>
                  <span style={{ color: '#00c2ff', fontSize: '22px', fontWeight: 800, fontFamily: InterFont, minWidth: '36px', lineHeight: 1 }}>{step.num}</span>
                  <div>
                    <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700, fontFamily: InterFont, marginBottom: '4px' }}>{step.title}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: BarlowFont, lineHeight: '20px' }}>{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Tower + stats card */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', position: 'relative' }}>
            {/* Top-right mini stats card */}
            <div style={{ alignSelf: 'flex-end', backgroundColor: 'var(--bg-secondary)', border: '1px solid rgba(0,194,255,0.15)', borderRadius: '16px', padding: '16px 24px', display: 'flex', gap: '32px' }}>
              {[['+350%','Avg ROI'],['250+','Clients'],['98%','Retain']].map(([v,l],i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <span style={{ color: '#00c2ff', fontSize: '18px', fontWeight: 800, fontFamily: InterFont }}>{v}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '10px', fontFamily: BarlowFont }}>{l}</span>
                </div>
              ))}
            </div>

            {/* 3D Tower */}
            <StackedTower />

            {/* "CONTINUOUS GROWTH" label below tower */}
            <span style={{ color: 'rgba(0,194,255,0.6)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: BarlowFont }}>
              CONTINUOUS GROWTH ENGINE
            </span>
          </div>

        </div>
      </div>

      {/* ═════════ SECTION 2: 5 Approach Cards ═════════ */}
      <div style={{ width: '100%', padding: '0 clamp(24px,5vw,80px)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1400px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
          {approaches.map((item, i) => (
            <div key={i} className="ca-interactive-card" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '18px', overflow: 'hidden', cursor: 'pointer' }}>
              {/* Photo */}
              <div style={{ width: '100%', height: '170px', position: 'relative', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.8)' }} />
                {/* Cyan color overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,194,255,0.1) 0%, rgba(3,5,10,0.85) 100%)' }} />
              </div>
              {/* Text */}
              <div style={{ padding: '18px 16px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: 700, fontFamily: InterFont, lineHeight: 1.35 }}>{item.title}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: BarlowFont, lineHeight: '17px' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═════════ SECTION 3: Numbered list + Meeting room photo ═════════ */}
      <div style={{ width: '100%', padding: '80px clamp(24px,5vw,80px)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1400px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'stretch' }}>

          {/* Left numbered list (compact) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {processSteps.map((step, i) => (
              <div key={i} className="ca-hover-popup" style={{
                display: 'flex', gap: '18px', padding: '20px 24px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '12px', marginBottom: '8px',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
              }}>
                <span style={{ color: '#00c2ff', fontSize: '26px', fontWeight: 800, fontFamily: InterFont, lineHeight: 1, minWidth: '40px' }}>{step.num}</span>
                <div>
                  <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 700, fontFamily: InterFont, marginBottom: '5px' }}>{step.title}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont, lineHeight: '19px' }}>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large meeting/dashboard photo */}
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', minHeight: '480px' }}>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="Strategy meeting with data visualization"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) saturate(0.7)' }}
            />
            {/* Cyan tint overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,194,255,0.15) 0%, rgba(3,5,10,0.4) 100%)' }} />
            {/* Floating data cards */}
            <div style={{ position: 'absolute', top: '24px', right: '24px', backgroundColor: 'var(--bg-primary)', border: '1px solid rgba(0,194,255,0.3)', borderRadius: '14px', padding: '18px 22px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '10px', fontFamily: BarlowFont, display: 'block', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Campaign ROI</span>
              <span style={{ color: '#00c2ff', fontSize: '28px', fontWeight: 800, fontFamily: InterFont }}>+350%</span>
            </div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', backgroundColor: 'var(--bg-primary)', border: '1px solid rgba(0,194,255,0.15)', borderRadius: '14px', padding: '16px 20px', display: 'flex', gap: '24px' }}>
              {[['$8.4M','Revenue'],['4.6X','ROAS'],['98%','Retention']].map(([v,l],i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ color: '#00c2ff', fontSize: '18px', fontWeight: 800, fontFamily: InterFont }}>{v}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '10px', fontFamily: BarlowFont }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ═════════ SECTION 4: Real Strategies + Growth Chart ═════════ */}
      <div style={{ width: '100%', padding: '0 clamp(24px,5vw,80px) 80px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1400px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center' }}>

          {/* Left text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(28px,3vw,44px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.15 }}>
                Real Strategies.<br />
                <span style={{ color: '#00c2ff' }}>Real Results.</span>
              </h3>
              <p style={{ margin: '16px 0 0 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '24px', fontFamily: BarlowFont }}>
                We don't chase vanity metrics. Every strategy is tied directly to measurable business outcomes that actually grow your revenue and market share.
              </p>
            </div>
            <button className="ca-hover-popup" style={{
              alignSelf: 'flex-start', background: 'none', border: '1px solid var(--border-light)',
              borderRadius: '100px', padding: '10px 28px 10px 10px',
              display: 'flex', alignItems: 'center', gap: '14px',
              color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: BarlowFont, cursor: 'pointer',
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#00c2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#050816" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              See Our Results
            </button>
            {/* 4 stats in 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '8px' }}>
              {[['$1.2B+','Revenue Driven'],['4.6X','Average ROAS'],['3.4M+','Leads Generated'],['98%','Client Satisfaction']].map(([v,l],i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: '#00c2ff', fontSize: '24px', fontWeight: 800, fontFamily: InterFont }}>{v}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Growth chart card */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid rgba(0,194,255,0.1)', borderRadius: '24px', padding: '32px', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <span style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: InterFont, display: 'block' }}>Grow With Your Plan</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont }}>Cumulative client growth over 24 months</span>
              </div>
              <div style={{ backgroundColor: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)', borderRadius: '10px', padding: '8px 18px' }}>
                <span style={{ color: '#00c2ff', fontSize: '20px', fontWeight: 800, fontFamily: InterFont }}>+350%</span>
              </div>
            </div>
            <GrowthChart />
            <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
              {[['#00c2ff','Organic'],['rgba(0,194,255,0.5)','Paid'],['rgba(0,194,255,0.25)','Referral']].map(([c,l],i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: c as string }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ═════════ SECTION 5: Trusted Brands Footer ═════════ */}
      <div style={{ width: '100%', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', padding: '48px clamp(24px,5vw,80px)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1400px', width: '100%', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '60px', alignItems: 'center' }}>

          {/* Label */}
          <div>
            <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '20px', fontWeight: 800, fontFamily: InterFont, lineHeight: 1.3 }}>
              Trusted by ambitious brands
            </span>
            <span style={{ display: 'block', color: '#00c2ff', fontSize: '20px', fontWeight: 800, fontFamily: InterFont }}>
              that want to win.
            </span>
          </div>

          {/* Person photos */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {trustedPhotos.map((person, i) => (
              <div key={i} className="ca-hover-popup" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(0,194,255,0.3)', boxShadow: '0 0 16px rgba(0,194,255,0.15)' }}>
                  <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '10px', fontFamily: BarlowFont }}>{person.name}</span>
              </div>
            ))}
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(0,194,255,0.08)', border: '2px solid rgba(0,194,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#00c2ff', fontSize: '13px', fontWeight: 800, fontFamily: InterFont }}>250+</span>
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ maxWidth: '300px' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', fontFamily: BarlowFont, lineHeight: '22px', fontStyle: 'italic' }}>
              "Their process didn't just run campaigns — it built a growth machine that we still benefit from today. The ROI was 8x within 6 months."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(0,194,255,0.3)' }}>
                <img src="https://i.pravatar.cc/80?img=8" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '12px', fontWeight: 700, fontFamily: InterFont }}>David Chen</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: BarlowFont }}>CMO, Series B SaaS</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
