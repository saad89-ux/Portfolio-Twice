import React from 'react';

const trustStats = [{
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg',
  value: '6+',
  label: 'Years of Experience'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg',
  value: '3,000+',
  label: 'Happy Clients'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg',
  value: '$5M+',
  label: 'Revenue Generated'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg',
  value: '50+',
  label: 'Industries Served'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516f.svg',
  value: '95%',
  label: 'Client Retention'
}];
const trustAvatars = ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'];

export const TrustSection: React.FC = () => {
  return <section style={{
    width: '100%',
    maxWidth: '1440px',
    margin: '80px auto 0',
    padding: '80px clamp(24px, 6vw, 90px)',
    
    borderRadius: '48px',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    border: '1px solid rgba(0, 194, 255, 0.08)'
  }}>
      <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle at 16% 18%, rgba(0, 194, 255, 0.18), transparent 28%), radial-gradient(circle at 88% 16%, rgba(0, 194, 255, 0.14), transparent 24%), radial-gradient(circle at 62% 40%, rgba(0, 194, 255, 0.10), transparent 30%), radial-gradient(circle at 50% 85%, rgba(0, 194, 255, 0.20), transparent 38%), radial-gradient(circle at 22% 78%, rgba(0, 194, 255, 0.10), transparent 32%)',
      pointerEvents: 'none'
    }} />
      <div style={{
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '42px',
      alignItems: 'center'
    }}>
        <div style={{
        position: 'relative',
        minHeight: '600px',
        borderRadius: '40px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid var(--border-light)'
      }}>
          <img className="ca-hover-popup" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80" alt="Marketing strategist portrait" style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.78)'
        }} />
          <div style={{
          position: 'absolute',
          top: '28px',
          left: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          zIndex: 2
        }}>
            <div style={{
            padding: '14px 18px',
            borderRadius: '28px',
            backgroundColor: 'rgba(0, 194, 255, 0.16)',
            border: '1px solid rgba(0, 194, 255, 0.24)',
            color: 'var(--text-primary)',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            width: 'fit-content'
          }}>
              Client-First Always
            </div>
            <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 20px',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: 'var(--text-primary)',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
              <span style={{
              width: '16px',
              height: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 194, 255, 1)',
              color: 'var(--text-primary)',
              fontSize: '12px'
            }}>
                ▶
              </span>
              Watch My Story
            </button>
          </div>
          <div style={{
          position: 'absolute',
          bottom: '28px',
          left: '28px',
          right: '28px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.48)',
          borderRadius: '28px',
          padding: '26px',
          backdropFilter: 'blur(10px)'
        }}>
            <span style={{
            color: 'rgba(0, 194, 255, 1)',
            fontSize: '14px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}>
              Results · Trust · Growth
            </span>
            <p style={{
            color: 'rgba(255, 255, 255, 0.92)',
            fontSize: '18px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            margin: 0
          }}>
              I don't believe in just completing projects, I believe in building relationships that last.
            </p>
          </div>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '28px'
      }}>
          <h2 style={{
          color: 'var(--text-primary)',
          fontSize: 'clamp(40px, 4vw, 58px)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          lineHeight: '1.02',
          margin: 0
        }}>
            Behind Every Strategy, There's a Purpose.
          </h2>
          <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start'
        }}>
            <div style={{
            width: '4px',
            minHeight: '60px',
            borderRadius: '999px',
            backgroundColor: 'rgba(0, 194, 255, 1)'
          }} />
            <p style={{
            color: 'rgba(225, 230, 245, 0.92)',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 400,
            lineHeight: '28px',
            margin: 0
          }}>
              I started this journey with a simple mission — to help businesses grow with honesty, strategy, and results that actually matter. Over the years, I've learned that real growth doesn't come from shortcuts, it comes from trust, consistency, and a deep understanding of each business I work with.
            </p>
          </div>
          <p style={{
          color: 'rgba(210, 215, 235, 0.85)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 400,
          lineHeight: '28px',
          margin: 0
        }}>
              Every campaign I build is customized. Every decision is data-backed. And every success story you see here represents a relationship built on transparency and hard work.
            </p>
          <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
            <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 22px',
            borderRadius: '16px',
            backgroundColor: 'rgba(0, 194, 255, 1)',
            border: 'none',
            color: 'var(--text-primary)',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            cursor: 'pointer'
          }}>
              Watch Video
            </button>
            <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 22px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            color: 'rgba(255, 255, 255, 0.94)',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
              Check Reviews
            </button>
          </div>
        </div>
      </div>

      <div style={{
      marginTop: '56px',
      padding: '28px',
      borderRadius: '36px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.09)'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: '18px'
      }}>
          {trustStats.map(stat => <div key={stat.label} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '22px 18px',
          borderRadius: '28px',
          backgroundColor: '#080c20',
          border: '1px solid var(--border-light)'
        }}>
            <img src={stat.icon} alt="" style={{
            width: '34px',
            height: '34px'
          }} />
            <span style={{
            color: 'var(--text-primary)',
            fontSize: '24px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700
          }}>
              {stat.value}
            </span>
            <span style={{
            color: 'rgba(225, 230, 245, 0.8)',
            fontSize: '13px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 500
          }}>
              {stat.label}
            </span>
          </div>)}
        </div>
      </div>

      <div style={{
      marginTop: '32px',
      padding: '28px 30px',
      borderRadius: '36px',
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        minWidth: '320px'
      }}>
          <span style={{
          color: 'rgba(0, 194, 255, 1)',
          fontSize: '28px',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 800,
          lineHeight: 1
        }}>
            "
          </span>
          <div>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 400,
            lineHeight: '28px',
            margin: 0
          }}>
                Don't just take my word for it — hear it from the people I've worked with.
              </p>
            <span style={{
            color: 'var(--text-muted)',
            fontSize: '13px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 500
          }}>
                Real Clients. Real Feedback.
              </span>
          </div>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '-12px'
      }}>
          {trustAvatars.map((src, index) => <img className="ca-hover-popup" key={src} src={src} alt="Client" style={{
          width: '48px',
          height: '48px',
          borderRadius: '999px',
          objectFit: 'cover',
          border: '2px solid #070b1e',
          position: 'relative',
          left: `${index * -14}px`
        }} />)}
          <div style={{
          marginLeft: '16px',
          color: 'rgba(255, 255, 255, 0.88)',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 600,
          fontSize: '14px'
        }}>
            3K+ Reviews
          </div>
        </div>
      </div>
    </section>;
};
