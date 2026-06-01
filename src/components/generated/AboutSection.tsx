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
    backgroundColor: isHovered ? 'rgba(10, 132, 255, 0.95)' : 'rgba(10, 132, 255, 1)',
    borderRadius: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: isHovered ? '0 18px 36px rgba(10, 132, 255, 0.28)' : '0 12px 20px rgba(10, 132, 255, 0.22)'
  }}>
      <span style={{
      color: 'rgba(255, 255, 255, 1)',
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
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '80px clamp(24px, 6vw, 90px) 90px',
    backgroundColor: 'rgba(6, 8, 22, 1)',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '48px',
    ...style
  }}>
      <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle at 14% 18%, rgba(10, 132, 255, 0.16), transparent 24%), radial-gradient(circle at 86% 22%, rgba(12, 106, 255, 0.12), transparent 20%), radial-gradient(circle at 50% 88%, rgba(5, 54, 149, 0.16), transparent 32%)',
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
          <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 18px',
          borderRadius: '999px',
          backgroundColor: 'rgba(10, 132, 255, 0.12)',
          border: '1px solid rgba(10, 132, 255, 0.22)',
          width: 'fit-content'
        }}>
            <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '999px',
            backgroundColor: 'rgba(10, 132, 255, 1)'
          }} />
            <span style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '13px',
            fontFamily: BarlowFont,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}>
              About Me
            </span>
          </div>
          <h2 style={{
          color: 'rgba(255, 255, 255, 0.96)',
          fontSize: 'clamp(40px, 4vw, 64px)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          lineHeight: '0.98',
          margin: 0
        }}>
            Hi, I&apos;m Muhammad Mohsin
          </h2>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          maxWidth: '640px'
        }}>
            <p style={{
            color: 'rgba(255, 255, 255, 0.88)',
            fontSize: '20px',
            fontFamily: BarlowFont,
            fontWeight: 500,
            lineHeight: '32px',
            margin: 0
          }}>
              I turn strategies into real results and businesses into market leaders.
            </p>
            <p style={{
            color: 'rgba(228, 233, 244, 0.88)',
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
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px'
          }}>
              <span style={{
              color: 'rgba(10, 132, 255, 1)',
              fontSize: '32px',
              fontFamily: BarlowFont,
              fontWeight: 800,
              lineHeight: '1'
            }}>
                {stat.value}
              </span>
              <span style={{
              color: 'rgba(255, 255, 255, 0.78)',
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
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'rgba(255, 255, 255, 0.85)',
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
            color: 'white',
            fontSize: '20px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700
          }}>
              Muhammad Mohsin
            </span>
            <span style={{
            color: 'rgba(255, 255, 255, 0.72)',
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
        backgroundColor: 'rgba(10, 13, 32, 1)',
        boxShadow: '0 40px 90px rgba(0, 0, 0, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80" alt="Professional portrait" style={{
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
          background: 'linear-gradient(180deg, rgba(3, 7, 20, 0.12), rgba(3, 7, 20, 0.92) 70%)',
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
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            color: 'white',
            width: 'fit-content'
          }}>
              <span style={{
              width: '12px',
              height: '12px',
              borderRadius: '999px',
              backgroundColor: 'rgba(10, 132, 255, 1)'
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
              backgroundColor: 'rgba(10, 132, 255, 0.16)',
              border: '1px solid rgba(10, 132, 255, 0.24)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontFamily: BarlowFont,
              fontWeight: 600,
              fontSize: '14px'
            }}>
                Data-Driven Growth Expert
              </div>
              <div style={{
              padding: '14px 18px',
              borderRadius: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.9)',
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
            border: '1px solid rgba(255, 255, 255, 0.16)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: 'white',
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
              backgroundColor: 'rgba(10, 132, 255, 1)',
              color: 'white',
              fontSize: '12px'
            }}>
                ▶
              </span>
              Watch My Story
              <span style={{
              color: 'rgba(255, 255, 255, 0.72)',
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
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
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
                    ★★★★★
                  </span>
                  <span style={{
                  color: 'white',
                  fontFamily: BarlowFont,
                  fontWeight: 700,
                  fontSize: '18px'
                }}>
                    4.9/5
                  </span>
                </div>
                <span style={{
                color: 'rgba(255, 255, 255, 0.75)',
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
                    {reviewAvatars.map((src, index) => <img key={src} src={src} alt="Reviewer avatar" style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '999px',
                    objectFit: 'cover',
                    border: '2px solid rgba(6, 8, 22, 1)',
                    position: 'relative',
                    left: `${index * -12}px`
                  }} />)}
                </div>
                <span style={{
                color: 'rgba(255, 255, 255, 0.82)',
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
