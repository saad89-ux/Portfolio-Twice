import { SharedLayout } from '@/components/SharedLayout';
import { ContactFormpage } from '@/components/generated/ContactFormpage';

export const metadata = {
  title: 'Catalyst Analytics | Contact Us',
  description: 'Get in touch with us to start your digital growth journey.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactRoute() {
  return (
    <SharedLayout>
      <ContactFormpage />
    </SharedLayout>
  );
}
