/**
 * 侧边栏
 * @author: SunSeekerX
 * @Date: 2020-10-15 16:26:36
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-24 14:28:17
 */

module.exports = {
  '/basic/': [
    {
      title: '基础',
      collapsable: false,
      children: [
        ['resource', '资源'],
        ['resource-tool', '工具资源'],
        ['git', 'Git 命令'],
        ['git-starter', 'Git 快速入门'],
        ['regexp', '正则表达式'],
        ['powershell', 'PowerShell'],
        ['ide', '开发工具'],
        ['windows', 'Windows'],
        ['mac', 'Mac'],
        ['linux', 'Linux'],
      ],
    },
    {
      title: 'Others',
      collapsable: false,
      children: [
        ['jenkins', 'Jenkins'],
        ['nginx', 'Nginx'],
        ['others/script', 'Scripts'],
        ['others/markdown', 'Markdown'],
        ['others/about-work', 'About work'],
      ],
    },
  ],

  '/front-end/': [
    {
      title: 'Basic',
      collapsable: false,
      children: [
        ['basic', 'Basic'],
        ['html', 'Html'],
        ['css', 'Css'],
        ['javascript', 'JavaScript'],
      ],
    },
    {
      title: 'Skills',
      collapsable: false,
      children: [
        ['npm', 'Npm'],
        ['vue', 'Vue'],
        ['react', 'React'],
        ['uni-app', 'Uni-app'],
        ['mp', '微信小程序'],
        ['uni-app-nativeplugins', 'Uni-app 原生插件'],
        ['flutter', 'Flutter'],
        ['react-native', 'React Native'],
        ['android', 'Android'],
        ['ios', 'IOS'],
      ],
    },
    {
      title: 'Others',
      collapsable: false,
      children: [['javascript-obfuscator', 'Javascript obfuscator']],
    },
  ],

  '/back-end/': [
    {
      title: 'Backend',
      collapsable: false,
      children: [
        ['linux', 'Linux'],
        // ['sql', 'SQL'],
        ['database', 'Database'],
        ['docker', 'Docker'],
        ['redis', 'Redis'],
        // ['golang', 'Golang'],
      ],
    },
    // {
    //   title: 'NestJS',
    //   prefix: 'nestjs/',
    //   collapsable: false,
    //   children: [
    //     '',
    //     'nestjs-framework-tutorial-1',
    //     'nestjs-framework-tutorial-2',
    //     'nestjs-framework-tutorial-3',
    //     'nestjs-framework-tutorial-4',
    //     'nestjs-framework-tutorial-5',
    //     'nestjs-framework-tutorial-6',
    //     'nestjs-framework-tutorial-7',
    //     'nestjs-framework-tutorial-8',
    //     'nestjs-framework-tutorial-9',
    //     'nestjs-framework-tutorial-10',
    //     'nestjs-framework-tutorial-12',
    //   ],
    // },
    {
      title: 'NodeJs',
      prefix: '',
      collapsable: false,
      children: [
        ['nodejs', 'NodeJs'],
        ['nestjs/', 'NestJS'],
      ],
    },
    {
      title: 'Java',
      prefix: 'java/',
      collapsable: false,
      children: [
        ['', 'Java'],
        ['mybatis', 'Mybatis'],
        ['spring', 'Spring'],
        ['spring-mvc', 'Spring-MVC'],
        ['spring-boot', 'Spring-Boot'],
      ],
    },
    {
      title: 'Golang',
      prefix: '',
      collapsable: false,
      children: [['golang', 'Golang']],
    },
  ],

  '/interest/': [
    {
      title: 'Interest',
      collapsable: false,
      children: [
        ['phone', 'Phone'],
        // ['blockchain/', 'Blockchain'],
        ['browser', '浏览器'],
        ['n1', 'N1 盒子'],
        ['jd', 'JD'],
        ['router', '路由器'],
        ['scooter', '滑板车'],
        ['topic', 'Topic'],
        ['postgraduate', 'Postgraduate'],
      ],
    },
    {
      title: 'Adobe',
      prefix: 'adobe/',
      collapsable: false,
      children: [['photoshop', 'PhotoShop']],
    },
    {
      title: 'Tools',
      prefix: '',
      collapsable: false,
      children: [
        ['frp', 'Frp'],
        ['nps', 'NPS'],
      ],
    },
  ],

  '/blockchain/': [
    {
      title: '区块链',
      collapsable: false,
      children: [
        ['', 'Readme'],
        ['solidity', 'Solidity'],
        ['apps/', '项目'],
        ['bookmark', '书签'],
        ['nft', 'NFT'],
      ],
    },
  ],

  '/open-source/': [
    {
      title: 'Open source',
      collapsable: false,
      children: [
        ['vsa', 'Vue simple admin'],
        ['web-storage-apis/zh', 'Web storage apis'],
      ],
    },
  ],
  '/': [''],
}
