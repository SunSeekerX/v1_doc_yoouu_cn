# Basic

![frontend.png](https://static.yoouu.cn/imgs/doc/front-end/frontend.png)

## prettier

代码格式化工具，可以配置在提交之前按照配置文件格式化好代码。保持风格一致。

**安装**

```bash
npm install --save-dev --save-exact prettier
```

**创建配置文件**

```bash
echo {}> .prettierrc.json
```

**创建忽略文件**

文件名：[.prettierignore](https://prettier.io/docs/en/ignore.html)

**格式化**

```bash
npx prettier --write .
```

> npx 可以让你调用你本地安装的包，如果你没安装，npx 会去下载最新的版本。实际推荐本地安装一个锁定版本。
>
> 而且也也更快。

**配合 `husky` 和 `lint-staged`**

```bash
npm i husky lint-staged -D
```

`package.json`

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "devDependencies": {
    "husky": "^4.3.0",
    "lint-staged": "^10.5.1",
    "prettier": "2.1.2"
  }
}
```

### markdown

`prettier.config.js`

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

`lint-staged.config.js`

```javascript
module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write'],
}
```

`package.json`

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "devDependencies": {
    "husky": "^4.3.0",
    "lint-staged": "^10.5.1",
    "prettier": "2.1.2"
  }
}
```

## Vscode config

```json
{
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.rulers": [100],
  "editor.suggestSelection": "first",
  "editor.wordWrap": "wordWrapColumn",
  "editor.smoothScrolling": true,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.fontFamily": "JetBrains Mono",
  "files.insertFinalNewline": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  },
  "window.zoomLevel": 1,
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[handlebars]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "fileheader.configObj": {
    "prohibitAutoAdd": ["json", "md"],
    "autoAdd": true,
    "language": {
      "js/ts/scss/java": {
        "head": "/**",
        "middle": " * @",
        "end": " */"
      }
    }
  },
  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [80],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false
  },
  "files.associations": {
    "*.nvue": "vue"
  },
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "quoteProps": "as-needed",
      "jsxSingleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "arrowParens": "always",
      "rangeStart": 0,
      "insertPragma": false,
      "requirePragma": false,
      "proseWrap": "never",
      "htmlWhitespaceSensitivity": "strict",
      "vueIndentScriptAndStyle": true,
      "endOfLine": "auto",
      "embeddedLanguageFormatting": "auto",
      "overrides": [
        {
          "files": "*.md",
          "options": {
            "tabWidth": 2
          }
        }
      ]
    }
  },
  "fileheader.customMade": {
    "name": "",
    "author": "SunSeekerX",
    "Date": "Do not edit",
    "LastEditors": "SunSeekerX",
    "LastEditTime": "Do not edit"
  },
  "[dockerfile]": {
    "editor.defaultFormatter": "foxundermoon.shell-format"
  },
  "prettier.printWidth": 100,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.quoteProps": "as-needed",
  "prettier.trailingComma": "es5",
  "prettier.bracketSpacing": true,
  "prettier.jsxBracketSameLine": false,
  "prettier.arrowParens": "always",
  "prettier.rangeStart": 0,
  "prettier.insertPragma": false,
  "prettier.requirePragma": false,
  "prettier.proseWrap": "never",
  "prettier.htmlWhitespaceSensitivity": "strict",
  "prettier.vueIndentScriptAndStyle": true,
  "prettier.endOfLine": "auto",
  "prettier.embeddedLanguageFormatting": "auto",
  "sync.gist": "7e4a454490b30e5e5934976993e322ce",
  "git.autofetch": true,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "vsicons.dontShowNewVersionMessage": true,
  "breadcrumbs.icons": false,
  "tabnine.experimentalAutoImports": true,
  "terminal.integrated.shell.windows": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
  "html.format.enable": true,
  "html.format.indentHandlebars": true,
  "html.format.maxPreserveNewLines": 1,
  "files.eol": "\n",
  "debug.openDebug": "openOnDebugBreak",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.list.smoothScrolling": true,
  "workbench.tips.enabled": false,
  "workbench.iconTheme": "vscode-icons",
  "workbench.colorTheme": "Atom One Dark"
}
```
