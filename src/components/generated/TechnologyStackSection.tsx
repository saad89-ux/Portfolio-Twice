"use client";
import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

/* ── 5 Core Technology Categories ── */
const categories = [
  {
    num: '01',
    title: 'Data & Analytics',
    desc: 'Advanced tracking, data collection, and real-time insights that power smarter decisions.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    bullets: ['Customer Analytics', 'Market Intelligence', 'Attribution Modeling', 'Predictive Insights'],
  },
  {
    num: '02',
    title: 'Advertising Platforms',
    desc: 'Multi-channel ad management and optimization across all major platforms.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    bullets: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Programmatic Platforms'],
  },
  {
    num: '03',
    title: 'Content & Creative Tech',
    desc: 'Cutting-edge tools for content creation, testing, and creative optimization.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    bullets: ['Creative Automation', 'A/B Testing Tools', 'Video Production Tech', 'Design Systems'],
  },
  {
    num: '04',
    title: 'Marketing Automation',
    desc: 'Streamlined automation for lead nurturing, email marketing, and customer journeys.',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80',
    bullets: ['CRM Platforms', 'Email Automation', 'Lead Scoring', 'Customer Journeys'],
  },
  {
    num: '05',
    title: 'AI & Machine Learning',
    desc: 'Proprietary AI models and machine learning tools that predict, optimize, and scale performance.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80',
    bullets: ['Predictive Analytics', 'AI Optimization', 'Smart Bidding', 'Natural Language AI'],
  },
];

/* ── 6 Workflow Steps ── */
const workflow = [
  { num: '01', title: 'Data Collection', p1: 'We gather data from multiple sources in real-time.', p2: 'Sources include websites, ads, CRM, social, and more.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80' },
  { num: '02', title: 'Data Processing', p1: 'Data is cleaned, structured, and processed through advanced algorithms.', p2: 'Ensuring accuracy and reliability.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80' },
  { num: '03', title: 'Insight Generation', p1: 'AI and analytics convert data into actionable insights.', p2: 'We identify opportunities your competitors miss.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80' },
  { num: '04', title: 'Strategy Execution', p1: 'We activate strategies across the right channels at the right time.', p2: 'Precision targeting. Maximum impact.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80' },
  { num: '05', title: 'Optimization Loop', p1: 'Continuous testing, learning, and optimization.', p2: 'Every action we take is data-driven.', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=300&q=80' },
  { num: '06', title: 'Growth & Scale', p1: 'Sustainable growth through technology, strategy, and relentless optimization.', p2: 'Your growth is our system.', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=300&q=80' },
];

/* ── Partners ── */
const partners = [
  ['Google Marketing Platform', 'Google Analytics 4', 'Google Ads', 'Display & Video 360', 'Search Console'],
  ['Meta Business Suite', 'Meta Ads Manager', 'Instagram for Business', 'WhatsApp Business', 'Audience Network'],
  ['HubSpot', 'Salesforce', 'ActiveCampaign', 'Pardot', 'Zoho CRM'],
  ['Shopify Plus', 'WooCommerce', 'BigCommerce', 'Magento', 'Custom Platforms'],
  ['SEMrush', 'Ahrefs', 'Moz Pro', 'Screaming Frog', 'SpyFu'],
  ['Klaviyo', 'Mailchimp', 'SendGrid', 'Google Tag Manager', 'Segment'],
];

/* ── Bottom Mini Charts ── */
const LineChartUp = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">
    <path d="M0 35 L20 30 L40 25 L60 15 L80 10 L100 5" fill="none" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="100" cy="5" r="3" fill="#03050a" stroke="#00c2ff" strokeWidth="2" />
  </svg>
);
const BarChart = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '40px', gap: '4px', width: '100%' }}>
    {[10,15,12,20,18,25,22,30,28,35,32,40].map((h, i) => (
      <div key={i} style={{ flex: 1, height: `${h}px`, backgroundColor: i === 11 ? '#00c2ff' : 'rgba(0,194,255,0.4)', borderRadius: '2px 2px 0 0' }} />
    ))}
  </div>
);
const SineChart = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">
    <path d="M0 20 Q 12.5 5, 25 20 T 50 20 T 75 20 T 100 20" fill="none" stroke="rgba(0,194,255,0.4)" strokeWidth="2" strokeLinecap="round" />
    <path d="M0 20 Q 12.5 35, 25 20 T 50 20 T 75 20 T 100 20" fill="none" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const LineChartDown = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">
    <path d="M0 5 L20 10 L40 15 L60 25 L80 30 L100 35" fill="none" stroke="#00c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="100" cy="35" r="3" fill="#03050a" stroke="#00c2ff" strokeWidth="2" />
  </svg>
);

export const TechnologyStackSection: React.FC = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#03050a',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    }}>

      {/* ═══════════════════════════════════════════
          BLOCK 1: Hero Left + Photo Right
      ═══════════════════════════════════════════ */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '1440px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', minHeight: '500px' }}>
          {/* LEFT: text */}
          <div style={{
            padding: '80px clamp(24px, 5vw, 60px) 60px 60px',
            boxSizing: 'border-box',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            position: 'relative', zIndex: 1,
          }}>
            <span style={{ color: '#00c2ff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: BarlowFont, marginBottom: '20px' }}>
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(32px, 4vw, 56px)', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.15, marginBottom: '24px', maxWidth: '500px' }}>
              The technology<br />
              behind every <span style={{ color: '#00c2ff' }}>growth</span><br />
              breakthrough.
            </h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '24px', fontFamily: BarlowFont, maxWidth: '420px', marginBottom: '48px' }}>
              We leverage industry-leading platforms, advanced analytics, and proprietary systems to deliver measurable growth at scale.
            </p>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { v: '300+', l: 'Integrated Platforms' },
                { v: '10M+', l: 'Data Points Analyzed Daily' },
                { v: '99.9%', l: 'System Uptime' },
                { v: '24/7', l: 'Performance Monitoring' }
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ color: '#00c2ff', fontSize: '24px', fontWeight: 800, fontFamily: InterFont }}>{s.v}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontFamily: BarlowFont, lineHeight: '15px' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: large photo bleeding to edge */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Data operations center"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) saturate(0.8)' }}
            />
            {/* Dark gradient fade into left side */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #03050a 0%, rgba(3,5,10,0.5) 40%, transparent 100%)' }} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCK 2: "Our Core Technology Categories"
      ═══════════════════════════════════════════ */}
      <div style={{ width: '100%', padding: '60px clamp(24px, 5vw, 60px)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#050816' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(24px, 3vw, 32px)', fontFamily: InterFont, fontWeight: 800 }}>
            Our Core Technology Categories
          </h3>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: BarlowFont }}>
            A tailored stack for every stage of your growth journey.
          </span>
        </div>

        <div style={{ width: '100%', maxWidth: '1440px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
          {categories.map((cat, i) => (
            <div key={i} className="ca-hover-popup" style={{
              backgroundColor: '#070a18', display: 'flex', flexDirection: 'column', cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}>
              {/* Top Image */}
              <div style={{ width: '100%', height: '160px', position: 'relative' }}>
                <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #070a18 0%, transparent 50%)' }} />
              </div>
              {/* Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(0,194,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,194,255,0.1)' }}>
                    <span style={{ color: '#00c2ff', fontSize: '12px', fontWeight: 700, fontFamily: InterFont }}>{cat.num}</span>
                  </div>
                  <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '14px', fontWeight: 700, fontFamily: InterFont, lineHeight: 1.2 }}>{cat.title}</h4>
                </div>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: BarlowFont, lineHeight: '18px' }}>{cat.desc}</p>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', margin: '4px 0' }} />
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {cat.bullets.map((b, bi) => (
                    <li key={bi} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: BarlowFont, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#00c2ff', fontSize: '10px' }}>•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCK 3: "Our Technology Workflow" — 6 horizontal steps
      ═══════════════════════════════════════════ */}
      <div style={{ width: '100%', padding: '60px clamp(24px, 5vw, 60px)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(24px, 3vw, 32px)', fontFamily: InterFont, fontWeight: 800 }}>
            Our Technology Workflow
          </h3>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: BarlowFont }}>
            How our systems work together to drive your growth.
          </span>
        </div>

        <div style={{ width: '100%', maxWidth: '1440px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
          {workflow.map((w, i) => (
            <div key={i} className="ca-hover-popup" style={{ display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'pointer' }}>
              {/* Top rounded box w/ image */}
              <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(0,194,255,0.15)', marginBottom: '24px' }}>
                <img src={w.img} alt={w.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,194,255,0.1), rgba(3,5,10,0.8))' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#00c2ff', borderRadius: '4px', padding: '2px 8px' }}>
                  <span style={{ color: '#03050a', fontSize: '12px', fontWeight: 800, fontFamily: InterFont }}>{w.num}</span>
                </div>
              </div>
              {/* Arrow connector (except last) */}
              {i < workflow.length - 1 && (
                <div style={{ position: 'absolute', top: '60px', right: '-12px', transform: 'translateY(-50%)', zIndex: 2 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c2ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
              {/* Text */}
              <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontSize: '13px', fontWeight: 700, fontFamily: InterFont }}>{w.title}</h4>
              <p style={{ margin: '0 0 8px 0', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontFamily: BarlowFont, lineHeight: '16px' }}>{w.p1}</p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: BarlowFont, lineHeight: '16px' }}>{w.p2}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCK 4: "Technology Partners & Integrations"
      ═══════════════════════════════════════════ */}
      <div style={{ width: '100%', padding: '60px clamp(24px, 5vw, 60px)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', backgroundColor: '#050816', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: 'clamp(20px, 2vw, 28px)', fontFamily: InterFont, fontWeight: 800 }}>
              Technology Partners & Integrations
            </h3>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: BarlowFont }}>
              We work with the best platforms in the industry.
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Left Image */}
            <div style={{ width: '100%', height: '200px', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Tech partners" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) saturate(0.5)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,194,255,0.1), transparent)' }} />
            </div>
            {/* Right Lists */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
                {partners.map((col, ci) => (
                  <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {col.map((item, ii) => (
                      <span key={ii} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontFamily: InterFont, fontWeight: 500, whiteSpace: 'nowrap' }}>{item}</span>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', textAlign: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: BarlowFont }}>... and 150+ more integrated platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCK 5: "Technology That Delivers Results" + Bottom 4 Cards
      ═══════════════════════════════════════════ */}
      <div style={{ width: '100%', padding: '60px clamp(24px, 5vw, 60px)', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1440px', width: '100%', display: 'grid', gridTemplateColumns: '1.2fr repeat(4, 1fr)', gap: '12px' }}>
          
          {/* Main Left Box */}
          <div style={{ backgroundColor: '#070a18', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ margin: '0 0 16px 0', color: 'var(--text-primary)', fontSize: '24px', fontFamily: InterFont, fontWeight: 800, lineHeight: 1.2 }}>
              Technology That<br />Delivers Results
            </h3>
            <p style={{ margin: '0 0 32px 0', color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: '20px', fontFamily: BarlowFont, maxWidth: '240px' }}>
              Our technology stack isn't just powerful - it's proven.
            </p>
            <button className="ca-hover-popup" style={{
              alignSelf: 'flex-start', backgroundColor: '#00c2ff', border: 'none', borderRadius: '100px',
              padding: '12px 24px', color: '#03050a', fontSize: '11px', fontWeight: 800, fontFamily: InterFont,
              letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer'
            }}>
              LET'S BUILD YOUR GROWTH ENGINE
            </button>
          </div>

          {/* Card 1: ROI Increase */}
          <div className="ca-hover-popup" style={{ backgroundColor: '#070a18', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, marginBottom: '8px' }}>ROI Increase</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800, fontFamily: InterFont, marginBottom: '24px' }}>347%</span>
            <LineChartUp />
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, lineHeight: '14px' }}>Average ROI increase across all clients</p>
            </div>
          </div>

          {/* Card 2: Campaign Efficiency */}
          <div className="ca-hover-popup" style={{ backgroundColor: '#070a18', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, marginBottom: '8px' }}>Campaign Efficiency</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800, fontFamily: InterFont, marginBottom: '24px' }}>2.8x</span>
            <BarChart />
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, lineHeight: '14px' }}>Higher efficiency through automation and AI</p>
            </div>
          </div>

          {/* Card 3: Data Accuracy */}
          <div className="ca-hover-popup" style={{ backgroundColor: '#070a18', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, marginBottom: '8px' }}>Data Accuracy</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800, fontFamily: InterFont, marginBottom: '24px' }}>99.6%</span>
            <SineChart />
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, lineHeight: '14px' }}>Data accuracy across all tracking systems</p>
            </div>
          </div>

          {/* Card 4: Time to Optimize */}
          <div className="ca-hover-popup" style={{ backgroundColor: '#070a18', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, marginBottom: '8px' }}>Time to Optimize</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800, fontFamily: InterFont, marginBottom: '24px' }}>-67%</span>
            <LineChartDown />
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: BarlowFont, lineHeight: '14px' }}>Faster optimization with real-time alerts</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
