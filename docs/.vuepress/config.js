/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-15 14:35:37
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
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '前端',
        items: [
          { text: '基本', link: '/front-end/' },
          {
            text: '基础',
            items: [
              { text: 'Html', link: '/front-end/html/' },
              { text: 'Css', link: '/front-end/css/' },
              { text: 'JavaScript', link: '/front-end/javascript/' },
            ],
          },
          {
            text: '框架',
            items: [
              { text: 'Npm', link: '/front-end/npm/' },
              { text: 'Uni-app', link: '/front-end/uni-app/' },
              { text: 'Vue', link: '/front-end/vue/' },
            ],
          },
        ],
      },
      {
        text: '后端',
        items: [
          { text: '基本', link: '/back-end/' },
          { text: '数据库', link: '/back-end/database/' },
          { text: 'Java', link: '/back-end/java/' },
          { text: 'Docker', link: '/back-end/docker/' },
          { text: 'Linux', link: '/back-end/linux/' },
        ],
      },
    ],
    // sidebar: ['/', '/guide/', '/vsa/'],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    displayAllHeaders: true // 默认值：false
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
}
