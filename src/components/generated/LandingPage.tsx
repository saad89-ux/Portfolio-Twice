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
const portfolioStats = [{
  value: '3000+',
  label: 'Projects Completed'
}, {
  value: '50+',
  label: 'Industries Served'
}, {
  value: '$5M+',
  label: 'Revenue Generated'
}, {
  value: '95%',
  label: 'Client Retention'
}];
const portfolioCategories = ['All Projects', 'SEO', 'Web Design', 'Google Ads', 'Branding', 'Social Media'];
const portfolioProjects = [{
  title: '410 Muscle Therapy',
  category: 'SEO',
  tag: 'SEO',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  desc: 'Comprehensive SEO strategy that increased organic traffic and leads.',
  metrics: [{
    label: 'Traffic Increase',
    value: '250%'
  }, {
    label: 'Keywords Growth',
    value: '320%'
  }, {
    label: 'More Leads',
    value: '35%'
  }]
}, {
  title: 'Luxury Living Properties',
  category: 'Web Design',
  tag: 'Web Design',
  image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  desc: 'Modern website design that delivers premium user experience and leads.',
  metrics: [{
    label: 'More Inquiries',
    value: '180%'
  }, {
    label: 'User Engagement',
    value: '2.4x'
  }, {
    label: 'Lower Bounce Rate',
    value: '45%'
  }]
}, {
  title: 'Home Remodeling Services',
  category: 'Google Ads',
  tag: 'Google Ads',
  image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
  desc: 'Targeted Google Ads campaigns that reduced cost and increased ROI.',
  metrics: [{
    label: 'More Conversions',
    value: '210%'
  }, {
    label: 'Lower Cost / Conv.',
    value: '32%'
  }, {
    label: 'Return on Ad Spend',
    value: '4.6x'
  }]
}];
const caseStudyCategories = ['All Case Studies', 'SEO', 'Web Design', 'Google Ads', 'Branding', 'Social Media'];
const caseStudyStats = [{
  value: '3000+',
  label: 'Projects Completed'
}, {
  value: '50+',
  label: 'Industries Served'
}, {
  value: '$5M+',
  label: 'Revenue Generated'
}, {
  value: '95%',
  label: 'Client Retention'
}];
const caseStudyFeatured = {
  title: 'Luxury Living Properties',
  category: 'Real Estate',
  subtitle: 'Featured Case Study',
  description: 'We helped Luxury Living increase their online visibility and generate high-quality leads through a data-driven SEO and digital marketing strategy.',
  image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  tags: ['SEO Strategy', 'Web Design', 'Content Marketing', 'Local SEO'],
  results: [{
    label: '250% Increase in Organic Traffic'
  }, {
    label: '320% Increase in Leads'
  }, {
    label: '45% Lower Bounce Rate'
  }, {
    label: '3.8x ROI Growth'
  }]
};
const caseStudyCards = [{
  title: 'EcomBoost',
  category: 'E-commerce',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
  stats: ['210% Revenue Increase', '3.2x Growth', '65% Decrease in CPA']
}, {
  title: 'FitLife Nation',
  category: 'Health & Fitness',
  image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80',
  stats: ['180% Engagement Increase', '2.4x Follower Growth', '90% Video Views Increase']
}, {
  title: 'Constructo Builders',
  category: 'Construction',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  stats: ['230% Lead Growth', '70% Cost per Lead Decrease', '4.6x ROI Growth']
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
const clientAvatars = ['3a9e176a-3863-474d-a596-d593c4d569ea.png', '998d15ff-acf1-4ed8-b332-f13d639b3e03.png', '363356fa-f16d-41aa-99ea-3c436d6bc5df.png'];
const trustStats = [{
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg',
  value: '6+',
  label: 'Years of Experience'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg',
  value: '3,000+',
  label: 'Happy Clients'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg',
  value: '$5M+',
  label: 'Revenue Generated'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg',
  value: '50+',
  label: 'Industries Served'
}, {
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516f.svg',
  value: '95%',
  label: 'Client Retention'
}];
const trustAvatars = ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'];
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
const TrustSection: React.FC = () => {
  return <section style={{
    width: '100%',
    maxWidth: '1440px',
    margin: '80px auto 0',
    padding: '80px clamp(24px, 6vw, 90px)',
    backgroundColor: 'rgba(7, 11, 30, 1)',
    borderRadius: '48px',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box'
  }}>
      <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle at 16% 18%, rgba(10, 132, 255, 0.15), transparent 24%), radial-gradient(circle at 88% 16%, rgba(26, 115, 255, 0.1), transparent 20%), radial-gradient(circle at 50% 85%, rgba(4, 45, 112, 0.16), transparent 35%)',
      pointerEvents: 'none'
    }} />
      <div style={{
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '42px',
      alignItems: 'center'
    }}>
        <div style={{
        position: 'relative',
        minHeight: '600px',
        borderRadius: '40px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80" alt="Marketing strategist portrait" style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.78)'
        }} />
          <div style={{
          position: 'absolute',
          top: '28px',
          left: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          zIndex: 2
        }}>
            <div style={{
            padding: '14px 18px',
            borderRadius: '28px',
            backgroundColor: 'rgba(10, 132, 255, 0.16)',
            border: '1px solid rgba(10, 132, 255, 0.24)',
            color: 'white',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            width: 'fit-content'
          }}>
              Client-First Always
            </div>
            <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 20px',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: 'white',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
              <span style={{
              width: '16px',
              height: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'rgba(10, 132, 255, 1)',
              color: 'white',
              fontSize: '12px'
            }}>
                ▶
              </span>
              Watch My Story
            </button>
          </div>
          <div style={{
          position: 'absolute',
          bottom: '28px',
          left: '28px',
          right: '28px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.48)',
          borderRadius: '28px',
          padding: '26px',
          backdropFilter: 'blur(10px)'
        }}>
            <span style={{
            color: 'rgba(10, 132, 255, 1)',
            fontSize: '14px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}>
              Results · Trust · Growth
            </span>
            <p style={{
            color: 'rgba(255, 255, 255, 0.92)',
            fontSize: '18px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            margin: 0
          }}>
              I don’t believe in just completing projects, I believe in building relationships that last.
            </p>
          </div>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '28px'
      }}>
          <h2 style={{
          color: 'white',
          fontSize: 'clamp(40px, 4vw, 58px)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          lineHeight: '1.02',
          margin: 0
        }}>
            Behind Every Strategy, There’s a Purpose.
          </h2>
          <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start'
        }}>
            <div style={{
            width: '4px',
            minHeight: '60px',
            borderRadius: '999px',
            backgroundColor: 'rgba(10, 132, 255, 1)'
          }} />
            <p style={{
            color: 'rgba(225, 230, 245, 0.92)',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 400,
            lineHeight: '28px',
            margin: 0
          }}>
              I started this journey with a simple mission — to help businesses grow with honesty, strategy, and results that actually matter. Over the years, I’ve learned that real growth doesn’t come from shortcuts, it comes from trust, consistency, and a deep understanding of each business I work with.
            </p>
          </div>
          <p style={{
          color: 'rgba(210, 215, 235, 0.85)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 400,
          lineHeight: '28px',
          margin: 0
        }}>
              Every campaign I build is customized. Every decision is data-backed. And every success story you see here represents a relationship built on transparency and hard work.
            </p>
          <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
            <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 22px',
            borderRadius: '16px',
            backgroundColor: 'rgba(10, 132, 255, 1)',
            border: 'none',
            color: 'white',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            cursor: 'pointer'
          }}>
              Watch Video
            </button>
            <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 22px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            color: 'rgba(255, 255, 255, 0.94)',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
              Check Reviews
            </button>
          </div>
        </div>
      </div>

      <div style={{
      marginTop: '56px',
      padding: '28px',
      borderRadius: '36px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.09)'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: '18px'
      }}>
          {trustStats.map(stat => <div key={stat.label} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '22px 18px',
          borderRadius: '28px',
          backgroundColor: 'rgba(7, 11, 30, 1)',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
            <img src={stat.icon} alt="" style={{
            width: '34px',
            height: '34px'
          }} />
            <span style={{
            color: 'white',
            fontSize: '24px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700
          }}>
              {stat.value}
            </span>
            <span style={{
            color: 'rgba(225, 230, 245, 0.8)',
            fontSize: '13px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 500
          }}>
              {stat.label}
            </span>
          </div>)}
        </div>
      </div>

      <div style={{
      marginTop: '32px',
      padding: '28px 30px',
      borderRadius: '36px',
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        minWidth: '320px'
      }}>
          <span style={{
          color: 'rgba(10, 132, 255, 1)',
          fontSize: '28px',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 800,
          lineHeight: 1
        }}>
            “
          </span>
          <div>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 400,
            lineHeight: '28px',
            margin: 0
          }}>
                Don't just take my word for it — hear it from the people I’ve worked with.
              </p>
            <span style={{
            color: 'rgba(173, 183, 208, 0.9)',
            fontSize: '13px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 500
          }}>
                Real Clients. Real Feedback.
              </span>
          </div>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '-12px'
      }}>
          {trustAvatars.map((src, index) => <img key={src} src={src} alt="Client" style={{
          width: '48px',
          height: '48px',
          borderRadius: '999px',
          objectFit: 'cover',
          border: '2px solid rgba(7, 11, 30, 1)',
          position: 'relative',
          left: `${index * -14}px`
        }} />)}
          <div style={{
          marginLeft: '16px',
          color: 'rgba(255, 255, 255, 0.88)',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 600,
          fontSize: '14px'
        }}>
            3K+ Reviews
          </div>
        </div>
      </div>
    </section>;
};
const HomeContent: React.FC<{
  onNavigate: (page: PageName) => void;
}> = ({
  onNavigate
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePortfolioCategory, setActivePortfolioCategory] = useState('All Projects');
  const [activeCaseStudyCategory, setActiveCaseStudyCategory] = useState('All Case Studies');
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

      <AboutSection />

      <TrustSection />

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

      {/* Portfolio Showcase Section */}
      <section id="portfolio-showcase" className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '150px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
        <div style={{
        maxWidth: '960px',
        width: '100%',
        textAlign: 'center',
        marginBottom: '38px'
      }}>
            <h2 style={{
            color: 'white',
            fontSize: 'clamp(44px, 4vw, 72px)',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            lineHeight: '1.02',
            margin: '22px 0 18px'
          }}>
              Real Work. Real <span style={{ color: '#0a84ff' }}>Results.</span>
            </h2>
            <p style={{
            color: 'rgba(235, 239, 255, 0.8)',
            fontSize: '17px',
            fontFamily: '"Barlow", sans-serif',
            lineHeight: '28px',
            margin: 0
          }}>
              Explore how I help businesses grow with data-driven strategies, stunning design, and performance-focused marketing.
            </p>
        </div>

        <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '18px',
        marginBottom: '44px'
      }}>
            {portfolioStats.map(stat => <div key={stat.label} style={{
            padding: '28px',
            borderRadius: '30px',
            backgroundColor: 'rgba(8, 12, 34, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minHeight: '168px',
            justifyContent: 'center'
          }}>
              <span style={{
              color: 'rgba(145, 104, 255, 1)',
              fontSize: '32px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800
            }}>
                {stat.value}
              </span>
              <span style={{
              color: 'rgba(235, 239, 255, 0.82)',
              fontSize: '14px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 500,
              lineHeight: '1.4'
            }}>
                {stat.label}
              </span>
            </div>)}
        </div>

        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '14px',
        justifyContent: 'center',
        marginBottom: '48px'
      }}>
            {portfolioCategories.map(category => <button key={category} onClick={() => setActivePortfolioCategory(category)} style={{
            minWidth: '118px',
            padding: '14px 20px',
            borderRadius: '999px',
            backgroundColor: activePortfolioCategory === category ? '#0a84ff' : 'rgba(255, 255, 255, 0.05)',
            color: activePortfolioCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
            border: activePortfolioCategory === category ? '1px solid #0a84ff' : '1px solid rgba(255, 255, 255, 0.08)',
            cursor: 'pointer',
            fontFamily: '"Barlow", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}>
                {category}
              </button>)}
        </div>

        <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '30px',
        justifyItems: 'center',
        marginBottom: '50px'
      }}>
            {portfolioProjects.filter(project => activePortfolioCategory === 'All Projects' || project.category === activePortfolioCategory).map(project => <article key={project.title} className="ca-interactive-card" style={{
            width: '100%',
            maxWidth: '420px',
            backgroundColor: 'rgba(16, 18, 43, 0.95)',
            borderRadius: '36px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
              <div style={{
              position: 'relative',
              width: '100%',
              height: '220px',
              overflow: 'hidden'
            }}>
                <img src={project.image} alt={project.title} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.78)'
              }} />
                <span style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                padding: '10px 16px',
                borderRadius: '999px',
                backgroundColor: 'rgba(10, 132, 255, 0.18)',
                color: 'rgba(10, 132, 255, 1)',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                  {project.tag}
                </span>
              </div>
              <div style={{
              padding: '0 26px 24px'
            }}>
                <h3 style={{
                color: 'white',
                fontSize: '24px',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 700,
                margin: '0 0 12px'
              }}>
                  {project.title}
                </h3>
                <p style={{
                color: 'rgba(235, 239, 255, 0.84)',
                fontSize: '15px',
                fontFamily: '"Barlow", sans-serif',
                lineHeight: '26px',
                margin: '0 0 22px'
              }}>
                  {project.desc}
                </p>
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '24px'
              }}>
                    {project.metrics.map(metric => <div key={metric.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}>
                      <span style={{
                      color: 'rgba(235, 239, 255, 0.76)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif'
                    }}>
                        {metric.label}
                      </span>
                      <strong style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif'
                    }}>
                        {metric.value}
                      </strong>
                    </div>)}
                </div>
                <button style={{
                padding: '14px 20px',
                width: '100%',
                backgroundColor: '#0a84ff',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                cursor: 'pointer',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 700,
                fontSize: '14px'
              }}>
                  View Case Study
                </button>
              </div>
            </article>)}
        </div>

        <div style={{
        width: '100%',
        maxWidth: '1230px',
        padding: '30px 36px',
        borderRadius: '40px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
                <h3 style={{
                color: 'white',
                fontSize: '28px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                margin: 0
              }}>
                  Want results like these?
                </h3>
                <p style={{
                color: 'rgba(235, 239, 255, 0.8)',
                fontSize: '16px',
                fontFamily: '"Barlow", sans-serif',
                lineHeight: '26px',
                margin: 0
              }}>
                  Let’s build a strategy that grows your business.
                </p>
            </div>
            <button style={{
            minWidth: '220px',
            padding: '16px 24px',
            borderRadius: '18px',
            backgroundColor: '#0a84ff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            fontSize: '14px'
          }}>
              Start Your Project
            </button>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '150px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
        <div style={{
        width: '100%',
        maxWidth: '1040px',
        textAlign: 'center',
        marginBottom: '32px'
      }}>
            <h2 style={{
            color: 'white',
            fontSize: 'clamp(44px, 4vw, 68px)',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            lineHeight: '1.04',
            margin: '24px 0 20px'
          }}>
              Real Challenges. Strategic Thinking. Outstanding Results.
            </h2>
            <p style={{
            color: 'rgba(235, 239, 255, 0.8)',
            fontSize: '17px',
            fontFamily: '"Barlow", sans-serif',
            lineHeight: '28px',
            margin: 0,
            maxWidth: '820px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
              Explore how we help businesses across industries overcome challenges, drive growth, and achieve measurable success with strategy-led digital campaigns.
            </p>
        </div>

        <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '44px'
      }}>
            {caseStudyStats.map(stat => <div key={stat.label} style={{
            padding: '24px',
            borderRadius: '28px',
            backgroundColor: 'rgba(20, 20, 40, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
              <span style={{
              color: 'rgba(145, 104, 255, 1)',
              fontSize: '32px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800
            }}>
                {stat.value}
              </span>
              <span style={{
              color: 'rgba(235, 239, 255, 0.8)',
              fontSize: '14px',
              fontFamily: '"Barlow", sans-serif',
              lineHeight: '1.6'
            }}>
                {stat.label}
              </span>
            </div>)}
        </div>

        <div style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '14px',
        marginBottom: '48px'
      }}>
            {caseStudyCategories.map(category => <button key={category} onClick={() => setActiveCaseStudyCategory(category)} style={{
            minWidth: '130px',
            padding: '14px 22px',
            borderRadius: '999px',
            backgroundColor: activeCaseStudyCategory === category ? '#0a84ff' : 'rgba(255, 255, 255, 0.05)',
            color: activeCaseStudyCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
            border: activeCaseStudyCategory === category ? '1px solid #0a84ff' : '1px solid rgba(255, 255, 255, 0.08)',
            cursor: 'pointer',
            fontFamily: '"Barlow", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}>
                {category}
              </button>)}
        </div>

        <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2.2fr 1fr',
        gap: '28px',
        marginBottom: '42px'
      }}>
            <article style={{
            position: 'relative',
            backgroundColor: 'rgba(20, 20, 40, 0.98)',
            borderRadius: '36px',
            overflow: 'hidden',
            minHeight: '520px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
              <img src={caseStudyFeatured.image} alt={caseStudyFeatured.title} style={{
              width: '100%',
              height: '330px',
              objectFit: 'cover'
            }} />
              <div style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}>
                  <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 18px',
                  backgroundColor: 'rgba(10, 132, 255, 0.12)',
                  borderRadius: '999px',
                  width: 'fit-content',
                  color: '#0a84ff',
                  fontSize: '12px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase'
                }}>
                    {caseStudyFeatured.category}
                  </div>
                  <h3 style={{
                  color: 'white',
                  fontSize: '34px',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 800,
                  lineHeight: '1.05',
                  margin: 0
                }}>
                    {caseStudyFeatured.title}
                  </h3>
                  <p style={{
                  color: 'rgba(235, 239, 255, 0.87)',
                  fontSize: '16px',
                  fontFamily: '"Barlow", sans-serif',
                  lineHeight: '28px',
                  margin: 0,
                  maxWidth: '680px'
                }}>
                    {caseStudyFeatured.description}
                  </p>
                  <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                    {caseStudyFeatured.tags.map(tag => <span key={tag} style={{
                    padding: '10px 16px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'rgba(235, 239, 255, 0.84)',
                    fontSize: '13px',
                    fontFamily: '"Barlow", sans-serif',
                    fontWeight: 500
                  }}>
                      {tag}
                    </span>)}
                  </div>
                  <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '14px',
                  marginTop: '6px'
                }}>
                    {caseStudyFeatured.results.map(result => <div key={result.label} style={{
                    padding: '20px',
                    borderRadius: '24px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                      <p style={{
                      color: 'rgba(235, 239, 255, 0.8)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      margin: 0,
                      lineHeight: '20px'
                    }}>
                        {result.label}
                      </p>
                    </div>)}
                  </div>
                </div>
            </article>

            <aside style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
                <div style={{
                padding: '32px',
                borderRadius: '36px',
                backgroundColor: 'rgba(20, 20, 40, 0.98)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                minHeight: '252px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                    <div>
                      <h4 style={{
                      color: '#0a84ff',
                      fontSize: '18px',
                      fontFamily: '"Barlow", sans-serif',
                      fontWeight: 700,
                      margin: '0 0 16px'
                    }}>
                        The Results
                      </h4>
                      <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px'
                    }}>
                          {caseStudyFeatured.results.map(result => <div key={result.label} style={{
                          padding: '18px',
                          borderRadius: '24px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}>
                            <span style={{
                            display: 'block',
                            color: 'white',
                            fontSize: '22px',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 800,
                            marginBottom: '8px'
                          }}>
                              {result.label.split(' ')[0]}
                            </span>
                            <span style={{
                            color: 'rgba(235, 239, 255, 0.8)',
                            fontSize: '13px',
                            fontFamily: '"Barlow", sans-serif',
                            lineHeight: '20px'
                          }}>
                              {result.label}
                            </span>
                          </div>)}
                      </div>
                    </div>
                    <button style={{
                    width: '100%',
                    padding: '18px 24px',
                    borderRadius: '18px',
                    border: 'none',
                    backgroundColor: '#0a84ff',
                    color: 'white',
                    cursor: 'pointer',
                    fontFamily: '"Barlow", sans-serif',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}>
                      View Full Case Study
                    </button>
                </div>
                <div style={{
                padding: '28px',
                borderRadius: '32px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                    <p style={{
                    color: 'rgba(235, 239, 255, 0.86)',
                    fontSize: '16px',
                    fontFamily: '"Barlow", sans-serif',
                    margin: 0,
                    lineHeight: '26px'
                  }}>
                      Discover the exact strategy behind the growth, from conversion optimization to advanced campaign targeting.
                    </p>
                </div>
            </aside>
        </div>

        <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '42px'
      }}>
            {caseStudyCards.map(card => <article key={card.title} className="ca-interactive-card" style={{
            backgroundColor: 'rgba(20, 20, 40, 0.95)',
            borderRadius: '32px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}>
              <img src={card.image} alt={card.title} style={{
              width: '100%',
              height: '196px',
              objectFit: 'cover'
            }} />
              <div style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}>
                  <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(10, 132, 255, 0.12)',
                  color: '#0a84ff',
                  fontSize: '12px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                    {card.category}
                  </div>
                  <h4 style={{
                  color: 'white',
                  fontSize: '22px',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 800,
                  margin: 0
                }}>
                    {card.title}
                  </h4>
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                      {card.stats.map(stat => <span key={stat} style={{
                      color: 'rgba(235, 239, 255, 0.82)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      lineHeight: '22px'
                    }}>
                        • {stat}
                      </span>)}
                  </div>
                </div>
            </article>)}
        </div>

        <div style={{
        width: '100%',
        maxWidth: '1230px',
        padding: '32px 36px',
        borderRadius: '40px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
                <h3 style={{
                color: 'white',
                fontSize: '28px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                margin: 0
              }}>
                  Ready to be our next success story?
                </h3>
                <p style={{
                color: 'rgba(235, 239, 255, 0.8)',
                fontSize: '16px',
                fontFamily: '"Barlow", sans-serif',
                lineHeight: '26px',
                margin: 0
              }}>
                  Let’s create something extraordinary together.
                </p>
            </div>
            <button style={{
            minWidth: '220px',
            padding: '16px 24px',
            borderRadius: '18px',
            backgroundColor: '#0a84ff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            fontSize: '14px'
          }}>
              Start Your Project
            </button>
        </div>
      </section>

      {/* Companies Logo Ticker — marquee */}
      <section className="clients-marquee">
        <div className="clients-marquee-track">
          <img className="clients-marquee-img" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg" alt="Partner companies" />
          <img className="clients-marquee-img" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg" alt="" aria-hidden="true" />
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

      {/* Industries Served Section */}
      <section id="industries-served" className="section-pad" style={{
        width: '100%',
        maxWidth: '1440px',
        padding: '120px 0 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          {/* Large Arc */}
          <div style={{
            position: 'absolute',
            top: '-850px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2200px',
            height: '2200px',
            borderRadius: '50%',
            border: '1px solid rgba(10,132,255,0.22)',
            boxShadow: '0 0 140px rgba(10,132,255,0.10)'
          }} />

          {/* Medium Arc */}
          <div style={{
            position: 'absolute',
            top: '-650px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1800px',
            height: '1800px',
            borderRadius: '50%',
            border: '1px solid rgba(145,104,255,0.18)',
            boxShadow: '0 0 120px rgba(145,104,255,0.06)'
          }} />

          {/* Inner Arc */}
          <div style={{
            position: 'absolute',
            top: '-450px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1400px',
            height: '1400px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 100px rgba(255,255,255,0.04)'
          }} />

          {/* Center Glow */}
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(10,132,255,0.42) 0%, rgba(145,104,255,0.22) 34%, transparent 70%)',
            filter: 'blur(130px)'
          }} />
        </div>

        {/* Header */}
        <div style={{
          width: '100%',
          maxWidth: '980px',
          textAlign: 'center',
          marginBottom: '60px',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: 'clamp(72px, 6vw, 96px)',
            fontWeight: 800,
            lineHeight: 1,
            margin: '24px 0 20px',
            color: '#ffffff',
            letterSpacing: '-0.04em'
          }}>
            Driving Growth Across{' '}
            <span style={{
              background: 'linear-gradient(90deg,#ffffff 0%, #78b9ff 40%, #0a84ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Every Industry
            </span>
          </h2>
          <p style={{
            color: 'rgba(235, 239, 255, 0.78)',
            fontSize: '17px',
            fontFamily: '"Barlow", sans-serif',
            lineHeight: '28px',
            margin: 0
          }}>
            We partner with businesses across diverse industries, delivering tailored digital marketing strategies that drive real results and sustainable growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: '16px',
          marginBottom: '46px',
          position: 'relative',
          zIndex: 1
        }}>
          {industryCards.map(card => (
            <article key={card.number} style={{
              position: 'relative',
              height: '245px',
              borderRadius: '14px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg,#141428 0%, #10122b 50%, #070b1e 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 15px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04)',
              transition: 'all .4s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 40px rgba(10,132,255,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 40px rgba(0,0,0,.35)';
            }}>
              {/* Background image */}
              <img src={card.image} alt={card.title} style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.08,
                filter: 'brightness(.32) saturate(.75)'
              }} />
              {/* Card Top Glow */}
              <div style={{
                position: 'absolute',
                top: -42,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 220,
                height: 120,
                background: 'radial-gradient(circle, rgba(10,132,255,.38), transparent 60%)',
                filter: 'blur(42px)'
              }} />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `
      linear-gradient(
      180deg,
      rgba(8,12,34,.12) 0%,
      rgba(8,12,34,.75) 55%,
      rgba(7,11,30,.97) 100%
      )
    `
              }} />

              <div style={{
                position: 'relative',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: 54,
                    height: 54,
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, rgba(145,104,255,.14), rgba(10,132,255,.08))',
                    border: '1px solid rgba(145,104,255,.18)',
                    backdropFilter: 'blur(20px)',
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    <img src={card.icon} alt="" style={{
                      width: '20px',
                      height: '20px'
                    }} />
                  </div>
                  <span style={{
                    fontSize: 46,
                    fontWeight: 700,
                    color: '#9168ff',
                    opacity: 0.9,
                    lineHeight: 1
                  }}>
                    {card.number}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                  marginTop: '8px'
                }}>
                  <div>
                    <h3 style={{
                      color: '#ffffff',
                      fontSize: '20px',
                      fontWeight: 700,
                      lineHeight: '26px',
                      margin: 0
                    }}>
                      {card.title}
                    </h3>
                    <p style={{
                      color: 'rgba(235,239,255,.72)',
                      fontSize: '13px',
                      lineHeight: '21px',
                      margin: '12px 0 0'
                    }}>
                      {card.desc}
                    </p>
                  </div>
                  <div style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#9168ff,#0a84ff)',
                    boxShadow: '0 0 20px rgba(145,104,255,.45)',
                    marginTop: '12px'
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <button style={{
          height: '54px',
          padding: '0 34px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(90deg,#0a84ff 0%, #9168ff 100%)',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 0 40px rgba(145,104,255,0.25)',
          fontFamily: '"Barlow", sans-serif',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          position: 'relative',
          zIndex: 1
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 24px 60px rgba(10, 132, 255, 0.42)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(10, 132, 255, 0.28)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          Explore How We Can Help Your Industry
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </section>

      {/* Why We Started */}
      <section className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '150px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#070b1e',
      border: '1px solid rgba(10, 132, 255, 0.08)',
      borderRadius: '40px'
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
          background: 'rgba(8, 12, 32, 1)',
          border: '1px solid rgba(10, 132, 255, 0.22)',
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
                backgroundColor: item.highlight ? 'rgba(10, 132, 255, 0.24)' : 'rgba(38, 38, 38, 1)'
              }} />
                  <img src={`https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${item.imgId}`} alt="" aria-hidden="true" style={{
                width: '44px',
                flexShrink: 0
              }} />
                  <div style={{
                flex: 1,
                height: '1px',
                backgroundColor: item.highlight ? 'rgba(10, 132, 255, 0.24)' : 'rgba(38, 38, 38, 1)'
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
          background: 'rgba(8, 12, 32, 1)',
          border: '1px solid rgba(10, 132, 255, 0.22)',
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