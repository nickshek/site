import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-HK',
  title: 'Nick Shek',
  description: 'Nick Shek 的個人部落格',

  // Build output directory
  outDir: '.vitepress/dist',

  // Theme configuration
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '關於', link: '/about/' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '所有文章',
          items: [
            { text: '文章列表', link: '/posts/' }
          ]
        }
      ]
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
    lineNumbers: true
  }
})
