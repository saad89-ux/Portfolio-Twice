import { HomeContent } from '@/components/generated/LandingPage';
import { SharedLayout } from '@/components/SharedLayout';

export const metadata = {
  title: 'Catalyst Analytics | Home',
  description: 'A digital marketing agency focused on driving real growth through data, creativity, and performance.',
  alternates: {
    canonical: '/'
  }
};

export default function Page() {
  return (
    <SharedLayout>
      <HomeContent />
    </SharedLayout>
  );
}
