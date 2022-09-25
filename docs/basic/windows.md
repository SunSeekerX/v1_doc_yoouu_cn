## 关闭虚拟内存释放空间

我的电脑 右键属性，然后高级系统设置 -> 系统属性 -> 高级 -> 设置(性能) 无分页文件

## 关闭兼容性遥测

使用 dism++ 关闭服务。

## 微软拼音输入自定义时间

Windows 10：`设置`→`时间和语言`→`区域和语言`→`中文(中华人民共和国)`→`选项`→`微软拼音`→`选项`→`词库和自学习`→`添加新的或编辑现有的用户自定义短语`→`添加`。

然后在短语里面输入以下代码：

```
%yyyy%-%MM%-%dd% %HH%:%mm%:%ss% +0800
```

## 右下角时间显示秒

[http://iknow.lenovo.com.cn/detail/dc_173611.html](http://iknow.lenovo.com.cn/detail/dc_173611.html)

## 清除 Dns 缓存

用于更新域名后，访问域名解析到老的 ip 地址。

1：首先清除 Windows 的 dns 缓存。powershell 执行

```powershell
# 清除
ipconfig /flushdns

# 查看
ipconfig /displaydns
```

2：chrome 或 egde 地址栏输入

```
chrome://net-internals/#dns
```

点击 `Clear host cache`

找到 `Sockets`

点击 `Flush socket pools` 刷新试试

## PDF 压缩

[https://zh.pdf24.org/](https://zh.pdf24.org/)

## EDGE 多开

快捷方式添加参数

```
--user-data-dir="D:\edge\user1"
```

## Win11 上恢复 Win10 经典文件资源管理器样式

[https://finance.sina.com.cn/tech/2021-08-05/doc-ikqcfncc1009508.shtml](https://finance.sina.com.cn/tech/2021-08-05/doc-ikqcfncc1009508.shtml)

## Win11 上恢复 Win10 右键菜单

https://www.sordum.org/14479/windows-11-classic-context-menu-v1-0/

## Win11 关闭客户体验改善计划

该条目会造成一个 Microsoft 兼容性遥测的程序大量占用 cpu 造成 卡顿

1.按“Windows+R”键，打开“运行”，输入“gpedit.msc”，点击“确定”，打开“本地组策略编辑器”。

![](https://static.yoouu.cn/imgs/doc/basic/windows/202202091034151.png)

[完全禁用 Microsoft Compatibility Telemetry](https://blog.csdn.net/m0_49448331/article/details/113824078)

## 查看端口占用

**查看被占用端口对应的 PID**

```powershell
netstat -aon|findstr "49157"
```

**查看是哪个进程或者程序占用了`2720`端口**

```powershell
tasklist|findstr "2720"
```

输入 tasklist|findstr "2720"

## WIN10 休眠唤醒后，所有的窗口都跑到了左上角，如何解决？

1、按下 Win+R 打开运行，输入 regedit 回车，打开注册表；

2、打开注册表定位到：HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers\Configuration。查找 NOEDID 开头的项（我的电脑是最后一个），查找的项展开有个 00 项，00 项展开又还有个 00 项；会发现 PrimSurfSize.cx 和 PrimSurfSize.cy 不像其他几个跟屏幕分辨率一致。小一些。

![win10-window-error.png](https://static.yoouu.cn/imgs/doc/issue/win10-window-error.png)

3、两个 00 项都要修改两个键值：PrimSurfSize.cx 和 PrimSurfSize.cy，把这两个键值双击修改，输入你电脑对应的正常分辨率数值，比如 PrimSurfSize.cx 为宽度 1920，PrimSurfSize.cy 为高度 1080。十进制十六进制随意，看其他几个的 00 下的“数据”一栏，都能看到对应的十进制和十六进制，0x780（1920），0x438（1080）

重点就是这两个 00 都有这个名称，两个都要改，我之前只改了第二层的 00，重启后发现没解决。仔细看了是要两个都改，又把第一层 00 的这两个值改了，重启后就解决了。

当然，我看到 HWP 开头的也不是这个分辨率，手快了，同时改了。不过按照他人的经验应该不用吧。但已经忘了原先的值，只记得跟最后这个 NOEDID 的不一样。

另据说“在使用 HDMI 输出线时正常，只有在使用 Display Port 输出线才发现有此问题。” 而我的显示屏就是 DP 输出线，所以遇到此问题。这个只当做扩展小知识了解吧。

## Windows 文件夹结构

![windows-folder-structure](https://static.yoouu.cn/imgs/doc/basic/others/windows-folder-structure.png)

## `Typora`快捷键

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
- 插入图片：直接拖动到指定位置即可或者 ctrl+shift+i
- 插入链接：ctrl+k
- 分割线：
  - `***`+回车
  - `---`+回车
