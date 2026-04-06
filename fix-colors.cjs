const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /accent-teal/g, to: 'accent-gold' },
  { from: /gradient-teal/g, to: 'gradient-gold' },
  { from: /#00D4AA/gi, to: '#F5A623' },
  { from: /text-teal/g, to: 'text-gold' },
  { from: /bg-teal/g, to: 'bg-gold' },
  { from: /border-teal/g, to: 'border-gold' }
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const targetDir = 'd:/projects/web/grownk/src';

walkDir(targetDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    if (content !== original) {
      console.log(`Updated: ${filePath}`);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
