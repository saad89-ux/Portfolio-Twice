import React from 'react';

/* ─── Types ─── */
interface CTAConfig {
  tagline: string;
  headline: string;
  highlightWord: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  badges: string[];
  topStats: { value: string; label: string }[];
  bottomStat: { value: string; label: string };
}

/* ─── Per-service CTA configs ─── */
const SERVICE_CTA_CONFIGS: Record<string, CTAConfig> = {
  'SEO & ORGANIC GROWTH': {
    tagline: "Let's achieve extraordinary together",
    headline: 'Ready to Dominate Search',
    highlightWord: 'Rankings?',
    description:
      'Partner with SEO experts who have driven millions in organic revenue. Let\'s build a search strategy that delivers sustainable, compounding growth.',
    primaryButton: 'Get Your SEO Audit',
    secondaryButton: 'See SEO Case Studies',
    badges: ['Data-Driven', 'White-Hat SEO', 'Expert Team', 'Transparent'],
    topStats: [
      { value: '500+', label: 'Keywords Ranked #1' },
      { value: '312%', label: 'Avg. Traffic Growth' },
    ],
    bottomStat: { value: '96%', label: 'Client Retention' },
  },
  'PERFORMANCE MARKETING': {
    tagline: 'Maximize every dollar you spend',
    headline: 'Ready to Maximize Your Ad',
    highlightWord: 'ROI?',
    description:
      'Partner with performance marketing experts who have managed $50M+ in ad spend. Let\'s build campaigns that scale profitably and predictably.',
    primaryButton: 'Launch Your Campaign',
    secondaryButton: 'See Paid Media Results',
    badges: ['ROAS Focused', 'Multi-Platform', 'A/B Tested', 'Scalable'],
    topStats: [
      { value: '8.4X', label: 'Average ROAS' },
      { value: '$50M+', label: 'Ad Spend Managed' },
    ],
    bottomStat: { value: '94%', label: 'Client Retention' },
  },
  'WEB DESIGN & DEVELOPMENT': {
    tagline: 'Build your digital foundation',
    headline: 'Ready for a Website That',
    highlightWord: 'Converts?',
    description:
      'Partner with designers and developers who build high-performance websites that turn visitors into customers. Let\'s create your competitive advantage.',
    primaryButton: 'Start Your Project',
    secondaryButton: 'View Our Portfolio',
    badges: ['Mobile-First', 'SEO-Ready', 'Fast Loading', 'Accessible'],
    topStats: [
      { value: '200+', label: 'Websites Launched' },
      { value: '3.2X', label: 'Avg. Conversion Lift' },
    ],
    bottomStat: { value: '99%', label: 'On-Time Delivery' },
  },
  'BRAND STRATEGY & IDENTITY': {
    tagline: 'Define what makes you unforgettable',
    headline: 'Ready to Build an Iconic',
    highlightWord: 'Brand?',
    description:
      'Partner with brand strategists who have transformed 150+ brands into market leaders. Let\'s craft an identity that resonates and endures.',
    primaryButton: 'Book a Brand Session',
    secondaryButton: 'See Brand Transformations',
    badges: ['Research-Led', 'Award-Winning', 'Full Identity', 'Scalable'],
    topStats: [
      { value: '150+', label: 'Brands Transformed' },
      { value: '40%', label: 'Avg. Recognition Lift' },
    ],
    bottomStat: { value: '98%', label: 'Client Satisfaction' },
  },
  'CONTENT MARKETING': {
    tagline: 'Turn content into your growth engine',
    headline: 'Ready to Scale Through',
    highlightWord: 'Content?',
    description:
      'Partner with content strategists who have driven 5M+ monthly readers for clients. Let\'s create content that attracts, engages, and converts your ideal audience.',
    primaryButton: 'Build Your Content Plan',
    secondaryButton: 'See Content Results',
    badges: ['SEO-Optimized', 'Multi-Format', 'Data-Backed', 'Consistent'],
    topStats: [
      { value: '5M+', label: 'Monthly Readers' },
      { value: '280%', label: 'Avg. Lead Growth' },
    ],
    bottomStat: { value: '95%', label: 'Client Retention' },
  },
  'MARKETING AUTOMATION & CRM': {
    tagline: 'Work smarter, convert faster',
    headline: 'Ready to Automate Your',
    highlightWord: 'Growth?',
    description:
      'Partner with automation experts who have built 500+ workflows and integrated 200+ tools. Let\'s streamline your marketing and accelerate your pipeline.',
    primaryButton: 'Automate Your Marketing',
    secondaryButton: 'See Automation Results',
    badges: ['HubSpot Certified', 'Custom Workflows', 'Full Integration', 'Scalable'],
    topStats: [
      { value: '500+', label: 'Workflows Built' },
      { value: '40%', label: 'Efficiency Gained' },
    ],
    bottomStat: { value: '97%', label: 'Client Retention' },
  },
};

const DEFAULT_SERVICE = 'SEO & ORGANIC GROWTH';

import { PageName } from './ServicedetailPage';

export const FinalCTASection: React.FC<{ serviceName?: string; onNavigate?: (page: PageName) => void }> = ({ serviceName, onNavigate }) => {
  const config = SERVICE_CTA_CONFIGS[serviceName || DEFAULT_SERVICE] || SERVICE_CTA_CONFIGS[DEFAULT_SERVICE];

  return (
      <>
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
        backgroundColor: 'var(--bg-card-alt)',
        borderRadius: '40px',
        border: '1px solid var(--border-light)',
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
              color: 'var(--brand-500-strong)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase'
            }}>
                {config.tagline}
              </span>
              <h2 style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(40px, 4vw, 62px)',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '24px 0 24px 0'
            }}>
                {config.headline} <span style={{ color: 'var(--brand-500-strong)' }}>{config.highlightWord}</span>
              </h2>
              <p style={{
              maxWidth: '560px',
              color: 'var(--text-muted)',
              fontSize: '16px',
              lineHeight: '28px',
              fontFamily: '"Barlow", sans-serif'
            }}>
                {config.description}
              </p>
            </div>
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
              <button onClick={() => onNavigate && onNavigate('Contact')} style={{
              minWidth: '220px',
              padding: '18px 28px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(90deg, var(--brand-500-strong), var(--brand-500-strong))',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease'
            }} onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 20px 40px var(--brand-500-strong)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }} onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
                {config.primaryButton}
              </button>
              <button onClick={() => onNavigate && onNavigate('Contact')} style={{
              minWidth: '220px',
              padding: '18px 28px',
              borderRadius: '999px',
              border: '1px solid var(--border-light-alt)',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease'
            }} onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--bg-card-light)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
                {config.secondaryButton}
              </button>
            </div>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '16px'
          }}>
              {config.badges.map((label, idx) => <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px',
                borderRadius: '24px',
                background: 'var(--bg-card-light)',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--brand-500-medium)',
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  <span style={{ color: 'var(--brand-500-strong)', fontSize: '18px', fontWeight: 700 }}>•</span>
                </div>
                <span style={{
                  color: 'var(--text-muted)',
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
          backgroundColor: 'var(--bg-secondary)'
        }}>
            <img className="ca-hover-popup" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Team in meeting" style={{
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
              {config.topStats.map(stat => <div key={stat.label} style={{
                minWidth: '180px',
                padding: '16px 20px',
                borderRadius: '24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  color: 'var(--accent-primary)',
                  fontSize: '22px',
                  fontWeight: 800,
                  marginBottom: '6px'
                }}>{stat.value}</div>
                <div style={{
                  color: 'var(--text-muted)',
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
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)'
          }}>
              <div style={{
                color: 'var(--brand-500-strong)',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '6px'
              }}>{config.bottomStat.value}</div>
              <div style={{
                color: 'var(--text-muted)',
                fontSize: '13px',
                lineHeight: '18px'
              }}>{config.bottomStat.label}</div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};
