import React from 'react';
import { articles, getArticleBySlug } from '../../../src/data/articles';
import { Blogdetailpage } from '../../../src/components/generated/Blogdetailpage';
import { SharedLayout } from '../../../src/components/SharedLayout';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  return (
    <SharedLayout>
      <Blogdetailpage article={article} />
    </SharedLayout>
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Catalyst Analytics',
    };
  }

  return {
    title: `${article.title} | Catalyst Analytics`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`
    }
  };
}
