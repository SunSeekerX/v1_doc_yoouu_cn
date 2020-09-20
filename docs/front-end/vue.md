# vue

## i18n 语言标识

```
简体中文(中国)        zh_CN
繁体中文(台湾地区)     zh_TW
繁体中文(香港)        zh_HK
英语(香港)            en_HK
英语(美国)            en_US
英语(英国)            en_GB
英语(全球)    en_WW
英语(加拿大)    en_CA
英语(澳大利亚)    en_AU
英语(爱尔兰)    en_IE
英语(芬兰)    en_FI
芬兰语(芬兰)    fi_FI
英语(丹麦)    en_DK
丹麦语(丹麦)    da_DK
英语(以色列)    en_IL
希伯来语(以色列)    he_IL
英语(南非)    en_ZA
英语(印度)    en_IN
英语(挪威)    en_NO
英语(新加坡)    en_SG
英语(新西兰)    en_NZ
英语(印度尼西亚)    en_ID
英语(菲律宾)    en_PH
英语(泰国)    en_TH
英语(马来西亚)    en_MY
英语(阿拉伯)    en_XA
韩文(韩国)    ko_KR
日语(日本)    ja_JP
荷兰语(荷兰)    nl_NL
荷兰语(比利时)    nl_BE
葡萄牙语(葡萄牙)    pt_PT
葡萄牙语(巴西)    pt_BR
法语(法国)    fr_FR
法语(卢森堡)    fr_LU
法语(瑞士)    fr_CH
法语(比利时)    fr_BE
法语(加拿大)    fr_CA
西班牙语(拉丁美洲)    es_LA
西班牙语(西班牙)    es_ES
西班牙语(阿根廷)    es_AR
西班牙语(美国)    es_US
西班牙语(墨西哥)    es_MX
西班牙语(哥伦比亚)    es_CO
西班牙语(波多黎各)    es_PR
德语(德国)    de_DE
德语(奥地利)    de_AT
德语(瑞士)    de_CH
俄语(俄罗斯)    ru_RU
意大利语(意大利)    it_IT
希腊语(希腊)    el_GR
挪威语(挪威)    no_NO
匈牙利语(匈牙利)    hu_HU
土耳其语(土耳其)    tr_TR
捷克语(捷克共和国)    cs_CZ
斯洛文尼亚语    sl_SL
波兰语(波兰)    pl_PL
瑞典语(瑞典)    sv_SE
西班牙语 (智利)    es_CL
```

## vue 移动端适配

> 作者：走啊丶去拯救世界
>
> [https://juejin.im/post/5c9347405188252db7569a5a](https://juejin.im/post/5c9347405188252db7569a5a)

1.首先把安装amfe-flexible

```bash
yarn add amfe-flexible
```

2.在入口文件`main.js`中引入

```javascript
import 'amfe-flexible/index.js'
```

3.在根目录的index.html 的头部加入手机端适配的meta代码

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

4.安装`postcss-pxtorem`是一款 postcss 插件，用于将单位转化为 rem
 ps：前提是ui设计的psd图尺寸大小是750*1334，这样我们在iphone6的模拟机上直接使用所标注的尺寸

```bash
yarn add postcss-pxtorem -D
```

5.在`package.json`配置

```json
  "postcss": {
    "plugins": {
      "autoprefixer": {
        "browsers": [
          "Android >= 4.0",
          "iOS >= 7"
        ]
      },
      "postcss-pxtorem": {
        "rootValue": 37.5,
        "propList": [
          "*"
        ]
      }
    }
  },
```

或者在`postcss.config.js`中配置（**此文件需要在根目录下新建**）

```javascript
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = ({ file }) => {
  let rootValue
  // vant 37.5 [link](https://github.com/youzan/vant/issues/1181)
  if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    rootValue = 37.5
  } else {
    rootValue = 75
  }
  return {
    plugins: [
      autoprefixer(),
      pxtorem({
        rootValue: rootValue,
        propList: ['*'],
        minPixelValue: 2
      })
    ]
  }
}
```

温馨提示： rootValue这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。假如设计图给的宽度是750，我们通常就会把rootValue设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。（iPhone界面尺寸：320 * 480、640 * 960、640 * 1136、750 * 1334、1080 * 1920等。）

那为什么你在这里写成了37.5呢？？？

之所以设为37.5，是为了引用像vant、mint-ui这样的第三方UI框架，因为第三方框架没有兼容rem，用的是px单位，将rootValue的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原vant、mint-ui的组件，否则会样式会有变化，例如按钮会变小。

既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。




## 路由权限管理

`${app}/src/router/index.js`

```javascript
export default new Router({
  routes: [
    {
      path: '/',
      hidden: true,
      redirect: '/home',
    },
    // 首页
    {
      path: '/home',
      name: 'HomeIndex',
      component: () => import('@/views/home/index'),
      meta: {
        isPublic: true,
      },
    },
  ],
})
```

在路由的元信息对象上加上`isPublic`参数代表该页面不需要验证即可访问



`${app}/src/utils/permission.js`

```javascript

router.beforeEach(async (to, from, next) => {
  // Permission
  if (store.state.token) {
    // Has login
    next()
  } else {
    // 判断是否是公开页面
    if (to.meta.isPublic) {
      next()
    } else {
      // Redirect to login
      next('/user/user-login')
    }
  }
})
```

在路由守卫进行判断拦截，如果登录用户直接放行，未登录用户如果访问公开页面直接放行，否则拦截跳转到登录页面。



## Api接口加密

待定

## 源码加密

我们希望生产环境下的js代码不是源码那么易读，用来隐藏一些特殊信息，

[webpack-obfuscator](https://www.npmjs.com/package/webpack-obfuscator)

待定



## 网络状态监听

待定



## ❔常见问题

### `node-sass`安装较慢怎么解决？

> 安装依赖之前确保你安装了`yarn`
>
> ```bash
> npm i yarn -g
> ```
>
> 更换`yarn`下载的依赖源
>
> ```bash
> # yarn
> # 1、查看一下当前源
> yarn config get registry
> # 2、切换为淘宝源
> yarn config set registry https://registry.npm.taobao.org
> # 3、或者切换为自带的
> yarn config set registry https://registry.yarnpkg.com
> ```



在最新的`vue-cli`项目中可以直接替换为`sass`即可解决

**0x1** 删除`${app}/package.json` 文件中的`devDependencies`里面的`node-sass`依赖

**0x2** 安装依赖，项目根目录下执行

```bash
yarn
```

**0x3** 安装`sass`

```bash
yarn add sass -D
```

**0x4** 启动项目



> 有些像 Sass 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 或 `::v-deep` 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作。

ps：如果发现`/deep/`不能用换成`::v-deep`就行了