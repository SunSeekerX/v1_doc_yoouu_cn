/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-10-15 16:26:36
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-19 16:25:21
 */

module.exports = {
  '/basic/': [
    {
      title: '基础',
      collapsable: false,
      children: [
        ['resource', 'Resource'],
        ['git', 'Git commands'],
        ['regexp', 'Regexp'],
        ['ide', 'IDE'],
        ['windows', 'Windows'],
        ['other', 'Other'],
      ],
    },
    {
      title: 'Learn',
      prefix: 'coding/',
      collapsable: false,
      children: [
        ['git', 'Git'],
        ['nodejs', 'Node.js'],
        ['react', 'React'],
      ],
    },
    {
      title: 'Others',
      collapsable: false,
      children: [
        ['jenkins', 'Jenkins'],
        ['others/script', 'Scripts'],
        ['others/markdown', 'Markdown'],
        ['others/about-work', 'About work'],
      ],
    },
    {
      title: 'Troubleshooting',
      collapsable: false,
      children: [['power-shell', 'PowerShell']],
    },
  ],

  '/front-end/': [
    {
      title: 'Basic',
      collapsable: false,
      children: [
        ['html', 'Html'],
        ['css', 'Css'],
        ['javascript', 'JavaScript'],
        ['basic', 'Basic'],
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
        ['sql', 'SQL'],
        ['database', 'Database'],
        ['docker', 'Docker'],
        ['redis', 'Redis'],
        ['golang', 'Golang'],
      ],
    },
    {
      title: 'NestJS',
      prefix: 'nestjs/',
      collapsable: false,
      children: [
        '',
        'nestjs-framework-tutorial-1',
        'nestjs-framework-tutorial-2',
        'nestjs-framework-tutorial-3',
        'nestjs-framework-tutorial-4',
        'nestjs-framework-tutorial-5',
        'nestjs-framework-tutorial-6',
        'nestjs-framework-tutorial-7',
        'nestjs-framework-tutorial-8',
        'nestjs-framework-tutorial-9',
        'nestjs-framework-tutorial-10',
        'nestjs-framework-tutorial-12',
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
  ],

  '/interest/': [
    {
      title: 'Interest',
      collapsable: false,
      children: [
        ['phone', 'Phone'],
        ['blockchain/', 'Blockchain'],
        ['n1/', 'N1 盒子'],
        ['jd', 'JD'],
        ['router', '路由器'],
        ['scooter', '滑板车'],
        ['frp', 'Topic'],
        ['nps', 'NPS'],
      ],
    },
  ],

  '/open-source/': [
    {
      title: 'Open source',
      collapsable: false,
      children: [
        ['vsa', 'Vue simple admin'],
        ['web-storage-apis/', 'Web storage apis'],
      ],
    },
  ],
  '/': [''],
}
