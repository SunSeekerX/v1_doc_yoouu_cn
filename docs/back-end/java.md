# Java

## Jdk and tomcat

> 下载JDK12默认安装，环境变量path添加安装路径带`bin`，新建环境变量`JAVA_HOME`不带`bin`，命令行`java`和`javac`执行成功，`tomcat`启动成功

### **环境变量**

JAVA_HOME=`${jdk安装位置}`  例如：C:\Program Files\Java\jdk1.8.0_261

Path添加 `%JAVA_HOME%\bin`

验证成功

```bash
java
javac
```



## IDEA

### 设置编码

设置搜索 `encoding` 全部改成 `UTF-8`

## Maven

### **环境变量**

> 参考：[Maven - Environment Setup](https://www.tutorialspoint.com/maven/maven_environment_setup.htm)

MAVEN_HOME=`${maven安装位置}`  例如：W:\Server\apache-maven-3.6.3

M2_HOME=`${maven安装位置}`  例如：W:\Server\apache-maven-3.6.3

M2=%M2_HOME%\bin

MAVEN_OPTS - `-Xms256m -Xmx512m`

Path添加 `%MAVEN_HOME%\bin`

验证成功

```
 mvn --version
```





### **国内加速**

打开 maven 的配置文件（ windows 机器一般在 maven 安装目录的 **conf/settings.xml** ），在<mirrors></mirrors>标签中添加 mirror 子节点:

```xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

如果想使用其它代理仓库，可在<repositories></repositories>节点中加入对应的仓库使用地址。以使用 spring 代理仓为例：

```xml
<repository>
  <id>spring</id>
  <url>https://maven.aliyun.com/repository/spring</url>
  <releases>
    <enabled>true</enabled>
  </releases>
  <snapshots>
    <enabled>true</enabled>
  </snapshots>
</repository>
```

在你的 **pom.xml** 文件<denpendencies></denpendencies>节点中加入你要引用的文件信息：

```xml
<dependency>
  <groupId>[GROUP_ID]</groupId>
  <artifactId>[ARTIFACT_ID]</artifactId>
  <version>[VERSION]</version>
</dependency>
```

执行拉取命令：

```bash
mvn install
```



### **本地仓库**

setting 节点下新增

```xml
<localRepository>${填写你本地的仓库地址，用来放jar包}</localRepository>
<!--示例-->
<localRepository>W:\Server\apache-maven-3.6.3\repository</localRepository>
```



### **注意事项**

1. IDEA 配置了 maven 项目打开maven 配置可能会恢复为默认的，需要重新设置下。
2. 创建生成的 web.xml 文件 xml 版本可能过低，可能会出现历史遗留问题，最好保持和 tomcat 的 xml 版本一致。可以拷贝 tomcat 的 xml 文件头。



### 常见问题

**Maven 配置问题 - could not find resource mybatis-config.xml**

```xml
<build>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```



## log4j

### properties 参考配置

```properties
#将等级为DEBUG的日志信息输出到console和file这两个目的地，console和file的定义在下面的代码
log4j.rootLogger=DEBUG,console,file

#控制台输出的相关设置
log4j.appender.console = org.apache.log4j.ConsoleAppender
log4j.appender.console.Target = System.out
log4j.appender.console.Threshold=DEBUG
log4j.appender.console.layout = org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=[%c]-%m%n

#文件输出的相关设置
log4j.appender.file = org.apache.log4j.RollingFileAppender
log4j.appender.file.File=./log/kuang.log
log4j.appender.file.MaxFileSize=10mb
log4j.appender.file.Threshold=DEBUG
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=[%p][%d{yy-MM-dd}][%c]%m%n

#日志输出级别
log4j.logger.org.mybatis=DEBUG
log4j.logger.java.sql=DEBUG
log4j.logger.java.sql.Statement=DEBUG
log4j.logger.java.sql.ResultSet=DEBUG
log4j.logger.java.sql.PreparedStatement=DEBUG
```



## windows tomcat输出乱码

文件路径 `conf/logging.properties`

java.util.logging.ConsoleHandler.encoding = GBK



## Tomcat设置项目管理用户

文件路径`conf/tomcat-users.xml`

```xml
<tomcat-users xmlns="http://tomcat.apache.org/xml"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
              version="1.0">
<user username="admin" password="12345678900" roles="manager-gui" />
```



## springboot tomcat 缓存

`org.apache.catalina.webresources.Cache.getResource 无法将位于[/WEB-INF/classes/templates/]的资源添加到Web应用程序[/b]的缓存中，因为在清除过期缓存条目后可用空间仍不足 - 请考虑增加缓存的最大空间。`

`org.apache.catalina.webresources.Cache.getResource Unable to add the resource at [**] to the cache because there was insufficient free space available after evicting expired cache entries - consider increasing the maximum size of the cache`

`${CATALINA_HOME}/conf/context.xml`

```xml
<Context>

    <!-- Default set of monitored resources. If one of these changes, the    -->
    <!-- web application will be reloaded.                                   -->
    <WatchedResource>WEB-INF/web.xml</WatchedResource>
    <WatchedResource>WEB-INF/tomcat-web.xml</WatchedResource>
    <WatchedResource>${catalina.base}/conf/web.xml</WatchedResource>
    <Resources
        cachingAllowed="true"
        cacheMaxSize="100000"
    />

    <!-- Uncomment this to disable session persistence across Tomcat restarts -->
    <!--
    <Manager pathname="" />
    -->
</Context>
```

