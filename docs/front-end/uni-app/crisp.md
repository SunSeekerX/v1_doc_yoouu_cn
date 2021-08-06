## 📌 Crisp 客服

### 简介

官网: [https://crisp.chat/en/](https://crisp.chat/en/)

Github: [https://github.com/crisp-im](https://github.com/crisp-im)

### 平台兼容性

|  Android   |  iOS   |
| :--------: | :----: |
| 4.4 - 11.0 | 9 - 14 |

### 使用示例

```javascript
const superModuleCrisp = uni.requireNativePlugin('Super-Module-Crisp')

/**
 * 初始化 Crisp
*/
onInitConfigureCrisp() {
  const res = superModuleCrisp.onInitConfigure({
    websiteId: 'YOUR_WEBSITE_ID',
  })
  toast('onInitConfigureCrisp', res)
}

/**
 * 启动 Crisp
*/
onStartCrisp() {
  const res =  superModuleCrisp.onStartCrisp()
  toast('onStartCrisp', res)
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

#### onInitConfigure(options): result

初始化 Crisp。

- `options` <Object\>
  - `websiteId` <String\> 网站 id
- `result` <Object\> 执行返回信息
  - `success` <Boolean\> 操作是否成功
  - `code` <Number\> 状态码
    - `200` 初始化 Crisp 成功!
    - `400` 请传入 "websiteId"!
    - `401` 请勿重复初始化!
  - `msg` <String\> 请求信息

#### onStartCrisp(): result

启动 Crisp。

`result` <Object\> 执行返回信息

- `success` <Boolean\> 操作是否成功
- `code` <Number\> 状态码
  - `200` 启动成功!
  - `400` 请先初始化!
- `msg` <String\> 请求信息

### 权限列表

**Ios**

无

**Android**

无

### 演示截图

**Ios**

<img src="https://static.yoouu.cn/imgs/2021/pic-go/crisp-ios-screenshot.png" alt="ios-screenshot" style="zoom:50%;" />

**Android**

<img src="https://static.yoouu.cn/imgs/2021/pic-go/crisp-android-screenshot.jpeg" alt="android-screenshot" style="zoom:50%;" />

### 更新日志

#### 1.0.0

**功能（Features）**

- Android 使用的 `sdk` 版本：`crisp-sdk-1.0.7.aar`
- Ios 使用的 `sdk` 版本：`Crisp_1.0.14.zip`

**Bug 修复 （Bug Fixes）**

### 问题反馈

虽然插件已经经过开发者测试和使用，但不排除某些场景下产生问题的可能性，如遇到 `Bug` 可以在评论区留言，或添加 `QQ: 1647800606` 进行反馈。
