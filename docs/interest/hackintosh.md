# Hackintosh

## 📌 重装

- 下载 chrome
- 下载 typora
  - 更换所有 md 文档用 typora 打开
- 下载 vscode
- 下载百度输入法
- 关闭鼠标自然滚动
- 切换 ctrl 和 command 位置 设置 > 键盘 > 修饰键
- 下载微信
- 下载 qq
- 下载 hackintool 电源 > 修复深度休眠预留空间
- 迁移三码
- 复制 efi 到引导盘
- 下载 maczip
  - 更换所有 zip 文档用 maczip 打开
- 设置 finder
  - 设置文件夹显示在前
  - 设置默认按照名称排序 （右键空白地方显示选项）
- 下载 nodejs

## 📌 nuc8

Mac 镜像下载地址

- 官方（需要 App store）：https://support.apple.com/zh-cn/HT201372
- msdn（只有 Catalina）：https://next.itellyou.cn/

## 📌 安装教程

### Bios 设置

```
豆子峡谷（NUC8ixBEx）的具体设置项如下：（启用为勾选，禁用为不勾选）
1、开机时，连续点按 F2 进入 BIOS，为了避免之前有其他不合适的改动，建议先按 F9 重置 BIOS 默认设置。
2、Boot->Boot Priority->Legacy Boot Priority-> « Legacy Boot » ：禁用
3、Boot->Boot Configuration->
UEFI Boot->« Fast Boot »： 禁用
UEFI Boot->« Boot USB Devices First » ： 启用
UEFI Boot->« Boot Network Devices Last » ：启用
Boot Devices->«Network Boot» ：设置为 « Disable »
4、Boot->Secure Boot-> « Secure Boot » ：禁用
5、Security->Security Features-> « Inter VT for directed I/VO (VT-d) » ： 禁用
6、Power->Secondary Power Settings-> « Wake on LAN from S4/S5 » ： 设置为 « Stay Off »
以下为使用白果拆机卡的用户设置：
7、Devices->Onboard Devices-> « WLAN » 和 « Bluetooth » ：禁用
```

### 工具

[balenaEtche](https://www.balena.io/etcher/)

## 📌 文章

- [NUC8（豆子峡谷）黑苹果新手指南 Q&A](https://zhuanlan.zhihu.com/p/165596210) by weachy
- [NUC8（豆子峡谷）在线安装 macOS，这才是 OpenCore 正确的打开方式](https://zhuanlan.zhihu.com/p/165608087) by weachy

## 📌 问题解决

### 1. mac 和 windows 时间不正确

办法也很简单，就是让 Windows 把硬件时间当作 UTC 时间，保持和 macOS 一致。

Window7 用户点击左下角 开始 -> 运行 -> 输入 CMD

Window8/10 用户按下 Win+X 组合键，使用管理员模式进入 CMD

输入以下命令：

```powershell
Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1
```

## 📌 虚拟机安装

https://sysin.org/blog/how-to-install-macos-big-sur/

## 📌 下载文件校验

### Mac

- 查看 sha256sum，对比原有值：

  ```
  #shasum -a 256 文件名
  # -a 指定算法，现在一般是用 256，未来可能会使用 384 或者 512
  shasum -a 256 Install-macOS-Big-Sur-11.5-20G71.iso
  # 输出如下值，对比一下判断是否正确
  5af8f20621fe61856ad0ccbe714aea0341b062240af04ac76661dd68ed83ccb9
  ```

- 从校验文件中读取对比

  ```
  #shasum -a 256 -c 校验文件
  shasum -a 256 -c Install-macOS-Big-Sur-11.5-20G71.iso.sha2
  # 输出 OK 即正确：
  Install-macOS-Big-Sur-11.5-20G71.iso: OK
  ```

### Windows

- PowerShell

  Windows PowerShell 通过 Get-FileHash cmdlet 查看和获取文件校验和，并且默认使用 sha256 算法。

  ```
  Get-FileHash D:\Download\Install-macOS-Big-Sur-11.5-20G71.iso | Format-List

  Algorithm : SHA256
  Hash      : 5af8f20621fe61856ad0ccbe714aea0341b062240af04ac76661dd68ed83ccb9
  Path      : D:\Download\Install-macOS-Big-Sur-11.5-20G71.iso
  ```

  如果需要指定算法使用 `-Algorithm` 参数，例如 sha384：`Get-FileHash D:\Download\Install-macOS-Big-Sur-11.5-20G71.iso -Algorithm SHA384 | Format-List`

- 第三方软件

  推荐使用 [7-Zip](https://www.7-zip.org/)，免费的全能压缩解压软件，安装后，在资源管理器点击文件的右键菜单后多出一个 “CRC SHA”，点击 “SHA-256” 即可，也可以点击 “\*” 查看所有校验类型。

  其他有很多小软件，请自行搜索。

### Linux

- Ubuntu 直接使用 shasum 命令，用法参看上述 macOS，不在赘述。
- CentOS 默认没有 shasum，需要手动安装：`yum -y install perl-Digest-SHA`，然后命令也是一样，参考 macOS
