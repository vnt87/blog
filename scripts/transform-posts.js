import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

async function transformPost(postDir) {
    const indexPath = path.join(BLOG_DIR, postDir, 'index.md');
    
    try {
        // Read the markdown file
        const content = await fs.readFile(indexPath, 'utf-8');
        const { data, content: bodyContent } = matter(content);
        
        // Extract first image as hero image if available
        const heroImageMatch = bodyContent.match(/!\[.*?\]\((.*?)\)/);
        const heroImage = heroImageMatch ? heroImageMatch[1] : '';
        
        // Create new frontmatter
        const newFrontmatter = {
            title: data.title || '',
            description: (bodyContent.split('\n')[0] || '').replace(/[!#\[\]]/g, '').trim() || data.title || '',
            pubDate: data.date || new Date().toISOString(),
            updatedDate: data.modified || new Date().toISOString(),
            heroImage: heroImage || '',
            // Store original metadata as custom fields
            categories: data.categories || [],
            tags: data.tags || []
        };
        
        // Filter out any undefined values
        Object.keys(newFrontmatter).forEach(key => {
            if (newFrontmatter[key] === undefined) {
                delete newFrontmatter[key];
            }
        });
        
        // Create new content with updated frontmatter
        const newContent = matter.stringify(bodyContent, newFrontmatter);
        
        // Write back to file
        await fs.writeFile(indexPath, newContent);
        console.log(`Transformed post: ${postDir}`);
    } catch (error) {
        console.error(`Error transforming post ${postDir}:`, error);
    }
}

async function transformPosts() {
    try {
        // Get all post directories
        const posts = await fs.readdir(BLOG_DIR);
        
        // Transform each post
        for (const post of posts) {
            const stats = await fs.stat(path.join(BLOG_DIR, post));
            if (stats.isDirectory()) {
                await transformPost(post);
            }
        }
        
        console.log('All posts transformed successfully!');
    } catch (error) {
        console.error('Error during transformation:', error);
    }
}

transformPosts();
