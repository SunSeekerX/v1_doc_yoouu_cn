# NPM

> 记录相关 npm 技巧。

## 📌 加速下载 - [tbify](https://github.com/fjc0k/tbify)

**安装**

```bash
# npm
npm install tbify --global

# yarn
yarn global add tbify

# pnpm
pnpm add --global tbify
```

**使用**

对于常用的包管理命令，`tbify` 提供了使用淘宝 NPM 镜像的等价命令，除了发布包到 npm 时必须使用 `npm publish` 外，都可以使用等价命令进行相关操作：

| 原命令 | 使用淘宝 NPM 镜像的命令 | 示例                  |
| ------ | ----------------------- | --------------------- |
| `nvm`  | `tnvm` (或 `tbify nvm`) | `tnvm install 8.0.0`  |
| `npm`  | `tnpm` (或 `tbify npm`) | `tnpm install react`  |
| `npx`  | `tnpx` (或 `tbify npx`) | `tnpx kill-port 3000` |
| `yarn` | `tyn` (或 `tbify yarn`) | `tyn add react`       |
| `pnpm` | `tpm` (或 `tbify pnpm`) | `tpm add react`       |
| `pnpx` | `tpx` (或 `tbify pnpx`) | `tpx kill-port 3000`  |

对于其他命令，在使用时加上 `tbify` 前缀即可，比如：

```bash
tbify printenv npm_config_registry
# -> https://r.npm.taobao.org
```

## 📌 加速下载 - yarn 代理

```powershell
yarn config set proxy http://127.0.0.1:7890
yarn config set https-proxy http://127.0.0.1:7890

# 如果 SSL 报错，可以禁用校验
yarn config set strict-ssl false
# 设置淘宝源
yarn config set registry https://registry.npm.taobao.org/
```

## 📌 ~~加速下载 -替换镜像~~

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

## 📌 husky 6.0

### 官方 4.x 迁移到 6.x 教程

[https://github.com/typicode/husky-4-to-6](https://github.com/typicode/husky-4-to-6)

**使用**

#### npm

```shell
npm install husky@6 --save-dev \
  && npx husky-init \
  && npm exec -- github:typicode/husky-4-to-6 --remove-v4-config

# npm v6
npx github:typicode/husky-4-to-6 --remove-v4-config
```

#### yarn

Yarn 1

```shell
yarn add husky@6 --dev \
  && npx husky-init \
  && npm exec -- github:typicode/husky-4-to-6 --remove-v4-config
```

Yarn 2

```shell
yarn add husky@6 --dev \
  && yarn dlx husky-init --yarn2 \
  && npm exec -- github:typicode/husky-4-to-6 --remove-v4-config
```

#### What each command does

`husky init` sets up Git hooks and updates your `package.json` scripts (you may want to commit your changes to `package.json` before running `husky init`).

`husky-4-to-6` creates hooks based on your husky v4 config. If `--remove-v4-config` is passed, previous config will be deleted (recommended).

#### Revert

If there's an error during the process, you can clean things up by running:

```
rm -rf .husky && git config --unset core.hooksPath
```

### 安装教程

1. 安装 husky

```shell
npm install -D husky
```

2. 在 packgae.json 中添加 prepare 脚本

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

prepare 脚本会在`npm install`（不带参数）之后自动执行。也就是说当我们执行 npm install 安装完项目依赖后会执行 `husky install`命令，该命令会创建.husky/目录并指定该目录为 git hooks 所在的目录。

3. 添加 git hooks，运行一下命令创建 git hooks

```shell
npx husky add .husky/pre-commit "npm run test"
```

运行完该命令后我们会看到.husky/目录下新增了一个名为 pre-commit 的 shell 脚本。也就是说在在执行 git commit 命令时会先执行 pre-commit 这个脚本。pre-commit 脚本内容如下：

```powershell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run test
```

可以看到该脚本的功能就是执行 npm run test 这个命令

## 📌 查看，更新，卸载全局安装的包

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

## 📌 升级 package.json 依赖

安装：

```bash
npm install -g npm-check-updates
```

使用： 检查 package.json 中 dependencies 的最新版本：

```bash
ncu
```

更新 dependencies 到新版本：

```bash
ncu -u
```

更新全部 dependencies 到最新版本(包括当前指定版本范围满足最新版本号的,比如^4.2.0 -> ^4.3.0)：

```bash
ncu -a
```

## 📌 排序 package.json

对项目的 `package.json` 进行排序，满足你的强迫症

1. **全局安装插件**

   ```bash
   npm install --global sort-package-json
   ```

2. **排序**

   ```bash
   npx sort-package-json
   ```

## 📌 yarn 升级依赖

```bash
yarn upgrade-interactive
```

## 📌 清除缓存

npm

```bash
npm cache clean -f
```

yarn

```bash
yarn cache clean
```

## 📌 NodeJs 版本管理

**windows**

使用 [nvm](https://github.com/coreybutler/nvm-windows) 进行管理，具体安装查看 github 说明。

**mac**

[nvm](https://github.com/nvm-sh/nvm) 具体安装查看 github 说明。

## 📌 规范提交代码

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

### 1️⃣ 安装 [Commitizen](https://github.com/commitizen/cz-cli)

> 替代你的 git commit（帮助我们生成符合规范的 commit message）
>
> commitizen 为我们提供一些 cli 命令，比如：commitizen init、 git cz

```bash
# 推荐全局安装
npm install -g commitizen
```

### 2️⃣ 安装 [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

> 是一个`commitizen`的 adapter（适配器），一个符合 Angular 团队规范的 preset（按照我们指定的规范帮助我们生成 commit message）
>
> 还有很多花里胡哨的适配器可以选择，看你们团队的选择了，例如带 `emoji` 表情的。。。😆

**全局安装**

> 个人推荐全局安装，因为这个包貌似和其他的包会产生某些冲突，导致项目用 `yarn` 方式安装的包无法使用，只能用 `npm`。

```bash
npm install -g cz-conventional-changelog
```

使用 `bash` 环境执行以下命令，`Windows` 用 `power shell` 测试文件编码会有问题。这是指定全局的适配器路径

```bash
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

**执行完这一步就可以使用了，下面的步骤为高级用法！**

**局部安装（不推荐，虽然官方推荐）**

接下来，通过键入命令初始化项目以使用 cz-convention -changelog 适配器

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

### 3️⃣ 自定义 adapter - [cz-customizable](https://github.com/leonardoanalista/cz-customizable)

> 可自定义的 Commitizen 插件。比如：默认的提交 types 可能特别多，有些时候我们可能只需要其中的某些 type，或者自定义 type。

```bash
yarn add cz-customizable -D
```

配置 `package.json`

```js
{
    "config": {
        "commitizen": {
          "path": "node_modules/cz-customizable"
        }
    }
}
```

在根目录下，配置 .cz-config.js

```js
module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     A new feature',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test:     Add missing tests or correcting existing tests',
    },
    {
      value: 'build',
      name: 'build:    Add missing tests or correcting existing tests',
    },
    {
      value: 'revert',
      name: 'revert:   Revert to a commit',
    },
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf', 'build', 'revert'],
}
```

### 4️⃣ 校验 commit - [commitlint](https://github.com/conventional-changelog/commitlint)

> `commitlint` 帮我们规范 `commit message`（`commitlint`的实现方式和`commitizen`差不多也需要个 adapter）
>
> - @commitlint/cli 【命令行工具】
> - @commitlint/config-conventional 【校验规则】符合 Angular 团队规范（不同于代码规范），当然还有其它规范。

```bash
# [推荐局部安装]
yarn add @commitlint/config-conventional @commitlint/cli -D
```

`package.json` 配置

```json
"commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  }
```

也可以在根目录下使用配置文件： `.commitlintrc.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

**针对自定义的 Adapter 进行 Lint**

[https://github.com/whizark/commitlint-config-czgithub.com](https://github.com/whizark/commitlint-config-cz)

如果是使用 `cz-customizable` 适配器做了破坏 `Angular ` 风格的提交说明配置，那么不能使用 `@commitlint/config-conventional` 规则进行提交说明校验，可以使用 `commitlint-config-cz` 对定制化提交说明进行校验。

安装校验规则：

```bash
npm i -D commitlint-config-cz @commitlint/cli
```

此时的 `.commitlintrc.js` 文件：

```js
module.exports = {
  extends: ['cz'],
}
```

**第三步: Husky**

在提交代码前通常我们会通过 `eslint` 等工具来校验 我们的代码，然后再进行提交，由于 git 提供了 `hook` 机制，所以我们可以通过 `git hook` 在 **pre-commit 进行 eslint**，在 **commit-msg 阶段进行 commit message lint**。

**3.1 pre-commit**

[https://github.com/typicode/huskygithub.com](https://github.com/typicode/husky)

配合 [Husky](https://github.com/typicode/husky) 进行 `git hook `校验

```bash
# 安装
yarn add husky -D
```

配置 `package.json`

```js
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
}
```

或者，使用配置文件：`.huskyrc`

```js
{
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
}
```

**3.2 lint-staged**

当我们运行 eslint 或 stylelint 的命令时，只会检查我们通过 git add 添加到暂存区的文件，可以避免我们每次检查都把整个项目的代码都检查一遍。

```bash
yarn add lint-staged -D
```

配置 `package.json`

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{tsx,ts}": ["prettier --write", "git add"]
  }
}
```

### 5️⃣ standard-version

以上配置已经可以满足提交代码的常规要求，但是如果我们想自动生成 `CHANGELOG`，语义化我们的版本（[Semantic Versioning](https://semver.org/lang/zh-CN/)）。 就需要借助 [standard-version](https://github.com/conventional-changelog/standard-version)

`standard-version` 的作用就是生成 `changelog` 更新 `package.json` 和 `package.lock.json` 中的 `version` 字段。

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

关于 release:

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

配置 `package.json`

```json
{
  "script": {
    // .....
    "release": "standard-version"
  }
}
```

### 6️⃣ 完整的配置

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
      name: 'feat:     A new feature',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    {
      value: 'test',
      name: 'test:     Add missing tests or correcting existing tests',
    },
    {
      value: 'build',
      name: 'build:    Add missing tests or correcting existing tests',
    },
    {
      value: 'revert',
      name: 'revert:   Revert to a commit',
    },
  ],
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf', 'build', 'revert'],
}
```

**.commitlintrc.js**

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // extends: ['cz']
  // cz 方式需要配合插件
  // yarn add commitlint-config-cz @commitlint/cli -D
}
```

### 7️⃣ 提交代码

使用`git cz`代替`git commit`会出现可选的命令行提交界面。

```bash
git-cz
```

## 📌 版本号管理

### 1️⃣ 简介

在 Node.js 项目中的前后端项目中，版本号管理使用的是 NPM 的命令——别跟我说，你是手动改 `package.json` 来更新版本号的。

在命令行敲入 `npm version ?` 就可以看到可以使用的命令：

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

> major：主版本号
>
> minor：次版本号
>
> patch：补丁号
>
> premajor：预备主版本
>
> prepatch：预备次版本
>
> prerelease：预发布版本
>
> 我的 package.jsond 的**当前 version 为 6.0.0**，依次输入下面的命令，package 的 version 会变更为提升后的版本号：

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

如上所示，敲入`npm version preminor`，项目的 version 就从 6.0.0 变成了 6.1.0-0。

对了，项目的 git status 必须是 clear，才能使用上述命令。

如果你的项目中包含 git，它还会自动给你提交更新到 git，`git commit -m "X.Y.Z"`，所以还可以在 npm version NEWVERSION 后面加上-m 参数来指定自定义的 commit message。比如：

```bash
npm version patch -m "Upgrade to %s for reasons"
```

message 中的 s%将会被替换为版本号。

### 2️⃣ 版本号策略

版本号格式：主版本号**.**次版本号**.**修订号；

主版本号：当你做了不兼容的 API 修改；

次版本号：当你做了向后兼容的功能性新增；

修订号：当你做了向后兼容的问题修正；

处于开发阶段的项目版本号以 0.Y.Z 形式表示，此阶段正在开发基础功能、公众 API；

版本号只能增加，禁止下降，代码的修改必须以新版本形式更新；

如何判断发布 1.0.0 版本的时机？ 当你的软件被用于正式环境，它应该已经达到了 1.0.0 版。如果你已经有个稳定的 API 被使用者依赖，也会是 1.0.0 版。如果你很担心向下兼容的问题，也应该算是 1.0.0 版了。

万一不小心把一个不兼容的改版当成了次版本号发行了该怎么办？一旦发现自己破坏了语义化版本控制的规范，就要修正这个问题，并发行一个新的次版本号来更正这个问题并且恢复向下兼容。即使是这种情况，也不能去修改已发行的版本。

### 3️⃣ 编程式

在项目代码中有时候需要判断当前版本，可以通过读取 package 文件获取当前版本：

```javascript
import { version } from './package.json'
```

要判断两个版本号字符串的大小，可以使用插件 `compare-versions`

```javascript
compareVersions('10.1.8', '10.0.4') //  1
compareVersions('10.0.1', '10.0.1') //  0
compareVersions('10.1.1', '10.2.2') // -1
```

### 4️⃣ 自动更新版本号

在项目目录的 `.git/hooks/` 目录中新建文件: `post-commit`——是的，没有后缀名。然后粘贴以下代码并保存文件：

```bash
#!/bin/shCOMMIT_MSG="$(git log --pretty=format:"%s" -1 head)"echo "$COMMIT_MSG" | grep  -q  "^[0-9]"if [ $? -ne 0 ];then  echo $(npm version patch)fi
```

上面代码会在每次 `git commit` 执行后被运行，它检查 commit 的 message 是不是版本号，如果不是，它就会执行 `npm version patch` 更新版本号。

> 来源：[版本号管理策略&&使用 npm 管理项目版本号-朱嘉伟](http://buzhundong.com/post/%E7%89%88%E6%9C%AC%E5%8F%B7%E7%AE%A1%E7%90%86%E7%AD%96%E7%95%A5-%E4%BD%BF%E7%94%A8npm%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE%E7%89%88%E6%9C%AC%E5%8F%B7.html)
