# uni-app

## 通用

1. 使用 `@tap` 代替 `vue`的 `@click`，为了解决移动端 `300ms` 延迟问题。

2. 为了兼容屏幕大小，宽度应该使用 `rpx`，高度、字体大小、边框、应使用 `px` 开发的时候应该具体分析，`rpx` 会在不同的屏幕尺寸缩放，要考虑元素是否需要缩放。

   > 写完应该切换不同的屏幕分辨率查看，做到 iPad 和手机都能兼容。

3. 路由跳转 `url` 链接需要用 `/` 开始，而不是 `pages.json` 内定义的 `pages/auth/login/login` 类似这种路径开始。

## 微信

1. 在组件元素用 `v-show` 在微信小程序无效果

2. 微信小程序样式错位问题，加上下面的 css

   ```css
   view,
   text {
     box-sizing: border-box;
     flex-direction: row;
   }
   ```

3. 微信小程序在模板内无法使用全局封装的路由跳转方法跳转，uni-app 的 bug。需要在页面 methods 中定义方法调用全局。

   ```javascript
   export default {
     methods: {
       /**
        * @name 页面跳转，小程序无法在模板内访问$util对象，实际应该是模板内的this并不指向vue组件
        * @param {Object} url 页面url
        */
       navigateTo(url) {
         this.$util.router({
           url,
         })
       },
     },
   }
   ```

## 安卓

1. 在安卓端不使用依赖库无法处理类似 `2020-06-16T09:14:59.000+0000` 的时间格式。

   > 接口统一为时间戳
