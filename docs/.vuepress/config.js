const { config } = require('vuepress-theme-hope')
const navBarConfig = require('./nav-bar')
const sideBarConfig = require('./side-bar')

module.exports = config({
  title: `SunSeekerX's Notebook`,
  description:
    'Javascript、HTML、CSS、Android、iOS、Flutter、NPM、NodeJS、Vue、React、Uni-app、JAVA、Kotlin、NodeJS、Golang、Linux、Docker、Mysql、Solidity、NFT、ETH、BNB、BTC、Windows、Mac、Power shell、zsh、Nginx、Git、Proxy、刷机、黑苹果、Adobe',
  head: [
    // 谷歌分析 https://v1-doc.yoouu.cn/
    [
      'script',
      {
        type: 'text/javascript',
        async: 'async',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-WCYE3ZF8Z7',
      },
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-WCYE3ZF8Z7');
      `,
    ],
  ],
  themeConfig: {
    hostname: 'https://v1-doc.yoouu.cn',
    nav: navBarConfig,
    sidebar: sideBarConfig,
    iconPrefix: 'fas fa-',
    baseLang: 'zh-CN',
    author: 'SunSeekerX',
    footer: {
      display: true,
    },
    blog: false,
    pwa: true,
    // algolia: {
    //   apiKey: '096b749333c9e2a49cff2b30a786dc6c',
    //   indexName: 'sunseekerx',
    // },
    algoliaType: 'full',
    comment: {
      type: 'valine',
      appId: 'KwMbVerMPAH4oclxQ5LtCLPR-gzGzoHsz',
      appKey: '13eOI19EMGKKtQepMDxLIn9u',
    },
    repo: 'https://github.com/SunSeekerX/v1-doc.yoouu.cn',
    editLinks: false,
    repoDisplay: true,
  },
  plugins: [
    [
      '@mr-hope/comment',
      {
        type: 'valine',
        author: 'SunSeekerX',
        appId: 'KwMbVerMPAH4oclxQ5LtCLPR-gzGzoHsz',
        appKey: '13eOI19EMGKKtQepMDxLIn9u',
      },
    ],
    [
      'md-enhance',
      {
        enableAll: true,
      },
    ],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  shouldPrefetch: false,
})
