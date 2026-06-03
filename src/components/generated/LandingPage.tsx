import React, { useState, useEffect } from 'react';
import { ServicesPage } from './ServicesPage';
import { PortfolioShowcase } from './PortfolioShowcase';
import { AboutSection } from './AboutSection';
import { CareerJobListing } from './CareerJobListing';
import { FAQSection } from './FAQSection';
import { IndustriesSection } from './IndustriesSection';
import { Star } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { TrustSection } from './TrustSection';
import { ServicesGridSection } from './ServicesGridSection';
import { PortfolioSection } from './PortfolioSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { BlogSection } from './BlogSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FinalCTASection } from './FinalCTASection';
import { ContactFormSection } from './ContactFormSection';
import { ThemeSwitch } from '../ThemeSwitch';
import { CompanyIntroSection } from './CompanyIntroSection';
import { JourneyTimelineSection } from './JourneyTimelineSection';
import { MissionVisionSection } from './MissionVisionSection';
import { CoreValuesSection } from './CoreValuesSection';
import { WhyTrustUsSection } from './WhyTrustUsSection';
import { TeamSection } from './TeamSection';
import { TrustedBrandsSection } from './TrustedBrandsSection';
import { ResultsImpactSection } from './ResultsImpactSection';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
interface FAQItemData {
  question: string;
  answer: string;
}
interface FAQItemProps {
  question: string;
  answer: string;
  icon: string;
  isOpen: boolean;
  onClick: () => void;
}
type PageName = 'Home' | 'Services' | 'Portfolio' | 'About Us' | 'Careers';
const faqData: FAQItemData[] = [{
  question: 'What digital marketing services do you offer?',
  answer: 'We offer a full range of digital marketing services including SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Conversion Rate Optimization, and Analytics.'
}, {
  question: 'How long does it take to see results?',
  answer: 'Most clients begin seeing measurable performance improvements within 8 to 12 weeks, depending on campaign scale and market conditions.'
}, {
  question: 'What makes your digital marketing strategies different?',
  answer: 'Our strategies combine data-driven audience targeting, creative messaging, and ongoing optimization to deliver scalable growth and consistent ROI.'
}, {
  question: 'Do you work with businesses of all sizes?',
  answer: 'Yes. We tailor our approach to startups, growing SMBs, and established enterprises to fit each budget and growth stage.'
}, {
  question: 'How do you measure the success of campaigns?',
  answer: 'We track KPIs such as traffic, lead quality, conversion rate, cost per acquisition, and revenue growth to ensure every campaign delivers value.'
}, {
  question: 'Can I customize the services I need?',
  answer: 'Absolutely. You can choose services a la carte or build a fully integrated marketing program based on your business goals.'
}];
const industryCards = [{
  number: '01',
  title: 'E-Commerce',
  desc: 'Fueling online stores with data-driven marketing that increases traffic and sales.',
  image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
}, {
  number: '02',
  title: 'Healthcare',
  desc: 'Building patient trust and brand awareness through targeted digital strategies.',
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
}, {
  number: '03',
  title: 'Real Estate',
  desc: 'Generating high-quality leads and maximizing property visibility online.',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
}, {
  number: '04',
  title: 'Education',
  desc: 'Attracting students and enhancing enrollment with result-driven campaigns.',
  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
}, {
  number: '05',
  title: 'Finance',
  desc: 'Helping financial brands build credibility and acquire high-value clients.',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516f.svg'
}, {
  number: '06',
  title: 'SaaS & Technology',
  desc: 'Scaling tech brands with performance marketing that drives sign-ups and growth.',
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504f3?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
}, {
  number: '07',
  title: 'Travel & Hospitality',
  desc: 'Inspiring journeys and bookings through engaging digital experiences.',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
}, {
  number: '08',
  title: 'Manufacturing',
  desc: 'Generating B2B leads and strengthening brand presence in competitive markets.',
  image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
}, {
  number: '09',
  title: 'Fitness & Wellness',
  desc: 'Building strong communities and boosting memberships through smart marketing.',
  image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
}, {
  number: '10',
  title: 'Food & Restaurant',
  desc: 'Driving footfall and online orders with creative and localized campaigns.',
  image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516f.svg'
}];
const valueItems = [{
  title: 'Innovation',
  text: 'Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.',
  icon: '6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
}, {
  title: 'Collaboration',
  text: 'Working closely with clients to develop tailored solutions that drive measurable success.',
  icon: '7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
}, {
  title: 'Excellence',
  text: 'Maintaining the highest standards in code quality, system performance, and client outcomes.',
  icon: '9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
}, {
  title: 'Integrity',
  text: 'Operating with transparency and ethical considerations at the forefront of all decisions.',
  icon: 'd4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
}];
const storyItems = [{
  text: 'We saw businesses drowning in data but struggling to make sense of it. Decisions were slow, teams were overwhelmed, and insights were buried.',
  imgId: '383678ce-92bc-48a7-b9d9-e3e192b1c49f.svg',
  highlight: false
}, {
  text: "That's when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
  imgId: '333bd0da-fe02-4bea-9f2d-b87e574e2e5a.svg',
  highlight: true
}, {
  text: 'So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.',
  imgId: 'a052f191-8e2d-481e-bebb-df751d7d3be8.svg',
  highlight: false
}];
const navItems: PageName[] = ['Home', 'Services', 'Portfolio', 'About Us', 'Careers'];
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  icon,
  isOpen,
  onClick
}) => {
  return <div style={{
    borderRadius: '28px',
    overflow: 'hidden',
    border: isOpen ? '1px solid rgba(0, 194, 255, 0.68)' : '1px solid rgba(255, 255, 255, 0.08)',
    background: isOpen ? 'linear-gradient(180deg, rgba(0, 194, 255, 0.16), rgba(0, 194, 255, 0.08))' : 'rgba(8, 12, 32, 0.88)',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.25)'
  }}>
      <button onClick={onClick} style={{
      all: 'unset',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '18px',
      padding: '24px 26px',
      cursor: 'pointer'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        minWidth: 0
      }}>
          <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '18px',
          background: isOpen ? '#00c2ff' : 'rgba(0, 194, 255, 0.16)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--text-primary)',
          fontSize: '22px'
        }}>
            {icon}
          </div>
          <span style={{
          color: 'var(--text-primary)',
          fontSize: '16px',
          fontWeight: 700,
          lineHeight: 1.35,
          fontFamily: '"Barlow", sans-serif',
          minWidth: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
            {question}
          </span>
        </div>
        <span style={{
        color: 'var(--text-primary)',
        fontSize: '26px',
        lineHeight: 1,
        fontFamily: '"Barlow", sans-serif'
      }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && <div style={{
      padding: '0 26px 24px',
      color: 'var(--text-muted)',
      fontSize: '15px',
      lineHeight: '26px',
      fontFamily: '"Barlow", sans-serif'
    }}>
        {answer}
      </div>}
    </div>;
};
interface NavbarProps {
  activePage: PageName;
  onNavigate: (page: PageName) => void;
  scrolled: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  scrolled
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = (page: PageName) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <React.Fragment>
      <header className="nav-header" style={{
      width: '100%',
      height: '96px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 86px',
      backgroundColor: scrolled ? 'rgba(3, 3, 3, 0.95)' : 'rgba(3, 3, 3, 1)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
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
          color: activePage === item ? 'rgba(0, 194, 255, 1)' : 'white',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer',
          padding: '10px',
          transition: 'color 0.2s ease',
          borderBottom: activePage === item ? '2px solid rgba(0, 194, 255, 1)' : '2px solid transparent'
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
        backgroundColor: 'rgba(0, 194, 255, 1)',
        border: '1px dotted rgba(255, 255, 255, 1)',
        borderRadius: '10px',
        color: 'var(--text-primary)',
        fontSize: '14px',
        fontWeight: 600,
        fontFamily: '"Barlow", sans-serif',
        lineHeight: '14px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease'
      }}>
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
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
          transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
        }} />
          <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
          opacity: menuOpen ? 0 : 1
        }} />
          <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: 'white',
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
        color: activePage === item ? 'rgba(0, 194, 255, 1)' : 'white',
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
          backgroundColor: 'rgba(0, 194, 255, 1)',
          border: '1px dotted rgba(255, 255, 255, 1)',
          borderRadius: '10px',
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: '"Barlow", sans-serif',
          lineHeight: '14px',
          cursor: 'pointer',
          boxSizing: 'border-box',
          transition: 'all 0.2s ease'
        }}>
              Contact Us
            </button>
          </div>
        </div>}
    </React.Fragment>;
};
interface FooterProps {
  onNavigate: (page: PageName) => void;
}
const Footer: React.FC<FooterProps> = ({
  onNavigate
}) => {
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
        }} onClick={() => onNavigate('Home')}>
            <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(10,132,255,1), rgba(145,104,255,1))',
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
          {['SEO', 'Performance Marketing', 'Social Media Marketing', 'Web Design', 'Content Marketing', 'Conversion Optimization'].map(item => <span key={item} style={{
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
          {['About Us', 'Our Work', 'Case Studies', 'Careers', 'Blog', 'Contact'].map(item => <span key={item} style={{
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

const industriesData = [
  {
    id: '01',
    name: 'E-Commerce',
    tagline: 'Scale your store. Dominate your niche.',
    description: 'We build full-funnel ad strategies for online stores — from awareness to purchase to repeat buyers. Meta, Google, TikTok — we run it all.',
    stats: [
      { label: 'Average ROAS', value: '3.8x' },
      { label: 'Lower Cart Abandonment', value: '65%' },
      { label: 'Revenue Generated', value: 'PKR 50M+' }
    ],
    videoUrl: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
  },
  {
    id: '02',
    name: 'Food & Beverage',
    tagline: 'Fill tables. Build loyal customers.',
    description: 'From restaurant chains to cloud kitchens — we handle social media, influencer campaigns, Google presence, and delivery platform visibility.',
    stats: [
      { label: 'More Footfall', value: '40%' },
      { label: 'Followers in 30 Days', value: '12K' },
      { label: 'Google Rating', value: '4.7 Star' }
    ],
    videoUrl: 'https://videos.pexels.com/video-files/3994840/3994840-uhd_2560_1440_30fps.mp4'
  },
  {
    id: '03',
    name: 'Real Estate',
    tagline: 'Turn browsers into buyers.',
    description: 'Hyper-targeted lead generation for property developers and agents. We bring qualified buyers — not just clicks.',
    stats: [
      { label: 'Lower Cost Per Lead', value: '72%' },
      { label: 'Qualified Leads', value: '3x' },
      { label: 'Projects Sold Out in 45 Days', value: '2' }
    ],
    videoUrl: 'https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_30fps.mp4'
  },
  {
    id: '04',
    name: 'Education',
    tagline: 'More enrollments. Lower acquisition cost.',
    description: 'YouTube ads, SEO content, and email automation that fills your courses and coaching programs with serious students.',
    stats: [
      { label: 'New Enrollments/Month', value: '280' },
      { label: 'Lower Cost Per Enrollment', value: '55%' },
      { label: 'Email Open Rate', value: '38%' }
    ],
    videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'
  },
  {
    id: '05',
    name: 'Healthcare',
    tagline: 'More patients. Better visibility.',
    description: 'Local SEO, Google Ads, and landing pages that bring real appointment bookings to clinics, hospitals, and healthcare brands.',
    stats: [
      { label: 'Google in 3 Weeks', value: 'Page 1' },
      { label: 'Appointments/Month', value: '90+' },
      { label: 'Google Maps Rating', value: '4.9 Star' }
    ],
    videoUrl: 'https://videos.pexels.com/video-files/4226263/4226263-uhd_2560_1440_25fps.mp4'
  },
  {
    id: '06',
    name: 'Technology & SaaS',
    tagline: 'Grow MRR. Reduce churn.',
    description: 'B2B lead generation, LinkedIn strategy, content marketing, and conversion optimization for tech companies and SaaS products.',
    stats: [
      { label: 'MRR Growth', value: '2.5x' },
      { label: 'Lower CAC', value: '60%' },
      { label: 'Qualified B2B Leads/Month', value: '400+' }
    ],
    videoUrl: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4'
  }
];

const IndustriesServedSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  
  // Video crossfade state
  const [activeVid, setActiveVid] = useState<'A' | 'B'>('A');
  const [srcA, setSrcA] = useState(industriesData[0].videoUrl);
  const [srcB, setSrcB] = useState('');
  const [errA, setErrA] = useState(false);
  const [errB, setErrB] = useState(false);
  
  const videoARef = React.useRef<HTMLVideoElement>(null);
  const videoBRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveIdx(index);
        }
      });
    }, { threshold: 0.4 });

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const newSrc = industriesData[activeIdx].videoUrl;
    if (activeVid === 'A' && srcA !== newSrc) {
      setErrB(false);
      setSrcB(newSrc);
      setActiveVid('B');
    } else if (activeVid === 'B' && srcB !== newSrc) {
      setErrA(false);
      setSrcA(newSrc);
      setActiveVid('A');
    }
  }, [activeIdx]);

  useEffect(() => {
    if (videoARef.current && srcA) {
      videoARef.current.load();
      const p = videoARef.current.play();
      if (p !== undefined) p.catch(() => setErrA(true));
    }
  }, [srcA]);

  useEffect(() => {
    if (videoBRef.current && srcB) {
      videoBRef.current.load();
      const p = videoBRef.current.play();
      if (p !== undefined) p.catch(() => setErrB(true));
    }
  }, [srcB]);

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx);
    if (isMobile) {
      itemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <IndustriesSection />
  );
};



const HomeContent: React.FC<{
  onNavigate: (page: PageName) => void;
}> = ({
  onNavigate
}) => {

  return <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
      <HeroSection />

      <AboutSection />

      <TrustSection />

      <ServicesGridSection />

      <PortfolioSection />

      <CaseStudiesSection />

      {/* Companies Logo Ticker — marquee */}
      <TrustedBrandsSection />

      {/* Why Choose Us */}
      <section className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '100px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <h2 style={{
        color: 'var(--text-primary)',
        fontSize: 'clamp(26px, 4vw, 36px)',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '75px'
      }}>
          Why Choose Us
        </h2>

        <div className="values-grid" style={{
        display: 'flex',
        gap: '30px',
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        padding: '0 80px',
        boxSizing: 'border-box'
      }}>
          {valueItems.map(val => <div key={val.title} className="value-circle value-circle-item ca-interactive-card" style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-secondary)',
          border: '10px solid rgba(0, 0, 0, 1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 42px',
          boxSizing: 'border-box',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          cursor: 'default',
          flexShrink: 0
        }}>
              <img className="value-icon ca-interactive-icon" src={`https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${val.icon}`} alt={val.title} style={{
            width: '33px',
            marginBottom: '16px'
          }} />
              <h4 className="value-title" style={{
            color: 'var(--text-primary)',
            fontSize: '20px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 500,
            margin: '0 0 16px 0'
          }}>
                {val.title}
              </h4>
              <p className="value-text" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '14px',
            fontFamily: '"Barlow", sans-serif',
            margin: 0,
            lineHeight: '16.8px'
          }}>
                {val.text}
              </p>
            </div>)}
        </div>
      </section>

      {/* Industries Served Section */}
      <IndustriesServedSection />







      <BlogSection />

      {/* Testimonials Section */}
      <TestimonialsSection />


      {/* FAQ Section */}
      <FAQSection />



      <FinalCTASection />

      <ContactFormSection />

      {/* Decorative element */}
      <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/c3647cc6-199c-420f-a54d-701790a3131f.svg" alt="" aria-hidden="true" style={{
      position: 'absolute',
      right: '0',
      top: '1636px',
      width: 'min(267px, 18vw)',
      transform: 'rotate(180deg)',
      opacity: 0.4,
      pointerEvents: 'none'
    }} />
    </div>;
};
export const LandingPage: React.FC<BaseComponentProps> = ({
  className,
  style
}) => {
  const [activePage, setActivePage] = useState<PageName>('Home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavigate = (page: PageName) => {
    setActivePage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <div className={`landing-page ${className || ''}`} style={{
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'var(--bg-primary)',
    boxSizing: 'border-box',
    overflowX: 'clip',
    position: 'relative',
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
        .nav-item:hover { color: rgba(0, 194, 255, 1) !important; }
        .primary-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0, 194, 255, 0.3); }
        .primary-btn:active { transform: translateY(0); }
        .service-card:hover { transform: translateY(-8px); background-color: rgba(30, 30, 30, 1) !important; }
        .value-circle:hover { border-color: rgba(0, 194, 255, 0.5) !important; transform: scale(1.02); }
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

      <Navbar activePage={activePage} onNavigate={handleNavigate} scrolled={scrolled} />

      {/* Page spacer for fixed navbar */}
      <div style={{
      height: '96px',
      width: '100%',
      flexShrink: 0
    }} />

      {/* Page Content */}
      {activePage === 'Home' && <HomeContent onNavigate={handleNavigate} />}
      {activePage === 'Services' && <ServicesPage />}
      {activePage === 'Portfolio' && <PortfolioShowcase />}
      {activePage === 'About Us' && <><AboutSection /><CompanyIntroSection /><TrustSection /><JourneyTimelineSection /><MissionVisionSection /><CoreValuesSection /><WhyTrustUsSection /><TeamSection /><TrustedBrandsSection /><ResultsImpactSection /><TestimonialsSection /><FAQSection /><FinalCTASection /></>}
      {activePage === 'Careers' && <CareerJobListing />}

      <Footer onNavigate={handleNavigate} />
    </div>;
};
