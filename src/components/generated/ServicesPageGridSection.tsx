import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const servicesGridData = [
  {
    id: '01',
    title: 'SEO &\nOrganic Growth',
    desc: 'Rank higher, drive qualified traffic, and build long-term authority.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    graphic: (
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '20px' }}>
        <div style={{
          position: 'absolute', top: '20%', right: '40%', backgroundColor: 'rgba(0,194,255,0.1)',
          border: '1px solid rgba(0,194,255,0.3)', borderRadius: '8px', padding: '6px 12px',
          display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <span style={{ color: '#00c2ff', fontWeight: 800, fontSize: '16px', fontFamily: InterFont }}>+230%</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '9px', fontFamily: BarlowFont }}>Organic Traffic</span>
        </div>
        <svg width="180" height="120" viewBox="0 0 180 120" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="chartGlow2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,194,255,0.4)" />
              <stop offset="100%" stopColor="rgba(0,194,255,0)" />
            </linearGradient>
            <filter id="lineGlow2">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path d="M0 100 L 30 85 L 60 90 L 90 50 L 120 60 L 160 20 L 180 0 L 180 120 L 0 120 Z" fill="url(#chartGlow2)" />
          <path d="M0 100 L 30 85 L 60 90 L 90 50 L 120 60 L 160 20 L 180 0" fill="none" stroke="#00c2ff" strokeWidth="3" filter="url(#lineGlow2)" />
          {[
            [0,100], [30,85], [60,90], [90,50], [120,60], [160,20], [180,0]
          ].map((pt, i) => (
            <circle key={i} cx={pt[0]} cy={pt[1]} r="4" fill="#050816" stroke="#00c2ff" strokeWidth="2" />
          ))}
        </svg>
      </div>
    )
  },
  {
    id: '02',
    title: 'Performance\nMarketing',
    desc: 'Data-driven ad campaigns that maximize ROI and conversions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    graphic: (
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', border: '1px dashed rgba(0,194,255,0.3)', animation: 'spin 20s linear infinite' }}></div>
        <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', border: '1px solid rgba(0,194,255,0.4)', animation: 'spin 15s linear infinite reverse' }}></div>
        <div style={{
          position: 'absolute', width: '70px', height: '70px', borderRadius: '50%',
          backgroundColor: 'rgba(0,194,255,0.1)', border: '2px solid #00c2ff',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(0,194,255,0.4)'
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '9px', fontFamily: BarlowFont, fontWeight: 700 }}>ROAS</span>
          <span style={{ color: '#00c2ff', fontSize: '18px', fontWeight: 800, fontFamily: InterFont }}>8.6x</span>
        </div>
        <img src="https://i.pravatar.cc/100?img=33" style={{ position: 'absolute', top: '10%', right: '20%', width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #00c2ff' }} />
        <img src="https://i.pravatar.cc/100?img=12" style={{ position: 'absolute', bottom: '15%', left: '15%', width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #00c2ff' }} />
      </div>
    )
  },
  {
    id: '03',
    title: 'Web Design &\nDevelopment',
    desc: 'High-performing websites that convert and scale.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    graphic: (
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px' }}>
        <div style={{
          position: 'absolute', right: '40px', width: '140px', height: '160px',
          backgroundColor: '#050816', border: '1px solid rgba(0,194,255,0.3)', borderRadius: '12px',
          transform: 'perspective(500px) rotateY(-15deg) rotateX(5deg)',
          boxShadow: '-10px 10px 20px rgba(0,0,0,0.5)', zIndex: 2, padding: '16px', boxSizing: 'border-box'
        }}>
          <div style={{ width: '40px', height: '4px', backgroundColor: 'rgba(0,194,255,0.5)', borderRadius: '2px', marginBottom: '12px' }}></div>
          <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '8px' }}></div>
          <div style={{ width: '80%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '24px' }}></div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, height: '40px', backgroundColor: 'rgba(0,194,255,0.1)', borderRadius: '6px' }}></div>
            <div style={{ flex: 1, height: '40px', backgroundColor: 'rgba(0,194,255,0.1)', borderRadius: '6px' }}></div>
          </div>
        </div>
        <div style={{
          position: 'absolute', right: '10px', width: '140px', height: '160px',
          backgroundColor: '#0a0f26', border: '1px solid rgba(0,194,255,0.1)', borderRadius: '12px',
          transform: 'perspective(500px) rotateY(-15deg) rotateX(5deg) translateZ(-40px)',
          opacity: 0.6, zIndex: 1
        }}></div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Brand Strategy &\nIdentity',
    desc: 'Build a powerful brand that stands out and lasts.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l-5.5 8.5 5.5 11.5 5.5-11.5L12 2z"></path><path d="M12 2v20"></path>
      </svg>
    ),
    graphic: (
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'relative', width: '130px', height: '150px',
          background: 'linear-gradient(135deg, rgba(0,194,255,0.2), rgba(0,194,255,0.05))',
          border: '1px solid rgba(0,194,255,0.4)', borderRadius: '16px',
          transform: 'perspective(500px) rotateY(-20deg) rotateX(10deg)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px',
          boxShadow: '-10px 20px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,194,255,0.2)'
        }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: '#00c2ff', borderRadius: '12px', transform: 'rotate(45deg)' }}></div>
          <span style={{ color: '#00c2ff', fontWeight: 800, fontSize: '12px', fontFamily: InterFont, letterSpacing: '0.1em' }}>BRAND</span>
        </div>
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px',
          width: '50px', height: '50px', backgroundColor: 'rgba(0,194,255,0.1)', border: '1px solid #00c2ff',
          borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#00c2ff', fontSize: '20px', fontWeight: 700, fontFamily: InterFont,
          transform: 'perspective(500px) rotateY(15deg) rotateX(10deg)', zIndex: 3
        }}>
          Aa
        </div>
      </div>
    )
  },
  {
    id: '05',
    title: 'Content\nMarketing',
    desc: 'Engaging content that attracts, educates, and converts.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    graphic: (
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Play Card */}
        <div style={{
          position: 'absolute', top: '20px', left: '20px', width: '80px', height: '80px',
          backgroundColor: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.4)', borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: 'perspective(500px) rotateY(-10deg) rotateZ(-5deg)', boxShadow: '-5px 10px 20px rgba(0,0,0,0.4)'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#00c2ff"><polygon points="8 5 19 12 8 19 8 5"></polygon></svg>
        </div>
        {/* Image Card */}
        <div style={{
          position: 'absolute', top: '30px', right: '20px', width: '80px', height: '80px',
          backgroundColor: 'rgba(0,194,255,0.15)', border: '1px solid rgba(0,194,255,0.5)', borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: 'perspective(500px) rotateY(-10deg) rotateZ(10deg)', boxShadow: '-5px 10px 20px rgba(0,0,0,0.4)'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00c2ff" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        </div>
        {/* Text Card */}
        <div style={{
          position: 'absolute', bottom: '20px', left: '50px', width: '120px', height: '60px',
          backgroundColor: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)', borderRadius: '12px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', padding: '0 16px',
          transform: 'perspective(500px) rotateX(10deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
        }}>
          <div style={{ width: '80%', height: '6px', backgroundColor: 'rgba(0,194,255,0.5)', borderRadius: '3px' }}></div>
          <div style={{ width: '50%', height: '6px', backgroundColor: 'rgba(0,194,255,0.3)', borderRadius: '3px' }}></div>
        </div>
      </div>
    )
  },
  {
    id: '06',
    title: 'Marketing Automation\n& CRM',
    desc: 'Automate, nurture, and convert with smart workflows.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    graphic: (
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <path d="M 60 50 C 100 50, 100 100, 140 100" fill="none" stroke="rgba(0,194,255,0.4)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 140 100 C 100 100, 100 150, 60 150" fill="none" stroke="rgba(0,194,255,0.4)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
        <div style={{
          position: 'absolute', top: '30px', left: '40px', width: '40px', height: '40px',
          backgroundColor: '#00c2ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050816" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div style={{
          position: 'absolute', top: '80px', right: '30px', width: '40px', height: '40px',
          backgroundColor: 'rgba(0,194,255,0.2)', border: '1px solid #00c2ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c2ff" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div style={{
          position: 'absolute', bottom: '30px', left: '40px', width: '40px', height: '40px',
          backgroundColor: '#00c2ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050816" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
      </div>
    )
  }
];

const stats = [
  { value: '10M+', label: 'Leads Generated', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="14" width="4" height="6" rx="1"></rect><rect x="10" y="8" width="4" height="12" rx="1"></rect><rect x="18" y="2" width="4" height="18" rx="1"></rect></svg> },
  { value: '300%', label: 'Average ROI Increase', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg> },
  { value: '250+', label: 'Brands Scaled', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
  { value: '25+', label: 'Countries Served', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> },
  { value: '95%', label: 'Client Retention', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> }
];

export const ServicesPageGridSection: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section style={{
      width: '100%',
      padding: '100px clamp(24px, 5vw, 60px)',
      backgroundColor: '#03050a',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: 'column', gap: '64px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
            <span style={{ color: '#00c2ff', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: BarlowFont }}>
              OUR SERVICES
            </span>
            <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(36px, 4vw, 56px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.1 }}>
              Growth solutions.<br/>
              Built for <i style={{ color: '#00c2ff', fontStyle: 'italic', fontWeight: 700 }}>real impact.</i>
            </h2>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '16px', lineHeight: '28px', fontFamily: BarlowFont, marginTop: '8px' }}>
              From strategy to execution, our services are designed<br/>to scale your brand, drive leads, and maximize ROI.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '350px', alignItems: 'flex-start', paddingTop: '24px' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '15px', lineHeight: '26px', fontFamily: BarlowFont }}>
              We combine creativity, data, and technology to deliver measurable growth across every stage of your customer journey.
            </p>
            <button className="ca-hover-popup" style={{
              background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '16px',
              color: '#00c2ff', fontSize: '13px', fontWeight: 700, fontFamily: BarlowFont, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', padding: 0
            }}>
              EXPLORE ALL SERVICES
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </button>
          </div>
        </div>

        {/* 3x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          width: '100%'
        }}>
          {servicesGridData.map((item, index) => (
            <div key={item.id} className="ca-interactive-card" style={{
              backgroundColor: '#070a18',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '380px',
              boxSizing: 'border-box',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
            onClick={() => {
              if (item.title.includes('SEO') && onNavigate) {
                onNavigate('SEO & ORGANIC GROWTH');
              }
            }}
            >
              {/* Graphic background area (right side) */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.8 }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at right, rgba(0,194,255,0.1) 0%, transparent 70%)' }}></div>
                {item.graphic}
              </div>

              {/* Content area (left side) */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '65%' }}>
                <span style={{ color: '#00c2ff', fontSize: '14px', fontWeight: 800, fontFamily: InterFont, marginBottom: '24px' }}>
                  {item.id}
                </span>
                
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(0,194,255,0.05)', border: '1px solid rgba(0,194,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00c2ff', marginBottom: '24px' }}>
                  {item.icon}
                </div>

                <h3 style={{ margin: '0 0 12px 0', color: 'var(--text-primary)', fontSize: '24px', fontWeight: 700, fontFamily: InterFont, lineHeight: 1.2, whiteSpace: 'pre-line' }}>
                  {item.title}
                </h3>
                
                <p style={{ margin: '0 0 40px 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '24px', fontFamily: BarlowFont }}>
                  {item.desc}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '12px', color: '#00c2ff', fontSize: '12px', fontWeight: 700, fontFamily: BarlowFont, letterSpacing: '0.1em' }}>
                  LEARN MORE
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(0,194,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div style={{
          backgroundColor: '#050816',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '24px',
          padding: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: '#00c2ff', opacity: 0.8 }}>{stat.icon}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 800, fontFamily: InterFont }}>{stat.value}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: BarlowFont }}>{stat.label}</span>
                </div>
              </div>
              {i < stats.length - 1 && (
                <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.05)' }}></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
