import React from 'react';

export const FinalCTASection: React.FC = () => {
  return (
      <>
      {/* Final CTA Section */}
      <section style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '120px 0 100px',
      display: 'flex',
      justifyContent: 'center'
    }}>
        <div style={{
        width: '100%',
        backgroundColor: 'var(--bg-card-alt)',
        borderRadius: '40px',
        border: '1px solid var(--border-light)',
        boxShadow: '0 40px 120px rgba(0, 0, 0, 0.35)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: '32px',
        padding: '56px',
        minHeight: '480px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '32px'
        }}>
            <div>
              <span style={{
              display: 'inline-block',
              color: 'rgba(0, 194, 255, 0.82)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase'
            }}>
                Let's achieve extraordinary together
              </span>
              <h2 style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(40px, 4vw, 62px)',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '24px 0 24px 0'
            }}>
                Ready to Drive Transformational <span style={{ color: 'rgba(0, 194, 255, 1)' }}>Growth?</span>
              </h2>
              <p style={{
              maxWidth: '560px',
              color: 'var(--text-muted)',
              fontSize: '16px',
              lineHeight: '28px',
              fontFamily: '"Barlow", sans-serif'
            }}>
                Partner with a team of digital marketing experts who are passionate about your success. Let's create a strategy that drives real results.
              </p>
            </div>
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
              <button style={{
              minWidth: '220px',
              padding: '18px 28px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(90deg, rgba(0, 194, 255, 1), rgba(0, 194, 255, 1))',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease'
            }} onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 194, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }} onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
                Schedule a Strategy Call
              </button>
              <button style={{
              minWidth: '220px',
              padding: '18px 28px',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease'
            }} onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
                See How We Work
              </button>
            </div>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '16px'
          }}>
              {['Data-Driven', 'ROI Focused', 'Expert Team', 'Transparent'].map((label, idx) => <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 194, 255, 0.16)',
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  <span style={{ color: 'rgba(0, 194, 255, 1)', fontSize: '18px', fontWeight: 700 }}>•</span>
                </div>
                <span style={{
                  color: 'var(--text-muted)',
                  fontSize: '14px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 500
                }}>{label}</span>
              </div>)}
            </div>
          </div>
          <div style={{
          position: 'relative',
          borderRadius: '32px',
          overflow: 'hidden',
          minHeight: '460px',
          backgroundColor: 'rgba(0,0,0,0.18)'
        }}>
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Team in meeting" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)'
          }} />
            <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.72) 100%)'
          }} />
            <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            display: 'grid',
            gap: '16px'
          }}>
              {[
              { value: '250+', label: 'Happy Clients' },
              { value: '10X', label: 'Average ROI' }
            ].map(stat => <div key={stat.label} style={{
                minWidth: '180px',
                padding: '16px 20px',
                borderRadius: '24px',
                background: 'rgba(3, 3, 3, 0.85)',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  color: 'rgba(0, 194, 255, 1)',
                  fontSize: '22px',
                  fontWeight: 800,
                  marginBottom: '6px'
                }}>{stat.value}</div>
                <div style={{
                  color: 'var(--text-muted)',
                  fontSize: '13px',
                  lineHeight: '18px'
                }}>{stat.label}</div>
              </div>)}
            </div>
            <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            padding: '18px 22px',
            borderRadius: '24px',
            background: 'rgba(3, 3, 3, 0.88)',
            border: '1px solid var(--border-light)'
          }}>
              <div style={{
                color: 'rgba(0, 194, 255, 1)',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '6px'
              }}>98%</div>
              <div style={{
                color: 'var(--text-muted)',
                fontSize: '13px',
                lineHeight: '18px'
              }}>Client Retention</div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};
