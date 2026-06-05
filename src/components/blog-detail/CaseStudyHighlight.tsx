"use client";
import React from 'react';
import type { ArticleCaseStudy } from '../../data/articles';

type CaseStudyHighlightProps = {
  caseStudy: ArticleCaseStudy;
};

export const CaseStudyHighlight: React.FC<CaseStudyHighlightProps> = ({ caseStudy }) => {
  return (
    <section className="case-study-highlight-pixel" style={{ marginTop: '72px' }}>
      <style>{`
        .case-study-highlight-pixel {
          width: min(100%, 1320px);
          min-height: 546px;
          margin-left: auto;
          margin-right: auto;
          padding: 50px 54px 54px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 63%, rgba(122, 84, 255, 0.22), transparent 23%),
            radial-gradient(circle at 33% 23%, rgba(36, 71, 112, 0.16), transparent 19%),
            #02040b;
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #fff;
          font-family: "Barlow", sans-serif;
        }

        .case-study-highlight-pixel::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.026) 1px, transparent 1px);
          background-size: 92px 92px;
          opacity: 0.28;
        }

        .case-study-pixel-stage {
          position: relative;
          display: grid;
          grid-template-columns: 320px 1fr;
          grid-template-rows: 244px 168px;
          column-gap: 36px;
          row-gap: 30px;
          z-index: 1;
        }

        .case-study-pixel-copy { display: flex; flex-direction: column; align-items: flex-start; padding-top: 18px; }
        .case-study-kicker { margin: 0 0 20px; color: #8e62ff; font-size: 9px; font-weight: 700; letter-spacing: 0.18em; line-height: 1; text-transform: uppercase; }
        .case-study-title { margin: 0; color: #f7f8ff; font-family: "Inter", sans-serif; font-size: 38px; line-height: 1.15; font-weight: 800; }
        .case-study-copy { width: 236px; margin: 24px 0 0; color: rgba(236, 239, 250, 0.72); font-size: 11px; line-height: 1.62; }
        .case-study-all-button { display: inline-flex; align-items: center; gap: 14px; margin-top: 34px; padding: 0; border: 0; background: transparent; color: #fff; font-family: "Barlow", sans-serif; font-size: 10px; font-weight: 700; cursor: pointer; }
        .case-study-button-icon, .case-study-card-arrow { display: inline-grid; place-items: center; width: 32px; height: 32px; flex: 0 0 auto; border-radius: 999px; background: linear-gradient(135deg, #8357ff 0%, #6f45df 100%); color: #fff; box-shadow: 0 13px 30px rgba(121, 82, 255, 0.36); font-size: 17px; line-height: 1; }

        .case-study-hero-wrap { position: relative; min-width: 0; }
        .case-study-hero-image { width: 100%; height: 244px; display: block; border-radius: 8px; object-fit: cover; object-position: center; filter: saturate(0.92) contrast(1.02); }

        .case-study-featured-card { position: absolute; left: -60px; right: 18px; bottom: -68px; height: 68px; display: grid; grid-template-columns: 152px 1fr 84px 84px 84px; align-items: center; gap: 0; padding: 0 22px; border-radius: 7px; border: 1px solid rgba(255, 255, 255, 0.09); background: linear-gradient(100deg, rgba(25, 23, 45, 0.98), rgba(15, 16, 34, 0.98)); box-shadow: 0 23px 58px rgba(0, 0, 0, 0.34); backdrop-filter: blur(12px); }

        .case-study-bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 84px; }
        .case-study-mini-card { position: relative; border-radius: 8px; overflow: hidden; display: block; border: 1px solid rgba(255,255,255,0.06); background: rgba(10, 12, 24, 0.9); }
        .case-study-mini-card img { width: 100%; height: 160px; object-fit: cover; display: block; }
        .case-study-mini-content { padding: 14px; }
        .case-study-mini-title { margin: 8px 0 0; font-size: 15px; font-weight: 700; color: #fff; }
        .case-study-mini-brand { display: flex; align-items: center; gap: 7px; color: rgba(236, 239, 250, 0.72); font-size: 11px; }
        .case-study-mini-stats { display: flex; gap: 12px; margin-top: 10px; }
        .case-study-mini-stat strong { display: block; font-weight: 800; color: #8e62ff; }
        .case-study-mini-stat span { display: block; color: rgba(236,239,250,0.72); font-size: 11px; }
        .case-study-card-arrow { position: absolute; right: 14px; bottom: 14px; width: 24px; height: 24px; font-size: 12px; }

        @media (max-width: 980px) {
          .case-study-highlight-pixel { padding: 36px 24px; }
          .case-study-pixel-stage { display: flex; flex-direction: column; }
          .case-study-copy { width: min(100%, 420px); }
          .case-study-featured-card { position: static; height: auto; grid-template-columns: 1fr; gap: 14px; margin-top: 14px; padding: 18px; }
          .case-study-bottom-grid { grid-template-columns: 1fr; margin-top: 20px; }
        }
      `}</style>

      <div className="case-study-pixel-stage">
        <div className="case-study-pixel-copy">
          <div className="case-study-kicker">Case Study Highlight</div>
          <h2 className="case-study-title">Real Results. Real Impact.</h2>
          <div className="case-study-copy">Discover how we partnered with ambitious brands to overcome challenges and achieve measurable growth through data-driven strategies and creative execution.</div>
          <button className="case-study-all-button" type="button"><span className="case-study-button-icon">→</span> View All Case Studies</button>

          <div style={{ marginTop: '12px', padding: '18px', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '18px', alignItems: 'center', color: '#fff' }}>
            <img src={caseStudy.logoImage} alt={caseStudy.brand} style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'cover' }} />
            <div>
              <div style={{ color: '#fff', fontWeight: 800 }}>{caseStudy.headline}</div>
              <div style={{ color: 'rgba(236,239,250,0.72)', fontSize: '13px', marginTop: '6px' }}>{caseStudy.description}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '18px', alignItems: 'center' }}>
              {caseStudy.stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: 'right' }}>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '20px' }}>{stat.value}</div>
                  <div style={{ color: 'rgba(236,239,250,0.72)', fontSize: '12px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="case-study-hero-wrap">
          <img className="case-study-hero-image" src={caseStudy.heroImage} alt={caseStudy.headline} />
          <div className="case-study-featured-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '8px', background: 'linear-gradient(135deg, #8357ff, #6f45df)', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800 }}>{caseStudy.brandShort}</div>
              <div style={{ color: '#fff', fontWeight: 800 }}>{caseStudy.brand}</div>
            </div>
            <div style={{ color: 'rgba(236,239,250,0.72)', fontSize: '13px' }}>{caseStudy.description}</div>
            {caseStudy.stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 800, fontSize: '18px' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: 'rgba(236,239,250,0.72)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="case-study-bottom-grid">
            {caseStudy.cards.map((card) => (
              <article className="case-study-mini-card" key={card.title}>
                <img src={card.image} alt={card.imageAlt} />
                <div className="case-study-mini-content">
                  <div className="case-study-mini-brand">
                    <span className="case-study-mini-brand-icon">▣</span>
                    <span>{card.brand}</span>
                  </div>
                  <h3 className="case-study-mini-title">{card.title}</h3>
                  <div className="case-study-mini-stats">
                    {card.stats.map((stat) => (
                      <div className="case-study-mini-stat" key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="case-study-card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
