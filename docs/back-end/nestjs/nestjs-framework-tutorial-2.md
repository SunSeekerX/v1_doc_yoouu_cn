# Nestjs 框架教程（第二篇：入门）

2019-7-3 18:32 PM · [首页](https://keelii.com/)

![Nestjs](https://image.yoouu.cn/sunseekerx/back-end/nestjs/nestjs-logo.png)

## ++教程目录++

> 请注意：本教程结合官方文档内容并添加了许多我自己学习过种中的理解，存在许多个人观点

1. Nestjs 框架教程（第一篇：[简介](/back-end/nestjs/nestjs-framework-tutorial-1/)）
2. Nestjs 框架教程（第二篇：[入门](/back-end/nestjs/nestjs-framework-tutorial-2/)）
3. Nestjs 框架教程（第三篇：[控制器](/back-end/nestjs/nestjs-framework-tutorial-3/)）
4. Nestjs 框架教程（第四篇：[Providers](/back-end/nestjs/nestjs-framework-tutorial-4/)）
5. Nestjs 框架教程（第五篇：[模块](/back-end/nestjs/nestjs-framework-tutorial-5/)）
6. Nestjs 框架教程（第六篇：[中间件](/back-end/nestjs/nestjs-framework-tutorial-6/)）
7. Nestjs 框架教程（第七篇：[异常过滤器](/back-end/nestjs/nestjs-framework-tutorial-7/)）
8. Nestjs 框架教程（第八篇：[管道](/back-end/nestjs/nestjs-framework-tutorial-8/)）
9. Nestjs 框架教程（第九篇：[守卫](/back-end/nestjs/nestjs-framework-tutorial-9/)）
10. Nestjs 框架教程（第十篇：[拦截器](/back-end/nestjs/nestjs-framework-tutorial-10/)）
11. Nestjs 框架教程（第十一篇：自定义装饰器）



------



这篇教程起，你将会学习到 Nest 的几个核心点。为了更好的了解 Nest 应用中的模块，我们将开发一个有基本 CRUD[1](https://keelii.com/2019/07/03/nestjs-framework-tutorial-2/#fn:Create-Read-Upda) 功能的入门级应用。

## 实现语言

Nest 是 TypeScript 写的，所以天生就很好的并且渐进地支持 JavaScript。

## 依赖

保证你的操作系统上安装的 Node.js 版本大于 8.9.0 即可。

## 初始化

就像上节讲到的直接用 nest new project-name 就可以了。我们来回顾下目录结构：

```
src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

分别对应的功能如下表：

| app.controller.ts | 只有一个路由的控制器（controller）示例                  |
| ----------------- | ------------------------------------------------------- |
| app.module.ts     | 应用程序的根模块（root module）                         |
| main.ts           | 应用程序的入口文件，使用 `NestFactory` 方法创建应用实例 |

在 main.ts 中我们可以看到，默认使用了 NestFactory 的 create() 静态方法返回创建的应用对象，此对应会实现 INestApplication 接口。

## 平台

Nest 的目标是一个平台无关的框架。这个意思就是说 Nest 本身并不造某个细分领域的轮子，他只构建一套构架体系，然后把一些好用的库或者平台融合进来。所以 Nest 可以衔接任何 HTTP 框架，默认支持 express 和 fastify 两个 web 框架。

| `platform-express` | **[Express](https://expressjs.com/)** 是一个 Node web 框架，有很多社区成熟的资源。@nestjs/platform-express 默认会被引入，大家都很熟悉了，用起来会容易上手 |
| ------------------ | ------------------------------------------------------------ |
| `platform-fastify` | **[Fastify](https://www.fastify.io/)** 是一个高能低耗的框架，致力于最大化效率与速度 |

无论使用哪个平台，都要暴露自己的应用接口。上面两个平台暴露了对应的两个变量 `NestExpressApplication` and `NestFastifyApplication`。

如下的代码会创建一个 app 对象，并且指定了使用 NestExpressApplication 平台：

```
const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
```

不过一般情况下不需要指定这个类型。

------

1. Create, Read, Update, Delete 通常对应于数据的增删改查功能 [[return\]](https://keelii.com/2019/07/03/nestjs-framework-tutorial-2/#fnref:Create-Read-Upda)



## 原文

> 原文地址：[https://keelii.com/2019/07/03/nestjs-framework-tutorial-2/](https://keelii.com/2019/07/03/nestjs-framework-tutorial-2/) By @keelii
>
> 本系列教程转载以获得作者同意！

