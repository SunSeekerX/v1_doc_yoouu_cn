/**
 * @name: config.js
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-10-13 15:41:04
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
    nav: [
      // Guide
      { text: 'Guide', link: '/guide/' },
      // Basic
      {
        text: 'Basic',
        items: [
          {
            text: 'Resource',
            link: '/common/resource',
          },
          { text: 'Git commands', link: '/common/git' },
          { text: 'RegExp', link: '/common/regexp' },
          { text: 'IDE', link: '/common/ide' },
          { text: 'Other', link: '/common/other' },
          {
            text: 'Learn',
            items: [
              { text: 'Git', link: '/common/coding/git' },
              { text: 'Node.js', link: '/common/coding/nodejs' },
              { text: 'React', link: '/common/coding/react' },
            ],
          },
          {
            text: 'Others',
            items: [
              { text: 'Jenkins', link: '/common/jenkins' },
              { text: 'Scripts', link: '/common/other/script' },
              { text: 'Markdown', link: '/common/other/markdown' },
            ],
          },
          {
            text: 'Troubleshooting',
            items: [{ text: 'PowerShell', link: '/common/power-shell' }],
          },
        ],
      },
      // Frontend
      {
        text: 'Frontend',
        items: [
          {
            text: 'Basic',
            items: [
              { text: 'Html', link: '/front-end/html' },
              { text: 'Css', link: '/front-end/css' },
              { text: 'JavaScript', link: '/front-end/javascript' },
            ],
          },
          {
            text: 'Skills',
            items: [
              { text: 'Npm', link: '/front-end/npm' },
              { text: 'Vue', link: '/front-end/vue' },
              { text: 'Uni-app', link: '/front-end/uni-app' },
              {
                text: 'Flutter',
                link: '/front-end/flutter',
              },
              {
                text: 'React Native',
                link: '/front-end/react-native',
              },
            ],
          },
          {
            text: 'Others',
            items: [
              {
                text: 'javascript-obfuscator',
                link: '/front-end/javascript-obfuscator',
              },
            ],
          },
        ],
      },
      // Backend
      {
        text: 'Backend',
        items: [
          { text: 'Linux', link: '/back-end/linux' },
          {
            text: 'NestJS',
            link: '/back-end/nestjs/',
          },
          { text: 'SQL', link: '/back-end/sql' },
          { text: 'Database', link: '/back-end/database' },
          { text: 'Docker', link: '/back-end/docker' },
          { text: 'Redis', link: '/back-end/redis' },
          {
            text: 'Java',
            items: [
              { text: 'Basic', link: '/back-end/java' },
              { text: 'Mybatis', link: '/back-end/java/mybatis' },
              { text: 'Spring', link: '/back-end/java/spring' },
              { text: 'Spring-MVC', link: '/back-end/java/spring-mvc' },
            ],
          },
        ],
      },
      // 玩机
      {
        text: 'Interest',
        items: [
          { text: 'Phone', link: '/interest/phone', },
          { text: 'Mi Electric Scooter - m365', link: '/interest/scooter', },
        ],
        
      },
      // Open source
      {
        text: 'Open source',
        items: [
          { text: 'Vue simple admin', link: '/vsa/' },
          { text: 'Web storage apis', link: '/web-storage-apis/' },
          {
            text: 'Ghost theme',
            items: [
              {
                text: 'Ghost-Theme-Frenemy',
                link: 'https://github.com/SunSeekerX/Ghost-Theme-Frenemy',
              },
            ],
          },
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
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'],
  },
})
