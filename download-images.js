import fs from 'fs';
import path from 'path';
import https from 'https';

const blogDir = './src/content/blog';
const publicDir = './public';
const imagePattern = /!\[.*?\]\((.*?)\)|heroImage:\s*([^\n]+)/g;

// Create images directory if it doesn't exist
if (!fs.existsSync(path.join(publicDir, 'images'))) {
  fs.mkdirSync(path.join(publicDir, 'images'));
}

// Download an image
async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Process a single file
async function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(imagePattern)];
  let updatedContent = content;

  for (const match of matches) {
    const imagePath = (match[1] || match[2] || '').trim().replace(/['"\s]/g, '');
    if (!imagePath) continue;

    // Skip external URLs and already processed images
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/blog-placeholder')) continue;

    // Get the image filename
    const filename = path.basename(imagePath);
    
    // Check if it's an imgur image
    const imgurMatch = filename.match(/^([a-zA-Z0-9]+)\.(jpg|png|gif)$/);
    if (imgurMatch) {
      const imgurUrl = `https://i.imgur.com/${imgurMatch[1]}.${imgurMatch[2]}`;
      const newPath = path.join(publicDir, 'images', filename);
      
      try {
        await downloadImage(imgurUrl, newPath);
        console.log(`Downloaded: ${imgurUrl} -> ${newPath}`);
        // Update the image reference in the content
        updatedContent = updatedContent.replace(/!\[([^\]]*)\]\((?!http|\/)(.*?)\)/g, (match, alt, path) => {
          const imageName = path.split('/').pop();
          return `![${alt}](/blog/images/${imageName})`;
        });
      } catch (err) {
        console.error(`Failed to download ${imgurUrl}:`, err);
        // Use a placeholder image
        const placeholderNum = Math.floor(Math.random() * 5) + 1;
        const placeholderPath = `/blog-placeholder-${placeholderNum}.jpg`;
        updatedContent = updatedContent.replace(imagePath, placeholderPath);
      }
    } else {
      // For non-imgur images, use a placeholder
      const placeholderNum = Math.floor(Math.random() * 5) + 1;
      const placeholderPath = `/blog-placeholder-${placeholderNum}.jpg`;
      updatedContent = updatedContent.replace(imagePath, placeholderPath);
    }
  }

  // Write the updated content back to the file
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated: ${filePath}`);
  }
}

// Process all blog posts
async function processAllPosts(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processAllPosts(fullPath);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      await processFile(fullPath);
    }
  }
}

// Run the script
processAllPosts(blogDir).catch(console.error);
