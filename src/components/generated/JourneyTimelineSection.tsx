import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const timelineData = [
  {
    year: '2018',
    title: 'The Beginning',
    desc: 'We started with a simple idea — help businesses grow online with honest strategies and creative marketing.',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c0-4-3-8-8-8 0 4 3 8 8 8z" />
        <path d="M12 22c0-4 3-8 8-8 0 4-3 8-8 8z" />
        <path d="M12 22V10" />
        <path d="M12 10c0-3 2-6 5-6 2 0 4 2 4 5 0 3-3 6-9 6" />
      </svg>
    ),
  },
  {
    year: '2019',
    title: 'Building the Team',
    desc: 'We grew our team of passionate marketers, designers, and strategists who share the same vision and values.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    year: '2020',
    title: 'First Big Wins',
    desc: 'Our strategies started delivering real results. We achieved consistent growth for our clients and long-term partnerships.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="2 12 8 6 14 12 22 4" />
      </svg>
    ),
  },
  {
    year: '2021',
    title: 'Expanding Our Reach',
    desc: 'We expanded our services and started working with clients across different industries and countries.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    year: '2023',
    title: 'Scaling New Heights',
    desc: 'New tools, better processes, and a client-first approach helped us reach new milestones and break records.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4" />
        <path d="M12 15v5s3.03-.55 4-2" />
      </svg>
    ),
  },
  {
    year: '2025 & Beyond',
    title: 'The Future Ahead',
    desc: 'We continue to innovate, evolve, and push boundaries to help brands grow and create a bigger impact together.',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const statsData = [
  {
    value: '3000+',
    label: 'Happy Clients',
    sublabel: 'and growing',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '50+',
    label: 'Industries Served',
    sublabel: 'worldwide',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-1 1H8v4h8v-4h-1c-.53-.02-1-.45-1-1v-2.34" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    value: '10M+',
    label: 'Revenue Generated',
    sublabel: 'for our clients',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    value: '95%',
    label: 'Client Retention',
    sublabel: 'rate',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  },
];

export const JourneyTimelineSection: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: '100px clamp(24px, 6vw, 90px)',
        backgroundColor: 'var(--bg-primary)',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Subtle Starry/Glow background effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% -10%, rgba(0, 194, 255, 0.15), transparent 40%), radial-gradient(circle at 90% 90%, rgba(0, 194, 255, 0.05), transparent 50%)',
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
          gap: '80px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '3px', height: '18px', borderRadius: '4px', backgroundColor: '#00c2ff' }} />
            <span
              style={{
                color: '#00c2ff',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                fontFamily: BarlowFont,
              }}
            >
              Our Journey
            </span>
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
            Every Milestone Tells <span style={{ color: '#00c2ff' }}>Our Story</span>
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '16px',
              lineHeight: '28px',
              fontFamily: BarlowFont,
              margin: 0,
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            From a small team with a big vision to a full-service digital marketing agency helping brands worldwide — here's how we got here.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', width: '100%', marginTop: '20px' }}>
          {/* Horizontal Line connecting nodes */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '0',
              right: '0',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 194, 255, 0.8) 10%, rgba(0, 194, 255, 0.8) 90%, transparent 100%)',
              zIndex: 1,
            }}
          >
             {/* Left dashed part */}
             <div style={{ position: 'absolute', left: '-5%', width: '15%', height: '2px', borderTop: '2px dotted rgba(0, 194, 255, 0.4)' }}></div>
             {/* Right dashed part */}
             <div style={{ position: 'absolute', right: '-5%', width: '15%', height: '2px', borderTop: '2px dotted rgba(0, 194, 255, 0.4)' }}></div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '24px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {timelineData.map((item, index) => (
              <div key={item.year} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                
                {/* Timeline Node Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(8, 12, 32, 1)',
                    border: '1px solid rgba(0, 194, 255, 0.6)',
                    boxShadow: '0 0 24px rgba(0, 194, 255, 0.25), inset 0 0 16px rgba(0, 194, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00c2ff',
                  }}
                >
                  {item.icon}
                </div>

                {/* Year Label */}
                <div
                  style={{
                    color: '#00c2ff',
                    fontSize: '18px',
                    fontWeight: 800,
                    fontFamily: InterFont,
                  }}
                >
                  {item.year}
                </div>

                {/* Image Card */}
                <div
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.4)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    aspectRatio: '1/1',
                  }}
                >
                  <img
                    className="ca-hover-popup"
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.85) contrast(1.1)',
                      transition: 'all 0.5s ease',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ textAlign: 'left', width: '100%', padding: '0 4px' }}>
                  <h4
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: InterFont,
                      margin: '0 0 12px 0',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '13px',
                      lineHeight: '22px',
                      fontFamily: BarlowFont,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div
          style={{
            marginTop: '20px',
            background: 'linear-gradient(90deg, rgba(8, 12, 32, 0.6) 0%, rgba(12, 16, 42, 0.8) 50%, rgba(8, 12, 32, 0.6) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '24px',
            padding: '36px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.3)',
            position: 'relative',
          }}
        >
          {statsData.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 200px' }}>
              {/* Stat Icon */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 194, 255, 0.15) 0%, transparent 70%)',
                  border: '1px solid rgba(0, 194, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00c2ff',
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </div>
              
              {/* Stat Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div
                  style={{
                    color: '#00c2ff',
                    fontSize: '28px',
                    fontWeight: 800,
                    fontFamily: InterFont,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: BarlowFont,
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '13px',
                      fontWeight: 400,
                      fontFamily: BarlowFont,
                    }}
                  >
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
