## vue

### vue 移动端适配

地址：https://juejin.im/post/5c9347405188252db7569a5a

1. 创建项目
2. 使用scss（安装sass-loader，node-sass）
3. 多端样式统一

```javascript
// npm i normalize.css
// 在app.vue中
import 'normalize.css'
```

4. 适配750px设计稿

> 1.首先把安装amfe-flexible，这里使用npm install
>
> ```powershell
> npm i -S amfe-flexible
> ```
>
> 2.在入口文件`main.js`中引入
>
> ```javascript
> import 'amfe-flexible/index.js'
> ```
>
> 3.在根目录的index.html 的头部加入手机端适配的meta代码
>
> ```html
> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
> ```
>
> 4.安装`postcss-pxtorem`是一款 postcss 插件，用于将单位转化为 rem
> ps：前提是ui设计的psd图尺寸大小是750*1334，这样我们在iphone6的模拟机上直接使用所标注的尺寸
>
> ```shell
> npm i postcss-pxtorem --save-dev
> ```
>
> 5.在`package.json`配置
>
> ```json
> "postcss": {
>  "plugins": {
>    "autoprefixer": {
>      "browsers": [
>        "Android >= 4.0",
>        "iOS >= 7"
>      ]
>    },
>    "postcss-pxtorem": {
>      "rootValue": 37.5,
>      "propList": [
>        "*"
>      ]
>    }
>  }
> },
> ```
>
> 或者在`postcss.config.js`中配置（**此文件需要在根目录下新建**）
>
> ```javascript
> const autoprefixer = require('autoprefixer')
> const pxtorem = require('postcss-pxtorem')
> 
> module.exports = ({ file }) => {
> let rootValue
> // vant 37.5 [link](https://github.com/youzan/vant/issues/1181)
> if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
>  rootValue = 37.5
> } else {
>  rootValue = 75
> }
> return {
>  plugins: [
>    autoprefixer(),
>    pxtorem({
>      rootValue: rootValue,
>      propList: ['*'],
>      minPixelValue: 2
>    })
>  ]
> }
> }
> ```
>
> 温馨提示： rootValue这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。假如设计图给的宽度是750，我们通常就会把rootValue设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。（iPhone界面尺寸：320 * 480、640 * 960、640 * 1136、750 * 1334、1080 * 1920等。）
>
> 那为什么你在这里写成了37.5呢？？？
>
> 之所以设为37.5，是为了引用像vant、mint-ui这样的第三方UI框架，因为第三方框架没有兼容rem，用的是px单位，将rootValue的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原vant、mint-ui的组件，否则会样式会有变化，例如按钮会变小。
>
> 既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。
>
> 作者：走啊丶去拯救世界链接：https://juejin.im/post/5c9347405188252db7569a5a来源：掘金著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



## Api接口加密



## 源码加密

我们希望生产环境下的js代码不是源码那么易读，用来隐藏一些特殊信息，



## 网络状态监听

[webpack-obfuscator](https://www.npmjs.com/package/webpack-obfuscator)