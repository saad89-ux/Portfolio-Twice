import { SharedLayout } from '@/components/SharedLayout';
import { ServicesPage } from '@/components/generated/ServicesPage';

export const metadata = {
  title: 'Catalyst Analytics | Services',
  description: 'Explore our wide range of digital marketing services tailored to your needs.',
  alternates: {
    canonical: '/services'
  }
};

export default function ServicesRoute() {
  return (
    <SharedLayout>
      <ServicesPage />
    </SharedLayout>
  );
}
