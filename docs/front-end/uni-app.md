# uni-app

## 📌 问题

### 1：无法使用调试？

参考解决：[https://ask.dcloud.net.cn/article/37973](https://ask.dcloud.net.cn/article/37973)

```javascript
const {
  ignoreDefaultArgs = false,
  args = [],
  dumpio = false,
  // 修改这里为你的 chrome 路径
  executablePath = 'C://Program Files//Google//Chrome//Application//chrome.exe',
  pipe = false,
  env = process.env,
  handleSIGINT = true,
  handleSIGTERM = true,
  handleSIGHUP = true,
  ignoreHTTPSErrors = false,
  defaultViewport = { width: 800, height: 600 },
  slowMo = 0,
  timeout = 30000,
} = options
```

### css 文件发布 npm 部分属性不生效？

> 一个 css 文件放在项目下在 app.vue 引入可以使用，发布到 npm 一部分就不能用了，必须放在 main.js 中引入才能全部生效的问题
>
> 不生效的是包含 width: 100% 类似这样的属性

将 `css` 改为 `scss` 即可。应该是编译的时候没走 webpack loader，或者 css loader 之类的处理方式导致的



## 📌 HbuilderX

### prettier 插件设置

```javascript
module.exports = {
  // 行宽 default:80
  printWidth: 120,
  // tab 宽度 default:2
  tabWidth: 2,
  // 使用 tab 键 default:false
  useTabs: false,
  // 语句行末是否添加分号 default:true
  semi: false,
  // 是否使用单引号 default:false
  singleQuote: true,
  // 对象需要引号在加 default:"as-needed"
  quoteProps: 'as-needed',
  // jsx单引号 default:false
  jsxSingleQuote: true,
  // 最后一个对象元素加逗号 default:"es5"
  trailingComma: 'es5',
  // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格 default:true
  bracketSpacing: true,
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。default:false
  jsxBracketSameLine: false,
  // (x) => {} 是否要有小括号 default:"always"
  arrowParens: 'always',
  // default:0
  rangeStart: 0,
  // default:Infinity
  rangeEnd: Infinity,
  // default:false
  insertPragma: false,
  // default:false
  requirePragma: false,
  // 不包装 markdown text default:"preserve"
  proseWrap: 'preserve',
  // HTML空白敏感性 default:"css"
  htmlWhitespaceSensitivity: 'strict',
  // 在 *.vue 文件中 Script 和 Style 标签内的代码是否缩进 default:false
  vueIndentScriptAndStyle: false,
  // 末尾换行符 default:"lf"
  endOfLine: 'auto',
  parsers: {
    ".jsx": "flow",
    ".scss": "scss",
    ".ts": "typescript",
    ".less": "css",
    ".vue": "vue",
    ".nvue": "vue",
    ".ux": "vue",
    ".yml": "yaml",
  }
}
```



## 📌 业务实现

### H5 复制内容到剪贴板

使用 **vue-clipboard2**

```bash
yarn add vue-clipboard2
```

`main.js`

```javascript
// #ifdef H5
import VueClipboard from 'vue-clipboard2'
// #endif

// #ifdef H5
Vue.use(VueClipboard)
// #endif
```

**message** 为复制的内容

```html
<!-- #ifdef H5 -->
<text
  v-clipboard:copy="message"
  v-clipboard:success="onH5CopySuccess"
  v-clipboard:error="onH5CopyError"
>
  复制
</text>
<!-- #endif -->
```

```javascript
onH5CopySuccess(e) {
  this.$util.toast('复制成功')
},
  onH5CopyError(e) {
    this.$util.toast('复制失败')
  },
```

### 安卓设置 App 通知

```javascript
/* 获取当前手机是否有通知权限 */
// #ifdef APP-PLUS
let main = plus.android.runtimeMainActivity()
let pkName = main.getPackageName()
let NotificationManagerCompat = plus.android.importClass(
  'android.support.v4.app.NotificationManagerCompat'
)
let packageNames = NotificationManagerCompat.from(main)
if (!packageNames.areNotificationsEnabled()) {
  //手机没有开启通知的权限
  let uid = main.getApplicationInfo().plusGetAttribute('uid')
  let Intent = plus.android.importClass('android.content.Intent')
  let Build = plus.android.importClass('android.os.Build')
  //android 8.0引导
  if (Build.VERSION.SDK_INT >= 26) {
    let intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS')
    intent.putExtra('android.provider.extra.APP_PACKAGE', pkName)
  } else if (Build.VERSION.SDK_INT >= 21) {
    //android 5.0-7.0
    let intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS')
    intent.putExtra('app_package', pkName)
    intent.putExtra('app_uid', uid)
  } else {
    //(<21)其他--跳转到该应用管理的详情页
    let Settings = plus.android.importClass('android.provider.Settings')
    let Uri = plus.android.importClass('android.net.Uri')
    let intent = new Intent()
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
    let uri = Uri.fromParts('package', main.getPackageName(), null)
    intent.setData(uri)
  }
  // 跳转到该应用的系统通知设置页
  main.startActivity(intent)
}
// #endif
```

## 📌 nvue

### 注意事项

1. 子组件触发父组件的方法，父组件接受方法名不能使用 `-` 连接，否则无法触发

   ```javascript
   // bad
   this.$emit('on-change-sort')
   
   // good
   this.$emit('abc')
   ```

## 📌 uview

1. Cannot read property 'bottom' of null

https://github.com/YanxinNet/uView/issues/239

```
chunk-vendors.js:10121 Uncaught TypeError: Cannot read property 'bottom' of null
```

## 📌 Utils function

```javascript
//api接口
Vue.prototype.api = 'http://127.0.0.1:3000'
// 全局验证手机号码的方法
Vue.prototype.isPhoneAvailable = function (str) {
  return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str) ? true : false
}
// 去除空格
Vue.prototype.trim = function (str) {
  return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '')
}
// 加载
Vue.prototype.loading = () => {
  uni.showLoading({ title: '加载中...', mask: true })
}
//关闭加载
Vue.prototype.hideLoading = () => {
  uni.hideLoading()
}
//toast
Vue.prototype.toast = (title) => {
  uni.showToast({ title, mask: false, duration: 1500, icon: 'none' })
}
```

### About rich-text

```javascript
for (var i = 0; i < data.length; i++) {
  data[i].question_describe = data[i].question_describe.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto"'
  )
}
```
