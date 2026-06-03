import React from 'react';

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

export const ServicesGridSection: React.FC = () => {
  return (
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
        color: 'var(--text-primary)',
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
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '36px',
          padding: '42px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer'
        }}>
              <img className="ca-hover-popup" src={service.img} alt={service.title} style={{
            width: '100%',
            maxWidth: '220px',
            height: 'auto',
            objectFit: 'cover'
          }} />
              <h3 style={{
            color: 'var(--text-primary)',
            fontSize: '24px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            margin: 0,
            textAlign: 'center'
          }}>
                {service.title}
              </h3>
              <p style={{
            color: 'var(--text-primary)',
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
  );
};
