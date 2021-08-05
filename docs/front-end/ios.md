## 信息

开发者官网：[https://developer.apple.com/account/](https://developer.apple.com/account/)

## xcode

### 格式化 json 文件

暂时未发现方法。

解决方法：在 vscode 导入 ios 工程，在 vscode 格式化完成然后在 xcode 改

### 修改 uni-app 默认项目跑起来

- 下载 ios sdk，用 xcode 打开 `HBuilder-uniPluginDemo`

- 添加 `.gitignore`

  ```shell
  # OS X
  .DS_Store

  # Xcode
  build/
  *.pbxuser
  !default.pbxuser
  *.mode1v3
  !default.mode1v3
  *.mode2v3
  !default.mode2v3
  *.perspectivev3
  !default.perspectivev3
  xcuserdata
  *.xccheckout
  profile
  *.moved-aside
  DerivedData
  *.hmap
  *.ipa

  # CocoaPods
  Pods
  ```

- 删除 `UniPluginDemo` uni-app 或者转移到其他目录

- 创建 git 本地仓库，并进行本地 commit，防止更改了未知项，无法回退

- 选择 Hbuilder 直接运行显示失败，因为没有配置签名之类的

- 配置应用签名

  - 签名出现如下错误 `HBuilder is automatically signed, but provisioning profile a7e03077-46db-4b91-b0c4-20fd613c1e14 has been manually specified. Set the provisioning profile value to "Automatic" in the build settings editor, or switch to manual signing in the Signing & Capabilities editor.`

    删除如下配置

    <img src="https://static.yoouu.cn/imgs/doc/front-end/ios/202108041834119.png" alt="QQ20210804-182715@2x"  />

- 重新编译生成 `UniPluginDemo` 项目，拿到生成的打包资源

- 配置应用标识(Bundle Identifier)

- 配置版本号和版本名称

- 配置离线打包的 key

- 配置 `HBuilder-Hello/control.xml` 的 `appid` 为你 Hbuilderx 获取到的 appid

- 运行

- 提交到 git，请注意需要将项目克隆到 `iOSSDK@3.1.22.80438_20210709` 类似的目录下，并且需要确保项目目录同级存在 `SDK` 文件夹。工程依赖 `SDK` 文件夹的库。官方下载地址：[https://nativesupport.dcloud.net.cn/AppDocs/download/ios](https://nativesupport.dcloud.net.cn/AppDocs/download/ios)
