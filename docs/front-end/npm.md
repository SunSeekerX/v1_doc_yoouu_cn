# npm

## 替换默认的镜像源

```bash
# 1、查看一下当前源
npm config get registry
# 2、切换为淘宝源
npm config set registry http://registry.npm.taobao.org/
# 3、换成原来的
npm config set registry https://registry.npmjs.org/

# yarn
# 1、查看一下当前源
yarn config get registry
# 2、切换为淘宝源
yarn config set registry https://registry.npm.taobao.org
# 3、或者切换为自带的
yarn config set registry https://registry.yarnpkg.com

# 其他镜像
yarn config set disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像
yarn config set node_sqlite3_binary_host_mirror https://npm.taobao.org/mirrors # sqlite3 镜像
yarn config set sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
yarn config set phantomjs_cdnurl "http://cnpmjs.org/downloads"
yarn config set electron_mirror "https://npm.taobao.org/mirrors/electron/"
yarn config set sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
yarn config set profiler_binary_host_mirror "https://npm.taobao.org/mirrors/node-inspector/"
yarn config set chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
```



## 依赖镜像

```bash
# ==========================================================
# NPM
# ==========================================================

npm config set disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像

## 以下选择添加
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass # node-sass 二进制包镜像
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/ # electron 二进制包镜像
npm config set puppeteer_download_host https://npm.taobao.org/mirrors # puppeteer 二进制包镜像
npm config set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver # chromedriver 二进制包镜像
npm config set operadriver_cdnurl https://npm.taobao.org/mirrors/operadriver # operadriver 二进制包镜像
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs # phantomjs 二进制包镜像
npm config set selenium_cdnurl https://npm.taobao.org/mirrors/selenium # selenium 二进制包镜像
npm config set node_inspector_cdnurl https://npm.taobao.org/mirrors/node-inspector # node-inspector 二进制包镜像
npm config set node_sqlite3_binary_host_mirror https://npm.taobao.org/mirrors
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/

npm cache clean --force # 清空缓存

# ==========================================================
# YARN
# ==========================================================

yarn config set registry https://r.npm.taobao.org # 注册模块镜像
yarn config set disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像

## 以下选择添加
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass # node-sass 二进制包镜像
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ # electron 二进制包镜像
yarn config set puppeteer_download_host https://npm.taobao.org/mirrors # puppeteer 二进制包镜像
yarn config set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver # chromedriver 二进制包镜像
yarn config set operadriver_cdnurl https://npm.taobao.org/mirrors/operadriver # operadriver 二进制包镜像
yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs # phantomjs 二进制包镜像
yarn config set selenium_cdnurl https://npm.taobao.org/mirrors/selenium # selenium 二进制包镜像
yarn config set node_inspector_cdnurl https://npm.taobao.org/mirrors/node-inspector # node-inspector 二进制包镜像

yarn cache clean # 清空缓存
```



## 查看，更新，卸载全局安装的包

文档：https://www.npmjs.cn/

> npm 查看全局安装过的包命令：

```bash
npm list -g --depth 0
```

解释一下：

| 命令      |       解释       |
| --------- | :--------------: |
| npm list  |  显示安装过的包  |
| -g        | 指全局安装过的包 |
| --depth 0 | 限制输出模块层级 |

> 卸载

```bash
npm uninstall -g jshint
```

> 更新

```bash
npm update -g jshint
```



## 升级`package.json`依赖包

安装：

```bash
npm install -g npm-check-updates
```

使用： 检查package.json中dependencies的最新版本：

```bash
ncu
```

更新dependencies到新版本：

```bash
ncu -u
```

更新全部dependencies到最新版本(包括当前指定版本范围满足最新版本号的,比如^4.2.0 -> ^4.3.0)：

```bash
ncu -a
```



## 清除缓存

npm

```bash
npm cache clean -f
```

yarn

```bash
yarn cache clean
```



## ✅规范提交代码

> [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.2/)
>
> 一种用于给提交信息增加人机可读含义的规范
>
> [Commitizen](http://commitizen.github.io/cz-cli/) - 命令行规范提交工具
>
> 文章参考：
>
> [Commit message 和 Change log 编写指南 - 阮一峰](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
>
> [如何配置 Git Commit Message - 伯艺](https://zhuanlan.zhihu.com/p/69635847)



### 0x1 安装[Commitizen](https://github.com/commitizen/cz-cli)

> 替代你的 git commit（帮助我们生成符合规范的 commit message）

```bash
# [推荐全局安装] commitizen 为我们提供一些 cli 命令
# 比如：commitizen init、 git cz

npm install -g commitizen
```

### 0x2 安装[cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

> 是一个`commitizen`的 adapter（适配器），一个符合 Angular 团队规范的 preset（按照我们指定的规范帮助我们生成 commit message）

接下来，通过键入命令初始化项目以使用cz-convention -changelog适配器

```bash
# 有两种安装方式

# 1.手动安装 [推荐]
yarn add cz-conventional-changelog -D

# 2.使用npm自动安装
commitizen init cz-conventional-changelog --save-dev --save-exact

# 2.使用yarn自动安装
commitizen init cz-conventional-changelog --yarn --dev --exact
```

> 配置 package.json

```js
{
    "scripts": {
        "commit": "git-cz"
    },
    "config": {
        "commitizen": {
          "path": "node_modules/cz-conventional-changelog"
        }
    }
}
```



### 0x3 自定义 adapter

安装[cz-customizable](https://github.com/leonardoanalista/cz-customizable)

> 可自定义的Commitizen插件。比如：默认的提交 types 可能特别多，有些时候我们可能只需要其中的某些 type，或者自定义type。

```bash
yarn add cz-customizable -D
```

> 配置 package.json

```js
{
    "config": {
        "commitizen": {
          "path": "node_modules/cz-customizable"
        }
    }
}
```

> 在根目录下，配置 .cz-config.js

```js
module.exports = {
  types: [
    {
      value: 'feat',
      name : 'feat:     A new feature'
    },
    {
      value: 'fix',
      name : 'fix:      A bug fix'
    },
    {
      value: 'docs',
      name : 'docs:     Documentation only changes'
    },
    {
      value: 'refactor',
      name : 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name : 'perf:     A code change that improves performance'
    },
    {
      value: 'test',
      name : 'test:     Add missing tests or correcting existing tests'
    },
    {
      value: 'build',
      name : 'build:    Add missing tests or correcting existing tests'
    },
    {
      value: 'revert',
      name : 'revert:   Revert to a commit'
    }
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf', 'build', 'revert']
};
```



### 0x4 校验 commit

[commitlint](https://github.com/conventional-changelog/commitlint)

> `commitlint` 帮我们规范 `commit message`（`commitlint`的实现方式和`commitizen`差不多也需要个 adapter）
>
> - @commitlint/cli 【命令行工具】
> - @commitlint/config-conventional 【校验规则】符合 Angular团队规范（不同于代码规范），当然还有其它规范。

```bash
# [推荐局部安装]
yarn add @commitlint/config-conventional @commitlint/cli -D 
```

> package.json 配置

```json
"commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  }
```

也可以

> 在根目录下使用配置文件： `.commitlintrc.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```



**针对自定义的 Adapter 进行 Lint**

[https://github.com/whizark/commitlint-config-czgithub.com](https://github.com/whizark/commitlint-config-cz)

如果是使用**`cz-customizable`**适配器做了破坏 Angular 风格的提交说明配置，那么不能使用`@commitlint/config-conventional`规则进行提交说明校验，可以使用`commitlint-config-cz` 对定制化提交说明进行校验。

安装校验规则：

```bash
npm i -D commitlint-config-cz @commitlint/cli
```

此时的 `.commitlintrc.js` 文件：

```js
module.exports = {
  extends: [
    'cz'
  ]
};
```



**第三步: Husky**

在提交代码前通常我们会通过`eslint`等工具来校验 我们的代码，然后再进行提交，由于 git 提供了 `hook`机制，所以我们可以通过 `git hook` 在 **pre-commit 进行 eslint**，在 **commit-msg 阶段进行 commit message lint**。

**3.1 pre-commit**

[https://github.com/typicode/huskygithub.com](https://github.com/typicode/husky)

配合 [Husky](https://github.com/typicode/husky) 进行 `git hook `校验

```bash
# 安装
yarn add husky -D
```

> 配置 package.json

```js
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
}
```

> 或者，使用配置文件：`.huskyrc`

```js
{
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
}
```



**3.2 lint-staged**

当我们运行eslint或stylelint的命令时，只会检查我们通过git add添加到暂存区的文件，可以避免我们每次检查都把整个项目的代码都检查一遍。

```bash
yarn add lint-staged -D
```

配置 package.json

```json
{
    "husky": {
        "hooks": {
          "pre-commit": "lint-staged",
          "commit-msg": "commitlint -e $GIT_PARAMS"
        }
    },
    "lint-staged": {
        "src/**/*.{tsx,ts}": [
          "prettier --write",
          "git add"
        ]
    }
}
```

### 0x5 standard-version

以上配置已经可以满足提交代码的常规要求，但是如果我们想自动生成 CHANGELOG，语义化我们的版本（[Semantic Versioning](https://semver.org/lang/zh-CN/)）。 就需要借助 [standard-version](https://github.com/conventional-changelog/standard-version)

standard-version的作用就是生成 changelog 更新 package.json 和 package.lock.json 中的 version 字段。

关于版本：

```bash
# 版本
# major：主版本号，不兼容的API修改
# minor：次版本号，向下兼容，功能性增加
# patch：修订号，向下兼容，bug fixed

# 版本发布进度
# alpha（内测）
# beta（公测）
# rc （正式版本的候选版本）  Release Candiate

# npm 发布指令
# 升级补丁版本号：
npm version patch。
# 升级小版本号：
npm version minor。
# 升级大版本号：
npm version major。
```

关于release:

```bash
# 发布首个版本
npm run release -- --first-release

# 发布预发布版本
# 例如：v1.0.0 -> v1.0.0-0
npm run release -- --prerelease

# 发布与首个 alpha 版本 
# 例如：v1.0.0 -> 1.0.1-alpha.0
npm run release -- --prerelease alpha

# 发布 major、minor、patch 版本 
npm run release -- --release-as minor
```

安装

```bash
yarn add standard-version -D
```

配置 package.json

```text
{
    "script": {
        // .....
        "release": "standard-version"
    }
}
```



### 0x6 完整的配置

**package.json**

```js
"scripts": {
    // ....
    "commit": "git-cz",
    "release": "standard-version"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{tsx,ts}": [
      "prettier --write",
      "git add"
    ]
  },
```

**.cz-config.js**

```js
// type: commit 的类型
// 参考：https://juejin.im/post/5afc5242f265da0b7f44bee4
// feat: 新特性
// fix: 修改问题
// docs: 文档修改
// style: 代码格式修改, 注意不是 css 修改
// refactor: 代码重构
// chore: 其他修改, 比如构建流程, 依赖管理.
// subject: commit 的概述, 建议符合  50/72 formatting
// ...
module.exports = {
  types: [
    {
      value: 'feat',
      name : 'feat:     A new feature'
    },
    {
      value: 'fix',
      name : 'fix:      A bug fix'
    },
    {
      value: 'docs',
      name : 'docs:     Documentation only changes'
    },
    {
      value: 'refactor',
      name : 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name : 'perf:     A code change that improves performance'
    },
    {
      value: 'test',
      name : 'test:     Add missing tests or correcting existing tests'
    },
    {
      value: 'build',
      name : 'build:    Add missing tests or correcting existing tests'
    },
    {
      value: 'revert',
      name : 'revert:   Revert to a commit'
    }
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf', 'build', 'revert']
};
```

**.commitlintrc.js**

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
  // extends: ['cz']
  // cz 方式需要配合插件
  // yarn add commitlint-config-cz @commitlint/cli -D
}
```

## 提交代码

使用`git cz`代替`git commit`会出现可选的命令行提交界面。

```bash
git cz -a
```




## 版本号管理

### 命令

在Node.js项目中的前后端项目中，版本号管理使用的是NPM的命令——别跟我说，你是手动改package来更新版本号的。

在命令行敲入`npm version ?`就可以看到可以使用的命令：

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

major：主版本号

minor：次版本号

patch：补丁号

premajor：预备主版本

prepatch：预备次版本

prerelease：预发布版本

我的package.jsond的**当前version为6.0.0**，依次输入下面的命令，package的version会变更为提升后的版本号：

```bash
C:\Users\Administrator\Desktop\work\stage-view (master) (stage-view@6.0.0)
λ npm version preminor
v6.1.0-0
C:\Users\Administrator\Desktop\work\stage-view (master) (stage-view@6.1.0-0)
λ npm version minor
v6.1.0
C:\Users\Administrator\Desktop\work\stage-view (master) (stage-view@6.1.0)
λ npm version prepatch
v6.1.1-0
C:\Users\Administrator\Desktop\work\stage-view (master) (stage-view@6.1.1-0)
λ npm version patch
v6.1.1
C:\Users\Administrator\Desktop\work\stage-view (master) (stage-view@6.1.1)
λ npm version prerelease
v6.1.2-0
C:\Users\Administrator\Desktop\work\stage-view (master) (stage-view@6.1.2-0)
λ npm version premajor
v7.0.0-0
C:\Users\Administrator\Desktop\work\stage-view (master) (stage-view@7.0.0-0)
λ npm version major
v7.0.0
```

如上所示，敲入`npm version preminor`，项目的version就从6.0.0变成了6.1.0-0。

对了，项目的git status必须是clear，才能使用上述命令。

如果你的项目中包含git，它还会自动给你提交更新到git，`git commit -m "X.Y.Z"`，所以还可以在npm version NEWVERSION 后面加上-m参数来指定自定义的commit message。比如：

```bash
npm version patch -m "Upgrade to %s for reasons"
```

message中的s%将会被替换为版本号。

### 版本号策略

版本号格式：主版本号**.**次版本号**.**修订号；

主版本号：当你做了不兼容的 API 修改；

次版本号：当你做了向后兼容的功能性新增；

修订号：当你做了向后兼容的问题修正；

处于开发阶段的项目版本号以0.Y.Z形式表示，此阶段正在开发基础功能、公众API；

版本号只能增加，禁止下降，代码的修改必须以新版本形式更新；

如何判断发布 1.0.0 版本的时机？ 当你的软件被用于正式环境，它应该已经达到了 1.0.0 版。如果你已经有个稳定的 API 被使用者依赖，也会是 1.0.0 版。如果你很担心向下兼容的问题，也应该算是 1.0.0 版了。

万一不小心把一个不兼容的改版当成了次版本号发行了该怎么办？一旦发现自己破坏了语义化版本控制的规范，就要修正这个问题，并发行一个新的次版本号来更正这个问题并且恢复向下兼容。即使是这种情况，也不能去修改已发行的版本。

### 编程式

在项目代码中有时候需要判断当前版本，可以通过读取package文件获取当前版本：

```bash
import {version} from './package.json'
```

要判断两个版本号字符串的大小，可以使用插件 compare-versions :

```bash
compareVersions('10.1.8', '10.0.4'); // 1compareVersions('10.0.1', '10.0.1'); // 0
```

### 自动更新版本号

在项目目录的`.git/hooks/`目录中新建文件: `post-commit`——是的，没有后缀名。
然后粘贴以下代码并保存文件：

```bash
#!/bin/shCOMMIT_MSG="$(git log --pretty=format:"%s" -1 head)"echo "$COMMIT_MSG" | grep  -q  "^[0-9]"if [ $? -ne 0 ];then  echo $(npm version patch)fi
```

上面代码会在每次`git commit` 执行后被运行，它检查commit的message是不是版本号，如果不是，它就会执行`npm version patch`更新版本号。

> 来源：[版本号管理策略&&使用npm管理项目版本号-朱嘉伟](http://buzhundong.com/post/%E7%89%88%E6%9C%AC%E5%8F%B7%E7%AE%A1%E7%90%86%E7%AD%96%E7%95%A5-%E4%BD%BF%E7%94%A8npm%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE%E7%89%88%E6%9C%AC%E5%8F%B7.html)