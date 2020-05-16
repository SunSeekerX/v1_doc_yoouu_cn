# redis

## windows - redis设置密码

> 下载地址：[Redis on Windows](https://github.com/microsoftarchive/redis)

下载msi的安装包安装完成之后会自动注册服务，并且自动运行启动。

到下面目录找到`# requirepass foobared`这一行，在下面新建一行写上你的密码。

`C:\Program Files\Redis\redis.windows-service.conf`

```nginx
# requirepass foobared
requirepass 你的密码
```

任务管理器>服务>按名称排序找到redis>重启服务就行了
