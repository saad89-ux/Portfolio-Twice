const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function mapAlphaToTokenSuffix(alpha) {
  const a = parseFloat(alpha);
  if (a < 0.15) return 'soft';
  if (a < 0.28) return 'medium';
  return 'strong';
}

function processContent(content, filePath) {
  let newContent = content;
  
  // CYANS -> BRAND-500
  const cyanHexes = /#(00c2ff|00e0ff|00e5ff)/gi;
  newContent = newContent.replace(cyanHexes, 'var(--brand-500)');
  
  const cyanRgbas = /rgba\(\s*0\s*,\s*194\s*,\s*255\s*,\s*([0-9.]+)\s*\)/g;
  newContent = newContent.replace(cyanRgbas, (match, alpha) => {
    return `var(--brand-500-${mapAlphaToTokenSuffix(alpha)})`;
  });

  // PURPLE / VIOLET -> BRAND-400
  const purpleHexes = /#(a855f7|9168ff|9333ea|8b5cf6|7c3aed|6366f1)/gi;
  newContent = newContent.replace(purpleHexes, 'var(--brand-400)');
  
  const purpleRgbas = /rgba\(\s*(168\s*,\s*85\s*,\s*247|147\s*,\s*51\s*,\s*234|124\s*,\s*58\s*,\s*237|139\s*,\s*92\s*,\s*246|79\s*,\s*70\s*,\s*229)\s*,\s*([0-9.]+)\s*\)/g;
  newContent = newContent.replace(purpleRgbas, (match, rgb, alpha) => {
    return `var(--brand-400-${mapAlphaToTokenSuffix(alpha)})`;
  });

  // BLUE -> BRAND-600
  const blueHexes = /#(0a84ff|3b82f6|1a73ff|78b9ff)/gi;
  newContent = newContent.replace(blueHexes, 'var(--brand-600)');
  
  const blueRgbas = /rgba\(\s*(10\s*,\s*132\s*,\s*255|59\s*,\s*130\s*,\s*246|89\s*,\s*176\s*,\s*255)\s*,\s*([0-9.]+)\s*\)/g;
  newContent = newContent.replace(blueRgbas, (match, rgb, alpha) => {
    return `var(--brand-600-${mapAlphaToTokenSuffix(alpha)})`;
  });

  // Handle flat gradients that became var(--brand-500), var(--brand-500)
  // E.g. linear-gradient(90deg, var(--brand-500) 0%, var(--brand-500) 100%)
  // or var(--brand-500), var(--brand-500)
  const flatGradient = /(linear-gradient\([^,]+,\s*)var\(--brand-500\)([^,]*,\s*)var\(--brand-500\)/g;
  newContent = newContent.replace(flatGradient, '$1var(--brand-500)$2var(--brand-600)');

  // Also catch instances where fallback CSS variables were used like var(--accent-blue, #00c2ff)
  // This might have become var(--accent-blue, var(--brand-500))
  const accentBlueVar = /var\(--accent-blue,\s*var\(--brand-500\)\)/g;
  newContent = newContent.replace(accentBlueVar, 'var(--brand-500)');
  
  return newContent;
}

let modifiedFiles = 0;

walkDir(srcDir, (filePath) => {
  if (!/\.(tsx|ts|jsx|js)$/.test(filePath)) return;
  const originalContent = fs.readFileSync(filePath, 'utf8');
  const newContent = processContent(originalContent, filePath);
  if (originalContent !== newContent) {
    fs.writeFileSync(filePath, newContent);
    modifiedFiles++;
    console.log('Modified:', path.relative(srcDir, filePath));
  }
});

console.log(`Finished replacing colors. ${modifiedFiles} files modified.`);
