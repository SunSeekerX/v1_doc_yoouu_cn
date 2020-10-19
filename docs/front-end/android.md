# Android

## Android studio 查看 SQLite 数据库

使用 **SQLScout** 插件，插件市场下载





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