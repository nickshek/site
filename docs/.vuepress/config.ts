import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'

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
