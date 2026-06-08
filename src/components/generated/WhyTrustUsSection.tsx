import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const leftCards = [
  {
    num: '01',
    title: 'Proven Track Record',
    desc: 'We deliver consistent results that speak louder than promises.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Transparent Process',
    desc: "You'll always know what we're doing, why we're doing it, and how it's driving results.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Client-First Mentality',
    desc: 'Your goals become our goals. We grow when you grow.',
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

const rightCards = [
  {
    num: '04',
    title: 'Data-Driven Strategies',
    desc: 'Every decision is backed by real data, insights, and performance metrics.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H15" />
        <path d="M12 15V21" />
        <path d="M12 2C8.68629 2 6 4.68629 6 8C6 10.5 7.5 12.5 9 13.5V15H15V13.5C16.5 12.5 18 10.5 18 8C18 4.68629 15.3137 2 12 2Z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'No Outsourcing',
    desc: 'Our in-house experts handle your project from start to finish.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Dedicated Support',
    desc: "We're always here—before, during, and after the project.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const bottomStats = [
  {
    value: '3,000+',
    label: 'Happy Clients',
    sub: 'Worldwide',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-1 1H8v4h8v-4h-1c-.53-.02-1-.45-1-1v-2.34" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    value: '25+',
    label: 'Countries',
    sub: 'Served',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    value: '10M+',
    label: 'Leads Generated',
    sub: 'for Our Clients',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    value: '95%',
    label: 'Client Retention',
    sub: 'Rate',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
  {
    value: '8+',
    label: 'Years of Proven',
    sub: 'Excellence',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const FeatureCard: React.FC<{
  card: { num: string; title: string; desc: string; icon: React.ReactNode };
}> = ({ card }) => (
  <div
    style={{
      position: 'relative',
      borderRadius: '16px',
      backgroundColor: '#070a18',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '28px 24px',
      display: 'flex',
      gap: '20px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      cursor: 'default',
    }}
  >
    {/* Large Background Number */}
    <span
      style={{
        position: 'absolute',
        bottom: '-10px',
        right: '16px',
        fontSize: '72px',
        fontWeight: 900,
        fontFamily: InterFont,
        color: 'rgba(255, 255, 255, 0.03)',
        lineHeight: 1,
        pointerEvents: 'none',
      }}
    >
      {card.num}
    </span>

    {/* Icon */}
    <div
      style={{
        width: '56px',
        height: '56px',
        minWidth: '56px',
        borderRadius: '16px',
        backgroundColor: 'var(--brand-500-soft)',
        border: '1px solid var(--brand-500-medium)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--brand-500)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {card.icon}
    </div>

    {/* Text */}
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h4
        style={{
          color: 'var(--text-primary)',
          fontSize: '18px',
          fontWeight: 700,
          fontFamily: InterFont,
          margin: 0,
        }}
      >
        {card.title}
      </h4>
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '14px',
          lineHeight: '22px',
          fontFamily: BarlowFont,
          margin: 0,
        }}
      >
        {card.desc}
      </p>
    </div>
  </div>
);

export const WhyTrustUsSection: React.FC = () => {
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
      {/* Container */}
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
        {/* Top Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <span
              style={{
                color: 'var(--brand-500)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                fontFamily: BarlowFont,
              }}
            >
              Why Clients Trust Us
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
            Trust Is Earned. Results <span style={{ color: 'var(--brand-500)' }}>Keep It.</span>
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '16px',
              lineHeight: '28px',
              fontFamily: BarlowFont,
              margin: 0,
              maxWidth: '680px',
              textAlign: 'center',
            }}
          >
            We combine transparency, strategy, and execution to deliver measurable growth.
            <br />
            That's why leading brands choose us—and stay with us.
          </p>
        </div>

        {/* Main Content Layout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          {/* Left Column */}
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {leftCards.map((card) => (
              <FeatureCard key={card.num} card={card} />
            ))}
          </div>

          {/* Center Graphic */}
          <div
            style={{
              width: '400px',
              height: '400px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Outer abstract glowing rings */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '1px dashed var(--brand-500-strong)',
                boxShadow: '0 0 60px var(--brand-500-soft), inset 0 0 60px var(--brand-500-soft)',
                animation: 'spin 60s linear infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                width: '80%',
                height: '110%',
                borderRadius: '50%',
                border: '1px solid var(--brand-500-soft)',
                boxShadow: 'inset 0 0 40px var(--brand-500-soft)',
              }}
            />

            {/* Inner Glowing Core */}
            <div
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--brand-500-medium), var(--brand-500-soft))',
                border: '1px solid var(--brand-500-strong)',
                boxShadow: '0 0 80px var(--brand-500-strong), inset 0 0 30px var(--brand-500-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <span style={{ fontSize: '72px', fontWeight: 900, color: 'var(--brand-500)', fontFamily: InterFont, textShadow: '0 0 20px var(--brand-500-strong)' }}>
                CA
              </span>
            </div>

            {/* Trusted Badge Box */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                zIndex: 3,
                backgroundColor: 'rgba(7, 10, 24, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '16px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 16px 32px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: BarlowFont, fontWeight: 500 }}>
                Trusted by 3,000+
                <br />
                Businesses Worldwide
              </span>
              {/* Avatars */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i + 10}`}
                    alt="avatar"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '2px solid #050816',
                      marginLeft: i > 1 ? '-8px' : '0',
                    }}
                  />
                ))}
              </div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', color: 'var(--brand-500)' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {rightCards.map((card) => (
              <FeatureCard key={card.num} card={card} />
            ))}
          </div>
        </div>

        {/* Bottom Wide Stats Bar */}
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(7, 10, 24, 0.6) 0%, rgba(7, 10, 24, 0.8) 50%, rgba(7, 10, 24, 0.6) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.3)',
            marginTop: '20px',
          }}
        >
          {bottomStats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Icon Ring */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--brand-500-soft)',
                  border: '1px solid var(--brand-500-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-500)',
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </div>

              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '28px',
                    fontWeight: 800,
                    fontFamily: InterFont,
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '13px',
                    fontFamily: BarlowFont,
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                  <br />
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
