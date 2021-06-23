# JD

> 2021-06-23 14:59:54

## 📌 安装部署

Github：[https://github.com/whyour/qinglong](https://github.com/whyour/qinglong)

> **前置条件**
>
> `Linux`，`Docker`，等等，不然退坑吧，孩子，你把握不住 🤦‍♂️

1. 安装 docker，系统已经有了略过，docker 安装教程百度

2. 检查 docker 是否安装成功，输出信息就成功了

   ```shell
   docker info
   ```

3. 拉取青龙面板镜像

   ```shell
   docker pull whyour/qinglong:latest
   ```

4. 创建容器

   ```shell
   # $pwd 可以换成你想放置的目录
   docker run -dit \
   -v $pwd/ql/config:/ql/config \
   -v $pwd/ql/log:/ql/log \
   -v $pwd/ql/db:/ql/db \
   -p 5700:5700 \
   -e ENABLE_HANGUP=true \
   -e ENABLE_WEB_PANEL=true \
   --name qinglong \
   --hostname qinglong \
   --restart always \
   whyour/qinglong:latest
   ```

5. 开放端口

   这是别人教程拷贝的，不保证一定能用(跟你的系统有关)，青龙用的 `5700` 端口，本地的端口需要打开，如果是宝塔也要检查安全设置，阿里、腾讯云或者其他云服务检查安全组端口是否打开

   ```shell
   firewall-cmd --zone=public --add-port=5700/tcp --permanent
   ```

6. 然后通过 http://ip:5700 访问面板

   ![img](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210603215034.png)

   默认账号：admin 密码：admin

   反回到 shell 输入：

   ```bash
   cat /ql/config/auth.json
   ```

   输出的结果就是实际的密码了

   ```json
   { "username": "admin", "password": "******" }
   ```

   至此，青龙面板就安装完成了！

## 📌 使用教程

### 添加脚本

看下面的脚本仓库，执行了代码访问面板就能看到脚本。

### v2.8

2.8 为了生存。

#### `code_tsukasa.sh`

```shell
###
```

#### `task_before.sh`

```shell
#!/usr/bin/env bash

# 从日志提取互助码，编号和配置文件中Cookie编号完全对应，如果为空就是所有日志中都没有。

# 即使某个MyXxx变量未赋值，也可以将其变量名填在ForOtherXxx中，jtask脚本会自动过滤空值。

# 你选择的互助码模板为：按账号编号优先。

##helpStart
##helpEnd

env_name=(
  FRUITSHARECODES
  PETSHARECODES
  PLANT_BEAN_SHARECODES
  DREAM_FACTORY_SHARE_CODES
  DDFACTORY_SHARECODES
  JDZZ_SHARECODES
  JDJOY_SHARECODES
  JXNC_SHARECODES
  BOOKSHOP_SHARECODES
  JD_CASH_SHARECODES
  JDSGMH_SHARECODES
  JDCFD_SHARECODES
  JDHEALTH_SHARECODES
)
var_name=(
  ForOtherFruit
  ForOtherPet
  ForOtherBean
  ForOtherDreamFactory
  ForOtherJdFactory
  ForOtherJdzz
  ForOtherJoy
  ForOtherJxnc
  ForOtherBookShop
  ForOtherCash
  ForOtherSgmh
  ForOtherCfd
  ForOtherHealth
)

combine_sub() {
    local what_combine=$1
    local combined_all=""
    local tmp1 tmp2
    local envs=$(eval echo "\$JD_COOKIE")
    local array=($(echo $envs | sed 's/&/ /g'))
    local user_sum=${#array[*]}
    for ((i = 1; i <= $user_sum; i++)); do
        local tmp1=$what_combine$i
        local tmp2=${!tmp1}
        combined_all="$combined_all&$tmp2"
    done
    echo $combined_all | perl -pe "{s|^&||; s|^@+||; s|&@|&|g; s|@+&|&|g; s|@+|@|g; s|@+$||}"
}

## 正常依次运行时，组合所有账号的Cookie与互助码
combine_all() {
    for ((i = 0; i < ${#env_name[*]}; i++)); do
        result=$(combine_sub ${var_name[i]})
        if [[ $result ]]; then
            export ${env_name[i]}="$result"
        fi
    done
}

combine_all
```

#### 导入互助码到 `task_before.sh`

1. 在容器内部 `/ql/shell` 新建一个文件 `code_tsukasa.sh` 或者群文件上传到容器内部

   或者使用 docker 复制

   ```shell
   # code_tsukasa.sh 根据你的脚本位置 path 可能不同
   cp code_tsukasa.sh ${你的青龙容器id}:/ql/shell
   ```

2. 修改 `task_before.sh` 为上面的内容，`##helpStart` 和 `##helpEnd` 用来插入助力码

3. 新建一个任务

   名称：提取互助码

   命令：`bash /ql/shell/code_tsukasa.sh`

   定时规则：`30 7 * * *`

4. 添加完成运行一遍，查看下 `task_before.sh` 互助码是否导入成功。

## 📌 脚本仓库

青龙新版本自动加了 `https://ghproxy.com/` 前缀用于拉取脚本，下面的脚本需要在 docker 内执行。

```shell
# 进入容器
docker exec -it ${你容器的id} /bin/bash
```

**【妖火整理】**[https://yaohuo.me/bbs-946732.html](https://yaohuo.me/bbs-946732.html)

```shell
ql repo https://github.com/colakele/jd.git "jd_|getJDCookie" "" "^jd[^_]|USER"
```

**【lxk0301】** [https://github.com/chinnkarahoi/jd_scripts.git](https://github.com/chinnkarahoi/jd_scripts.git)

```shell
ql repo https://github.com/chinnkarahoi/jd_scripts.git "jd_" "activity|backUp" "^jd[^_]|USER"

# docker外部执行备份
docker exec -it qinglong ql repo https://github.com/chinnkarahoi/jd_scripts.git "jd_" "activity|backUp" "^jd[^_]|USER"
```

**【混沌】** [https://github.com/whyour/hundun.git](https://github.com/whyour/hundun.git)

```shell
ql repo https://github.com/whyour/hundun.git "quanx" "tokens|caiyun|didi|donate|fold|Env"

# docker外部执行备份
docker exec -it qinglong ql repo https://github.com/whyour/hundun.git "quanx" "tokens|caiyun|didi|donate|fold|Env"
```

**【passerby-b】（需要修改专用 ck 文件 jddj_cookie.js）** [https://github.com/passerby-b/JDDJ.git](https://github.com/passerby-b/JDDJ.git)

```shell
ql repo https://github.com/passerby-b/JDDJ.git "jddj_" "scf_test_event" "jddj_cookie"

# docker外部执行备份
docker exec -it qinglong ql repo https://github.com/passerby-b/JDDJ.git "jddj_" "scf_test_event" "jddj_cookie"
```

**【柠檬（胖虎）】** [https://github.com/panghu999/panghu.git](https://github.com/panghu999/panghu.git)

```shell
ql repo https://github.com/panghu999/panghu.git "jd_"

# docker外部执行备份
docker exec -it qinglong ql repo https://github.com/panghu999/panghu.git "jd_"
```

**【zoopanda（动物园）】** [https://github.com/zooPanda/zoo.git](https://github.com/zooPanda/zoo.git)

```shell
ql repo https://github.com/zooPanda/zoo.git "zoo"

# docker外部执行备份
docker exec -it qinglong ql repo https://github.com/zooPanda/zoo.git "zoo"
```

**【ddo（hyzaw）】** [https://github.com/hyzaw/scripts.git](https://github.com/hyzaw/scripts.git)

```shell
ql repo https://github.com/hyzaw/scripts.git "ddo_"

# docker外部执行备份
docker exec -it qinglong ql repo https://github.com/hyzaw/scripts.git "ddo_"
```

**【龙猪猪】** [https://github.com/longzhuzhu/nianyu.git](https://github.com/longzhuzhu/nianyu.git)

```shell
ql repo https://github.com/longzhuzhu/nianyu.git "qx" "main"

# docker外部执行备份
docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/longzhuzhu/nianyu.git "qx" "main"
```

**【Ariszy（Zhiyi-N）】** [https://github.com/Ariszy/Private-Script.git](https://github.com/Ariszy/Private-Script.git)

```shell
ql repo https://github.com/Ariszy/Private-Script.git "JD"

# docker 外部执行备份
docker exec -it qinglong ql repo https://github.com/Ariszy/Private-Script.git "JD"
```

**【翻翻乐提现单文件】**

```shell
ql raw https://raw.githubusercontent.com/jiulan/platypus/main/scripts/jd_ffl.js

# docker 外部执行备份
docker exec -it qinglong ql raw https://raw.githubusercontent.com/jiulan/platypus/main/scripts/jd_ffl.js
```

下面的已经失效

---

**【龙珠】**

```shell
docker exec -it qinglong ql repo https://ghproxy.com/https://github.com/nianyuguai/longzhuzhu.git "qx"
```

**【温某某】**

```shell
docker exec -it qinglong ql repo https://github.com/Wenmoux/scripts.git "jd"
```

## 📌 微信推送

推送平台：[pushplus - https://pushplus.plus/](https://pushplus.plus/)

**进入青龙面板-配置文件 加入末尾下面的参数**

```shell
## Push Plus
export PUSH_PLUS_TOKEN=""
export PUSH_PLUS_USER=""
```

PUSH_PLUS_TOKEN 是 https://pushplus.plus/ 注册登录后提供的 Token，必填 PUSH_PLUS_USER 选填，一对一则不填，一对多必填，填入 pushplus 群组编号

## 📌 其他

### 京东账户和微信绑定

![a134f26ecb0f37ba5bf2bfdfc4ebb0b8](https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/12476_1137571a134f26ecb0f37ba5bf2bfdfc4ebb0b8.png)

## 📌 问题集锦

1. 运行 cookie 没有问题，为啥访问主机 ip:5701 无法访问？

   > 运行在虚拟机有这个问题，其他的未知。

2. cookie 面板无法打开，访问 5701 无效。

   直接执行 `./JDC`，可以看到日志。如果是 ok 的。关闭之后再执行 `nohup ./JDC &`。遇到端口冲突，直接杀掉冲突的程序号。linux 怎么杀进程自行百度。

## 📌 交流群

群号：554072417

链接：[https://qm.qq.com/cgi-bin/qm/qr?k=p-PIdWRoqo19bSuYW8xFIagSN2c0PUCB&jump_from=webapi](https://qm.qq.com/cgi-bin/qm/qr?k=p-PIdWRoqo19bSuYW8xFIagSN2c0PUCB&jump_from=webapi)

二维码：<img src="https://sunseekerx-images.oss-cn-shenzhen.aliyuncs.com/2021/pic-go/qinglong/20210607195608.png" alt="image-20210607195606194" style="zoom: 25%;" />

## 📌 备份

[jd-backup](jd-backup.md)

## 📌 来源

[京东挂机 青龙面板的安装与使用以及互助+Cookie 的获取](https://www.feiji.work/2021/185.html) - by [孤岛](https://www.feiji.work/)
