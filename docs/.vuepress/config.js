module.exports = {
  lang: 'zh-HK',
  title: 'Nick Shek',
  description: 'Nick Shek 的個人部落格',

  base: '/',

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '關於', link: '/about/' },
    ],
    
    sidebar: 'auto',
    
    repo: 'nickshek/site',
    repoLabel: 'GitHub',
    
    editLinks: false,
    
    lastUpdated: '最後更新',
    
    smoothScroll: true,
  },
}
