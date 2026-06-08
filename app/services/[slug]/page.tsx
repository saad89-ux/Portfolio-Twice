import { SharedLayout } from '@/components/SharedLayout';
import { ServicedetailPage } from '@/components/generated/ServicedetailPage';
import { notFound } from 'next/navigation';

const slugToServiceName: Record<string, string> = {
  'seo-organic-growth': 'SEO & ORGANIC GROWTH',
  'performance-marketing': 'PERFORMANCE MARKETING',
  'web-design-development': 'WEB DESIGN & DEVELOPMENT',
  'brand-strategy-identity': 'BRAND STRATEGY & IDENTITY',
  'content-marketing': 'CONTENT MARKETING',
  'marketing-automation-crm': 'MARKETING AUTOMATION & CRM'
};

const serviceTitles: Record<string, string> = {
  'seo-organic-growth': 'SEO & Organic Growth',
  'performance-marketing': 'Performance Marketing',
  'web-design-development': 'Web Design & Development',
  'brand-strategy-identity': 'Brand Strategy & Identity',
  'content-marketing': 'Content Marketing',
  'marketing-automation-crm': 'Marketing Automation & CRM'
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const serviceName = serviceTitles[slug];
  
  if (!serviceName) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `Catalyst Analytics | ${serviceName}`,
    description: `Learn more about our ${serviceName} services and how we can help your business grow.`,
    alternates: {
      canonical: `/services/${slug}`
    }
  };
}

export function generateStaticParams() {
  return Object.keys(slugToServiceName).map((slug) => ({ slug }));
}

export default async function ServiceDetailRoute({ params }: Props) {
  const { slug } = await params;
  const serviceName = slugToServiceName[slug];

  if (!serviceName) {
    notFound();
  }

  return (
    <SharedLayout>
      <ServicedetailPage serviceName={serviceName} />
    </SharedLayout>
  );
}
