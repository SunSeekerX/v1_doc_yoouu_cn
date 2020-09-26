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

