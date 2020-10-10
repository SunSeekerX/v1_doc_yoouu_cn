# uni-app

## 业务实现

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
let main = plus.android.runtimeMainActivity();
let pkName = main.getPackageName();
let NotificationManagerCompat = plus.android.importClass("android.support.v4.app.NotificationManagerCompat");  
let packageNames = NotificationManagerCompat.from(main);  
if (!packageNames.areNotificationsEnabled()) {//手机没有开启通知的权限
  let uid = main.getApplicationInfo().plusGetAttribute("uid");
  let Intent = plus.android.importClass('android.content.Intent');
  let Build = plus.android.importClass("android.os.Build");
  //android 8.0引导  
  if (Build.VERSION.SDK_INT >= 26) {
    let intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
    intent.putExtra('android.provider.extra.APP_PACKAGE', pkName);
  } else if (Build.VERSION.SDK_INT >= 21) { //android 5.0-7.0  
    let intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
    intent.putExtra("app_package", pkName);
    intent.putExtra("app_uid", uid);
  } else { //(<21)其他--跳转到该应用管理的详情页
    let Settings = plus.android.importClass("android.provider.Settings");
    let Uri = plus.android.importClass("android.net.Uri");
    let intent = new Intent();
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    let uri = Uri.fromParts("package", main.getPackageName(), null);
    intent.setData(uri);
  }
  // 跳转到该应用的系统通知设置页  
  main.startActivity(intent);
}
// #endif
```



## nvue

### 注意事项

1. 子组件触发父组件的方法，父组件接受方法名不能使用 `-` 连接，否则无法触发

   ```javascript
   // bad
   this.$emit('on-change-sort')
   
   // good
   this.$emit("abc")
   ```

   

## Utils function

```javascript
//api接口
Vue.prototype.api = 'http://127.0.0.1:3000'
// 全局验证手机号码的方法 
Vue.prototype.isPhoneAvailable = function(str) {
    return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str) ? true : false
}
// 去除空格
Vue.prototype.trim = function (str) {
    return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
}
// 加载
Vue.prototype.loading = () => {
    uni.showLoading({title: '加载中...', mask: true});
}
//关闭加载
Vue.prototype.hideLoading = () => {
    uni.hideLoading()
}
//toast
Vue.prototype.toast = (title) => {
    uni.showToast({title, mask: false, duration: 1500, icon: 'none'});
}
```



### About rich-text

```javascript
for (var i = 0; i < data.length; i++) {
    data[i].question_describe = data[i].question_describe.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
}
```

