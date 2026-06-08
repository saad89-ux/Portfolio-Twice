import React from 'react';

export const ClientSuccessStories = () => {
  const diverseIndustries = [
    { cat: 'E-COMMERCE', title: 'Scaling Revenue for D2C Fashion Brand', metric: '180%', desc: 'Revenue Growth', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop' },
    { cat: 'SAAS', title: 'Driving Growth for B2B SaaS Platform', metric: '8.6x', desc: 'Return on Ad Spend', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
    { cat: 'HEALTHCARE', title: 'Improving Patient Acquisition for Healthcare Group', metric: '250%', desc: 'Increase in Appointments', img: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=600&auto=format&fit=crop' },
    { cat: 'FINANCE', title: 'Boosting Conversions for Fintech Startup', metric: '45%', desc: 'Increase in Conversion Rate', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop' },
    { cat: 'EDUCATION', title: 'Increasing Enrollments for Online Learning Platform', metric: '210%', desc: 'Increase in Enrollments', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '100px clamp(24px, 5vw, 40px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '60px',
      boxSizing: 'border-box'
    }}>
      
      {/* Top Section: Split Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '40px',
        width: '100%'
      }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Header Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--brand-400)'
            }}>
              CLIENT SUCCESS STORIES
            </div>
            <h2 style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              fontFamily: '"Inter", sans-serif',
              margin: 0,
              letterSpacing: '-0.02em',
            }}>
              Partnerships That Drive <span style={{ color: 'var(--brand-400)' }}>Real Growth</span>
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              fontFamily: '"Barlow", sans-serif',
              margin: 0,
              maxWidth: '500px'
            }}>
              We don't just deliver services—we build long-term partnerships that create measurable impact for ambitious brands.
            </p>
            
            {/* Avatars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
              <div style={{ display: 'flex' }}>
                {[1, 2, 3, 4].map(num => (
                  <img key={num} src={`https://i.pravatar.cc/100?img=${num + 10}`} alt="avatar" style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '2px solid #030510',
                    marginLeft: num === 1 ? '0' : '-12px',
                    objectFit: 'cover'
                  }} />
                ))}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: 'var(--brand-400)', color: '#fff',
                  border: '2px solid #030510',
                  marginLeft: '-12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', fontWeight: 600, zIndex: 10
                }}>
                  +
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>250+ Happy Clients</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Across 35+ Industries</span>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="ca-interactive-card" style={{
            backgroundColor: 'var(--bg-card-light)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            position: 'relative',
            display: 'flex',
            overflow: 'hidden',
            minHeight: '260px'
          }}>
            {/* Text Side */}
            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 2 }}>
              <div style={{ color: 'var(--brand-400)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.6, fontFamily: '"Barlow", sans-serif', margin: 0, fontWeight: 500 }}>
                Their strategic approach and execution exceeded our expectations. We saw a 320% increase in qualified leads within just 6 months.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--brand-400), var(--brand-600))' }} />
                  <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', fontFamily: '"Inter", sans-serif' }}>TechNova</span>
                </div>
                <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--border-light)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>Sarah Johnson</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>CMO, TechNova Solutions</span>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div style={{ width: '220px', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="Sarah Johnson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg-card-light) 0%, transparent 40%)' }} />
              
              {/* Floating Badge */}
              <div style={{
                position: 'absolute', bottom: '24px', right: '-10px',
                backgroundColor: 'var(--brand-400)',
                padding: '12px 20px', borderRadius: '12px',
                display: 'flex', flexDirection: 'column', gap: '4px',
                boxShadow: '0 10px 30px var(--brand-400-strong)',
                transform: 'translateX(-20px)'
              }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#fff', fontFamily: '"Inter", sans-serif', lineHeight: 1 }}>320%</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Increase in Leads</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Video Container */}
          <div className="ca-interactive-card" style={{
            position: 'relative',
            width: '100%',
            height: '380px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)'
          }}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Video Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
            
            {/* Play Button */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)', zIndex: 10
            }}>
              <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid var(--brand-400)', marginLeft: '4px' }} />
            </div>

            {/* Bottom Info Box */}
            <div style={{
              position: 'absolute', bottom: '24px', left: '24px',
              backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px',
              padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px'
            }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Watch Our Impact in Action</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>See how we turn challenges into growth stories</span>
            </div>

            {/* Timestamp */}
            <div style={{
              position: 'absolute', bottom: '24px', right: '24px',
              backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
              padding: '6px 12px', color: '#fff', fontSize: '12px', fontWeight: 600
            }}>
              2:45
            </div>
          </div>

          {/* 3 Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: '↗', color: 'var(--brand-400)', bg: 'var(--brand-400-soft)', value: '98%', label: 'Client Satisfaction Rate' },
              { icon: '⭐', color: 'var(--brand-600)', bg: 'var(--brand-600-soft)', value: '250+', label: 'Successful Projects Delivered' },
              { icon: '🏢', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', value: '35+', label: 'Industries Served' },
            ].map((stat, idx) => (
              <div key={idx} className="ca-interactive-card" style={{
                backgroundColor: 'var(--bg-card-light)',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  backgroundColor: stat.bg, color: stat.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Section: Diverse Industries Grid */}
      <div style={{
        backgroundColor: 'var(--bg-card-light)',
        border: '1px solid var(--border-light)',
        borderRadius: '24px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%'
      }}>
        <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', textAlign: 'center' }}>
          SUCCESS ACROSS DIVERSE INDUSTRIES
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          width: '100%'
        }}>
          {diverseIndustries.map((item, idx) => (
            <div key={idx} className="ca-interactive-card" style={{
              position: 'relative',
              height: '200px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '20px'
            }}>
              <img src={item.img} alt={item.cat} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,13,20,0) 0%, rgba(10,13,20,0.95) 100%)' }} />
              
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--brand-400)', textTransform: 'uppercase' }}>{item.cat}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{item.title}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#fff', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{item.metric}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
