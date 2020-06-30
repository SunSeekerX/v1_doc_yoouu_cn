/**
 * @name: config.js
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-30 14:13:56
 */

const resolve = require('vuepress-theme-hope/resolve')

module.exports = resolve({
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

    // 百度统计
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ce2c1d889cd6ba62b6b1027b18f1afd4";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],

    // 谷歌分析
    [
      'script',
      {
        async: 'async',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-160614210-1',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-160614210-1');
      `,
    ],
  ],

  themeConfig: {
    editLinks: false,

    nav: [
      // Guide
      { text: '指南', link: '/guide/' },

      // 基本
      {
        text: '基本',
        items: [
          {
            text: '资源',
            link: '/common/resource',
          },
          { text: 'Git', link: '/common/git' },
          { text: '正则表达式', link: '/common/regexp' },
          { text: '编辑器', link: '/common/ide' },
          { text: '其他', link: '/common/other' },
          {
            text: '学习计划',
            items: [
              { text: 'Git快速入门', link: '/common/coding/git' },
              { text: 'Node.js 学习计划', link: '/common/coding/nodejs' },
              { text: 'React 学习计划', link: '/common/coding/react' },
            ],
          },
          {
            text: '其他技术',
            items: [
              { text: 'Jenkins', link: '/common/jenkins' },
              { text: '脚本', link: '/common/other/script' },
              { text: 'Markdown示例', link: '/common/other/markdown' },

            ],
          },
          {
            text: '常见问题',

            items: [
              { text: 'PowerShell', link: '/common/power-shell' },
              { text: '更新日志', link: '/common/changelog' },
            ],
          },
        ],
      },

      // 前端
      {
        text: '前端',
        items: [
          {
            text: 'javascript-obfuscator',
            link: '/front-end/javascript-obfuscator',
          },

          {
            text: '基础',
            items: [
              { text: 'Html', link: '/front-end/html' },
              { text: 'Css', link: '/front-end/css' },
              { text: 'JavaScript', link: '/front-end/javascript' },
            ],
          },

          {
            text: '框架',
            items: [
              { text: 'Npm', link: '/front-end/npm' },
              { text: 'Uni-app', link: '/front-end/uni-app' },
              { text: 'Vue', link: '/front-end/vue' },
            ],
          },
        ],
      },

      // 后端
      {
        text: '后端',
        items: [
          { text: 'NestJS', link: '/back-end/nestjs/nestjs-framework-tutorial-1' },
          { text: 'SQL', link: '/back-end/sql' },
          { text: '数据库', link: '/back-end/database' },
          { text: 'Java', link: '/back-end/java' },
          { text: 'Docker', link: '/back-end/docker' },
          { text: 'Redis', link: '/back-end/redis' },
        ],
      },

      // 理财
      {
        text: '理财',
        items: [
          { text: '理财', link: '/financial/' },
          { text: '法币交易', link: '/financial/trade' },
          { text: '币币交易', link: '/financial/exchange' },
          { text: '合约交易', link: '/financial/contract' },
        ],
        link: '',
      },

      // 玩机
      {
        text: '玩机',
        link: '/wangji/',
      },

      // 关于我
      {
        text: '关于我',
        items: [
          // { text: 'me', link: '/me/about-me' },
          { text: '看过的书', link: '/me/book' },
          { text: '看过的电影', link: '/me/movie' },
          { text: '看过的电视剧', link: '/me/teleplay' },
        ],
      },

      // 开源库
      {
        text: '开源库',
        items: [
          { text: 'vue-simple-admin', link: '/vsa/' },
          { text: 'web-storage-apis', link: '/web-storage-apis/' },
          {
            text: '博客主题',
            items: [
              {
                text: 'Ghost-Theme-Frenemy',
                link: 'https://github.com/SunSeekerX/Ghost-Theme-Frenemy',
              },
              {
                text: 'Doc-Github',
                link: 'https://github.com/SunSeekerX/sunseekerx',
              },
            ],
          },
          // { text: 'Vue', link: '/front-end/vue/' },
        ],
      },
    ],

    sidebar: 'auto',

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

    repo: 'https://github.com/SunSeekerX/sunseekerx',

    repoDisplay: false,

    breadcrumb: false,

    hostname: 'https://sunseekerx.yoouu.cn/',
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

  markdown: {
    lineNumbers: true,

    extractHeaders: ['h2', 'h3', 'h4'],
  },
})
