"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { articles } from '../../data/articles';

export const CaseStudyArticles: React.FC = () => {
  const router = useRouter();
  const stats = [
    { label: 'Case Studies', value: '250+' },
    { label: 'Client Success Rate', value: '98%' },
    { label: 'Industries Served', value: '35+' },
    { label: 'Revenue Generated', value: '$50M+' }
  ];

  const featured = {
    slug: 'ecohome-scaled-revenue',
    category: 'E-COMMERCE',
    title: 'How We Scaled EcoHome Supplies to $2.4M in Revenue in Just 8 Months',
    description: 'A full-funnel growth strategy combining SEO, performance marketing, and CRO that transformed their online store into a revenue-generating machine.',
    authorship: 'By Sarah Johnson · May 12, 2025 · 8 min read',
    cta: 'View Full Case Study',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: '320% Organic Traffic', accent: 'var(--brand-400)' },
      { label: '8.6x ROAS', accent: 'var(--brand-400)' },
      { label: '$2.4M Revenue Generated', accent: 'var(--brand-400)' }
    ]
  };

  const caseStudyCards = [
    {
      slug: 'technova-qualified-leads',
      category: 'B2B SAAS',
      title: 'How TechNova Increased Qualified Leads by 185%',
      description: 'A data-driven SEO and content strategy that positioned TechNova as an industry leader and lead generation engine.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    },
    {
      slug: 'healthplus-appointments',
      category: 'HEALTHCARE',
      title: 'Scaling HealthPlus Appointments by 2.8x',
      description: 'A local SEO and paid ads strategy that increased appointment bookings while reducing cost per acquisition.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const trusted = ['EcoHome', 'TechNova', 'HealthPlus', 'UrbanTrend', 'FinEdge'];

  return (
    <section style={{
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '100px clamp(24px, 4vw, 80px) 120px',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at top left, var(--brand-400-medium), transparent 20%), radial-gradient(circle at bottom right, var(--brand-400-soft), transparent 18%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', textAlign: 'center' }}>
        <span style={{
          color: 'var(--brand-400)',
          fontSize: '12px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          fontWeight: 700,
          backgroundColor: 'var(--brand-400-soft)',
          padding: '10px 20px',
          borderRadius: '999px',
          border: '1px solid var(--brand-400-medium)'
        }}>
          Our Impact
        </span>
        <h2 style={{
          color: 'var(--text-primary)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(42px, 4.8vw, 66px)',
          lineHeight: 1.05,
          margin: 0
        }}>
          Case Studies That <span style={{ color: 'var(--brand-400)' }}>Speak for Themselves.</span>
        </h2>
        <p style={{
          maxWidth: '760px',
          color: 'var(--text-muted)',
          fontSize: '16px',
          lineHeight: '1.8',
          fontFamily: '"Barlow", sans-serif',
          margin: 0
        }}>
          Real challenges. Smart strategies. Measurable results. Explore how we drive growth across industries with work that delivers measurable impact.
        </p>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '20px',
        marginTop: '40px'
      }}>
        {stats.map(stat => (
          <div key={stat.label} style={{
            borderRadius: '28px',
            padding: '28px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            minHeight: '150px'
          }}>
            <span style={{
              color: 'var(--text-primary)',
              fontSize: '34px',
              fontWeight: 800,
              fontFamily: '"Inter", sans-serif'
            }}>{stat.value}</span>
            <span style={{
              color: 'var(--text-muted)',
              fontSize: '14px',
              lineHeight: '1.7',
              fontFamily: '"Barlow", sans-serif'
            }}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '2.2fr 1fr',
        gap: '24px',
        marginTop: '44px'
      }}>
        <article style={{
          position: 'relative',
          borderRadius: '36px',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          minHeight: '560px',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer'
        }}
        role="link"
        tabIndex={0}
        onClick={() => router.push(`/blog/${articles.find(a => a.slug === featured.slug)?.slug ?? featured.slug}`)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            router.push(`/blog/${articles.find(a => a.slug === featured.slug)?.slug ?? featured.slug}`);
          }
        }}>
          <div style={{ position: 'relative', minHeight: '320px', overflow: 'hidden' }}>
              <a href={`/blog/${articles.find(a => a.slug === featured.slug)?.slug ?? featured.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} aria-label={`Read ${featured.title}`}>
              <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
            </a>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10, 14, 34, 0.12), rgba(8, 11, 24, 0.92))' }} />
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              borderRadius: '999px',
              backgroundColor: 'var(--brand-400-soft)',
              color: 'var(--brand-400)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase'
            }}>
              Featured Case Study
            </div>
            <div style={{
              position: 'absolute',
              right: '24px',
              top: '32px',
              display: 'grid',
              gap: '16px'
            }}>
              {featured.metrics.map((metric, idx) => (
                <div key={idx} style={{
                  minWidth: '160px',
                  padding: '16px 18px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(15, 23, 42, 0.82)',
                  border: `1px solid ${metric.accent}`
                }}>
                  <span style={{ color: metric.accent, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Key Metric</span>
                  <p style={{ margin: '8px 0 0', color: 'white', fontSize: '18px', fontWeight: 800, lineHeight: 1.2 }}>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderRadius: '999px', backgroundColor: 'var(--brand-400-soft)', color: 'var(--brand-400)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {featured.category}
            </div>
              <a href={`/blog/${articles.find(a => a.slug === featured.slug)?.slug ?? featured.slug}`} style={{ textDecoration: 'none' }} aria-label={`Read ${featured.title}`}>
              <h3 style={{ color: 'var(--text-primary)', fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: 'clamp(30px, 3vw, 42px)', lineHeight: 1.05, margin: 0 }}>
                {featured.title}
              </h3>
            </a>
            <p style={{ color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontSize: '16px', lineHeight: '1.85', margin: 0, maxWidth: '720px' }}>
              {featured.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <a href={`/blog/${articles.find(a => a.slug === featured.slug)?.slug ?? featured.slug}`} style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '14px 24px',
                  borderRadius: '999px',
                  border: '1px solid var(--brand-400-strong)',
                  backgroundColor: 'var(--brand-400-medium)',
                  color: 'var(--brand-400)',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}>
                  {featured.cta}
                </button>
              </a>
              <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{featured.authorship}</span>
            </div>
          </div>
        </article>

        <div style={{ display: 'grid', gap: '24px' }}>
          {caseStudyCards.map((card, idx) => (
            <article key={idx} style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              minHeight: '252px'
            }}>
              <a href={`/blog/${articles.find(a => a.slug === card.slug)?.slug ?? card.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }} aria-label={`Read ${card.title}`}>
                <div style={{ position: 'relative', minHeight: '180px', overflow: 'hidden' }}>
                  <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.72)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8, 11, 24, 0.1), rgba(8, 11, 24, 0.92))' }} />
                  <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '999px', backgroundColor: 'var(--brand-400-soft)', color: 'var(--brand-400)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                    {card.category}
                  </div>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontFamily: '"Inter", sans-serif', fontWeight: 800, fontSize: '20px', lineHeight: 1.2, margin: 0 }}>{card.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontSize: '14px', lineHeight: '1.75', margin: 0 }}>{card.description}</p>
                  <div style={{
                    marginTop: 'auto',
                    alignSelf: 'flex-start',
                    padding: '12px 18px',
                    borderRadius: '999px',
                    border: '1px solid var(--brand-400-strong)',
                    backgroundColor: 'var(--brand-400-soft)',
                    color: 'var(--brand-400)',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-block'
                  }}>
                    View Case Study →
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        marginTop: '44px',
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr',
        gap: '24px',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: '16px'
        }}>
          {trusted.map((name, idx) => (
            <div key={idx} style={{
              padding: '18px 16px',
              borderRadius: '22px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-muted)',
              fontSize: '13px',
              textAlign: 'center',
              fontWeight: 700
            }}>
              {name}
            </div>
          ))}
        </div>

        <div style={{
          padding: '36px',
          borderRadius: '32px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <p style={{
            color: 'var(--text-primary)',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            fontSize: '24px',
            margin: 0
          }}>
            “The Antigarvity team didn’t just deliver results, they became a growth partner. Our business has never been stronger.”
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#2d2f45' }}>
              <img src="https://i.pravatar.cc/100?img=32" alt="James Carter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '14px' }}>James Carter</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>CEO, EcoHome Supplies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
