## WIN10 休眠唤醒后，所有的窗口都跑到了左上角，如何解决？

1、按下 Win+R 打开运行，输入 regedit 回车，打开注册表；

2、打开注册表定位到：HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers\Configuration。查找 NOEDID 开头的项（我的电脑是最后一个），查找的项展开有个 00 项，00 项展开又还有个 00 项；会发现 PrimSurfSize.cx 和 PrimSurfSize.cy 不像其他几个跟屏幕分辨率一致。小一些。

![win10-window-error.png](https://image.yoouu.cn/sunseekerx/issue/win10-window-error.png)

3、两个 00 项都要修改两个键值：PrimSurfSize.cx 和 PrimSurfSize.cy，把这两个键值双击修改，输入你电脑对应的正常分辨率数值，比如 PrimSurfSize.cx 为宽度 1920，PrimSurfSize.cy 为高度 1080。十进制十六进制随意，看其他几个的 00 下的“数据”一栏，都能看到对应的十进制和十六进制，0x780（1920），0x438（1080）

重点就是这两个 00 都有这个名称，两个都要改，我之前只改了第二层的 00，重启后发现没解决。仔细看了是要两个都改，又把第一层 00 的这两个值改了，重启后就解决了。

当然，我看到 HWP 开头的也不是这个分辨率，手快了，同时改了。不过按照他人的经验应该不用吧。但已经忘了原先的值，只记得跟最后这个 NOEDID 的不一样。

另据说“在使用 HDMI 输出线时正常，只有在使用 Display Port 输出线才发现有此问题。” 而我的显示屏就是 DP 输出线，所以遇到此问题。这个只当做扩展小知识了解吧。
