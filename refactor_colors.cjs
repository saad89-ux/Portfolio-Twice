const fs = require('fs');
const path = require('path');

const css = `
/* Global Theme Switcher Variables */
:root, .dark {
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(235, 239, 255, 0.7);
  --text-inverse: #080c20;
  
  --bg-primary: rgba(3, 3, 3, 1);
  --bg-card: rgba(16, 18, 43, 0.95);
  --bg-card-alt: rgba(10, 12, 32, 0.92);
  --bg-secondary: rgba(20, 20, 20, 1);
  --border-light: rgba(255, 255, 255, 0.08);
}

.light-theme {
  --text-primary: #111827;
  --text-secondary: #374151;
  --text-muted: #4b5563;
  --text-inverse: #ffffff;
  
  --bg-primary: #ffffff;
  --bg-card: #f9fafb;
  --bg-card-alt: #f3f4f6;
  --bg-secondary: #f3f4f6;
  --border-light: rgba(0, 0, 0, 0.08);
}
`;
fs.appendFileSync('src/index.css', css);

const dir = 'src/components/generated';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.push('LandingPage.tsx');

const replaceMapping = [
  // text-primary
  { regex: /color:\s*['"](?:#FFFFFF|#ffffff|#fff|white|rgba\(255,\s*255,\s*255,\s*1\))['"]/g, val: "color: 'var(--text-primary)'" },
  // text-secondary
  { regex: /color:\s*['"]rgba\(255,\s*255,\s*255,\s*(?:0\.96|0\.95|0\.94|0\.92|0\.9|0\.88|0\.85|0\.82|0\.8|0\.78|0\.75|0\.72|\.75)['"]/g, val: "color: 'var(--text-secondary)'" },
  // text-muted
  { regex: /color:\s*['"](?:rgba\(235,\s*239,\s*255,\s*[0-9.]+?\)|#E6E6E6|#B3B3B2|#666|rgba\(173,\s*183,\s*208,\s*[0-9.]+?\)|rgba\(152,\s*152,\s*154,\s*[0-9.]+?\))['"]/g, val: "color: 'var(--text-muted)'" },
  // text-inverse
  { regex: /color:\s*['"]#080c20['"]/g, val: "color: 'var(--text-inverse)'" },
  
  // bg-primary
  { regex: /background(?:Color)?:\s*['"](?:#030303|#0B0B0B|#141414|#191919|#1A1A1A|#1F1F1F|rgba\(3,\s*3,\s*3,\s*1\))['"]/g, val: "backgroundColor: 'var(--bg-primary)'" },
  // bg-card
  { regex: /background(?:Color)?:\s*['"](?:rgba\(8,\s*12,\s*34,\s*0\.95\)|rgba\(16,\s*18,\s*43,\s*0\.95\)|rgba\(20,\s*20,\s*40,\s*0\.95\)|rgba\(20,\s*20,\s*40,\s*0\.98\)|rgba\(11,\s*18,\s*47,\s*0\.95\))['"]/g, val: "backgroundColor: 'var(--bg-card)'" },
  // bg-card-alt
  { regex: /background(?:Color)?:\s*['"](?:rgba\(10,\s*10,\s*10,\s*0\.98\)|rgba\(10,\s*12,\s*25,\s*0\.96\)|rgba\(10,\s*12,\s*32,\s*0\.92\))['"]/g, val: "backgroundColor: 'var(--bg-card-alt)'" },
  // bg-secondary
  { regex: /background(?:Color)?:\s*['"](?:rgba\(20,\s*20,\s*20,\s*1\)|rgba\(25,\s*25,\s*25,\s*1\))['"]/g, val: "backgroundColor: 'var(--bg-secondary)'" },
  
  // borders
  { regex: /border(?:Color)?:\s*['"]rgba\(255,\s*255,\s*255,\s*(?:0\.02|0\.03|0\.04|0\.05|0\.06|0\.08|0\.1|0\.12)['"]/g, val: "borderColor: 'var(--border-light)'" },
  { regex: /border(?:Top|Bottom|Left|Right):\s*['"]1px\s+solid\s+rgba\(255,\s*255,\s*255,\s*(?:0\.02|0\.03|0\.04|0\.05|0\.06|0\.08|0\.1|0\.12)['"]/g, val: "borderTop: '1px solid var(--border-light)'" }, // Will safely match and we can just use template replace for the specific property if we want, but doing it simpler:
];

// Refined replace for border shorthands
const borderRegex = /(border(?:Top|Bottom|Left|Right)?):\s*['"]1px\s+solid\s+rgba\(255,\s*255,\s*255,\s*(?:0\.02|0\.03|0\.04|0\.05|0\.06|0\.08|0\.1|0\.12)\)['"]/g;

files.forEach(file => {
  const filePath = file === 'LandingPage.tsx' ? path.join(dir, file) : path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  replaceMapping.forEach(mapping => {
    content = content.replace(mapping.regex, mapping.val);
  });
  
  content = content.replace(borderRegex, "$1: '1px solid var(--border-light)'");

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Colors replaced successfully');
