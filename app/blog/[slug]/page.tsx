import React from 'react';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug } from '../../../src/data/articles';
import { Blogdetailpage } from '../../../src/components/generated/Blogdetailpage';

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  const { slug } = params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return (
      <main style={{ padding: 40, maxWidth: 900, margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ fontSize: 32, color: 'var(--text-primary)' }}>Article not found</h1>
        <div style={{ marginTop: 12, marginBottom: 12 }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: 6 }}>Raw params:</div>
          <pre style={{ background: '#111', color: '#fff', padding: 12, borderRadius: 8 }}>{JSON.stringify(params)}</pre>
        </div>
        <div style={{ marginTop: 12, marginBottom: 12 }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: 6 }}>Requested slug (raw string):</div>
          <pre style={{ background: '#111', color: '#fff', padding: 12, borderRadius: 8 }}>{JSON.stringify(slug)}</pre>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>Available slugs include:</p>
        <ul>
          {articles.slice(0, 30).map((a) => (
            <li key={a.slug} style={{ fontFamily: 'monospace', color: 'var(--text-primary)' }}>{a.slug}</li>
          ))}
        </ul>
      </main>
    );
  }

  return <Blogdetailpage article={article} />;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
