import React from 'react';
import { PageName } from './ServicedetailPage';

const clientAvatars = ['3a9e176a-3863-474d-a596-d593c4d569ea.png', '998d15ff-acf1-4ed8-b332-f13d639b3e03.png', '363356fa-f16d-41aa-99ea-3c436d6bc5df.png'];

export const HeroSection: React.FC<{ onNavigate?: (page: PageName) => void }> = ({ onNavigate }) => {
  return (
      <>
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
          color: 'var(--text-primary)',
          fontSize: '72px',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
          lineHeight: '87.1px',
          margin: '0 0 33px 0',
          letterSpacing: '-0.02em',
          
        }}>
            <span style={{
            display: 'inline',
            marginLeft: '-12px',
          }}>Transforming Data into</span>
            <span className="hero-decisions-badge" style={{
            display: 'inline-block',
            backgroundColor: 'rgba(0, 194, 255, 1)',
            borderRadius: '16px',
            padding: '0 28px',
            marginTop: '8px',
            marginLeft: '25px',
            lineHeight: '77px',
            height: '77px',
            boxSizing: 'border-box'
          }}>
              Decisions
            </span>
          </h1>
          <p className="hero-p" style={{
          color: 'var(--text-muted)',
          fontSize: '20px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 400,
          lineHeight: '32px',
          width: '547px',
          margin: '0 0 33px 0'
        }}>
            Leverage the power of machine learning and AI to unlock insights and drive business growth
          </p>
          <button onClick={() => onNavigate && onNavigate('Contact')} className="primary-btn hero-cta-btn" style={{
          width: '165px',
          height: '42px',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 194, 255, 1)',
          border: 'none',
          borderRadius: '10px',
          color: 'var(--text-primary)',
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
              {clientAvatars.map((avatar, i) => <img className="ca-hover-popup" key={avatar} src={`https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${avatar}`} style={{
              width: '24px',
              height: '24px',
              borderRadius: '100px',
              border: '2px solid var(--bg-primary)',
              position: 'absolute',
              left: `${i * 17}px`,
              objectFit: 'cover'
            }} alt="Client" />)}
            </div>
            <span style={{
            color: 'var(--text-muted)',
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
          background: 'radial-gradient(circle, rgba(0, 194, 255, 0.75) 0%, rgba(0, 194, 255, 0.35) 45%, rgba(0, 194, 255, 0) 72%)',
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
            <img className="hero-robot ca-hover-popup" src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/de2a68bf-ec21-4394-ae40-09cb18b14ccf.png" alt="AI Robot" style={{
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
      </>
  );
};
