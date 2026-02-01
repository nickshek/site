#!/usr/bin/env node

/**
 * Migrate Sculpin blog posts to VuePress format
 * 
 * This script:
 * 1. Reads all markdown files from source/_posts
 * 2. Converts frontmatter format (if needed)
 * 3. Copies to docs/posts/ directory
 */

const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../source/_posts');
const TARGET_DIR = path.join(__dirname, '../docs/posts');

// Create target directory if it doesn't exist
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Read all markdown files from source/_posts
const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} blog posts to migrate...\n`);

// Create posts index
let postsIndex = '# 文章列表\n\n';
postsIndex += '## 所有文章\n\n';

const postsByYear = {};

files.forEach((file, index) => {
  const sourcePath = path.join(SOURCE_DIR, file);
  const targetPath = path.join(TARGET_DIR, file);
  
  // Read file content
  let content = fs.readFileSync(sourcePath, 'utf-8');
  
  // Extract date from filename (YYYY-MM-DD-title.md)
  const dateMatch = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
  
  if (dateMatch) {
    const [, year, month, day, slug] = dateMatch;
    const date = `${year}-${month}-${day}`;
    
    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    
    if (frontmatterMatch) {
      const [, frontmatter, body] = frontmatterMatch;
      
      // Extract title from frontmatter
      const titleMatch = frontmatter.match(/title:\s*(.+)/);
      const title = titleMatch ? titleMatch[1].trim() : slug;
      
      // Extract categories
      const categoriesMatch = frontmatter.match(/categories:\s*\n([\s\S]*?)(?:\n\w|$)/);
      let tags = [];
      if (categoriesMatch) {
        const categoriesBlock = categoriesMatch[1];
        const categoryLines = categoriesBlock.split('\n').filter(line => line.trim().startsWith('-'));
        tags = categoryLines.map(line => line.replace(/^[\s-]+/, '').trim());
      }
      
      // Create new frontmatter for VuePress
      let newFrontmatter = '---\n';
      newFrontmatter += `title: ${title}\n`;
      newFrontmatter += `date: ${date}\n`;
      if (tags.length > 0) {
        newFrontmatter += `tags:\n`;
        tags.forEach(tag => {
          newFrontmatter += `  - ${tag}\n`;
        });
      }
      newFrontmatter += '---\n';
      
      // Combine new frontmatter with body
      content = newFrontmatter + '\n' + body.trim() + '\n';
      
      // Track posts by year
      if (!postsByYear[year]) {
        postsByYear[year] = [];
      }
      postsByYear[year].push({
        date,
        title,
        file,
        tags
      });
    }
  }
  
  // Write to target
  fs.writeFileSync(targetPath, content);
  
  console.log(`✓ Migrated: ${file}`);
});

// Generate posts index (sorted by year, newest first)
const years = Object.keys(postsByYear).sort((a, b) => b - a);

years.forEach(year => {
  postsIndex += `\n### ${year}\n\n`;
  
  // Sort posts by date (newest first)
  const posts = postsByYear[year].sort((a, b) => b.date.localeCompare(a.date));
  
  posts.forEach(post => {
    postsIndex += `- [${post.title}](./${post.file}) - ${post.date}`;
    if (post.tags.length > 0) {
      postsIndex += ` \`${post.tags.join('` `')}\``;
    }
    postsIndex += '\n';
  });
});

// Write posts index
fs.writeFileSync(path.join(TARGET_DIR, 'README.md'), postsIndex);

console.log(`\n✅ Migration complete!`);
console.log(`   Migrated ${files.length} posts to ${TARGET_DIR}`);
console.log(`   Created posts index at ${path.join(TARGET_DIR, 'README.md')}`);
