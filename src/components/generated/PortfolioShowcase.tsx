"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioHero } from './PortfolioHero';
import { FeaturedResults } from './FeaturedResults';
import { CapabilityFilter } from './CapabilityFilter';
import { CaseStudyShowcase } from './CaseStudyShowcase';
import { ClientSuccessStories } from './ClientSuccessStories';
import { ResultsImpactSection } from './ResultsImpactSection';
import { FAQSection } from './FAQSection';
import { FinalCTASection } from './FinalCTASection';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const ProjectCard = ({
  title,
  image,
  icon
}: {
  title: string;
  image: string;
  icon: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <article className="ca-interactive-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
    width: '586px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '42px',
    paddingBottom: '42px',
    gap: '32px',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '36px',
    cursor: 'pointer'
  }}>
      <img src={image} alt={title} style={{
      width: '488px',
      height: '293px',
      borderRadius: '32px',
      objectFit: 'cover'
    }} />
      <div style={{
      width: '486px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
        <span style={{
        color: 'var(--text-primary)',
        fontSize: '24px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600
      }}>
          {title}
        </span>
        <div style={{
        display: 'flex',
        padding: '14px',
        backgroundColor: isHovered ? 'var(--brand-600-strong)' : 'var(--brand-500-strong)',
        borderRadius: '135px',
        transition: 'background-color 0.2s ease'
      }}>
          <img src={icon} alt="Action" style={{
          width: '24px',
          height: '24px'
        }} />
        </div>
      </div>
      <p style={{
      width: '487px',
      color: 'var(--text-primary)',
      fontSize: '16px',
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 400,
      lineHeight: '24px',
      margin: 0
    }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
      </p>
      <div style={{
      width: '487px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          {[1, 2, 3].map(i => <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/b30791ea-e84f-4c33-a0bb-5934eeec5970.svg" alt="bullet" style={{
            width: '15px'
          }} />
              <span style={{
            color: 'var(--text-primary)',
            fontSize: '14px',
            fontFamily: '"Barlow", sans-serif'
          }}>Lorem Ipsum is simply dummy text</span>
            </div>)}
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          {[1, 2].map(i => <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2294fee1-63be-49d6-9dd8-7eabd2804a2c.svg" alt="bullet" style={{
            width: '15px'
          }} />
              <span style={{
            color: 'var(--text-primary)',
            fontSize: '14px',
            fontFamily: '"Barlow", sans-serif'
          }}>Lorem Ipsum is simply dummy text</span>
            </div>)}
        </div>
      </div>
    </article>;
};
export const PortfolioShowcase = (props: BaseComponentProps) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const caseStudies = [{
    title: 'MachineLearningProject',
    image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/eb4db7a6-fb9d-4b6e-ab7b-8871e099b8ba.png',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/3f9a58cb-0b3e-4767-b7ad-5441e5671e74.svg'
  }, {
    title: 'ProjectLoremIpsum',
    image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/f7ce8423-c750-44e3-a7f9-78792d449161.png',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6072f0d3-ff0d-44c3-b42c-9556ad8b5565.svg'
  }, {
    title: 'ProjectLoremIpsum',
    image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/460920fa-360d-44f7-ade8-257bead9daf8.png',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/53f303ee-ef28-460c-8cbf-3c73d68b2804.svg'
  }, {
    title: 'ProjectLoremIpsum',
    image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1730d670-ae80-4a54-bbcc-a28a27c8a2c6.png',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6ffe9202-0c34-4fc4-a7fb-7127123915ab.svg'
  }, {
    title: 'ProjectLoremIpsum',
    image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/c97179ff-d893-407b-a46e-67f697a73b9e.png',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/cab8d50f-0461-4e38-be32-302658774f0b.svg'
  }, {
    title: 'ProjectLoremIpsum',
    image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/b01828fd-57ed-42bd-8ef8-c0d88e24a7a7.png',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/ac15737b-e3a2-4a9f-b1dd-c244c7325d91.svg'
  }];
  return <div className={`page-shell portfolio-showcase ${props.className || ''}`} style={{
    backgroundColor: 'var(--bg-primary)',
    ...props.style
  }}>
      {/* Background Decorative Element */}
      <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1ac73513-1ff2-4282-b3e6-2b8bdf84dc7f.svg" alt="" style={{
      width: '451px',
      height: '418px',
      position: 'absolute',
      left: '-121px',
      top: '677px',
      pointerEvents: 'none',
      zIndex: 0
    }} />

      {/* Hero Section */}
      <PortfolioHero />

      {/* Featured Results Section */}
      <FeaturedResults />

      {/* Capability Filter Section */}
      <CapabilityFilter />

      {/* Case Study Showcase Section */}
      <CaseStudyShowcase />
      <ResultsImpactSection/>
      <ClientSuccessStories />
      <FAQSection/>
      <FinalCTASection/>
      

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .portfolio-showcase button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>;
};
