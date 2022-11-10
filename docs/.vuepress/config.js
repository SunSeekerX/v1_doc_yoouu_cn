/**
 * vuepress 配置
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-24 16:22:50
 */

const { config } = require('vuepress-theme-hope')
const navBarConfig = require('./nav-bar')
const sideBarConfig = require('./side-bar')

module.exports = config({
  base: '/',
  title: 'SunSeekerX 的笔记',
  description: 'This road is just beginning ~',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    // 百度统计 doc.yoouu.cn
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?93bcc9d9514b7c6d557275aec42f74e8";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
    // 谷歌分析 doc.yoouu.cn
    [
      'script',
      {
        async: 'async',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-160614210-3',
      },
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-160614210-3');
      `,
    ],
  ],
  extraWatchFiles: ['.vuepress/navBar.js', '.vuepress/sideBar.js'],
  themeConfig: {
    hostname: 'https://doc.yoouu.cn/',
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
    algolia: {
      apiKey: '096b749333c9e2a49cff2b30a786dc6c',
      indexName: 'sunseekerx',
    },
    algoliaType: 'full',
    comment: {
      type: 'valine',
      appId: 'KwMbVerMPAH4oclxQ5LtCLPR-gzGzoHsz',
      appKey: '13eOI19EMGKKtQepMDxLIn9u',
    },
    repo: 'https://github.com/SunSeekerX/doc.yoouu.cn',
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
