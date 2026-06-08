'use client';

import React from 'react';

const Barlow = '"Barlow", sans-serif';
const Inter = '"Inter", sans-serif';

const COLORS = {
  blue: 'var(--brand-600)',
  purple: 'var(--brand-400)',
  cyan: 'var(--brand-500)',
  blueBright: 'var(--brand-600)',
  blueSoft: 'var(--brand-600)',
  bgDark: 'var(--bg-secondary)',
  bgDarkDeep: 'var(--bg-primary)',
  surface: 'var(--bg-card-alt)',
  surfaceAlt: 'var(--bg-card)',
  cardDark: 'var(--bg-card-light)',
  white: 'var(--text-primary)',
  actualWhite: 'var(--bg-card)',
  textMuted: 'var(--text-muted)',
  textSoft: 'var(--text-secondary)',
  textDark: 'var(--text-primary)',
  textGrey: 'var(--text-muted)',
  lightBg: 'var(--bg-primary)',
  lightCard: 'var(--bg-card)',
};

// ── Reusable SVG icons ──
const ICONS = {
  target: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  pen: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  megaphone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11 6v12" />
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  trendUp: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

// ── Process step images (shared across services) ──
const STEP_IMAGES = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
];

const STEP_ICONS = [ICONS.target, ICONS.megaphone, ICONS.chart, ICONS.layers, ICONS.trendUp, ICONS.users];
const NODE_ICONS_LEFT = [ICONS.target, ICONS.pen, ICONS.layers];
const NODE_ICONS_RIGHT = [ICONS.megaphone, ICONS.chart, ICONS.trendUp];
const NODE_ANGLES_LEFT = [-55, 0, 55] as const;
const NODE_ANGLES_RIGHT = [-55, 0, 55] as const;

// ── Per-service config ──
interface ServiceEcosystemConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  hubLabel: string;
  hubSubLabel: string;
  processTitle: string;
  ecosystemLeft: { title: string; desc: string }[];
  ecosystemRight: { title: string; desc: string }[];
  processSteps: { title: string; desc: string }[];
}

const serviceEcosystemConfig: Record<string, ServiceEcosystemConfig> = {
  'SEO & ORGANIC GROWTH': {
    sectionTitle: 'A Connected Ecosystem That Drives Organic Growth',
    sectionSubtitle:
      'Every SEO discipline works together as one integrated system — keyword research, on-page optimization, technical foundations, link building, content strategy, and analytics all connected to put your organic visibility at the center of sustainable growth.',
    hubLabel: 'Organic Growth',
    hubSubLabel: 'Visibility at the Center.',
    processTitle: 'How Our SEO Process Works Together',
    ecosystemLeft: [
      { title: 'KEYWORD RESEARCH', desc: 'Uncover high-intent search terms that align with your audience and business goals.' },
      { title: 'ON-PAGE SEO', desc: 'Optimize every page element — titles, meta tags, content, and structure for maximum relevance.' },
      { title: 'TECHNICAL SEO', desc: 'Ensure your site is fast, crawlable, and technically sound for search engine success.' },
    ],
    ecosystemRight: [
      { title: 'LINK BUILDING', desc: 'Earn authoritative backlinks that boost domain authority and search rankings.' },
      { title: 'CONTENT STRATEGY', desc: 'Plan and create content that ranks, resonates, and drives organic traffic.' },
      { title: 'ANALYTICS & REPORTING', desc: 'Track rankings, traffic, and conversions to continuously refine your SEO strategy.' },
    ],
    processSteps: [
      { title: 'Audit', desc: 'We audit your current SEO landscape and identify opportunities.' },
      { title: 'Research', desc: 'We research keywords, competitors, and market gaps.' },
      { title: 'Optimize', desc: 'We optimize on-page elements and technical foundations.' },
      { title: 'Build', desc: 'We build high-quality backlinks and domain authority.' },
      { title: 'Create', desc: 'We create SEO-driven content that ranks and converts.' },
      { title: 'Measure', desc: 'We measure results and iterate for continuous improvement.' },
    ],
  },
  'PERFORMANCE MARKETING': {
    sectionTitle: 'A Connected Ecosystem That Maximizes ROI',
    sectionSubtitle:
      'Every campaign element works together as one integrated system — strategy, targeting, creative, bid management, conversion tracking, and analysis all connected to put your performance goals at the center of scalable growth.',
    hubLabel: 'Peak Performance',
    hubSubLabel: 'ROI at the Center.',
    processTitle: 'How Our Performance Process Works Together',
    ecosystemLeft: [
      { title: 'CAMPAIGN STRATEGY', desc: 'Design data-driven campaign frameworks aligned with your KPIs and growth targets.' },
      { title: 'AUDIENCE TARGETING', desc: 'Identify and segment high-value audiences across platforms for precision reach.' },
      { title: 'AD CREATIVE', desc: 'Craft compelling ad creative that stops the scroll and drives action.' },
    ],
    ecosystemRight: [
      { title: 'BID MANAGEMENT', desc: 'Optimize bidding strategies in real time to maximize budget efficiency.' },
      { title: 'CONVERSION TRACKING', desc: 'Implement end-to-end tracking to measure every touchpoint in the funnel.' },
      { title: 'PERFORMANCE ANALYSIS', desc: 'Analyze campaign data to uncover insights and scale winning strategies.' },
    ],
    processSteps: [
      { title: 'Strategize', desc: 'We define campaign goals, budgets, and channel mix.' },
      { title: 'Target', desc: 'We build precise audience segments for maximum impact.' },
      { title: 'Launch', desc: 'We launch campaigns across channels with optimized creative.' },
      { title: 'Optimize', desc: 'We optimize bids, placements, and creative in real time.' },
      { title: 'Scale', desc: 'We scale winning campaigns to maximize return on ad spend.' },
      { title: 'Report', desc: 'We deliver transparent reports with actionable insights.' },
    ],
  },
  'WEB DESIGN & DEVELOPMENT': {
    sectionTitle: 'A Connected Ecosystem That Builds Digital Experiences',
    sectionSubtitle:
      'Every development discipline works together as one integrated system — UX research, visual design, frontend, backend, CMS integration, and QA all connected to put your users at the center of exceptional digital experiences.',
    hubLabel: 'Digital Experience',
    hubSubLabel: 'Users at the Center.',
    processTitle: 'How Our Development Process Works Together',
    ecosystemLeft: [
      { title: 'UX RESEARCH', desc: 'Understand user behaviors, needs, and pain points to inform design decisions.' },
      { title: 'VISUAL DESIGN', desc: 'Create stunning, on-brand visual interfaces that engage and delight users.' },
      { title: 'FRONTEND DEV', desc: 'Build responsive, performant interfaces with modern frameworks and best practices.' },
    ],
    ecosystemRight: [
      { title: 'BACKEND DEV', desc: 'Architect robust server-side systems that scale with your business needs.' },
      { title: 'CMS INTEGRATION', desc: 'Integrate flexible content management systems for easy ongoing updates.' },
      { title: 'QA & TESTING', desc: 'Ensure flawless functionality across devices, browsers, and use cases.' },
    ],
    processSteps: [
      { title: 'Discover', desc: 'We discover your goals, users, and technical requirements.' },
      { title: 'Wireframe', desc: 'We wireframe user flows and page structures for clarity.' },
      { title: 'Design', desc: 'We design pixel-perfect interfaces aligned with your brand.' },
      { title: 'Develop', desc: 'We develop clean, scalable code across the full stack.' },
      { title: 'Test', desc: 'We test rigorously for quality, performance, and accessibility.' },
      { title: 'Launch', desc: 'We launch with confidence and provide ongoing support.' },
    ],
  },
  'BRAND STRATEGY & IDENTITY': {
    sectionTitle: 'A Connected Ecosystem That Shapes Brand Perception',
    sectionSubtitle:
      'Every brand element works together as one integrated system — market research, positioning, visual identity, messaging, guidelines, and activation all connected to put your brand story at the center of lasting market impact.',
    hubLabel: 'Brand Power',
    hubSubLabel: 'Identity at the Center.',
    processTitle: 'How Our Branding Process Works Together',
    ecosystemLeft: [
      { title: 'MARKET RESEARCH', desc: 'Analyze market dynamics, competitors, and audience perceptions to find your edge.' },
      { title: 'BRAND POSITIONING', desc: 'Define a clear, differentiated position that resonates with your target audience.' },
      { title: 'VISUAL IDENTITY', desc: 'Design a cohesive visual system — logo, color, typography — that embodies your brand.' },
    ],
    ecosystemRight: [
      { title: 'MESSAGING', desc: 'Craft compelling brand narratives, taglines, and voice that connect emotionally.' },
      { title: 'BRAND GUIDELINES', desc: 'Document comprehensive standards to ensure brand consistency across all touchpoints.' },
      { title: 'BRAND ACTIVATION', desc: 'Bring your brand to life across channels with strategic launch campaigns.' },
    ],
    processSteps: [
      { title: 'Research', desc: 'We research your market, audience, and competitive landscape.' },
      { title: 'Define', desc: 'We define your brand positioning and core value proposition.' },
      { title: 'Create', desc: 'We create your visual identity and messaging framework.' },
      { title: 'Document', desc: 'We document brand guidelines for consistent application.' },
      { title: 'Implement', desc: 'We implement your brand across all customer touchpoints.' },
      { title: 'Evolve', desc: 'We evolve your brand as your business and market grows.' },
    ],
  },
  'CONTENT MARKETING': {
    sectionTitle: 'A Connected Ecosystem That Fuels Content Impact',
    sectionSubtitle:
      'Every content discipline works together as one integrated system — strategy, editorial planning, creation, SEO integration, distribution, and analytics all connected to put your audience engagement at the center of measurable growth.',
    hubLabel: 'Content Engine',
    hubSubLabel: 'Engagement at the Center.',
    processTitle: 'How Our Content Process Works Together',
    ecosystemLeft: [
      { title: 'CONTENT STRATEGY', desc: 'Develop a strategic content roadmap aligned with business goals and audience needs.' },
      { title: 'EDITORIAL PLANNING', desc: 'Plan editorial calendars, themes, and workflows for consistent content delivery.' },
      { title: 'CONTENT CREATION', desc: 'Produce high-quality articles, videos, and assets that educate and inspire.' },
    ],
    ecosystemRight: [
      { title: 'SEO INTEGRATION', desc: 'Weave SEO best practices into every piece of content for maximum discoverability.' },
      { title: 'DISTRIBUTION', desc: 'Distribute content across owned, earned, and paid channels for maximum reach.' },
      { title: 'PERFORMANCE ANALYTICS', desc: 'Measure content performance and optimize for engagement and conversions.' },
    ],
    processSteps: [
      { title: 'Plan', desc: 'We plan content themes, formats, and editorial calendars.' },
      { title: 'Create', desc: 'We create compelling content tailored to your audience.' },
      { title: 'Optimize', desc: 'We optimize every piece for search and engagement.' },
      { title: 'Publish', desc: 'We publish content on the right platforms at the right time.' },
      { title: 'Distribute', desc: 'We distribute across channels to amplify reach and impact.' },
      { title: 'Analyze', desc: 'We analyze performance data to refine and improve.' },
    ],
  },
  'MARKETING AUTOMATION & CRM': {
    sectionTitle: 'A Connected Ecosystem That Automates Growth',
    sectionSubtitle:
      'Every automation element works together as one integrated system — CRM setup, workflow design, lead scoring, email automation, pipeline management, and reporting all connected to put your customer relationships at the center of scalable growth.',
    hubLabel: 'Smart Automation',
    hubSubLabel: 'Relationships at the Center.',
    processTitle: 'How Our Automation Process Works Together',
    ecosystemLeft: [
      { title: 'CRM SETUP', desc: 'Configure and customize your CRM platform to match your sales and marketing processes.' },
      { title: 'WORKFLOW DESIGN', desc: 'Design intelligent automation workflows that nurture leads through every stage.' },
      { title: 'LEAD SCORING', desc: 'Implement scoring models that prioritize leads based on engagement and fit.' },
    ],
    ecosystemRight: [
      { title: 'EMAIL AUTOMATION', desc: 'Build targeted email sequences that deliver the right message at the right time.' },
      { title: 'PIPELINE MANAGEMENT', desc: 'Optimize your sales pipeline with automated tracking and stage management.' },
      { title: 'REPORTING & INSIGHTS', desc: 'Generate actionable reports that reveal funnel performance and growth opportunities.' },
    ],
    processSteps: [
      { title: 'Assess', desc: 'We assess your current systems, data, and automation needs.' },
      { title: 'Configure', desc: 'We configure your CRM and automation platform foundations.' },
      { title: 'Automate', desc: 'We build automated workflows for lead nurturing and engagement.' },
      { title: 'Nurture', desc: 'We design nurture sequences that move leads through the funnel.' },
      { title: 'Convert', desc: 'We optimize conversion points to turn leads into customers.' },
      { title: 'Optimize', desc: 'We continuously optimize based on performance data and insights.' },
    ],
  },
};

const DEFAULT_SERVICE = 'SEO & ORGANIC GROWTH';

type EcosystemNodeProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  align: 'left' | 'right';
};

const EcosystemNode = ({ title, desc, icon, align }: EcosystemNodeProps) => (
  <div
    className="ecosystem-node-card"
    style={{
      display: 'flex',
      flexDirection: align === 'left' ? 'row' : 'row-reverse',
      alignItems: 'flex-start',
      gap: '14px',
      maxWidth: '300px',
      textAlign: align === 'left' ? 'left' : 'right',
    }}
  >
    <div
      style={{
        width: '48px',
        height: '48px',
        minWidth: '48px',
        borderRadius: '12px',
        backgroundColor: COLORS.cardDark,
        border: `1px solid var(--brand-600-medium)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.blueSoft,
      }}
    >
      {icon}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <h4
        style={{
          margin: '0 0 6px',
          color: COLORS.white,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          fontFamily: Barlow,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h4>
      <p
        style={{
          margin: 0,
          color: COLORS.textMuted,
          fontSize: '13px',
          lineHeight: '20px',
          fontFamily: Barlow,
        }}
      >
        {desc}
      </p>
    </div>
  </div>
);

interface ServiceDetailEcosystemSectionProps {
  serviceName?: string;
}

export const ServiceDetailEcosystemSection: React.FC<ServiceDetailEcosystemSectionProps> = ({ serviceName }) => {
  const config = serviceEcosystemConfig[serviceName || ''] || serviceEcosystemConfig[DEFAULT_SERVICE];

  const ecosystemLeft = config.ecosystemLeft.map((node, i) => ({
    ...node,
    icon: NODE_ICONS_LEFT[i],
    angle: NODE_ANGLES_LEFT[i],
  }));

  const ecosystemRight = config.ecosystemRight.map((node, i) => ({
    ...node,
    icon: NODE_ICONS_RIGHT[i],
    angle: NODE_ANGLES_RIGHT[i],
  }));

  const processSteps = config.processSteps.map((step, i) => ({
    ...step,
    image: STEP_IMAGES[i],
    icon: STEP_ICONS[i],
  }));
  const hubSize = 260;
  const orbitR1 = 118;
  const orbitR2 = 158;

  return (
    <>
      <style>{`
        .service-ecosystem-grid {
          display: grid;
          grid-template-columns: minmax(200px, 1fr) minmax(280px, 340px) minmax(200px, 1fr);
          gap: clamp(16px, 3vw, 40px);
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .service-ecosystem-side {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 48px;
          min-height: 520px;
        }
        .service-ecosystem-side-right { align-items: flex-end; }
        .service-ecosystem-side-left { align-items: flex-start; }
        .service-ecosystem-hub-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 340px;
          margin: 0 auto;
        }
        .service-process-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 1100px) {
          .service-process-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 960px) {
          .service-ecosystem-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .service-ecosystem-side {
            min-height: auto;
            gap: 28px;
          }
          .service-ecosystem-side-right { align-items: flex-start; }
          .service-ecosystem-hub-wrap { order: -1; max-width: 280px; }
        }
        @media (max-width: 640px) {
          .service-process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 480px) {
          .service-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* —— SERVICE ECOSYSTEM (dark) —— */}
      <section
        className="service-ecosystem-dark"
        style={{
          width: '100%',
          padding: '100px clamp(24px, 5vw, 86px) 80px',
          background: `linear-gradient(180deg, ${COLORS.bgDarkDeep} 0%, ${COLORS.bgDark} 45%, ${COLORS.surface} 100%)`,
          boxSizing: 'border-box',
          borderTop: '1px solid var(--brand-600-soft)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span
              style={{
                display: 'inline-block',
                color: COLORS.blue,
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                fontFamily: Barlow,
                marginBottom: '20px',
              }}
            >
              SERVICE ECOSYSTEM
            </span>
            <h2
              style={{
                margin: '0 0 18px',
                color: COLORS.white,
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                fontFamily: Inter,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
              }}
            >
              A Connected Ecosystem That Drives Growth
            </h2>
            <p
              style={{
                margin: '0 auto',
                maxWidth: '640px',
                color: COLORS.textMuted,
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: Barlow,
              }}
            >
              Every service works together as one integrated system — strategy, content, technology, marketing,
              data, and optimization all connected to put your business at the center of sustainable growth.
            </p>
          </div>

          <div className="service-ecosystem-grid">
            <div className="service-ecosystem-side service-ecosystem-side-left">
              {ecosystemLeft.map((node) => (
                <EcosystemNode key={node.title} {...node} align="left" />
              ))}
            </div>

            <div className="service-ecosystem-hub-wrap">
              <svg
                viewBox="0 0 340 340"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
                aria-hidden
              >
                <defs>
                  <filter id="ecosystemDotGlow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle cx="170" cy="170" r={orbitR2} fill="none" stroke="var(--brand-600-soft)" strokeWidth="1" strokeDasharray="4 7" />
                <circle cx="170" cy="170" r={orbitR1} fill="none" stroke="rgba(145, 104, 255, 0.2)" strokeWidth="1" strokeDasharray="3 6" />
                {[
                  { x: 52, y: 95, side: 'left' },
                  { x: 52, y: 170, side: 'left' },
                  { x: 52, y: 245, side: 'left' },
                  { x: 288, y: 95, side: 'right' },
                  { x: 288, y: 170, side: 'right' },
                  { x: 288, y: 245, side: 'right' },
                ].map((dot, i) => (
                  <g key={`orbit-dot-${i}`}>
                    <line
                      x1={dot.side === 'left' ? 0 : 340}
                      y1={dot.y}
                      x2={dot.x}
                      y2={dot.y}
                      stroke={dot.side === 'left' ? 'var(--brand-600-strong)' : 'rgba(145, 104, 255, 0.28)'}
                      strokeWidth="1"
                      strokeDasharray="4 5"
                    />
                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="5"
                      fill={dot.side === 'left' ? COLORS.blue : COLORS.purple}
                      filter="url(#ecosystemDotGlow)"
                    />
                  </g>
                ))}
              </svg>

              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  width: hubSize,
                  height: hubSize,
                  maxWidth: '76%',
                  maxHeight: '76%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    padding: '4px',
                    background: `linear-gradient(135deg, ${COLORS.blue} 0%, ${COLORS.purple} 50%, ${COLORS.cyan} 100%)`,
                    boxShadow: `0 0 60px var(--brand-600-strong), 0 0 40px rgba(145, 104, 255, 0.2)`,
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: `radial-gradient(circle at 30% 30%, ${COLORS.surfaceAlt} 0%, ${COLORS.bgDark} 70%)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '24px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: COLORS.white,
                        fontSize: 'clamp(22px, 2.5vw, 28px)',
                        fontWeight: 800,
                        fontFamily: Inter,
                        lineHeight: 1.15,
                      }}
                    >
                      Your Business
                    </h3>
                    <p
                      style={{
                        margin: '10px 0 0',
                        color: COLORS.textSoft,
                        fontSize: '14px',
                        fontFamily: Barlow,
                        lineHeight: 1.4,
                      }}
                    >
                      Growth at the Center.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-ecosystem-side service-ecosystem-side-right">
              {ecosystemRight.map((node) => (
                <EcosystemNode key={node.title} {...node} align="right" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —— How Everything Works Together (light) —— */}
      <section
        className="service-ecosystem-light"
        style={{
          width: '100%',
          padding: '88px clamp(24px, 5vw, 86px) 100px',
          backgroundColor: COLORS.lightBg,
          boxSizing: 'border-box',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            margin: '0 0 48px',
            color: COLORS.textDark,
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 800,
            fontFamily: Inter,
            letterSpacing: '-0.02em',
          }}
        >
          How Everything Works Together
        </h2>

        <div className="service-process-grid">
          {processSteps.map((step) => (
            <article
              key={step.title}
              style={{
                backgroundColor: COLORS.lightCard,
                borderRadius: '16px',
                overflow: 'visible',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                border: '1px solid var(--brand-600-soft)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '140px',
                  borderRadius: '16px 16px 0 0',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={step.image}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.actualWhite,
                  border: `2px solid ${COLORS.purple}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.purple,
                  marginTop: '-26px',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 4px 16px rgba(145, 104, 255, 0.15)',
                }}
              >
                {step.icon}
              </div>

              <div style={{ padding: '20px 16px 24px', width: '100%', boxSizing: 'border-box' }}>
                <h3
                  style={{
                    margin: '0 0 10px',
                    color: COLORS.textDark,
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: Inter,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: COLORS.textGrey,
                    fontSize: '13px',
                    lineHeight: '22px',
                    fontFamily: Barlow,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
