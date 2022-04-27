## kotlin 简介

> **Kotlin**是一种在[Java 虚拟机](https://zh.wikipedia.org/wiki/Java虛擬機)上执行的[静态类型](https://zh.wikipedia.org/wiki/静态类型)[编程语言](https://zh.wikipedia.org/wiki/编程语言)，它也可以被编译成为[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)源代码。它主要是由[俄罗斯](https://zh.wikipedia.org/wiki/俄羅斯)[圣彼得堡](https://zh.wikipedia.org/wiki/聖彼得堡)的[JetBrains](https://zh.wikipedia.org/wiki/JetBrains)开发团队所发展出来的编程语言，其名称来自于圣彼得堡附近的[科特林岛](https://zh.wikipedia.org/wiki/科特林島)。[[1\]](https://zh.wikipedia.org/wiki/Kotlin#cite_note-oracle_interview-1)2012年1月，著名期刊《[Dr. Dobb's Journal](https://zh.wikipedia.org/w/index.php?title=Dr._Dobb's_Journal&action=edit&redlink=1)》中Kotlin被认定为该月的最佳语言。[[2\]](https://zh.wikipedia.org/wiki/Kotlin#cite_note-dobbs-2)虽然与Java语法并不兼容，但在[JVM](https://zh.wikipedia.org/wiki/JVM)环境中Kotlin被设计成可以和Java代码相互运作，并可以重复使用如[Java集合框架](https://zh.wikipedia.org/wiki/Java集合框架)等的现有[Java引用的函数库](https://zh.wikipedia.org/w/index.php?title=Java引用的函数库&action=edit&redlink=1)。Hathibelagal写道，“如果你正在为Android开发寻找一种替代编程语言，那么应该试下Kotlin。它很容易在Android项目中替代Java或者同Java一起使用。”
>
> Kotlin 是一种在 Java 虚拟机上运行的静态类型编程语言，被称之为 Android 世界的 Swift，由 JetBrains 设计开发并开源。
>
> Kotlin 可以编译成 Java 字节码，也可以编译成 JavaScript，方便在没有 JVM 的设备上运行。
>
> 在 Google I/O 2017 中，Google 宣布 Kotlin 成为 Android 官方开发语言。

## 定义变量

var

var 是一个可变变量，这是一个可以通过重新分配来更改为另一个值的变量。这种声明变量的方式和 Java 中声明变量的方式一样

val

val 是一个只读变量，这种声明变量的方式相当于 java 中的 final 变量。一个 val 创建的时候必须初始化，因为以后不能被改变

## 特别语法

### lateinit 和 by lazy

lateinit 和 lazy 是 Kotlin 中的两种不同的延迟初始化的实现，

by lazy 只能用在 val 声明的变量上，为什么上面代码也解释了，并且是线程安全的。
