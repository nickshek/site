import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nick Shek\'s Homepage',
  description: 'Nick Shek\'s Blog',

  base: '/',

  bundler: viteBundler(),

  theme: hopeTheme({
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
    
    aside: false,
    
    editLink: false,
    
    lastUpdated: true,
    
    contributors: false,

    blog: {
      description: 'Nick Shek\'s Blog',
      intro: '/',
      medias: {
        GitHub: 'https://github.com/nickshek',
      },
      excerptLength: 0,
    },

    plugins: {
      blog: {
        excerptLength: 999999,
      },
      
      comment: {
        provider: 'Giscus',
        repo: 'nickshek/nickshek.github.io',
        repoId: 'MDEwOlJlcG9zaXRvcnk1NTAyMjg5Nw==',
        category: 'Announcements',
        categoryId: 'DIC_kwDOA0eVMc4C17Nv',
        mapping: 'pathname',
        strict: false,
        reactionsEnabled: true,
        inputPosition: 'top',
        lightTheme: 'light',
        darkTheme: 'dark',
        lazyLoading: true,
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
