# Docker

## 0x1. 安装Docker

> **centos安装文档**：[https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)
>
> **Docker Hub**: [https://docs.docker.com/install/linux/docker-ce/centos/](https://docs.docker.com/install/linux/docker-ce/centos/)

### docker服务重启

```bash
# 守护进程重启
sudo systemctl daemon-reload
# 重启docker服务
sudo systemctl restart docker
# 关闭docker
sudo systemctl stop docker

# service 方式
# 重启docker服务
sudo service docker restart
# 关闭docker
sudo service docker stop
```



### 镜像常用命令

```bash
docker pull [镜像名称:版本] 拉取镜像
docker images  镜像列表
docker rmi [镜像名称:版本] 删除镜像
docker history [镜像名称] 镜像操作记录
docker tag [镜像名称:版本][新镜像名称:新版本]
docker inspect [镜像名称:版本] 查看镜像详细
docker search [关键字] 搜索镜像
docker login 镜像登陆
```

#### 

### 容器常用命令

```bash
docker ps -a 容器列表(所有容器)
docker ps  查看所有(运行的)容器
docker exec -ti <id> bash  以 bash 命令进入容器内
docker run -ti --name [容器名称][镜像名称:版本] bash 启动容器并进入
docker logs 查看容器日志
docker top <container_id> 查看容器最近的一个进程
docker run -ti --name [容器名称] -p 8080:80 [镜像名称:版本] bash  端口映射
docker rm <container_id> 删除容器
docker stop <container_id> 停止容器
docker start <container_id> 开启容器
docker restart <container_id> 重启容器
docker inspect <container_id> 查看容器详情
docker commit [容器名称] my_image:v1.0  容器提交为新的镜像	
```



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
# 拉取长期服务版
docker pull jenkins/jenkins:lts
# 在启动Jenkins时，需要先创建一个Jenkins的配置目录，并且挂载到docker 里的Jenkins目录下
mkdir -p /var/jenkins_home
# 修改目录权限（很重要！）否则jenkins没有读取改目录的权限
chown -R 1000 /var/jenkins_home
# 查看文件夹权限
sudo ls -nd /var/jenkins_home/
# 运行 Jenkins
docker run --name jenkins -p 50001:8080 -u root  -d -v /var/run/docker.sock:/var/run/docker.sock -v /var/jenkins_home:/var/jenkins_home -e JENKINS_UC="	https://updates.jenkins-zh.cn" -e JENKINS_UC_DOWNLOAD="https://mirrors.tuna.tsinghua.edu.cn/jenkins" -e JAVA_OPTS=-Duser.timezone=Asia/Shanghai -v $(which git):/usr/bin/git jenkins/jenkins:lts
```

### 配置Jenkins

> 第一次进入需要加载依赖和配置需要一段时间，可以通过`docker logs <容器id> -f`监控jenkins运行日志

访问`http://<你的ip>:50001`访问Jenkins。如果无法访问请检查系统防火墙、云的安全组设置。

可以看到需要我们输入密码。

首先进入容器：

```shell
docker exec -it jenkins /bin/bash
```

然后查看密码：

```shell
cat /var/jenkins_home/secrets/initialAdminPassword
```

复制输出的内容，粘贴到Administrator password，输入 exit 退出容器，此时进行下一步你会看到此界面，点击 Install suggested plugins



然后创建管理用户