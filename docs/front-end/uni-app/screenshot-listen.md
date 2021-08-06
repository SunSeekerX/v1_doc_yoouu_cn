## 📌 Screenshot 截屏监听

### 简介

监听系统截屏事件，返回截图图片路径。

### 平台兼容性

|  Android   |  iOS   |
| :--------: | :----: |
| 4.4 - 11.0 | 9 - 14 |

### 使用示例

```javascript
const superModuleScreenshotListen = uni.requireNativePlugin('Super-Module-ScreenshotListen')

// 开始监听屏幕截图事件
onStartListenScreenshot() {
  safeRunning('onStartListenScreenshot', () => {
    const res = superModuleScreenshotListen.onStartListenScreenshot((result) => {
      toast('屏幕截图事件', result)
    })
    toast('onStartListenScreenshot', res)
  })
}

// 停止监听屏幕截图事件
onStopListenScreenshot() {
  safeRunning('onStopListenScreenshot', () => {
    const res = superModuleScreenshotListen.onStopListenScreenshot()
    toast('onStopListenScreenshot', res)
  })
}

/**
 * Toast 提示
 */
const toast = (title, val) => {
  try {
    if (typeof val === 'object') {
      val = JSON.stringify(val)
    } else {
      val = String(val)
    }
  } catch (e) {
    val = e.message
  } finally {
    uni.showToast({
      icon: 'none',
      title: `${title}: ${val}`,
      duration: 3000,
    })
  }
}

/**
 * 安全运行
 */
const safeRunning = (name, fun) => {
  try {
    fun()
  } catch (e) {
    toast(name, e.message)
  }
}
```

### 模块方法

#### onStartListenScreenshot([callback]) : result

启动截屏监听。

- `callback` <Function\> 结果回调

  回调结果

  - `success` <Boolean\> 操作是否成功

  - `code` <Number\> 状态码

    - `200` 屏幕截图成功
    - `500` 查询出错（仅安卓）

  - `msg` <String\> 请求信息

  - `data` <Object\> 请求成功返回数据

    - `imgPath` <String\> | <null\> 图片绝对路径

      > 在 Android 11 之后可能无法查询出来！目前在 `miui 12.5` Android 11 是可以查询出来的。

  - `err` <String\> 错误信息（仅安卓）

- `result` <Object\> 执行返回信息

  - `success` <Boolean\> 操作是否成功
  - `code` <Number\> 状态码
    - `200` 操作成功
    - `400` 禁止重复添加截屏事件
  - `msg` <String\> 请求信息

#### onStopListenScreenshot() : result

关闭截屏监听。

- `result` <Object\>执行返回信息
  - `success` <Boolean\> 操作是否成功
  - `code` <Number\> 状态码
    - `200` 停止监听截屏成功
    - `400` 未监听截屏事件
  - `msg` <String\> 请求信息

### 全局事件

#### onScreenshot

截屏之后触发。

- `success` <Boolean\> 操作是否成功

- `code` <Number\> 状态码

  - `200` 屏幕截图成功
  - `500` 查询出错（仅安卓）

- `msg` <String\> 请求信息

- `data` <Object\> 请求成功返回数据

  - `imgPath` <String\> | <null\> 图片绝对路径

    > 在 Android 11 之后可能无法查询出来！目前在 `miui 12.5` Android 11 是可以查询出来的。

- `err` <String\> 错误信息（仅安卓）

### 权限列表

**ios**

无

**Android**

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission
    android:name="android.permission.WRITE_EXTERNAL_STORAGE"
    android:maxSdkVersion="28" />
  <uses-permission android:name="android.permission.ACCESS_MEDIA_LOCATION"/>
```

### 演示截图

**Ios**

![screenshot-listen-ios-screenshot](https://static.yoouu.cn/imgs/2021/pic-go/screenshot-listen-ios-screenshot.jpg)

**Android**

![screenshot-listen-android-screenshot](https://static.yoouu.cn/imgs/2021/pic-go/screenshot-listen-android-screenshot.jpeg)

### 更新日志

#### 1.0.0

**功能（Features）**

1. 完成开发。

**Bug 修复 （Bug Fixes）**

### 问题反馈

虽然插件已经经过开发者测试和使用，但不排除某些场景下产生问题的可能性，如遇到 `Bug` 可以在评论区留言，或添加 `QQ: 1647800606` 进行反馈。
