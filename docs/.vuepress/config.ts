import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-HK',
  title: 'Nick Shek',
  description: 'Nick Shek 的個人部落格',

  base: '/',

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      { text: '首頁', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '關於', link: '/about/' },
    ],
    
    sidebar: 'heading',
    
    repo: 'nickshek/site',
    
    editLink: false,
    
    lastUpdated: true,
    lastUpdatedText: '最後更新',
    
    contributors: false,
  }),
})
