import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

const features = [
  {
    icon: '🎯',
    title: 'Strategic Approach',
    desc: 'Custom strategies aligned with your business goals.',
  },
  {
    icon: '✨',
    title: 'Creative Excellence',
    desc: 'Innovative ideas and stunning designs that drive results.',
  },
  {
    icon: '📈',
    title: 'Performance Driven',
    desc: 'Data-backed execution that maximizes ROI.',
  },
];

const stats = [
  { value: '8+', label: 'Years of Experience' },
  { value: '3000+', label: 'Projects Delivered' },
  { value: '50+', label: 'Industries Served' },
  { value: '95%', label: 'Client Retention Rate' },
];

const floatingCards = [
  {
    icon: '📊',
    title: 'Data-Driven Strategies',
    desc: 'We use insights, not guesses.',
    top: '12%',
    left: '8%',
  },
  {
    icon: '🚀',
    title: 'Results Focused',
    desc: 'Real metrics. Real growth.',
    bottom: '38%',
    left: '4%',
  },
  {
    icon: '🤝',
    title: 'Growth Partners',
    desc: 'We grow when you grow.',
    bottom: '10%',
    left: '12%',
  },
];

export const CompanyIntroSection: React.FC = () => {
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
      }}
    >
      {/* Subtle glow background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, var(--brand-500-soft), transparent 40%), radial-gradient(circle at 80% 30%, var(--brand-500-soft), transparent 35%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* LEFT — Visual with floating cards */}
        <div
          style={{
            position: 'relative',
            minHeight: '560px',
            borderRadius: '32px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Background office image */}
          <img
            className="ca-hover-popup"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="Modern office workspace"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.35) contrast(1.1)',
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(3, 3, 3, 0.3) 0%, rgba(7, 10, 24, 0.85) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Center logo/brand mark */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, var(--brand-500-medium) 0%, var(--brand-500-soft) 50%, transparent 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, var(--brand-500-strong), var(--brand-500-soft))',
                border: '1px solid var(--brand-500-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(20px)',
              }}
            >
              <span
                style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: 'var(--brand-500)',
                  fontFamily: InterFont,
                }}
              >
                CA
              </span>
            </div>
          </div>

          {/* Floating cards */}
          {floatingCards.map((card, idx) => (
            <div
              key={card.title}
              className="ca-interactive-card"
              style={{
                position: 'absolute',
                ...(card.top ? { top: card.top } : {}),
                ...(card.bottom ? { bottom: card.bottom } : {}),
                left: card.left,
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                backdropFilter: 'blur(12px)',
                maxWidth: '260px',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  minWidth: '38px',
                  borderRadius: '12px',
                  background: 'var(--brand-500-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                }}
              >
                {card.icon}
              </div>
              <div>
                <div
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontFamily: BarlowFont,
                    marginBottom: '2px',
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '12px',
                    fontFamily: BarlowFont,
                    lineHeight: '16px',
                  }}
                >
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '4px',
                height: '24px',
                borderRadius: '999px',
                backgroundColor: 'var(--brand-500)',
              }}
            />
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
              Company Introduction
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(36px, 3.5vw, 52px)',
              fontFamily: InterFont,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            We&apos;re More Than Just A Marketing{' '}
            <span style={{ color: 'var(--brand-500)' }}>Agency.</span>
          </h2>

          {/* Description */}
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '16px',
              lineHeight: '28px',
              fontFamily: BarlowFont,
              margin: 0,
              maxWidth: '540px',
            }}
          >
            We are your growth partner, strategist, and creative team—dedicated
            to building powerful digital experiences that attract, engage, and
            convert your ideal customers.
          </p>

          {/* Features Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'var(--brand-500-soft)',
                    border: '1px solid var(--brand-500-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  {feature.icon}
                </div>
                <h4
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontFamily: BarlowFont,
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    fontFamily: BarlowFont,
                    lineHeight: '22px',
                    margin: 0,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              padding: '24px',
              borderRadius: '20px',
              backgroundColor: 'var(--bg-card-alt)',
              border: '1px solid var(--border-light)',
              marginTop: '8px',
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  paddingLeft: idx > 0 ? '16px' : '0',
                  borderLeft:
                    idx > 0
                      ? '1px solid var(--border-light)'
                      : 'none',
                }}
              >
                <span
                  style={{
                    color: 'var(--brand-500)',
                    fontSize: '28px',
                    fontFamily: BarlowFont,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '12px',
                    fontFamily: BarlowFont,
                    fontWeight: 500,
                    lineHeight: '16px',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
