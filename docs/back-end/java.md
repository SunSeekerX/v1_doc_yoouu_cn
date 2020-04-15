# Server

## Jdk and tomcat

> 下载JDK12默认安装，环境变量path添加安装路径带`bin`，新建环境变量`JAVA_HOME`不带`bin`，命令行`java`和`javac`执行成功，`tomcat`启动成功



## windows tomcat输出乱码

文件路径`conf/logging.properties`

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

