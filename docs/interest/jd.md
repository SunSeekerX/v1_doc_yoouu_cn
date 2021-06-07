# JD 挂机

## 📌 青龙面板

![](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215154.png)

写在前面：由于需要获取 Cookie 这将导致信息泄漏以及侵权风险，本文章仅供大家技术交流之用！不为此承担任何责任！本人与本文章所涉及的所有工具均无利益相关性！不能为所涉及的工具承担任何使用风险！

最近很流行京东挂机赚京豆，也看到很多人无法自行完成服务器端的配置！所以也写一个简单的配置教程供大家参考！

其实内容并不会很复杂，照顾新手，所以我写得比较细！

## 📌 系统环境的准备与 Docker 的安装

首先需要准备一台服务器或 VPS，当然自家能够安装 Docker 的路由器也可以，例如 N1 或 OpenWrt 等。

下面以 Centos 为例

更新系统软件包

```bash
yum update
```

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215000.png)

### Docker 安装

这儿以 Arm 架构的服务器为例，开始安装 Docker 相关的依赖包 如果是 X86 架构一键脚本：

```bash
curl -sSL https://get.docker.com/ | sh
```

ARM 架构的安装过程：

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

添加仓库

```bash
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

安装 Docker

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215024.png)

完成安装

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215027.png)

启动 Docker

```bash
sudo systemctl start docker
```

## 📌 青龙面板安装

拉取青龙的镜像文件

```bash
docker pull whyour/qinglong:latest
```

创建容器

```bash
docker run -dit \
-v $pwd/ql/config:/ql/config \
-v $pwd/ql/log:/ql/log \
-v $pwd/ql/db:/ql/db \
-p 5700:5700 \
-e ENABLE_HANGUP=true \
-e ENABLE_WEB_PANEL=true \
--name qinglong \
--hostname qinglong \
--restart always \
whyour/qinglong:latest
```

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215030.png)

开放青龙端口

```bash
firewall-cmd --zone=public --add-port=5700/tcp --permanent
```

然后就可以通过 http://ip:5700 访问面板了

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215034.png)

默认账号：admin 密码：admin

反回到 shell 输入：

```bash
cat /ql/config/auth.json
```

输出的结果就是实际的密码了

```json
{ "username": "admin", "password": "******" }
```

至此，青龙面板就安装完成了！

## 📌 面板的快速配置

更新面板，将面板更新至最新版本

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215045.png)

完成后就可以添加自定义脚本源示例：

```bash
docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/chinnkarahoi/jd_scripts.git "jd_|jx_|getJDCookie" "activity|backUp" "^jd[^_]|USER"
```

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215053.png)

就可以在面板中看到新添加的脚本了

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215103.png)

至此就配置完成了。添加好 Cookie 就可以正常挂机了！

以下为集成 Cookie 获取工具的配置说明。

由于我们前面脚本是将 ql 文件夹放在根目录，所以下载后需要手动配置一下配置文件

### 互助码的设置方法

看到有几位私信表示不会设置互助码，所以添加一下关于互助码的设置说明吧。

首先添加如下自定义仓库：

```bash
ql repo https://ghproxy.com/https://github.com/chinnkarahoi/jd_scripts.git "jd_|jx_|getJDCookie" "activity|backUp" "^jd[^_]|USER"
```

加载完脚本后在 Name_js 的语句里面修改以下内容：

例如将：

```
jd_fruit
```

修改为：

```
chinnkarahoi_jd_scripts_jd_fruit
```

结果如下图所示：

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215114.png)

保存设置后返回到定时任务。

搜索：

互助码

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215122.png)

运行后即可获取互助码了！

运费日志如下图：

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215128.png)

表示获取并设置成功！

### 青龙面板官方使用

> 青龙项目指南:
>
> 1. 拉取镜像/更新镜像
>
> docker pull whyour/qinglong:latest
>
> 2. 删除镜像
>
> docker rmi whyour/qinglong:latest
>
> 3. 启动容器
>
> 普通服务器
>
> docker run -dit \
>  -v $PWD/ql/config:/ql/config \
>  -v $PWD/ql/log:/ql/log \
>  -v $PWD/ql/db:/ql/db \
>  -p 5700:5700 \
>  --name qinglong \
>  --hostname qinglong \
>  --restart always \
>  whyour/qinglong:latest
>
> n1 等路由器
>
> docker run -dit \
>  -v $PWD/ql/config:/ql/config \
>  -v $PWD/ql/log:/ql/log \
>  -v $PWD/ql/db:/ql/db \
>  --net host \
>  --name qinglong \
>  --hostname qinglong \
>  --restart always \
>  whyour/qinglong:latest
>
> 4. 删除容器
>
> docker rm -f qinglong
>
> 5. 初次登陆
>
> 初次访问 http://<自己 ip>:5700 使用 admin/adminadmin 登陆，提示已初始化密码去自己映射目录 config 下找 auth.json，查看里面的 password docker exec -it qinglong cat /ql/config/auth.json
>
> 6. Cookie 管理
>
> 登陆成功进入 Cookie 管理页面，右上角新增 Cookie(最新版已加 Cookie 格式验证) 添加成功，可在 Cookie 列表更新 Cookie，删除 Cookie
>
> 7. 基本命令
>
> (容器内执行或者新建定时任务时忽略 docker exec -it qinglong)
>
> 更新青龙 docker exec -it qinglong ql update
>
> 更新青龙并编译 docker exec -it qinglong ql restart
>
> 拉取自定义仓库 docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/whyour/hundun.git "quanx" "tokens|caiyun|didi|donate|fold|Env"
>
> 拉取单个脚本 docker exec -it qinglong ql raw https://ghproxy.com/https://raw.githubusercontent.com/moposmall/Script/main/Me/jx_cfd.js
>
> 删除 7 天前的所有日志 docker exec -it qinglong ql rmlog 7
>
> 启动 bot docker exec -it qinglong ql bot
>
> 导出互助码 docker exec -it qinglong ql code
>
> 通知测试 docker exec -it qinglong notify test test
>
> 立即执行脚本 docker exec -it qinglong task test.js now
>
> 并行执行脚本 docker exec -it qinglong task test.js conc

### 脚本仓库

[https://github.com/whyour/qinglong](https://github.com/whyour/qinglong) from

```shell
docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/longzhuzhu/nianyu.git
```

```shell
docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/chinnkarahoi/jd_scripts.git "jd_|jx_|getJDCookie" "activity|backUp" "^jd[^_]|USER"
```

## 📌 青龙面板扫码获取 Cookie

妖火作者地址：[https://yaohuo.me/bbs/userinfo.aspx?touserid=49461](https://yaohuo.me/bbs/userinfo.aspx?touserid=49461)

原文：[https://ihuayu8.cn/ql-get-cookie.html](https://ihuayu8.cn/ql-get-cookie.html)

### 简介

本程序仅限青龙面板 2.0 对接使用，添加自助扫码功能。

更多功能如下：

- 扫码添加 / 更新 cookie
- 删除 cookie
- 查看单用户日志

### 说明

本程序已开源，不存在后门等恶意代码。

后端仓库：https://github.com/huayu8/JDC

前端仓库：https://github.com/huayu8/JDC-web

### 开始使用

> 如果安装了低版本请先移除 JDC 和 config.toml，然后全新安装

### 检查环境

> 请确保你的环境中已经安装了青龙面板 2.0。 安装 wget 和 unzip

```shell
# ubuntu
apt install wget unzip

# centos
yum install wget unzip -y
```

### 单节点部署

如果你只想部署在一台服务器上，推荐前后端部署于一台服务器上。

#### 后端安装

首先 cd 到青龙面板容器的映射目录 (一般为 /root 或根目录)，检查是否存在 ql 或 QL 目录。

```shell
cd /root
ls -l
```

请按照你的 cpu 架构进行下载

```shell
# 如果你是amd64架构（服务器，PC等）
wget https://github.com/huayu8/JDC/releases/download/2.0.0/linux_amd64.zip && unzip linux_amd64.zip

# 如果你是arm架构（N1，路由器，树莓派等）
wget https://github.com/huayu8/JDC/releases/download/2.0.0/linux_arm.zip && unzip linux_arm.zip
```

其他架构或系统请自行编译

```shell
chmod 777 JDC
./JDC
```

第一次运行，自动生成配置文件并且程序会自动退出。

> 如果你的容器映射文件夹为 ql，请手动修改 config.toml 中的 path 项为 ql (不用加后缀)！

程序设置请自行修改 config.toml 文件。 然后执行下面步骤

```shell
nohup ./JDC &
```

开始后台运行程序。程序默认端口为 5701。打开 http://ip:5701/info 看到 “JDC is Already！” 即说明安装成功！ 如果无法打开请检查端口是否放行！

#### 前端部署

> 程序现已支持反向代理，直接使用 nginx 反代目标端口即可！

单节点安装时前端推荐直接部署于 JDC 自带的 http 服务器中。 首先 cd 到 JDC 同级目录下的 public 文件夹中（如果没有请新建），并下载解压前端文件

```shell
cd public

wget https://github.com/huayu8/JDC-web/releases/download/1.0.0/dist.zip && unzip dist.zip
```

然后直接访问 IP + 端口即可看到面板。

如需前后端分离部署请参考多节点安装 - 前端部署章节

### 多节点部署

程序支持同一个面板对接多个后端节点，此方式部署程序推荐前后端分离部署。

#### 后端安装

请参考单节点部署 - 后端安装章节

#### 前端部署

> 推荐前后端分离部署，可使用反代 / CDN 提高可用性

多节点前端部署需要拉取前端仓库并修改 api 编译。

以下步骤在你的电脑上操作（请确保你的电脑安装了 git/nodejs/npm）

拉取前端仓库并进入

```shell
git clone https://github.com/huayu8/JDC-web.git
```

拉取完成后请进入 JDC-web 文件夹，然后在根目录找到.env.production 文件，修改其中的内容。 其中，name 为节点名称，url 为 http://ip + 端口，此处 ip 为后端节点的公网 IP，端口为 JDC 运行的端口，可添加多个节点

例如:

```shell
NODE_ENV=development
VUE_APP_API_URL=[{"name":"京东节点1","url":"http://127.0.0.1:5701"},{"name":"京东节点2","url":"http://127.0.0.1:5702"}]
```

> 此处请确保节点 JSON 的格式正确，否则会出现未知错误！

开始编译

```shell
npm install

npm run build
```

编译完成后，将 dist 目录中的文件打包，上传至任意 http 服务器即可。（你也可以上传到任意后端节点 JDC 同级目录下的 public 文件夹内，因为 JDC 本身自带 http 服务器） 访问页面即可！

### 更新教程

如果你已经安装了旧版程序，请按以下步骤删除原程序，再按照上述教程进行部署。 首先 kill 掉原来的程序。

```shell
# 查看原程序PID,第一行第二列为程序的PID
ps -ajx|grep JDC
# 结束程序（*****改为你的PID）
kill -9 *****
```

然后删除原来的程序和 config.toml 文件

```shell
rm -rf JDC config.toml
```

## 📌 微信推送

推送平台：[pushplus - https://pushplus.plus/](https://pushplus.plus/)

**进入青龙面板-配置文件 加入末尾下面的参数**

```shell
## Push Plus
export PUSH_PLUS_TOKEN=""
export PUSH_PLUS_USER=""
```

PUSH_PLUS_TOKEN 是 https://pushplus.plus/ 注册登录后提供的 Token，必填 PUSH_PLUS_USER 选填，一对一则不填，一对多必填，填入 pushplus 群组编号

## ~~📌 安装用户控制面板~~

> 其他博客的老教程，请看上一段。

第 1 步：

```bash
cd /qlhjmmm
```

第 2 步:

```bash
# 如果你是amd64架构（服务器，PC等）
wget https://github.com/huayu8/JDC/releases/download/1.0.2/linux_amd64.zip &amp;&amp; unzip linux_amd64.zip

# 如果你是arm架构（N1，路由器，树莓派等）
wget https://github.com/huayu8/JDC/releases/download/1.0.2/linux_arm.zip &amp;&amp; unzip linux_arm.zip
```

**JDC X86 备份下载（作者不知因何原因已经删除，有评论希望我能提供下载，但考虑到作者不明原因删除，所以我不敢擅自提供下载，很抱歉！）有需要的人可以留言联系邮箱等，有相应文件的可以互相交流~**

第 3 步：

```bash
chmod 777 JDC
./JDC
```

这时会生成配置文件，再次运行会出现报错，我们需要修改配置文件。

第 4 步：

```bash
vi config.toml
```

```
#公告设置
[app]
    explain         = "扫码后请返回页面完成登录" #页面使用说明显示
    path            = "<strong><span class="has-inline-color has-vivid-red-color">/ql/</span></strong>config/auth.json" #QL文件路径设置，一般无需更改
    QLip            = "http://127.0.0.1" #青龙面板的ip，部署于一台服务器时不用更改
    QLport          = "5700" #青龙面板的端口，默认为5700
    logName         = "chinnkarahoi_jd_scripts_jd_bean_change" #日志脚本名称
    allowAdd        = "0" #是否允许添加账号（0允许1不允许）不允许添加时则只允许已有账号登录
#web服务设置
[server]
        address        = ":5701" #端口号设置
    serverRoot     = "public" #静态目录设置，请勿更改
        serverAgent    = "JDCookie" #服务端UA
#模板设置
[viewer]
        Delimiters  =  ["${", "}"] #模板标签，请勿更改
```

按字母“i”进入编辑模式，将光标移动到“QL”处，将 QL 修该为“/ql”注意大小写。

再按 ESC 键退出编辑，再输入”:wq”保存退出。

**注：为安全起见，建议在配置文件中修改端口，或设置不允许添加新账号，避免被他人未经授权的情况下使用。**

第 5 步：再次输入命令运行即可。

```bash
./JDC
```

第 6 步：开放端口

```bash
firewall-cmd --zone=public --add-port=5700/tcp --permanent
```

然后访问网址：http://ip:5701 即可进入如下界面：

![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215110.png)

点击生成二维码，使用京东 APP 扫码登录即可。

## 📌 其他

### 京东账户和微信绑定

![a134f26ecb0f37ba5bf2bfdfc4ebb0b8](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/12476_1137571a134f26ecb0f37ba5bf2bfdfc4ebb0b8.png)

## 📌 来源

[京东挂机 青龙面板的安装与使用以及互助+Cookie 的获取](https://www.feiji.work/2021/185.html) - by [孤岛](https://www.feiji.work/)
