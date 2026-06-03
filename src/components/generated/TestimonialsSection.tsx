import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    avatar: 'https://i.pravatar.cc/150?img=47',
    platform: 'Clutch',
    rating: '4.9/5.0',
    quote: 'Catalyst Analytics transformed our entire digital presence. Our ROAS went from 1.2x to 4.1x in just 8 weeks. Incredibly data-driven team.',
    name: 'Sarah Ahmed',
    title: 'Co-Founder & CEO, StyleVault',
    platformLabel: 'CLUTCH'
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=12',
    platform: 'Google',
    rating: '5.0/5.0',
    quote: 'Best digital marketing agency in Pakistan. Took our restaurant from zero online presence to fully booked weekends in 30 days. Absolute professionals.',
    name: 'Usman Tariq',
    title: 'Owner, Spice Garden Restaurants',
    platformLabel: 'GOOGLE'
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=53',
    platform: 'Clutch',
    rating: '4.8/5.0',
    quote: 'Their lead generation for our property launches was exceptional. Two projects sold out in 45 days. I\'ve worked with 3 agencies before — none came close.',
    name: 'Bilal Chaudhry',
    title: 'Director, Skyline Developments',
    platformLabel: 'CLUTCH'
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=25',
    platform: 'Google',
    rating: '5.0/5.0',
    quote: '280 new student enrollments in the first month. Their YouTube ad strategy and email sequences are on another level. ROI was 6x what we spent.',
    name: 'Dr. Fatima Malik',
    title: 'Founder, EduPrime Academy',
    platformLabel: 'GOOGLE'
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=33',
    platform: 'Clutch',
    rating: '4.9/5.0',
    quote: 'We went from 0 to 90+ online appointments per month in under 6 weeks. Their local SEO and Google Ads setup was flawless. Clinic is always at full capacity now.',
    name: 'Dr. Hassan Raza',
    title: 'Medical Director, CareFirst Clinic',
    platformLabel: 'CLUTCH'
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=16',
    platform: 'LinkedIn',
    rating: '5.0/5.0',
    quote: 'Our MRR grew 2.5x in one quarter. Their B2B LinkedIn strategy and content funnel brought us qualified leads we actually closed. Game changer.',
    name: 'Zara Qureshi',
    title: 'Head of Growth, TechFlow SaaS',
    platformLabel: 'LINKEDIN'
  }
];

const bubblePositions = [
  { width: 90, height: 90, top: 0, left: 145 },
  { width: 130, height: 130, top: 30, left: 20 },
  { width: 160, height: 160, top: 90, left: 110 },
  { width: 130, height: 130, top: 60, left: 240 },
  { width: 150, height: 150, top: 210, left: 10 },
  { width: 130, height: 130, top: 220, left: 220 }
];

export const TestimonialsSection: React.FC = () => {
  const activeIndexRef = React.useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const switchTo = (newIndex: number) => {
    if (isTransitioning || activeIndexRef.current === newIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      activeIndexRef.current = newIndex;
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 350);
  };

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const next = (activeIndexRef.current + 1) % testimonialsData.length;
      setIsTransitioning(true);
      setTimeout(() => {
        activeIndexRef.current = next;
        setActiveIndex(next);
        setIsTransitioning(false);
      }, 350);
    }, 3500);
  };

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBubbleClick = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    switchTo(index);
    startAutoRotate();
  };

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section ref={sectionRef} style={{
      backgroundColor: 'var(--bg-primary)',
      padding: '80px 0',
      width: '100%',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '64px', width: '100%', maxWidth: '1200px', padding: '0 40px', boxSizing: 'border-box' }}>
        <span style={{
          color: '#00c2ff',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 700,
          display: 'block',
          marginBottom: '16px'
        }}>TESTIMONIALS</span>
        <h2 style={{
          color: 'var(--text-primary)',
          fontSize: '42px',
          fontWeight: 700,
          margin: '0 0 16px',
          fontFamily: '"Barlow", sans-serif'
        }}>What Our Clients Say</h2>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          margin: 0
        }}>Real results. Real feedback.<br />From brands that trusted us to grow.</p>
      </div>

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        gap: isMobile ? '40px' : '80px',
        boxSizing: 'border-box'
      }}>
        
        {/* LEFT COLUMN */}
        {!isMobile ? (
          <div style={{ width: '45%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '380px', height: '380px' }}>
              {testimonialsData.map((t, idx) => {
                const isActive = idx === activeIndex;
                const pos = bubblePositions[idx];
                return (
                  <div key={idx} onClick={() => handleBubbleClick(idx)} style={{
                    position: 'absolute',
                    width: `${pos.width}px`,
                    height: `${pos.height}px`,
                    top: `${pos.top}px`,
                    left: `${pos.left}px`,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    border: isActive ? '3px solid #00c2ff' : '3px solid rgba(255,255,255,0.1)',
                    filter: isActive ? 'brightness(1) saturate(1)' : 'brightness(0.55) saturate(0.8)',
                    transform: isActive ? 'scale(1.18)' : 'scale(1)',
                    boxShadow: isActive ? '0 0 0 5px rgba(0, 194, 255, 0.25), 0 0 30px rgba(0, 194, 255, 0.35), 0 8px 32px rgba(0,0,0,0.5)' : 'none',
                    zIndex: isActive ? 10 : 1
                  }}>
                    <img src={t.avatar} alt={t.name} loading="lazy" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      pointerEvents: 'none'
                    }} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', width: '100%' }}>
            {testimonialsData.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div key={idx} onClick={() => handleBubbleClick(idx)} style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: isActive ? '2px solid #00c2ff' : '2px solid rgba(255,255,255,0.1)',
                  filter: isActive ? 'brightness(1) saturate(1)' : 'brightness(0.55) saturate(0.8)',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <img src={t.avatar} alt={t.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              );
            })}
          </div>
        )}

        {/* RIGHT COLUMN */}
        <div style={{ width: isMobile ? '100%' : '55%' }}>
          <div style={{
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.35s ease'
          }}>
            <h3 style={{
              fontSize: '56px',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-2px',
              lineHeight: 1,
              margin: 0,
              fontFamily: '"Barlow", sans-serif'
            }}>{activeTestimonial.platform}</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
              <span style={{ fontSize: '26px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif' }}>
                {activeTestimonial.rating}
              </span>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', marginTop: '36px', paddingLeft: '24px' }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '-10px',
                fontSize: '72px',
                lineHeight: 1,
                color: '#00c2ff',
                fontFamily: 'Georgia, serif',
                opacity: 0.9
              }}>"</span>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.78)',
                fontStyle: 'italic',
                margin: 0,
                fontFamily: '"Barlow", sans-serif'
              }}>{activeTestimonial.quote}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '36px' }}>
              <img className="ca-hover-popup" src={activeTestimonial.avatar} alt={activeTestimonial.name} style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #00c2ff',
                boxShadow: '0 0 12px rgba(0, 194, 255, 0.4)'
              }} />
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#00c2ff',
                  fontFamily: '"Barlow", sans-serif'
                }}>{activeTestimonial.name}, {activeTestimonial.title}</div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                  fontFamily: '"Barlow", sans-serif'
                }}>{activeTestimonial.platformLabel}</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '32px' }}>
              {testimonialsData.map((_, idx) => (
                <div key={idx} onClick={() => handleBubbleClick(idx)} style={{
                  width: idx === activeIndex ? '28px' : '8px',
                  height: '8px',
                  borderRadius: idx === activeIndex ? '4px' : '50%',
                  background: idx === activeIndex ? '#00c2ff' : 'rgba(255,255,255,0.18)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
