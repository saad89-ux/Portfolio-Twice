const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/generated/LandingPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const componentsToExport = [
  'AboutSection',
  'CompanyIntroSection',
  'TrustSection',
  'JourneyTimelineSection',
  'MissionVisionSection',
  'CoreValuesSection',
  'WhyTrustUsSection',
  'TeamSection',
  'TrustedBrandsSection',
  'ResultsImpactSection',
  'TestimonialsSection'
];

componentsToExport.forEach(comp => {
  const regex = new RegExp(`^const ${comp}`, 'gm');
  content = content.replace(regex, `export const ${comp}`);
});

fs.writeFileSync(filePath, content);
console.log('Exports added successfully.');
