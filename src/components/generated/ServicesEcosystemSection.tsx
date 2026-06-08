"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const ecosystemLeft = [
  { 
    title: 'SEO', 
    desc: 'Rank higher. Drive organic traffic. Grow sustainably.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    y: 160
  },
  { 
    title: 'GOOGLE ADS', 
    desc: 'High-converting ad campaigns that maximize ROI.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 22 22 22"></polygon>
      </svg>
    ),
    y: 320
  },
  { 
    title: 'SOCIAL MEDIA', 
    desc: 'Engage audiences. Build brand loyalty. Drive real growth.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
    y: 480
  },
  { 
    title: 'EMAIL MARKETING', 
    desc: 'Nurture leads. Increase retention. Drive repeat business.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    y: 640
  }
];

const ecosystemRight = [
  { 
    title: 'WEB DESIGN', 
    desc: 'Beautiful, fast & conversion-optimized websites.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    y: 160
  },
  { 
    title: 'BRANDING', 
    desc: 'Build a brand that stands out and stays remembered.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l-5.5 8.5 5.5 11.5 5.5-11.5L12 2z"></path>
        <path d="M12 2v20"></path>
      </svg>
    ),
    y: 320
  },
  { 
    title: 'CONTENT MARKETING', 
    desc: 'Content that educates, ranks, and converts.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <polygon points="10 8 16 10 10 12 10 8"></polygon>
      </svg>
    ),
    y: 480
  },
  { 
    title: 'ANALYTICS & REPORTING', 
    desc: 'Real-time insights. Smarter decisions. Better results.', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
        <polyline points="2 12 8 8 12 12 22 4"></polyline>
      </svg>
    ),
    y: 640
  }
];

const ecosystemTop = { 
  title: 'STRATEGY', 
  desc: 'Data-driven strategies that build the right foundation.', 
  icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
      <line x1="22" y1="2" x2="18" y2="6"></line>
    </svg>
  )
};

const ecosystemBottom = { 
  title: 'CONVERSION OPTIMIZATION', 
  desc: 'Turn more visitors into paying customers.', 
  icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"></path>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  )
};

const stats = [
  { 
    value: '10M+', 
    label: 'Leads Generated', 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="14" width="4" height="6" rx="1"></rect>
        <rect x="10" y="8" width="4" height="12" rx="1"></rect>
        <rect x="18" y="2" width="4" height="18" rx="1"></rect>
      </svg>
    ) 
  },
  { 
    value: '300%', 
    label: 'Average ROI Increase', 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ) 
  },
  { 
    value: '250+', 
    label: 'Brands Scaled', 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ) 
  },
  { 
    value: '25+', 
    label: 'Countries Served', 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ) 
  }
];

// Helper to draw a node card
const EcosystemNode = ({ title, desc, icon, align = 'left', onClick }: { title: string, desc: string, icon: React.ReactNode, align?: 'left' | 'right' | 'center', onClick?: () => void }) => (
  <div 
    className="ca-hover-popup"
    onClick={onClick}
    style={{
      backgroundColor: 'var(--bg-card)',
      border: '1px solid var(--brand-500-soft)',
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      width: '320px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      cursor: 'pointer',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      flexDirection: align === 'center' ? 'column' : 'row',
      textAlign: align === 'center' ? 'center' : 'left'
    }}
  >
    <div style={{
      width: '48px', height: '48px', borderRadius: '12px',
      backgroundColor: 'var(--brand-500-soft)', border: '1px solid var(--brand-500-medium)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-500)', flexShrink: 0
    }}>
      {icon}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
      <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700, fontFamily: InterFont }}>{title}</span>
      <span style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: '18px', fontFamily: BarlowFont }}>{desc}</span>
    </div>
    {align !== 'center' && (
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--bg-card-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-500)', flexShrink: 0 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>
    )}
  </div>
);

export const ServicesEcosystemSection: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const router = useRouter();
  const containerW = 1200;
  const containerH = 800;
  const centerX = containerW / 2;
  const centerY = containerH / 2;

  return (
    <section style={{
      width: '100%',
      padding: '100px clamp(24px, 5vw, 60px)',
      backgroundColor: 'var(--bg-primary)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: 'var(--brand-500)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: BarlowFont }}>
                OUR SERVICES ECOSYSTEM
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-light)' }} />
            </div>
            <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(36px, 4vw, 56px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.1 }}>
              Integrated Services. <br/>
              <span style={{ color: 'var(--brand-500)' }}>Exponential Growth.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '16px', lineHeight: '28px', fontFamily: BarlowFont }}>
              Our full-funnel ecosystem is built to attract, engage, convert, and retain customers — driving <strong style={{ color: 'var(--brand-500)' }}>measurable growth</strong> at every stage.
            </p>
            <button className="ca-hover-popup" style={{
              alignSelf: 'flex-start',
              background: 'none', border: '1px solid var(--border-light)', borderRadius: '100px',
              padding: '8px 24px 8px 8px', display: 'flex', alignItems: 'center', gap: '12px',
              color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: BarlowFont, cursor: 'pointer'
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-card-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              See How It Works
            </button>
          </div>
        </div>

        {/* Ecosystem Map Area */}
        <div style={{ 
          position: 'relative', width: '100%', height: `${containerH}px`, 
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          marginTop: '40px'
        }}>
          
          {/* SVG Connectors */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--brand-500-soft)" />
                <stop offset="50%" stopColor="var(--brand-500-strong)" />
                <stop offset="100%" stopColor="var(--brand-500-soft)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Left Lines */}
            {ecosystemLeft.map((node, i) => (
              <path key={`l-${i}`} d={`M 320 ${node.y} C 460 ${node.y}, 460 ${centerY}, ${centerX} ${centerY}`} fill="none" stroke="var(--brand-500)" strokeWidth="1.5" opacity="0.6" filter="url(#glow)" />
            ))}
            {/* Right Lines */}
            {ecosystemRight.map((node, i) => (
              <path key={`r-${i}`} d={`M ${containerW - 320} ${node.y} C ${containerW - 460} ${node.y}, ${containerW - 460} ${centerY}, ${centerX} ${centerY}`} fill="none" stroke="var(--brand-500)" strokeWidth="1.5" opacity="0.6" filter="url(#glow)" />
            ))}
            {/* Top Line */}
            <path d={`M ${centerX} 120 C ${centerX} 250, ${centerX} 250, ${centerX} ${centerY}`} fill="none" stroke="var(--brand-500)" strokeWidth="1.5" opacity="0.6" filter="url(#glow)" />
            {/* Bottom Line */}
            <path d={`M ${centerX} 680 C ${centerX} 550, ${centerX} 550, ${centerX} ${centerY}`} fill="none" stroke="var(--brand-500)" strokeWidth="1.5" opacity="0.6" filter="url(#glow)" />

            {/* Connection Dots */}
            {ecosystemLeft.map((node, i) => <circle key={`dl-${i}`} cx="320" cy={node.y} r="4" fill="var(--brand-500)" filter="url(#glow)" />)}
            {ecosystemRight.map((node, i) => <circle key={`dr-${i}`} cx={containerW - 320} cy={node.y} r="4" fill="var(--brand-500)" filter="url(#glow)" />)}
            <circle cx={centerX} cy="120" r="4" fill="var(--brand-500)" filter="url(#glow)" />
            <circle cx={centerX} cy="680" r="4" fill="var(--brand-500)" filter="url(#glow)" />
          </svg>

          {/* Center Orb */}
          <div style={{
            position: 'absolute',
            left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            width: '320px', height: '320px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-secondary)',
            border: '2px solid var(--brand-500-strong)',
            boxShadow: '0 0 80px var(--brand-500-medium), inset 0 0 60px var(--brand-500-medium)',
            zIndex: 10,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center',
            padding: '40px', boxSizing: 'border-box',
          }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, var(--brand-500-soft) 0%, transparent 70%)' }}></div>
            {/* Catalyst icon generic shape */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--brand-500)" style={{ marginBottom: '16px', zIndex: 2, filter: 'drop-shadow(0 0 10px var(--brand-500-strong))' }}>
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
            </svg>
            <h3 style={{ margin: '0 0 16px 0', color: 'var(--text-primary)', fontSize: '28px', fontWeight: 800, fontFamily: InterFont, lineHeight: 1.1, zIndex: 2 }}>
              GROWTH<br/>ENGINE
            </h3>
            <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: BarlowFont, textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 2, marginBottom: '12px' }}>
              Strategy • Data • Creativity • Execution
            </span>
            <span style={{ color: 'var(--brand-500)', fontSize: '12px', fontWeight: 600, fontFamily: BarlowFont, zIndex: 2 }}>
              One Ecosystem. Infinite Impact.
            </span>
          </div>

          {/* Placed Nodes */}
          {/* Top */}
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, 0)', zIndex: 20 }}>
            <EcosystemNode title={ecosystemTop.title} desc={ecosystemTop.desc} icon={ecosystemTop.icon} align="center" />
          </div>
          {/* Bottom */}
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 0)', zIndex: 20 }}>
            <EcosystemNode title={ecosystemBottom.title} desc={ecosystemBottom.desc} icon={ecosystemBottom.icon} align="center" />
          </div>

          {/* Left Side */}
          {ecosystemLeft.map((node, i) => {
            const navMap: Record<string, string> = {
              'SEO': 'SEO & ORGANIC GROWTH',
              'GOOGLE ADS': 'PERFORMANCE MARKETING',
              'SOCIAL MEDIA': 'PERFORMANCE MARKETING',
              'EMAIL MARKETING': 'MARKETING AUTOMATION & CRM'
            };
            const target = navMap[node.title];
            return (
            <div key={`ln-${i}`} style={{ position: 'absolute', left: 0, top: `${node.y}px`, transform: 'translate(0, -50%)', zIndex: 20 }}>
              <EcosystemNode title={node.title} desc={node.desc} icon={node.icon} onClick={target && onNavigate ? () => onNavigate(target) : undefined} />
            </div>
            );
          })}

          {/* Right Side */}
          {ecosystemRight.map((node, i) => {
            const navMap: Record<string, string> = {
              'WEB DESIGN': 'WEB DESIGN & DEVELOPMENT',
              'BRANDING': 'BRAND STRATEGY & IDENTITY',
              'CONTENT MARKETING': 'CONTENT MARKETING',
              'ANALYTICS & REPORTING': 'SEO & ORGANIC GROWTH'
            };
            const target = navMap[node.title];
            return (
            <div key={`rn-${i}`} style={{ position: 'absolute', right: 0, top: `${node.y}px`, transform: 'translate(0, -50%)', zIndex: 20 }}>
              <EcosystemNode title={node.title} desc={node.desc} icon={node.icon} onClick={target && onNavigate ? () => onNavigate(target) : undefined} />
            </div>
            );
          })}

        </div>

        {/* Bottom Stats Strip */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: '24px',
          padding: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginTop: '60px'
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ color: 'var(--brand-500)' }}>{stat.icon}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '28px', fontWeight: 800, fontFamily: InterFont }}>{stat.value}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px', fontFamily: BarlowFont }}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
