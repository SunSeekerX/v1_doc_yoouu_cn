# Git

## 工作区

![Git](https://image.yoouu.cn/sunseekerx/common/git/1049928-f72357a8bfddc6d2.webp)

## 配置基本信息

> 为了让别人知道是谁提交了代码。

```bash
# 安装完Git后第一件要做的事，设置用户信息(global可换成local在单独项目生效)：
git config --global user.name "Your Name" # 设置用户名
git config --global user.email "email@example.com"   #设置邮箱
git config --global user.name   # 查看用户名是否配置成功
git config --global user.email   # 查看邮箱是否配置

# example
git config --global user.name "SunSeekerX"
git config --global user.email "1647800606@qq.com"

# 其他查看配置相关
git config --global --list  # 查看全局设置相关参数列表
git config --local --list # 查看本地设置相关参数列表
git config --system --list # 查看系统配置参数列表
git config --list  # 查看所有Git的配置(全局+本地+系统)
git config --global color.ui true # 显示git相关颜色
```

## 基本指令

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



## 配置全局http和https代理

> 提交`Github`和`Gitlab`的代码在某些时候非常慢，这个时候就可以配置代理加速代码提交和拉取。
>
> **只能代理http连接！！！**

```bash
# 设置代理 http.proxy 后面接你的本地代理地址和端口，一般是这个
# 不过我的1080端口老是被冲突，所以我改成了65534,然后你的代理软件需要允许来自局域网的连接就可以了。
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080

# 恢复
git config --global --unset http.proxy
git config --global --unset https.proxy

# 如果发现取消代理的命令不生效，可以用以下命令查看全局配置信息
git config --global -l
# 编辑全局配置，会启动编辑器，你可以手动去除代理信息
git config --global -e
```



## 常用操作

### 将文件添加到仓库

```bash
git add 文件名 # 将工作区的某个文件添加到暂存区   
git add -u # 添加所有被tracked文件中被修改或删除的文件信息到暂存区，不处理untracked的文件
git add -A # 添加所有被tracked文件中被修改或删除的文件信息到暂存区，包括untracked的文件
git add . # 将当前工作区的所有文件都加入暂存区
git add -i # 进入交互界面模式，按需添加文件到缓存区
```



### 将暂存区文件提交到本地仓库

```bash
git commit -m "提交说明" # 将暂存区内容提交到本地仓库
git commit -a -m "提交说明" # 跳过缓存区操作，直接把工作区内容提交到本地仓库
```



### 查看仓库当前状态

```bash
git status
```



### 比较文件异同

```bash
git diff # 工作区与暂存区的差异
git diff 分支名 #工作区与某分支的差异，远程分支这样写：remotes/origin/分支名
git diff HEAD  # 工作区与HEAD指针指向的内容差异
git diff 提交id 文件路径 # 工作区某文件当前版本与历史版本的差异
git diff --stage # 工作区文件与上次提交的差异(1.6 版本前用 --cached)
git diff 版本TAG # 查看从某个版本后都改动内容
git diff 分支A 分支B # 比较从分支A和分支B的差异(也支持比较两个TAG)
git diff 分支A...分支B # 比较两分支在分开后各自的改动

# 另外：如果只想统计哪些文件被改动，多少行被改动，可以添加 --stat 参数
```



### 查看历史记录

```bash
git log # 查看所有commit记录(SHA-A校验和，作者名称，邮箱，提交时间，提交说明)
git log -p -次数 # 查看最近多少次的提交记录
git log --stat # 简略显示每次提交的内容更改
git log --name-only # 仅显示已修改的文件清单
git log --name-status # 显示新增，修改，删除的文件清单
git log --oneline # 让提交记录以精简的一行输出
git log –graph –all --online # 图形展示分支的合并历史
git log --author=作者  # 查询作者的提交记录(和grep同时使用要加一个--all--match参数)
git log --grep=过滤信息 # 列出提交信息中包含过滤信息的提交记录
git log -S查询内容 # 和--grep类似，S和查询内容间没有空格
git log fileName # 查看某文件的修改记录，找背锅专用
```



### 代码回滚

```bash
git reset HEAD^ # 恢复成上次提交的版本
git reset HEAD^^ # 恢复成上上次提交的版本，就是多个^，以此类推或用~次数

git reflog

git reset --hard 版本号

--soft：只是改变HEAD指针指向，缓存区和工作区不变；
--mixed：修改HEAD指针指向，暂存区内容丢失，工作区不变；
--hard：修改HEAD指针指向，暂存区内容丢失，工作区恢复以前状态；
```



### 同步远程仓库

```bash
git push -u origin master
```



### 删除版本库文件

```bash
git rm 文件名
```



### 版本库里的版本替换工作区的版本

```bash
git checkout -- test.txt
```



### 本地仓库内容推送到远程仓库

```bash
git remote add origin git@github.com:帐号名/仓库名.git
```



### 从远程仓库克隆项目到本地

```bash
git clone git@github.com:git帐号名/仓库名.git
```



### 创建分支

```bash
# -b表示创建并切换分支
git checkout -b dev
# 上面一条命令相当于下面的二条：
# 创建分支
git branch dev
# 切换分支
git checkout dev
```



### 查看分支

```bash
git branch
```



### 合并分支

```bash
# 用于合并指定分支到当前分支
git merge dev

# 加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并
git merge --no-ff -m "merge with no-ff" dev
```



### 删除分支

```bash
# 删除本地分支，如果本地分支未完全合并是无法删除的，需要将-d改为-D表示强制删除
git branch -d dev
```



### 查看分支合并图

```bash
git log --graph --pretty=oneline --abbrev-commit
```



### 查看远程库信息

```bash
git remote
# -v 显示更详细的信息
```



### 撤消某次提交

```bash
# 撤销最近的一个提交
git revert HEAD 
# 撤销某次commit
git revert 版本号 
```



### 撤销本次所有更改

```bash
# 撤销本次所有更改,会撤销本次所有的更改。不包括已经commit的
git checkout -- .
```



### 拉取远程分支到本地仓库

```bash
# 会在本地新建分支，并自动切换到该分支
git checkout -b 本地分支 远程分支 
# 会在本地新建分支，但不会自动切换，还需checkout
git fetch origin 远程分支:本地分支 
# 建立本地分支与远程分支的链接
git branch --set-upstream 本地分支 远程分支
# 例如，下面代码执行会拉取远程1.1.0分支然后在本地创建名为1.1.0的分支，冒号右边的是本地分支名，可以自定义
git fetch origin 1.1.0:1.1.0
```



### 标签命令 - tag

```bash
# 打标签命令，默认为HEAD
git tag 标签 
# 显示所有标签
git tag 
# 给某个commit版本添加标签
git tag 标签 版本号
# 显示某个标签的详细信息
git show 标签
```



### 同步远程仓库更新

```bash
git fetch  origin master
# 从远程获取最新的到本地，首先从远程的origin的master主分支下载最新的版本到origin/master分支上，然后比较本地的master分支和origin/master分支的差别，最后进行合并。

git fetch比git pull更加安全
```



### 终止合并

```bash
# 终止合并,如果合并冲突过多，想要终止合并
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
git remote add origin [新的地址]
```



### 拉取指定分支代码

```bash
 git clone -b [远程分支名] [远程仓库地址]
```
