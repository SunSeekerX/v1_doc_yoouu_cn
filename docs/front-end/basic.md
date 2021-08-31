![frontend.png](https://static.yoouu.cn/imgs/doc/front-end/frontend.png)

## 📌 配置 eslint + prettier 代码格式校验

### **安装依赖**

**vue2**

```shell
npm i eslint babel-eslint eslint-plugin-vue husky lint-staged prettier @vue/eslint-config-prettier eslint-plugin-prettier@6.2.2 stylelint stylelint-config-prettier stylelint-config-standard stylelint-order -D
```

**vue3**

```shell
npm i eslint babel-eslint eslint-plugin-vue husky lint-staged prettier @vue/eslint-config-prettier eslint-plugin-prettier stylelint stylelint-config-prettier stylelint-config-standard stylelint-order -D
```

### **配置 Prettier**

#### `prettier.config.js`

##### **uni-app**

```javascript
/**
 * prettier 配置
 * @url https://prettier.io/docs/en/options.html
 * @author: SunSeekerX
 * @Date: 2020-07-20 16:34:25
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-17 16:04:50
 */

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
}
```

##### **vue**

```javascript
/**
 * Prettier 配置
 * @url https://prettier.io/docs/en/options.html
 * @author: SunSeekerX
 * @Date: 2020-07-20 16:34:25
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-17 16:04:50
 */

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
}
```

#### `.prettierignore`

##### **uni-app**

```shell
# 忽略uni-app官方的组件库错误和警告，官方的竟然通不过...
src/components/uni-*
src/components-nvue/
nativeplugins/
src/res/
src/static/
# 忽略打包的文件
src/unpackage/
src/utils/libs/
src/mypUI/
uni_modules/
nativeplugins/
```

##### **vue**

```shell

```

### **配置 eslint**

#### `.eslintrc.js`

##### **uni-app**

```javascript
/**
 * Uni-app eslint 配置
 * @author: SunSeekerX
 * @Date: 2020-04-18 11:43:35
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-23 17:13:02
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
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
    eqeqeq: ['error', 'always', { null: 'ignore' }],
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
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'array-bracket-spacing': [2, 'never'],
    'no-prototype-builtins': 0,
    // Custom start
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
    'vue/custom-event-name-casing': 0,
    'prettier/prettier': 0,
    'vue/experimental-script-setup-vars': 0,
  },
}
```

##### **vue**

```javascript
/**
 * Vue eslint 配置
 * @author: SunSeekerX
 * @Date: 2020-04-18 11:43:35
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-23 17:13:35
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'no-console': 1,
    'no-debugger': 2,
    'prettier/prettier': 0,
  },
}
```

#### `.eslintignore`

##### **uni-app**

```shell
# 忽略uni-app官方的组件库错误和警告，官方的竟然通不过...
src/components/uni-*
src/components-nvue/
nativeplugins/
src/res/
src/static/
# 忽略打包的文件
src/unpackage/
src/utils/libs/
src/mypUI/
uni_modules/
nativeplugins/
src/utils/pushy/
```

##### **vue**

```shell

```

### **配置 stylelint**

用来校验 `scss,less,styl,css,html,vue` 的 `css`

#### `stylelint.config.js`

##### **uni-app**

```javascript
/**
 * Uni-app stylelint 配置
 * @author: SunSeekerX
 * @Date: 2020-11-13 13:33:20
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-23 15:26:40
 */

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
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'for',
          'return',
        ],
      },
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
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
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          'page',
          'picker-view',
          'uni-scroll-view',
          'uni-button',
          'scroll-view',
          'uni-picker',
          'uni-image',
          'uni-textarea',
          'uni-page-body',
          'uni-input',
        ],
      },
    ],
    'no-invalid-position-at-import-rule': null,
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
```

##### **vue**

```javascript
/**
 * Vue stylelint 配置
 * @author: SunSeekerX
 * @Date: 2020-11-13 13:33:20
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-23 15:25:09
 * from: https://github.com/anncwb/vue-vben-admin/blob/main/stylelint.config.js
 */

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
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
```

#### `.stylelintignore`

##### **uni-app**

```shell
# 忽略uni-app官方的组件库错误和警告，官方的竟然通不过...
src/components/uni-*
src/components-nvue/
nativeplugins/
src/res/
src/static/

# 忽略打包的文件
src/unpackage/
src/utils/libs/
src/mypUI/
src/common/scss/markrgba-css/
uni_modules/
dist

nativeplugins/
```

##### **vue**

```shell

```

### **配置 lint-staged**

#### `lint-staged.config.js`

```javascript
/**
 * 暂存区检查
 * @author: SunSeekerX
 * @Date: 2020-11-13 12:46:27
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-17 16:04:11
 */

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['prettier --write', 'stylelint --fix --allow-empty-input'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix --allow-empty-input', 'prettier --write'],
  '*.md': ['prettier --write'],
}
```

### **配置 husky**

在 packgae.json 中添加 prepare 脚本

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

初始化

```shell
npx husky install
```

添加 git hooks，运行以下命令创建 git hooks

```shell
npx husky add .husky/pre-commit "npm run lint:lint-staged"
```

假如没有执行权限

```shell
# 赋予 pre-commit 权限
chmod 700 .husky/pre-commit
```

### `package.json`

删除了不必要的信息

```json
{
  "scripts": {
    "commit": "git cz",
    "lint:lint-staged": "lint-staged",
    "lint:eslint": "eslint --fix --ext \"src/**/*.{vue,less,css,scss}\"",
    "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
    "lint:stylelint": "stylelint --fix \"src/**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    "up": "yarn upgrade-interactive",
    "sort-package-json": "npx sort-package-json",
    "prepare": "husky install"
  }
}
```

### **使用**

提交代码

```shell
yarn gc
# 实际执行，这是个人自己定义的命令，因为经常需要推送和拉取代码，核心就是git cz替代git commit -m ''可以选择本次提交的类型，很方便
git add -A && git cz && git pull && git push
```

代码校验 - lint:eslint

```shell
yarn lint:eslint
# 实际执行
eslint --fix --ext \"src/**/*.{vue,less,css,scss}\"
```

代码校验 - lint:prettier

```shell
yarn lint:prettier
# 实际执行
prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"
```

代码校验 - lint:stylelint

```shell
yarn lint:prettier
# 实际执行
stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/
```
