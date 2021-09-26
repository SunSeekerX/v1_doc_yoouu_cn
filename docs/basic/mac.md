## 📌 软件推荐

[hyperdock](https://macwk.com/soft/hyperdock)

docker 栏窗口预览，Windows 自带，mac 没有这个功能。

[magnet](https://macwk.com/soft/magnet)

分屏神器。

CleanMyMac

清除垃圾工具

tomenu

增强右键菜单

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
