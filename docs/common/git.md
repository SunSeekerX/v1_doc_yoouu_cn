# Git

配置基本信息

> ```bash
> git config --global user.name "Your Name"
> git config --global user.email "email@example.com"
> 
> # example
> git config --global user.name "SunSeekerX"
> git config --global user.email "1647800606@qq.com"
> ```





|                         指令                          |                             说明                             |
| :---------------------------------------------------: | :----------------------------------------------------------: |
|                      **初始化**                       |                                                              |
|                       git init                        |         把本地的目录变成git本地仓库（执行一次即可）          |
|     git remote add [远程地址别名] [远程仓库地址]      |     将你本地仓库与远程仓库关联起来(一般关联一个地址即可)     |
|                                                       |                                                              |
|                     **常用操作**                      |                                                              |
|                      git status                       |                     查看本地仓库文件状态                     |
|                      git add -A                       |           添加整个工作区所有发生改变的文件到暂存区           |
|            git commit -m 'Commit message'             |  将暂存区文件放到本地仓库，`-m`后面接注释写上本次更改的地方  |
|        git pull [远程地址别名] [远程仓库分支]         |           合并远程仓库的更新（push之前必须先合并）           |
|       git push -u [远程地址别名] [远程仓库分支]       | 将本地当前分支的commit推送到远程指定分支，（`-u`指定该远程地址为默认，后面就可以不加任何参数使用git push了） |
|                                                       |                                                              |
|                   **创建`ssh key`**                   |                                                              |
| ssh-keygen -t rsa -b 4096 -C "your_email@example.com" | 创建一个`ssh key`，直接回车，文件存在，不用的直接删除目录，有用的就直接复制`ssh key` |
|               clip < ~/.ssh/id_rsa.pub                |                       把密钥放在剪贴板                       |



## 常用分支操作

```bash
# 1.拉取远程分支，如果本地没有改分支
git fetch [远程地址别名] [远程仓库分支]:[本地创建分支名]
# 例如，下面代码执行会拉取远程1.1.0分支然后在本地创建名为1.1.0的分支，冒号右边的是本地分支名，可以自定义
git fetch origin 1.1.0:1.1.0

# 2.删除本地分支，如果本地分支未完全合并是无法删除的，需要将-d改为-D表示强制删除
git branch -d [本地分支名]

# 3.撤销本次所有更改,会撤销本次所有的更改。不包括已经commit的
git checkout -- .

# 4.终止合并,如果合并冲突过多，需要终止合并
git merge --abort
```



### 怎么更换git远程仓库地址

方法一 ： 通过命令直接修改远程仓库地址

```bash
# 查看所有远程仓库
git remote -v
# 你新的远程仓库地址
git remote set-url origin [新的地址]
```

方法二： 先删除在添加你的远程仓库

```bash
# 删除远程仓库关联
git remote rm origin
# 你的新远程仓库地址
git remote add origin 
```





## 给`Git`全局配置http代理

**只能代理http连接！！！**

```bash
# 代理
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
# 上面不生效用
git config --global http.proxy 'socks5://127.0.0.1:1080' 
git config --global https.proxy 'socks5://127.0.0.1:1080'

# 只对 github 进行代理，对国内的仓库不影响，可以这样设置，不熟悉配置文件不建议使用
git config --global http.https://github.com.proxy https://127.0.0.1:1080
git config --global https.https://github.com.proxy https://127.0.0.1:1080
# 只对 gitlab 进行代理，对国内的仓库不影响，可以这样设置，不熟悉配置文件不建议使用
git config --global https.https://https://gitlab.com.proxy https://127.0.0.1:1080

# 恢复
git config --global --unset http.proxy
git config --global --unset https.proxy
```

