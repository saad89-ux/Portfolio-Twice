import React from 'react';

export const NewsletterCTA: React.FC = () => {
  const stats = [
    { icon: '👥', title: '10K+', value: 'Active Subscribers' },
    { icon: '📧', title: '48%', value: 'Avg. Open Rate' },
    { icon: '🔗', title: '12%', value: 'Avg. Click Rate' },
    { icon: '⭐', title: '4.9/5', value: 'Subscriber Rating' }
  ];

  const brands = ['TechNova', 'EcoHome', 'HealthPlus', 'UrbanTrend', 'FinEdge'];

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
        background: 'radial-gradient(circle at top left, var(--brand-400-medium), transparent 22%), radial-gradient(circle at bottom right, var(--brand-400-soft), transparent 18%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1.15fr', gap: '48px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '8px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 18px', borderRadius: '999px', backgroundColor: 'var(--brand-400-soft)', border: '1px solid var(--brand-400-medium)', color: 'var(--brand-400)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', width: 'fit-content' }}>
            ✦ Weekly Newsletter
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h2 style={{
              margin: 0,
              color: 'var(--text-primary)',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(48px, 5.2vw, 68px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em'
            }}>
              Actionable Growth Insights. <span style={{ color: 'var(--brand-400)' }}>Every Week.</span>
            </h2>
            <p style={{
              margin: 0,
              maxWidth: '560px',
              color: 'var(--text-muted)',
              fontSize: '16px',
              lineHeight: '1.85',
              fontFamily: '"Barlow", sans-serif'
            }}>
              Join thousands of marketers, founders, and business owners who rely on our insights to stay ahead, grow faster, and make smarter decisions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              { icon: '📈', title: 'Proven Strategies', desc: 'Real tactics that drive measurable results.' },
              { icon: '💡', title: 'Industry Insights', desc: 'Stay updated with the latest trends.' },
              { icon: '📋', title: 'Exclusive Resources', desc: 'Guides, templates, and frameworks.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '18px', display: 'grid', placeItems: 'center', backgroundColor: 'var(--brand-400-soft)', color: 'var(--brand-400)', fontSize: '20px', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '3px' }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '15px' }}>{item.title}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.65' }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '22px', padding: '20px 24px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-12px' }}>
              {[1, 2, 3].map((n) => (
                <img key={n} src={`https://i.pravatar.cc/100?img=${n + 20}`} alt="Team avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--bg-primary)', marginLeft: n > 1 ? '-12px' : 0, objectFit: 'cover' }} />
              ))}
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--brand-400-medium)', display: 'grid', placeItems: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--brand-400)', marginLeft: '-12px', border: '2px solid var(--bg-primary)' }}>
                10K+
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '14px' }}>Join 10,000+ growth-focused professionals worldwide</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Trusted by the Antigravity team for sharp, weekly growth playbooks.</span>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'grid', gap: '24px' }}>
          <div style={{
            borderRadius: '32px',
            overflow: 'hidden',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--brand-400-medium)',
            boxShadow: '0 50px 100px rgba(0, 0, 0, 0.32)'
          }}>
            <div style={{ position: 'relative', minHeight: '300px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Newsletter preview" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(1.2)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--brand-400-strong), var(--brand-400-medium)), linear-gradient(180deg, rgba(10, 14, 34, 0.16), rgba(8, 11, 24, 0.95))' }} />
              <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '999px', backgroundColor: 'rgba(20, 23, 44, 0.9)', border: '1px solid var(--brand-400-strong)', color: 'var(--brand-400)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                🚀 antigravity
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100px', height: '100px', borderRadius: '20px', backgroundColor: 'var(--brand-400-medium)', display: 'grid', placeItems: 'center', fontSize: '44px', color: '#fff' }}>
                ✉️
              </div>
            </div>

            <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: 'rgba(12, 16, 32, 0.72)' }}>
              <div>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: '11px', marginBottom: '10px', letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 700 }}>Weekly Growth Insights</span>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '28px', lineHeight: 1.15, fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>Issue #48</h3>
              </div>

              <div style={{ display: 'grid', gap: '14px' }}>
                {[
                  'SEO Tactics That Increased Traffic by 320%',
                  'Performance Marketing Benchmarks 2025',
                  'Automation Hacks to Save 10+ Hours/Week',
                  'Top Digital Marketing Trends You Can\'t Ignore'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ display: 'inline-flex', width: '24px', height: '24px', borderRadius: '8px', backgroundColor: 'var(--brand-400-medium)', color: 'var(--brand-400)', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginTop: '2px', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: '1.65' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            borderRadius: '32px',
            padding: '36px',
            backgroundColor: 'rgba(20, 23, 44, 0.94)',
            border: '1px solid var(--brand-400-medium)',
            boxShadow: '0 30px 60px var(--brand-400-soft)'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ color: 'var(--brand-400)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Get Our Best Strategies In Your Inbox</span>
              <p style={{ margin: '12px 0 0', color: 'var(--text-primary)', fontSize: '22px', lineHeight: '1.3', fontWeight: 800, fontFamily: '"Inter", sans-serif' }}>No spam. Unsubscribe anytime.</p>
            </div>

            <div style={{ display: 'grid', gap: '14px', marginBottom: '24px' }}>
              <input type="email" placeholder="Enter your email address" style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.12)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: 'var(--text-primary)',
                fontSize: '14px',
                outline: 'none',
                fontFamily: '"Barlow", sans-serif'
              }} />
              <button style={{
                width: '100%',
                padding: '16px 28px',
                borderRadius: '16px',
                border: 'none',
                backgroundImage: 'linear-gradient(135deg, var(--brand-400) 0%, var(--brand-400) 100%)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 20px 40px var(--brand-400-strong)'
              }}>
                Subscribe Now →
              </button>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['100% Free', 'No Spam', 'Unsubscribe Anytime'].map((label, idx) => (
                <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-400)' }} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, marginTop: '64px', display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ minWidth: '320px', flex: '1 1 380px' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Trusted by Industry Leaders</span>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {brands.map((brand, idx) => (
              <div key={idx} style={{ padding: '16px 20px', borderRadius: '20px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '13px', fontWeight: 700, textAlign: 'center' }}>
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(140px, 1fr))', gap: '16px', flex: '1 1 560px' }}>
          {stats.map((item, idx) => (
            <div key={idx} style={{ padding: '20px 18px', borderRadius: '24px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '20px', marginBottom: '10px' }}>{item.icon}</span>
              <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>{item.title}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6' }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
