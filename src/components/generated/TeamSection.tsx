import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const topStats = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: '35+',
    label: 'Growth Experts\n& Creators',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    value: '10+',
    label: 'Years Average\nExperience',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    value: '25+',
    label: 'Industries\nServed',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    value: '3,000+',
    label: 'Successful Projects\nDelivered',
  },
];

const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    desc: 'Digital strategist with a vision to build growth-focused brands.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sophia Bennett',
    role: 'Head of Strategy',
    desc: 'Turns market insights into powerful growth strategies.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Daniel Reed',
    role: 'Creative Director',
    desc: 'Crafts compelling brand stories that connect and convert.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Olivia Parker',
    role: 'Head of Performance',
    desc: 'Data-driven expert focused on maximizing ROI and growth.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Noah Williams',
    role: 'Lead Developer',
    desc: 'Builds scalable digital solutions that drive real impact.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Isabella Brooks',
    role: 'Content Lead',
    desc: 'Creates content that engages, educates, and drives growth.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
];

export const TeamSection: React.FC = () => {
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
      {/* Background decorations */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '50%',
          height: '40%',
          background: 'radial-gradient(ellipse at left, rgba(0, 194, 255, 0.1), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
        {/* Top Section: Title & Stats Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Left Text Block */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                OUR TEAM
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-light-alt)' }} />
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
              A Team of Thinkers,
              <br />
              Creators & <span style={{ color: '#00c2ff' }}>Growth Architects.</span>
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
              We're a team of strategists, creatives, analysts, and problem solvers
              united by one mission — to fuel meaningful growth for brands worldwide.
            </p>

            <button
              className="ca-hover-popup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(0, 194, 255, 0.4)',
                color: 'var(--text-primary)',
                fontFamily: BarlowFont,
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                width: 'fit-content',
                marginTop: '8px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#00c2ff' }}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Work With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Right Stats Grid */}
          <div
            style={{
              flex: '1 1 500px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
            }}
          >
            {topStats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(0, 194, 255, 0.05)',
                    border: '1px solid rgba(0, 194, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00c2ff',
                    flexShrink: 0,
                  }}
                >
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '28px',
                      fontWeight: 800,
                      fontFamily: InterFont,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '13px',
                      fontFamily: BarlowFont,
                      lineHeight: '18px',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Cards Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="ca-hover-popup"
              style={{
                position: 'relative',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Image Section */}
              <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                {/* Glowing mesh background behind person */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '120%',
                    background: 'radial-gradient(circle, rgba(0, 194, 255, 0.15) 0%, transparent 60%)',
                    border: '1px dashed rgba(0, 194, 255, 0.2)',
                    borderRadius: '50%',
                    zIndex: 1,
                  }}
                />
                
                {/* Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 3,
                    padding: '6px 12px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 194, 255, 0.2)',
                    border: '1px solid rgba(0, 194, 255, 0.3)',
                    color: 'var(--text-primary)',
                    fontSize: '10px',
                    fontWeight: 700,
                    fontFamily: BarlowFont,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {member.role}
                </div>

                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    zIndex: 2,
                    filter: 'contrast(1.05) brightness(0.9)',
                  }}
                />
                
                {/* Gradient fade to blend with card bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '50%',
                    background: 'linear-gradient(180deg, transparent 0%, var(--bg-card) 100%)',
                    zIndex: 3,
                  }}
                />
              </div>

              {/* Text Section */}
              <div style={{ padding: '0 24px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: InterFont }}>
                    {member.name}
                  </h4>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-card-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
                
                <span style={{ color: '#00c2ff', fontSize: '12px', fontWeight: 600, fontFamily: BarlowFont, marginBottom: '16px' }}>
                  {member.role}
                </span>

                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '20px', fontFamily: BarlowFont }}>
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            background: 'var(--bg-card-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            padding: '32px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Left Block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00c2ff', flexShrink: 0 }}>
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: BarlowFont }}>
                Different minds. One mission.
              </span>
              <span style={{ color: '#00c2ff', fontSize: '16px', fontWeight: 700, fontFamily: BarlowFont }}>
                Building digital growth that lasts.
              </span>
            </div>
          </div>

          {/* Middle Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 1 300px', maxWidth: '400px' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '22px', fontFamily: BarlowFont }}>
              We combine creativity, data, and technology to build strategies that scale brands.
            </p>
            <span style={{ color: '#00c2ff', fontSize: '20px', fontFamily: '"Caveat", "Brush Script MT", cursive', fontStyle: 'italic' }}>
              Together We Grow.
            </span>
          </div>

          {/* Right Play Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              className="ca-hover-popup"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(0, 194, 255, 0.1)',
                border: '1px solid rgba(0, 194, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500, fontFamily: BarlowFont }}>
              Meet The Team
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
