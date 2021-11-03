# power-shell

## 刷新环境变量

**powershell**

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine")
# or
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

**cmd**

> open cmd commend prompt window.
>
> input `set PATH=C` -> this will refresh the environment variables. close and restart cmd window. input `echo %PATH%` to test.

```shell
set PATH=C
# 关闭窗口重新打开，输入
echo %PATH%
```

## 代理

```powershell
# 设置代理
netsh winhttp set proxy 127.0.0.1:1080
# 取消代理
netsh winhttp reset proxy
# 查看代理
netsh winhttp show proxy

# clash 复制 power shell
$Env:http_proxy="http://127.0.0.1:7890";$Env:https_proxy="http://127.0.0.1:7890"
# clash 复制 cmd
set http_proxy=http://127.0.0.1:7890 & set https_proxy=http://127.0.0.1:7890
```

## powershell 因为在此系统上禁止运行脚本…

> 最近在自己电脑上使用 react-native 初始化项目出现了下面的错误，猜测应该是微软更新导致

```bash
react-native : 无法加载文件 C:\Users\SunSeekerX\AppData\Roaming\npm\react-native.ps1，因为在此系统上禁止运行脚本。有关
详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ react-native init demo
+ ~~~~~~~~~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

**解决**

1. win+X 启动 `windows PowerShell`（管理员）

2. 若要在本地计算机上运行您编写的未签名脚本和来自其他用户的签名脚本，请使用以下命令将计算机上的 执行策略更改为 RemoteSigned

   ```powershell
   # 更改执行策略
   set-ExecutionPolicy RemoteSigned

   # 查看执行策略
   get-ExecutionPolicy
   ```

## 开启 win10 卓越性能模式

桌面按住`shift`加上鼠标右键选择在此处打开`powershell`窗口执行

```powershell
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61

# 输出
PS C:\Users\SunSeekerX\Desktop> powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
电源方案 GUID: 124d9932-ad06-41b8-85a6-342c4b5c6db9  (卓越性能)
PS C:\Users\SunSeekerX\Desktop>
```

去电源选项选择卓越性能就 ok 了

![](https://static.yoouu.cn/imgs/doc/basic/power-shell/super-power.png)

## 📌 强化 win10 下的命令行 - 颜值和实用并存

> 更新时间：2021-01-03 20:18:15
>
> - 2021-10-21 10:40:57
>
>   - 增加 PSReadLine 插件
>
> - 2021-01-04 10:49:08
>   - 抄了更多小马哥的文章！！！
> - 2021-01-03 20:18:15
>   - 增加 `PSColor` 模块安装说明
>   - 发现一个很好的文章 [PowerShell 美化指南](https://coolcode.org/2018/03/16/how-to-make-your-powershell-beautiful/) by 小马哥

## 0x1 安装 Windows Terminal

在 **Microsoft Store** 中下载 `Windows Terminal` 注意系统要求

<img src="https://image.yoouu.cn/2020/win10-terminal/win10-terminal.png" alt="win10-terminal" style="zoom:50%;" />

## 0x2 安装 PowerShell core

下载地址：[https://github.com/PowerShell/PowerShell/releases](https://github.com/PowerShell/PowerShell/releases)

win10 选择 `PowerShell-7.1.0-preview.7-win-x64.msi` 这种安装即可

<img src="https://image.yoouu.cn/2020/win10-terminal/poweishell-core.png" alt="poweishell-core" style="zoom:50%;" />

## 0x3 安装字体（可选）

[FiraCode](https://github.com/tonsky/FiraCode/releases) - 连字符字体

<img src="https://image.yoouu.cn/sunseekerx/resource/FiraCode.svg" alt="FiraCode" style="zoom: 33%;" />

[JetBrainsMono](https://github.com/JetBrains/JetBrainsMono) - IDEA 系字体

[更纱黑体 Sarasa-Gothic](https://github.com/be5invis/Sarasa-Gothic)

## 0x4 安装 PowerShell 模块

通过在 **PowerShell** 中执行下面的命令安装, 以超级管理员运行 **PowerShell**

右键桌面空白的地方选择 **PowerShell** > **Open Here as Administrator**

**CurrentUser** 是仅为当前用户安装模块

安装过程中加上 `-Verbose` 可以看到输出

### 注意事项

> ！如果出现 **PowerShell 因为在此系统上禁止运行脚本…**
>
> 输入以下命令
>
> ```powershell
> # 更改执行策略
> set-ExecutionPolicy RemoteSigned
>
> # 查看执行策略
> get-ExecutionPolicy
> ```

如果在安装过程中遇到类似于这样的提示：

```
不受信任的存储库你正在从不受信任的存储库安装模块。如果你信任该存储库，请通过运行 Set-PSRepositorycmdlet 更改其 InstallationPolicy 值。是否确实要从“PSGallery”安装模块?[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助
```

你可以按 Y 或 A 键，但是如果你觉得每次都这样麻烦的话，可以先执行下面的命令：

```powershell
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
```

之后再安装模块就不会出现这个提示了。

**0x2 如果下载慢的话可以使用命令行代理**

```powershell
# 设置代理（填写你本地的端口）
netsh winhttp set proxy 127.0.0.1:1080
# 取消代理
netsh winhttp reset proxy
# 查看代理
netsh winhttp show proxy
```

**命令行下载依旧很慢的可以试试全局科学上网！！！**

### posh-git

```powershell
Install-Module posh-git -Scope CurrentUser
# 输出 Install-Module posh-git -Scope CurrentUser -Verbose
```

### oh-my-posh

```powershell
Install-Module oh-my-posh -Scope CurrentUser
# 输出 Install-Module oh-my-posh -Scope CurrentUser -Verbose
```

### PSColor

在默认情况下， PowerShell 的文件列表并不会彩色显示。

想要文件列表彩色显示的话，最简单的方法就是安装一个 PowerShell 模块：[PSColor](https://github.com/Davlind/PSColor)。

这个模块安装使用都很简单，打开 Windows PowerShell 管理员控制台，输入：

```powershell
Install-Module PSColor
```

就可以了。

如果你想使用普通用户来安装，打开 WIndows PowerShell 控制台，输入：

```
Install-Module PSColor -Scope CurrentUser
```

当然安装完了之后，直接输入 ls，显示的还是黑白效果的文件列表，你还需要启动它，不论是在管理员控制台，还是普通用户控制台下，都可以直接输入：

```
Import-Module PSColor
```

### DirColors

```
Install-Module DirColors
```

哪些文件类型可以被加亮显示是可以配置的，在 [PSColor](https://github.com/Davlind/PSColor) 官方的 README 中有介绍，这里就不转述了。不过这个配置方式是 PowerShell 式的，如果能直接像上面使用 itermcolors 文件配置控制台色彩一样，直接用 Linux 平台上的现成的 dircolors 配置文件的话，会不会更方便呢？这个想法很好，而且还真的有人实现了，它就是 [DirColors](https://github.com/DHowett/DirColors)。

这也是一个 PowerShell 模块，安装方式跟 [PSColor](https://github.com/Davlind/PSColor) 一样，使用：

```
Install-Module DirColors
```

或者

```
Install-Module DirColors -Scope CurrentUser
```

就可以安装上了。之后，使用：

```
Import-Module DirColors
```

导入该模块。接下来，如果你想要载入某个现成的 dircolors 配置文件的话，只需要用：

```
Update-DirColors ~\dir_colors
```

这条命令就可以了。

其中 `~\dir_colors` 就是配置文件的路径，关于 dir_colors 的配置文件，在 github 上可以搜到不少，比如：[dircolors-solarized](https://github.com/seebi/dircolors-solarized)。这里就不再列举更多了。

### PSReadLine

如果是使用自带的 powershell，先执行

```powershell
Install-Module -Name PowerShellGet -Force
Exit
```

然后安装

```powershell
Install-Module PSReadLine -AllowPrerelease -Force
# 稳定版本
Install-Module PSReadLine
```

## 0x5 配置 PowerShell

### 字体配置

![ps-font.png](https://image.yoouu.cn/2020/win10-terminal/ps-font.png)

### 模块配置

**0x1 输入：**

```powershell
$PROFILE

# C:\Users\SunSeekerX\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```

**0x2 继续输入：**

```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```

**0x3 在打开的文件中添加**： **Set-Theme Paradox** 是设置默认主题

> 该文件是每次启动 PowerShell 执行的文件，加载两个模块和设置主题。
>
> 其他可选主题有
>
> **Agnoster、Avit、Darkblood、Fish、Honukai、Paradox、Sorin、tehrob**, **PowerLine**

```powershell
# Import Modules BEGIN
# 引入 DirColors
Import-Module DirColors

# 引入 posh-git
Import-Module posh-git

# 引入 oh-my-posh
Import-Module oh-my-posh

# 引入 ps-read-line
Import-Module PSReadLine

# 设置 PowerShell 主题
Set-Theme Paradox
# Import Modules END


# Set Hot-keys BEGIN
# 设置预测文本来源为历史记录
Set-PSReadLineOption -PredictionSource History

# 每次回溯输入历史，光标定位于输入内容末尾
Set-PSReadLineOption -HistorySearchCursorMovesToEnd

# 设置 Tab 为菜单补全和 Intellisense
Set-PSReadLineKeyHandler -Key "Tab" -Function MenuComplete

# 设置 Ctrl+d 为退出 PowerShell
Set-PSReadlineKeyHandler -Key "Ctrl+d" -Function ViExit

# 设置 Ctrl+z 为撤销
Set-PSReadLineKeyHandler -Key "Ctrl+z" -Function Undo

# 设置向上键为后向搜索历史记录
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward

# 设置向下键为前向搜索历史纪录
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward
# Set Hot-keys END
```

**0x4 保存后关闭记事本, 在终端中输入以下命令生效(这里不要照抄 下面执行的 是 上文中$PROFILE 的值)**

```powershell
C:\Users\SunSeekerX\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```

**0x5 切换主题**

```powershell
Set-Theme $主题名字
```

## 0x6 配置 Windows Terminal

[官网详细配置说明](https://docs.microsoft.com/zh-cn/windows/terminal/)

### 配置主题配色

**0x1 打开配置文件 setting.json**

<img src="https://image.yoouu.cn/2020/win10-terminal/pwsh.png" alt="pwsh" style="zoom: 50%;" />

**0x2 参考以下配置**

可自行修改，一定要符合 json 的内容格式，不然会报错，还有就是图片的的路径要与己系统对应

改的比较多的就是 `profiles > defaults` 和 `schemes` ，前者是启动的配置，后者是主题配色。

下面的配置不要全部复制，可以选择性的更改你的配置！

```json
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
  "copyOnSelect": false,
  "copyFormatting": false,
  "profiles": {
    "defaults": {
      "fontFace": "Sarasa Term SC", // oh-my-posh 主题原因，使用其他的字体可能会出现乱码
      // "backgroundImage": "C:\\bash-bg.jpg", // 背景图片地址
      // "backgroundImageOpacity": 0.5, // 透明度
      "colorScheme": "Ayu Mirage", // 颜色方案
      "acrylicOpacity": 0.7,
      "useAcrylic": true,
      "fontSize": 14
      // Put settings here that you want to apply to all profiles.
    },
    "list": [
      {
        // Make changes here to the powershell.exe profile.
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "Windows PowerShell",
        "commandline": "powershell.exe",
        "hidden": false,
        "startingDirectory": null
      },
      {
        // Make changes here to the cmd.exe profile.
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "name": "命令提示符",
        "commandline": "cmd.exe",
        "hidden": false,
        "startingDirectory": null
      },
      {
        "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
        "hidden": false,
        "name": "PowerShell",
        "source": "Windows.Terminal.PowershellCore",
        "startingDirectory": null
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "hidden": false,
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure",
        "startingDirectory": null
      }
    ]
  },
  // 配色方案
  "schemes": [
    {
      "name": "Andromeda",
      "black": "#000000",
      "red": "#cd3131",
      "green": "#05bc79",
      "yellow": "#09da0f",
      "blue": "#2472c8",
      "purple": "#bc3fbc",
      "cyan": "#0fa8cd",
      "white": "#e5e5e5",
      "brightBlack": "#666666",
      "brightRed": "#cd3131",
      "brightGreen": "#05bc79",
      "brightYellow": "#09da0f",
      "brightBlue": "#2472c8",
      "brightPurple": "#bc3fbc",
      "brightCyan": "#0fa8cd",
      "brightWhite": "#e5e5e5",
      "background": "#262a33",
      "foreground": "#e5e5e5"
    },
    {
      "name": "Campbell",
      "foreground": "#F2F2F2",
      "background": "#0C0C0C",
      "colors": [
        "#0C0C0C",
        "#C50F1F",
        "#13A10E",
        "#C19C00",
        "#0037DA",
        "#881798",
        "#3A96DD",
        "#CCCCCC",
        "#767676",
        "#E74856",
        "#16C60C",
        "#F9F1A5",
        "#3B78FF",
        "#B4009E",
        "#61D6D6",
        "#F2F2F2"
      ]
    },
    {
      "name": "Solarized Dark",
      "foreground": "#FDF6E3",
      "background": "#073642",
      "colors": [
        "#073642",
        "#D30102",
        "#859900",
        "#B58900",
        "#268BD2",
        "#D33682",
        "#2AA198",
        "#EEE8D5",
        "#002B36",
        "#CB4B16",
        "#586E75",
        "#657B83",
        "#839496",
        "#6C71C4",
        "#93A1A1",
        "#FDF6E3"
      ]
    },
    {
      "background": "#fafafa",
      "black": "#000000",
      "blue": "#3199e1",
      "brightBlack": "#686868",
      "brightBlue": "#399ee6",
      "brightCyan": "#4cbf99",
      "brightGreen": "#86b300",
      "brightPurple": "#a37acc",
      "brightRed": "#f07171",
      "brightWhite": "#d1d1d1",
      "brightYellow": "#f2ae49",
      "cyan": "#46ba94",
      "foreground": "#6c7680",
      "green": "#99bf4d",
      "name": "Ayu Light",
      "purple": "#9e75c7",
      "red": "#ea6c6d",
      "white": "#c7c7c7",
      "yellow": "#eca944"
    },
    {
      "background": "#0a0e14",
      "black": "#01060e",
      "blue": "#53bdfa",
      "brightBlack": "#686868",
      "brightBlue": "#59c2ff",
      "brightCyan": "#95e6cb",
      "brightGreen": "#c2d94c",
      "brightPurple": "#ffee99",
      "brightRed": "#f07178",
      "brightWhite": "#ffffff",
      "brightYellow": "#ffb454",
      "cyan": "#90e1c6",
      "foreground": "#b3b1ad",
      "green": "#91b362",
      "name": "Ayu Dark",
      "purple": "#fae994",
      "red": "#ea6c73",
      "white": "#c7c7c7",
      "yellow": "#f9af4f"
    },
    {
      "background": "#1f2430",
      "black": "#191e2a",
      "blue": "#6dcbfa",
      "brightBlack": "#686868",
      "brightBlue": "#73d0ff",
      "brightCyan": "#95e6cb",
      "brightGreen": "#bae67e",
      "brightPurple": "#d4bfff",
      "brightRed": "#f28779",
      "brightWhite": "#ffffff",
      "brightYellow": "#ffd580",
      "cyan": "#90e1c6",
      "foreground": "#cbccc6",
      "green": "#a6cc70",
      "name": "Ayu Mirage",
      "purple": "#cfbafa",
      "red": "#ed8274",
      "white": "#c7c7c7",
      "yellow": "#fad07b"
    }
  ],
  "keybindings": [
    {
      "command": {
        "action": "copy",
        "singleLine": false
      },
      "keys": "ctrl+c"
    },
    {
      "command": "paste",
      "keys": "ctrl+v"
    },
    {
      "command": "find",
      "keys": "ctrl+shift+f"
    },
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    }
  ]
}
```

**0x3 官方更多配色**

[https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/color-schemes](https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/color-schemes)

### 添加 Windows Terminal 到右键

<img src="https://image.yoouu.cn/2020/win10-terminal/right-menu.png" alt="right-menu" style="zoom:50%;" />

**0x1 下载图标**

下载地址：[icon](https://raw.githubusercontent.com/yanglr/WindowsDevTools/master/awosomeTerminal/icons/wt_32.ico)，放到 `C:\Users\[user_name]\AppData\Local\terminal`，没有这个文件夹新建一个。

**注意**：`[user_name]` 是你自己电脑的用户名

**0x2 写入注册表**

创建一个 txt 文档，并把档后缀改为 `reg`。文档的名字可自己创建，后缀名不可以错。右键菜单出现 `Windows Terminal` 有两种方法。一种是按`shift`+ `右键`,另一种是直接`右键`。

`shift + 右键`

把下面的内容复制到 reg 去

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows Terminal"
"Icon"="%USERPROFILE%\\AppData\\Local\\terminal\\wt_32.ico"
"Extended"=""

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\[user_name]\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```

**注意**：请把 `[user_name]` 改成自己电脑的用户名

`右键`

把下面的内容复制到 reg 去

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
@="Windows terminal here"
"Icon"="%USERPROFILE%\\AppData\\Local\\terminal\\wt_32.ico"

[HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
@="C:\\Users\\[user_name]\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe"
```

**注意**：请把 `[user_name]` 改成自己电脑的用户名

**0x3 修改 Windows Terminal 的 settings.json**

把 `profiles > list > startingDirectory` 改为 `null`，没有的自己创建一个。

可以选择的改你需要的。（我都改了）

> 这个是修改右键启动路径为当前运行命令的路径。

## 配置 vscode 取消 logo

加入下面这个在启动的时候就不会有 logo 打印了，就是诸如 `加载个人文件花费了多少毫秒的提示`

```json
"terminal.integrated.shellArgs.windows": ["-NoLogo", "-NoExit", "-Command", "& { Write-Host }"]
```

## 0x7 结语

平时工作中命令行 `git` 命令用的比较多，安装了扩展，输入命令可以按 `Tab` 来自动补全方便了很多。

Windows 下的命令行还有很多的玩法，比如支持 Linux 命令的 `MSYS2`，集成了 `pacman`。 可以参考 [Win10 终端神器——Windows Terminal 与 MSYS2 MinGW64 集成记](https://ttys3.net/post/windows/windows-terminal-msys2-mingw64-setup/) 进行安装。

## 0x8 参考链接

- [推荐一款 颜值爆表的主题终端 (windows )](https://juejin.im/post/6850037258955784205), by iwhao_top
- [添加 Windows Terminal 到鼠标右键菜单](https://zhuanlan.zhihu.com/p/91259377)，by Jerry
- [PowerShell 美化指南](https://coolcode.org/2018/03/16/how-to-make-your-powershell-beautiful/) by 小马哥
- [Windows Terminal 完美配置 PowerShell 7.1](https://zhuanlan.zhihu.com/p/137595941) by littleNewton
