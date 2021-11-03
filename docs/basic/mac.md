## 📌 软件推荐

[hyperdock](https://macwk.com/soft/hyperdock)

docker 栏窗口预览，Windows 自带，mac 没有这个功能。

[magnet](https://macwk.com/soft/magnet)

分屏神器。

CleanMyMac

清除垃圾工具

tomenu

增强右键菜单

## 📌 问题解决

**2K 显示器缩放到 1080p 很模糊？**

需要开启 hidpi

[一键开启脚本 - https://github.com/xzhih/one-key-hidpi](https://github.com/xzhih/one-key-hidpi)

```shell
bash -c "$(curl -fsSL https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/hidpi.sh)"
```

[RDM - https://github.com/avibrazil/RDM](https://github.com/avibrazil/RDM)

[下载地址 - https://avi.alkalay.net/software/RDM/](https://avi.alkalay.net/software/RDM/)

## 📌 Mac 系统下的环境变量：

```
a. /etc/profile
b. /etc/paths
c. ~/.bash_profile
d. ~/.bash_login
e. ~/.profile
f. ~/.bashrc
复制代码
```

其中 a 和 b 是`系统级别`的，系统启动就会加载，其余是用户接别的。c,d,e 按照从前往后的`顺序读取`，如果 c 文件存在，则后面的几个文件就会被忽略`不读了`，以此类推。~/.bashrc 没有上述规则，它是 bash shell 打开的时候载入的。这里建议在 c 中添加环境变量，以下也是以在 c 中添加环境变量来演示的:

## 📌 iterm2 配置

### 安装 iterm2

[https://iterm2.com/](https://iterm2.com/)

### 检查是否安装 zsh

```shell
zsh --version
```

如果没有安装使用 Homebrew 安装，安装 Homebrew [https://brew.idayer.com/](https://brew.idayer.com/)

```shell
brew install zsh
```

设置默认

```shell
chsh -s /usr/local/bin/zsh
```

### 把 iTerm2 设为默认

```
iTerm2 -> Make ITerm2 Default Term
```

### 安装 oh-my-zsh

选择下面其中一种脚本安装：

curl：

```shell
export REMOTE=https://gitee.com/imirror/ohmyzsh.git
sh -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ohmyzsh/ohmyzsh/tools/install.sh)"
```

wget：

```shell
export REMOTE=https://gitee.com/imirror/ohmyzsh.git
sh -c "$(wget -O- https://cdn.jsdelivr.net/gh/ohmyzsh/ohmyzsh/tools/install.sh)"
```

fetch：

```shell
export REMOTE=https://gitee.com/imirror/ohmyzsh.git
sh -c "$(fetch -o - https://cdn.jsdelivr.net/gh/ohmyzsh/ohmyzsh/tools/install.sh)"
```

### 配置主题

官方收集了一些主题（不再收录新主题），你可以访问 [主题&&截图](https://link.segmentfault.com/?enc=kC1TQKiMI7IcZqZ1bk2Sww%3D%3D.6tr%2FteU0wp8wfJK8zQdYiGQKovCsY5ET485uWbBAcTMaI2BRfkd0LutXTiLYNNSG) 页面查看并选取。

这里以`agnoster`为例说明。

1.编辑`~/.zshrc`文件，修改`ZSH_THEME`配置：

```shell
ZSH_THEME="agnoster"
# 主题介绍请访问 https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#agnoster
```

### 功能增强

#### 1. zsh-autosuggestions

命令自动补全功能。

1.克隆代码到`$ZSH_CUSTOM/plugins`（默认位于`~/.oh-my-zsh/custom/plugins`）

```shell
git clone https://gitee.com/imirror/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

最后执行`source ~/.zshrc`生效。

2.在`Oh My Zsh`配置启用插件

打开`~/.zshrc`，找到`plugins`，追加`zsh-autosuggestions`。

`git`为默认配置。

```shell
plugins=(git zsh-autosuggestions)
```

如果有看不到自动补全的内容，确保以下两个颜色不是相近的：

```mipsasm
iTerm > Preferences > Profiles > Colors > ANSI Colors > Bright > Black
iTerm > Preferences > Profiles > Colors > Basic Colors > Background
```

#### 2. zsh-syntax-highlighting

语法高亮。

1.克隆代码到`$ZSH_CUSTOM/plugins`（默认位于`~/.oh-my-zsh/custom/plugins`）

```shell
git clone https://gitee.com/imirror/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

2.在`Oh My Zsh`配置启用插件

打开`~/.zshrc`，找到`plugins`，追加`zsh-autosuggestions`。

`git`为默认配置。

```shell
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

最后执行`source ~/.zshrc`生效。
