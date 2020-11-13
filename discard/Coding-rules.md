# Coding-rules

## 0️⃣ 控制台干净！！！

**保持`Chrome`和`VScode`开发时控制台干净，错误及时处理，console.log()的日志在提交之前需要注释或删除**

## 2️⃣ Naming

### 1. 页面文件和路由`path`名

`src/views/`下页面文件名，用`-`连接，对应路由 path，在浏览器 url 访问应为`-`连接, 示例`order-index.vue`

页面组件导出 name

```javascript
export default {
  name: 'BusinessIndex',
  data: {},
}
```

### 2. 路由`name`名

`src/router/`下路由`name`用大驼峰，示例`OrderIndex`

### 3. 公共组件和页面级组件名

统一大驼峰，示例`TabBar.vue`

### 4. css 的 class 名

css`的`class 名用`-`进行连接

### 5. 其他

2. 依赖包的`css`放在`app/src/main.js`中引入，自建全局`css`在`app/src/app.vue`的`style`中引入
3. 组件命名和路由用`大驼峰式`,页面用`-`连接

## 3️⃣ 错误处理

> 现有阶段将前端可预见的错误分为 3 类
>
> 1. ajax 请求错误
> 2. websocket 请求错误（包括 websocket 状态错误）
> 3. 代码错误
>
> 错误处理
>
> 在 vue 原型对象上有`$handleError`对象提供了 3 个方法，分别对应处理 3 个不同的错误类型。
>
> 增加全局异常处理有助于
>
> - 提高代码健壮性
> - 减少崩溃，减少崩溃，减少崩溃
> - 快速定位 bug
> - ❗ 方便后期接入错误监控平台

简单直白的说像下面这么写，别问为什么，问就是这么写。

### `handleApiRequestException` 用来处理 ajax 请求错误

```javascript
// eg
try {
  const res = await this.$api.Foo.foo([...params])
  // doSomething(res)
} catch (error) {
  // Handle api request exception
  this.$handleError.handleApiRequestException(error)
}

// eg2
await this.$api.Foo.foo([...params])
  .then((res) => {
    // doSomething(res)
  })
  .catch((err) => {
    // Handle api request exception
    this.$handleError.handleApiRequestException(err)
  })
```

### `handleWebSocketException` 用来处理 websocket 错误

```javascript
// WebSocket exception
this.WebSocketObj.onerror = (error) => {
  // Handle WebSocket exception
  this.$handleError.handleWebSocketException(error)
}
```

### `handleApplicationException` 用来处理代码错误

> 函数中可能出现错误的地方都应该处理，例如`JSON.parse`可能会报出
>
> 使用了对象上不存在的属性等等
>
> ```javascript
> VM29079:1 Uncaught SyntaxError: Unexpected token u in JSON at position 0
>     at JSON.parse (<anonymous>)
>     at <anonymous>:1:6
> ```

```javascript
try {
  JSON.parse(undefined)
} catch (err) {
  // Handle application exception
  this.$handleError.handleApplicationException(err)
}
```

## 4️⃣ 如何管理 api

### 原则

首先要制定一个 api 的原则 我的原则一般是这些：

- 干净纯粹
- 尽量不要处理数据
- 独立单一不要互相依赖

### 单独 api 文件

```javascript
/**
 * @name App.js
 * @author SunSeekerX
 * @time 2019-09-27 09:24:27
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-10 15:14:26
 */

import axios from '@/utils/Request/index.js'

export default {
  // app 》 获取app初始化信息
  getConfig: () => {
    return axios.request({
      url: '/user/getConfig',
      method: 'get',
    })
  },
}
```

### 统一导出

```javascript
/**
 * @name Export all v2 apis
 * @author SunSeekerX
 * @time 2019-12-03 15:32:13
 * @LastEditors SunSeekerX
 * @LastEditTime 2019-12-21 12:03:12
 */

import Geetest from './Geetest'
import Account from './Account/index.js'
import Examine from './Examine'
import Advertising from './Advertising'
import Otc from './Otc'
import App from './App'
import Home from './Home'
import Exchange from './Exchange'
import Market from './Market'
import Im from './Im'
import Merchant from './Merchant'
import Common from './Common'

export default {
  Geetest,
  Account,
  Examine,
  Advertising,
  Otc,
  App,
  Home,
  Exchange,
  Market,
  Im,
  Merchant,
  Common,
}
```

### 挂载

```javascript
import Vue from 'vue'
import api from '@/api'

Vue.prototype.$api = api
```

### 使用

```javascript
try {
  const res = await api.App.getConfig()
  // Success
  if (res.success) {
    commit('UPDATE_APP_STATUS', { appStatus: res.obj })
  }
} catch (e) {
  // Handle api request exception
  handleError.handleApiRequestException(e)
}
```

## 💿 资料

[vue 单文件组件规范](https://vue-loader.vuejs.org/zh/spec.html)

[vue 风格指南](https://cn.vuejs.org/v2/style-guide/)

[vue-element-admin 风格指南](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/style-guide.html) ❤️ 建议看一下
