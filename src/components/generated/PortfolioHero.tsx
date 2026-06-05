import React from 'react';

export const PortfolioHero = () => {
  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      minHeight: '800px',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px clamp(24px, 6vw, 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#030510',
      boxSizing: 'border-box',
    }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(100, 50, 255, 0.08) 0%, transparent 60%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 194, 255, 0.05) 0%, transparent 60%)', filter: 'blur(80px)' }} />
      </div>

      {/* Left Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '620px', zIndex: 10, position: 'relative' }}>
        {/* Top Badge */}
        <div style={{
          display: 'inline-flex',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '999px',
          padding: '8px 16px',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'rgba(255, 255, 255, 0.7)',
          textTransform: 'uppercase',
          width: 'fit-content',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
        }}>
          OUR WORK. REAL IMPACT.
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(46px, 5.5vw, 72px)',
          fontWeight: 800,
          lineHeight: 1.05,
          color: '#ffffff',
          fontFamily: '"Inter", sans-serif',
          margin: 0,
          letterSpacing: '-0.02em'
        }}>
          Work That Drives Results. <span style={{ color: '#a855f7' }}>Stories</span> That <span style={{ color: '#3b82f6' }}>Inspire.</span>
        </h1>

        {/* Paragraph */}
        <p style={{
          fontSize: '17px',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: '"Barlow", sans-serif',
          margin: 0,
          maxWidth: '480px'
        }}>
          Explore a selection of our most impactful projects across industries. Each one is a testament to strategy, creativity, and measurable growth.
        </p>

        {/* CTA Button */}
        <button className="ca-hover-popup" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '8px 8px 8px 32px',
          borderRadius: '999px',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          width: 'fit-content',
          marginTop: '8px',
          transition: 'all 0.3s ease'
        }}>
          EXPLORE OUR WORK
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a855f7, #6366f1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </button>

        {/* Stats Row */}
        <div style={{ display: 'flex', gap: '32px', marginTop: '40px', flexWrap: 'wrap' }}>
          {/* Stat 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <div style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em', lineHeight: 1 }}>250+</div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', fontFamily: '"Barlow", sans-serif', letterSpacing: '0.02em' }}>Projects Delivered</div>
          </div>
          <div style={{ width: '1px', height: '60px', background: 'rgba(255, 255, 255, 0.1)', alignSelf: 'center' }}></div>
          {/* Stat 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <div style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em', lineHeight: 1 }}>98%</div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', fontFamily: '"Barlow", sans-serif', letterSpacing: '0.02em' }}>Client Satisfaction</div>
          </div>
          <div style={{ width: '1px', height: '60px', background: 'rgba(255, 255, 255, 0.1)', alignSelf: 'center' }}></div>
          {/* Stat 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            <div style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.03em', lineHeight: 1 }}>35+</div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', fontFamily: '"Barlow", sans-serif', letterSpacing: '0.02em' }}>Industries Served</div>
          </div>
        </div>
      </div>

      {/* Right Content - 3D Perspective Cards */}
      <div style={{
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '55%',
        height: '900px',
        perspective: '1500px',
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(20deg) rotateY(-25deg) rotateZ(5deg)',
          pointerEvents: 'none'
        }}>
          
          {/* Background Card 1 (Building Brands) */}
          <div style={{
            position: 'absolute',
            top: '60%',
            left: '55%',
            width: '400px',
            height: '240px',
            transform: 'translateZ(-140px)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            background: '#0a0a0a',
            filter: 'brightness(0.4)'
          }}>
             <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 100%)' }} />
             <div style={{ position: 'relative', zIndex: 1, padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', marginBottom: '12px', fontWeight: 600 }}>CASE STUDY</span>
              <h3 style={{ fontSize: '24px', color: '#fff', fontWeight: 700, lineHeight: 1.2, margin: 0, width: '60%', fontFamily: '"Inter", sans-serif' }}>
                Building <br/>Stronger <br/>Brands
              </h3>
            </div>
          </div>

          {/* Background Card 2 (E-Commerce) */}
          <div style={{
            position: 'absolute',
            top: '25%',
            left: '60%',
            width: '420px',
            height: '260px',
            transform: 'translateZ(-80px)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            background: '#111',
            filter: 'brightness(0.6)'
          }}>
             <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.4) 100%)' }} />
             <div style={{ position: 'relative', zIndex: 1, padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', marginBottom: '12px', fontWeight: 600 }}>CASE STUDY</span>
              <h3 style={{ fontSize: '26px', color: '#fff', fontWeight: 700, lineHeight: 1.2, margin: 0, width: '60%', fontFamily: '"Inter", sans-serif' }}>
                E-Commerce <br/>Redefined
              </h3>
            </div>
          </div>

          {/* Card 3: Bottom (Driving Growth) */}
          <div style={{
            position: 'absolute',
            top: '72%',
            left: '5%',
            width: '480px',
            height: '280px',
            transform: 'translateZ(0px)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            background: '#0a0510',
          }}>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, mixBlendMode: 'screen', filter: 'hue-rotate(280deg) saturate(2) brightness(1.2)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,5,16,0.95) 0%, rgba(10,5,16,0.4) 100%)' }} />
            
            <div style={{ position: 'relative', zIndex: 1, padding: '36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', marginBottom: '16px', fontWeight: 600 }}>CASE STUDY</span>
              <h3 style={{ fontSize: '30px', color: '#fff', fontWeight: 700, lineHeight: 1.2, margin: 0, width: '80%', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
                Driving Growth <br/>Through Data <br/>& Design
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
                VIEW CASE STUDY <span style={{ marginLeft: '8px' }}>→</span>
              </div>
            </div>
          </div>

          {/* Card 2: Middle (Next-Gen Healthcare Platform) */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '-5%',
            width: '520px',
            height: '300px',
            transform: 'translateZ(60px)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: '#051015',
          }}>
            <img src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=1000&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, filter: 'hue-rotate(140deg) saturate(1.5) brightness(0.8)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,16,21,0.9) 0%, rgba(5,16,21,0.2) 100%)' }} />
            
            <div style={{ position: 'relative', zIndex: 1, padding: '36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '9px', color: '#00e5ff', letterSpacing: '0.15em', marginBottom: '16px', fontWeight: 600 }}>CASE STUDY</span>
              <h3 style={{ fontSize: '34px', color: '#fff', fontWeight: 700, lineHeight: 1.15, margin: 0, width: '65%', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
                Next-Gen <br/>Healthcare <br/>Platform
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
                VIEW CASE STUDY <span style={{ marginLeft: '8px' }}>→</span>
              </div>
            </div>
          </div>

          {/* Card 1: Top (Redefining Digital Experiences) */}
          <div style={{
            position: 'absolute',
            top: '8%',
            left: '10%',
            width: '540px',
            height: '320px',
            transform: 'translateZ(120px)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            background: '#0a0a0a',
          }}>
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, mixBlendMode: 'lighten' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.1) 100%)' }} />
            
            <div style={{ position: 'relative', zIndex: 1, padding: '36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
                <div style={{ display: 'flex', gap: '16px', fontSize: '9px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                  <span>Work</span><span>About</span><span>Services</span><span>Insights</span><span>Contact</span>
                </div>
              </div>
              <h3 style={{ fontSize: '38px', color: '#fff', fontWeight: 700, lineHeight: 1.15, margin: 0, width: '70%', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
                Redefining <br/>Digital <br/><span style={{ color: '#a855f7' }}>Experiences</span>
              </h3>
              <div style={{ position: 'absolute', top: '50%', right: '25%', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
                <div style={{ width: '0', height: '0', borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #000', marginLeft: '3px' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 1100px) {
          section {
            flex-direction: column !important;
            padding-top: 100px !important;
          }
          section > div:nth-child(2) {
            max-width: 100% !important;
          }
          section > div:nth-child(3) {
            position: relative !important;
            width: 100% !important;
            height: 600px !important;
            transform: none !important;
            margin-top: 60px !important;
            right: auto !important;
          }
        }
        @media (max-width: 768px) {
          section > div:nth-child(3) {
            transform: scale(0.6) !important;
            transform-origin: top center !important;
            height: 400px !important;
            margin-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
