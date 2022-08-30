# Uni-app - Ios 离线打包

## SDK 文件说明

> 1、HBuilder-Hello这个文件夹的作用：
> 	uni-app项目的离线打包工程,里面只包含了基础模块，其他的三方SDK和模块需要自己配置。
>
> 2、HBuilder-ExampleDemo这个文件夹的作用：
> 	uni-app项目包含所有模块的离线示例工程，注意这个里面的工程不是打包工程
>
> 3、HBuilder-uniPluginDemo这个目录的作用：
> 	uni-app规范的、基于weex扩展的原生插件开发工程，,注意这个里面的工程不是打包工程。
>
> 4、Feature-iOS.xls这个文件的作用：
> 	配置表（依赖的库、资源文件、参数配置等）。
>
> 5、SDK这个目录的作用：
> 	这个里面是工程需要的库文件，.h头文件，配置文件，资源文件。

其他库的用途在离线包中Feature-iOS.xls文件里有详细描述

|                            主要库                            |              作用  ｜              |
| :----------------------------------------------------------: | :--------------------------------: |
|                     AlipaySDK.framework                      |             支付宝支付             |
|  AMapFoundationKit.framework、AMapFoundationKit.framework、  |                                    |
| AMapLocationKit.framework、AMapSearchKit.framework、MAMapKit.framework |           高德地图和定位           |
|  BaiduMapAPI_Base.framework、BaiduMapAPI_Cloud.framework、   |                                    |
| BaiduMapAPI_Location.framework、BaiduMapAPI_Map.framework、BaiduMapAPI_Search.framework、BaiduMapAPI_Utils.framework |           百度地图和定位           |
|          BUAdSDK.framework、BUFoundation.framework           |             穿山甲广告             |
|                  DCUniVideoPublic.framework                  | video组件和videoPlayer控件的公共库 |
|                       GTSDK.framework                        |            个推消息推送            |
|                      iflyMSC.framework                       |            讯飞语音识别            |
|                 IJKMediaFramework.framework                  |   video组件和videoPlayer控件播放   |
|                     libBaiduSpeechSDK.a                      |            百度语音识别            |
|                       libSDWebImage.a                        |     开源的SDWebImage打出来的库     |
|                      libWeChatSDK_pay.a                      |         微信SDK带支付功能          |
|                        libWeChatSDK.a                        |        微信SDK不带支付功能         |
|                        libWeiboSDK.a                         |            新浪微博SDK             |
|                      QHADSDK.framework                       |              360广告               |
|          UMAnalytics.framework、UMCommon.framework           |              友盟统计              |
|                    UPLiveSDKDll.framework                    |           livePusher推流           |

## 运行 SDK 内的 `HBuilder-Hello`

官方配置教程: [https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios)

- 将 `HBuilder-Hello` 放在 ios 工程目录下

  <img src="https://static.yoouu.cn/imgs/doc/front-end/uni-app/uni-app-ios-project-list.webp" style="zoom:25%;" />

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

- 创建 git 本地仓库，并进行本地 commit，防止更改了未知项，无法回退

- 将 SDK 文件夹放在 `HBuilder-Hello` 项目同级，不要放在项目内， uni-app 通过相对路径导入 SDK 内的文件

  > 这一步如果你运行 app 的话应该是可以正常跑起来的。只不过会提醒 appkey 未配置或者错误

  <img src="https://static.yoouu.cn/imgs/doc/front-end/uni-app/uni-app-ios-project-frist-run.webp" style="zoom:25%;" />

- 配置 `dcloud_appkey` [链接](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey), `${app}/HBuilder-Hello/HBuilder-Hello/HBuilder-Hello-Info.plist`

  <img src="https://static.yoouu.cn/imgs/doc/front-end/uni-app/uni-app-ios-project-dcloud_appkey.webp" style="zoom:25%;" />

- 生成离线打包资源放入 `${app}/HBuilder-Hello/HBuilder-Hello/Pandora/apps/__UNI__XXXXXXX/www`

  `__UNI__XXXXXXX` 需要修改为你的 `appid`

- 修改 `${app}/HBuilder-Hello/HBuilder-Hello/control.xml`

  `__UNI__XXXXXXX` 需要修改为你的 `appid`

  <img src="https://static.yoouu.cn/imgs/doc/front-end/uni-app/uni-app-ios-project-control-xml.webp" style="zoom: 25%;" />

  > 内置资源更新
  > 如果您更新了内置资源，重新运行App加载的还是旧的资源时请检查下面的配置：
  >
  > 工程 Bundle Identifier 已经改成您自己的；
  > 内置的资源版本名称和版本号需要高于上一个版本；
  > control.xml 中 debug 改成 false

- 配置应用标识(Bundle Identifier)

  选择左侧应用工程根目录，选中TARGETS下的HBuilder打开工程属性界面，在General下修改Identity的值：

  ![](https://static.yoouu.cn/imgs/doc/front-end/uni-app/uni-app-ios-project-boundle-id.webp)

- 配置应用名称

  > 在打开的原生工程中，点击工程的targets和点开manifest文件，然后将manifest文件里的“name”字段的内容 和原生工程里的Display Name 的写成一样。
  >
  > 注意，manifest文件里的”name“ 对应的是HBuilderX打开的工程里的“基础配置”里的应用名称。如下图红色框所示：
  >
  > <img src="https://static.yoouu.cn/imgs/doc/front-end/uni-app/uni-app-ios-project-name.webp" style="zoom:25%;" />
  >
  > 
  >
  > <img src="https://static.yoouu.cn/imgs/doc/front-end/uni-app/uni-app-ios-project-name2.webp" style="zoom:25%;" />

  这里自己测试还需要修改国际化下面的 `CFBundleDisplayName` 这个 key 值才能生效

## 修改 SDK 内的 `HBuilder-Hello` 默认项目跑起来

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