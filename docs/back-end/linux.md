## 📌 腾讯云获取 root

| 步骤 | 方法 |
| :-- | :-- |
| 修改 root 密码 | 执行命令 sudo passwd root |
| 输入密码 | 可以和 ubuntu 密码一致，也可以修改 (密码会让你输入两次) |
| 修改 ssh 配置 | 执行命令 sudo vi /etc/ssh/sshd_config |
| 修 改 PermitRootLogin | 进入 ssh 配置界面后找到 PermitRootLogin，将它后面改为 yes，保存 (按 i 进入编辑模式，编辑完 esc 退出，:w 保存当前文件，:q 退出) |
| 重启 ssh 服务 | 执行命令 sudo service ssh restart |

## 📌 ubuntu 查看端口被占用并处理

当启动程序出现端口号被占用的情况，需要查看端口使用情况，使用 netstat 命令，下面是常用的几个查看端口情况的命令：查看所有的服务端口（ESTABLISHED

```shell
netstat -a
```

查看所有的服务端口，显示 pid 号（LISTEN，ESTABLISHED）

```shell
netstat -ap
```

查看某一（\*\*）端口，则可以结合 grep 命令：

```shell
netstat -ap | grep **
```

如查看\*\*端口，也可以在终端中输入：

```shell
lsof -i:**
```

若要停止使用这个端口的程序，使用 kill +对应的 pid

```shell
kill pid
```

还有一个比较好用的命令，查看\*\*端口：

```shell
sudo netstat -lnp | grep **
```

查看端口号和运行程序：

```shell
netstat -atunp | more
```

查看进程所用端口：

```shell
netstat -tlnp|grep **
```

## 📌 Ubuntu 更改 ssh 端口

**一、更改 ssh 的端口**

1.修改 sshd_config

```bash
vim /etc/ssh/sshd_config
```

2.在 port 后面添加端口即可，这些端口都是并列的，添加后如下

```bash
Port 22
Port 443
```

3、重启 ssh 服务

```bash
sudo service ssh restart
```

**二、禁止远程登录 root 用户**

1.修改/etc/ssh/sshd_config

```bash
vim /etc/ssh/sshd_config

# 将 PermitRootLogin 改为 PermitRootLogin no
```

2.重启

```bash
service sshd restart
```

## 📌 查看 LINUX 发行版本名和版本号

2017-01-16

最近跟合作方支付公司（一个北京的互联网支付公司，就不具体提名字啦）沟通的时候，需要对方生成非对称加密密钥公钥提供给我方，对方技术是个妹子。不懂怎么在预发／生产机器上面生成加密算法的公私钥，也不知道怎么查看系统版本。属于一问三不知类型，怎么办～ 我也只能打电话过去一步步手把手教如何查看发行版，如何安装命令，如何生成对应的公私钥。下面讲讲如何查看系统发行版和版本号。

查看 LINUX 发行版的名称及其版本号的命令,这些信息对于添加正确的软件更新源很有用，而当你只能在命令行下工作的时候，下面的方法可以帮忙。

### 一、查看 Linux 内核版本命令（两种方法）：

1、`cat /proc/version`

```
[root@localhost ~]# cat /proc/version
Linux version 2.6.18-194.8.1.el5.centos.plus
(mockbuild@builder17.centos.org) (gcc version 4.1.220080704
(Red Hat 4.1.2-48)) #1 SMP Wed Jul 7 11:50:45 EDT 2010
```

2、`uname -a`

```
[root@localhost ~]# uname -a
Linux localhost.localdomain 2.6.18-194.8.1.el5.centos.plus
#1 SMP Wed Jul 7 11:50:45 EDT 2010 i686 i686 i386 GNU/Linux
```

### 二、查看 Linux 系统版本的命令（3 种方法）：

1、`lsb_release -a`，即可列出所有版本信息：

```
[root@localhost ~]# lsb_release -a
LSB Version: :core-3.1-ia32:core-3.1-noarch:graphics-3.1-ia32:graphics-3.1-noarch
Distributor ID: CentOS
Description: CentOS release 6.5 (Final)
Release: 6.5
Codename: Final
```

这个命令适用于所有的 Linux 发行版，包括 Redhat、SuSE、Debian…等发行版。2、`cat /etc/redhat-release`，这种方法只适合 Redhat 系的 Linux：

```
[root@localhost ~]# cat /etc/redhat-release
CentOS release 6.7 (Final)
```

3、`cat /etc/issue`，此命令也适用于所有的 Linux 发行版。

```
[root@localhost ~]# cat /etc/issue
CentOS release 6.7 (Final)
Kernel \r on an \m
```

## 📌 Ubuntu 更新软件和系统

apt-get update: 升级安装包相关的命令,刷新可安装的软件列表(但是不做任何实际的安装动作)

apt-get upgrade: 进行安装包的更新(软件版本的升级)

apt-get dist-upgrade: 进行系统版本的升级(Ubuntu 版本的升级)

do-release-upgrade: Ubuntu 官方推荐的系统升级方式,若加参数-d 还可以升级到开发版本,但会不稳定

## 📌 申请通配符证书

安装 certbot

![certbot](https://static.yoouu.cn/imgs/doc/back-end/linux/1186922-0d4dbd223901c210.png)

```bash
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install certbot
```

### 申请证书

```bash
sudo certbot certonly --manual -d example.com -d *.example.com --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory
```

例如

```bash
sudo certbot certonly --manual -d yoouu.cn -d *.yoouu.cn --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory
```

按照提示设置 DNS 解析

![DNS解析](https://static.yoouu.cn/imgs/doc/back-end/linux/1186922-365bfd53bc81a30f.png)

### Nginx 配置

```dart
server {
    listen      80;
    server_name example.com;
    return      301     https://$server_name$request_uri;
}

server {
    listen      443 ssl;
    server_name example.com;

    charset     utf-8;

    add_header X-Content-Type-Options nosniff;

    ssl on;
    ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

}
```
