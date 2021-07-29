# uni-app

## 📌 问题

### 1：无法使用调试？

参考解决：[https://ask.dcloud.net.cn/article/37973](https://ask.dcloud.net.cn/article/37973)

```javascript
const {
  ignoreDefaultArgs = false,
  args = [],
  dumpio = false,
  // 修改这里为你的 chrome 路径
  executablePath = 'C://Program Files//Google//Chrome//Application//chrome.exe',
  pipe = false,
  env = process.env,
  handleSIGINT = true,
  handleSIGTERM = true,
  handleSIGHUP = true,
  ignoreHTTPSErrors = false,
  defaultViewport = { width: 800, height: 600 },
  slowMo = 0,
  timeout = 30000,
} = options
```

### css 文件发布 npm 部分属性不生效？

> 一个 css 文件放在项目下在 app.vue 引入可以使用，发布到 npm 一部分就不能用了，必须放在 main.js 中引入才能全部生效的问题
>
> 不生效的是包含 width: 100% 类似这样的属性

将 `css` 改为 `scss` 即可。应该是编译的时候没走 webpack loader，或者 css loader 之类的处理方式导致的

## 📌 原生插件

### Android

1. 调试调用插件无反应？

   1. 检查是否将模块导入到 `app` 模块

      ```groovy
      // 类似
      implementation project(':local-module:ssx_screenshot_listen')
      ```

   2. 检查 `dcloud_uniplugins.json` 是否配置好插件

   3. 检查模块方法是否加上 `@UniJSMethod(uiThread = true)` 注释

   4. 检查模块混淆规则配置文件 `proguard-rules.pro` 是否加上

      ```properties
      # Uni-app
      -keep public class * extends io.dcloud.feature.uniapp.common.UniModule{*;}
      ```

   5. 如果你得的模块是放在二级文件夹的，并且开启了混淆压缩，类似如下配置

      ```groovy
      buildTypes {
          release {
            signingConfig signingConfigs.config
            zipAlignEnabled true
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
          }
          debug {
            signingConfig signingConfigs.config
            zipAlignEnabled true
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
          }
        }
      ```

      ![image-20210727233153192](https://static.yoouu.cn/imgs/2021/pic-go/image-20210727233153192.png)

      这样玩不得行，虽然你取消混淆是可以的，但我不确定打包出来的插件能不能用 😒。罢了放外面吧。估计没人像我这么玩。

2. 启动新的 `actovity` 报 `You need to use a Theme.AppCompat theme (or descendant) with this activity.`

   修改 `activity` 继承的父类为 `Activity`，不要用 `AppCompatActivity`

## 📌 配置 eslint + prettier + stylelint + lint-staged + husky

### 0x2 规范提交代码

可以参考[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)

一种用于给提交信息增加人机可读含义的规范。

简单来说就是提交代码的规范。

已经详细记录到个人的文档网站，这里不做详细介绍 [地址](https://sunseekerx.yoouu.cn/front-end/npm.html#%E2%9C%85%E8%A7%84%E8%8C%83%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81)

### 0x3 安装需要用到的依赖

```bash
npm i eslint babel-eslint eslint-plugin-vue husky lint-staged prettier @vue/eslint-config-prettier eslint-plugin-prettier stylelint stylelint-config-prettier stylelint-config-standard stylelint-order -D
# or yarn
yarn add eslint babel-eslint eslint-plugin-vue husky lint-staged prettier @vue/eslint-config-prettier eslint-plugin-prettier stylelint stylelint-config-prettier stylelint-config-standard stylelint-order -D
```

- eslint - 校验代码的核心
- babel-eslint - babel 插件，用 babel 解析 js 文件
- eslint-plugin-vue - vue 官方的 eslint 插件
- husky - 可以让 git hooks 的使用变得更简单方便
- lint-staged - 可以在 git staged 阶段的文件上执行 linters，简单点来说就是当我们运行 `eslint` 或 `stylelint` 的命令时，只会检查我们通过 `git add` 添加到暂存区的文件，可以避免我们每次检查都把整个项目的代码都检查一遍
- `stylelint` 检查样式

### 0x4 配置

> 以下设置适用于 `cli` 创建的项目，`HbuilderX` 创建的项目，路径需要修改。例如 `./src/` 改成 `./` 这样。

#### husky

**安装**

```shell
npx husky install
```

**添加**

```shell
npx husky add .husky/pre-commit "npm run lint:lint-staged"
```

#### prettier

`${app}/prettier.config.js`

```javascript
module.exports = {
  // 行宽 default:80
  printWidth: 100,
  // tab 宽度 default:2
  tabWidth: 2,
  // 使用 tab 键 default:false
  useTabs: false,
  // 语句行末是否添加分号 default:true
  semi: false,
  // 是否使用单引号 default:false
  singleQuote: true,
  // 对象需要引号在加 default:"as-needed"
  quoteProps: 'as-needed',
  // jsx单引号 default:false
  jsxSingleQuote: true,
  // 最后一个对象元素加逗号 default:"es5"
  trailingComma: 'es5',
  // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格 default:true
  bracketSpacing: true,
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。default:false
  jsxBracketSameLine: false,
  // (x) => {} 是否要有小括号 default:"always"
  arrowParens: 'always',
  // default:0
  rangeStart: 0,
  // default:Infinity
  rangeEnd: Infinity,
  // default:false
  insertPragma: false,
  // default:false
  requirePragma: false,
  // 不包装 markdown text default:"preserve"
  proseWrap: 'never',
  // HTML空白敏感性 default:"css"
  htmlWhitespaceSensitivity: 'strict',
  // 在 *.vue 文件中 Script 和 Style 标签内的代码是否缩进 default:false
  vueIndentScriptAndStyle: true,
  // 末尾换行符 default:"lf"
  endOfLine: 'auto',
  // default:"auto"
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
```

#### .prettierignore

```shell
# 忽略打包的文件
src/unpackage
# 忽略uni-app官方的组件库错误和警告，官方的竟然通不过...
src/components/uni-**
```

#### eslint

> eslint 的配置复制于 `PanJiaChen` 大佬的项目，[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)，关闭了一些实在是太变态的警告。。。（大部分是格式问题）

`${app}/.eslintrc.js`

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // 配置js全局变量，因为是uni-app，全局的uni是不需要引入的，还有5+的plus对象
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-eval': 'error',
    'no-alert': 'error',
    'vue/max-attributes-per-line': [
      0,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'accessor-pairs': 2,

    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [2, 'only-multiline'],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [
      'warn',
      'always',
      {
        null: 'ignore',
      },
    ],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'handle-callback-err': [2, '^(err|error)$'],
    'jsx-quotes': [2, 'prefer-single'],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 1,
    'no-multi-spaces': 2,
    'no-multi-str': 2,

    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 0,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],

    'space-in-parens': [2, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'array-bracket-spacing': [2, 'never'],
    'no-prototype-builtins': 0,
    // 自定义开始
    'vue/html-indent': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': 0,
    indent: 0,
    semi: 0,
    'comma-spacing': 0,
    'space-before-blocks': 0,
    'keyword-spacing': 0,
    'key-spacing': 0,
    'no-multiple-empty-lines': 0,
    'spaced-comment': 0,
    'space-before-function-paren': 0,
    'arrow-spacing': 0,
    'object-curly-spacing': 0,
  },
}
```

#### .eslintignore

> 需要忽略打包的文件，像 `.gitignore` 一样的写法就行

```bash
# 忽略打包的文件
unpackage
# 忽略uni-app官方的组件库错误和警告，官方的竟然通不过...
components/uni-**
```

#### stylelint

> 用来校验 `scss,less,styl,css,html,vue` 的 `css`

`${app}/stylelint.config.js`

```javascript
module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'for'],
      },
    ],
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['lines'],
      },
    ],
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: 'min-device-pixel-ratio',
      },
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 指定声明块内属性的字母顺序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'hyphens',
      'src',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-attachment',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-collapse',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-color',
      'border-image',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-spacing',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-radius-topleft',
      'content',
      'quotes',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'zoom',
      'transform',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'table-layout',
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'background-clip',
      'backface-visibility',
      'resize',
      'appearance',
      'user-select',
      'interpolation-mode',
      'direction',
      'marks',
      'page',
      'set-link-source',
      'unicode-bidi',
      'speak',
    ],
  },
}
```

#### .stylelintignore

```bash
# 忽略打包的文件
src/unpackage
# 忽略uni-app官方的组件库错误和警告，官方的竟然通不过...
src/components/uni-**
```

#### lint-staged

> 用来对你已经 `git add` 的文件进行校验，所以不需要指定路径。

`${app}/lint-staged.config.js`

```javascript
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['prettier --write', 'stylelint --fix --allow-empty-input'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix --allow-empty-input', 'prettier --write'],
  '*.md': ['prettier --write'],
}
```

#### package.json

> 删除了不必要的信息

`${app}/package.json`

```json
{
  "scripts": {
    "lint:eslint": "eslint --fix --ext \"src/**/*.{vue,less,css,scss}\"",
    "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
    "lint:stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    "gc": "git add -A && git-cz && git pull && git push"
  },
  "husky": { "hooks": { "pre-commit": "lint-staged" } }
}
```

### 0x5 使用

#### 提交代码

本地执行

```shell
yarn gc
# 实际执行，这是个人自己定义的命令，因为经常需要推送和拉取代码，核心就是git cz替代git commit -m ''可以选择本次提交的类型，很方便
git add -A && git cz && git pull && git push
```

> 一条命令搞定了代码提交、校验、拉取、推送。当然遇到有冲突的情况还是需要自己手动解决。

#### 代码校验 - lint:eslint

```bash
yarn lint:prettier
# 实际执行
prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"
```

#### 代码校验 - lint:prettier

```bash
yarn lint:prettier
# 实际执行
prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"
```

#### 代码校验 - lint:stylelint

```bash
yarn lint:prettier
# 实际执行
stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/
```

## 📌 HbuilderX

### prettier 插件设置

```javascript
module.exports = {
  // 行宽 default:80
  printWidth: 120,
  // tab 宽度 default:2
  tabWidth: 2,
  // 使用 tab 键 default:false
  useTabs: false,
  // 语句行末是否添加分号 default:true
  semi: false,
  // 是否使用单引号 default:false
  singleQuote: true,
  // 对象需要引号在加 default:"as-needed"
  quoteProps: 'as-needed',
  // jsx单引号 default:false
  jsxSingleQuote: true,
  // 最后一个对象元素加逗号 default:"es5"
  trailingComma: 'es5',
  // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格 default:true
  bracketSpacing: true,
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。default:false
  jsxBracketSameLine: false,
  // (x) => {} 是否要有小括号 default:"always"
  arrowParens: 'always',
  // default:0
  rangeStart: 0,
  // default:Infinity
  rangeEnd: Infinity,
  // default:false
  insertPragma: false,
  // default:false
  requirePragma: false,
  // 不包装 markdown text default:"preserve"
  proseWrap: 'preserve',
  // HTML空白敏感性 default:"css"
  htmlWhitespaceSensitivity: 'strict',
  // 在 *.vue 文件中 Script 和 Style 标签内的代码是否缩进 default:false
  vueIndentScriptAndStyle: false,
  // 末尾换行符 default:"lf"
  endOfLine: 'auto',
  parsers: {
    '.jsx': 'flow',
    '.scss': 'scss',
    '.ts': 'typescript',
    '.less': 'css',
    '.vue': 'vue',
    '.nvue': 'vue',
    '.ux': 'vue',
    '.yml': 'yaml',
  },
}
```

## 📌 业务实现

### H5 复制内容到剪贴板

使用 **vue-clipboard2**

```bash
yarn add vue-clipboard2
```

`main.js`

```javascript
// #ifdef H5
import VueClipboard from 'vue-clipboard2'
// #endif

// #ifdef H5
Vue.use(VueClipboard)
// #endif
```

**message** 为复制的内容

```html
<!-- #ifdef H5 -->
<text
  v-clipboard:copy="message"
  v-clipboard:success="onH5CopySuccess"
  v-clipboard:error="onH5CopyError"
>
  复制
</text>
<!-- #endif -->
```

```javascript
onH5CopySuccess(e) {
  this.$util.toast('复制成功')
},
  onH5CopyError(e) {
    this.$util.toast('复制失败')
  },
```

### 安卓设置 App 通知

```javascript
/* 获取当前手机是否有通知权限 */
// #ifdef APP-PLUS
let main = plus.android.runtimeMainActivity()
let pkName = main.getPackageName()
let NotificationManagerCompat = plus.android.importClass(
  'android.support.v4.app.NotificationManagerCompat'
)
let packageNames = NotificationManagerCompat.from(main)
if (!packageNames.areNotificationsEnabled()) {
  //手机没有开启通知的权限
  let uid = main.getApplicationInfo().plusGetAttribute('uid')
  let Intent = plus.android.importClass('android.content.Intent')
  let Build = plus.android.importClass('android.os.Build')
  //android 8.0引导
  if (Build.VERSION.SDK_INT >= 26) {
    let intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS')
    intent.putExtra('android.provider.extra.APP_PACKAGE', pkName)
  } else if (Build.VERSION.SDK_INT >= 21) {
    //android 5.0-7.0
    let intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS')
    intent.putExtra('app_package', pkName)
    intent.putExtra('app_uid', uid)
  } else {
    //(<21)其他--跳转到该应用管理的详情页
    let Settings = plus.android.importClass('android.provider.Settings')
    let Uri = plus.android.importClass('android.net.Uri')
    let intent = new Intent()
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
    let uri = Uri.fromParts('package', main.getPackageName(), null)
    intent.setData(uri)
  }
  // 跳转到该应用的系统通知设置页
  main.startActivity(intent)
}
// #endif
```

## 📌 nvue

### 注意事项

1. 子组件触发父组件的方法，父组件接受方法名不能使用 `-` 连接，否则无法触发

   ```javascript
   // bad
   this.$emit('on-change-sort')

   // good
   this.$emit('abc')
   ```

## 📌 uview

1. Cannot read property 'bottom' of null

https://github.com/YanxinNet/uView/issues/239

```
chunk-vendors.js:10121 Uncaught TypeError: Cannot read property 'bottom' of null
```

## 📌 Utils function

```javascript
//api接口
Vue.prototype.api = 'http://127.0.0.1:3000'
// 全局验证手机号码的方法
Vue.prototype.isPhoneAvailable = function (str) {
  return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str) ? true : false
}
// 去除空格
Vue.prototype.trim = function (str) {
  return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '')
}
// 加载
Vue.prototype.loading = () => {
  uni.showLoading({ title: '加载中...', mask: true })
}
//关闭加载
Vue.prototype.hideLoading = () => {
  uni.hideLoading()
}
//toast
Vue.prototype.toast = (title) => {
  uni.showToast({ title, mask: false, duration: 1500, icon: 'none' })
}
```

### About rich-text

```javascript
for (var i = 0; i < data.length; i++) {
  data[i].question_describe = data[i].question_describe.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto"'
  )
}
```
