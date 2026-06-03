import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const topStats = [
  {
    value: '3,000+',
    label: 'Happy Clients',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '10M+',
    label: 'Leads Generated',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    value: '25+',
    label: 'Countries Served',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    value: '95%',
    label: 'Client Retention',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const caseStudyStats = [
  { value: '+320%', label: 'Lead Increase' },
  { value: '+180%', label: 'Revenue Growth' },
  { value: '-45%', label: 'Cost Per Lead' },
  { value: '10.2x', label: 'ROI Achieved' },
];

const bottomFeatures = [
  {
    title: 'Data-Driven Everything',
    desc: 'We use real data and advanced analytics to make informed decisions that drive real results.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="3" width="4" height="18" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="2" y="13" width="4" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: 'ROI-Focused Strategies',
    desc: 'Every campaign is built with one goal: to maximize your return on investment.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Partnerships',
    desc: "We don't just work for you — we work with you to build lasting success.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const logos = [
  'CloudFlow', 'ShopNex', 'HealthPlus', 'EduClimb', 'Finova', 'Travely', 'Workly', 'Zapier'
];

export const ResultsImpactSection: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: '100px clamp(24px, 6vw, 90px)',
        backgroundColor: 'var(--bg-primary)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1440px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '64px',
          zIndex: 2,
        }}
      >
        {/* Top Header & Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '48px', alignItems: 'flex-start' }}>
          {/* Left Text */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  color: '#00c2ff',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: BarlowFont,
                }}
              >
                RESULTS & IMPACT
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </div>

            <h2
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontFamily: InterFont,
                fontWeight: 800,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              We Don't Just Run Campaigns.
              <br />
              <span style={{ color: '#00c2ff' }}>We Deliver Transformations.</span>
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: BarlowFont,
                margin: 0,
                maxWidth: '600px',
              }}
            >
              Our data-driven strategies, creative excellence, and relentless execution
              drive measurable growth for brands across the globe.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            {topStats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: '#00c2ff' }}>
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: 'var(--text-primary)', fontSize: '28px', fontWeight: 800, fontFamily: InterFont }}>
                    {stat.value}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: BarlowFont }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Area: Case Study & Quote */}
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', position: 'relative' }}>
          
          {/* Right side glowing background graphic (positioned absolute to span right area) */}
          <div
            style={{
              position: 'absolute',
              right: '-10%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '600px',
              height: '600px',
              zIndex: 0,
              pointerEvents: 'none',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 194, 255, 0.15) 0%, transparent 60%)',
              boxShadow: '0 0 100px rgba(0, 194, 255, 0.1)',
            }}
          >
            {/* Swirling energy rings */}
            <div style={{ position: 'absolute', inset: '10%', borderRadius: '50%', border: '2px solid rgba(0, 194, 255, 0.3)', filter: 'blur(4px)', transform: 'scaleY(0.5) rotate(20deg)' }} />
            <div style={{ position: 'absolute', inset: '15%', borderRadius: '50%', border: '1px solid rgba(0, 194, 255, 0.6)', filter: 'blur(2px)', transform: 'scaleY(0.4) rotate(40deg)' }} />
            <div style={{ position: 'absolute', inset: '5%', borderRadius: '50%', border: '1px dashed rgba(0, 194, 255, 0.2)', transform: 'scaleY(0.6) rotate(-10deg)', animation: 'spin 40s linear infinite' }} />
          </div>

          {/* Left Case Study Card */}
          <div
            style={{
              flex: '1 1 500px',
              backgroundColor: '#050816',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <span style={{ color: '#00c2ff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: BarlowFont, textTransform: 'uppercase' }}>
                  CASE STUDY SPOTLIGHT
                </span>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800, fontFamily: InterFont, lineHeight: 1.2 }}>
                  Scaling CloudFlow<br />to New Heights
                </h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '24px', fontFamily: BarlowFont, flex: '1 1 200px' }}>
                CloudFlow partnered with us to scale their SaaS platform. In just 12 months, we helped them achieve exponential growth through performance marketing and CRO.
              </p>
            </div>

            {/* Stats row inside card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
              {caseStudyStats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: '#00c2ff', fontSize: '24px', fontWeight: 800, fontFamily: InterFont }}>{stat.value}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Chart Graphic Area */}
            <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '32px' }}>
              <svg width="100%" height="100%" viewBox="0 0 600 160" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 40, 80, 120, 160].map((y, i) => (
                  <g key={y}>
                    <line x1="40" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <text x="20" y={y + 4} fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily={InterFont} textAnchor="end">
                      {400 - (i * 100)}
                    </text>
                  </g>
                ))}
                
                {/* Gradient Fill */}
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,194,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(0,194,255,0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M40 140 L90 125 L140 130 L190 110 L240 115 L290 85 L340 90 L390 75 L440 80 L490 50 L540 55 L580 20 L580 160 L40 160 Z"
                  fill="url(#chartGlow)"
                />
                
                {/* Line */}
                <path
                  d="M40 140 L90 125 L140 130 L190 110 L240 115 L290 85 L340 90 L390 75 L440 80 L490 50 L540 55 L580 20"
                  fill="none"
                  stroke="#00c2ff"
                  strokeWidth="3"
                />
                
                {/* Data Points */}
                {[
                  [40, 140], [90, 125], [140, 130], [190, 110], [240, 115], 
                  [290, 85], [340, 90], [390, 75], [440, 80], [490, 50], [540, 55], [580, 20]
                ].map((pt, i) => (
                  <circle key={i} cx={pt[0]} cy={pt[1]} r="4" fill="#050816" stroke="#00c2ff" strokeWidth="2" />
                ))}

                {/* X Axis Labels */}
                {['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'].map((m, i) => (
                  <text key={m} x={40 + (i * 49)} y="155" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily={InterFont} textAnchor="middle">
                    {m}
                  </text>
                ))}
              </svg>

              {/* Tooltip Popup */}
              <div
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '-10px',
                  backgroundColor: '#00c2ff',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#050816', fontSize: '14px', fontWeight: 800, fontFamily: InterFont }}>320%</span>
                <span style={{ color: 'rgba(5,8,22,0.7)', fontSize: '9px', fontWeight: 700, fontFamily: BarlowFont, letterSpacing: '0.05em' }}>GROWTH</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
              <button
                className="ca-hover-popup"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: BarlowFont,
                  letterSpacing: '0.1em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                VIEW FULL CASE STUDY
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </button>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Area Quote */}
          <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00c2ff', marginBottom: '24px' }}>
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
            
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '28px', fontWeight: 600, fontFamily: BarlowFont, lineHeight: 1.4, marginBottom: '32px' }}>
              Their strategic approach and execution have been game-changers for our business.
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="https://i.pravatar.cc/100?img=11"
                alt="Jacob Smith"
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700, fontFamily: InterFont }}>Jacob Smith</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: BarlowFont }}>CEO, CloudFlow</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brands Strip */}
        <div
          style={{
            backgroundColor: '#050816',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '24px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '16px',
          }}
        >
          {logos.map((logo, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, fontFamily: InterFont, fontSize: '18px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              {logo}
            </div>
          ))}
        </div>

        {/* Bottom Feature Banner */}
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(8, 12, 32, 0.6) 0%, rgba(12, 16, 42, 0.8) 50%, rgba(8, 12, 32, 0.6) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {bottomFeatures.map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 194, 255, 0.05)',
                  border: '1px solid rgba(0, 194, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00c2ff',
                  flexShrink: 0,
                }}
              >
                {feat.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: InterFont }}>
                  {feat.title}
                </span>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '22px', fontFamily: BarlowFont }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
