import React, { useState } from 'react';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const BarlowFont = '"Barlow", sans-serif';
const assetBase = 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets';
const stats = [{
  icon: '6fb7d62e-df39-494a-aa26-241744ac5ad2.svg',
  value: '150+',
  label: 'AI Projects Delivered'
}, {
  icon: '7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg',
  value: '100+',
  label: 'Enterprise Clients'
}, {
  icon: '9f786cae-4cd7-4341-a0d5-261f108aa54a.svg',
  value: '50+',
  label: 'Expert Engineers'
}, {
  icon: 'd4ad3299-5a85-4079-b32d-c6e0052e934e.svg',
  value: '12+',
  label: 'Industries Served'
}];
const expertiseAreas = [{
  icon: '264a1827-dbd2-45f7-8100-713af00878df.svg',
  title: 'Machine Learning',
  text: 'Custom models, deep learning, and production-grade ML pipelines.'
}, {
  icon: 'be5c420a-ee44-40cb-ba5a-ebabd0aaeb03.svg',
  title: 'Blockchain & Web3',
  text: 'Smart contracts, DeFi protocols, and decentralized applications.'
}, {
  icon: 'dd6864d5-e306-49d7-9649-27f8b5e7fa7d.svg',
  title: 'Quantitative Finance',
  text: 'Algorithmic trading, risk systems, and market analytics.'
}, {
  icon: '0f57078b-5c6b-4ca5-a71b-c72d8ecac4f2.svg',
  title: 'Data Engineering',
  text: 'Scalable data infrastructure, ETL, and real-time analytics.'
}, {
  icon: '53862a8f-d5dd-4616-942a-b587544a91d2.svg',
  title: 'Predictive Analytics',
  text: 'Forecasting, BI dashboards, and decision intelligence.'
}, {
  icon: 'd9f0b80b-1630-4621-8c7c-b38b04cf516c.svg',
  title: 'MLOps & Cloud',
  text: 'CI/CD for models, monitoring, and cloud-native deployment.'
}];
const values = [{
  title: 'Innovation',
  icon: 'f012abbe-4078-4cb7-94d0-df96b70169f2.svg',
  text: 'Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.'
}, {
  title: 'Collaboration',
  icon: 'b05e2154-c77b-4da4-b0a1-cd711a5c88f2.svg',
  text: 'Working closely with clients to develop tailored solutions that drive measurable success.'
}, {
  title: 'Excellence',
  icon: 'a2300db0-381a-4ae0-b91f-547844aa7e1d.svg',
  text: 'Maintaining the highest standards in code quality, system performance, and client outcomes.'
}, {
  title: 'Integrity',
  icon: '018855c2-5389-413e-8676-fb946b462e7f.svg',
  text: 'Operating with transparency and ethical considerations at the forefront of all decisions.'
}];
const PrimaryButton: React.FC<{
  children: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
}> = ({
  children,
  width,
  height,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <button className="ca-interactive-btn" onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
    width: width || '140px',
    height: height || 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px 10px',
    backgroundColor: isHovered ? 'rgba(10, 132, 255, 0.9)' : 'rgba(10, 132, 255, 1)',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    transform: isHovered ? 'translateY(-1px)' : 'none',
    boxShadow: isHovered ? '0 4px 12px rgba(10, 132, 255, 0.3)' : 'none',
    overflow: 'hidden'
  }}>
      <span style={{
      color: 'rgba(255, 255, 255, 1)',
      fontSize: '14px',
      fontFamily: BarlowFont,
      fontWeight: 600,
      lineHeight: '14px',
      textAlign: 'center'
    }}>
        {children}
      </span>
    </button>;
};
export const AboutSection: React.FC<BaseComponentProps> = ({
  className,
  style
}) => {
  return <div className={`about-section ca-fade-in ${className || ''}`} style={{
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '53px clamp(24px, 6vw, 93px) 80px',
    backgroundColor: 'rgba(3, 3, 3, 1)',
    boxSizing: 'border-box',
    ...style
  }}>
      {/* Hero */}
      <section className="ca-interactive-card" style={{
      width: '100%',
      maxWidth: '1254px',
      margin: '0 auto',
      minHeight: '376px',
      borderRadius: '48px',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: 'rgba(20, 20, 20, 1)',
      padding: '57px 66px',
      boxSizing: 'border-box'
    }}>
        <div style={{
        position: 'absolute',
        left: '-1px',
        top: '5px',
        width: '798px',
        height: '471px',
        pointerEvents: 'none'
      }}>
          <img src={`${assetBase}/de210520-9753-4649-9848-ea63ae8184fe.png`} alt="" aria-hidden="true" style={{
          width: '511px',
          height: '376px',
          position: 'absolute',
          left: 0,
          top: 0,
          objectFit: 'cover',
          opacity: 0.6
        }} />
          <img src={`${assetBase}/de210520-9753-4649-9848-ea63ae8184fe.png`} alt="" aria-hidden="true" style={{
          width: '511px',
          height: '376px',
          position: 'absolute',
          left: '287px',
          top: '95px',
          objectFit: 'cover',
          opacity: 0.4
        }} />
        </div>
        <img className="ca-interactive-icon" src={`${assetBase}/cbc7e062-1afa-4cc2-83b7-c424407899a6.png`} alt="" aria-hidden="true" style={{
        width: '280px',
        height: '280px',
        position: 'absolute',
        right: '40px',
        top: '48px',
        objectFit: 'cover',
        pointerEvents: 'none',
        opacity: 0.85
      }} />
        <h1 style={{
        maxWidth: '659px',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 'clamp(28px, 4vw, 40px)',
        fontFamily: BarlowFont,
        fontWeight: 700,
        lineHeight: '1.2',
        margin: '0 0 24px 0',
        position: 'relative',
        zIndex: 1
      }}>
          We're Engineers of Intelligent Change
        </h1>
        <p style={{
        maxWidth: '567px',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: '16px',
        fontFamily: BarlowFont,
        fontWeight: 400,
        lineHeight: '24px',
        margin: '0 0 32px 0',
        position: 'relative',
        zIndex: 1
      }}>
          Pioneering the intersection of AI, blockchain, and quantitative finance to deliver innovative solutions that drive business transformation
        </p>
        <div style={{
        position: 'relative',
        zIndex: 1
      }}>
          <PrimaryButton width="170px" height="42px">Get In Touch</PrimaryButton>
        </div>
      </section>

      {/* Our Story */}
      <div className="about-two-col" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center',
      maxWidth: '1254px',
      margin: '100px auto 0'
    }}>
        <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <h2 style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '24px',
          fontFamily: BarlowFont,
          fontWeight: 700,
          margin: 0
        }}>
            Our Story
          </h2>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            fontFamily: BarlowFont,
            lineHeight: '1.5',
            margin: 0
          }}>
              Founded by engineers and data scientists, Catalyst Analytics began with a simple belief: every organization deserves access to world-class AI and analytics capabilities without the complexity.
            </p>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            fontFamily: BarlowFont,
            lineHeight: '1.5',
            margin: 0
          }}>
              Today we partner with startups and Fortune 500 companies alike — building intelligent systems that turn raw data into competitive advantage across finance, healthcare, gaming, and beyond.
            </p>
          </div>
        </section>
        <img className="ca-interactive-card" src={`${assetBase}/8ee23f7a-8253-4aab-a584-713fa094c359.png`} alt="Team working" style={{
        width: '100%',
        maxWidth: '484px',
        height: 'auto',
        borderRadius: '24px',
        justifySelf: 'end',
        objectFit: 'contain'
      }} />
      </div>

      {/* Our Mission */}
      <div className="about-two-col" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center',
      maxWidth: '1254px',
      margin: '80px auto 0'
    }}>
        <img className="ca-interactive-card" src={`${assetBase}/bd6a5566-a2b5-4175-9d29-96e3cb76ff34.png`} alt="Strategy meeting" style={{
        width: '100%',
        maxWidth: '492px',
        height: 'auto',
        borderRadius: '24px',
        objectFit: 'contain'
      }} />
        <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <h2 style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '24px',
          fontFamily: BarlowFont,
          fontWeight: 700,
          margin: 0
        }}>
            Our Mission
          </h2>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            fontFamily: BarlowFont,
            lineHeight: '1.5',
            margin: 0
          }}>
              To democratize advanced AI and data engineering — making enterprise-grade intelligence accessible, actionable, and accountable for every business we serve.
            </p>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            fontFamily: BarlowFont,
            lineHeight: '1.5',
            margin: 0
          }}>
              We measure success by the outcomes we create: faster decisions, lower costs, and measurable ROI from every model we deploy.
            </p>
          </div>
        </section>
      </div>

      {/* Stats — fills former empty gap */}
      <section style={{
      maxWidth: '1254px',
      margin: '100px auto 0',
      textAlign: 'center'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: 'clamp(26px, 4vw, 36px)',
        fontFamily: BarlowFont,
        fontWeight: 600,
        margin: '0 0 48px 0'
      }}>
          Catalyst Analytics at a Glance
        </h2>
        <div className="about-stats-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px'
      }}>
          {stats.map(stat => <div key={stat.label} className="ca-interactive-card" style={{
          backgroundColor: 'rgba(20, 20, 20, 1)',
          borderRadius: '24px',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
              <img className="ca-interactive-icon" src={`${assetBase}/${stat.icon}`} alt="" style={{
            width: '40px',
            height: '40px'
          }} />
              <span style={{
            color: 'rgba(10, 132, 255, 1)',
            fontSize: '36px',
            fontFamily: BarlowFont,
            fontWeight: 700,
            lineHeight: 1
          }}>
                {stat.value}
              </span>
              <span style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '14px',
            fontFamily: BarlowFont,
            fontWeight: 500,
            textAlign: 'center'
          }}>
                {stat.label}
              </span>
            </div>)}
        </div>
      </section>

      {/* Expertise grid */}
      <section style={{
      maxWidth: '1254px',
      margin: '100px auto 0',
      textAlign: 'center'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: 'clamp(26px, 4vw, 36px)',
        fontFamily: BarlowFont,
        fontWeight: 600,
        margin: '0 0 16px 0'
      }}>
          What We Build
        </h2>
        <p style={{
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '16px',
        fontFamily: BarlowFont,
        maxWidth: '600px',
        margin: '0 auto 48px',
        lineHeight: '1.5'
      }}>
          End-to-end capabilities across the full AI and data stack — from research to production.
        </p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
          {expertiseAreas.map(area => <div key={area.title} className="ca-interactive-card" style={{
          backgroundColor: 'rgba(20, 20, 20, 1)',
          borderRadius: '20px',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '14px',
          textAlign: 'left',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
              <img className="ca-interactive-icon" src={`${assetBase}/${area.icon}`} alt="" style={{
            width: '32px',
            height: '32px'
          }} />
              <span style={{
            color: 'white',
            fontSize: '18px',
            fontFamily: BarlowFont,
            fontWeight: 600
          }}>
                {area.title}
              </span>
              <p style={{
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '14px',
            fontFamily: BarlowFont,
            lineHeight: '1.5',
            margin: 0
          }}>
                {area.text}
              </p>
            </div>)}
        </div>
      </section>

      {/* Our Values */}
      <section style={{
      maxWidth: '1254px',
      margin: '100px auto 0',
      textAlign: 'center'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: 'clamp(26px, 4vw, 36px)',
        fontFamily: BarlowFont,
        fontWeight: 600,
        margin: '0 0 48px 0'
      }}>
          Our Values
        </h2>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '24px'
      }}>
          {values.map(value => <div key={value.title} className="ca-interactive-card" style={{
          width: '280px',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 42px',
          gap: '16px',
          backgroundColor: 'rgba(20, 20, 20, 1)',
          border: '10px solid rgba(0, 0, 0, 1)',
          borderRadius: '1000px',
          boxSizing: 'border-box'
        }}>
              <img className="ca-interactive-icon" src={`${assetBase}/${value.icon}`} alt={value.title} style={{
            width: '33px',
            height: '34px'
          }} />
              <span style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: BarlowFont,
            fontWeight: 500
          }}>
                {value.title}
              </span>
              <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '14px',
            fontFamily: BarlowFont,
            lineHeight: '1.4',
            textAlign: 'center',
            margin: 0
          }}>
                {value.text}
              </p>
            </div>)}
        </div>
      </section>

      {/* CTA */}
      <section className="ca-interactive-card" style={{
      width: '100%',
      maxWidth: '1097px',
      margin: '100px auto 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '48px 24px',
      gap: '16px',
      boxShadow: '2px 4px 8px rgba(255, 255, 255, 0.25)',
      borderRadius: '64px',
      backgroundImage: `url("${assetBase}/66f38649-d115-48aa-a1da-5956de15d0c5.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxSizing: 'border-box'
    }}>
        <h2 style={{
        color: 'white',
        fontSize: 'clamp(24px, 4vw, 36px)',
        fontFamily: BarlowFont,
        fontWeight: 600,
        textTransform: 'uppercase',
        margin: 0,
        textAlign: 'center'
      }}>
          Ready to discuss
        </h2>
        <p style={{
        color: 'white',
        fontSize: 'clamp(16px, 2.5vw, 20px)',
        fontFamily: BarlowFont,
        fontWeight: 600,
        margin: 0,
        textAlign: 'center'
      }}>
          your product needs with Catalyst Analytic experts?
        </p>
        <PrimaryButton width="198px">Get In Touch</PrimaryButton>
      </section>
    </div>;
};
