/**
 * @name: config.js
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-23 22:30:54
 */

const moment = require('moment')
const resolve = require('vuepress-theme-hope/resolve')

module.exports = resolve({
  base: '/',
  title: 'SunSeekerX',
  description: 'This road is just beginning ~',
  // favicon: 网站图标
  head: [
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
      {
        src: 'https://hm.baidu.com/hm.js?ce2c1d889cd6ba62b6b1027b18f1afd4',
      },
    ],
  ],
  themeConfig: {
    repo: 'SunSeekerX/sunseekerx',
    editLinks: false,
    sidebarDepth: 2,
    nav: [
      { text: '指南', link: '/guide/' },
      {
        text: '基本',
        items: [
          {
            text: '资源',
            link: '/common/resource',
          },
          { text: 'Git', link: '/common/git' },
          { text: '编辑器', link: '/common/ide' },
          { text: '其他', link: '/common/other' },
          { text: '关于我', link: '/common/about-me' },
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
      {
        text: '前端',
        items: [
          // { text: '基本', link: '/front-end/' },
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
      {
        text: '后端',
        items: [
          { text: '基本', link: '/back-end/' },
          { text: '数据库', link: '/back-end/database' },
          { text: 'Java', link: '/back-end/java' },
          { text: 'Docker', link: '/back-end/docker' },
          { text: 'Redis', link: '/back-end/redis' },
        ],
      },
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
            ],
          },
          // { text: 'Vue', link: '/front-end/vue/' },
        ],
      },
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    displayAllHeaders: true, // 默认值：false

    // vuepress-theme-hope 主题配置
    baseLang: 'zh-CN',
    author: 'SunSeekerX',
    footer: {
      copyright: false,
    },
    blog: false,
    pwa: true,
  },
  // comment: {
  //   type: 'valine',
  //   appId: 'KwMbVerMPAH4oclxQ5LtCLPR-gzGzoHsz',
  //   appKey: '13eOI19EMGKKtQepMDxLIn9u',
  // },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang = 'zh-CN') => {
          // 不要忘了安装 moment
          moment.locale(lang)
          // return moment(timestamp).fromNow()
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
      },
    ],
    // [
    //   'md-enhance',
    //   {
    //     enableAll: true,
    //   },
    // ],
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
