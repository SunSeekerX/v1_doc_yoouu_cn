# Solidity

## 📌 学习

### 加密僵尸学习文档

[https://cryptozombies.io/zh/course](https://cryptozombies.io/zh/course)

## 📌 Truffle

开发，测试，部署框架。

可以让你使用外部包，迁移，和测试。

官网：[https://trufflesuite.com/](https://trufflesuite.com/)

中文文档：[https://learnblockchain.cn/docs/truffle/index.html](https://learnblockchain.cn/docs/truffle/index.html)

**安装**

```shell
# 一般是安装不上的😒需要 npm 代理
npm install -g truffle
```

**生成样板项目**

到一个空目录执行

```shell
truffle unbox metacoin
# 或者初始化一个空的项目
truffle init
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

**部署到 Ganache**

```shell
truffle migrate
```

### ethpm 包管理

[ERC190 规范](https://github.com/ethereum/EIPs/issues/190) 下的包管理，但是浏览包的时候出现问题，查看 git 项目，一般的项目都是用的 npm 来分发 sol 库。

官网：[https://www.ethpm.com/](https://www.ethpm.com/)

### Ganache

个人便携式的区块链客户端。可以用来开发测试合约。支持 windows，linux 和 mac。

官网文档：[https://trufflesuite.com/docs/ganache/index.html](https://trufflesuite.com/docs/ganache/index.html)

## 📌 openzeppelin

标准合约库。使用 npm 进行分发。

官网：[https://openzeppelin.com/](https://openzeppelin.com/)

合约库官网：[https://openzeppelin.com/contracts/](https://openzeppelin.com/contracts/)

合约库文档：[https://docs.openzeppelin.com/contracts/4.x/](https://docs.openzeppelin.com/contracts/4.x/)

Github：[https://github.com/OpenZeppelin](https://github.com/OpenZeppelin)

### @openzeppelin/contracts

**知识相关**

- 新手入门：[https://docs.openzeppelin.com/learn/developing-smart-contracts](https://docs.openzeppelin.com/learn/developing-smart-contracts)
- 权限控制：[https://docs.openzeppelin.com/contracts/4.x/access-control](https://docs.openzeppelin.com/contracts/4.x/access-control)
- erc20：[https://docs.openzeppelin.com/contracts/4.x/erc20](https://docs.openzeppelin.com/contracts/4.x/erc20)
- erc721：[https://docs.openzeppelin.com/contracts/4.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
- 公共函数（父合约）：[https://docs.openzeppelin.com/contracts/4.x/utilities](https://docs.openzeppelin.com/contracts/4.x/utilities)

**安装**

需要和 truffle 配合使用

```shell
npm install @openzeppelin/contracts
```

**使用**

直接继承库合约就行

```solidity
// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor() ERC721("MyNFT", "MNFT") {
    }
}
```

## 📌 EIP

### erc20

标准 erc20 接口

```solidity
interface ERC20 {
  function totalSupply() external view returns (uint256);
  function balanceOf(address who) external view returns (uint256);
  function transfer(address to, uint256 value) external returns (bool);
  function allowance(address owner, address spender) external view returns (uint256);
  function transferFrom(address from, address to, uint256 value) external returns (bool);
  function approve(address spender, uint256 value) external returns (bool);

  event Approval(address indexed owner, address indexed spender, uint256 value);
  event Transfer(address indexed from, address indexed to, uint256 value);
}
```
