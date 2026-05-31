import React, { useState } from 'react';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
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
const industriesData = [{
  title: 'Financial Services & Trading',
  description: 'Advanced analytics and trading solutions for financial institutions.',
  features: ['Algorithmic trading systems', 'Market analysis', 'Risk management', 'Fraud detection'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a572fdab-f147-41cf-a720-59e90f464339.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7ecdd344-1303-4510-b60b-c2404030561e.svg'
}, {
  title: 'Blockchain & Crypto',
  description: 'Cutting-edge blockchain solutions and DeFi protocol development.',
  features: ['DeFi protocols', 'Token systems', 'Smart contracts', 'Blockchain analytics'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/50684f98-7105-40d1-9a0b-f62b2b900062.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/0bc02704-3420-4d87-8f28-84ed240576fb.svg'
}, {
  title: 'Esports & Gaming',
  description: 'Data-driven solutions for esports teams, tournaments, and gaming platforms.',
  features: ['Player performance analytics', 'Team optimization', 'Tournament management', 'Gaming platform analytics'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/b47e7e11-7d1e-419e-af1a-b42d065a6f7a.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/4ff6bcf8-5c4f-4b51-8030-6f5ad810e1fe.svg'
}, {
  title: 'Healthcare & Life Sciences',
  description: 'AI solutions for medical imaging, patient care optimization, and drug discovery.',
  features: ['Medical image analysis', 'Clinical trial optimization', 'Patient outcome prediction', 'Drug development'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4e3b372-af8e-4131-b63a-5c84ca8b78a5.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/4b95fe13-be65-4ad1-91d7-fc9c4ae44ca3.svg'
}, {
  title: 'Manufacturing',
  description: 'Smart manufacturing solutions with predictive maintenance and quality control.',
  features: ['Predictive maintenance', 'Supply chain optimization', 'Quality control automation', 'Process optimization'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d1c4f016-2d5e-4343-8831-ccb7d0796bd8.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/705857df-0ae1-47c5-b32b-79ee96980d69.svg'
}, {
  title: 'Retail & E-commerce',
  description: 'AI-powered solutions for personalization and inventory management.',
  features: ['Demand forecasting', 'Inventory optimization', 'Recommendation systems', 'Customer analytics'],
  image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2ebd53e1-1524-45ab-a91a-8dd3795a0baf.png',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/5cb9be0d-3600-4fcd-9085-7066a9555bb8.svg'
}];
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
    backgroundColor: 'rgba(20, 20, 20, 1)',
    borderRadius: '36px',
    border: isHovered ? '1px solid rgba(10, 132, 255, 0.3)' : '1px solid transparent',
    cursor: 'pointer'
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={item.image} alt={item.title} style={{
      width: '223px',
      height: '231px',
      objectFit: 'contain'
    }} />
      <span style={{
      color: 'white',
      fontSize: '24px',
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 600,
      textAlign: 'center',
      alignSelf: 'stretch'
    }}>{item.title}</span>
      <span style={{
      width: '487px',
      color: 'white',
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
          color: 'white',
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
        background: 'rgba(69, 156, 243, 1)',
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
        color: 'white',
        fontSize: '14px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 400
      }}>Book a Call</span>
      </button>
    </div>;
};
export const ServicesPage = () => {
  return <div style={{
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'rgba(3, 3, 3, 1)',
    overflowX: 'hidden',
    position: 'relative'
  }}>
      {/* Hero Section */}
      <section style={{
      margin: '53px auto',
      width: '1254px',
      height: '376px',
      position: 'relative',
      borderRadius: '48px',
      overflow: 'hidden',
      backgroundColor: 'rgba(20, 20, 20, 1)'
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

      {/* Services Section */}
      <section style={{
      maxWidth: '1230px',
      margin: '129px auto',
      textAlign: 'center'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: '36px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600,
        marginBottom: '12px'
      }}>Our Services</h2>
        <p style={{
        maxWidth: '667px',
        margin: '0 auto 108px auto',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '16px',
        fontFamily: '"Barlow", sans-serif',
        lineHeight: '24px'
      }}>
          Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering
        </p>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '58px',
        justifyContent: 'center'
      }}>
          {servicesData.map((item, index) => <ServiceCard key={index} item={item} />)}
        </div>
      </section>

      {/* Industries Section */}
      <section style={{
      maxWidth: '1230px',
      margin: '154px auto',
      textAlign: 'center'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: '36px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 600,
        marginBottom: '12px'
      }}>Industries We Serve</h2>
        <p style={{
        maxWidth: '961px',
        margin: '0 auto 88px auto',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '16px',
        fontFamily: '"Barlow", sans-serif',
        lineHeight: '24px'
      }}>
          Delivering innovative solutions across diverse industries with deep domain expertise
        </p>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '58px',
        justifyContent: 'center'
      }}>
          {industriesData.map((item, index) => <ServiceCard key={index} item={item as ServiceItem} />)}
        </div>
      </section>
    </div>;
};