
"use client";
import React from 'react';
import { RelatedArticlesSection } from './RelatedArticlesSection';
import { ArticleHero } from '../blog-detail/ArticleHero';
import { TableOfContents } from '../blog-detail/TableOfContents';
import { ArticleContent } from '../blog-detail/ArticleContent';
import { CaseStudyHighlight } from '../blog-detail/CaseStudyHighlight';
import { QuoteBreak } from '../blog-detail/QuoteBreak';
import { FinalCTASection } from './FinalCTASection';
import type { Article } from '../../data/articles';

type BlogDetailPageProps = {
  article: Article;
};

export const Blogdetailpage: React.FC<BlogDetailPageProps> = ({ article }) => {
  return (
    <>
      <div style={{ backgroundColor: 'var(--bg-primary)' }}>
        <main className="page-container blog-detail__main">
          <ArticleHero article={article} />
          <QuoteBreak quote={article.quote} author={article.author} role={article.role} />
          <TableOfContents article={article} />
          <ArticleContent article={article} />
          <CaseStudyHighlight caseStudy={article.caseStudy} />

          <RelatedArticlesSection articles={article.relatedArticles} />
          <FinalCTASection />
        </main>
      </div>
    </>
  );
};
