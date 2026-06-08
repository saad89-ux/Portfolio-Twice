import React, { useRef } from 'react';

export const FeaturedResults = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    { title: 'Revenue Growth', icon: '📈', value: '320%', desc: 'Increase in revenue for e-commerce brand', label: '+320%' },
    { title: 'Organic Traffic', icon: '👤', value: '280%', desc: 'Growth in organic traffic for SaaS platform', label: '+280%' },
    { title: 'Conversion Rate', icon: '🛒', value: '185%', desc: 'Improvement in conversion rate for D2C brand', label: '+185%' },
    { title: 'ROAS Improvement', icon: '$', value: '8.6x', desc: 'Return on ad spend for performance campaigns', label: '8.6x' },
    { title: 'Customer Retention', icon: '⭐', value: '95%', desc: 'Customer retention rate for subscription model', label: '95%' },
  ];

  const bottomStats = [
    { company: 'TechNova', icon: '⚡', value: '320%', label: 'Revenue Growth' },
    { company: 'ShopSphere', icon: '🛍️', value: '280%', label: 'Organic Traffic' },
    { company: 'DataFlow', icon: '📊', value: '185%', label: 'Conversion Rate' },
    { company: 'FitLife', icon: '♥', value: '95%', label: 'Customer Retention' },
  ];

  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '100px clamp(24px, 6vw, 80px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'inline-flex',
        border: '1px solid var(--border-light)',
        borderRadius: '999px',
        padding: '6px 16px',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        marginBottom: '24px',
        backgroundColor: 'var(--bg-card-light)',
      }}>
        FEATURED RESULTS
      </div>

      <h2 style={{
        fontSize: 'clamp(36px, 4.5vw, 56px)',
        fontWeight: 800,
        lineHeight: 1.1,
        color: 'var(--text-primary)',
        fontFamily: '"Inter", sans-serif',
        textAlign: 'center',
        margin: '0 0 16px 0',
        letterSpacing: '-0.02em'
      }}>
        Real Results. <br/>
        <span style={{ color: 'var(--brand-500)' }}>Measurable Growth.</span>
      </h2>

      <p style={{
        fontSize: '16px',
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        fontFamily: '"Barlow", sans-serif',
        textAlign: 'center',
        margin: '0 0 60px 0',
        maxWidth: '600px'
      }}>
        We don't just promise results — we deliver them. <br/>
        Explore the real impact we've created for our clients across industries.
      </p>

      {/* Carousel Section */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
        
        {/* Left Arrow */}
        <button onClick={() => scroll('left')} style={{
          position: 'absolute',
          left: '-20px',
          zIndex: 10,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-card-solid)',
          border: '1px solid var(--border-light)',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {/* Cards Container */}
        <div ref={scrollRef} style={{
          display: 'flex',
          gap: '24px',
          width: '100%',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '20px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}>
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          
          {cards.map((card, idx) => (
            <div key={idx} className="ca-interactive-card" style={{
              minWidth: '300px',
              backgroundColor: 'var(--bg-card-light)',
              border: '1px solid var(--border-light)',
              borderRadius: '20px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--brand-500-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  {card.icon}
                </div>
                <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 600, fontFamily: '"Barlow", sans-serif' }}>{card.title}</span>
              </div>
              
              <div style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text-primary)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {card.value}
              </div>
              
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', margin: 0, lineHeight: 1.5, minHeight: '40px' }}>
                {card.desc}
              </p>
              
              {/* SVG Chart */}
              <div style={{ width: '100%', height: '100px', marginTop: 'auto', position: 'relative' }}>
                {/* Y-axis labels */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                  <span>400</span><span>300</span><span>200</span><span>100</span><span>0</span>
                </div>
                {/* X-axis labels */}
                <div style={{ position: 'absolute', left: '24px', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                </div>
                
                {/* SVG Graph */}
                <div style={{ position: 'absolute', left: '24px', right: 0, top: 0, bottom: '16px' }}>
                  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 90 Q 15 80 30 75 T 60 50 T 100 20 L 100 100 L 0 100 Z" fill={`url(#grad-${idx})`} />
                    <path d="M0 90 Q 15 80 30 75 T 60 50 T 100 20" fill="none" stroke="var(--brand-500)" strokeWidth="3" strokeLinecap="round" />
                    {/* Glowing Dot at end */}
                    <circle cx="100" cy="20" r="3" fill="#fff" />
                  </svg>
                  {/* Floating Badge */}
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '-5px',
                    backgroundColor: 'var(--brand-500)',
                    color: '#000',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '999px'
                  }}>
                    {card.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={() => scroll('right')} style={{
          position: 'absolute',
          right: '-20px',
          zIndex: 10,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-card-solid)',
          border: '1px solid var(--border-light)',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      {/* Bottom Wide Card */}
      <div style={{
        width: '100%',
        backgroundColor: 'var(--bg-card-light)',
        border: '1px solid var(--border-light)',
        borderRadius: '20px',
        marginTop: '40px',
        padding: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
        {/* Left Side Quote */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '64px', color: 'var(--border-light)', fontFamily: 'serif', lineHeight: 0.5, marginTop: '20px' }}>
            "
          </div>
          <div style={{ display: 'flex', gap: '4px', color: 'var(--brand-500)' }}>
            {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, fontFamily: '"Barlow", sans-serif', margin: 0 }}>
            Their data-driven strategies and execution exceeded our expectations. The results speak for themselves.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
            <img src="https://i.pravatar.cc/100?img=11" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>James Carter</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>CEO, TechNova</div>
            </div>
          </div>
        </div>

        {/* Right Side Stats Grid */}
        <div style={{ flex: '2 1 500px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          {bottomStats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', flex: 1, minWidth: '120px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                <span style={{ fontSize: '20px' }}>{stat.icon}</span> {stat.company}
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--brand-500)', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};
