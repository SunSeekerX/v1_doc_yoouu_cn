/**
 * @name: config.js
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-08 16:13:35
 */

const moment = require('moment')

module.exports = {
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
  ],
  themeConfig: {
    repo: 'SunSeekerX/sunseekerx',
    editLinks: false,
    sidebarDepth: 2,
    nav: [
      // { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '基本',
        items: [
          {
            text: '资源',
            link: '/common/resource',
          },
          { text: 'Git', link: '/common/git' },
          { text: '编辑器', link: '/common/editor' },
          { text: '其他', link: '/common/other' },
          { text: '关于我', link: '/common/about-me' },
          {
            text: '学习计划',
            items: [
              { text: 'Git快速入门', link: '/common/coding/git' },
              { text: 'Node.js 学习计划', link: '/common/coding/nodejs' },
              { text: 'React 学习计划', link: '/common/coding/react' },
              // { text: 'Spring Boot 入门', link: '/common/coding/spring-boot' },
            ],
          },
          {
            text: '其他技术',
            items: [{ text: 'Jenkins', link: '/common/jenkins' }],
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
          { text: '基本', link: '/front-end/' },

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
        ],
      },
      {
        text: '开源库',
        items: [
          { text: 'vue-simple-admin', link: '/vsa/' },
          { text: 'web-storage-apis', link: '/web-storage-apis/' },
          // { text: 'Vue', link: '/front-end/vue/' },
        ],
      },
    ],
    // sidebar: ['/', '/guide/', '/vsa/'],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    // displayAllHeaders: true, // 默认值：false
  },
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
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'],
  },
}
