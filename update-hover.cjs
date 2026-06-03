const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');
content = content.replace(/\/\* Global Picture Hover Effect for Landing Page \*\/[\s\S]*?transform: scale\(1\.05\);\s*\}/, '');

const newCss = `
/* Global Picture Hover Effect for Landing Page */
.landing-page img:not(.logo-img):not(.value-icon):not(.clients-marquee-img):not(.hero-glow):not(.hero-robot) {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
}
.landing-page img:not(.logo-img):not(.value-icon):not(.clients-marquee-img):not(.hero-glow):not(.hero-robot):hover {
  transform: scale(1.05) !important;
  z-index: 10;
}
`;
fs.writeFileSync('src/index.css', content.trim() + '\n\n' + newCss.trim() + '\n');
console.log('Updated CSS with !important');
