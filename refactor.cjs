const fs = require('fs');

const lines = fs.readFileSync('src/components/generated/LandingPage.tsx', 'utf8').split('\n');

const newLines = [];

// Imports to add
const newImports = [
  "import { HeroSection } from './HeroSection';",
  "import { TrustSection } from './TrustSection';",
  "import { ServicesGridSection } from './ServicesGridSection';",
  "import { PortfolioSection } from './PortfolioSection';",
  "import { CaseStudiesSection } from './CaseStudiesSection';",
  "import { BlogSection } from './BlogSection';",
  "import { TestimonialsSection } from './TestimonialsSection';",
  "import { FinalCTASection } from './FinalCTASection';",
  "import { ContactFormSection } from './ContactFormSection';"
];

for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1;

  // Add imports after the 7th line (which is import { IndustriesSection } from './IndustriesSection';)
  if (lineNum === 8) {
    newLines.push(lines[i]);
    newLines.push(...newImports);
    continue;
  }

  // Ranges to delete
  if (lineNum >= 45 && lineNum <= 167) continue;
  if (lineNum >= 229 && lineNum <= 282) continue;
  if (lineNum >= 313 && lineNum <= 335) continue;
  if (lineNum >= 858 && lineNum <= 1192) continue;
  if (lineNum >= 1351 && lineNum <= 1415) continue;
  if (lineNum >= 1417 && lineNum <= 1684) continue;
  
  // States to remove from HomeContent
  if (lineNum === 1692 || lineNum === 1693) continue;

  // Ranges to replace
  if (lineNum === 1700) { newLines.push('      <HeroSection />'); continue; }
  if (lineNum > 1700 && lineNum <= 1880) continue;

  if (lineNum === 1886) { newLines.push('      <ServicesGridSection />'); continue; }
  if (lineNum > 1886 && lineNum <= 1965) continue;

  if (lineNum === 1967) { newLines.push('      <PortfolioSection />'); continue; }
  if (lineNum > 1967 && lineNum <= 2232) continue;

  if (lineNum === 2234) { newLines.push('      <CaseStudiesSection />'); continue; }
  if (lineNum > 2234 && lineNum <= 2651) continue;

  if (lineNum === 2742) { newLines.push('      <BlogSection />'); continue; }
  if (lineNum > 2742 && lineNum <= 3132) continue;

  if (lineNum === 3143) { newLines.push('      <FinalCTASection />'); continue; }
  if (lineNum > 3143 && lineNum <= 3351) continue;

  if (lineNum === 3353) { newLines.push('      <ContactFormSection />'); continue; }
  if (lineNum > 3353 && lineNum <= 3578) continue;

  // If none of the above, keep the line
  newLines.push(lines[i]);
}

fs.writeFileSync('src/components/generated/LandingPage.tsx', newLines.join('\n'), 'utf8');
console.log('LandingPage.tsx refactored successfully!');
