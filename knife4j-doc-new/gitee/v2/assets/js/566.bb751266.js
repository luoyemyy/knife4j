(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{915:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"部署手册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署手册"}},[t._v("#")]),t._v(" 部署手册")]),t._v(" "),s("p",[t._v("knife4j-admin采用前后端分离的方式进行部署")]),t._v(" "),s("p",[t._v("java环境")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@iZbt ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# java -version")]),t._v("\njava version "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.8.0_144"')]),t._v("\nJava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SE Runtime Environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v(".0_144-b01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nJava HotSpot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("-Bit Server VM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25.144")]),t._v("-b01, mixed mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Linux:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@iZbt ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lsb_release -a")]),t._v("\nLSB Version:    :core-4.1-amd64:core-4.1-noarch\nDistributor ID:    CentOS\nDescription:    CentOS Linux release "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.4")]),t._v(".1708 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nRelease:    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.4")]),t._v(".1708\nCodename:    Core\n")])])]),s("h2",{attrs:{id:"安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[t._v("#")]),t._v(" 安装Nginx")]),t._v(" "),s("p",[t._v("服务端必须安装Nginx，具体的安装教程可以自行搜索,这里不再说明.")]),t._v(" "),s("h2",{attrs:{id:"下载最新发行版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载最新发行版"}},[t._v("#")]),t._v(" 下载最新发行版")]),t._v(" "),s("p",[t._v("前往"),s("RouterLink",{attrs:{to:"/knife4j/knife4j-admin-download.html"}},[t._v("发行版地址")]),t._v("进行下载")],1),t._v(" "),s("p",[t._v("发行版一般是以zip压缩包形式进行发布,压缩包中包含jar可运行文件以及一个front的前端文件")]),t._v(" "),s("h2",{attrs:{id:"安装部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[t._v("#")]),t._v(" 安装部署")]),t._v(" "),s("p",[t._v("假设部署路径在服务器的"),s("code",[t._v("/mnt/application/kadmin")]),t._v("目录下")]),t._v(" "),s("p",[t._v("文件的整体结构如下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-kadmin\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----data    //数据目录,可以为空,在部署时该目录必须先手工创建\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----front   //由zip包解压得到\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----logs    //程序的日志目录,在部署时该目录必须先手工创建\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----startup.sh //启动脚本,必须使用chmod+x startup.sh 命令赋予可执行权限\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----knife4j-admin-1.0.jar //由zip包解压得到\n")])])]),s("h3",{attrs:{id:"修改配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[t._v("#")]),t._v(" 修改配置文件")]),t._v(" "),s("p",[t._v("在knife4j-admin程序中,如果你的部署目录不是"),s("code",[t._v("/mnt/application/kadmin")]),t._v("，那么需要修改jar包中的"),s("code",[t._v("application-prod.yml")]),t._v("配置文件")]),t._v(" "),s("p",[s("code",[t._v("application-prod.yml")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端口号")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17808")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听项目目录 ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monitor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mnt/application/kadmin/data \n")])])]),s("p",[t._v("必须修改"),s("code",[t._v("knife4j.monitor")]),t._v("中的监测目录,该目录是可以由开发者自行更改,更改后在替换jar包中的文件即可")]),t._v(" "),s("p",[t._v("当然,程序的端口号开发者也可自行更改")]),t._v(" "),s("h3",{attrs:{id:"启动程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动程序"}},[t._v("#")]),t._v(" 启动程序")]),t._v(" "),s("p",[t._v("knife4j-admin提供的是一个Spring Boot的可执行jar包,因此,"),s("code",[t._v("startup.sh")]),t._v("的可执行文件内容如下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" java -Xms512m -Xmx512m -XX:MetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("256m -XX:MaxMetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("256m -XX:MaxNewSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("256m -jar /mnt/application/kadmin/knife4j-admin-1.0.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("p",[t._v("通过Linux终端执行命令进行启动")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@izbt kadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./startup.sh")]),t._v("\n")])])]),s("h3",{attrs:{id:"配置nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[t._v("#")]),t._v(" 配置Nginx")]),t._v(" "),s("p",[t._v("当我们的后台服务启动好之后,我们还需要配置一个对外的Nginx端口")]),t._v(" "),s("p",[s("code",[t._v("kadmin.conf")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  kadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaominfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后台服务")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17808")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_max_body_size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前端文件")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("txt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("xml"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("swf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("wav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mnt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("kadmin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("此Nginx的配置是目前knife4j提供的测试地址,开发者如果没有域名,可以自行使用端口号等进行配置即可")]),t._v(" "),s("h3",{attrs:{id:"启动nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动nginx"}},[t._v("#")]),t._v(" 启动Nginx")]),t._v(" "),s("p",[t._v("Nginx的环境配置好后,启动Nginx即可")]),t._v(" "),s("p",[t._v("服务启动")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@izbt kadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# service nginx start")]),t._v("\n")])])]),s("p",[t._v("如果Nginx未安装成系统服务,则可以命令行启动")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@izbt kadmin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /usr/local/nginx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@izbt nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sbin/nginx")]),t._v("\n")])])]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);