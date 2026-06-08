import { SharedLayout } from '@/components/SharedLayout';
import { PortfolioShowcase } from '@/components/generated/PortfolioShowcase';

export const metadata = {
  title: 'Catalyst Analytics | Portfolio',
  description: 'View our successful projects and case studies.',
  alternates: {
    canonical: '/portfolio'
  }
};

export default function PortfolioRoute() {
  return (
    <SharedLayout>
      <PortfolioShowcase />
    </SharedLayout>
  );
}
