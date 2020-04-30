# Docker

## 0x1. 安装Docker

> **centos安装文档**：[https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)
>
> **Docker Hub**: [https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)



## 0x2. Docker安装`MariaDB`

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



## 0x3. Docker安装`MongoDB`

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



## 0x4. Docker安装`portainer`

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



## 0x5. Docker安装`nondanee/unblockneteasemusic`

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



## 0x6. Docker安装`jenkins`

> Jenkins是开源CI&CD软件领导者， 提供超过1000个插件来支持构建、部署、自动化， 满足任何项目的需要。
>
> 官网：[https://jenkins.io/zh/](https://jenkins.io/zh/)
>
> 推荐使用docker安装，这样可以方便升级，不用被jdk环境搭建搞得焦头烂额，直接关注使用功能
>
> Docker镜像：[https://hub.docker.com/r/jenkins/jenkins](https://hub.docker.com/r/jenkins/jenkins)

```bash

```



