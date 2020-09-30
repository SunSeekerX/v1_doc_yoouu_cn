# Flutter

## Dart



## Flutter - 开发环境安装

**说明**

flutter sdk 已经带了完整的 dart 语言运行环境。

**下载地址**

 [https://flutter.dev/docs/get-started/install](https://flutter.dev/docs/get-started/install)

**安装**

解压 flutter 文件夹到自定义的目录，配置环境变量，添加 `${app}/flutter/bin` 目录到 Path，输入 `dart --version`，和 `flutter --version` 能成功输出版本号即可。

**国内镜像**

[https://flutter.cn/](https://flutter.cn/)

**检查安装是否正常**

`flutter doctor`

**Android studio 配置**

安卓sdk 环境变量：ANDROID_SDK_ROOT=D:\ProgramFiles\Android\Sdk

**同意安卓开发者协议**

`flutter doctor --android-licenses`，全部 y

**结果**

```bash
❯ flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 1.20.4, on Microsoft Windows [Version 10.0.19041.329], locale zh-CN)
[✓] Android toolchain - develop for Android devices (Android SDK version 30.0.2)
[✓] Android Studio (version 4.0)
[✓] VS Code (version 1.49.2)
[✓] Connected device (1 available)

• No issues found!
SunSeekerX@SSX-PC  ~\Desktop                                                                                 [15:43]
❯
```





## Flutter - Android studio 创建项目

### 注意事项

- 创建项目可能卡 `create flutter project...` 使用全局科学上网就行。