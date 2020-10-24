# Android

## 添加 adb 环境变量

找到你 android sdk 安装的路径，添加 `${sdk}/platform-tools` 到path，例如我的：

```
W:\ProgramFiles\Android\Sdk\platform-tools
```



## Android studio 初始设置

1. 更改所有编码为 `utf-8`
2. 修改 indent 为2

### Logcat 颜色设置

默认所有级别都是 `BBBBBB`，很难区分。

**打开设置搜索 logcat**

找到 Color scheme > Android logcat

| Log级别 | 色值   |
| ------- | ------ |
| ASSERT  | 909399 |
| DEBUG   | 2B85E4 |
| ERROR   | FA3534 |
| INFO    | 19BE6B |
| VERBOSE | 909399 |
| WARN    | FF9900 |

## Android studio 查看 SQLite 数据库

**使用自带的安装模拟器**

创建一个最高 api 的模拟器，屏幕可以选择 480x800 节省资源

设置 `Graphics` 为 `Hardware` 硬件显卡

**运行你的app**

下方 toolbar 会有 一个 Datebase inspector 就可以查看数据库里面的表了。



## Butterknife 注解绑定试图和点击事件

> 1、强大的View绑定和Click事件处理功能，简化代码，提升开发效率
> 2、方便的处理Adapter里的ViewHolder绑定问题
> 3、运行时不会影响APP效率，使用配置方便
> 4、代码清晰，可读性强

[Github - https://github.com/JakeWharton/butterknife](https://github.com/JakeWharton/butterknife)

**Gradle - app**

```groovy
dependencies {
  implementation 'com.jakewharton:butterknife:10.2.3'
  annotationProcessor 'com.jakewharton:butterknife-compiler:10.2.3'
}
```

**buildscript**

```groovy
buildscript {
  repositories {
    mavenCentral()
    google()
  }
  dependencies {
    classpath 'com.jakewharton:butterknife-gradle-plugin:10.2.3'
  }
}
```

**在你项目模块中使用:**

```groovy
apply plugin: 'com.android.library'
apply plugin: 'com.jakewharton.butterknife'
```

**使用 `R2` 代替 `R`**

```groovy
class ExampleActivity extends Activity {
  @BindView(R2.id.user) EditText username;
  @BindView(R2.id.pass) EditText password;
...
}
```



**编辑器插件 - Android ButterKnife Zelezny**



## 区块链钱包

https://www.cnblogs.com/zhaoweiwei/p/address.html - 比特币地址生成算法详解

https://bitcoinj.org/javadoc/0.15.7/ - bitcoinj api doc

https://bitcoinj.org/ - bitcoinj doc

### Base58

> **Base58**是用于Bitcoin中使用的一种独特的编码方式，主要用于产生Bitcoin的钱包地址。相比Base64，Base58不使用数字"0"，字母大写"O"，字母大写"I"，和字母小写"l"，以及"+"和"/"符号。
> 设计Base58主要的目的是：
>
> 1. 避免混淆。在某些字体下，数字0和字母大写O，以及字母大写I和字母小写l会非常相似。
> 2. 不使用"+"和"/"的原因是非字母或数字的字符串作为帐号较难被接受。
> 3. 没有标点符号，通常不会被从中间分行。
> 4. 大部分的软件支持双击选择整个字符串。

不同的应用实现中，base58 最后查询的字母表可能不同，所以没有具体的标准。下面是几个应用中的字母表:

比特币地址:

```
123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
```

Monero 地址

```
123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
```

Ripple 地址

```
rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz
```

Flickr 的短URL

```
123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ
```