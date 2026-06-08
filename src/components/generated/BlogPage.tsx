"use client";
import React from 'react';
import { BlogHero } from './BlogHero';
import { TopicCategories } from './TopicCategories';
import { FeaturedArticle } from './FeaturedArticle';
import { LatestArticles } from './LatestArticles';
import { CaseStudyArticles } from './CaseStudyArticles';
import { NewsletterCTA } from './NewsletterCTA';
import  {FAQSection} from './FAQSection';
import { FinalCTASection } from './FinalCTASection';

export const BlogPage: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <BlogHero />
      <TopicCategories />
      <FeaturedArticle />
      <LatestArticles />
      <CaseStudyArticles />
      <NewsletterCTA />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};
