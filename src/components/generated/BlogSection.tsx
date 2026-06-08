import React from 'react';

const blogStats = [{
  value: '250+',
  label: 'In-Depth Articles',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
}, {
  value: '50K+',
  label: 'Monthly Readers',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
}, {
  value: '10+',
  label: 'Expert Contributors',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
}, {
  value: '100K+',
  label: 'Insights Delivered',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
}];
const blogPosts = [{
  tag: 'Featured',
  category: 'Strategy',
  title: 'The Future of Digital Marketing in 2025',
  description: 'Explore emerging trends, technologies, and strategies shaping the future of digital marketing.',
  author: 'By John Smith',
  date: 'May 20, 2025',
  read: '8 min read',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
}, {
  tag: 'SEO',
  category: 'SEO',
  title: '10 SEO Strategies That Actually Work in 2025',
  description: 'How modern search optimization tactics drive organic traffic and long-term growth.',
  author: 'By Emily Carter',
  date: 'May 18, 2025',
  read: '6 min read',
  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80'
}, {
  tag: 'PPC',
  category: 'PPC',
  title: 'How to Maximize ROI with Google Ads',
  description: 'Learn the proven techniques to get more out of your ad spend and improve campaign performance.',
  author: 'By Michael Brown',
  date: 'May 15, 2025',
  read: '7 min read',
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80'
}, {
  tag: 'Social Media',
  category: 'Social Media',
  title: 'Social Media Trends You Can\'t Ignore',
  description: 'Stay updated with the latest social media trends and strategies for brand growth.',
  author: 'By Sarah Wilson',
  date: 'May 12, 2025',
  read: '5 min read',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80'
}];

export const BlogSection: React.FC = () => {
  return (
      <section className="section-pad" style={{
      width: '100%',
      maxWidth: '1440px',
      padding: '120px 0 90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      background: 'var(--bg-primary)',
      borderRadius: '40px',
      border: '1px solid var(--border-light)'
    }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '8%',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--brand-600-medium), transparent 55%)',
            filter: 'blur(80px)'
          }} />
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(145,104,255,0.18), transparent 55%)',
            filter: 'blur(120px)'
          }} />
        </div>

        <div style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                marginBottom: '18px',
                color: '#6da7ff',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase'
              }}>
                Our Blog
              </span>
              <h2 style={{
                fontSize: 'clamp(42px, 4vw, 64px)',
                lineHeight: 1.05,
                margin: 0,
                color: 'var(--text-primary)'
              }}>
                Insights That Drive <span style={{
                  background: 'linear-gradient(90deg, #66a6ff 0%, #0b5bff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Real Results
                </span>
              </h2>
              <p style={{
                marginTop: '22px',
                maxWidth: '610px',
                color: 'var(--text-muted)',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: '"Barlow", sans-serif'
              }}>
                Stay ahead with expert insights, proven strategies, and the latest trends in digital marketing.
              </p>
            </div>
            <div style={{
              position: 'relative',
              minHeight: '360px',
              borderRadius: '32px',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)'
            }}>
              <img className="ca-hover-popup" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Blog hero" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 30%, var(--bg-primary) 100%)'
              }} />
              <div style={{
                position: 'absolute',
                left: '28px',
                bottom: '28px',
                right: '28px',
                color: 'var(--text-primary)'
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                  color: '#8cb4ff',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '999px',
                    background: 'var(--brand-500-medium)',
                    display: 'grid',
                    placeItems: 'center'
                  }}>★</span>
                  Featured
                </span>
                <h3 style={{
                  margin: 0,
                  fontSize: '24px',
                  lineHeight: '1.2',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}>
                  Blog Intelligence for Modern Brands
                </h3>
                <p style={{
                  marginTop: '12px',
                  color: 'var(--text-muted)',
                  fontSize: '14px',
                  lineHeight: '22px'
                }}>
                  Actionable insights and campaign intelligence that keep your team ahead.
                </p>
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '16px'
          }}>
            {blogStats.map(stat => <div key={stat.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              borderRadius: '22px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, var(--brand-600-medium), rgba(145,104,255,0.16))',
                display: 'grid',
                placeItems: 'center'
              }}>
                <img src={stat.icon} alt="" style={{ width: '24px', height: '24px' }} />
              </div>
              <div>
                <div style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  marginTop: '6px'
                }}>{stat.label}</div>
              </div>
            </div>)}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
            gap: '20px'
          }}>
            <article style={{
              position: 'relative',
              minHeight: '460px',
              borderRadius: '32px',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 16px 45px rgba(0,0,0,0.08)'
            }}>
              <img className="ca-hover-popup" src={blogPosts[0].image} alt={blogPosts[0].title} style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover'
              }} />
              <div style={{
                position: 'absolute',
                top: '22px',
                left: '22px',
                padding: '10px 16px',
                borderRadius: '999px',
                background: 'var(--brand-600-medium)',
                color: '#66b2ff',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}>{blogPosts[0].tag}</div>
              <div style={{
                position: 'relative',
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: 'calc(100% - 240px)'
              }}>
                <div>
                  <div style={{
                    color: 'rgba(138,183,255,0.85)',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    marginBottom: '12px'
                  }}>{blogPosts[0].category}</div>
                  <h3 style={{
                    color: 'var(--text-primary)',
                    fontSize: '26px',
                    lineHeight: '1.18',
                    margin: 0
                  }}>{blogPosts[0].title}</h3>
                  <p style={{
                    marginTop: '16px',
                    color: 'var(--text-muted)',
                    lineHeight: '24px'
                  }}>{blogPosts[0].description}</p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div style={{
                    color: 'var(--text-muted)',
                    fontSize: '13px'
                  }}>{blogPosts[0].author} · {blogPosts[0].date}</div>
                  <div style={{
                    padding: '10px 16px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: '#66b2ff',
                    fontSize: '13px'
                  }}>{blogPosts[0].read}</div>
                </div>
              </div>
            </article>
            {blogPosts.slice(1).map(post => <article key={post.title} style={{
              borderRadius: '28px',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 12px 28px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <img className="ca-hover-popup" src={post.image} alt={post.title} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.92
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, var(--bg-card) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  padding: '8px 14px',
                  borderRadius: '999px',
                  background: 'var(--brand-600-medium)',
                  color: '#8cb4ff',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em'
                }}>{post.tag}</div>
              </div>
              <div style={{
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: '18px',
                  lineHeight: '1.3',
                  margin: 0
                }}>{post.title}</h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '14px',
                  lineHeight: '22px',
                  margin: 0
                }}>{post.description}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: 'auto'
                }}>
                  <div style={{
                    color: 'var(--text-muted)',
                    fontSize: '12px'
                  }}>{post.author}</div>
                  <div style={{
                    color: 'rgba(138,183,255,0.85)',
                    fontSize: '12px'
                  }}>{post.read}</div>
                </div>
              </div>
            </article>)}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              minWidth: '220px',
              padding: '16px 28px',
              borderRadius: '999px',
              border: '1px solid var(--border-light)',
              background: 'linear-gradient(90deg, var(--brand-500) 0%, var(--brand-600) 100%)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 0 40px rgba(145,104,255,0.22)'
            }}>
              Explore All Articles
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '-12px'
            }}>
              {['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80'].map((src, idx) => <img className="ca-hover-popup" key={idx} src={src} alt="avatar" style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '2px solid var(--bg-primary)'
              }} />)}
            </div>
          </div>
        </div>
      </section>
  );
};
