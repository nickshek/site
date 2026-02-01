import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to extract frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n/s
  const match = content.match(frontmatterRegex)
  
  if (!match) return {}
  
  const frontmatterText = match[1]
  const frontmatter = {}
  
  frontmatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim()
      
      // Handle arrays (tags)
      if (value.includes('-')) {
        frontmatter[key.trim()] = value
          .split('\n')
          .filter(item => item.trim().startsWith('-'))
          .map(item => item.replace('-', '').trim())
          .filter(item => item.length > 0)
      } else {
        frontmatter[key.trim()] = value
      }
    }
  })
  
  return frontmatter
}

// Function to scan the posts directory and generate posts data
function generatePostsData() {
  const postsDir = path.join(__dirname, '../posts')
  
  try {
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
    
    // Log the found files for debugging
    console.log('Found post files:', files)

    const posts = files.map(filename => {
      const filePath = path.join(postsDir, filename)
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Parse frontmatter
      const frontmatter = parseFrontmatter(content)
      
      // Extract date from frontmatter or filename
      let date = frontmatter.date
      if (!date) {
        const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/)
        if (dateMatch) {
          date = dateMatch[1]
        }
      }
      
      // Extract title from frontmatter or filename
      let title = frontmatter.title
      if (!title) {
        title = filename
          .replace(/^\d{4}-\d{2}-\d{2}[-\s]*/, '')
          .replace(/\.md$/, '')
      }
      
      return {
        path: `/posts/${filename.replace(/\.md$/, '.html')}`,
        title: title,
        date: date || new Date().toISOString().split('T')[0],
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        filename: filename
      }
    })
    
    return posts
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

// Generate the posts data
const posts = generatePostsData()

// Export the data
export { posts }