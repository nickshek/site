import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to generate posts manifest
function generatePostsManifest() {
  const postsDir = path.join(__dirname, '../posts')
  const publicDir = path.join(__dirname, '../public')
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  try {
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
    
    const posts = files.map(filename => {
      const filePath = path.join(postsDir, filename)
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Simple frontmatter parsing
      const frontmatterMatch = content.match(/^---\s*\n(.*?)\n---\s*\n/s)
      const frontmatter = {}
      
      if (frontmatterMatch) {
        const frontmatterText = frontmatterMatch[1]
        frontmatterText.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(':')
          if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim()
            if (key.trim() === 'tags' && value.includes('-')) {
              // Parse tags array
              frontmatter[key.trim()] = content
                .match(/tags:\s*\n((?:\s*-\s*.+\n?)*)/)?.[1]
                ?.split('\n')
                .map(line => line.replace(/^\s*-\s*/, '').trim())
                .filter(tag => tag.length > 0) || []
            } else {
              frontmatter[key.trim()] = value
            }
          }
        })
      }
      
      // Extract date from frontmatter or filename
      let date = frontmatter.date
      if (!date) {
        const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/)
        if (dateMatch) {
          date = dateMatch[1]
        }
      }
      
      // Extract title
      let title = frontmatter.title
      if (!title) {
        title = filename
          .replace(/^\d{4}-\d{2}-\d{2}[-\s]*/, '')
          .replace(/\.md$/, '')
      }
      
      return {
        path: `/article/${filename.replace(/\.md$/, '.html')}`,
        title: title,
        date: date || new Date().toISOString().split('T')[0],
        tags: frontmatter.tags || [],
        filename: filename
      }
    })
    
    // Write the manifest file
    const manifestPath = path.join(publicDir, 'posts-manifest.json')
    fs.writeFileSync(manifestPath, JSON.stringify(posts, null, 2))
    
    console.log(`Generated posts manifest with ${posts.length} posts`)
    return posts
  } catch (error) {
    console.error('Error generating posts manifest:', error)
    return []
  }
}

// Generate the manifest during build
generatePostsManifest()

export default defineUserConfig({
  lang: 'zh-HK',
  title: 'Nick Shek',
  description: 'Nick Shek\'s Blog',

  base: '/',

  bundler: viteBundler(),

  theme: hopeTheme({
    lang: "en-US",
    hostname: 'https://nickshek.github.io',
    
    author: {
      name: 'Nick Shek',
      url: 'https://nickshek.github.io',
    },

    iconAssets: 'fontawesome-with-brands',

    logo: null,

    repo: 'nickshek/site',

    docsDir: 'docs',

    navbar: [
      { text: '文章', link: '/' },
    ],
    
    sidebar: false,
    
    editLink: false,
    
    lastUpdated: true,
    
    contributors: false,

    blog: {
      description: 'Nick Shek\'s Blog',
      intro: '/',
      medias: {
        GitHub: 'https://github.com/nickshek',
      },
    },

    plugins: {
      blog: true,
      
      comment: {
        provider: 'None',
      },

      copyCode: {},
      
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em')
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommended',
                }
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
      },
    },
  }),
})