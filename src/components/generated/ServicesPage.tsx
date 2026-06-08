"use client";
import React, { useState } from 'react';
import { IndustriesSection } from './IndustriesSection';
import { ServicesEcosystemSection } from './ServicesEcosystemSection';
import { ServicesPageGridSection } from './ServicesPageGridSection';
import { ServiceProcessSection } from './ServiceProcessSection';
import { ServiceCategoriesSection } from './ServiceCategoriesSection';
import { WhyOurServicesWorkSection } from './WhyOurServicesWorkSection';
import { ResultsImpactSection } from './ResultsImpactSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { TechnologyStackSection } from './TechnologyStackSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';
import { FinalCTASection } from './FinalCTASection';

interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface ServicesPageProps {
  onNavigate?: (page: any) => void;
}

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}
interface IndustryItem {
  title: string;
  description: string;
  image: string;
}
const servicesData: ServiceItem[] = [{
  title: 'Machine Learning Solutions',
  description: 'Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.',
  features: ['Deep learning model development', 'Computer vision solutions', 'Model optimization and scaling', 'Neural network architecture design', 'Natural language processing'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/c9e66d9c-d280-4536-ae80-8a8f1ab6abfc.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/264a1827-dbd2-45f7-8100-713af00878df.svg'
}, {
  title: 'Blockchain Development',
  description: 'End-to-end blockchain solutions from smart contract development to decentralized application architecture.',
  features: ['Smart contract development', 'Blockchain integration', 'Token implementation', 'DeFi protocol design', 'Web3 development'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/50684f98-7105-40d1-9a0b-f62b2b900062.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/be5c420a-ee44-40cb-ba5a-ebabd0aaeb03.svg'
}, {
  title: 'Algorithmic Trading',
  description: 'Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.',
  features: ['Trading strategy development', 'Market analysis algorithms', 'Performance optimization', 'High-frequency trading systems', 'Risk management systems'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a572fdab-f147-41cf-a720-59e90f464339.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/dd6864d5-e306-49d7-9649-27f8b5e7fa7d.svg'
}, {
  title: 'Data Engineering',
  description: 'Build robust data infrastructure that scales with your business needs using modern data engineering practices.',
  features: ['Data pipeline development', 'Database optimization', 'Data warehouse architecture', 'Big data processing', 'ETL workflow design'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a717c6dc-23c4-46a5-bd61-4b827c96c99b.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/0f57078b-5c6b-4ca5-a71b-c72d8ecac4f2.svg'
}, {
  title: 'Predictive Analytics',
  description: 'Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions.',
  features: ['Time series analysis', 'Business intelligence', 'Data visualization', 'Predictive modeling', 'Statistical analysis'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/678d2808-a2d0-4765-b455-05764e61e9be.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/53862a8f-d5dd-4616-942a-b587544a91d2.svg'
}, {
  title: 'MLOps & Infrastructure',
  description: 'Enterprise-grade infrastructure for deploying and managing ML models in production environments.',
  features: ['CI/CD pipeline setup', 'Performance monitoring', 'DevOps integration', 'Model deployment automation', 'Infrastructure scaling'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9183b02c-60e9-42d8-af39-dfe8c83431db.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516c.svg'
}];
const industryCards: IndustryItem[] = [{
  title: 'E-Commerce',
  description: 'Building digital storefronts that convert across channels and devices.',
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80'
}, {
  title: 'Healthcare',
  description: 'Empowering better patient care with intelligent health and diagnostics solutions.',
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'
}, {
  title: 'Real Estate',
  description: 'Creating high-impact property experiences with data-driven digital tools.',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80'
}, {
  title: 'Education',
  description: 'Transforming learning with immersive digital experiences and modern platforms.',
  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80'
}, {
  title: 'Restaurants & Food',
  description: 'Delivering tasty digital experiences for hospitality and restaurant brands.',
  image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80'
}, {
  title: 'Automotive',
  description: 'Driving automotive brands forward with premium digital experiences.',
  image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80'
}, {
  title: 'Finance & Banking',
  description: 'Powering financial services with secure, modern, customer-first digital products.',
  image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80'
}, {
  title: 'Fashion & Retail',
  description: 'Crafting polished retail experiences with premium brand storytelling.',
  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80'
}];
const industryHeights = [380, 300, 440, 300];
const ServiceCard = ({
  item
}: {
  item: ServiceItem;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="ca-interactive-card" style={{
    width: '586px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '42px',
    gap: '32px',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '36px',
    border: isHovered ? '1px solid var(--brand-500-strong)' : '1px solid transparent',
    cursor: 'pointer'
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={item.image} alt={item.title} style={{
      width: '223px',
      height: '231px',
      objectFit: 'contain'
    }} />
      <span style={{
      color: 'var(--text-primary)',
      fontSize: '24px',
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 600,
      textAlign: 'center',
      alignSelf: 'stretch'
    }}>{item.title}</span>
      <span style={{
      width: '487px',
      color: 'var(--text-primary)',
      fontSize: '16px',
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 400,
      lineHeight: '24px',
      textAlign: 'center'
    }}>{item.description}</span>
      
      <div style={{
      display: 'flex',
      width: '487px',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap'
    }}>
        {item.features.map((feature, i) => <div key={i} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        width: '45%'
      }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a26bc16d-e486-43d7-a0c3-3ca7ca20711f.svg" alt="bullet" style={{
          width: '15px',
          height: '15px'
        }} />
            <span style={{
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 400,
          lineHeight: '24px'
        }}>{feature}</span>
          </div>)}
      </div>

      <button className="ca-interactive-btn" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      background: 'none',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '100px',
      padding: '10px 10px 10px 16px',
      cursor: 'pointer',
      transition: 'background 0.2s ease'
    }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
        <div style={{
        background: 'var(--brand-500-strong)',
        borderRadius: '135px',
        padding: '6px 14px',
        display: 'flex',
        alignItems: 'center'
      }}>
          <img src={item.icon} alt="Icon" style={{
          width: '24px',
          height: '24px'
        }} />
        </div>
        <span style={{
        color: 'var(--text-primary)',
        fontSize: '14px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 400
      }}>Book a Call</span>
      </button>
    </div>;
};
const IndustryCard = ({
  item,
  index,
  onHover
}: {
  item: IndustryItem;
  index: number;
  onHover: (value: boolean) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardHeight = industryHeights[index % industryHeights.length];
  return <div style={{
    width: '220px',
    height: `${cardHeight}px`,
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    flexShrink: 0,
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.3s ease',
    boxShadow: isHovered ? '0 20px 40px var(--brand-500-medium)' : 'none'
  }} onMouseEnter={() => {
    setIsHovered(true);
    onHover(true);
  }} onMouseLeave={() => {
    setIsHovered(false);
    onHover(false);
  }}>
      <img src={item.image} alt={item.title} style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
      <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%)'
    }} />
      <div style={{
      position: 'absolute',
      bottom: '50px',
      left: '20px',
      right: '20px',
      zIndex: 2,
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 0.3s ease'
    }}>
        <div style={{
        color: 'rgba(255,255,255,0.85)',
        fontSize: '13px',
        fontFamily: '"Barlow", sans-serif',
        lineHeight: 1.5
      }}>
          {item.description}
        </div>
      </div>
      <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      zIndex: 2,
      color: 'var(--text-primary)',
      fontSize: '18px',
      fontWeight: 700,
      fontFamily: '"Barlow", sans-serif'
    }}>
        {item.title}
      </div>
    </div>;
};
export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  return <div style={{
    width: '100%',
    backgroundColor: 'var(--bg-primary)',
    overflowX: 'clip',
    position: 'relative'
  }}>
      {/* Hero Section */}
      <section style={{
      margin: '53px auto',
      width: '100%',
      maxWidth: '1254px',
      minHeight: '376px',
      position: 'relative',
      borderRadius: '48px',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-secondary)'
    }}>
        <div style={{
        position: 'absolute',
        left: '-1px',
        top: '5px',
        width: '798px',
        height: '471px',
        pointerEvents: 'none',
        opacity: 0.5
      }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7d5ddafc-9cb2-4f90-a70c-06e9211e661c.png" alt="background" style={{
          width: '511px',
          position: 'absolute',
          left: 0,
          top: 0
        }} />
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7d5ddafc-9cb2-4f90-a70c-06e9211e661c.png" alt="background" style={{
          width: '511px',
          position: 'absolute',
          left: '287px',
          top: '95px'
        }} />
        </div>
        <div style={{
        padding: '57px 66px',
        position: 'relative',
        zIndex: 2
      }}>
          <h1 style={{
          width: '645px',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '40px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 700,
          lineHeight: '48px',
          margin: 0
        }}>
            Our Comprehensive Digital Solutions
          </h1>
          <p style={{
          width: '629px',
          marginTop: '39px',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 400,
          lineHeight: '24px'
        }}>
            At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake.
          </p>
        </div>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a8368f2c-e5c4-4d31-b3b6-5d95f441782f.png" alt="Dashboard" style={{
        position: 'absolute',
        right: '0px',
        top: '-85px',
        width: '543px',
        height: '482px',
        objectFit: 'cover'
      }} />
      </section>

      <ServicesEcosystemSection onNavigate={onNavigate} />

      <ServicesPageGridSection onNavigate={onNavigate} />

      <ServiceProcessSection />

      <ServiceCategoriesSection />

      <WhyOurServicesWorkSection />

      <ResultsImpactSection />

      <CaseStudiesSection />

      <IndustriesSection />

      <TechnologyStackSection />

      <TestimonialsSection />

      <FAQSection onNavigate={onNavigate} />

      <FinalCTASection onNavigate={onNavigate} />
      
    </div>;
};
