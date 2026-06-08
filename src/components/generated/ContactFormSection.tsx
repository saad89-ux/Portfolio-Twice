import React from 'react';

export const ContactFormSection: React.FC = () => {
  return (
      <section style={{
      width: '100%',
      padding: '120px 0 140px',
      boxSizing: 'border-box'
    }}>
        <div style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
          <div style={{
          position: 'relative',
          minHeight: '700px',
          borderRadius: '40px',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-primary)'
        }}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" alt="Manufacturing background" style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.35) contrast(1.05)'
          }} />
            <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--bg-primary)',
            opacity: 0.85
          }} />
            <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '32px',
            minHeight: '700px',
            alignItems: 'center',
            padding: '64px 48px'
          }}>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              justifyContent: 'center'
            }}>
                <span style={{
                color: 'var(--brand-500)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                fontFamily: '"Barlow", sans-serif'
              }}>
                  Request a Quote
                </span>
                <h2 style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(44px, 4.4vw, 68px)',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 800,
                lineHeight: 1.03,
                margin: 0
              }}>
                  Ready to Start Your Project?
                </h2>
                <p style={{
                maxWidth: '560px',
                color: 'var(--text-muted)',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: '"Barlow", sans-serif',
                margin: 0
              }}>
                  For more information about our digital marketing services, or to request a quote from our team, contact us now.
                </p>
              </div>

              <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <div style={{
                width: '100%',
                maxWidth: '480px',
                borderRadius: '32px',
                backgroundColor: 'var(--bg-card-alt)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 40px 120px rgba(0, 0, 0, 0.36)',
                padding: '34px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                  <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: '24px',
                  fontWeight: 700,
                  margin: 0,
                  fontFamily: '"Barlow", sans-serif'
                }}>
                    Request a Quote
                  </h3>
                  <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                    {['Your name', 'Your email'].map((placeholder, idx) => <input key={placeholder} type={idx === 1 ? 'email' : 'text'} placeholder={placeholder} style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-card-light)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />)}
                  </div>
                  <div style={{
                  display: 'grid',
                  gap: '16px'
                }}>
                    <input type='text' placeholder='Part Number' style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-card-light)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />
                    <input type='text' placeholder='Phone number*' style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-card-light)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      borderRadius: '18px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-card-light)',
                      color: 'var(--text-muted)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif'
                    }}>
                      <button style={{
                        border: 'none',
                        background: 'var(--bg-card-light)',
                        color: 'var(--text-primary)',
                        borderRadius: '14px',
                        padding: '10px 16px',
                        cursor: 'pointer',
                        fontFamily: '"Barlow", sans-serif'
                      }}>
                        Choose File
                      </button>
                      <span>No File Chosen</span>
                    </div>
                    <input type='text' placeholder='Quantity' style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-card-light)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />
                    <textarea placeholder='Message' style={{
                      width: '100%',
                      minHeight: '140px',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-card-light)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none',
                      resize: 'vertical'
                    }} />
                  </div>
                  <button style={{
                  width: '100%',
                  padding: '16px 0',
                  borderRadius: '18px',
                  border: 'none',
                  background: 'var(--text-primary)',
                  color: 'var(--text-inverse)',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}>
                    PankajUX India
                  </button>
                  <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '12px',
                  lineHeight: '18px',
                  margin: 0,
                  fontFamily: '"Barlow", sans-serif'
                }}>
                    *** Here at Pankajux India your privacy is important to us. Any information shared will be kept internal, confidential, and secure. ***
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
