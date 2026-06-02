import React, { useState, useEffect } from 'react';
import { ServicesPage } from './ServicesPage';
import { PortfolioShowcase } from './PortfolioShowcase';
import { AboutSection } from './AboutSection';
import { CareerJobListing } from './CareerJobListing';
import { FAQSection } from './FAQSection';
import { Star } from 'lucide-react';
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
const blogStats = [{
  value: '250+',
  label: 'In-Depth Articles',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
}, {
  value: '50K+',
  label: 'Monthly Readers',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
}, {
  value: '10+',
  label: 'Expert Contributors',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
}, {
  value: '100K+',
  label: 'Insights Delivered',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
}];
const blogPosts = [{
  tag: 'Featured',
  category: 'Strategy',
  title: 'The Future of Digital Marketing in 2025',
  description: 'Explore emerging trends, technologies, and strategies shaping the future of digital marketing.',
  author: 'By John Smith',
  date: 'May 20, 2025',
  read: '8 min read',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
}, {
  tag: 'SEO',
  category: 'SEO',
  title: '10 SEO Strategies That Actually Work in 2025',
  description: 'How modern search optimization tactics drive organic traffic and long-term growth.',
  author: 'By Emily Carter',
  date: 'May 18, 2025',
  read: '6 min read',
  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80'
}, {
  tag: 'PPC',
  category: 'PPC',
  title: 'How to Maximize ROI with Google Ads',
  description: 'Learn the proven techniques to get more out of your ad spend and improve campaign performance.',
  author: 'By Michael Brown',
  date: 'May 15, 2025',
  read: '7 min read',
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80'
}, {
  tag: 'Social Media',
  category: 'Social Media',
  title: 'Social Media Trends You Can’t Ignore',
  description: 'Stay updated with the latest social media trends and strategies for brand growth.',
  author: 'By Sarah Wilson',
  date: 'May 12, 2025',
  read: '5 min read',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80'
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
  question,
  answer,
  icon,
  isOpen,
  onClick
}) => {
  return <div style={{
    borderRadius: '28px',
    overflow: 'hidden',
    border: isOpen ? '1px solid rgba(145, 104, 255, 0.68)' : '1px solid rgba(255, 255, 255, 0.08)',
    background: isOpen ? 'linear-gradient(180deg, rgba(145, 104, 255, 0.16), rgba(10, 132, 255, 0.08))' : 'rgba(8, 12, 32, 0.88)',
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
          background: isOpen ? '#9168ff' : 'rgba(10, 132, 255, 0.16)',
          display: 'grid',
          placeItems: 'center',
          color: '#ffffff',
          fontSize: '22px'
        }}>
            {icon}
          </div>
          <span style={{
          color: '#ffffff',
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
        color: '#ffffff',
        fontSize: '26px',
        lineHeight: 1,
        fontFamily: '"Barlow", sans-serif'
      }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && <div style={{
      padding: '0 26px 24px',
      color: 'rgba(235, 239, 255, 0.84)',
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
    padding: '80px 86px',
    marginTop: 'auto',
    boxSizing: 'border-box'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(240px, 320px) repeat(4, minmax(160px, 1fr))',
      gap: '40px',
      paddingBottom: '42px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
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
              color: 'white',
              fontSize: '22px',
              fontWeight: 800,
              lineHeight: 1
            }}>M</span>
            </div>
            <div>
              <div style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800,
              lineHeight: 1.05
            }}>
                Mohsin
                <br />
                Designs
              </div>
            </div>
          </div>
          <p style={{
          color: 'rgba(235, 239, 255, 0.72)',
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
                color: 'rgba(235, 239, 255, 0.88)',
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
          color: 'white',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif'
        }}>
            Services
          </span>
          {['SEO', 'Performance Marketing', 'Social Media Marketing', 'Web Design', 'Content Marketing', 'Conversion Optimization'].map(item => <span key={item} style={{
            color: 'rgba(235, 239, 255, 0.78)',
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
          color: 'white',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif'
        }}>
            Industries
          </span>
          {['Ecommerce', 'Healthcare', 'Real Estate', 'Finance', 'Education', 'Technology'].map(item => <span key={item} style={{
            color: 'rgba(235, 239, 255, 0.78)',
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
          color: 'white',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif'
        }}>
            Company
          </span>
          {['About Us', 'Our Work', 'Case Studies', 'Careers', 'Blog', 'Contact'].map(item => <span key={item} style={{
            color: 'rgba(235, 239, 255, 0.78)',
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
          color: 'white',
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
              color: 'rgba(235, 239, 255, 0.78)',
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
        color: 'rgba(152, 152, 154, 1)',
        fontSize: '14px',
        fontFamily: '"Barlow", sans-serif',
        margin: 0
      }}>
          © 2026 Mohsin Designs. All rights reserved.
        </p>
        <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
          <span style={{
          color: 'rgba(152, 152, 154, 1)',
          fontSize: '14px',
          fontFamily: '"Barlow", sans-serif',
          cursor: 'pointer'
        }}>
            Privacy Policy
          </span>
          <span style={{
          color: 'rgba(152, 152, 154, 1)',
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
    <section id="industries-served" style={{
      width: '100%',
      padding: '120px 0 80px',
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        padding: '0 24px'
      }}>
        <span style={{
          color: '#9168ff',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          fontFamily: '"Barlow", sans-serif',
          display: 'block',
          marginBottom: '16px'
        }}>
          INDUSTRIES
        </span>
        <h2 style={{
          color: '#ffffff',
          fontSize: 'clamp(38px, 5vw, 64px)',
          fontWeight: 800,
          fontFamily: '"Barlow", sans-serif',
          margin: '0 0 16px',
          lineHeight: 1.1
        }}>
          Industries We Serve
        </h2>
        <p style={{
          color: 'rgba(235, 239, 255, 0.72)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          lineHeight: '26px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          From startups to enterprises — we deliver results across every major industry.
        </p>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '32px' : '60px',
        padding: '0 24px',
        boxSizing: 'border-box'
      }}>
        {/* LEFT COLUMN - Scrollable Text Panels (Order 1 on mobile, 0 on desktop) */}
        <div style={{
          width: isMobile ? '100%' : '55%',
          display: 'flex',
          flexDirection: 'column',
          order: isMobile ? 1 : 0
        }}>
          {industriesData.map((ind, i) => {
            const isActive = i === activeIdx;
            return (
              <div 
                key={i} 
                data-index={i}
                ref={el => { itemRefs.current[i] = el; }}
                style={{
                  minHeight: isMobile ? 'auto' : '70vh',
                  padding: isMobile ? '32px 0' : '40px 0 40px 32px',
                  borderBottom: i !== industriesData.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderLeft: isMobile ? 'none' : (isActive ? '3px solid #9168ff' : '3px solid transparent'),
                  backgroundColor: !isMobile && isActive ? 'rgba(145, 104, 255, 0.04)' : 'transparent',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxSizing: 'border-box'
                }}
              >
                <span style={{
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  fontWeight: 800,
                  color: isActive ? 'rgba(145, 104, 255, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                  fontFamily: '"Barlow", sans-serif',
                  lineHeight: 1,
                  marginBottom: '16px',
                  transition: 'color 0.4s ease'
                }}>
                  {ind.id}
                </span>
                
                <h3 style={{
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  fontSize: 'clamp(32px, 4vw, 42px)',
                  fontWeight: 800,
                  fontFamily: '"Barlow", sans-serif',
                  margin: '0 0 8px',
                  textShadow: isActive ? '0 0 20px rgba(255,255,255,0.2)' : 'none',
                  transition: 'all 0.4s ease'
                }}>
                  {ind.name}
                </h3>
                
                <div style={{
                  color: '#9168ff',
                  fontSize: '18px',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontFamily: '"Barlow", sans-serif',
                  marginBottom: '20px',
                  opacity: isActive ? 1 : 0.5,
                  transition: 'opacity 0.4s ease'
                }}>
                  {ind.tagline}
                </div>
                
                <p style={{
                  color: isActive ? 'rgba(235, 239, 255, 0.8)' : 'rgba(235, 239, 255, 0.4)',
                  fontSize: '16px',
                  lineHeight: '26px',
                  fontFamily: '"Barlow", sans-serif',
                  marginBottom: '32px',
                  maxWidth: '540px',
                  transition: 'color 0.4s ease'
                }}>
                  {ind.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {ind.stats.map((stat, sIdx) => (
                    <div key={sIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '10px 16px',
                      borderRadius: '100px',
                      opacity: isActive ? 1 : 0.4,
                      transition: 'opacity 0.4s ease'
                    }}>
                      <span style={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '16px',
                        fontFamily: '"Barlow", sans-serif'
                      }}>
                        {stat.value}
                      </span>
                      <span style={{
                        color: 'rgba(235, 239, 255, 0.6)',
                        fontSize: '14px',
                        fontFamily: '"Barlow", sans-serif'
                      }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN - Sticky Video Panel (Order 0 on mobile, 1 on desktop) */}
        <div style={{
          width: isMobile ? '100%' : '45%',
          position: isMobile ? 'relative' : 'sticky',
          top: isMobile ? 'auto' : '100px',
          height: 'fit-content',
          alignSelf: 'flex-start',
          zIndex: 10,
          order: isMobile ? 0 : 1
        }}>
          {isMobile && (
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '12px',
              paddingBottom: '16px',
              marginBottom: '16px',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              {industriesData.map((ind, i) => (
                <button key={i} onClick={() => handleTabClick(i)} style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  border: i === activeIdx ? '1px solid #9168ff' : '1px solid rgba(255,255,255,0.1)',
                  background: i === activeIdx ? 'rgba(145, 104, 255, 0.15)' : 'rgba(255,255,255,0.03)',
                  color: i === activeIdx ? '#ffffff' : 'rgba(235, 239, 255, 0.72)',
                  whiteSpace: 'nowrap',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: '"Barlow", sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  {ind.name}
                </button>
              ))}
            </div>
          )}

          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 40px rgba(139,92,246,0.15)',
            backgroundColor: '#0a0a0a'
          }}>
            {/* Video A */}
            {!errA ? (
              <video
                ref={videoARef}
                src={srcA}
                autoPlay muted loop playsInline
                onError={() => setErrA(true)}
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  opacity: activeVid === 'A' ? 1 : 0,
                  transition: 'opacity 0.6s ease',
                  zIndex: activeVid === 'A' ? 2 : 1
                }}
              />
            ) : (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: '#0a0a0a',
                color: 'white', fontFamily: '"Barlow", sans-serif',
                opacity: activeVid === 'A' ? 1 : 0,
                transition: 'opacity 0.6s ease', zIndex: activeVid === 'A' ? 2 : 1
              }}>
                {industriesData.find(ind => ind.videoUrl === srcA)?.name || ''}
              </div>
            )}
            
            {/* Video B */}
            {srcB && !errB ? (
              <video
                ref={videoBRef}
                src={srcB}
                autoPlay muted loop playsInline
                onError={() => setErrB(true)}
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  opacity: activeVid === 'B' ? 1 : 0,
                  transition: 'opacity 0.6s ease',
                  zIndex: activeVid === 'B' ? 2 : 1
                }}
              />
            ) : (srcB && errB) ? (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: '#0a0a0a',
                color: 'white', fontFamily: '"Barlow", sans-serif',
                opacity: activeVid === 'B' ? 1 : 0,
                transition: 'opacity 0.6s ease', zIndex: activeVid === 'B' ? 2 : 1
              }}>
                {industriesData.find(ind => ind.videoUrl === srcB)?.name || ''}
              </div>
            ) : null}
          </div>

          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              background: '#9168ff',
              color: 'white',
              padding: '6px 20px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: '"Barlow", sans-serif',
              transition: 'opacity 0.3s ease'
            }}>
              {industriesData[activeIdx].name}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const TestimonialsSection = () => {
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
      background: 'rgba(3, 3, 3, 1)',
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
          color: '#9168ff',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 700,
          display: 'block',
          marginBottom: '16px'
        }}>TESTIMONIALS</span>
        <h2 style={{
          color: '#ffffff',
          fontSize: '42px',
          fontWeight: 700,
          margin: '0 0 16px',
          fontFamily: '"Barlow", sans-serif'
        }}>What Our Clients Say</h2>
        <p style={{
          color: 'rgba(235, 239, 255, 0.72)',
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
                    border: isActive ? '3px solid #9168ff' : '3px solid rgba(255,255,255,0.1)',
                    filter: isActive ? 'brightness(1) saturate(1)' : 'brightness(0.55) saturate(0.8)',
                    transform: isActive ? 'scale(1.18)' : 'scale(1)',
                    boxShadow: isActive ? '0 0 0 5px rgba(145, 104, 255, 0.25), 0 0 30px rgba(145, 104, 255, 0.35), 0 8px 32px rgba(0,0,0,0.5)' : 'none',
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
                  border: isActive ? '2px solid #9168ff' : '2px solid rgba(255,255,255,0.1)',
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
              color: '#ffffff',
              letterSpacing: '-2px',
              lineHeight: 1,
              margin: 0,
              fontFamily: '"Barlow", sans-serif'
            }}>{activeTestimonial.platform}</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
              <span style={{ fontSize: '26px', fontWeight: 700, color: '#ffffff', fontFamily: '"Barlow", sans-serif' }}>
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
                color: '#9168ff',
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
              <img src={activeTestimonial.avatar} alt={activeTestimonial.name} style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #9168ff',
                boxShadow: '0 0 12px rgba(145, 104, 255, 0.4)'
              }} />
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#9168ff',
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
                  background: idx === activeIndex ? '#9168ff' : 'rgba(255,255,255,0.18)',
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

const HomeContent: React.FC<{
  onNavigate: (page: PageName) => void;
}> = ({
  onNavigate
}) => {

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
      height: '732px',
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
        left: '79px',
        top: '59px',
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
        left: '726px',
        top: '0px',
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
      <IndustriesServedSection />







      {/* Blog Section */}
      <section className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '120px 0 90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(3, 3, 3, 0.99) 0%, rgba(7, 11, 30, 1) 100%)',
      borderRadius: '40px',
      border: '1px solid rgba(10, 132, 255, 0.08)'
    }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '8%',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(10,132,255,0.24), transparent 55%)',
            filter: 'blur(80px)'
          }} />
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(145,104,255,0.18), transparent 55%)',
            filter: 'blur(120px)'
          }} />
        </div>

        <div style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                marginBottom: '18px',
                color: '#6da7ff',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase'
              }}>
                Our Blog
              </span>
              <h2 style={{
                fontSize: 'clamp(42px, 4vw, 64px)',
                lineHeight: 1.05,
                margin: 0,
                color: '#ffffff'
              }}>
                Insights That Drive <span style={{
                  background: 'linear-gradient(90deg, #66a6ff 0%, #0b5bff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Real Results
                </span>
              </h2>
              <p style={{
                marginTop: '22px',
                maxWidth: '610px',
                color: 'rgba(235,239,255,0.78)',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: '"Barlow", sans-serif'
              }}>
                Stay ahead with expert insights, proven strategies, and the latest trends in digital marketing.
              </p>
            </div>
            <div style={{
              position: 'relative',
              minHeight: '360px',
              borderRadius: '32px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(11,18,47,0.95) 0%, rgba(5,8,22,0.96) 100%)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Blog hero" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 30%, rgba(3, 3, 8, 0.92) 100%)'
              }} />
              <div style={{
                position: 'absolute',
                left: '28px',
                bottom: '28px',
                right: '28px',
                color: 'white'
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                  color: '#8cb4ff',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '999px',
                    background: 'rgba(10, 132, 255, 0.15)',
                    display: 'grid',
                    placeItems: 'center'
                  }}>★</span>
                  Featured
                </span>
                <h3 style={{
                  margin: 0,
                  fontSize: '24px',
                  lineHeight: '1.2',
                  fontWeight: 700,
                  color: '#ffffff'
                }}>
                  Blog Intelligence for Modern Brands
                </h3>
                <p style={{
                  marginTop: '12px',
                  color: 'rgba(235,239,255,0.82)',
                  fontSize: '14px',
                  lineHeight: '22px'
                }}>
                  Actionable insights and campaign intelligence that keep your team ahead.
                </p>
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '16px'
          }}>
            {blogStats.map(stat => <div key={stat.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              borderRadius: '22px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.18)'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(10,132,255,0.16), rgba(145,104,255,0.16))',
                display: 'grid',
                placeItems: 'center'
              }}>
                <img src={stat.icon} alt="" style={{ width: '24px', height: '24px' }} />
              </div>
              <div>
                <div style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff'
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(235,239,255,0.72)',
                  marginTop: '6px'
                }}>{stat.label}</div>
              </div>
            </div>)}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
            gap: '20px'
          }}>
            <article style={{
              position: 'relative',
              minHeight: '460px',
              borderRadius: '32px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #10122b 0%, #070b1e 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 16px 45px rgba(0,0,0,0.30)'
            }}>
              <img src={blogPosts[0].image} alt={blogPosts[0].title} style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover'
              }} />
              <div style={{
                position: 'absolute',
                top: '22px',
                left: '22px',
                padding: '10px 16px',
                borderRadius: '999px',
                background: 'rgba(10,132,255,0.16)',
                color: '#66b2ff',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}>{blogPosts[0].tag}</div>
              <div style={{
                position: 'relative',
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: 'calc(100% - 240px)'
              }}>
                <div>
                  <div style={{
                    color: 'rgba(138,183,255,0.85)',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    marginBottom: '12px'
                  }}>{blogPosts[0].category}</div>
                  <h3 style={{
                    color: '#ffffff',
                    fontSize: '26px',
                    lineHeight: '1.18',
                    margin: 0
                  }}>{blogPosts[0].title}</h3>
                  <p style={{
                    marginTop: '16px',
                    color: 'rgba(235,239,255,0.82)',
                    lineHeight: '24px'
                  }}>{blogPosts[0].description}</p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div style={{
                    color: 'rgba(235,239,255,0.72)',
                    fontSize: '13px'
                  }}>{blogPosts[0].author} · {blogPosts[0].date}</div>
                  <div style={{
                    padding: '10px 16px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: '#66b2ff',
                    fontSize: '13px'
                  }}>{blogPosts[0].read}</div>
                </div>
              </div>
            </article>
            {blogPosts.slice(1).map(post => <article key={post.title} style={{
              borderRadius: '28px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #10122b 0%, #070b1e 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 12px 28px rgba(0,0,0,0.24)'
            }}>
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <img src={post.image} alt={post.title} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.92
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(3,3,8,0.92) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  padding: '8px 14px',
                  borderRadius: '999px',
                  background: 'rgba(10,132,255,0.16)',
                  color: '#8cb4ff',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em'
                }}>{post.tag}</div>
              </div>
              <div style={{
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <h3 style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  lineHeight: '1.3',
                  margin: 0
                }}>{post.title}</h3>
                <p style={{
                  color: 'rgba(235,239,255,0.76)',
                  fontSize: '14px',
                  lineHeight: '22px',
                  margin: 0
                }}>{post.description}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 'auto'
                }}>
                  <div style={{
                    color: 'rgba(235,239,255,0.72)',
                    fontSize: '12px'
                  }}>{post.author}</div>
                  <div style={{
                    color: 'rgba(138,183,255,0.85)',
                    fontSize: '12px'
                  }}>{post.read}</div>
                </div>
              </div>
            </article>)}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              minWidth: '220px',
              padding: '16px 28px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'linear-gradient(90deg, #0a84ff 0%, #9168ff 100%)',
              color: '#ffffff',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 0 40px rgba(145,104,255,0.22)'
            }}>
              Explore All Articles
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '-12px'
            }}>
              {['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80'].map((src, idx) => <img key={idx} src={src} alt="avatar" style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '2px solid rgba(3,3,3,0.96)'
              }} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />


      {/* FAQ Section */}
      <FAQSection />



      {/* Final CTA Section */}
      <section style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '120px 0 100px',
      display: 'flex',
      justifyContent: 'center'
    }}>
        <div style={{
        width: '100%',
        backgroundColor: 'rgba(10, 12, 25, 0.96)',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 40px 120px rgba(0, 0, 0, 0.35)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: '32px',
        padding: '56px',
        minHeight: '480px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '32px'
        }}>
            <div>
              <span style={{
              display: 'inline-block',
              color: 'rgba(145, 104, 255, 0.82)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase'
            }}>
                Let’s achieve extraordinary together
              </span>
              <h2 style={{
              color: '#ffffff',
              fontSize: 'clamp(40px, 4vw, 62px)',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '24px 0 24px 0'
            }}>
                Ready to Drive Transformational <span style={{ color: 'rgba(10, 132, 255, 1)' }}>Growth?</span>
              </h2>
              <p style={{
              maxWidth: '560px',
              color: 'rgba(235, 239, 255, 0.82)',
              fontSize: '16px',
              lineHeight: '28px',
              fontFamily: '"Barlow", sans-serif'
            }}>
                Partner with a team of digital marketing experts who are passionate about your success. Let’s create a strategy that drives real results.
              </p>
            </div>
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
              <button style={{
              minWidth: '220px',
              padding: '18px 28px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(90deg, rgba(10, 132, 255, 1), rgba(145, 104, 255, 1))',
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease'
            }} onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 132, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }} onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
                Schedule a Strategy Call
              </button>
              <button style={{
              minWidth: '220px',
              padding: '18px 28px',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              background: 'transparent',
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease'
            }} onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
                See How We Work
              </button>
            </div>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '16px'
          }}>
              {['Data-Driven', 'ROI Focused', 'Expert Team', 'Transparent'].map((label, idx) => <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(10, 132, 255, 0.16)',
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  <span style={{ color: 'rgba(10, 132, 255, 1)', fontSize: '18px', fontWeight: 700 }}>•</span>
                </div>
                <span style={{
                  color: 'rgba(235, 239, 255, 0.88)',
                  fontSize: '14px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 500
                }}>{label}</span>
              </div>)}
            </div>
          </div>
          <div style={{
          position: 'relative',
          borderRadius: '32px',
          overflow: 'hidden',
          minHeight: '460px',
          backgroundColor: 'rgba(0,0,0,0.18)'
        }}>
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Team in meeting" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)'
          }} />
            <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.72) 100%)'
          }} />
            <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            display: 'grid',
            gap: '16px'
          }}>
              {[
              { value: '250+', label: 'Happy Clients' },
              { value: '10X', label: 'Average ROI' }
            ].map(stat => <div key={stat.label} style={{
                minWidth: '180px',
                padding: '16px 20px',
                borderRadius: '24px',
                background: 'rgba(3, 3, 3, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  color: 'rgba(10, 132, 255, 1)',
                  fontSize: '22px',
                  fontWeight: 800,
                  marginBottom: '6px'
                }}>{stat.value}</div>
                <div style={{
                  color: 'rgba(235, 239, 255, 0.78)',
                  fontSize: '13px',
                  lineHeight: '18px'
                }}>{stat.label}</div>
              </div>)}
            </div>
            <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            padding: '18px 22px',
            borderRadius: '24px',
            background: 'rgba(3, 3, 3, 0.88)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
              <div style={{
                color: 'rgba(10, 132, 255, 1)',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '6px'
              }}>98%</div>
              <div style={{
                color: 'rgba(235, 239, 255, 0.78)',
                fontSize: '13px',
                lineHeight: '18px'
              }}>Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{
      width: '100%',
      padding: '120px 0 140px',
      boxSizing: 'border-box'
    }}>
        <div style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
          <div style={{
          position: 'relative',
          minHeight: '700px',
          borderRadius: '40px',
          overflow: 'hidden',
          background: '#030303'
        }}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" alt="Manufacturing background" style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.35) contrast(1.05)'
          }} />
            <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(3, 3, 3, 0.22) 0%, rgba(3, 3, 3, 0.94) 100%)'
          }} />
            <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '32px',
            minHeight: '700px',
            alignItems: 'center',
            padding: '64px 48px'
          }}>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              justifyContent: 'center'
            }}>
                <span style={{
                color: '#00c2ff',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                fontFamily: '"Barlow", sans-serif'
              }}>
                  Request a Quote
                </span>
                <h2 style={{
                color: '#ffffff',
                fontSize: 'clamp(44px, 4.4vw, 68px)',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 800,
                lineHeight: 1.03,
                margin: 0
              }}>
                  Ready to Start Your Project?
                </h2>
                <p style={{
                maxWidth: '560px',
                color: 'rgba(235, 239, 255, 0.84)',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: '"Barlow", sans-serif',
                margin: 0
              }}>
                  For more information about our digital marketing services, or to request a quote from our team, contact us now.
                </p>
              </div>

              <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <div style={{
                width: '100%',
                maxWidth: '480px',
                borderRadius: '32px',
                background: 'rgba(10, 12, 32, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 40px 120px rgba(0, 0, 0, 0.36)',
                padding: '34px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                  <h3 style={{
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: 700,
                  margin: 0,
                  fontFamily: '"Barlow", sans-serif'
                }}>
                    Request a Quote
                  </h3>
                  <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                    {['Your name', 'Your email'].map((placeholder, idx) => <input key={placeholder} type={idx === 1 ? 'email' : 'text'} placeholder={placeholder} style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />)}
                  </div>
                  <div style={{
                  display: 'grid',
                  gap: '16px'
                }}>
                    <input type='text' placeholder='Part Number' style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />
                    <input type='text' placeholder='Phone number*' style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      borderRadius: '18px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: 'rgba(235,239,255,0.84)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif'
                    }}>
                      <button style={{
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        borderRadius: '14px',
                        padding: '10px 16px',
                        cursor: 'pointer',
                        fontFamily: '"Barlow", sans-serif'
                      }}>
                        Choose File
                      </button>
                      <span>No File Chosen</span>
                    </div>
                    <input type='text' placeholder='Quantity' style={{
                      width: '100%',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none'
                    }} />
                    <textarea placeholder='Message' style={{
                      width: '100%',
                      minHeight: '140px',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif',
                      outline: 'none',
                      resize: 'vertical'
                    }} />
                  </div>
                  <button style={{
                  width: '100%',
                  padding: '16px 0',
                  borderRadius: '18px',
                  border: 'none',
                  background: '#ffffff',
                  color: '#080c20',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}>
                    PankajUX India
                  </button>
                  <p style={{
                  color: 'rgba(235, 239, 255, 0.55)',
                  fontSize: '12px',
                  lineHeight: '18px',
                  margin: 0,
                  fontFamily: '"Barlow", sans-serif'
                }}>
                    *** Here at Pankajux India your privacy is important to us. Any information shared will be kept internal, confidential, and secure. ***
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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