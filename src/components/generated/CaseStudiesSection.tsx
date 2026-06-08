'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageName } from './ServicedetailPage';

interface CaseStudyStat {
  value: string;
  label: string;
}

interface CaseStudyResult {
  label: string;
}

interface CaseStudyFeatured {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  results: CaseStudyResult[];
}

interface CaseStudyCard {
  title: string;
  category: string;
  image: string;
  stats: string[];
}

interface CaseStudyServiceConfig {
  categories: string[];
  stats: CaseStudyStat[];
  featured: CaseStudyFeatured;
  cards: CaseStudyCard[];
}

const serviceConfigs: Record<string, CaseStudyServiceConfig> = {
  'SEO & ORGANIC GROWTH': {
    categories: ['All Case Studies', 'E-Commerce', 'SaaS', 'Healthcare', 'Real Estate', 'Finance'],
    stats: [{
      value: '2,400+',
      label: 'Keywords Ranked Page 1'
    }, {
      value: '85+',
      label: 'SEO Campaigns Delivered'
    }, {
      value: '3.2M+',
      label: 'Organic Visitors Generated'
    }, {
      value: '96%',
      label: 'Client Retention Rate'
    }],
    featured: {
      title: 'TechVault',
      category: 'E-Commerce',
      subtitle: 'Featured Case Study',
      description: 'We overhauled TechVault\'s entire SEO infrastructure — from technical audits and site architecture to keyword strategy and content optimization — resulting in explosive organic growth within 8 months.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      tags: ['Technical SEO', 'Content Strategy', 'Link Building', 'Keyword Research'],
      results: [{
        label: '+420% Organic Traffic Growth'
      }, {
        label: '1,200+ Keywords Ranked'
      }, {
        label: '68% Bounce Rate Reduction'
      }, {
        label: '5.1x Revenue from Organic'
      }]
    },
    cards: [{
      title: 'MediCare Plus',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
      stats: ['+310% Organic Patient Leads', '850+ Medical Keywords Ranked', '42% Lower Cost per Acquisition']
    }, {
      title: 'PropertyHub',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
      stats: ['+275% Local Search Visibility', '3.8x Listing Page Traffic', '620+ Location Keywords Ranked']
    }, {
      title: 'FinEdge',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      stats: ['+380% Organic Impressions', '4.2x Qualified Lead Growth', '92% Domain Authority Increase']
    }]
  },
  'PERFORMANCE MARKETING': {
    categories: ['All Case Studies', 'E-Commerce', 'Lead Gen', 'App Install', 'B2B', 'DTC'],
    stats: [{
      value: '$18M+',
      label: 'Ad Spend Managed'
    }, {
      value: '120+',
      label: 'Campaigns Launched'
    }, {
      value: '5.4x',
      label: 'Average ROAS'
    }, {
      value: '93%',
      label: 'Client Satisfaction'
    }],
    featured: {
      title: 'FreshCart',
      category: 'DTC',
      subtitle: 'Featured Case Study',
      description: 'We built and scaled FreshCart\'s full-funnel performance marketing engine across Google, Meta, and TikTok — driving record-breaking revenue through precision targeting and creative optimization.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
      tags: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Conversion Tracking'],
      results: [{
        label: '6.8x Return on Ad Spend'
      }, {
        label: '$2.1M Revenue Generated'
      }, {
        label: '54% Lower CPA'
      }, {
        label: '3.2M+ Impressions Served'
      }]
    },
    cards: [{
      title: 'CloudStack',
      category: 'B2B',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
      stats: ['+420% Qualified B2B Leads', '4.5x Pipeline Growth', '62% Lower Cost per Lead']
    }, {
      title: 'FitNow',
      category: 'App Install',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80',
      stats: ['180K+ App Installs', '$0.42 Cost per Install', '3.8x LTV to CAC Ratio']
    }, {
      title: 'LuxeHome',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
      stats: ['5.2x ROAS on Shopping Ads', '+340% Revenue Growth', '48% Improvement in CTR']
    }]
  },
  'WEB DESIGN & DEVELOPMENT': {
    categories: ['All Case Studies', 'E-Commerce', 'Corporate', 'SaaS', 'Portfolio', 'Landing Pages'],
    stats: [{
      value: '200+',
      label: 'Websites Launched'
    }, {
      value: '99.9%',
      label: 'Average Uptime'
    }, {
      value: '0.8s',
      label: 'Avg Load Time'
    }, {
      value: '97%',
      label: 'Client Approval Rate'
    }],
    featured: {
      title: 'Luxe Interiors',
      category: 'Corporate',
      subtitle: 'Featured Case Study',
      description: 'We redesigned Luxe Interiors\' digital presence from the ground up — crafting a stunning, conversion-optimized website with blazing-fast performance and an intuitive user experience.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      tags: ['UI/UX Design', 'React Development', 'Performance Optimization', 'CMS Integration'],
      results: [{
        label: '+185% Conversion Rate Lift'
      }, {
        label: '0.8s Average Load Time'
      }, {
        label: '62% Lower Bounce Rate'
      }, {
        label: '4.9/5 User Satisfaction'
      }]
    },
    cards: [{
      title: 'TechFlow SaaS',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      stats: ['+220% Free Trial Signups', '94 Lighthouse Performance Score', '38% Faster Onboarding Flow']
    }, {
      title: 'Artisan Collective',
      category: 'Portfolio',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1000&q=80',
      stats: ['+310% Portfolio Engagement', '2.4x Avg Session Duration', '85% Mobile Traffic Increase']
    }, {
      title: 'GreenLeaf',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
      stats: ['+175% E-Commerce Conversions', '1.2s Page Load Speed', '$840K Revenue in 6 Months']
    }]
  },
  'BRAND STRATEGY & IDENTITY': {
    categories: ['All Case Studies', 'Startups', 'Rebranding', 'Corporate', 'Lifestyle', 'Tech'],
    stats: [{
      value: '150+',
      label: 'Brands Transformed'
    }, {
      value: '40+',
      label: 'Industries Covered'
    }, {
      value: '92%',
      label: 'Brand Recall Improvement'
    }, {
      value: '98%',
      label: 'Client Satisfaction'
    }],
    featured: {
      title: 'Meridian Finance',
      category: 'Rebranding',
      subtitle: 'Featured Case Study',
      description: 'We led a complete brand transformation for Meridian Finance — redefining their visual identity, brand voice, and market positioning to build trust and stand out in a competitive financial landscape.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
      tags: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Market Positioning'],
      results: [{
        label: '+240% Brand Recognition'
      }, {
        label: '+65% Customer Trust Score'
      }, {
        label: '3.5x Social Media Growth'
      }, {
        label: '28% Higher Client Retention'
      }]
    },
    cards: [{
      title: 'NovaTech',
      category: 'Startups',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
      stats: ['+180% Investor Interest', 'Brand Identity from Scratch', '4.7/5 Market Perception Score']
    }, {
      title: 'PureWell',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80',
      stats: ['+320% Brand Awareness', '2.8x Social Engagement', '95% Packaging Approval Rate']
    }, {
      title: 'UrbanEdge',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      stats: ['+210% Employee Brand Affinity', '3.1x Website Brand Recall', '78% Stakeholder Approval']
    }]
  },
  'CONTENT MARKETING': {
    categories: ['All Case Studies', 'B2B', 'Healthcare', 'Tech', 'E-Commerce', 'Education'],
    stats: [{
      value: '5,000+',
      label: 'Content Pieces Published'
    }, {
      value: '12M+',
      label: 'Total Content Views'
    }, {
      value: '380%',
      label: 'Avg Traffic Increase'
    }, {
      value: '94%',
      label: 'Client Retention Rate'
    }],
    featured: {
      title: 'HealthSync',
      category: 'Healthcare',
      subtitle: 'Featured Case Study',
      description: 'We designed and executed a content-led growth strategy for HealthSync — combining thought leadership articles, SEO-optimized guides, and video content to dominate their healthcare niche.',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
      tags: ['Content Strategy', 'SEO Content', 'Video Marketing', 'Thought Leadership'],
      results: [{
        label: '+380% Organic Traffic Growth'
      }, {
        label: '+520% Content Engagement'
      }, {
        label: '1,800+ Backlinks Earned'
      }, {
        label: '4.2x Lead Generation Lift'
      }]
    },
    cards: [{
      title: 'EduVerse',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
      stats: ['+450% Blog Traffic Growth', '3.6x Course Enrollment Increase', '2,200+ Email Subscribers Added']
    }, {
      title: 'CloudNine',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1000&q=80',
      stats: ['+290% Developer Blog Reads', '5.1x Whitepaper Downloads', '82% MQL to SQL Conversion']
    }, {
      title: 'ShopSmart',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1000&q=80',
      stats: ['+360% Product Guide Views', '2.9x Affiliate Revenue', '74% Increase in Avg Order Value']
    }]
  },
  'MARKETING AUTOMATION & CRM': {
    categories: ['All Case Studies', 'SaaS', 'E-Commerce', 'B2B', 'Healthcare', 'Finance'],
    stats: [{
      value: '85+',
      label: 'Automation Workflows Built'
    }, {
      value: '2.4M+',
      label: 'Emails Automated Monthly'
    }, {
      value: '340%',
      label: 'Avg Conversion Lift'
    }, {
      value: '91%',
      label: 'Process Efficiency Gain'
    }],
    featured: {
      title: 'ScaleUp SaaS',
      category: 'SaaS',
      subtitle: 'Featured Case Study',
      description: 'We architected a full marketing automation and CRM ecosystem for ScaleUp SaaS — integrating HubSpot, custom workflows, and AI-powered lead scoring to transform their sales pipeline.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
      tags: ['CRM Setup', 'Email Automation', 'Lead Scoring', 'Pipeline Optimization'],
      results: [{
        label: '+340% Conversion Rate Lift'
      }, {
        label: '-67% Response Time Reduced'
      }, {
        label: '4.8x Pipeline Velocity'
      }, {
        label: '92% Lead Qualification Accuracy'
      }]
    },
    cards: [{
      title: 'MedFlow',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80',
      stats: ['+280% Patient Follow-up Rate', '85% Reduction in Manual Tasks', '3.4x Appointment Booking Rate']
    }, {
      title: 'RetailPro',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1000&q=80',
      stats: ['+410% Email Revenue', '68% Cart Abandonment Recovery', '2.9x Customer Lifetime Value']
    }, {
      title: 'FinServe',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=1000&q=80',
      stats: ['+320% Lead Nurture Conversion', '-72% Manual Data Entry', '4.1x Advisor Productivity']
    }]
  }
};

const defaultServiceName = 'SEO & ORGANIC GROWTH';

interface CaseStudiesSectionProps {
  serviceName?: string;
  
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ serviceName }) => {
  const router = useRouter();
  const config = serviceConfigs[serviceName || ''] || serviceConfigs[defaultServiceName];
  const caseStudyCategories = config.categories;
  const caseStudyStats = config.stats;
  const caseStudyFeatured = config.featured;
  const caseStudyCards = config.cards;
  const [activeCaseStudyCategory, setActiveCaseStudyCategory] = useState(caseStudyCategories[0]);

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
              color: 'var(--brand-500-strong)',
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
            backgroundColor: activeCaseStudyCategory === category ? 'var(--brand-500)' : 'var(--bg-card-light)',
            color: activeCaseStudyCategory === category ? 'var(--text-primary)' : 'var(--text-secondary)',
            border: activeCaseStudyCategory === category ? '1px solid var(--brand-500)' : '1px solid var(--border-light)',
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
                  backgroundColor: 'var(--brand-500-soft)',
                  borderRadius: '999px',
                  width: 'fit-content',
                  color: 'var(--brand-500)',
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
                    backgroundColor: 'var(--bg-card-light)',
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
                    backgroundColor: 'var(--bg-card-light)',
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
                      color: 'var(--brand-500)',
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
                          backgroundColor: 'var(--bg-card-light)',
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
                    <button onClick={() => router.push('/contact')} style={{
                    width: '100%',
                    padding: '18px 24px',
                    borderRadius: '18px',
                    border: 'none',
                    backgroundColor: 'var(--brand-500)',
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
                backgroundColor: 'var(--bg-card-light)',
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
                  backgroundColor: 'var(--brand-500-soft)',
                  color: 'var(--brand-500)',
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
        background: 'var(--bg-card)',
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
            <button onClick={() => router.push('/contact')} style={{
            minWidth: '220px',
            padding: '16px 24px',
            borderRadius: '18px',
            backgroundColor: 'var(--brand-500)',
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
