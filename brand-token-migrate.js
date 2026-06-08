const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'src');
const extensions = ['.tsx', '.ts', '.css'];
const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      walk(full);
    } else if (extensions.includes(path.extname(full))) {
      files.push(full);
    }
  }
}

walk(root);

const replacements = [
  { search: /#00c2ff/gi, replace: 'var(--brand-500)' },
  { search: /#0a84ff/gi, replace: 'var(--brand-500)' },
  { search: /#0b5bff/gi, replace: 'var(--brand-600)' },
  { search: /#66a6ff/gi, replace: 'var(--brand-200)' },
  { search: /#6da7ff/gi, replace: 'var(--brand-200)' },
  { search: /#8cb4ff/gi, replace: 'var(--brand-100)' },
  { search: /#9168ff/gi, replace: 'var(--brand-400)' },
  { search: /rgba\(0,194,255,/gi, replace: 'rgba(255,216,0,' },
  { search: /rgba\(10,132,255,/gi, replace: 'rgba(255,216,0,' },
  { search: /rgba\(145,104,255,/gi, replace: 'rgba(255,216,0,' },
  { search: /rgba\(147,51,234,/gi, replace: 'rgba(255,216,0,' },
  { search: /var\(--accent-blue,[^\)]+\)/gi, replace: 'var(--brand-500)' },
];

const changedFiles = [];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  for (const { search, replace } of replacements) {
    content = content.replace(search, replace);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles.push(file.replace(__dirname + path.sep, ''));
  }
}

if (changedFiles.length === 0) {
  console.log('No files changed.');
} else {
  console.log(`Modified ${changedFiles.length} files:`);
  changedFiles.forEach((f) => console.log(f));
}
