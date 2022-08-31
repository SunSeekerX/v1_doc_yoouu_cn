/**
 * 侧边栏
 * @author: SunSeekerX
 * @Date: 2020-10-15 16:26:36
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-24 14:28:17
 */

module.exports = {
  // 基础笔记
  '/basic/': [
    {
      title: '基础',
      collapsable: false,
      children: [
        ['resource', '资源'],
        ['regexp', '正则表达式'],
        ['proxy', '代理设置大全'],
      ],
    },
    {
      title: 'Git',
      collapsable: false,
      children: [
        ['git', 'Git 命令'],
        ['git-starter', 'Git 快速入门'],
      ],
    },
    {
      title: '文章',
      collapsable: false,
      children: [['article', '文章']],
    },
    {
      title: '工具',
      collapsable: false,
      children: [
        ['resource-tool', '工具资源'],
        ['ide', '开发工具'],
        ['powershell', 'PowerShell'],
        ['windows', 'Windows'],
        ['mac', 'Mac'],
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
  // 前端 - front-end
  '/front-end/': [
    {
      title: 'Basic',
      collapsable: false,
      children: [
        ['guide', 'Guide'],
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
        ['mp', '微信小程序'],
        ['flutter', 'Flutter'],
        ['react-native', 'React Native'],
      ],
    },
    {
      title: 'Uni-app',
      collapsable: false,
      children: [
        ['uni-app', 'Uni-app - 概览'],
        ['uni-app-nativeplugins', 'Uni-app -  原生插件'],
        ['/front-end/uni-app/offline-build-android', 'Uni-app -  Android 离线打包'],
        ['/front-end/uni-app/offline-build-ios', 'Uni-app -  IOS 离线打包'],
      ],
    },
    {
      title: 'Android',
      collapsable: false,
      children: [
        ['android/', 'Android - 概览'],
        ['/front-end/android/dev', 'Android - 开发'],
        ['/front-end/android/issue', 'Android - 问题'],
      ],
    },
    {
      title: 'IOS',
      collapsable: false,
      children: [['ios', 'IOS - 概览']],
    },
    {
      title: 'Others',
      collapsable: false,
      children: [['javascript-obfuscator', 'Javascript obfuscator']],
    },
  ],
  // 后端 - back-end
  '/back-end/': [
    {
      title: 'Backend',
      collapsable: false,
      children: [
        ['linux', 'Linux'],
        ['database', 'Database'],
        ['docker', 'Docker'],
        ['redis', 'Redis'],
      ],
    },
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
      title: 'Kotlin',
      prefix: '',
      collapsable: false,
      children: [['kotlin', 'Kotlin']],
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
  // 兴趣
  '/interest/': [
    {
      title: 'Interest',
      collapsable: false,
      children: [
        ['phone', 'Phone'],
        ['hackintosh', '黑苹果'],
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
      children: [
        ['photoshop', 'PhotoShop'],
        ['premiere', 'Premiere'],
      ],
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
  // 区块链
  '/blockchain/': [
    {
      title: '区块链',
      collapsable: false,
      children: [
        ['', '区块链'],
        ['capital', '投资机构'],
        ['notebook', '学习笔记'],
        ['solidity', 'Solidity'],
        ['apps/', '项目'],
        ['bookmark', '书签'],
        ['nft', 'NFT'],
      ],
    },
  ],
  // 开源项目 -  Open source
  '/open-source/': [
    {
      title: 'Open source',
      collapsable: false,
      children: [
        ['', 'README'],
        ['vsa', 'Vue simple admin'],
        ['web-storage-apis/zh', 'Web storage apis'],
      ],
    },
  ],
  '/': [''],
}
