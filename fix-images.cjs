const fs = require('fs');
const path = require('path');

const publicImgPath = path.resolve(__dirname, 'public/images');
const appJsxPath = path.resolve(__dirname, 'src/App.jsx');

// Rename files
if (fs.existsSync(publicImgPath)) {
    const files = fs.readdirSync(publicImgPath);
    files.forEach(file => {
        if (file.includes(' ')) {
            const newName = file.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.-]/g, '');
            fs.renameSync(path.join(publicImgPath, file), path.join(publicImgPath, newName));
        }
    });
}

// Update App.jsx content
let appContent = fs.readFileSync(appJsxPath, 'utf8');

// The original strings have spaces, like: WhatsApp Image 2026-03...
// We can just regex replace spaces in the src attributes for images.
appContent = appContent.replace(/src="\/images\/([^"]+)"/g, (match, filename) => {
    const newName = filename.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.-]/g, '');
    return `src="/images/${newName}"`;
});

// Also fix the setInterval carousel bug for React StrictMode
// By storing them in a global array and clearing them at the start of useEffect
appContent = appContent.replace(
    /setTimeout\(\(\) => \{[\s\S]*?\/\/ Setup GSAP/, 
    `setTimeout(() => {\n      // Fix React StrictMode multiple timers by defining a global cleanup or clearing\n      if (window.carouselTimers) {\n        window.carouselTimers.forEach(t => clearInterval(t));\n      }\n      window.carouselTimers = [];\n\n      // Setup GSAP`
);

appContent = appContent.replace(
    /autoTimer = setInterval\(next, autoAdvanceMs\);/,
    `autoTimer = setInterval(next, autoAdvanceMs);\n                if (window.carouselTimers) window.carouselTimers.push(autoTimer);`
);

// We need to fix the image clipping for '.expert-photo' sizing and sliding
// In App.css, let's inject a fix into App.css or just fix App.jsx's styling directly where needed. Wait, we can edit App.css directly next.

fs.writeFileSync(appJsxPath, appContent, 'utf8');
console.log('Images and script updated.');
