# Solidity

## 📌 学习

### 加密僵尸学习文档

[https://cryptozombies.io/zh/course](https://cryptozombies.io/zh/course)

## 📌 Truffle

[https://learnblockchain.cn/docs/truffle/index.html](https://learnblockchain.cn/docs/truffle/index.html)

**安装**

```shell
# 一般是安装不上的😒需要 npm 代理
npm install -g truffle
```

**生成样板项目**

到一个空目录执行

```shell
truffle unbox metacoin
```

**测试项目**

```shell
truffle test ./test/TestMetacoin.sol
```

**编译合约**

```shell
truffle compile
```

**部署测试**

truffle 自带了一个本地的模拟区块链。可以用来测试

```shell
truffle develop
```

运行上面的命令之后会进入 truffle 的交互式命令行，可以直接输入命令，不需要加 truffle 前缀。

**链接 Ganache**

为了和合约进行交互，我们可以使用 Truffle 的控制台：`truffle console`， Truffle console 和 Truffle Develop 类似，仅仅是他们连接的链不一样而已，这里是连接 Ganache 。

```shell
truffle console
```

### Ganache

个人便携式的区块链客户端。可以用来开发测试合约。支持 windows，linux 和 mac

官网：[https://trufflesuite.com/docs/ganache/index.html](https://trufflesuite.com/docs/ganache/index.html)
