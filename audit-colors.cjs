const fs = require('fs');
const path = require('path');
const dir = 'src/components/generated';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
const colors = new Set();
const bgColors = new Set();
const gradients = new Set();

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  const colorMatches = content.match(/color:\s*['"]([^'"]+)['"]/g);
  if (colorMatches) {
    colorMatches.forEach(m => colors.add(m.split(/['"]/)[1]));
  }
  
  const bgMatches = content.match(/backgroundColor:\s*['"]([^'"]+)['"]/g);
  if (bgMatches) {
    bgMatches.forEach(m => bgColors.add(m.split(/['"]/)[1]));
  }

  const bgShorthandMatches = content.match(/background:\s*['"]([^'"]+)['"]/g);
  if (bgShorthandMatches) {
    bgShorthandMatches.forEach(m => {
      const val = m.split(/['"]/)[1];
      if (val.includes('gradient')) {
        gradients.add(val);
      } else {
        bgColors.add(val);
      }
    });
  }
});

// Also check LandingPage.tsx
const lpContent = fs.readFileSync('src/components/generated/LandingPage.tsx', 'utf8');
[...lpContent.matchAll(/color:\s*['"]([^'"]+)['"]/g)].forEach(m => colors.add(m[1]));
[...lpContent.matchAll(/backgroundColor:\s*['"]([^'"]+)['"]/g)].forEach(m => bgColors.add(m[1]));
[...lpContent.matchAll(/background:\s*['"]([^'"]+)['"]/g)].forEach(m => {
  if (m[1].includes('gradient')) gradients.add(m[1]);
  else bgColors.add(m[1]);
});

console.log('TEXT COLORS:');
console.log(JSON.stringify(Array.from(colors).sort(), null, 2));
console.log('\nBACKGROUND COLORS:');
console.log(JSON.stringify(Array.from(bgColors).sort(), null, 2));
console.log('\nGRADIENTS (To ignore):');
console.log(JSON.stringify(Array.from(gradients).sort(), null, 2));
