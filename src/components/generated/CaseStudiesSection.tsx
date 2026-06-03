'use client';
import React, { useState } from 'react';

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

export const CaseStudiesSection: React.FC = () => {
  const [activeCaseStudyCategory, setActiveCaseStudyCategory] = useState('All Case Studies');

  return (
      /* Case Studies Section */
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
            color: 'var(--text-primary)',
            fontSize: 'clamp(44px, 4vw, 68px)',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            lineHeight: '1.04',
            margin: '24px 0 20px'
          }}>
              Real Challenges. Strategic Thinking. Outstanding Results.
            </h2>
            <p style={{
            color: 'var(--text-muted)',
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
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
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
            backgroundColor: activeCaseStudyCategory === category ? '#00c2ff' : 'rgba(255, 255, 255, 0.05)',
            color: activeCaseStudyCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
            border: activeCaseStudyCategory === category ? '1px solid #00c2ff' : '1px solid rgba(255, 255, 255, 0.08)',
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
            backgroundColor: 'var(--bg-card)',
            borderRadius: '36px',
            overflow: 'hidden',
            minHeight: '520px',
            border: '1px solid var(--border-light)'
          }}>
              <img className="ca-hover-popup" src={caseStudyFeatured.image} alt={caseStudyFeatured.title} style={{
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
                  backgroundColor: 'rgba(0, 194, 255, 0.12)',
                  borderRadius: '999px',
                  width: 'fit-content',
                  color: '#00c2ff',
                  fontSize: '12px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase'
                }}>
                    {caseStudyFeatured.category}
                  </div>
                  <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: '34px',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 800,
                  lineHeight: '1.05',
                  margin: 0
                }}>
                    {caseStudyFeatured.title}
                  </h3>
                  <p style={{
                  color: 'var(--text-muted)',
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
                    color: 'var(--text-muted)',
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
                    border: '1px solid var(--border-light)'
                  }}>
                      <p style={{
                      color: 'var(--text-muted)',
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
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                minHeight: '252px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                    <div>
                      <h4 style={{
                      color: '#00c2ff',
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
                          border: '1px solid var(--border-light)'
                        }}>
                            <span style={{
                            display: 'block',
                            color: 'var(--text-primary)',
                            fontSize: '22px',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 800,
                            marginBottom: '8px'
                          }}>
                              {result.label.split(' ')[0]}
                            </span>
                            <span style={{
                            color: 'var(--text-muted)',
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
                    backgroundColor: '#00c2ff',
                    color: 'var(--text-primary)',
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
                border: '1px solid var(--border-light)'
              }}>
                    <p style={{
                    color: 'var(--text-muted)',
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
            backgroundColor: 'var(--bg-card)',
            borderRadius: '32px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}>
              <img className="ca-hover-popup" src={card.image} alt={card.title} style={{
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
                  backgroundColor: 'rgba(0, 194, 255, 0.12)',
                  color: '#00c2ff',
                  fontSize: '12px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                    {card.category}
                  </div>
                  <h4 style={{
                  color: 'var(--text-primary)',
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
                      color: 'var(--text-muted)',
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
                  Ready to be our next success story?
                </h3>
                <p style={{
                color: 'var(--text-muted)',
                fontSize: '16px',
                fontFamily: '"Barlow", sans-serif',
                lineHeight: '26px',
                margin: 0
              }}>
                  Let's create something extraordinary together.
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
