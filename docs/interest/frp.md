# Frp

Github：[https://github.com/fatedier/frp](https://github.com/fatedier/frp)

中文文档：[https://gofrp.org/docs/](https://gofrp.org/docs/)

## 下载

目前可以在 Github 的 [Release](https://github.com/fatedier/frp/releases) 页面中下载到最新版本的客户端和服务端二进制文件，所有文件被打包在一个压缩包中。

**服务端**

因为我的公网服务器是 amd64 的所以下载对应的 amd64 包。

**客户端**

我的客户端为 n1 刷了 armbian 5.77 为 arm64 位的架构下载对应的包。

## 部署

解压缩下载的压缩包，将其中的 frpc 拷贝到内网服务所在的机器上，将 frps 拷贝到具有公网 IP 的机器上，放置在任意目录。

**服务端**

我放在 `/root/app/frp_0.37.0_linux_amd64`

**客户端**

我放在 `/root/app/frp_0.37.0_linux_arm64`

## 开始使用

编写配置文件，先通过 `./frps -c ./frps.ini` 启动服务端，再通过 `./frpc -c ./frpc.ini` 启动客户端。如果需要在后台长期运行，建议结合其他工具使用，例如 `systemd` 和 `supervisor`。

如果是 Windows 用户，需要在 cmd 终端中执行命令。

配置文件如何编写可以参考 [示例](https://gofrp.org/docs/examples/) 中的内容。

**服务端**

记得放开使用的端口！！！

`frps.ini`

```ini
[common]
bind_port = 7000
vhost_http_port = 7070
token = khuvvcfctthhhjjkkk

dashboard_port = 7071
```

**客户端**

`frpc.ini`

```ini
[common]
server_addr = x.x.x.x
server_port = 7000
token = khuvvcfctthhhjjkkk

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 2233

[bt-panel]
type = http
local_port = 2233
custom_domains = bt-panel.example.cn

[docker]
type = http
local_port = 9000
custom_domains = docker.example.cn
```

## 开机自启

**服务端**

1. 复制

   ```shell
   cp /root/app/frp_0.37.0_linux_amd64/systemd/frps.service /etc/systemd/system
   ```

2. 进入 `/etc/systemd/system`

   ```shell
   cd /etc/systemd/system
   ```

3. 编辑 `frps.service`

   ```ini
   [Unit]
   Description=Frp Server Service
   After=network.target

   [Service]
   Type=simple
   User=root
   Restart=on-failure
   RestartSec=5s
   ExecStart=/root/app/frp_0.37.0_linux_amd64/frps -c /root/app/frp_0.37.0_linux_amd64/frps.ini

   [Install]
   WantedBy=multi-user.target
   ```

4. 设置权限

   ```shell
   chmod 754 frp*.service
   ```

5. 设置开机启动即可

   ```shell
   systemctl enable frp*.service
   ```

**客户端**

1. ​ 复制

   ```shell
   cp /root/app/frp_0.37.0_linux_arm64/systemd/frpc.service /etc/systemd/system
   ```

2. 进入 `/etc/systemd/system`

   ```shell
   cd /etc/systemd/system
   ```

3. 编辑 `frpc.service`

   ```ini
   [Unit]
   Description=Frp Client Service
   After=network.target
   Wants=network.target

   [Service]
   Type=simple
   User=root
   Restart=always
   RestartSec=5s
   ExecStart=/root/app/frp_0.37.0_linux_arm64/frpc -c /root/app/frp_0.37.0_linux_arm64/frpc.ini
   ExecReload=/root/app/frp_0.37.0_linux_arm64/frpc reload -c /root/app/frp_0.37.0_linux_arm64/frpc.ini
   LimitNOFILE=infinity

   [Install]
   WantedBy=multi-user.target
   ```

4. 设置权限

   ```shell
   chmod 754 frp*.service
   ```

5. 设置开机启动即可

   ```shell
   systemctl enable frp*.service
   ```

**其他命令**

```shell
systemctl daemon-reload
systemctl enable frpc
systemctl status frpc
systemctl enable frps
systemctl status frps
```
