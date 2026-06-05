import React from 'react';

export const CaseStudyShowcase = () => {
  const cards = [
    {
      number: '01',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
      tags: [{ icon: '⚙️', label: 'SaaS' }, { icon: '📈', label: 'Lead Generation' }],
      title: 'Driving Scalable Growth for a B2B SaaS Platform',
      description: 'An integrated SEO and content strategy that increased organic visibility, boosted product sign-ups, and improved pipeline quality.',
      metrics: [
        { value: '320%', label: 'Increase in Organic Traffic' },
        { value: '8.6x', label: 'Return on Ad Spend' },
        { value: '185%', label: 'Increase in Leads' },
      ]
    },
    {
      number: '02',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      tags: [{ icon: '🛒', label: 'E-commerce' }, { icon: '⚡', label: 'CRO' }],
      title: 'End-to-End Digital Transformation for a D2C Fashion Brand',
      description: 'Redesigned the digital experience and optimized conversion paths to increase revenue and reduce customer acquisition costs.',
      metrics: [
        { value: '180%', label: 'Revenue Growth' },
        { value: '45%', label: 'Increase in Conversion Rate' },
        { value: '60%', label: 'Reduction in CPA' },
      ]
    },
    {
      number: '03',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop',
      tags: [{ icon: '❤️', label: 'Healthcare' }, { icon: '📱', label: 'UX Strategy' }],
      title: 'Building a Patient-Centric Digital Experience',
      description: 'Developed a user-first healthcare platform that improved patient engagement, appointment bookings, and overall satisfaction.',
      metrics: [
        { value: '250%', label: 'Increase in Appointments' },
        { value: '35%', label: 'Increase in Organic Traffic' },
        { value: '98%', label: 'Patient Satisfaction' },
      ]
    }
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
      {/* Header */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#a855f7'
        }}>
          CASE STUDY SHOWCASE
        </div>
        <h2 style={{
          fontSize: 'clamp(36px, 4.5vw, 56px)',
          fontWeight: 800,
          lineHeight: 1.1,
          color: 'var(--text-primary)',
          fontFamily: '"Inter", sans-serif',
          margin: 0,
          letterSpacing: '-0.02em',
          maxWidth: '600px'
        }}>
          Real Challenges.<br />
          Proven <span style={{ color: '#a855f7' }}>Results.</span>
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'var(--text-muted)',
          fontFamily: '"Barlow", sans-serif',
          margin: 0,
          maxWidth: '600px'
        }}>
          Explore how we've partnered with ambitious brands to solve complex problems, drive measurable growth, and create lasting impact.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '24px',
        width: '100%'
      }}>
        {cards.map((card, idx) => (
          <div key={idx} className="ca-interactive-card" style={{
            backgroundColor: 'var(--bg-card-light)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Image Container */}
            <div style={{ position: 'relative', height: '260px', width: '100%' }}>
              <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)' }} />
              
              {/* Number Badge */}
              <div style={{
                position: 'absolute', top: '24px', left: '24px',
                backgroundColor: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.5)',
                padding: '6px 12px', borderRadius: '8px',
                color: '#fff', fontSize: '14px', fontWeight: 700
              }}>
                {card.number}
              </div>

              {/* Bottom Tags Overlay */}
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', gap: '12px' }}>
                {card.tags.map((tag, tIdx) => (
                  <div key={tIdx} style={{
                    backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)', padding: '6px 12px', borderRadius: '999px',
                    color: '#fff', fontSize: '11px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px'
                  }}>
                    <span>{tag.icon}</span> {tag.label}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Content Container */}
            <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, margin: 0, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.01em' }}>
                {card.title}
              </h3>
              
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', margin: 0 }}>
                {card.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                {card.metrics.map((metric, mIdx) => (
                  <div key={mIdx} style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', lineHeight: 1.4, paddingRight: '10px' }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                <button style={{
                  padding: '10px 20px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  borderRadius: '999px',
                  color: 'var(--text-primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
                  e.currentTarget.style.borderColor = '#a855f7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
                }}
                >
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Impact Bar */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(90deg, rgba(20, 10, 40, 1) 0%, rgba(10, 5, 20, 1) 100%)',
        border: '1px solid rgba(168, 85, 247, 0.2)',
        borderRadius: '24px',
        padding: '32px 40px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
        {/* Left Side */}
        <div style={{ flex: '1 1 250px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            backgroundColor: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
          </div>
          <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 600, fontFamily: '"Inter", sans-serif', lineHeight: 1.4 }}>
            Delivering Impact <br/> Across Industries
          </div>
        </div>

        {/* Right Stats */}
        <div style={{ flex: '2 1 600px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          {[
            { value: '250+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '35+', label: 'Industries Served' },
            { value: '10+', label: 'Years of Experience' },
          ].map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '120px' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#a855f7', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
