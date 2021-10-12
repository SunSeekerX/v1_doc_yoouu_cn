## 微软拼音输入自定义时间

Windows 10：`设置`→`时间和语言`→`区域和语言`→`中文(中华人民共和国)`→`选项`→`微软拼音`→`选项`→`词库和自学习`→`添加新的或编辑现有的用户自定义短语`→`添加`。

然后在短语里面输入以下代码：

```
%yyyy%-%MM%-%dd% %HH%:%mm%:%ss% +0800
```

## 右下角时间显示秒

[http://iknow.lenovo.com.cn/detail/dc_173611.html](http://iknow.lenovo.com.cn/detail/dc_173611.html)

## 清除 Dns 缓存

用于更新域名后，访问域名解析到老的 ip 地址。

1：首先清除 Windows 的 dns 缓存。powershell 执行

```powershell
# 清除
ipconfig /flushdns

# 查看
ipconfig /displaydns
```

2：chrome 或 egde 地址栏输入

```
chrome://net-internals/#dns
```

点击 `Clear host cache`

找到 `Sockets`

点击 `Flush socket pools` 刷新试试

## PDF 压缩

[https://zh.pdf24.org/](https://zh.pdf24.org/)

## EDGE 多开

快捷方式添加参数

```
--user-data-dir="D:\edge\user1"
```

## Win11 上恢复 Win10 经典文件资源管理器样式

[https://finance.sina.com.cn/tech/2021-08-05/doc-ikqcfncc1009508.shtml](https://finance.sina.com.cn/tech/2021-08-05/doc-ikqcfncc1009508.shtml)
