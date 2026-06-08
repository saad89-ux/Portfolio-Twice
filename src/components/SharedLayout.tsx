"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeSwitch } from './ThemeSwitch';

export type PageName = 'Home' | 'Services' | 'Portfolio' | 'About Us' | 'Careers' | 'SEO & ORGANIC GROWTH' | 'PERFORMANCE MARKETING' | 'WEB DESIGN & DEVELOPMENT' | 'BRAND STRATEGY & IDENTITY' | 'CONTENT MARKETING' | 'MARKETING AUTOMATION & CRM' | 'Contact' | 'Blog';

const navItems: PageName[] = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog'];

// Helper to determine active page from pathname
const getActivePage = (pathname: string): PageName => {
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    if (slug === 'seo-organic-growth') return 'SEO & ORGANIC GROWTH';
    if (slug === 'performance-marketing') return 'PERFORMANCE MARKETING';
    if (slug === 'web-design-development') return 'WEB DESIGN & DEVELOPMENT';
    if (slug === 'brand-strategy-identity') return 'BRAND STRATEGY & IDENTITY';
    if (slug === 'content-marketing') return 'CONTENT MARKETING';
    if (slug === 'marketing-automation-crm') return 'MARKETING AUTOMATION & CRM';
    return 'Services';
  }
  if (pathname.startsWith('/blog')) return 'Blog';
  if (pathname === '/about') return 'About Us';
  if (pathname === '/services') return 'Services';
  if (pathname === '/portfolio') return 'Portfolio';
  if (pathname === '/contact') return 'Contact';
  return 'Home';
};

// Helper to get route from PageName
export const getRouteForPage = (page: PageName): string => {
  const routes: Record<string, string> = {
    'Home': '/',
    'About Us': '/about',
    'Services': '/services',
    'Portfolio': '/portfolio',
    'Careers': '/careers',
    'Blog': '/blog',
    'Contact': '/contact',
    'SEO & ORGANIC GROWTH': '/services/seo-organic-growth',
    'PERFORMANCE MARKETING': '/services/performance-marketing',
    'WEB DESIGN & DEVELOPMENT': '/services/web-design-development',
    'BRAND STRATEGY & IDENTITY': '/services/brand-strategy-identity',
    'CONTENT MARKETING': '/services/content-marketing',
    'MARKETING AUTOMATION & CRM': '/services/marketing-automation-crm'
  };
  return routes[page] || '/';
};

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = getActivePage(pathname || '/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageName) => {
    setMenuOpen(false);
    router.push(getRouteForPage(page));
  };

  return <React.Fragment>
      <header className="nav-header" style={{
      width: '100%',
      height: '96px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 86px',
      backgroundColor: 'var(--bg-primary)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
      transition: 'all 0.3s ease'
    }}>
        {/* Logo */}
        <div style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }} onClick={() => handleNavClick('Home')}>
          <img className="logo-img" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2f27409e-ca8b-4ecc-a6bc-ba60974bd799.png" alt="Logo" style={{
          width: '64px',
          height: '64px',
          objectFit: 'cover'
        }} />
          <span className="logo-text" style={{
          color: 'var(--text-primary)',
          fontSize: '20px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 700,
          marginLeft: '4px',
          lineHeight: '1.1'
        }}>
            Catalyst
            <br />
            Analytics
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '22px'
      }}>
          {navItems.map(item => <button key={item} className="nav-item" onClick={() => handleNavClick(item)} style={{
          background: 'none',
          border: 'none',
          color: currentPage === item ? 'var(--brand-500-strong)' : 'var(--text-primary)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer',
          padding: '10px',
          transition: 'color 0.2s ease',
          borderBottom: currentPage === item ? '2px solid var(--brand-500-strong)' : '2px solid transparent'
        }}>
              {item}
            </button>)}
        </nav>

        {/* Desktop CTA */}
        <button className="primary-btn desktop-cta" style={{
        width: '140px',
        padding: '14px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--brand-500-strong)',
        border: '1px dotted var(--text-primary)',
        borderRadius: '10px',
        color: 'var(--text-primary)',
        fontSize: '14px',
        fontWeight: 600,
        fontFamily: '"Barlow", sans-serif',
        lineHeight: '14px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease'
      }} onClick={() => handleNavClick('Contact')}>
          Contact Us
        </button>

        {/* Theme Switch */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
          <ThemeSwitch />
        </div>

        {/* Hamburger */}
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        padding: '8px'
      }} aria-label="Toggle menu">
          <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
        }} />
          <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          opacity: menuOpen ? 0 : 1
        }} />
          <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: 'var(--text-primary)',
          transition: 'all 0.3s ease',
          transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
        }} />
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && <div className="mobile-menu" style={{
      position: 'fixed',
      top: '96px',
      left: 0,
      width: '100%',
      backgroundColor: 'var(--bg-card-alt)',
      backdropFilter: 'blur(12px)',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 0 24px',
      borderBottom: '1px solid var(--border-light)'
    }}>
          {navItems.map(item => <button key={item} className="nav-item" onClick={() => handleNavClick(item)} style={{
        background: 'none',
        border: 'none',
        color: currentPage === item ? 'var(--brand-500-strong)' : 'var(--text-primary)',
        fontSize: '17px',
        fontFamily: '"Barlow", sans-serif',
        cursor: 'pointer',
        padding: '14px 24px',
        textAlign: 'left',
        transition: 'color 0.2s ease'
      }}>
              {item}
            </button>)}
          <div style={{
        padding: '8px 24px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif', fontSize: '16px', fontWeight: 600 }}>Theme</span>
              <ThemeSwitch />
            </div>
            <button className="primary-btn" style={{
          width: '100%',
          padding: '14px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--brand-500-strong)',
          border: '1px dotted var(--text-primary)',
          borderRadius: '10px',
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: '"Barlow", sans-serif',
          lineHeight: '14px',
          cursor: 'pointer',
          boxSizing: 'border-box',
          transition: 'all 0.2s ease'
        }} onClick={() => handleNavClick('Contact')}>
              Contact Us
            </button>
          </div>
        </div>}
    </React.Fragment>;
};

export const Footer: React.FC = () => {
  const router = useRouter();

  const handleNavClick = (page: PageName) => {
    router.push(getRouteForPage(page));
  };

  return <footer style={{
    width: '100%',
    maxWidth: '1440px',
    padding: '80px 86px',
    marginTop: 'auto',
    boxSizing: 'border-box'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(240px, 320px) repeat(4, minmax(160px, 1fr))',
      gap: '40px',
      paddingBottom: '42px',
      borderBottom: '1px solid var(--border-light)'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          cursor: 'pointer'
        }} onClick={() => handleNavClick('Home')}>
            <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, var(--brand-600-strong), rgba(145,104,255,1))',
            display: 'grid',
            placeItems: 'center'
          }}>
              <span style={{
              color: 'var(--text-primary)',
              fontSize: '22px',
              fontWeight: 800,
              lineHeight: 1
            }}>M</span>
            </div>
            <div>
              <div style={{
              color: 'var(--text-primary)',
              fontSize: '20px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800,
              lineHeight: 1.05
            }}>
                Ahsan
                <br />
                Designs
              </div>
            </div>
          </div>
          <p style={{
          color: 'var(--text-muted)',
          fontSize: '15px',
          lineHeight: '26px',
          fontFamily: '"Barlow", sans-serif',
          maxWidth: '320px',
          margin: 0
        }}>
            A digital marketing agency focused on driving real growth through data, creativity, and performance.
          </p>
          <div style={{
          display: 'flex',
          gap: '16px'
        }}>
            {['linkedin', 'instagram', 'dribbble', 'globe'].map((icon, idx) => <span key={idx} style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer'
            }}>
              <span style={{
                color: 'var(--text-muted)',
                fontSize: '14px'
              }}>{icon[0].toUpperCase()}</span>
            </span>)}
          </div>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>
          <span style={{
          color: 'var(--text-primary)',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif'
        }}>
            Services
          </span>
          {[
            { label: 'SEO & Organic Growth', page: 'SEO & ORGANIC GROWTH' },
            { label: 'Performance Marketing', page: 'PERFORMANCE MARKETING' },
            { label: 'Web Design & Development', page: 'WEB DESIGN & DEVELOPMENT' },
            { label: 'Brand Strategy & Identity', page: 'BRAND STRATEGY & IDENTITY' },
            { label: 'Content Marketing', page: 'CONTENT MARKETING' },
            { label: 'Marketing Automation & CRM', page: 'MARKETING AUTOMATION & CRM' }
          ].map(item => <span key={item.label} onClick={() => handleNavClick(item.page as any)} style={{
            color: 'var(--text-muted)',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-500-strong)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
          >{item.label}</span>)}
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>
          <span style={{
          color: 'var(--text-primary)',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif'
        }}>
            Industries
          </span>
          {['Ecommerce', 'Healthcare', 'Real Estate', 'Finance', 'Education', 'Technology'].map(item => <span key={item} style={{
            color: 'var(--text-muted)',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            cursor: 'default'
          }}>{item}</span>)}
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>
          <span style={{
          color: 'var(--text-primary)',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif'
        }}>
            Company
          </span>
          {['About Us', 'Our Work', 'Case Studies', 'Careers', 'Blog', 'Contact'].map(item => <span key={item} onClick={() => { if (item === 'Contact') handleNavClick('Contact'); }} style={{
            color: 'var(--text-muted)',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            cursor: item === 'Contact' ? 'pointer' : 'default'
          }}>{item}</span>)}
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>
          <span style={{
          color: 'var(--text-primary)',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif'
        }}>
            Get in Touch
          </span>
          {[
          { label: 'hello@mohsindesigns.com', icon: '✉' },
          { label: '+92 300 1234567', icon: '📞' },
          { label: 'Karachi, Pakistan', icon: '📍' },
          { label: 'Available Worldwide', icon: '🌍' }
        ].map(item => <div key={item.label} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              color: 'rgba(255, 255, 255, 0.88)',
              fontSize: '14px'
            }}>
              {item.icon}
            </span>
            <span style={{
              color: 'var(--text-muted)',
              fontSize: '16px',
              fontFamily: '"Barlow", sans-serif'
            }}>{item.label}</span>
          </div>)}
        </div>
      </div>

      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      paddingTop: '32px'
    }}>
        <p style={{
        color: 'var(--text-muted)',
        fontSize: '14px',
        fontFamily: '"Barlow", sans-serif',
        margin: 0
      }}>
          © 2026 Ahsan Designs. All rights reserved.
        </p>
        <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
          <span style={{
          color: 'var(--text-muted)',
          fontSize: '14px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer'
        }}>
            Privacy Policy
          </span>
          <span style={{
          color: 'var(--text-muted)',
          fontSize: '14px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer'
        }}>
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>;
};

interface SharedLayoutProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SharedLayout: React.FC<SharedLayoutProps> = ({ children, className, style }) => {
  return (
    <div className={`page-shell landing-page ${className || ''}`} style={{
      minHeight: '100vh',
      boxSizing: 'border-box',
      overflowX: 'clip',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes robotJump {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-8px); }
          50% { transform: translateY(-22px); }
          75% { transform: translateY(-8px); }
        }
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-robot-jump {
          animation: robotJump 2.8s ease-in-out infinite;
          transform-origin: center bottom;
        }
        .nav-item:hover { color: var(--brand-500-strong) !important; }
        .primary-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 12px var(--brand-500-strong); }
        .primary-btn:active { transform: translateY(0); }
        .service-card:hover { transform: translateY(-8px); background-color: rgba(30, 30, 30, 1) !important; }
        .value-circle:hover { border-color: var(--brand-500-strong) !important; transform: scale(1.02); }
        .mobile-menu { animation: slideDown 0.25s ease; }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .hero-content { left: 0 !important; top: 64px !important; width: 100% !important; padding: 0 24px !important; box-sizing: border-box !important; }
          .hero-visual { display: none !important; }
          .hero-section { height: auto !important; min-height: 520px !important; padding-bottom: 48px !important; }
          .hero-glow { width: 100% !important; opacity: 0.5 !important; }
          .hero-h1 { font-size: clamp(32px, 9vw, 56px) !important; line-height: 1.15 !important; }
          .hero-decisions-badge { font-size: clamp(32px, 9vw, 56px) !important; line-height: 1.3 !important; height: auto !important; padding: 4px 16px !important; margin-top: 4px !important; }
          .hero-p { width: 100% !important; font-size: 16px !important; }
          .hero-cta-btn { width: 165px !important; }
          .services-grid { flex-direction: column !important; align-items: center !important; padding: 0 24px !important; }
          .service-card-item { width: 100% !important; max-width: 420px !important; }
          .values-grid { flex-wrap: wrap !important; padding: 0 24px !important; gap: 20px !important; }
          .value-circle-item { width: 160px !important; height: 160px !important; padding: 0 18px !important; }
          .value-icon { width: 22px !important; margin-bottom: 8px !important; }
          .value-title { font-size: 14px !important; margin: 0 0 6px 0 !important; }
          .value-text { font-size: 11px !important; line-height: 1.4 !important; }
          .story-wrapper { flex-direction: column !important; padding: 0 24px !important; gap: 32px !important; }
          .story-nav-btn { display: none !important; }
          .story-items-row { flex-direction: column !important; gap: 40px !important; }
          .faq-section { padding: 60px 16px 80px !important; }
          .section-pad { padding: 80px 0 !important; }
          .services-title { width: 100% !important; padding: 0 24px !important; box-sizing: border-box !important; font-size: 26px !important; line-height: 1.4 !important; }
          .nav-header { padding: 0 20px !important; }
          .logo-text { font-size: 16px !important; }
          .logo-img { width: 48px !important; height: 48px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .hero-content { left: 40px !important; top: 120px !important; width: 55% !important; }
          .hero-h1 { font-size: clamp(38px, 6vw, 60px) !important; line-height: 1.15 !important; }
          .hero-decisions-badge { font-size: clamp(38px, 6vw, 60px) !important; line-height: 1.3 !important; height: auto !important; padding: 4px 20px !important; }
          .hero-p { width: 90% !important; font-size: 17px !important; }
          .hero-visual { left: auto !important; right: 0 !important; width: 42% !important; top: 100px !important; }
          .hero-section { height: 780px !important; }
          .services-grid { flex-wrap: wrap !important; justify-content: center !important; padding: 0 32px !important; gap: 28px !important; }
          .service-card-item { width: calc(50% - 14px) !important; max-width: 380px !important; }
          .values-grid { flex-wrap: wrap !important; padding: 0 32px !important; gap: 24px !important; }
          .value-circle-item { width: 220px !important; height: 220px !important; padding: 0 28px !important; }
          .story-wrapper { padding: 0 32px !important; }
          .story-items-row { gap: 32px !important; }
          .faq-section { padding: 80px 32px 120px !important; }
          .nav-header { padding: 0 32px !important; }
        }
        @media (min-width: 1024px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
        }
      `}</style>
      <Navbar />
      <div style={{
        height: '96px',
        width: '100%',
        flexShrink: 0
      }} />
      
      {/* Page Content */}
      {children}
      
      <Footer />
    </div>
  );
};
