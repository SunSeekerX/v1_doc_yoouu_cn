/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-04-12 22:42:30
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-12 23:55:35
 */

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
    editLinks: true,
    sidebarDepth: 2,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    // sidebar: ['/', '/guide/', '/vsa/'],
    sidebar: 'auto',
    // displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated',
  },
}
