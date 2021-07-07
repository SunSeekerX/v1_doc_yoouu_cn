# facebook message dev

地址：[https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)

> 账号： limingzh@gmail.com 密码： M$p4yT3#t1

# facebook message

> `facebook`的`message`相当于微信
>
> `Facebook`的`message`相当于微信。在`message`中可以访问你的`Facebook`应用，类似于访问公众号，你可以跟公众号进行对话。`message`收到消息也就是相当于你的公众号收到消息会请求你的服务器（如果你配置了，并且验证过了），然后由你自己的服务器处理用户发过来的信息，通过 message 的发送消息 api，你可以自定义需要发送给用户的消息。相当于你的 Facebook 应用是一个机器人一样。

# 环境变量配置

> `https://frp.yoouu.cn`是内网穿透的线上地址，因为`facebook`的`Webhook`开发需要`https`的公网域名

```shell
# Environment Config

# store your secrets and config variables in here
# only invited collaborators will be able to see your .env values

# 这是是测试数据
PERSONA_BILLING=246078203232783
PERSONA_CARE=1060978614283467
PERSONA_ORDER=199775738141456
PERSONA_SALES=1245670768959958
# Page and Application information
# 页面id和appid，还有页面访问密钥
PAGE_ID=588598124885155
APP_ID=429243661215284
PAGE_ACCESS_TOKEN=EAAGGZARPy5jQBAM6r1QMQCPzHMPBYbDGfvUGVQhJUFVKiyySxvIBpifuDWVaRuJHCOzFiWTLgxddKteT26CxSKAsLzExlzYiMlyZA0lBtiPyTW8pSBoUJCT2Ky55jbYeMVN5RLcR8kVGLjP3qML5Fl8c3ICNoppcyV5R2ZAwOFaTYichZCZCCtRjxmqsZBtJwZD

# app密钥
# Your App secret can be found in App Dashboard -> Seetings -> Basic
APP_SECRET=c4e740f185656aac8bedafe9e9c857c4

# 自定义的验证token
# A random string that is used for the webhook verification request
VERIFY_TOKEN=123123

# URL where you host this code
# You can use LocalTunnel or Heroku ex: https://mystic-wind-83.herokuapp.com
# 你网站的地址，通过这个地址激活message
APP_URL=https://frp.yoouu.cn

# URL of your website where the "shop now" is located
# Can be the same as your app domain URL ex: https://www.originalcoastclothing.com/
# 商店的地址
SHOP_URL=https://frp.yoouu.cn

# nodejs项目运行端口
# Preferred port
PORT=3000

# note: .env is a shell file so there can't be spaces around =
```

# 配置`webhook`

Facebook developer 地址：https://developers.facebook.com/

## 白名单配置

设置>高级设置>安全 里面的`Server IP Whitelist`不要填写 ip，填写了 ip 的意思是仅仅允许填写的 ip 访问。不填写代表所有 ip 均可访问。

## 配置`message Webhooks`地址

配置 message 收到消息请求你自己服务的地址，在应用的产品列表选择`message`下拉找到`Webhooks`,填写你的服务地址。`Verify Token`就是环境变量填写的`VERIFY_TOKEN`

我填写的是

`https://frp.yoouu.cn/webhook`

验证的时候会通过`get`请求这个地址

```javascript
// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {
  // Parse the query params
  // Facebook发过来的参数
  let mode = req.query['hub.mode']
  let token = req.query['hub.verify_token']
  let challenge = req.query['hub.challenge']

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === config.verifyToken) {
      // 校验mode是否为订阅和token是否一致
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED')
      // 发送结果给Facebook，Webhooks地址设置成功
      res.status(200).send(challenge)
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403)
    }
  }
})
```

文档：https://developers.facebook.com/docs/messenger-platform/getting-started/webhook-setup/?translation

# 在 message 中访问应用

地址：https://m.me/{pageid}。例如：https://m.me/588598124885155

pageid 就是环境变量的 pageid
