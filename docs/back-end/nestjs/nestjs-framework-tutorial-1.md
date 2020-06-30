# Nestjs 框架教程（第一篇：简介）

2019-7-3 18:31 PM · [首页](https://keelii.com/)

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



Nest 是一个用于构建高效、可扩展的 Node.js 服务端应用框架，基于 TypeScript 编写并且结合了 OOP[1](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fn:Object-Oriented)、FP[2](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fn:Functional-Progr)、FRP[3](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fn:Functional-React) 的相关理念。并且设计上很多灵感来自于 Angular[4](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fn:Angular-is-a-pla)。

Angular 的很多模式又来自于 Java 中的 Spring 框架，依赖注入、面向切面编程等，所以你可以认为： **Nest 是 Node.js 版的 Spring 框架**。

或许很多前端工程师看到这里就自动劝退了，事实上我以前也挺讨厌 Java 的（现在也不怎么喜欢），后来由于工作原因学习到了一些 Java 相关的知识后才发现自己的认识很片面。现在 WEB 后端主流的技术栈都基于 Spring 框架，框架必然是解决了很多实际问题，能学习到它的思想比它自己的出身、派系更重要。同时建议那些没有学习或者接触过 Java 的前端可以了解一些相关概念，不要拒绝，因为这可能会为你打开另一扇门。

可能在很多伪 FP 爱好者来看 OOP 是臃肿无用的东西。但是从使用角度讲：**FP 小而美，OOP 大而全**，如果不关注场景去讨论好坏没有任何意义。而且事实上这两者完全是不冲突的，可以结合得非常完美。不要被那些所谓的**纯**函数、**纯**面向对象的概念误导，能写出真正的好代码才是重要的。

如果你以前在使用 Node.js 开发后端应用时常常不知道如何规划代码关系，搞不清楚控制器、服务、模型和数据的关系，或者是你打算使用 Node.js 构建大型应用，那就建议你了解一下 Nest。

### 框架的哲学

在开始体验前，有必要简单介绍下 Nest 框架的的设计理念，我结合我自己的理解大概梳理下。

> 近几年由于 Node.js 的出现，JavaScript 成为了前端和后端的「lingua franca[5](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fn:-)」，前端方面出现了 Angular, React, Vue 等众多的 UI 框架，后端方面也有像 Express, Koa 这样优秀的框架出现，但这些框架都没有高效地解决一个核心问题 — **架构**

官方的这段介绍和我看到的非常一致，注意作者说是**高效地**解决，我的理解是现在 Node.js 或者说 JavaScript 框架都是各做各的，都是些点，可能确实有做的很不错的，但是整体而言并没有一个把各种好东西串链起来做成一种通用模式的框架，或者说是架构。

这个问题主要有三方面原因：其一，现在大多前端工程师的工作范围还是局限于前端 UI 层，或者说视图层，后端一般都由更加成熟的一技术栈来实现；其二，Node.js 诞生于 2009 年，相比于 2002 就发第一版的 Spring 差的很远；其三，Node.js 实际上就是 JavaScript，这门语言本身也有很多缺陷，以至于无法胜任大型应用的架构场景。

虽然有这些问题但是我始终认为 Nest 是个很好的开端，或者说对于所谓的「全栈」工程师来讲是个好事。因为我认为在大型项目中构架层面的复用比代码层面的复用更重要。

## 安装

安装 Nest 最方便的方法就是使用它额外提供的一个 CLI 工具（需要安装 Node.js > 8.9 版本），使用下面的命令它可以帮你自己生成项目的目录结构和预定义的最小模块：

```
npm i -g @nestjs/cli
nest new project-name
```

执行后命令行可以看见它自动生成的文件：

```
➜  github.com nest new project-name
⚡  We will scaffold your app in a few seconds..

CREATE /project-name/.prettierrc (51 bytes)
CREATE /project-name/README.md (3370 bytes)
CREATE /project-name/nest-cli.json (84 bytes)
CREATE /project-name/nodemon-debug.json (163 bytes)
CREATE /project-name/nodemon.json (67 bytes)
CREATE /project-name/package.json (1808 bytes)
CREATE /project-name/tsconfig.build.json (97 bytes)
CREATE /project-name/tsconfig.json (325 bytes)
CREATE /project-name/tslint.json (426 bytes)
CREATE /project-name/src/app.controller.spec.ts (617 bytes)
CREATE /project-name/src/app.controller.ts (274 bytes)
CREATE /project-name/src/app.module.ts (249 bytes)
CREATE /project-name/src/app.service.ts (142 bytes)
CREATE /project-name/src/main.ts (208 bytes)
CREATE /project-name/test/app.e2e-spec.ts (561 bytes)
CREATE /project-name/test/jest-e2e.json (183 bytes)

? Which package manager would you ❤️  to use? yarn
▹▸▹▹▹ Installation in progress... ☕
🚀  Successfully created project project-name
👉  Get started with the following commands:

$ cd project-name
$ yarn run start
```

这时可以按提示，进入到 `project-name` 运行项目。如果看到下面的输出就表示成功了：

```
➜  github.com cd project-name
➜  project-name git:(master) ✗ yarn run start
yarn run v1.10.1
$ ts-node -r tsconfig-paths/register src/main.ts
[Nest] 26470   - 2019/06/30 下午8:58   [NestFactory] Starting Nest application...
[Nest] 26470   - 2019/06/30 下午8:58   [InstanceLoader] AppModule dependencies initialized +11ms
[Nest] 26470   - 2019/06/30 下午8:58   [RoutesResolver] AppController {/}: +5ms
[Nest] 26470   - 2019/06/30 下午8:58   [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 26470   - 2019/06/30 下午8:58   [NestApplication] Nest application successfully started +3ms
```

然后我们访问 `http://localhost:3000` 就可以看到 `Hello World!` 了。用编辑器打开目录结构如下图所示

![img](https://image.yoouu.cn/sunseekerx/back-end/nestjs/5d18b3033825c45837.png)

自动生成的配置文件还是挺多的，我们现在暂不用关注这些，只需要知道大概是做什么的就行了。

从上面的命令行中可以看出来整个项目是用 ts-node 跑起来的，这样的目的就是在开发环境节去了编译 .ts 的过程（实际上是 ts-node 在背后做了这个事情）。我们只需要关注 `src/main.ts` 这个入口文件即可。

整个 main.ts 文件就 8 行代码，使用 Nest 的工厂函数创建了一个应用实例，并且监听 3000 端口。注意，Nest 默认会使用 ES 的 async/await 语法，所以你再也不用怕嵌套回调函数了，以同步的编码方式获取异步的效率。

------

1. Object Oriented Programming — 面向对象的编程 [[return\]](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fnref:Object-Oriented)
2. Functional Programming — 函数式的编程 [[return\]](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fnref:Functional-Progr)
3. Functional Reactive Programming — 函数式响应工式编程 [[return\]](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fnref:Functional-React)
4. Angular is a platform for building mobile and desktop web applications. [[return\]](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fnref:Angular-is-a-pla)
5. 一种术语，表示通用语言 [[return\]](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/#fnref:-)



## 原文

> 原文地址：[https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/](https://keelii.com/2019/07/03/nestjs-framework-tutorial-1/) By @keelii
>
> 本系列教程转载以获得作者同意！