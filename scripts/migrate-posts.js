import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../../output');
const TARGET_DIR = path.join(__dirname, '../src/content/blog');

async function migratePost(postDir) {
    const postName = path.basename(postDir);
    const sourcePath = path.join(SOURCE_DIR, postName);
    const targetPath = path.join(TARGET_DIR, postName);
    
    // Read the markdown file
    const mdContent = await fs.readFile(path.join(sourcePath, 'index.md'), 'utf-8');
    
    // Copy the post directory with all its contents (including images)
    await fs.copy(sourcePath, targetPath);
    
    console.log(`Migrated post: ${postName}`);
}

async function migratePosts() {
    try {
        // Create target directory if it doesn't exist
        await fs.ensureDir(TARGET_DIR);
        
        // Get all post directories
        const posts = await fs.readdir(SOURCE_DIR);
        
        // Migrate each post
        for (const post of posts) {
            const sourcePath = path.join(SOURCE_DIR, post);
            const stats = await fs.stat(sourcePath);
            
            if (stats.isDirectory()) {
                await migratePost(post);
            }
        }
        
        console.log('Migration completed successfully!');
    } catch (error) {
        console.error('Error during migration:', error);
    }
}

migratePosts();
