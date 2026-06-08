import React from 'react';

export const CapabilityFilter = () => {
  return (
    <section style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '100px clamp(24px, 5vw, 40px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--brand-400)'
        }}>
          EXPLORE OUR WORK
        </div>
        <h2 style={{
          fontSize: 'clamp(36px, 4.5vw, 56px)',
          fontWeight: 800,
          lineHeight: 1.1,
          color: 'var(--text-primary)',
          fontFamily: '"Inter", sans-serif',
          margin: 0,
          letterSpacing: '-0.02em',
          maxWidth: '800px'
        }}>
          Find Work That Matches <span style={{ background: 'linear-gradient(90deg, var(--brand-400), var(--brand-600))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Goals</span>
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'var(--text-muted)',
          fontFamily: '"Barlow", sans-serif',
          margin: 0,
          maxWidth: '560px'
        }}>
          Use our capability filters to quickly discover case studies and results that align with your industry, challenge, platform, and goals.
        </p>
      </div>

      {/* Main Filter Container */}
      <div style={{
        backgroundColor: '#0a0d14', // Very dark background matching image
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Top Area (Capabilities + Dropdowns) */}
        <div style={{ padding: '32px 32px 0 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Row 1: Capabilities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
              CAPABILITIES
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button className="ca-interactive-btn" style={{
                padding: '12px 20px',
                backgroundColor: 'var(--brand-400-soft)',
                border: '1px solid var(--brand-400-strong)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{ color: 'var(--brand-400)', display: 'flex' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </div>
                All Capabilities
              </button>
              
              {[
                { label: 'Digital Marketing', icon: '📢' },
                { label: 'Web Design', icon: '💻' },
                { label: 'Brand Strategy', icon: '🎯' },
                { label: 'Content Marketing', icon: '📄' },
                { label: 'Marketing Automation', icon: '⚙️' },
              ].map(item => (
                <button key={item.label} className="ca-interactive-btn" style={{
                  padding: '12px 20px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  <span style={{ fontSize: '16px' }}>{item.icon}</span> {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Dropdowns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', paddingBottom: '32px' }}>
            {[
              { label: 'INDUSTRY', value: 'All Industries', icon: '🏢' },
              { label: 'BUSINESS CHALLENGE', value: 'All Challenges', icon: '🚩' },
              { label: 'PLATFORM', value: 'All Platforms', icon: '🗂️' },
              { label: 'RESULT TYPE', value: 'All Results', icon: '📈' },
            ].map((dropdown, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '20px', opacity: 0.6 }}>{dropdown.icon}</div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>{dropdown.label}</span>
                  <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{dropdown.value}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Area (Footer of filter) */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.01)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--brand-400-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-400)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11z"></path></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ fontSize: '15px', color: '#fff', fontWeight: 700 }}>128 Case Studies Found</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Showing results that match your selected criteria</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
              Reset Filters
            </button>
            
            <button style={{
              padding: '10px 16px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Sort by:</span> Most Relevant
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px',
        width: '100%'
      }}>
        {/* Card 1: SaaS */}
        <div className="ca-interactive-card" style={{
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ position: 'relative', height: '240px', width: '100%' }}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,13,20,0) 0%, rgba(10,13,20,1) 100%)' }} />
            
            <div style={{
              position: 'absolute', top: '16px', left: '16px',
              backgroundColor: 'var(--brand-400-soft)', border: '1px solid var(--brand-400-strong)',
              padding: '4px 12px', borderRadius: '999px',
              color: 'var(--brand-400)', fontSize: '11px', fontWeight: 600
            }}>
              SaaS
            </div>
            
            <div style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              backdropFilter: 'blur(10px)'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </div>
          </div>
          
          <div style={{ padding: '0 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, zIndex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', lineHeight: 1.4, margin: 0 }}>
                Driving Scalable Growth for a B2B SaaS Platform
              </h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, fontFamily: '"Barlow", sans-serif' }}>
                An integrated SEO and content strategy that increased organic visibility, boosted product sign-ups, and improved pipeline quality.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '4px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-400)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>320%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Increase in Organic Traffic</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-600)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v10l5.3 5.3"></path></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>8.6x</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Return on Ad Spend</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: '#ec4899' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>185%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Increase in Leads</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: E-commerce */}
        <div className="ca-interactive-card" style={{
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ position: 'relative', height: '240px', width: '100%' }}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Fashion" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,13,20,0) 0%, rgba(10,13,20,1) 100%)' }} />
            
            <div style={{
              position: 'absolute', top: '16px', left: '16px',
              backgroundColor: 'var(--brand-400-soft)', border: '1px solid var(--brand-400-strong)',
              padding: '4px 12px', borderRadius: '999px',
              color: 'var(--brand-400)', fontSize: '11px', fontWeight: 600
            }}>
              E-commerce
            </div>
            
            <div style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              backdropFilter: 'blur(10px)'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </div>
          </div>
          
          <div style={{ padding: '0 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, zIndex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', lineHeight: 1.4, margin: 0 }}>
                End-to-End Digital Transformation for a D2C Brand
              </h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, fontFamily: '"Barlow", sans-serif' }}>
                Redesigned the digital experience and optimized conversion paths to increase revenue and reduce customer acquisition costs.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '4px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-400)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>180%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Revenue Growth</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-600)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v10l5.3 5.3"></path></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>45%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Increase in Conversion Rate</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-400)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>60%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reduction in CPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Healthcare */}
        <div className="ca-interactive-card" style={{
          backgroundColor: '#0a0d14',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ position: 'relative', height: '240px', width: '100%' }}>
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" alt="Healthcare" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,13,20,0) 0%, rgba(10,13,20,1) 100%)' }} />
            
            <div style={{
              position: 'absolute', top: '16px', left: '16px',
              backgroundColor: 'var(--brand-400-soft)', border: '1px solid var(--brand-400-strong)',
              padding: '4px 12px', borderRadius: '999px',
              color: 'var(--brand-400)', fontSize: '11px', fontWeight: 600
            }}>
              Healthcare
            </div>
            
            <div style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              backdropFilter: 'blur(10px)'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </div>
          </div>
          
          <div style={{ padding: '0 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, zIndex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', lineHeight: 1.4, margin: 0 }}>
                Building a Patient-Centric Digital Experience
              </h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, fontFamily: '"Barlow", sans-serif' }}>
                Developed a user-first healthcare platform that improved patient engagement, appointment bookings, and overall satisfaction.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '4px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-400)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>250%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Increase in Appointments</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-400)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v10l5.3 5.3"></path></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>35%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Increase in Organic Traffic</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-400)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polygon points="9 12 11 14 15 10"></polygon></svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>98%</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
