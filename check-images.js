import fs from 'fs';
import path from 'path';

const blogDir = './src/content/blog';
const imagePattern = /!\[.*?\]\((.*?)\)|heroImage:\s*([^\n]+)/g;
const publicImages = new Set(fs.readdirSync('./public').filter(file => 
  file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.svg')
));

function checkImagesInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(imagePattern)];
  const issues = [];

  matches.forEach(match => {
    // Check both markdown image and frontmatter heroImage
    const imagePath = (match[1] || match[2] || '').trim().replace(/['"\s]/g, '');
    if (!imagePath) return;

    // Skip external URLs
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return;

    // Remove leading slash and /blog prefix
    const cleanPath = imagePath.replace(/^\/+/, '').replace(/^blog\//, '');

    // Check if image exists in public directory
    if (!publicImages.has(cleanPath)) {
      issues.push(`Missing image: ${imagePath}`);
    }
  });

  if (issues.length > 0) {
    console.log(`\nFile: ${path.relative('.', filePath)}`);
    issues.forEach(issue => console.log(`  ${issue}`));
  }
}

function checkAllPosts(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkAllPosts(fullPath);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      checkImagesInFile(fullPath);
    }
  });
}

checkAllPosts(blogDir);
