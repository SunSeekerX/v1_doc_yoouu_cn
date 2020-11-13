# Basic

## prettier

代码格式化工具，可以配置在提交之前按照配置文件格式化好代码。保持风格一致。

**安装**

```bash
npm install --save-dev --save-exact prettier
```

**创建配置文件**

```bash
echo {}> .prettierrc.json
```

**创建忽略文件**

文件名：[.prettierignore](https://prettier.io/docs/en/ignore.html)

**格式化**

```bash
npx prettier --write .
```

> npx 可以让你调用你本地安装的包，如果你没安装，npx 会去下载最新的版本。实际推荐本地安装一个锁定版本。
>
> 而且也也更快。

### markdown

