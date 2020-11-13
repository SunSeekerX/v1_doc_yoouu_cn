shell

custom-build-vue

```shell
#!/bin/sh
###
 # @name:
 # @author: SunSeekerX
 # @Date: 2020-06-29 14:19:04
 # @LastEditors: SunSeekerX
 # @LastEditTime: 2020-06-30 11:26:14
###

# 进入项目目录
cd /root/coding/vue/sunseekerx

echo ">>> 当前工作路径：" $(pwd)

# 拉取新的代码
git pull

# 安装依赖
yarn

# 打包
yarn build

# 进入生成打包文件的目录
cd docs/.vuepress/dist

echo ">>> 当前工作路径：" $(pwd)

# 压缩所有文件
tar -zcvf sunseekerx.tar.gz *

# 复制文件到网站目录
cp sunseekerx.tar.gz /www/wwwroot/sunseekerx.yoouu.cn

# 进入网站目录：cd /www/wwwroot/sunseekerx.yoouu.cn
cd /www/wwwroot/sunseekerx.yoouu.cn

echo ">>> 当前工作路径：" $(pwd)

# 删除：(.htaccess|.user.ini|sunseekerx.tar.gz)之外的文件
find * | grep -v '\(.htaccess\|.user.ini\|sunseekerx.tar.gz\)' | xargs rm -rf

# 解压：sunseekerx.tar.gz
tar -zxvf sunseekerx.tar.gz -C ./

echo "### 移除：sunseekerx.tar.gz：rm -rf sunseekerx.tar.gz"

# 移除：sunseekerx.tar.gz
rm -rf sunseekerx.tar.gz

# 执行成功
echo "### 执行成功"

```

set-nodejs

```shell
#!/bin/bash

###
# @name:
# @author: SunSeekerX
# @Date: 2020-06-29 10:02:52
 # @LastEditors: SunSeekerX
 # @LastEditTime: 2020-06-29 11:01:42
###

function isCmdExist() {
  local cmd="$1"
  if [ -z "$cmd" ]; then
    echo "Usage isCmdExist yourCmd"
    return 1
  fi

  which "$cmd" >/dev/null 2>&1
  if [ $? -eq 0 ]; then
    return 0
  fi

  return 2
}

function checkVarType() {
  local a="$1"
  printf "%d" "$a" &>/dev/null && echo "integer" && return
  printf "%d" "$(echo $a | sed 's/^[+-]\?0\+//')" &>/dev/null && echo "integer" && return
  printf "%f" "$a" &>/dev/null && echo "number" && return
  [ ${#a} -eq 1 ] && echo "char" && return
  echo "string"
}

# 检查npm镜像源
npm_registry=$(npm config get registry)

echo "当前npm镜像源：" $npm_registry

if [ $npm_registry != "http://registry.npm.taobao.org/" ]; then

  echo "设置npm镜像为淘宝源：" $(npm config set registry http://registry.npm.taobao.org/)

  echo "设置npm镜像为淘宝源：完成"

fi

# 检查yarn是否安装
isCmdExist yarn

isYarnExist=$?

if [ $isYarnExist != 0 ]; then
  echo "开始安装 yarn"
  npm i yarn -g
fi

# 检查yarn镜像源
yarn_registry=$(yarn config get registry)

echo "当前yarn镜像源：" $yarn_registry

if [ $yarn_registry != "http://registry.npm.taobao.org/" ]; then

  echo "设置yarn镜像为淘宝源：" $(yarn config set registry http://registry.npm.taobao.org/)

  echo "设置yarn镜像为淘宝源：完成"

fi

# 输出版本
printf "%-10s %-8s\n" "Name" "Version"
printf "%-10s %-8s\n" "NodeJS" `node -v`
printf "%-10s %-8s\n" "npm" `npm -v`
printf "%-10s %-8s\n" "yarn" `yarn -v`


```
