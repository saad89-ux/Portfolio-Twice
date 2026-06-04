'use client';

import React from 'react';

const Barlow = '"Barlow", sans-serif';
const Inter = '"Inter", sans-serif';

const COLORS = {
  blue: '#0a84ff',
  purple: '#9168ff',
  cyan: '#00c2ff',
  blueBright: '#1a73ff',
  blueSoft: '#78b9ff',
  bgDark: '#070b1e',
  bgDarkDeep: '#030303',
  surface: '#080c20',
  surfaceAlt: '#10122b',
  cardDark: '#141428',
  white: '#ffffff',
  textMuted: 'rgba(235, 239, 255, 0.78)',
  textSoft: '#adb7d0',
  textDark: '#141414',
  textGrey: '#858585',
  lightBg: '#ffffff',
  lightCard: '#ffffff',
};

const ecosystemLeft = [
  {
    title: 'STRATEGY & PLANNING',
    desc: 'Align teams to your goals with clear strategic roadmaps.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    angle: -55,
  },
  {
    title: 'CONTENT & MESSAGING',
    desc: 'Craft compelling content that resonates and drives action.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    angle: 0,
  },
  {
    title: 'TECHNOLOGY & TOOLS',
    desc: 'Leverage the right tools and platforms for operational success.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    angle: 55,
  },
];

const ecosystemRight = [
  {
    title: 'DIGITAL MARKETING',
    desc: 'Reach and engage your audience across all digital channels.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11 6v12" />
      </svg>
    ),
    angle: -55,
  },
  {
    title: 'DATA & ANALYTICS',
    desc: 'Transform data into actionable insights for smarter decisions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    angle: 0,
  },
  {
    title: 'OPTIMIZATION & GROWTH',
    desc: 'Continuously refine strategies to maximize ROI and growth.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    angle: 55,
  },
];

const processSteps = [
  {
    title: 'Align',
    desc: 'We align strategy with your business objectives.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Activate',
    desc: 'We activate the right channels and tactics.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11 6v12" />
      </svg>
    ),
  },
  {
    title: 'Analyze',
    desc: 'We analyze performance and uncover opportunities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Optimize',
    desc: 'We optimize every element for better results.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: 'Grow',
    desc: 'We scale what works and drive sustainable growth.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: 'Succeed',
    desc: 'We deliver measurable results that matter.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

type EcosystemNodeProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  align: 'left' | 'right';
};

const EcosystemNode = ({ title, desc, icon, align }: EcosystemNodeProps) => (
  <div
    className="ecosystem-node-card"
    style={{
      display: 'flex',
      flexDirection: align === 'left' ? 'row' : 'row-reverse',
      alignItems: 'flex-start',
      gap: '14px',
      maxWidth: '300px',
      textAlign: align === 'left' ? 'left' : 'right',
    }}
  >
    <div
      style={{
        width: '48px',
        height: '48px',
        minWidth: '48px',
        borderRadius: '12px',
        backgroundColor: COLORS.cardDark,
        border: `1px solid rgba(10, 132, 255, 0.22)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.blueSoft,
      }}
    >
      {icon}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <h4
        style={{
          margin: '0 0 6px',
          color: COLORS.white,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          fontFamily: Barlow,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h4>
      <p
        style={{
          margin: 0,
          color: COLORS.textMuted,
          fontSize: '13px',
          lineHeight: '20px',
          fontFamily: Barlow,
        }}
      >
        {desc}
      </p>
    </div>
  </div>
);

export const ServiceDetailEcosystemSection: React.FC = () => {
  const hubSize = 260;
  const orbitR1 = 118;
  const orbitR2 = 158;

  return (
    <>
      <style>{`
        .service-ecosystem-grid {
          display: grid;
          grid-template-columns: minmax(200px, 1fr) minmax(280px, 340px) minmax(200px, 1fr);
          gap: clamp(16px, 3vw, 40px);
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .service-ecosystem-side {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 48px;
          min-height: 520px;
        }
        .service-ecosystem-side-right { align-items: flex-end; }
        .service-ecosystem-side-left { align-items: flex-start; }
        .service-ecosystem-hub-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 340px;
          margin: 0 auto;
        }
        .service-process-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 1100px) {
          .service-process-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 960px) {
          .service-ecosystem-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .service-ecosystem-side {
            min-height: auto;
            gap: 28px;
          }
          .service-ecosystem-side-right { align-items: flex-start; }
          .service-ecosystem-hub-wrap { order: -1; max-width: 280px; }
        }
        @media (max-width: 640px) {
          .service-process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 480px) {
          .service-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* —— SERVICE ECOSYSTEM (dark) —— */}
      <section
        className="service-ecosystem-dark"
        style={{
          width: '100%',
          padding: '100px clamp(24px, 5vw, 86px) 80px',
          background: `linear-gradient(180deg, ${COLORS.bgDarkDeep} 0%, ${COLORS.bgDark} 45%, ${COLORS.surface} 100%)`,
          boxSizing: 'border-box',
          borderTop: '1px solid rgba(10, 132, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span
              style={{
                display: 'inline-block',
                color: COLORS.blue,
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                fontFamily: Barlow,
                marginBottom: '20px',
              }}
            >
              SERVICE ECOSYSTEM
            </span>
            <h2
              style={{
                margin: '0 0 18px',
                color: COLORS.white,
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                fontFamily: Inter,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
              }}
            >
              A Connected Ecosystem That Drives Growth
            </h2>
            <p
              style={{
                margin: '0 auto',
                maxWidth: '640px',
                color: COLORS.textMuted,
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: Barlow,
              }}
            >
              Every service works together as one integrated system — strategy, content, technology, marketing,
              data, and optimization all connected to put your business at the center of sustainable growth.
            </p>
          </div>

          <div className="service-ecosystem-grid">
            <div className="service-ecosystem-side service-ecosystem-side-left">
              {ecosystemLeft.map((node) => (
                <EcosystemNode key={node.title} {...node} align="left" />
              ))}
            </div>

            <div className="service-ecosystem-hub-wrap">
              <svg
                viewBox="0 0 340 340"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
                aria-hidden
              >
                <defs>
                  <filter id="ecosystemDotGlow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle cx="170" cy="170" r={orbitR2} fill="none" stroke="rgba(10, 132, 255, 0.14)" strokeWidth="1" strokeDasharray="4 7" />
                <circle cx="170" cy="170" r={orbitR1} fill="none" stroke="rgba(145, 104, 255, 0.2)" strokeWidth="1" strokeDasharray="3 6" />
                {[
                  { x: 52, y: 95, side: 'left' },
                  { x: 52, y: 170, side: 'left' },
                  { x: 52, y: 245, side: 'left' },
                  { x: 288, y: 95, side: 'right' },
                  { x: 288, y: 170, side: 'right' },
                  { x: 288, y: 245, side: 'right' },
                ].map((dot, i) => (
                  <g key={`orbit-dot-${i}`}>
                    <line
                      x1={dot.side === 'left' ? 0 : 340}
                      y1={dot.y}
                      x2={dot.x}
                      y2={dot.y}
                      stroke={dot.side === 'left' ? 'rgba(10, 132, 255, 0.28)' : 'rgba(145, 104, 255, 0.28)'}
                      strokeWidth="1"
                      strokeDasharray="4 5"
                    />
                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="5"
                      fill={dot.side === 'left' ? COLORS.blue : COLORS.purple}
                      filter="url(#ecosystemDotGlow)"
                    />
                  </g>
                ))}
              </svg>

              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  width: hubSize,
                  height: hubSize,
                  maxWidth: '76%',
                  maxHeight: '76%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    padding: '4px',
                    background: `linear-gradient(135deg, ${COLORS.blue} 0%, ${COLORS.purple} 50%, ${COLORS.cyan} 100%)`,
                    boxShadow: `0 0 60px rgba(10, 132, 255, 0.35), 0 0 40px rgba(145, 104, 255, 0.2)`,
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: `radial-gradient(circle at 30% 30%, ${COLORS.surfaceAlt} 0%, ${COLORS.bgDark} 70%)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '24px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: COLORS.white,
                        fontSize: 'clamp(22px, 2.5vw, 28px)',
                        fontWeight: 800,
                        fontFamily: Inter,
                        lineHeight: 1.15,
                      }}
                    >
                      Your Business
                    </h3>
                    <p
                      style={{
                        margin: '10px 0 0',
                        color: COLORS.textSoft,
                        fontSize: '14px',
                        fontFamily: Barlow,
                        lineHeight: 1.4,
                      }}
                    >
                      Growth at the Center.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-ecosystem-side service-ecosystem-side-right">
              {ecosystemRight.map((node) => (
                <EcosystemNode key={node.title} {...node} align="right" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —— How Everything Works Together (light) —— */}
      <section
        className="service-ecosystem-light"
        style={{
          width: '100%',
          padding: '88px clamp(24px, 5vw, 86px) 100px',
          backgroundColor: COLORS.lightBg,
          boxSizing: 'border-box',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            margin: '0 0 48px',
            color: COLORS.textDark,
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 800,
            fontFamily: Inter,
            letterSpacing: '-0.02em',
          }}
        >
          How Everything Works Together
        </h2>

        <div className="service-process-grid">
          {processSteps.map((step) => (
            <article
              key={step.title}
              style={{
                backgroundColor: COLORS.lightCard,
                borderRadius: '16px',
                overflow: 'visible',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(10, 132, 255, 0.06)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '140px',
                  borderRadius: '16px 16px 0 0',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={step.image}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.white,
                  border: `2px solid ${COLORS.purple}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.purple,
                  marginTop: '-26px',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 4px 16px rgba(145, 104, 255, 0.15)',
                }}
              >
                {step.icon}
              </div>

              <div style={{ padding: '20px 16px 24px', width: '100%', boxSizing: 'border-box' }}>
                <h3
                  style={{
                    margin: '0 0 10px',
                    color: COLORS.textDark,
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: Inter,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: COLORS.textGrey,
                    fontSize: '13px',
                    lineHeight: '22px',
                    fontFamily: Barlow,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
