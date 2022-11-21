# 开发工具技巧

## VSCode

> Setting sync id: 7e4a454490b30e5e5934976993e322ce。请复制这个 ID 并将其用于其他设备来下载配置。

### 0x1 插件

#### any-rule

快速输入常用的正则表达式

#### Auto Close Tag

自动添加 HTML/XML 关闭标签，就像 Visual Studio IDE 或 Sublime Text 所做的一样。

#### Bracket Pair Colorizer

彩虹括号

![Screenshot](https://github.com/CoenraadS/BracketPair/raw/master/images/example.png)

#### Code Runner

运行代码片段或代码文件的多种语言:C, c++， Java, JavaScript, PHP, Python, Perl, Perl 6, Ruby, Go, Lua, Groovy, PowerShell, BAT/CMD, BASH/SH, f#脚本，f#(。， c#脚本，c#(。NET Core)、VBScript、TypeScript、CoffeeScript、Scala、Swift、Julia、Crystal、OCaml Script、R、AppleScript、Elixir、Visual Basic .NET、Clojure、Haxe、Objective-C、Rust、球拍、Scheme、AutoHotkey、AutoIt、Kotlin、Dart、Free Pascal、Haskell、Nim、D、Lisp、Kit、V、SCSS、Sass、CUDA 和定制命令

#### Color Info

Visual Studio 代码扩展，提供 css 颜色的快速信息。

![fields](https://github.com/mattbierner/vscode-color-info/raw/master/media/starter-example.png)

#### DotENV

环境变量高亮

![Example](https://github.com/mikestead/vscode-dotenv/raw/master/images/screenshot.png)

#### filesize

此包用于与 Visual Studio 代码编辑器一起使用，并在编辑器的状态栏中显示焦点文件的大小。

好处:如果你点击状态栏组件，它会显示更多关于文件的信息!

#### IntelliSense for CSS class names in HTML

一个 Visual Studio 代码扩展，它为 HTML 类属性提供 CSS 类名补全，基于在工作空间中找到的定义或通过 link 元素引用的外部文件。

![img](https://i.imgur.com/5crMfTj.gif)

#### JavaScript (ES6) code snippets

> 这个扩展包含 Vs 代码编辑器的 ES6 语法中的 JavaScript 代码片段(支持 JavaScript 和 TypeScript)。
>
> `JavaScript`代码片段

#### koroFileHeader

> 在 vscode 中用于生成文件头部注释和函数注释的插件，经过多版迭代后，插件：支持所有主流语言,灵活方便，文档齐全，食用简单！觉得插件不错的话，就给个[Star](https://github.com/OBKoro1/koro1FileHeader)⭐️ 吧~

使用效果：

![example.gif](https://raw.githubusercontent.com/OBKoro1/koro1FileHeader/master/images/example.gif)

简介

1. **文件头部添加注释**:

   - 在文件开头添加注释，记录文件信息/文件的传参/出参等
   - 支持用户高度自定义注释选项, 适配各种需求和注释。
   - 保存文件的时候，自动更新最后的编辑时间和编辑人
   - 快捷键：`window`：`ctrl+alt+i`,`mac`：`ctrl+cmd+i`

2. **在光标处添加函数注释**:

   - 在光标处自动生成一个注释模板
   - 支持用户高度自定义注释选项
   - 快捷键：`window`：`ctrl+alt+t`,`mac`：`ctrl+cmd+t`
   - 快捷键不可用很可能是被占用了,[参考这里](https://github.com/OBKoro1/koro1FileHeader/issues/5)

3. [支持一键添加佛祖保佑永无 BUG、神兽护体等注释图案](https://github.com/OBKoro1/koro1FileHeader/wiki/佛祖保佑永无BUG、神兽护体、注释图案)

   ![img](https://github.com/OBKoro1/koro1FileHeader/raw/master/images/codeDesign.gif?raw=true)

4. 查看更多[功能](https://github.com/OBKoro1/koro1FileHeader/wiki/配置),以及有更多需求可以给我提[issue](https://github.com/OBKoro1/koro1FileHeader/issues)。

#### language-stylus

> stylus 支持

#### npm

#### npm Intellisense

> npm 插件自动引入

![](https://static.yoouu.cn/imgs/doc/basic/ide/npm-Intellisense.gif)

#### One Monokai Theme

> 暗色主题

![](https://static.yoouu.cn/imgs/doc/basic/ide/one-monokai-theme.png)

#### Path Intellisense

> 路径提示

#### Prettier - Code formatter

> 很牛逼的代码格式化工具

#### Settings Sync

> 很重要的插件，可以用来同步 vscode 设置、插件、配置

#### shell-format

> shell 格式化

#### TypeScript Hero

> 跟 typescript 有关

#### TypeScript Importer

> typescript 自动引入

#### Vetur

> 开发 vue 必装

#### Visual Studio IntelliCode

> 不知道干啥的，好像是智慧代码提示

#### Vscode NestJs Snippets

> nestjs 代码片段

#### vscode-icons

> 文件图标插件

#### Vue 2 Snippets

> vue2 代码片段

#### YAML

> 高亮显示 YAML 文件

### 0x2 VSCode setting

> 更新时间：2020-05-14 17:08:16
>
> 配置 json 参考

```json
{
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.fontFamily": "Fira Code,mononoki,Fira Code",
  "files.insertFinalNewline": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  },
  "window.zoomLevel": 0,
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
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "fileheader.configObj": {
    "prohibitAutoAdd": ["json", "md"],
    "autoAdd": true,
    // "autoAlready": true,
    "language": {
      "js/ts/scss/java": {
        "head": "/**",
        "middle": " * @",
        "end": " */"
      }
    }
  },
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "singleQuote": true,
      "semi": false
    }
  },
  "fileheader.customMade": {
    "name": "",
    "author": "SunSeekerX",
    "Date": "Do not edit",
    "LastEditors": "SunSeekerX",
    "LastEditTime": "Do not edit"
  },
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "sync.gist": "7e4a454490b30e5e5934976993e322ce",
  "git.autofetch": true,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "explorer.confirmDelete": false,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.activityBar.visible": true,
  "editor.fontSize": 15,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "workbench.colorTheme": "One Monokai",
  "workbench.iconTheme": "vscode-icons",
  "vsicons.dontShowNewVersionMessage": true,
  "editor.wordWrap": "on"
}
```

### 0x3 快捷键

#### 递归折叠方法

折叠当前光标下所有方法与参数

先按`ctrl+k`，然后`ctrl+0`

## jetbrains

### 0x1 格式化代码快捷键

`Ctrl+Alt+L`

### 0x2 IntelliJ IDEA 2018 设置代码提示对大小写不敏感

> setting->Editor->General->Code Completion 取消勾选 Match case

## IDEA

### 0x1 激活

> 文档内的方法如果失效了，自己 Google 一下。就解决了，如果我自己使用文档方法无法激活才会更新。

激活码网站

[IntelliJ IDEA 激活码](http://idea.fxw.la/)

[http://idea.medeming.com/code/](http://idea.medeming.com/code/)

2020.1 的补丁 + 激活码

> 最新补丁：https://share.weiyun.com/5hbLsZy
>
> 密码：9gsu6b

效果图：

![](https://static.yoouu.cn/imgs/doc/basic/ide/idea-2020-register.png)
