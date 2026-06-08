import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const valuesData = [
  {
    num: '01',
    title: 'Transparency',
    desc: "We believe in radical honesty and open communication. Our clients always know what we're doing, why we're doing it, and how it's performing.",
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=400&q=80',
    active: true,
  },
  {
    num: '02',
    title: 'Excellence',
    desc: 'We pursue excellence in everything we do. From strategy to execution, we never settle for "good enough".',
    image: 'https://images.unsplash.com/photo-1614850715649-1d0106293cb1?auto=format&fit=crop&w=400&q=80',
    active: false,
  },
  {
    num: '03',
    title: 'Innovation',
    desc: 'We embrace creativity, challenge the status quo, and use data & technology to build smarter growth strategies.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80',
    active: false,
  },
  {
    num: '04',
    title: 'Partnership',
    desc: "We grow when our clients grow. We're not just a service provider, we're a long-term growth partner.",
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    active: false,
  },
  {
    num: '05',
    title: 'Accountability',
    desc: "We take full ownership of our work and results. We're accountable, reliable, and always deliver what we promise.",
    image: 'https://images.unsplash.com/photo-1633398361682-1c20b22dfb8f?auto=format&fit=crop&w=400&q=80',
    active: false,
  },
];

const leftStats = [
  { value: '3K+', label: 'Happy Clients' },
  { value: '50+', label: 'Industries' },
  { value: '10M+', label: 'Leads Generated' },
];

const bottomFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text1: 'Trusted by 3000+',
    text2: 'Businesses',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    text1: 'Serving Clients in',
    text2: '25+ Countries',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text1: 'Built by Experts,',
    text2: 'Driven by Passion',
  },
];

export const CoreValuesSection: React.FC = () => {
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
      {/* Background glowing mesh effect */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '50%',
          height: '40%',
          background: 'radial-gradient(ellipse at bottom left, var(--brand-500-medium), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '0',
          width: '30%',
          height: '50%',
          background: 'radial-gradient(ellipse at right, var(--brand-500-soft), transparent 70%)',
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
        {/* Top Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-light)' }} />
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
              Core Values
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-light)' }} />
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
            The Standards We <span style={{ color: 'var(--brand-500)' }}>Live By.</span>
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
            These values aren't just words on a wall — they shape every strategy,
            every decision, and every result we deliver.
          </p>
        </div>

        {/* Main Content (Left + Right Carousel) */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column */}
          <div
            style={{
              flexShrink: 0,
              width: '320px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              paddingTop: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  color: 'var(--brand-500)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: BarlowFont,
                }}
              >
                OUR PROMISE
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-light)' }} />
            </div>

            <h3
              style={{
                color: 'var(--text-primary)',
                fontSize: '36px',
                fontWeight: 800,
                fontFamily: InterFont,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              We don't follow trends.
              <br />
              <span style={{ color: 'var(--brand-500)' }}>We set standards.</span>
            </h3>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '15px',
                lineHeight: '26px',
                fontFamily: BarlowFont,
                margin: 0,
              }}
            >
              Our core values are the foundation of our culture and the reason our clients trust us to grow their brands.
            </p>

            <button
              className="ca-hover-popup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'none',
                border: 'none',
                padding: '12px 0',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                fontFamily: BarlowFont,
                fontWeight: 700,
                fontSize: '15px',
                width: 'fit-content',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-light-alt)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              Watch Our Story
            </button>

            {/* Left Stats */}
            <div style={{ display: 'flex', gap: '24px', marginTop: 'auto', paddingTop: '40px' }}>
              {leftStats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'var(--brand-500)', fontSize: '24px', fontWeight: 800, fontFamily: InterFont }}>{stat.value}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: BarlowFont }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Cards) */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              paddingBottom: '20px',
              width: '100%',
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none',  /* IE and Edge */
            }}
          >
            {valuesData.map((card, idx) => (
              <div
                key={card.num}
                style={{
                  flexShrink: 0,
                  width: card.active ? '360px' : '280px',
                  borderRadius: '24px',
                  border: card.active ? '1px solid var(--brand-500)' : '1px solid var(--border-light)',
                  backgroundColor: card.active ? 'var(--brand-500-soft)' : 'var(--bg-card)',
                  boxShadow: card.active ? '0 0 40px var(--brand-500-medium), inset 0 0 20px var(--brand-500-soft)' : 'none',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    color: card.active ? 'var(--brand-500)' : 'var(--brand-500-strong)',
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: InterFont,
                    marginBottom: '20px',
                  }}
                >
                  {card.num}
                </span>

                {/* Title */}
                <h4
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '24px',
                    fontWeight: 800,
                    fontFamily: InterFont,
                    marginBottom: '16px',
                  }}
                >
                  {card.title}
                </h4>

                {/* Desc */}
                <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                  {card.active && <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--brand-500)' }} />}
                  <p
                    style={{
                      color: card.active ? 'var(--text-primary)' : 'var(--text-muted)',
                      fontSize: '14px',
                      lineHeight: '24px',
                      fontFamily: BarlowFont,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Image (Abstract shape) */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '40px',
                    width: '100%',
                    height: card.active ? '200px' : '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    className="ca-hover-popup"
                    src={card.image}
                    alt={card.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: card.active ? 'brightness(1.2) hue-rotate(-20deg) contrast(1.2)' : 'brightness(0.7) hue-rotate(-20deg) contrast(1.2)',
                      mixBlendMode: 'screen',
                    }}
                  />
                </div>
                
                {/* Active card bottom glow */}
                {card.active && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-50px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '200px',
                      height: '100px',
                      background: 'radial-gradient(ellipse, var(--brand-500-strong), transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            marginTop: '20px',
            background: 'var(--bg-card-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            padding: '32px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Left Quote */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 400px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--brand-500)', flexShrink: 0 }}>
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
            <p
              style={{
                margin: 0,
                color: 'var(--text-secondary)',
                fontSize: '15px',
                fontFamily: BarlowFont,
                fontWeight: 500,
                lineHeight: '24px',
              }}
            >
              Our values are more than principles — they're the reason<br />
              brands trust us and teams love working with us.
            </p>
          </div>

          {/* Right Features */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {bottomFeatures.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--brand-500-soft)',
                    border: '1px solid var(--brand-500-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-500)',
                  }}
                >
                  {feat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont }}>{feat.text1}</span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: 600, fontFamily: BarlowFont }}>{feat.text2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
