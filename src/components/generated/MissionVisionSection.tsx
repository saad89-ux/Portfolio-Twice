import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const missionFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Client First',
    desc: 'Your success is our priority.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4" />
        <path d="M12 15v5s3.03-.55 4-2" />
      </svg>
    ),
    title: 'Results Driven',
    desc: 'We focus on real outcomes.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Innovative',
    desc: 'We use creative ideas that work.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Transparent',
    desc: 'Honest communication at every step.',
  },
];

const visionFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global Impact',
    desc: 'Empowering brands across the world.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Industry Leading',
    desc: 'Setting benchmarks in digital excellence.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c0-4-3-8-8-8 0 4 3 8 8 8z" />
        <path d="M12 22c0-4 3-8 8-8 0 4-3 8-8 8z" />
        <path d="M12 22V10" />
        <path d="M12 10c0-3 2-6 5-6 2 0 4 2 4 5 0 3-3 6-9 6" />
      </svg>
    ),
    title: 'Sustainable Growth',
    desc: 'Building long-term value for all.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Future Focused',
    desc: "Preparing today for tomorrow's opportunities.",
  },
];

export const MissionVisionSection: React.FC = () => {
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
        {/* Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-light-alt)' }} />
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
              Mission & Vision
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
            Driven by Purpose. <span style={{ color: 'var(--brand-500)' }}>Focused on Impact.</span>
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
            Our mission defines what we do today, and our vision inspires where we're headed tomorrow.
            <br />
            Together, they drive our commitment to create meaningful growth for every brand we partner with.
          </p>
        </div>

        {/* Cards Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
            width: '100%',
          }}
        >
          {/* Mission Card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              border: '1px solid var(--brand-500-medium)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-secondary)',
              minHeight: '600px',
              boxShadow: '0 32px 64px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Background Image & Overlays */}
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
              alt="Mountain Starry Night"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(5,8,22,0.95) 0%, rgba(5,8,22,0.6) 40%, rgba(5,8,22,0.95) 80%, #050816 100%)',
              }}
            />
            {/* Glowing swoosh (decorative) */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '120%',
                height: '40%',
                borderTop: '1px dashed var(--brand-500-strong)',
                borderRadius: '50%',
                transform: 'rotate(-10deg)',
                boxShadow: 'inset 0 20px 40px var(--brand-500-soft)',
              }}
            />

            {/* Card Content */}
            <div style={{ position: 'relative', zIndex: 2, padding: '48px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--brand-500-medium) 0%, var(--brand-500-soft) 70%, transparent 100%)',
                  border: '1px solid var(--brand-500-strong)',
                  boxShadow: '0 0 40px var(--brand-500-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  marginBottom: '32px',
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              {/* Title */}
              <h3
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '24px',
                  fontWeight: 800,
                  fontFamily: InterFont,
                  letterSpacing: '0.05em',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                OUR <span style={{ color: 'var(--brand-500)' }}>MISSION</span>
              </h3>
              
              <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--brand-500)', marginBottom: '24px' }} />

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: '26px',
                  fontFamily: BarlowFont,
                  textAlign: 'center',
                  margin: '0 0 auto 0',
                  maxWidth: '400px',
                }}
              >
                We help businesses grow with result-driven digital marketing strategies that attract, engage, and convert. Our mission is to deliver measurable results through innovation, transparency, and unwavering dedication.
              </p>

              {/* Features Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '16px',
                  width: '100%',
                  marginTop: '48px',
                }}
              >
                {missionFeatures.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--brand-500-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-500)',
                      }}
                    >
                      {feat.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: 700, fontFamily: BarlowFont }}>{feat.title}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '11px', lineHeight: '16px', fontFamily: BarlowFont }}>{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              border: '1px solid var(--brand-500-medium)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-secondary)',
              minHeight: '600px',
              boxShadow: '0 32px 64px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Background Image & Overlays */}
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="Futuristic Tech Landscape"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(5,8,22,0.95) 0%, rgba(5,8,22,0.6) 40%, rgba(5,8,22,0.95) 80%, #050816 100%)',
              }}
            />
            
            {/* Card Content */}
            <div style={{ position: 'relative', zIndex: 2, padding: '48px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--brand-500-medium) 0%, var(--brand-500-soft) 70%, transparent 100%)',
                  border: '1px solid var(--brand-500-strong)',
                  boxShadow: '0 0 40px var(--brand-500-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  marginBottom: '32px',
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              {/* Title */}
              <h3
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '24px',
                  fontWeight: 800,
                  fontFamily: InterFont,
                  letterSpacing: '0.05em',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                OUR <span style={{ color: 'var(--brand-500)' }}>VISION</span>
              </h3>
              
              <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--brand-500)', marginBottom: '24px' }} />

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: '26px',
                  fontFamily: BarlowFont,
                  textAlign: 'center',
                  margin: '0 0 auto 0',
                  maxWidth: '400px',
                }}
              >
                To become the most trusted digital growth partner for ambitious brands worldwide, setting new standards in performance, creativity, and client success.
              </p>

              {/* Features Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '16px',
                  width: '100%',
                  marginTop: '48px',
                }}
              >
                {visionFeatures.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--brand-500-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-500)',
                      }}
                    >
                      {feat.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: 700, fontFamily: BarlowFont }}>{feat.title}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '11px', lineHeight: '16px', fontFamily: BarlowFont }}>{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote Banner */}
        <div
          style={{
            marginTop: '16px',
            padding: '32px',
            borderRadius: '16px',
            backgroundColor: 'var(--bg-card-alt)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            boxShadow: '0 16px 32px rgba(0, 0, 0, 0.05)',
            textAlign: 'center',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--brand-500)', flexShrink: 0 }}>
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
          </svg>
          <p
            style={{
              margin: 0,
              color: 'var(--text-secondary)',
              fontSize: '18px',
              fontFamily: BarlowFont,
              fontWeight: 500,
            }}
          >
            We don't just aim for visibility. We aim for <span style={{ color: 'var(--brand-500)', fontWeight: 700 }}>meaningful impact</span> that drives <span style={{ color: 'var(--brand-500)', fontWeight: 700 }}>real business growth</span>.
          </p>
        </div>

      </div>
    </section>
  );
};
