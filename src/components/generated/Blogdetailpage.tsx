
"use client";
import React, { useEffect, useState } from 'react';
import { Navbar, PageName } from './ServicedetailPage';
import { RelatedArticlesSection } from './RelatedArticlesSection';
import { ArticleHero } from '../blog-detail/ArticleHero';
import { TableOfContents } from '../blog-detail/TableOfContents';
import { ArticleContent } from '../blog-detail/ArticleContent';
import { CaseStudyHighlight } from '../blog-detail/CaseStudyHighlight';
import { FinalCTASection } from './FinalCTASection';
import { Footer } from './LandingPage';
import type { Article } from '../../data/articles';

type BlogDetailPageProps = {
  article: Article;
};

export const Blogdetailpage: React.FC<BlogDetailPageProps> = ({ article }) => {
  const [activePage, setActivePage] = useState<PageName>('Blog');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: PageName) => {
    setActivePage(page);
  };

  return (
    <>
      <main style={{ padding: '40px 86px', maxWidth: '1320px', margin: '0 auto', boxSizing: 'border-box' }}>
        <ArticleHero article={article} />
        <TableOfContents article={article} />
        <ArticleContent article={article} />
        <CaseStudyHighlight caseStudy={article.caseStudy} />

        <RelatedArticlesSection articles={article.relatedArticles} />
        <FinalCTASection onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
      </main>
    </>
  );
};
