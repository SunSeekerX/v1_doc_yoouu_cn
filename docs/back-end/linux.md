## Centos安装 node.js

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



## Centos安装nginx

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

