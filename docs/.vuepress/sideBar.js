/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-10-15 16:26:36
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-03-15 00:18:43
 */

module.exports = {
  '/guide/': [
    {
      title: 'Guide',
      // icon: 'creativefill',
      collapsable: false,
      children: [''],
    },
  ],

  '/basic/': [
    {
      title: 'Basic',
      // prefix: 'markdown/',
      // icon: 'creativefill',
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
      // prefix: 'markdown/',
      // icon: 'markdown',
      collapsable: false,
      children: [
        ['git', 'Git'],
        ['nodejs', 'Node.js'],
        ['react', 'React'],
      ],
    },
    {
      title: 'Others',
      // prefix: 'coding/',
      // prefix: 'markdown/',
      // icon: 'markdown',
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
      // prefix: 'coding/',
      // prefix: 'markdown/',
      // icon: 'markdown',
      collapsable: false,
      children: [['power-shell', 'PowerShell']],
    },
  ],

  '/front-end/': [
    {
      title: 'Basic',
      // prefix: 'markdown/',
      // icon: 'creativefill',
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
      // prefix: 'markdown/',
      // icon: 'creativefill',
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
      // prefix: 'markdown/',
      // icon: 'creativefill',
      collapsable: false,
      children: [['javascript-obfuscator', 'Javascript obfuscator']],
    },
  ],

  '/back-end/': [
    {
      title: 'Backend',
      // prefix: 'linux/',
      // icon: 'markdown',
      collapsable: false,
      children: [
        ['basic', 'Basic'],
        ['linux', 'Linux'],
        ['sql', 'SQL'],
        ['database', 'Database'],
        ['docker', 'Docker'],
        ['redis', 'Redis'],
      ],
    },
    {
      title: 'NestJS',
      prefix: 'nestjs/',
      // icon: 'markdown',
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
      // icon: 'markdown',
      collapsable: false,
      children: [
        // '',
        ['java', 'Basic'],
        // ['readme', 'Basic'],
        ['mybatis', 'Mybatis'],
        ['spring', 'Spring'],
        ['spring-mvc', 'Spring-MVC'],
      ],
    },
  ],

  '/interest/': [
    {
      title: 'Interest',
      // prefix: 'java/',
      // icon: 'markdown',
      collapsable: false,
      children: [
        ['phone', 'Phone'],
        ['blockchain', 'Blockchain'],
      ],
    },
  ],

  // '/interest/': [
  //   {
  //     title: 'Interest',
  //     // prefix: 'java/',
  //     // icon: 'markdown',
  //     collapsable: false,
  //     children: [['phone', 'Phone']],
  //   },
  // ],

  '/open-source/': [
    {
      title: 'Open source',
      // prefix: 'open-source/',
      // icon: 'markdown',
      collapsable: false,
      children: [
        ['vsa', 'Vue simple admin'],
        ['web-storage-apis/', 'Web storage apis'],
      ],
    },
  ],

  '/': ['', 'guide/', 'basic/', 'front-end/', 'back-end/', 'interest/'],
}
