import React from 'react';
import { ArrowLeft, ArrowRight, Megaphone, PenLine, Target, TrendingUp } from 'lucide-react';
import type { RelatedArticle } from '../../data/articles';

const relatedIcons = [TrendingUp, Target, PenLine, Megaphone];

type RelatedArticlesSectionProps = {
  articles: RelatedArticle[];
};

export const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({ articles }) => {
  return (
    <section className="related-articles-section" aria-labelledby="related-articles-title">
      <style>{`
        .related-articles-section {
          width: min(100%, 1320px);
          min-height: 540px;
          margin: 30px auto 0;
          padding: 44px 54px 58px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 30%, rgba(92, 58, 217, 0.18), transparent 24%),
            radial-gradient(circle at 76% 16%, rgba(35, 66, 105, 0.2), transparent 24%),
            radial-gradient(circle at 84% 78%, rgba(126, 87, 255, 0.16), transparent 22%),
            #02040b;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #fff;
          font-family: "Barlow", sans-serif;
        }

        .related-articles-section::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.026) 1px, transparent 1px);
          background-size: 92px 92px;
          opacity: 0.22;
        }

        .related-articles-header {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 300px 96px;
          gap: 52px;
          align-items: start;
        }

        .related-articles-kicker {
          margin: 0 0 12px;
          color: #8e62ff;
          font-size: 9px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .related-articles-title {
          max-width: 520px;
          margin: 0;
          color: #f8f6ff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 42px;
          line-height: 1.02;
          font-weight: 500;
          letter-spacing: -0.04em;
          text-shadow: 0 12px 38px rgba(255, 255, 255, 0.07);
        }

        .related-articles-title span {
          color: #8e62ff;
        }

        .related-articles-intro {
          margin: 20px 0 0;
          color: rgba(236, 239, 250, 0.68);
          font-size: 10px;
          line-height: 1.8;
          font-weight: 500;
        }

        .related-articles-nav {
          display: flex;
          justify-content: flex-end;
          gap: 14px;
          padding-top: 38px;
        }

        .related-articles-nav button {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.78);
          cursor: pointer;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
        }

        .related-articles-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 46px;
          transform: translateX(-8px);
        }

        .related-article-card {
          position: relative;
          min-height: 306px;
          overflow: hidden;
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(180deg, rgba(18, 23, 34, 0.98), rgba(7, 9, 18, 0.99));
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35);
          transform: skewX(-5deg);
        }

        .related-article-card:nth-child(4) {
          border-color: rgba(142, 98, 255, 0.48);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35), 0 0 22px rgba(142, 98, 255, 0.15);
        }

        .related-article-card-inner {
          min-height: 306px;
          display: flex;
          flex-direction: column;
          transform: skewX(5deg) scaleX(1.02);
          transform-origin: center;
        }

        .related-article-image-wrap {
          position: relative;
          height: 135px;
          margin: -2px -10px 0;
          overflow: hidden;
        }

        .related-article-image-wrap img {
          width: 115%;
          height: 100%;
          display: block;
          object-fit: cover;
          transform: translateX(-10px);
          filter: brightness(0.78) saturate(0.96) contrast(1.06);
        }

        .related-article-image-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 16% 10%, rgba(142, 98, 255, 0.28), transparent 28%),
            linear-gradient(180deg, rgba(2, 4, 11, 0.03), rgba(2, 4, 11, 0.72));
        }

        .related-article-content {
          position: relative;
          min-height: 171px;
          padding: 27px 25px 20px;
          display: flex;
          flex-direction: column;
          background:
            linear-gradient(180deg, rgba(16, 19, 32, 0.82), rgba(5, 7, 16, 0.98)),
            radial-gradient(circle at bottom right, rgba(142, 98, 255, 0.16), transparent 32%);
        }

        .related-article-icon {
          position: absolute;
          top: -26px;
          left: 22px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          border: 1px solid rgba(142, 98, 255, 0.58);
          background: rgba(10, 7, 30, 0.9);
          color: #8e62ff;
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.32), 0 0 22px rgba(142, 98, 255, 0.2);
        }

        .related-article-eyebrow {
          margin: 0 0 12px;
          color: #8e62ff;
          font-size: 8px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .related-article-title {
          width: 176px;
          margin: 0;
          color: #f7f7ff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.035em;
        }

        .related-article-copy {
          width: 180px;
          margin: 16px 0 0;
          color: rgba(236, 239, 250, 0.58);
          font-size: 9px;
          line-height: 1.65;
          font-weight: 500;
        }

        .related-article-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          color: rgba(236, 239, 250, 0.6);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .related-article-footer svg {
          color: #8e62ff;
        }

        .related-article-number {
          position: absolute;
          right: 18px;
          bottom: -9px;
          color: rgba(255, 255, 255, 0.035);
          font-family: "Inter", sans-serif;
          font-size: 66px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.06em;
          pointer-events: none;
        }

        @media (max-width: 1100px) {
          .related-articles-header {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .related-articles-intro {
            max-width: 420px;
            margin-top: 0;
          }

          .related-articles-nav {
            justify-content: flex-start;
            padding-top: 0;
          }

          .related-articles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            transform: none;
          }
        }

        @media (max-width: 640px) {
          .related-articles-section {
            padding: 36px 24px 42px;
          }

          .related-articles-title {
            font-size: 36px;
          }

          .related-articles-grid {
            grid-template-columns: 1fr;
          }

          .related-article-card,
          .related-article-card-inner {
            transform: none;
          }

          .related-article-image-wrap {
            margin: 0;
          }

          .related-article-title,
          .related-article-copy {
            width: 100%;
          }
        }
      `}</style>

      <div className="related-articles-header">
        <div>
          <p className="related-articles-kicker">Continue Exploring</p>
          <h2 id="related-articles-title" className="related-articles-title">
            More insights<br />
            that drive growth<span>.</span>
          </h2>
        </div>

        <p className="related-articles-intro">
          Dive deeper into expert perspectives, trends, and strategies shaping the future of marketing.
        </p>

        <div className="related-articles-nav" aria-label="Related articles navigation">
          <button type="button" aria-label="Previous related articles">
            <ArrowLeft size={15} strokeWidth={1.7} />
          </button>
          <button type="button" aria-label="Next related articles">
            <ArrowRight size={15} strokeWidth={1.7} />
          </button>
        </div>
      </div>

      <div className="related-articles-grid">
        {articles.map((article, index) => {
          const Icon = relatedIcons[index % relatedIcons.length];

          return (
            <a key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }} aria-label={`Read ${article.title}`}>
            <article className="related-article-card">
              <div className="related-article-card-inner">
                <div className="related-article-image-wrap">
                  <img src={article.image} alt={article.title} />
                </div>

                <div className="related-article-content">
                  <div className="related-article-icon">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <p className="related-article-eyebrow">{article.eyebrow}</p>
                  <h3 className="related-article-title">{article.title}</h3>
                  <p className="related-article-copy">{article.copy}</p>
                  <div className="related-article-footer">
                      <span>{article.readTime}</span>
                      <ArrowRight size={15} strokeWidth={1.7} />
                    </div>
                  <span className="related-article-number">{article.number}</span>
                </div>
              </div>
              </article>
              </a>
          );
        })}
      </div>
    </section>
  );
};
