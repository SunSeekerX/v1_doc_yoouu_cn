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

## 📌 hardhat

另外的开发框架。

官网：[https://hardhat.org/](https://hardhat.org/)

### 1. 安装

```shell
npm install --save-dev hardhat
```

### 2. 生成配置文件

选择 `Create an empty hardhat.config.js`

```shell
npx hardhat
```

**编译合约代码**

以太坊虚拟机 (EVM) 不能直接执行 Solidity 代码：我们首先需要将其编译为 EVM 字节码。

```shell
npx hardhat compile
```

可以在 `hardhat.config` 配置编译器版本

```javascript
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
}
```

### 3. 部署测试准备

hardhat 自带了一个本地测试网络,每次启动都会创建一个新的本地区块节点。

```shell
npx hardhat node
```

**安装需要用到的依赖**

```shell
npm install --save-dev @nomiclabs/hardhat-ethers ethers
```

**添加插件到 `hardhat.config.js`**

```javascript
// hardhat.config.js
require('@nomiclabs/hardhat-ethers');
...
module.exports = {
...
};
```

**新建部署脚本**

`scripts\deploy.js`

```javascript
// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory('Box')
  console.log('Deploying Box...')
  const box = await Box.deploy()
  await box.deployed()
  console.log('Box deployed to:', box.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```

### 4. 部署

注意需要在另外的命令行面板启动一个本地界面才能进行部署测试！

```shell
npx hardhat run --network localhost scripts/deploy.js
```

### 5. 测试交互 - 控制台

```shell
npx hardhat console --network localhost
```

执行以上命令行就进入了 `nodejs` 的命令交互面板

获取需要操作的合约对象

```javascript
const Box = await ethers.getContractFactory('Box')
const box = await Box.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3')
```

**发送交易**

> `Box`的第一个函数，`store`接收一个整数值并将其存储在合约存储中。因为这个函数*修改*了区块链状态，所以我们需要向合约*发送一个交易*来执行它。
>
> 我们将发送一个交易来调用`store`带有数值的函数：

```javascript
await box.store(42)
/*
{
  hash: '0x3d86c5c2c8a9f31bedb5859efa22d2d39a5ea049255628727207bc2856cce0d3',
...
*/
```

**查询状态**

> `Box`的另一个函数被调用`retrieve`，它返回存储在合约中的整数值。这是区块链状态的*查询*，所以我们不需要发送交易：

```javascript
await box.retrieve()
// BigNumber { _hex: '0x2a', _isBigNumber: true }
```

> 因为查询只读取状态而不发送事务，所以没有要报告的事务哈希。这也意味着使用查询不需要任何以太币，并且可以在任何网络上免费使用。
>
> 我们的`Box`合约返回`uint256`的数字对于 JavaScript 来说太大了，所以我们返回的是一个大数字对象。我们可以使用 将大数显示为字符串`(await box.retrieve()).toString()`。

```javascript
;(await box.retrieve()).toString()
// '42'
```

### 6. 测试交互 - 编程

新建一个 `scripts/index.js` 文件，里面写上需要测试的代码

我们的代码都写入到 `main` 函数内

`scripts/index.js`

```javascript
// scripts/index.js
async function main() {
  // 我们的代码写到这里
  // 获取本地节点启动的账户
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```

**运行测试**

使用 `hardhat` 运行脚本会注入一些全局变量，例如 `ethers`

```shell
npx hardhat run --network localhost ./scripts/index.js
```

**获取合约实例**

> 为了与[`Box`](https://docs.openzeppelin.com/learn/deploying-and-interacting#box-contract)我们部署的合约进行交互，我们将使用一个[ethers 合约实例](https://docs.ethers.io/v5/api/contract/contract/)。
>
> ethers 合约实例是一个 JavaScript 对象，它代表我们在区块链上的合约，我们可以使用它来与我们的合约进行交互。要将其附加到我们部署的合约中，我们需要提供合约地址。

```javascript
// 这里替换为控制台部署输出的合约地址
const address = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
const Box = await ethers.getContractFactory('Box')
const box = await Box.attach(address)

// 获取盒子里的值
const value1 = await box.retrieve()
console.log('Box value is', value1.toString())

// 存入一个新的值
await box.store(23)

// 获取存入的值
const value2 = await box.retrieve()
console.log('Box value is', value2.toString())
```

### 7. 编写单元测试

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
