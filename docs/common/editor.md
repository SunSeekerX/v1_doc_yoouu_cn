# editor

## VSCode

> Setting sync id: 7e4a454490b30e5e5934976993e322ce。请复制这个 ID 并将其用于其他设备来下载配置。

### plugins

|                     名称                      |                       简述                       |
| :-------------------------------------------: | :----------------------------------------------: |
|             Atom One Light Theme              |                       主题                       |
|                Auto Close Tag                 |                 自动闭合HTML标签                 |
|                  Auto Import                  |                    import提示                    |
|                Auto Rename Tag                |        修改HTML标签时，自动修改匹配的标签        |
|               Babel JavaScript                |               babel插件，语法高亮                |
|          Beautify css/sass/scss/less          |               css/sass/less格式化                |
|                   Beautify                    |                     代码美化                     |
|                  Color Info                   |      小窗口显示颜色值，rgb,hsl,cmyk,hex等等      |
|                 Color Picker                  |                      拾色器                      |
|                    Chinese                    |                       中文                       |
|                 Document This                 | 注释文档生成 `Ctrl+Alt+D` and again `Ctrl+Alt+D` |
|                    DotENV                     |            高亮显示支持环境(.env)文件            |
|                    ESLint                     |               ESLint插件，高亮提示               |
|                   filesize                    |              状态栏显示当前文件大小              |
|               HTML CSS Support                |                css提示（支持vue）                |
|                 HTML Snippets                 |                                                  |
|        JavaScript (ES6) code snippets         |                  ES6语法代码段                   |
|                koroFileHeader                 |      自动添加注释，配置看全局配置版本(v4.0)      |
|               npm Intellisense                |                                                  |
|               Output Colorizer                |                   彩色输出信息                   |
|           Prettier - Code formatter           |           prettier官方插件,代码格式化            |
|                     vetur                     |             目前比较好的Vue语法高亮              |
|             Reactjs code snippets             |                                                  |
|           React Redux ES6 Snippets            |                                                  |
| ES7 React/Redux/GraphQL/React-Native snippets |                                                  |
|           vscode-styled-components            |            vscode react jsx css 提示             |

### VSCode setting

```json
{
    "editor.wordWrap": "on",
    "editor.fontLigatures": true,
    "editor.tabSize": 2,
    "editor.fontFamily": "Fira Code",
    "files.insertFinalNewline": true,
    "search.exclude": {
        "**/node_modules": true,
        "**/dist": true
    },
    "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
    "window.zoomLevel": 0,
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
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
    "fileheader.configObj": {
        "autoAdd": true,
        "autoAlready": true,
        "wideSame": true,
        "language": {
            "js/ts/scss/java": {
                "head": "/**",
                "middle": " * @",
                "end": " */"
            }
        },
    },
    "fileheader.customMade": {
        "name": "",
        "author": "SunSeekerX",
        "Date": "Do not edit",
        "LastEditors": "SunSeekerX",
        "LastEditTime": "Do not edit",
    },
    "prettier.singleQuote": true,
    "prettier.semi": false,
    "workbench.iconTheme": "material-icon-theme",
    "sync.gist": "7e4a454490b30e5e5934976993e322ce",
    "git.autofetch": true,
    "workbench.colorTheme": "One Monokai",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "explorer.confirmDelete": false,
}

```

### Shortcut key 快捷键

#### `递归折叠方法` 折叠当前光标下所有方法与参数

折叠 `ctrl+k ctrl+[` 

取消折叠 `ctrl+k` `ctrl+j`

## WebStorm

### 01. 格式化代码快捷键

`Ctrl+Alt+L`

### 02. IntelliJ IDEA 2018 设置代码提示对大小写不敏感

>  setting->Editor->General->Code Completion
>  取消勾选Match case 