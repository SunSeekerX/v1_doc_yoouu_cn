# Android

## 0x1 Android 项目视图

### Project 

**.gradle：**   Gradle编译系统，版本由wrapper指定

**.idea：**IDE所需要的文件

**app：**开发项目的所有代码和资源文件

- **app/build：**app模块编译输出的文件

- **app/libs：**  放置引用的类库文件

- **app/src：** 放置应用的主要文件目录

- **app/src/androidTest：**单元测试目录

- **app/src/main：**主要的项目目录和代码

- **app/src/main/assets：**放置原生文件，里面的文件会保留原有格式，文件的读取需要通过流

- **app/src/main/java：**项目的源代码

- app/src/main/res：

  项目的资源

  - **app/src/main/res/anim：**存放动画的XML文件
  - **app/src/main/res/drawable：**存放各种位图文件(.png，.jpg，.9png，.gif等)和drawable类型的XML文件
  - **app/src/main/res/drawable-v24：**存放自定义Drawables类（Android API 24开始，可在XML中使用）
  - **app/src/main/res/layout：**存放布局文件
  - **app/src/main/res/menu：**存放菜单文件
  - **app/src/main/res/mipmap-hdpi：**存放高分辨率图片资源
  - **app/src/main/res/mipmap-mdpi：**存放中等分辨率图片资源
  - **app/src/main/res/mipmap-xdpi：**存放超高分辨率图片资源
  - **app/src/main/res/mipmap-xxdpi：**存放超超分辨率图片资源
  - **app/src/main/res/mipmap-xxxdpi：**存放超超超高分辨率图片资源
  - **app/src/main/res/raw：**存放各种原生资源(音频，视频，一些XML文件等)
  - **app/src/main/res/values：** 存放各种配置资源（颜色，尺寸，样式，字符串等）
  - **app/src/main/res/values/attrs.xml：**自定义控件时用的较多，自定义控件的属性
  - **app/src/main/res/values/arrays.xml：**定义数组资源
  - **app/src/main/res/values/colors.xml：**定义颜色资源
  - **app/src/main/res/values/dimens.xml：**定义尺寸资源
  - **app/src/main/res/values/string.xml：**定义字符串资源
  - **app/src/main/res/values/styles.xml：**定义样式资源
  - **app/src/main/res/values-v11：**在API 11+的设备上调用
  - **app/src/main/res/values-v14：**在API 14+的设备上调用
  - **app/src/main/res/values-v21：**在API 21+的设备上调用

- **app/src/main/res/AndroidManifest.xml：**项目的清单文件（名称、版本、SDK、权限等配置信息）

- **app/src/.gitignore：**忽略的文件或者目录

- **app/app.iml：**app模块的配置文件

- **app/build.gradle：**app模块的gradle编译文件

- **app/proguard-rules.pro：**app模块的代码混淆配置文件

**build：**系统生成的文件目录

**gradle:**  wrapper的jar和配置文件所在的位置

**.gitattributes：**用于设置文件的对比方式

**.gitignore：**  忽略的文件或者目录

**build.gradle：**项目的gradle编译文件

**gradle.properties：**  gradle相关的全局属性设置

**gradlew：**  编译脚本，可以在命令行执行打包

**gradlew.bat：**windows下的gradle wrapper可执行文件

**local.properties：**配置SDK/NDK所在的路径

**MyApplication.iml：**保存该模块的相关信息

**README.md：**文本编辑器，记录一些相关信息

**settings.gradle：**设置相关的gradle脚本

**External Libraries：**项目依赖的库，编译时自动下载



### Android 项目结构

**app/manifests：**APP配置信息目录

**app/java：** 主要为源代码和测试代码目录

**app/res：** 主要是资源目录，存储所有的项目资源

**Gradle Scripts：** gradle编译相关的脚本

### Packages 项目结构

- **app/android：**项目依赖的库
- **app/com：**项目源代码
- **app/Libraries：**项目资源



## 0x2 四大组件

### Activity 

![img](https://image.yoouu.cn/sunseekerx/front-end/android/activity_lifecycle.png)

### Service 

### Broadcast 

### ContentProvider



## ViewModel

文档：[https://developer.android.google.cn/topic/libraries/architecture/viewmodel?hl=zh_cn#java](https://developer.android.google.cn/topic/libraries/architecture/viewmodel?hl=zh_cn#java)

如果系统销毁或重新创建界面控制器，则存储在其中的任何临时性界面相关数据都会丢失。例如，应用的某个 Activity 中可能包含用户列表。因配置更改而重新创建 Activity 后，新 Activity 必须重新提取用户列表。对于简单的数据，Activity 可以使用 `onSaveInstanceState()` 方法从 `onCreate()` 中的捆绑包恢复其数据，但此方法仅适合可以序列化再反序列化的少量数据，而不适合数量可能较大的数据，如用户列表或位图。

### 生命周期

![viewmodel-lifecycle.png](https://developer.android.google.cn/images/topic/libraries/architecture/viewmodel-lifecycle.png?hl=zh_cn)

您通常在系统首次调用 Activity 对象的 `onCreate()` 方法时请求 [`ViewModel`](https://developer.android.google.cn/reference/androidx/lifecycle/ViewModel?hl=zh_cn)。系统可能会在 Activity 的整个生命周期内多次调用 `onCreate()`，如在旋转设备屏幕时。[`ViewModel`](https://developer.android.google.cn/reference/androidx/lifecycle/ViewModel?hl=zh_cn) 存在的时间范围是从您首次请求 [`ViewModel`](https://developer.android.google.cn/reference/androidx/lifecycle/ViewModel?hl=zh_cn) 直到 Activity 完成并销毁。



### SavedState

当 activity 在后台，如果内存不足，activity 会被系统杀掉，甚至 onDestroy 也不会被调用。 ViewModel 的数据也就丢失了。

![viewmodel_savedstate.png](https://image.yoouu.cn/sunseekerx/front-end/android/viewmodel_savedstate.png)



### ViewModel + SavedState 生命周期

![viewmode_savedstate_lifecycle.png](https://image.yoouu.cn/sunseekerx/front-end/android/viewmode_savedstate_lifecycle.png)



## LiveData

### mvc

![livedata_mvc.png](https://image.yoouu.cn/sunseekerx/front-end/android/livedata_mvc.png)



### mvvm

![livedata_mvvm.png](https://image.yoouu.cn/sunseekerx/front-end/android/livedata_mvvm.png)



### DataBinding

View 跟 Controller 解耦，只需要控制数据，ViewModel 发生变化 ViewGroup 会自动更新（有点像 Vue）。DataBinding 是绑定试图到 Controller。

![databinding.png](https://image.yoouu.cn/sunseekerx/front-end/android/databinding.png)



## DataBinding

编译环境

要开始使用数据绑定，请从 Android SDK 管理器中的**支持代码库**下载该库。有关详情，请参阅[更新 IDE 和 SDK 工具](https://developer.android.google.cn/studio/intro/update?hl=zh_cn)。

要将应用配置为使用数据绑定，请在应用模块的 `build.gradle` 文件中添加 `dataBinding` 元素，如以下示例所示：

```groovy
android {
        ...
        dataBinding {
            enabled = true
        }
    }
    
```



## ViewBinding



## 注意事项

1. 如果需要获取 activity 的上下文，不能直接传递 `this`，因为上下文会频繁的销毁和重建，如果传递会造成内存泄漏。可以使用 `getApplicationContext()` 方法传递上下文实例。（可以理解为指向 App 的顶级引用，单例模式，只要应用存在，就会有一个实例）

## 0x3 添加 adb 环境变量

找到你 android sdk 安装的路径，添加 `${sdk}/platform-tools` 到path，例如我的：

```
W:\ProgramFiles\Android\Sdk\platform-tools
```



## 0x4 Android studio 初始设置

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



### 控制台乱码

实际上是调用 java 的 grade 编译输出中文乱码。需要设置虚拟机的 `-Dfile.encoding=UTF-8` 就行了。

**操作步骤**

Help > Edit custom VM options > 添加就行



## 0x5 Android studio 查看 SQLite 数据库

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