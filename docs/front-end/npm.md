## npm

### 替换默认的镜像源

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
```



### 查看，更新，卸载全局安装的包

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



### package.json升级依赖包

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
