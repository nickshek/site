import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// Function to get blog posts for sidebar
function getBlogPosts() {
  try {
    const postsDir = path.resolve('./docs/posts')
    const files = fs.readdirSync(postsDir).filter(file => 
      file.endsWith('.md') && 
      !file.includes('README') && 
      !file.includes('index')
    )
    
    return files.map(file => {
      const fileName = path.basename(file, '.md')
      
      // Extract date from filename (format: YYYY-MM-DD-title)
      const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/)
      const date = dateMatch ? dateMatch[1] : ''
      
      // Extract title from filename
      const title = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' ')
      
      return {
        text: title,
        link: `/posts/${fileName}`,
        date: date
      }
    }).sort((a, b) => b.date.localeCompare(a.date)) // Sort by date, newest first
  } catch (error) {
    console.log('Could not read posts directory:', error.message)
    return []
  }
}

export default defineConfig({
  lang: 'zh-HK',
  title: 'Nick Shek',
  description: 'Nick Shek 的個人部落格 - 技術分享與筆記',
  head: [
    ['meta', { name: 'author', content: 'Nick Shek' }],
    ['meta', { name: 'keywords', content: '部落格,技術分享,程式設計,開發筆記' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // Build output directory
  outDir: '.vitepress/dist',
  
  // Clean URLs
  cleanUrls: true,

  // Vite configuration for enhanced hot reload
  vite: {
    server: {
      hmr: {
        port: 24678,
      },
      watch: {
        usePolling: true,
        interval: 100
      }
    },
    optimizeDeps: {
      include: ['vue']
    }
  },

  // Theme configuration
  themeConfig: {
    nav: [
      { text: '文章', link: '/' },
    ],

    sidebar: {
      '/': [
        {
          text: '文章',
          link: '/'
        },
        {
          text: '最新文章',
          collapsed: false,
          items: getBlogPosts().slice(0, 10) // Show latest 10 posts
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜尋',
            buttonAriaLabel: '搜尋'
          },
          modal: {
            noResultsText: '無法找到相關結果',
            resetButtonTitle: '清除查詢條件',
            footer: {
              selectText: '選擇',
              navigateText: '切換',
              closeText: '關閉'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nickshek/site' }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2014-2026 Nick Shek'
    },

    lastUpdated: {
      text: '最後更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '目錄'
    },

    returnToTopLabel: '返回頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '深色模式',
  },

  // Markdown configuration
  markdown: {
    lineNumbers: true,
    toc: { level: [1, 2, 3] },
    config: (md) => {
      // Enable hot reload for posts changes
      md.use((md) => {
        const render = md.render
        md.render = function (...args) {
          return render.call(this, ...args)
        }
      })
    }
  },

  // Watch additional files for hot reload
  buildEnd: () => {
    // This helps with hot reload detection
  },

  // Sitemap
  sitemap: {
    hostname: 'https://nickshek.github.io'
  },

  // RSS Feed
  buildEnd: (config) => {
    // You can add RSS generation logic here if needed
  }
})
