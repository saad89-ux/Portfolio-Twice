const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/generated');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const getRoute = (page) => {
  const routes = {
    'Home': '/',
    'About Us': '/about',
    'Services': '/services',
    'Portfolio': '/portfolio',
    'Careers': '/careers',
    'Blog': '/blog',
    'Contact': '/contact',
    'SEO & ORGANIC GROWTH': '/services/seo-organic-growth',
    'PERFORMANCE MARKETING': '/services/performance-marketing',
    'WEB DESIGN & DEVELOPMENT': '/services/web-design-development',
    'BRAND STRATEGY & IDENTITY': '/services/brand-strategy-identity',
    'CONTENT MARKETING': '/services/content-marketing',
    'MARKETING AUTOMATION & CRM': '/services/marketing-automation-crm'
  };
  return routes[page] || '/';
};

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add import { useRouter } from 'next/navigation' if not present and we need it
  const needsRouter = content.includes('onNavigate(') || content.includes('onNavigate?');
  
  if (needsRouter) {
    if (!content.includes("import { useRouter } from 'next/navigation'")) {
      content = content.replace(/(import React.*?;\n)/, "$1import { useRouter } from 'next/navigation';\n");
    }

    // Inside components, add router definition if they had onNavigate destructuring
    // E.g. export const HeroSection: React.FC<{ onNavigate?: (page: PageName) => void }> = ({ onNavigate }) => {
    // We replace the prop destructuring and add router
    content = content.replace(/=\s*\(\{\s*onNavigate.*?\}\)\s*=>\s*\{/g, "() => {\n  const router = useRouter();");
    content = content.replace(/=\s*\(\{\s*(.*?),\s*onNavigate.*?\}\)\s*=>\s*\{/g, "= ({ $1 }) => {\n  const router = useRouter();");
    content = content.replace(/=\s*\(\{\s*onNavigate,\s*(.*?)\}\)\s*=>\s*\{/g, "= ({ $1 }) => {\n  const router = useRouter();");

    // Fix interface definitions that have onNavigate
    content = content.replace(/onNavigate\??:\s*\([^)]*\)\s*=>\s*void;/g, "");

    // Replace onNavigate('Contact') with router.push('/contact')
    // We need to handle exact string matches
    content = content.replace(/onNavigate\s*&&\s*onNavigate\('([^']+)'\)/g, (match, p1) => {
      return `router.push('${getRoute(p1)}')`;
    });
    content = content.replace(/onNavigate\('([^']+)'\)/g, (match, p1) => {
      return `router.push('${getRoute(p1)}')`;
    });
    
    // For service.title to slug
    content = content.replace(/onNavigate\(service\.title\)/g, "router.push(`/services/${service.slug || service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}` )");

    // Clean up specific edge cases
    content = content.replace(/onClick=\{\(\)\s*=>\s*onNavigate\s*&&\s*onNavigate\}/g, "onClick={() => {} /* removed onNavigate fallback */}");
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
