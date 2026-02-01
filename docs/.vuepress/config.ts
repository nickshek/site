import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-HK',
  title: 'Nick Shek',
  description: 'Nick Shek\'s Blog',

  base: '/',

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      { text: '文章', link: '/' },
    ],
    
    sidebar: 'heading',
    
    repo: 'nickshek/site',
    
    editLink: false,
    
    lastUpdated: true,
    lastUpdatedText: '最後更新',
    
    contributors: false,
  }),
})
