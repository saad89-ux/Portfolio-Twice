
"use client";
import React, { useEffect, useState } from 'react';
import { Navbar, PageName } from './ServicedetailPage';
import { RelatedArticlesSection } from './RelatedArticlesSection';
import { ArticleHero } from '../blog-detail/ArticleHero';
import { TableOfContents } from '../blog-detail/TableOfContents';
import { ArticleContent } from '../blog-detail/ArticleContent';
import { CaseStudyHighlight } from '../blog-detail/CaseStudyHighlight';
import { QuoteBreak } from '../blog-detail/QuoteBreak';
import { FinalCTASection } from './FinalCTASection';
import { Footer } from './LandingPage';
import type { Article } from '../../data/articles';

type BlogDetailPageProps = {
  article: Article;
};
import { useRouter } from 'next/navigation';

export const Blogdetailpage: React.FC<BlogDetailPageProps> = ({ article }) => {
  const router = useRouter();
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
    router.push('/');
  };

  return (
    <>
      <Navbar activePage={activePage} onNavigate={handleNavigate} scrolled={scrolled} />
      <div style={{ paddingTop: '96px', backgroundColor: 'var(--bg-primary)' }}>
        <main className="page-container blog-detail__main">
          <ArticleHero article={article} />
          <QuoteBreak quote={article.quote} author={article.author} role={article.role} />
          <TableOfContents article={article} />
          <ArticleContent article={article} />
          <CaseStudyHighlight caseStudy={article.caseStudy} />

          <RelatedArticlesSection articles={article.relatedArticles} />
          <FinalCTASection onNavigate={handleNavigate} />
          <Footer onNavigate={handleNavigate} />
        </main>
      </div>
    </>
  );
};
