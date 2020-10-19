/**
 * @name: config.js
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-10-19 11:57:57
 */

const { config } = require('vuepress-theme-hope')
const navBarConfig  = require('./navBar')
const sideBarConfig = require("./sideBar");

module.exports = config({
  base: '/',
  title: 'SunSeekerX',
  description: 'This road is just beginning ~',
  head: [
    // favicon: 网站图标
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    // 百度统计 sunseekerx.yoouu.cn
    // [
    //   'script',
    //   {},
    //   `
    //   var _hmt = _hmt || [];
    //   (function() {
    //     var hm = document.createElement("script");
    //     hm.src = "https://hm.baidu.com/hm.js?ce2c1d889cd6ba62b6b1027b18f1afd4";
    //     var s = document.getElementsByTagName("script")[0];
    //     s.parentNode.insertBefore(hm, s);
    //   })();
    //   `,
    // ],
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
    // 谷歌分析 sunseekerx.yoouu.cn
    // [
    //   'script',
    //   {
    //     async: 'async',
    //     src: 'https://www.googletagmanager.com/gtag/js?id=UA-160614210-1',
    //   },
    // ],
    // [
    //   'script',
    //   {},
    //   `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());

    //     gtag('config', 'UA-160614210-1');
    //   `,
    // ],
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
  extraWatchFiles: [".vuepress/navBar.js", ".vuepress/sideBar.js"],
  themeConfig: {
    // displayAllHeaders: true, // 默认值：false
    nav: navBarConfig ,
    sidebar: sideBarConfig,
    // lastUpdated: 'Last Updated',
    // vuepress-theme-hope 主题配置
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
    comment: {
      type: 'valine',
      appId: 'KwMbVerMPAH4oclxQ5LtCLPR-gzGzoHsz',
      appKey: '13eOI19EMGKKtQepMDxLIn9u',
    },
    repo: 'https://github.com/SunSeekerX/doc.yoouu.cn',
    editLinks: false,
    // 是否在导航栏右侧显示仓库链接，默认为 `true`
    repoDisplay: true,
    hostname: 'https://doc.yoouu.cn/',
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
  ],
  mdEnhance: {
    enableAll: true,
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'],
  },
})
