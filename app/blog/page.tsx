import { SharedLayout } from '@/components/SharedLayout';
import { BlogPage } from '@/components/generated/BlogPage';

export const metadata = {
  title: 'Catalyst Analytics | Blog',
  description: 'Read our latest thoughts, trends, and strategies in digital marketing.',
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogRoute() {
  return (
    <SharedLayout>
      <BlogPage />
    </SharedLayout>
  );
}
