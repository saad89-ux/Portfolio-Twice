import React, { useState } from 'react';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const BarlowFont = '"Barlow", sans-serif';
const assetBase = 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets';
const aboutStats = [{
  value: '3,000+',
  label: 'Happy Clients'
}, {
  value: '50+',
  label: 'Industries Served'
}, {
  value: '$5M+',
  label: 'Revenue Generated'
}, {
  value: '250%',
  label: 'Avg. Growth Achieved'
}];
const featureChips = ['Results Driven', 'Client First Approach', 'Transparent Process', 'Growth Focused'];
const reviewAvatars = ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'];
const PrimaryButton: React.FC<{
  children: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
}> = ({
  children,
  width,
  height,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <button className="ca-interactive-btn" onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
    width: width || '170px',
    height: height || '46px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 22px',
    backgroundColor: isHovered ? 'var(--brand-500-strong)' : 'var(--brand-500-strong)',
    borderRadius: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: isHovered ? '0 18px 36px var(--brand-500-strong)' : '0 12px 20px var(--brand-500-medium)'
  }}>
      <span style={{
      color: 'var(--text-primary)',
      fontSize: '14px',
      fontFamily: BarlowFont,
      fontWeight: 700,
      lineHeight: '1'
    }}>
        {children}
      </span>
    </button>;
};
export const AboutSection: React.FC<BaseComponentProps> = ({
  className,
  style
}) => {
  return <div className={`about-section ca-fade-in ${className || ''}`} style={{
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px clamp(24px, 6vw, 90px) 90px',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'visible',
    borderRadius: '0',
    ...style
  }}>
      <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle at 14% 18%, var(--brand-500-medium), transparent 24%), radial-gradient(circle at 86% 22%, var(--brand-500-soft), transparent 22%), radial-gradient(circle at 72% 38%, var(--brand-500-soft), transparent 26%), radial-gradient(circle at 50% 88%, var(--brand-500-medium), transparent 32%), radial-gradient(circle at 18% 72%, var(--brand-600-soft), transparent 28%)',
      pointerEvents: 'none'
    }} />
      <div style={{
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: '48px',
      alignItems: 'center'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <h2 style={{
          color: 'var(--text-primary)',
          fontSize: 'clamp(40px, 4vw, 64px)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          lineHeight: '0.98',
          margin: 0
        }}>
            Hi, I&apos;m Muhammad Ahsan
          </h2>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          maxWidth: '640px'
        }}>
            <p style={{
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontFamily: BarlowFont,
            fontWeight: 500,
            lineHeight: '32px',
            margin: 0
          }}>
              I turn strategies into real results and businesses into market leaders.
            </p>
            <p style={{
            color: 'var(--text-muted)',
            fontSize: '16px',
            fontFamily: BarlowFont,
            fontWeight: 400,
            lineHeight: '28px',
            margin: 0
          }}>
              With 6+ years of experience in Digital Marketing, SEO, and Growth Strategy, I&apos;ve helped 3,000+ businesses across 50+ industries unlock their true potential, drive massive traffic, and generate millions in revenue.
            </p>
          </div>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '16px',
          marginTop: '10px'
        }}>
            {aboutStats.map(stat => <div key={stat.label} style={{
            padding: '24px',
            borderRadius: '30px',
            backgroundColor: 'var(--brand-500-soft)',
            border: '1px solid var(--brand-500-soft)',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px'
          }}>
              <span style={{
              color: 'var(--brand-500-strong)',
              fontSize: '32px',
              fontFamily: BarlowFont,
              fontWeight: 800,
              lineHeight: '1'
            }}>
                {stat.value}
              </span>
              <span style={{
              color: 'var(--text-muted)',
              fontSize: '14px',
              fontFamily: BarlowFont,
              fontWeight: 500,
              lineHeight: '1.5'
            }}>
                {stat.label}
              </span>
            </div>)}
          </div>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '18px'
        }}>
            {featureChips.map(chip => <span key={chip} style={{
            padding: '12px 18px',
            borderRadius: '999px',
            backgroundColor: 'var(--brand-500-soft)',
            border: '1px solid var(--brand-500-medium)',
            color: 'var(--text-muted)',
            fontSize: '14px',
            fontFamily: BarlowFont,
            fontWeight: 500
          }}>
                {chip}
              </span>)}
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          marginTop: '16px'
        }}>
            <span style={{
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700
          }}>
              Muhammad Ahsan
            </span>
            <span style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
            fontFamily: BarlowFont,
            fontWeight: 500,
            letterSpacing: '0.02em'
          }}>
              Digital Marketing Strategist Helping Brands Grow Since 2018
            </span>
          </div>
        </div>
        <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '620px',
        borderRadius: '40px',
        overflow: 'hidden',
        backgroundColor: '#080c20',
        boxShadow: '0 40px 90px rgba(0, 0, 0, 0.35)',
        border: '1px solid var(--brand-500-soft)'
      }}>
          <img className="ca-hover-popup" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80" alt="Professional portrait" style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.82)'
        }} />
          <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(3, 3, 3, 0.12) 0%, rgba(7, 11, 30, 0.55) 45%, rgba(8, 12, 32, 0.92) 100%)',
          pointerEvents: 'none'
        }} />
          <div style={{
          position: 'absolute',
          top: '28px',
          left: '28px',
          right: '28px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
            <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            borderRadius: '999px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            color: 'var(--text-primary)',
            width: 'fit-content'
          }}>
              <span style={{
              width: '12px',
              height: '12px',
              borderRadius: '999px',
              backgroundColor: 'var(--brand-500-strong)'
            }} />
              <span style={{
              fontFamily: BarlowFont,
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '1',
              letterSpacing: '0.04em'
            }}>
                6+ Years Experience
              </span>
            </div>
            <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px'
          }}>
              <div style={{
              padding: '14px 18px',
              borderRadius: '24px',
              backgroundColor: 'var(--brand-500-medium)',
              border: '1px solid var(--brand-500-medium)',
              color: 'var(--text-primary)',
              fontFamily: BarlowFont,
              fontWeight: 600,
              fontSize: '14px'
            }}>
                Data-Driven Growth Expert
              </div>
              <div style={{
              padding: '14px 18px',
              borderRadius: '24px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              fontFamily: BarlowFont,
              fontWeight: 600,
              fontSize: '14px'
            }}>
                Results That Matter
              </div>
            </div>
          </div>
          <div style={{
          position: 'absolute',
          left: '28px',
          right: '28px',
          bottom: '132px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
            <button style={{
            width: 'fit-content',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 18px',
            borderRadius: '999px',
            border: '1px solid var(--border-light)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontFamily: BarlowFont,
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer'
          }}>
              <span style={{
              width: '16px',
              height: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'var(--brand-500-strong)',
              color: 'var(--text-primary)',
              fontSize: '12px'
            }}>
                ?
              </span>
              Watch My Story
              <span style={{
              color: 'var(--text-muted)',
              fontSize: '13px',
              fontWeight: 500
            }}>
                2 min video
              </span>
            </button>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '20px 24px',
            borderRadius: '32px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)'
          }}>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                  <span style={{
                  color: 'rgba(255, 215, 0, 1)',
                  fontSize: '18px'
                }}>
                    ?????
                  </span>
                  <span style={{
                  color: 'var(--text-primary)',
                  fontFamily: BarlowFont,
                  fontWeight: 700,
                  fontSize: '18px'
                }}>
                    4.9/5
                  </span>
                </div>
                <span style={{
                color: 'var(--text-muted)',
                fontSize: '13px',
                fontFamily: BarlowFont,
                fontWeight: 500
              }}>
                  120+ Reviews
                </span>
              </div>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                minWidth: '90px'
              }}>
                    {reviewAvatars.map((src, index) => <img className="ca-hover-popup" key={src} src={src} alt="Reviewer avatar" style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '999px',
                    objectFit: 'cover',
                    border: '2px solid rgba(6, 8, 22, 1)',
                    left: `${index * -12}px`
                  }} />)}
                </div>
                <span style={{
                color: 'var(--text-muted)',
                fontSize: '14px',
                fontFamily: BarlowFont,
                fontWeight: 500
              }}>
                  Trusted by business owners worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
