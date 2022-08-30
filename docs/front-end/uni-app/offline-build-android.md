# Uni-app - Android 离线打包

1. 下载离线打包需要的文件，[链接](https://nativesupport.dcloud.net.cn/AppDocs/download/android)

2. 申请 `Appkey`,[链接](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)

3. 使用 Android studio 打开 `HBuilder-Integrate-AS` 工程

4. 找到 `Androidmanifest.xml` 配置 `Appkey`

5. 打开 app-> src -> main -> res -> values -> strings.xml 文件，修改“app_name”字段值，该值为安装到手机上桌面显示的应用名称，建议与 manifest.json 中 name（基础配置中的应用名称）对应。

6. 配置应用图标和启动界面

   - icon.png 为应用的图标。
   - push.png 为推送消息的图标。
   - splash.png 为应用启动页的图标。

   将 icon.png、push.png、splash.png 放置到 drawable，drawalbe-ldpi，drawable-mdpi，drawable-hdpi，drawable-xhdpi，drawable-xxhdpi 文件夹下，不同文件夹下对应不同图片尺寸，可参考[文档](https://blog.csdn.net/xuaho0907/article/details/72848520)

7. 放入 uni-app 打包生成的资源。

8. 修改 `dcloud_control.xml` 的 `appid`

**遇到的问题**

1. .9 图片变形