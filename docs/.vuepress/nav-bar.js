/**
 * 导航栏
 * @author: SunSeekerX
 * @Date: 2020-11-29 21:41:57
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-24 14:28:25
 */

module.exports = [
  // Intro
  { text: '简介', link: '/intro', icon: 'fa-solid fa-user' },
  // Basic
  {
    text: '基础',
    items: [
      {
        text: '资源',
        link: '/basic/resource',
      },
      {
        text: '工具资源',
        link: '/basic/resource-tool',
      },
      { text: 'Git 命令', link: '/basic/git' },
      { text: 'Git 快速入门', link: '/basic/git-starter' },
      { text: '正则表达式', link: '/basic/regexp' },
      { text: '开发工具', link: '/basic/ide' },
      { text: 'PowerShell', link: '/basic/powershell' },
      { text: 'Windows', link: '/basic/windows' },
      { text: 'Mac', link: '/basic/mac' },
      { text: 'Linux', link: '/basic/linux' },
      {
        text: '其他',
        items: [
          { text: 'Jenkins', link: '/basic/jenkins' },
          { text: 'Nginx', link: '/basic/nginx' },
          { text: 'Scripts', link: '/basic/others/script' },
          { text: 'Markdown', link: '/basic/others/markdown' },
          { text: 'About work', link: '/basic/others/about-work' },
        ],
      },
    ],
  },
  // Frontend
  {
    text: '前端',
    items: [
      {
        text: '基础',
        items: [
          { text: 'Basic', link: '/front-end/basic' },
          { text: 'Html', link: '/front-end/html' },
          { text: 'Css', link: '/front-end/css' },
          { text: 'JavaScript', link: '/front-end/javascript' },
        ],
      },
      {
        text: '技能',
        items: [
          { text: 'Npm', link: '/front-end/npm' },
          { text: 'Vue', link: '/front-end/vue' },
          { text: 'React', link: '/front-end/react' },
          { text: '微信小程序', link: '/front-end/mp' },
          { text: 'Uni-app', link: '/front-end/uni-app' },
          { text: 'Uni-app 原生插件', link: '/front-end/uni-app-nativeplugins' },
          {
            text: 'Flutter',
            link: '/front-end/flutter',
          },
          {
            text: 'React Native',
            link: '/front-end/react-native',
          },
          {
            text: 'Android',
            link: '/front-end/android',
          },
          {
            text: 'IOS',
            link: '/front-end/ios',
          },
        ],
      },
      {
        text: '其他',
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
    text: '后端',
    // link: '/back-end/linux',
    items: [
      { text: '基础', link: '/back-end/basic' },
      { text: 'Linux', link: '/back-end/linux' },
      { text: 'C', link: '/back-end/c' },
      // { text: 'SQL', link: '/back-end/sql' },
      { text: 'Database', link: '/back-end/database' },
      { text: 'Docker', link: '/back-end/docker' },
      { text: 'Redis', link: '/back-end/redis' },
      {
        text: 'NodeJs',
        items: [
          { text: 'NodeJs', link: '/back-end/nodejs/' },
          { text: 'NestJS', link: '/back-end/nestjs/' },
        ],
      },
      {
        text: 'Java',
        items: [
          { text: 'Basic', link: '/back-end/java/' },
          { text: 'Mybatis', link: '/back-end/java/mybatis' },
          { text: 'Spring', link: '/back-end/java/spring' },
          { text: 'Spring-MVC', link: '/back-end/java/spring-mvc' },
          { text: 'Spring-Boot', link: '/back-end/java/spring-boot' },
        ],
      },
      {
        text: 'Golang',
        items: [{ text: 'Golang', link: '/back-end/golang' }],
      },
    ],
  },
  // Interest
  {
    text: '爱好',
    items: [
      { text: 'Phone', link: '/interest/phone' },
      // { text: 'Blockchain', link: '/interest/blockchain/' },
      { text: 'N1 盒子', link: '/interest/n1/' },
      { text: '浏览器', link: '/interest/browser/' },
      { text: 'JD', link: '/interest/jd' },
      { text: '路由器', link: '/interest/router' },
      { text: '滑板车', link: '/interest/scooter' },
      { text: 'Topic', link: '/interest/topic' },
      { text: 'Postgraduate', link: '/interest/postgraduate' },
      {
        text: 'Adobe',
        items: [
          {
            text: 'PhotoShop',
            link: '/interest/adobe/photoshop',
          },
        ],
      },
      {
        text: 'Tools',
        items: [
          {
            text: 'Frp',
            link: '/interest/frp',
          },
          {
            text: 'NPS',
            link: '/interest/nps',
          },
        ],
      },
    ],
  },
  // 区块链
  {
    text: '区块链',
    items: [
      { text: '区块链', link: '/blockchain/' },
      { text: '学习笔记', link: '/blockchain/notebook' },
      { text: 'Solidity', link: '/blockchain/solidity' },
      { text: '项目', link: '/blockchain/apps/' },
      { text: '书签', link: '/blockchain/bookmark/' },
      { text: 'NFT', link: '/blockchain/nft' },
    ],
  },
  // Open source
  {
    text: '开源项目',
    items: [
      { text: 'Vue simple admin', link: '/open-source/vsa/' },
      { text: 'Web storage apis', link: '/open-source/web-storage-apis/zh/' },
      {
        text: 'uni-app',
        items: [
          {
            text: 'markrgba-css',
            link: 'https://github.com/SunSeekerX/markrgba-css',
          },
          {
            text: 'uni-app-starter',
            link: 'https://github.com/SunSeekerX/uni-app-starter',
          },
        ],
      },
      {
        text: 'Uni pushy',
        items: [
          {
            text: 'uni-pushy-client',
            link: 'https://github.com/SunSeekerX/uni-pushy-client',
          },
          {
            text: 'uni-pushy-admin',
            link: 'https://github.com/SunSeekerX/uni-pushy-admin',
          },
          {
            text: 'uni-pushy-server',
            link: 'https://github.com/SunSeekerX/uni-pushy-server',
          },
        ],
      },
      {
        text: 'Ghost theme',
        items: [
          {
            text: 'ghost-theme-yamabuki',
            link: 'https://github.com/SunSeekerX/ghost-theme-yamabuki',
          },
          {
            text: 'Ghost-Theme-Frenemy',
            link: 'https://github.com/SunSeekerX/Ghost-Theme-Frenemy',
          },
        ],
      },
      {
        text: 'NodeJS',
        items: [
          {
            text: 'nodejs-mysql-apis',
            link: 'https://github.com/SunSeekerX/nodejs-mysql-apis',
          },
        ],
      },
    ],
  },
]
