import React, { useState, useEffect } from 'react';
import { ServicesPage } from './ServicesPage';
import { PortfolioShowcase } from './PortfolioShowcase';
import { AboutSection } from './AboutSection';
import { CareerJobListing } from './CareerJobListing';
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
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}
type PageName = 'Home' | 'Services' | 'Portfolio' | 'About Us' | 'Careers';
const faqData: FAQItemData[] = [{
  question: 'What services does Catalyst Analytics provide?',
  answer: 'Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.'
}, {
  question: 'How do you ensure data privacy and security?',
  answer: 'We implement industry-standard encryption, strict access controls, and regular security audits. Our infrastructure follows SOC2 compliance guidelines to ensure your sensitive data remains protected at all times.'
}, {
  question: 'Can you integrate with our existing data infrastructure?',
  answer: 'Yes, our engineering team specializes in building robust pipelines that connect seamlessly with your existing AWS, Azure, or Google Cloud environments, as well as on-premise solutions.'
}, {
  question: 'What is your typical project timeline?',
  answer: 'Timelines vary based on complexity, but a typical ML model implementation ranges from 4 to 12 weeks, while full-scale data engineering projects are scoped in phases to ensure continuous delivery.'
}, {
  question: 'Do you provide ongoing support after implementation?',
  answer: 'Absolutely. We offer dedicated maintenance packages that include 24/7 monitoring, model retraining, and system updates to ensure your AI solutions continue to perform optimally.'
}];
const serviceCards = [{
  title: 'Predictive Analytics',
  desc: 'Forecast trends and make data-driven decisions with our advanced ML models.',
  img: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/04c5428b-1a36-404f-a086-b8460703ddb3.png'
}, {
  title: 'AI Consulting',
  desc: 'Expert guidance on implementing AI solutions for your business needs.',
  img: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/56ee8f00-c3fd-45cb-b607-0a16860ebb2c.png'
}, {
  title: 'Data Engineering',
  desc: 'Build robust data pipelines and infrastructure for ML operations.',
  img: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1e6f50bf-cba2-4b1e-a74d-544743d12fc5.png'
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
const clientAvatars = ['3a9e176a-3863-474d-a596-d593c4d569ea.png', '998d15ff-acf1-4ed8-b332-f13d639b3e03.png', '363356fa-f16d-41aa-99ea-3c436d6bc5df.png'];
const navItems: PageName[] = ['Home', 'Services', 'Portfolio', 'About Us', 'Careers'];
const FAQItem: React.FC<FAQItemProps> = ({
  number,
  question,
  answer,
  isOpen,
  onClick
}) => {
  return <div className="ca-interactive-card" onClick={onClick} style={{
    display: 'flex',
    flexDirection: 'row',
    padding: 'clamp(16px, 3vw, 30px) clamp(16px, 4vw, 50px)',
    gap: 'clamp(16px, 2.5vw, 30px)',
    backgroundColor: isOpen ? 'rgba(30, 30, 30, 1)' : 'rgba(20, 20, 20, 1)',
    boxSizing: 'border-box',
    borderRadius: '36px',
    alignSelf: 'stretch',
    cursor: 'pointer',
    border: isOpen ? '1px solid rgba(10, 132, 255, 0.3)' : '1px solid transparent',
    overflow: 'hidden'
  }}>
      <div style={{
      width: 'clamp(48px, 8vw, 80px)',
      height: 'clamp(48px, 8vw, 80px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(180deg, rgba(36, 36, 36, 1.00) 0%, rgba(36, 36, 36, 0.00) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxSizing: 'border-box',
      borderRadius: '12px',
      flexShrink: 0
    }}>
        <span style={{
        color: isOpen ? 'rgba(10, 132, 255, 1)' : 'rgba(255, 255, 255, 1)',
        fontSize: 'clamp(18px, 3vw, 28px)',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600,
        textAlign: 'center'
      }}>
          {number}
        </span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      paddingTop: isOpen ? '24px' : '8px',
      gap: '20px',
      flexGrow: 1,
      minWidth: 0
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        alignSelf: 'stretch'
      }}>
          <span style={{
          flexGrow: 1,
          color: isOpen ? 'rgba(10, 132, 255, 1)' : 'rgba(255, 255, 255, 1)',
          fontSize: 'clamp(15px, 2.5vw, 22px)',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 500,
          lineHeight: '1.3'
        }}>
            {question}
          </span>
          <img src={isOpen ? 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fdf6dc7b-75f4-4d99-afcb-bad883b1a562.svg' : 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/98270329-cb67-41de-ba10-a0e50126c1e4.svg'} alt="Toggle" style={{
          width: '28px',
          height: '28px',
          flexShrink: 0,
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
        }} />
        </div>
        {isOpen && <p style={{
        color: 'rgba(230, 230, 230, 1)',
        fontSize: 'clamp(14px, 2vw, 18px)',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 400,
        lineHeight: '1.6',
        margin: 0,
        animation: 'fadeIn 0.4s ease'
      }}>
            {answer}
          </p>}
      </div>
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
          color: 'white',
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
          color: activePage === item ? 'rgba(10, 132, 255, 1)' : 'white',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer',
          padding: '10px',
          transition: 'color 0.2s ease',
          borderBottom: activePage === item ? '2px solid rgba(10, 132, 255, 1)' : '2px solid transparent'
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
        backgroundColor: 'rgba(10, 132, 255, 1)',
        border: '1px dotted rgba(255, 255, 255, 1)',
        borderRadius: '10px',
        color: 'rgba(255, 255, 255, 1)',
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
      backgroundColor: 'rgba(10, 10, 10, 0.98)',
      backdropFilter: 'blur(12px)',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 0 24px',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
          {navItems.map(item => <button key={item} className="nav-item" onClick={() => handleNavClick(item)} style={{
        background: 'none',
        border: 'none',
        color: activePage === item ? 'rgba(10, 132, 255, 1)' : 'white',
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
        padding: '8px 24px 0'
      }}>
            <button className="primary-btn" style={{
          width: '100%',
          padding: '14px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(10, 132, 255, 1)',
          border: '1px dotted rgba(255, 255, 255, 1)',
          borderRadius: '10px',
          color: 'rgba(255, 255, 255, 1)',
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
    borderTop: '1px solid rgba(133, 133, 133, 1)',
    padding: '50px 86px',
    marginTop: 'auto',
    boxSizing: 'border-box'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '50px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }} onClick={() => onNavigate('Home')}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2f27409e-ca8b-4ecc-a6bc-ba60974bd799.png" alt="Logo" style={{
          width: '64px',
          height: '64px',
          objectFit: 'cover'
        }} />
          <span style={{
          color: 'white',
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
        <nav style={{
        display: 'flex',
        gap: '30px'
      }}>
          {navItems.map(link => <button key={link} onClick={() => onNavigate(link)} style={{
          background: 'none',
          border: 'none',
          color: 'rgba(230, 230, 230, 1)',
          fontSize: '18px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 500,
          cursor: 'pointer'
        }} onMouseEnter={e => e.currentTarget.style.color = 'rgba(10, 132, 255, 1)'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(230, 230, 230, 1)'}>
              {link}
            </button>)}
        </nav>
      </div>

      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '50px'
    }}>
        <div style={{
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap'
      }}>
          {[{
          icon: '5972ac63-7357-4496-b135-19bd34bed1c8.svg',
          text: 'contact@catalystanalytics.io'
        }, {
          icon: '8c5a1317-7deb-4f00-bbbf-9f609be9783c.svg',
          text: '+1 (469) 712-4672'
        }, {
          icon: '3647b4b0-3672-4377-a782-3aa870c62bf1.svg',
          text: '5511 Parkcrest Dr, Suite 103, Austin, TX 78731'
        }].map((item, i) => <button key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'none',
          border: 'none',
          borderBottom: '1px solid rgba(38,38,38,1)',
          paddingBottom: '4px',
          cursor: 'pointer'
        }}>
              <img src={`https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${item.icon}`} alt="icon" style={{
            width: '24px'
          }} />
              <span style={{
            color: 'rgba(230, 230, 230, 1)',
            fontSize: '18px',
            fontFamily: '"Barlow", sans-serif'
          }}>{item.text}</span>
            </button>)}
        </div>
        <div style={{
        display: 'flex',
        gap: '24px'
      }}>
          <span style={{
          color: 'rgba(152, 152, 154, 1)',
          fontSize: '18px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer'
        }}>Privacy Policy</span>
          <span style={{
          color: 'rgba(152, 152, 154, 1)',
          fontSize: '18px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer'
        }}>Terms of Service</span>
        </div>
      </div>

      <p style={{
      textAlign: 'center',
      color: 'rgba(152, 152, 154, 1)',
      fontSize: '18px',
      fontFamily: '"Barlow", sans-serif',
      margin: 0
    }}>
        © 2025 Catalyst Analytics. All rights reserved.
      </p>
    </footer>;
};
const HomeContent: React.FC<{
  onNavigate: (page: PageName) => void;
}> = ({
  onNavigate
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
      {/* Hero Section */}
      <section id="home" className="hero-section" style={{
      width: '100%',
      height: '932px',
      position: 'relative',
      maxWidth: '1440px',
      overflow: 'hidden'
    }}>
        {/* Dot grid background */}
        <img className="hero-glow" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2225324b-69f7-4b09-aa61-332f64bf95e6.svg" alt="" aria-hidden="true" style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '1039px',
        height: '100%',
        objectFit: 'cover',
        pointerEvents: 'none'
      }} />

        {/* Hero Text Content */}
        <div className="hero-content" style={{
        position: 'absolute',
        left: '149px',
        top: '225px',
        width: '712px',
        zIndex: 2
      }}>
          <h1 className="hero-h1" style={{
          color: 'white',
          fontSize: '72px',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          lineHeight: '87.1px',
          margin: '0 0 33px 0',
          letterSpacing: '-0.02em'
        }}>
            <span style={{
            display: 'block'
          }}>Transforming Data into</span>
            <span className="hero-decisions-badge" style={{
            display: 'inline-block',
            backgroundColor: 'rgba(10, 132, 255, 1)',
            borderRadius: '16px',
            padding: '0 28px',
            marginTop: '8px',
            lineHeight: '77px',
            height: '77px',
            boxSizing: 'border-box'
          }}>
              Decisions
            </span>
          </h1>
          <p className="hero-p" style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '20px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 400,
          lineHeight: '32px',
          width: '547px',
          margin: '0 0 33px 0'
        }}>
            Leverage the power of machine learning and AI to unlock insights and drive business growth
          </p>
          <button className="primary-btn hero-cta-btn" style={{
          width: '165px',
          height: '42px',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(10, 132, 255, 1)',
          border: 'none',
          borderRadius: '10px',
          color: 'white',
          fontSize: '14px',
          fontWeight: 700,
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer',
          marginBottom: '33px',
          transition: 'all 0.2s ease'
        }}>
            Book a Meeting
          </button>

          <div className="hero-social-proof" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
            <div style={{
            position: 'relative',
            width: '57px',
            height: '24px',
            flexShrink: 0
          }}>
              {clientAvatars.map((avatar, i) => <img key={avatar} src={`https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${avatar}`} style={{
              width: '24px',
              height: '24px',
              borderRadius: '100px',
              border: '2px solid rgba(3, 3, 3, 1)',
              position: 'absolute',
              left: `${i * 17}px`,
              objectFit: 'cover'
            }} alt="Client" />)}
            </div>
            <span style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            lineHeight: '20px'
          }}>
              Over <strong style={{
              fontWeight: 700
            }}>100+</strong> clients have worked with us
            </span>
          </div>
        </div>

        {/* Hero Visual — robot with jump animation */}
        <div className="hero-visual" style={{
        position: 'absolute',
        left: '826px',
        top: '148px',
        width: '572px',
        height: '655px',
        pointerEvents: 'none'
      }}>
          {/* Blue glow — layered for stronger Figma-matched wash */}
          <div className="hero-robot-glow hero-robot-glow--outer" style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          background: 'linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, rgba(120, 185, 255, 1) 55%, rgba(154, 192, 236, 1) 100%)',
          filter: 'blur(350px)',
          WebkitFilter: 'blur(350px)',
          left: '26px',
          top: '72px',
          opacity: 0.95,
          zIndex: 0,
          pointerEvents: 'none'
        }} />
          <div className="hero-robot-glow hero-robot-glow--core" style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.75) 0%, rgba(10, 132, 255, 0.35) 45%, rgba(10, 132, 255, 0) 72%)',
          filter: 'blur(90px)',
          WebkitFilter: 'blur(90px)',
          left: '126px',
          top: '152px',
          opacity: 1,
          zIndex: 0,
          pointerEvents: 'none'
        }} />
          <div className="hero-robot-jump" style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/ab9bf892-beb3-4c45-905c-3d51c34d1ead.svg" alt="" aria-hidden="true" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }} />
            <img className="hero-robot" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/de2a68bf-ec21-4394-ae40-09cb18b14ccf.png" alt="AI Robot" style={{
            position: 'absolute',
            width: '459px',
            height: 'auto',
            left: '35px',
            top: '100px',
            objectFit: 'contain'
          }} />
          </div>
        </div>
      </section>

      {/* Companies Logo Ticker — marquee */}
      <section className="clients-marquee">
        <div className="clients-marquee-track">
          <img className="clients-marquee-img" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg" alt="Partner companies" />
          <img className="clients-marquee-img" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg" alt="" aria-hidden="true" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '150px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/38c17c6c-94f7-4c85-857e-94a9dd01a28a.svg" alt="" aria-hidden="true" style={{
        position: 'absolute',
        left: '-28px',
        top: '50px',
        width: '267px',
        pointerEvents: 'none'
      }} />

        <h2 className="services-title" style={{
        width: '579px',
        color: 'white',
        fontSize: '36px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600,
        lineHeight: '56px',
        textAlign: 'center',
        marginBottom: '70px'
      }}>
          Our Ultimate Set of Services for Your Ideas Implementation
        </h2>

        <div className="services-grid" style={{
        display: 'flex',
        gap: '48px',
        padding: '0 106px',
        boxSizing: 'border-box',
        width: '100%'
      }}>
          {serviceCards.map(service => <div key={service.title} className="service-card service-card-item ca-interactive-card" style={{
          flex: '1',
          minWidth: '260px',
          backgroundColor: 'rgba(20, 20, 20, 1)',
          borderRadius: '36px',
          padding: '42px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer'
        }}>
              <img src={service.img} alt={service.title} style={{
            width: '100%',
            maxWidth: '220px',
            height: 'auto',
            objectFit: 'cover'
          }} />
              <h3 style={{
            color: 'white',
            fontSize: '24px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            margin: 0,
            textAlign: 'center'
          }}>
                {service.title}
              </h3>
              <p style={{
            color: 'white',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            textAlign: 'center',
            margin: 0,
            lineHeight: '24px'
          }}>
                {service.desc}
              </p>
            </div>)}
        </div>
      </section>

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
        color: 'white',
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
          backgroundColor: 'rgba(20, 20, 20, 1)',
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
            color: 'white',
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

      {/* Why We Started */}
      <section className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '150px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: 'clamp(26px, 4vw, 36px)',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '80px'
      }}>
          Why We Started
        </h2>

        <div className="story-wrapper" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        width: '100%',
        padding: '0 80px',
        boxSizing: 'border-box'
      }}>
          <button className="story-nav-btn" style={{
          background: 'rgba(28, 28, 28, 1)',
          border: '1px solid rgba(38, 38, 38, 1)',
          borderRadius: '50%',
          width: '52px',
          height: '52px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1aab2692-4b79-4ab5-b799-8ab4191e6bc6.svg" alt="Prev" style={{
            width: '28px'
          }} />
          </button>

          <div className="story-items-row" style={{
          flex: 1,
          display: 'flex',
          gap: '60px',
          position: 'relative',
          minWidth: 0
        }}>
            {storyItems.map(item => <div key={item.imgId} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            textAlign: 'center',
            minWidth: 0
          }}>
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              width: '100%'
            }}>
                  <div style={{
                flex: 1,
                height: '1px',
                backgroundColor: item.highlight ? 'rgba(97, 97, 97, 1)' : 'rgba(38, 38, 38, 1)'
              }} />
                  <img src={`https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${item.imgId}`} alt="" aria-hidden="true" style={{
                width: '44px',
                flexShrink: 0
              }} />
                  <div style={{
                flex: 1,
                height: '1px',
                backgroundColor: item.highlight ? 'rgba(97, 97, 97, 1)' : 'rgba(38, 38, 38, 1)'
              }} />
                </div>
                <p style={{
              color: 'white',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              fontFamily: '"Lexend", sans-serif',
              lineHeight: '24px',
              margin: 0
            }}>
                  {item.text}
                </p>
                <div style={{
              color: 'rgba(10, 132, 255, 1)',
              fontSize: '16px',
              fontFamily: '"Lexend", sans-serif',
              fontWeight: 500
            }}>
                  <span>John Doe</span>
                  <br />
                  <span>Founder &amp; CEO</span>
                </div>
              </div>)}
          </div>

          <button className="story-nav-btn" style={{
          background: 'rgba(28, 28, 28, 1)',
          border: '1px solid rgba(38, 38, 38, 1)',
          borderRadius: '50%',
          width: '52px',
          height: '52px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/e31083d0-08ba-4134-ac3c-8d55de3b19a8.svg" alt="Next" style={{
            width: '28px'
          }} />
          </button>
        </div>

        <button onClick={() => onNavigate('About Us')} className="primary-btn" style={{
        marginTop: '50px',
        width: '165px',
        height: '42px',
        backgroundColor: 'rgba(10, 132, 255, 1)',
        border: 'none',
        borderRadius: '10px',
        color: 'white',
        fontSize: '14px',
        fontWeight: 700,
        fontFamily: '"Barlow", sans-serif',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}>
          Learn More
        </button>
      </section>

      {/* FAQ Section */}
      <section id="about-us" className="faq-section" style={{
      width: '100%',
      maxWidth: '798px',
      padding: '100px 0 200px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '72px',
      boxSizing: 'border-box'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: 'clamp(24px, 4vw, 36px)',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600,
        textAlign: 'center',
        margin: 0
      }}>
          Frequently Asked Questions
        </h2>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          {faqData.map((faq, idx) => <FAQItem key={faq.question} number={`0${idx + 1}`} question={faq.question} answer={faq.answer} isOpen={activeFaq === idx} onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} />)}
        </div>
      </section>

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
    backgroundColor: 'rgba(3, 3, 3, 1)',
    boxSizing: 'border-box',
    overflowX: 'hidden',
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
        .hero-robot-jump {
          animation: robotJump 2.8s ease-in-out infinite;
          transform-origin: center bottom;
        }
        .nav-item:hover { color: rgba(10, 132, 255, 1) !important; }
        .primary-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3); }
        .primary-btn:active { transform: translateY(0); }
        .service-card:hover { transform: translateY(-8px); background-color: rgba(30, 30, 30, 1) !important; }
        .value-circle:hover { border-color: rgba(10, 132, 255, 0.5) !important; transform: scale(1.02); }
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
      {activePage === 'About Us' && <AboutSection />}
      {activePage === 'Careers' && <CareerJobListing />}

      <Footer onNavigate={handleNavigate} />
    </div>;
};