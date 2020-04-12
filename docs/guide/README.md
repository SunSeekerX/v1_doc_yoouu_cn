# 📖 Common

> **目的 需求 过程 结果**

## 1. Node.js

### 1.1 Change npm or yarn config

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

### 1.2 Centos install node.js

```bash
# 1.采用二进制安装安装迅速方便管理，下载二进制包地址：https://nodejs.org/zh-cn/download/

# 2.上传文件到/usr/local/下，解压
    tar -xJvf node-$VERSION-$DISTRO.tar.xz

# 3.编辑全局环境变量配置文件，在末尾加上
    vim /etc/profile
    # Nodejs
    export PATH=$PATH:'/usr/local/node-v12.16.1-linux-x64/bin/'

# 4.刷新配置文件，执行
	. /etc/profile
    # or
    source /etc/profile

# 5.检查安装是否成功
    node -v
    npm -v
    # 下面就和windows一样了，不要删除app下面的node.js目录
```



### 1.3 Centos安装nginx

```bash
# 1.关闭防火墙
iptables -F
iptables -X
setenforce 0

# 2.下载nginx上传到/usr/local/，解压
tar -zxvf nginx-1.16.0.tar.gz

# 3. 然后用yum安装依赖项，如果没装以上相关的依赖，会在./configure过程中出现各种错误
yum install gcc pcre-devel zlib-devel

```



## 2. Docker

### 2.1 安装Docker

> **centos安装文档**：[https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)
>
> **Docker Hub**: [https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)



### 2.2 Docker安装`MariaDB`

```shell
# 1.搜索mariadb镜像（非必须）
docker search mariadb
# 2.下载docker镜像
docker pull mariadb
# 3.查看本地已有的所有镜像
docker images
# 4.建一个目录作为和容器的映射目录(-p:递归建立目录)
mkdir -p /data/mariadb
# 5.启动MariaDB
docker run --name mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=输入数据库root用户的密码 -v /data/mariadb:/var/lib/mysql -d mariadb
#　　--name启动容器设置容器名称为mariadb
#　　-p设置容器的3306端口映射到主机3306端口
#　　-e MYSQL_ROOT_PASSWORD设置环境变量数据库root用户密码为输入数据库root用户的密码
#　　-v设置容器目录/var/lib/mysql映射到本地目录/data/mariadb
#　　-d后台运行容器mariadb并返回容器id
# 6.查看容器是否运行
docker ps -a 
# 7.修改容器为自启动
docker container update --restart=always 容器id
# 8.进入容器
docker exec -it 容器Id bash
# 9.在容器内登录数据库
mysql -uroot -proot密码

#其他常用命令：
docker start 容器id　　#启动容器
docker stop 容器id　　#停止容器
```



### 2.3 Docker安装`MongoDB`

> ！如果外部目录存在老的数据文件，创建初始化用户不会生效。

```shell
# 1.搜索MongoDB镜像（非必须）
docker search mongo
# 2.下载docker镜像
docker pull mongo
# 3.查看本地已有的所有镜像
docker images
# 4.建一个目录作为和容器的映射目录(-p:递归建立目录)
mkdir -p /data/mongodb
# 5.启动MongoDB
docker run --name mongodb -p 27017:27017 -v /data/mongodb:/data/db -d mongo --auth
    # 5.1 下面启动在admin数据库创建了一个超级管理员，具有管理所有数据库的权限。
    docker run --name mongodb -p 27017:27017 -v /data/mongodb:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=12345678900 -d mongo
# 6.查看容器是否运行
docker ps -a 
# 7.修改容器为自启动
docker container update --restart=always 容器id
# 8.进入容器
docker exec -it mongodb bash
# 9.在容器内登录数据库
mongo -u root -p 12345678900
```



### 2.4 Docker安装`portainer`

```shell
# 1.搜索MongoDB镜像（非必须）
docker search portainer
# 2.下载docker镜像
docker pull portainer/portainer
# 3.查看本地已有的所有镜像
docker images
# 4.启动portainer
docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name portain portainer/portainer
# 5.查看容器是否运行
docker ps -a 
```



### 2.4 Docker安装`nondanee/unblockneteasemusic`

```shell
# 1.搜索MongoDB镜像（非必须）
docker search nondanee
# 2.下载docker镜像
docker pull nondanee/unblockneteasemusic
# 3.查看本地已有的所有镜像
docker images
# 4.启动nondanee/unblockneteasemusic
docker run -d -p 65535:8080 --restart=always --name music nondanee/unblockneteasemusic
# 5.查看容器是否运行
docker ps -a 
```



# 📝 Sundry

## 💻 Windows 

### 1.微软拼音输入自定义时间

Windows 10：`设置`→`时间和语言`→`语言`→`中文(中华人民共和国)`→`选项`→`微软拼音`→`选项`→`词库和自学习`→`添加新的或编辑现有的用户自定义短语`→`添加`。

然后在短语里面输入以下代码：

```
%yyyy%-%MM%-%dd% %HH%:%mm%:%ss% +0800
```

> 然后拼音输入法状态下输入你定义的名字：例如我的为`utc`，输入`utc`回车就是显示当前时间



### 2.查看端口占用

#### 查看被占用端口对应的PID

```powershell
netstat -aon|findstr "49157"
```

#### 查看是哪个进程或者程序占用了`2720`端口

```powershell
tasklist|findstr "2720"
```



输入tasklist|findstr "2720"

# 🌐 Front end

## Common and css

### 1.css禁用鼠标事件

```css
.disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
}
```



### 2.css禁止用户选择

```css
body{
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
```



### 3. http

```
1**(信息类)：表示接收到请求并且继续处理
100——客户必须继续发出请求
101——客户要求服务器根据请求转换HTTP协议版本

2**(响应成功)：表示动作被成功接收、理解和接受
200——表明该请求被成功地完成，所请求的资源发送回客户端
201——提示知道新文件的URL
202——接受和处理、但处理未完成
203——返回信息不确定或不完整
204——请求收到，但返回信息为空
205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
206——服务器已经完成了部分用户的GET请求

3**(重定向类)：为了完成指定的动作，必须接受进一步处理
300——请求的资源可在多处得到
301——本网页被永久性转移到另一个URL
302——请求的网页被转移到一个新的地址，但客户访问仍继续通过原始URL地址，重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request。
303——建议客户访问其他URL或访问方式
304——自从上次请求后，请求的网页未修改过，服务器返回此响应时，不会返回网页内容，代表上次的文档已经被缓存了，还可以继续使用
305——请求的资源必须从服务器指定的地址得到
306——前一版本HTTP中使用的代码，现行版本中不再使用
307——申明请求的资源临时性删除

4**(客户端错误类)：请求包含错误语法或不能正确执行
400——客户端请求有语法错误，不能被服务器所理解
401——请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
HTTP 401.1 - 未授权：登录失败
&emsp;&emsp;HTTP 401.2 - 未授权：服务器配置问题导致登录失败
&emsp;&emsp;HTTP 401.3 - ACL 禁止访问资源
&emsp;&emsp;HTTP 401.4 - 未授权：授权被筛选器拒绝
HTTP 401.5 - 未授权：ISAPI 或 CGI 授权失败
402——保留有效ChargeTo头响应
403——禁止访问，服务器收到请求，但是拒绝提供服务
HTTP 403.1 禁止访问：禁止可执行访问
&emsp;&emsp;HTTP 403.2 - 禁止访问：禁止读访问
&emsp;&emsp;HTTP 403.3 - 禁止访问：禁止写访问
&emsp;&emsp;HTTP 403.4 - 禁止访问：要求 SSL
&emsp;&emsp;HTTP 403.5 - 禁止访问：要求 SSL 128
&emsp;&emsp;HTTP 403.6 - 禁止访问：IP 地址被拒绝
&emsp;&emsp;HTTP 403.7 - 禁止访问：要求客户证书
&emsp;&emsp;HTTP 403.8 - 禁止访问：禁止站点访问
&emsp;&emsp;HTTP 403.9 - 禁止访问：连接的用户过多
&emsp;&emsp;HTTP 403.10 - 禁止访问：配置无效
&emsp;&emsp;HTTP 403.11 - 禁止访问：密码更改
&emsp;&emsp;HTTP 403.12 - 禁止访问：映射器拒绝访问
&emsp;&emsp;HTTP 403.13 - 禁止访问：客户证书已被吊销
&emsp;&emsp;HTTP 403.15 - 禁止访问：客户访问许可过多
&emsp;&emsp;HTTP 403.16 - 禁止访问：客户证书不可信或者无效
HTTP 403.17 - 禁止访问：客户证书已经到期或者尚未生效
404——一个404错误表明可连接服务器，但服务器无法取得所请求的网页，请求资源不存在。eg：输入了错误的URL
405——用户在Request-Line字段定义的方法不允许
406——根据用户发送的Accept拖，请求资源不可访问
407——类似401，用户必须首先在代理服务器上得到授权
408——客户端没有在用户指定的饿时间内完成请求
409——对当前资源状态，请求不能完成
410——服务器上不再有此资源且无进一步的参考地址
411——服务器拒绝用户定义的Content-Length属性请求
412——一个或多个请求头字段在当前请求中错误
413——请求的资源大于服务器允许的大小
414——请求的资源URL长于服务器允许的长度
415——请求资源不支持请求项目格式
416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求长。

5**(服务端错误类)：服务器不能正确执行一个正确的请求
HTTP 500 - 服务器遇到错误，无法完成请求
&emsp;&emsp;HTTP 500.100 - 内部服务器错误 - ASP 错误
&emsp;&emsp;HTTP 500-11 服务器关闭
&emsp;&emsp;HTTP 500-12 应用程序重新启动
&emsp;&emsp;HTTP 500-13 - 服务器太忙
&emsp;&emsp;HTTP 500-14 - 应用程序无效
&emsp;&emsp;HTTP 500-15 - 不允许请求 global.asa
&emsp;&emsp;Error 501 - 未实现
HTTP 502 - 网关错误
HTTP 503：由于超载或停机维护，服务器目前无法使用，一段时间后可能恢复正常
```



### 4. 如何修改chrome记住密码后自动填充表单的黄色背景 ？

```css
 input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgb(250, 255, 189); /* #FAFFBD; */
    background-image: none;
    color: rgb(0, 0, 0);
  }
```



### 5. 让页面里的字体变清晰，变细用CSS怎么做？

```css
-webkit-font-smoothing: antialiased;
```



### 6. 让overflow:scroll平滑滚动？

```css
-webkit-overflow-scrolling: touch;
```



### 7. 开启硬件加速

```css
/*
目前，像Chrome/Filefox/Safari/IE9+以及最新版本Opera都支持硬件加速，当检测到某个DOM元素应用了某些CSS规则时就会自动开启，从而解决页面闪白，保证动画流畅。
*/
.css {
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
```



### 8. 消除transtration闪屏

```css
.css {
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
}
```



### 9. 改变输入框内提示文字颜色

```css
::-webkit-input-placeholder { /* WebKit browsers */
    color: #999; }
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #999; }
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #999; }
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #999; }
input:focus::-webkit-input-placeholder{ color:#999; }
```



### 10. 手机上的多行省略

```css
.overflow-hidden{
    display: box !important;
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;/*第几行出现省略号*/
    /*text-align:justify;不能和溢出隐藏的代码一起写，会有bug*/
}
```



### 11. Css ellipsis

```css
/* 基本写法 */
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

/* 
    多行
    1.直接用css属性设置(只有-webkit内核才有作用)
    -webkit-line-clamp 用来限制在一个块元素显示的文本的行数,这是一个不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。

    display: -webkit-box 将对象作为弹性伸缩盒子模型显示 。

    -webkit-box-orient 设置或检索伸缩盒对象的子元素的排列方式 。

    text-overflow: ellipsis 以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本。
*/

overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```



### 12. Hide scrollbar

```css
::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
```



### 13 完美解决ios10及以上Safari无法禁止缩放的问题

```javascript
window.onload=function () {
    document.addEventListener('touchstart',function (event) {
        if(event.touches.length>1){
            event.preventDefault();
        }
    })
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
        var now=(new Date()).getTime();
        if(now-lastTouchEnd<=300){
            event.preventDefault();
        }
        lastTouchEnd=now;
    },false)
}
```



### 14 有哪些适合网页显示的字体

1. robotoregular：(谷歌数字等宽字体)
2. Work Sans：（细小的字体）



### 15 npm 如何查看，更新，卸载全局安装的包

文档：https://www.npmjs.cn/

> npm 查看全局安装过的包命令：

```bash
npm list -g --depth 0
```

解释一下：

| 命令        | 解释       |
| --------- |:--------:|
| npm list  | 显示安装过的包  |
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



### 16 package.json升级依赖包

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



### 17 WINDOWS 10 64BIT 下NODEJS报错MSBUILD : ERROR MSB4132: 无法识别工具版本“2.0”。可用的工具版本为 “4.0”的解决方法

```bash
npm config set msvs_version 2012 —global 
```



### vue 移动端适配

地址：https://juejin.im/post/5c9347405188252db7569a5a

1. 创建项目
2. 使用scss（安装sass-loader，node-sass）
3. 多端样式统一

```javascript
// npm i normalize.css
// 在app.vue中
import 'normalize.css'
```

4. 适配750px设计稿

> 1.首先把安装amfe-flexible，这里使用npm install
> 
> ```powershell
> npm i -S amfe-flexible
> ```
> 
> 2.在入口文件`main.js`中引入
> 
> ```javascript
> import 'amfe-flexible/index.js'
> ```
> 
> 3.在根目录的index.html 的头部加入手机端适配的meta代码
> 
> ```html
> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
> ```
> 
> 4.安装`postcss-pxtorem`是一款 postcss 插件，用于将单位转化为 rem
>  ps：前提是ui设计的psd图尺寸大小是750*1334，这样我们在iphone6的模拟机上直接使用所标注的尺寸
> 
> ```shell
> npm i postcss-pxtorem --save-dev
> ```
> 
> 5.在`package.json`配置
> 
> ```json
>   "postcss": {
>     "plugins": {
>       "autoprefixer": {
>         "browsers": [
>           "Android >= 4.0",
>           "iOS >= 7"
>         ]
>       },
>       "postcss-pxtorem": {
>         "rootValue": 37.5,
>         "propList": [
>           "*"
>         ]
>       }
>     }
>   },
> ```
> 
> 或者在`postcss.config.js`中配置（**此文件需要在根目录下新建**）
> 
> ```javascript
> const autoprefixer = require('autoprefixer')
> const pxtorem = require('postcss-pxtorem')
> 
> module.exports = ({ file }) => {
>   let rootValue
>   // vant 37.5 [link](https://github.com/youzan/vant/issues/1181)
>   if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
>     rootValue = 37.5
>   } else {
>     rootValue = 75
>   }
>   return {
>     plugins: [
>       autoprefixer(),
>       pxtorem({
>         rootValue: rootValue,
>         propList: ['*'],
>         minPixelValue: 2
>       })
>     ]
>   }
> }
> ```
> 
> 温馨提示： rootValue这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。假如设计图给的宽度是750，我们通常就会把rootValue设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。（iPhone界面尺寸：320 * 480、640 * 960、640 * 1136、750 * 1334、1080 * 1920等。）
> 
> 那为什么你在这里写成了37.5呢？？？
> 
> 之所以设为37.5，是为了引用像vant、mint-ui这样的第三方UI框架，因为第三方框架没有兼容rem，用的是px单位，将rootValue的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原vant、mint-ui的组件，否则会样式会有变化，例如按钮会变小。
> 
> 既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。
> 
> 作者：走啊丶去拯救世界链接：https://juejin.im/post/5c9347405188252db7569a5a来源：掘金著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



## Git

> 1. 配置基本信息
> 
> ```bash
> git config --global user.name "Your Name"
> git config --global user.email "email@example.com"
> 
> # example
> git config --global user.name "SunSeekerX"
> git config --global user.email "1647800606@qq.com"
> ```

| 指令                                                    | 说明                                                              |
|:-----------------------------------------------------:|:---------------------------------------------------------------:|
| **初始化**                                               |                                                                 |
| git init                                              | 把本地的目录变成git本地仓库（执行一次即可）                                         |
| git remote add [远程地址别名] [远程仓库地址]                      | 将你本地仓库与远程仓库关联起来(一般关联一个地址即可)                                     |
|                                                       |                                                                 |
| **常用操作**                                              |                                                                 |
| git status                                            | 查看本地仓库文件状态                                                      |
| git add -A                                            | 添加整个工作区所有发生改变的文件到暂存区                                            |
| git commit -m 'Commit message'                        | 将暂存区文件放到本地仓库，`-m`后面接注释写上本次更改的地方                                 |
| git pull [远程地址别名] [远程仓库分支]                            | 合并远程仓库的更新（push之前必须先合并）                                          |
| git push -u [远程地址别名] [远程仓库分支]                         | 将本地当前分支的commit推送到远程指定分支，（`-u`指定该远程地址为默认，后面就可以不加任何参数使用git push了） |
|                                                       |                                                                 |
| **创建`ssh key`**                                       |                                                                 |
| ssh-keygen -t rsa -b 4096 -C "your_email@example.com" | 创建一个`ssh key`，直接回车，文件存在，不用的直接删除目录，有用的就直接复制`ssh key`             |
| clip < ~/.ssh/id_rsa.pub                              | 把密钥放在剪贴板                                                        |

## Edit setting

### VSCode

> Setting sync id: 7e4a454490b30e5e5934976993e322ce。请复制这个 ID 并将其用于其他设备来下载配置。
>

#### plugins

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

#### VSCode setting

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

#### Shortcut key 快捷键

##### `递归折叠方法` 折叠当前光标下所有方法与参数

折叠 `ctrl+k ctrl+[` 

取消折叠 `ctrl+k` `ctrl+j`

### WebStorm

#### Format code

`Ctrl+Alt+L`

## Uni-app

#### Utils function

```javascript
//api接口
Vue.prototype.api = 'http://127.0.0.1:3000'
// 全局验证手机号码的方法 
Vue.prototype.isPhoneAvailable = function(str) {
    return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str) ? true : false
}
// 去除空格
Vue.prototype.trim = function (str) {
    return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
}
// 加载
Vue.prototype.loading = () => {
    uni.showLoading({title: '加载中...', mask: true});
}
//关闭加载
Vue.prototype.hideLoading = () => {
    uni.hideLoading()
}
//toast
Vue.prototype.toast = (title) => {
    uni.showToast({title, mask: false, duration: 1500, icon: 'none'});
}
```

#### About rich-text

```javascript
for (var i = 0; i < data.length; i++) {
    data[i].question_describe = data[i].question_describe.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
}
```

# 🔌 Back end

## common

### 1.IntelliJ IDEA 2018 设置代码提示对大小写不敏感

>  setting->Editor->General->Code Completion
> 取消勾选Match case 

## 💿 Data base

### Common

#### SQL naming convention

- **小写**。标识符应该全部用小写字母来书写，使用`first_name`，不是`"First_Name"或者"FirstName"`。
- **数据类型不是名称**。避免使用仅为数据类型的名字（如`text`或`timestamp`）。
- **强调单独的单词**。由多个单词组成的对象名称应该用下划线分隔，例如使用`word_count`或`team_member_id`，而不是`wordcount`或`wordCount`。
- **完整的单词，而不是缩写**。例如使用`middle_name`，不是`mid_nm`。
- **使用常用缩写**。对于几个长词而言，缩写词比词本身更为常见，比如`i18n`和`l10n`，这时使用缩写。

### mysql

### mariaDB

#### Open remote links

```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'IDENTIFIED BY '123456' WITH GRANT OPTION;

-- 说明：root是登陆数据库的用户，123456是登陆数据库的密码，*就是意味着任何来源任何主机反正就是权限很大的样子。

-- 最后配置好权限之后不应该忘记刷新使之生效

flush privileges;
```

### mongoDB

## Server

### Jdk and tomcat

> 下载JDK12默认安装，环境变量path添加安装路径带`bin`，新建环境变量`JAVA_HOME`不带`bin`，命令行`java`和`javac`执行成功，`tomcat`启动成功

#### windows tomcat输出乱码

文件路径`conf/logging.properties`

java.util.logging.ConsoleHandler.encoding = GBK

#### Tomcat设置项目管理用户

文件路径`conf/tomcat-users.xml`

```xml
<tomcat-users xmlns="http://tomcat.apache.org/xml"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
              version="1.0">
<user username="admin" password="12345678900" roles="manager-gui" />
```

#### springboot tomcat 缓存

`org.apache.catalina.webresources.Cache.getResource 无法将位于[/WEB-INF/classes/templates/]的资源添加到Web应用程序[/b]的缓存中，因为在清除过期缓存条目后可用空间仍不足 - 请考虑增加缓存的最大空间。`

`org.apache.catalina.webresources.Cache.getResource Unable to add the resource at [**] to the cache because there was insufficient free space available after evicting expired cache entries - consider increasing the maximum size of the cache`

`${CATALINA_HOME}/conf/context.xml`

```xml
<Context>

    <!-- Default set of monitored resources. If one of these changes, the    -->
    <!-- web application will be reloaded.                                   -->
    <WatchedResource>WEB-INF/web.xml</WatchedResource>
    <WatchedResource>WEB-INF/tomcat-web.xml</WatchedResource>
    <WatchedResource>${catalina.base}/conf/web.xml</WatchedResource>
    <Resources
        cachingAllowed="true"
        cacheMaxSize="100000"
    />

    <!-- Uncomment this to disable session persistence across Tomcat restarts -->
    <!--
    <Manager pathname="" />
    -->
</Context>
```

# 😄 About me

## Technology stack

以下都是我平时用过或熟悉的编程语言、框架、软件及工具，带 ^†^ 符号的是我比较喜欢和常用的。

### Programming language

- [JavaScript](https://www.javascript.com/)^†^
- [HTML](https://www.w3.org/html)^†^
- [CSS](http://www.w3school.com.cn/css/index.asp)^†^
- [SQL](https://www.runoob.com/sql/sql-tutorial.html)^†^
- [JAVA](https://www.java.com/)

### Front end

- uni-app

- 微信小程序

- web-app

- vue

- vuex

- vue-cli

- vue-router

- element-ui

- vue-element-admin

- 前端模块化编程模块划分

- mui

- jQuery

- scss

### Back end

- Node.js
- Express
- Sequelize
- egg.js
- Mysql
- Mongodb

### Common

- token权限控制
- es6,es7
- Mock.js

### Software

- VSCode
- Hbuilderx
- IDEA
- Navicat Premium 12
- Postman
- XAMPP Control Panel
- XMind ZEN
- 微信web开发者工具
- Adobe Photoshop CC 2019

### Other

- JS穷举
- 域名备案

## Coding principle

1. write less, do more.
2. 在不破坏代码可读性和功能的前提下，代码越少越好。
3. 最简单的解决方法最好

# 🍳 Funny website

## 航班实时追踪：http://flightadsb.variflight.com/

## 技术热门度曲线：https://stateofdev.com/

## 谷歌地图： https://www.google.com/maps/

# Something

我喜欢学习新的东西，但我宁愿学习一些真正新的东西，而不仅仅是另一种完成同样任务的方法。

Dart 语言本来已经死掉了，就是因为 Flutter 这个非常有前景的业务绑定了它，所以又活过来了。说到底，还是业务重要。好的技术不一定能活，坏的技术不一定会死，取决于有没有业务。

# 快捷键

- 无序列表：输入-之后输入空格
- 有序列表：输入数字+“.”之后输入空格
- 任务列表：-[空格]空格 文字
- 标题：ctrl+数字
- 表格：ctrl+t
- 生成目录：[TOC]按回车
- 选中一整行：ctrl+l
- 选中单词：ctrl+d
- 选中相同格式的文字：ctrl+e
- 跳转到文章开头：ctrl+home
- 跳转到文章结尾：ctrl+end
- 搜索：ctrl+f
- 替换：ctrl+h
- 引用：输入>之后输入空格
- 代码块：ctrl+alt+f
- 加粗：ctrl+b
- 倾斜：ctrl+i
- 下划线：ctrl+u
- 删除线：alt+shift+5
- 插入图片：直接拖动到指定位置即可或者ctrl+shift+i
- 插入链接：ctrl+k
- 分割线：
  - `***`+回车
  - `---`+回车  
