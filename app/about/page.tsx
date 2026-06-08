import { SharedLayout } from '@/components/SharedLayout';
import { AboutPageContent } from '@/components/generated/AboutPageContent';

export const metadata = {
  title: 'Catalyst Analytics | About Us',
  description: 'Learn more about Catalyst Analytics, our team, mission, and journey.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <SharedLayout>
      <AboutPageContent />
    </SharedLayout>
  );
}
