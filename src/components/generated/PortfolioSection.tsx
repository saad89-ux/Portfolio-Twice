import React, { useState } from 'react';

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

export const PortfolioSection: React.FC = () => {
  const [activePortfolioCategory, setActivePortfolioCategory] = useState('All Projects');

  return (
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
            color: 'var(--text-primary)',
            fontSize: 'clamp(44px, 4vw, 72px)',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            lineHeight: '1.02',
            margin: '22px 0 18px'
          }}>
              Real Work. Real <span style={{ color: '#00c2ff' }}>Results.</span>
            </h2>
            <p style={{
            color: 'var(--text-muted)',
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
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minHeight: '168px',
            justifyContent: 'center'
          }}>
              <span style={{
              color: 'rgba(0, 194, 255, 1)',
              fontSize: '32px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800
            }}>
                {stat.value}
              </span>
              <span style={{
              color: 'var(--text-muted)',
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
            backgroundColor: activePortfolioCategory === category ? '#00c2ff' : 'rgba(255, 255, 255, 0.05)',
            color: activePortfolioCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
            border: activePortfolioCategory === category ? '1px solid #00c2ff' : '1px solid rgba(255, 255, 255, 0.08)',
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
            backgroundColor: 'var(--bg-card)',
            borderRadius: '36px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
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
                <img className="ca-hover-popup" src={project.image} alt={project.title} style={{
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
                backgroundColor: 'rgba(0, 194, 255, 0.18)',
                color: 'rgba(0, 194, 255, 1)',
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
                color: 'var(--text-primary)',
                fontSize: '24px',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 700,
                margin: '0 0 12px'
              }}>
                  {project.title}
                </h3>
                <p style={{
                color: 'var(--text-muted)',
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
                      color: 'var(--text-muted)',
                      fontSize: '14px',
                      fontFamily: '"Barlow", sans-serif'
                    }}>
                        {metric.label}
                      </span>
                      <strong style={{
                      color: 'var(--text-primary)',
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
                backgroundColor: '#00c2ff',
                color: 'var(--text-primary)',
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
        border: '1px solid var(--border-light)',
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
                color: 'var(--text-primary)',
                fontSize: '28px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                margin: 0
              }}>
                  Want results like these?
                </h3>
                <p style={{
                color: 'var(--text-muted)',
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
            backgroundColor: '#00c2ff',
            color: 'var(--text-primary)',
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
  );
};
