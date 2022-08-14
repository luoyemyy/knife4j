(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{965:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-介绍"}},[t._v("#")]),t._v(" 1.1 介绍")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("温馨提示")]),t._v(" "),s("p",[t._v("1、Knife4jAggregation是基于Servlet体系的Filter拦截技术实现的聚合与HTTP请求转发服务,既能预览也能独立调试")]),t._v(" "),s("p",[t._v("2、不能和Spring Cloud Gateway混合使用(因为Gateway底层是基于Netty构建的)")]),t._v(" "),s("p",[t._v("3、Knife4jAggregation是给Spring Boot的web系统赋能,拥有聚合OpenAPI文档的能力")])]),t._v(" "),s("p",[t._v("Knife4j一直致力于将目前的Ui提供给更多的平台或者别的语言使用而努力，经过这么长时间的发展，Knife4j提供的轻量级聚合中间件终于诞生了，自"),s("code",[t._v("2.0.8")]),t._v("版本开始，Knife4j\n提供了"),s("code",[t._v("knife4j-aggregation-spring-boot-starter")]),t._v("组件，该组件是一个基于Spring Boot系统的starter，他提供了以下几种能力：")]),t._v(" "),s("ul",[s("li",[t._v("最轻量级、最简单、最方便的聚合OpenApi规范的中间件")]),t._v(" "),s("li",[t._v("让所有的基于Spring Boot的Web体系拥有了轻松聚合OpenApi的能力")]),t._v(" "),s("li",[t._v("提供4种模式供开发者选择\n"),s("ul",[s("li",[t._v("基于本地静态JSON文件的方式聚合OpenAPI")]),t._v(" "),s("li",[t._v("基于云端HTTP接口的方式聚合")]),t._v(" "),s("li",[t._v("基于Eureka注册中心的方式聚合")]),t._v(" "),s("li",[t._v("基于Nacos注册中心的方式聚合")])])]),t._v(" "),s("li",[t._v("基于该starter发布了Docker镜像，跨平台与语言让开发者基于此Docker镜像轻松进行聚合OpenAPI规范")]),t._v(" "),s("li",[t._v("完美兼容所有Spring Boot版本，没有兼容性问题")]),t._v(" "),s("li",[t._v("开发者可以彻底放弃基于Zuul、Spring Cloud Gateway等复杂的聚合方式")]),t._v(" "),s("li",[t._v("兼容OpenAPI2规范以及OpenAPI3规范")])]),t._v(" "),s("p",[t._v("基于Spring Boot引入方式")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-aggregation-spring-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--在引用时请在maven中央仓库搜索aggregation最新版本号--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("目前Knife4jAggregation主要提供了四种方式进行OpenAPI文档的聚合，主要包括：")]),t._v(" "),s("ul",[s("li",[t._v("基于OpenAPI的静态JSON文件方式,"),s("RouterLink",{attrs:{to:"/resources/aggregation-disk.html"}},[t._v("Disk模式")])],1),t._v(" "),s("li",[t._v("基于HTTP接口的方式获取OpenAPI,"),s("RouterLink",{attrs:{to:"/resources/aggregation-cloud.html"}},[t._v("Cloud模式")])],1),t._v(" "),s("li",[t._v("基于Eureka注册中心获取OpenAPI,"),s("RouterLink",{attrs:{to:"/resources/aggregation-eureka.html"}},[t._v("Eureka模式")])],1),t._v(" "),s("li",[t._v("基于Nacos注册中心获取OpenAPI,"),s("RouterLink",{attrs:{to:"/resources/aggregation-nacos.html"}},[t._v("Nacos模式")])],1)]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("Disk、Cloud、Eureka、Nacos这四种模式只能使用其中1种，不能混合一起使用(即只能配置这4中模式中的一种属性，然后将其"),s("code",[t._v("enable")]),t._v("属性设置为"),s("code",[t._v("true")]),t._v(",其他三种的enable则必须设置为false)")]),t._v(" "),s("p",[t._v("如果你有混合使用的需求,你应该考虑"),s("RouterLink",{attrs:{to:"/resources/desktop-introduction.html"}},[t._v("Knife4jAggregationDesktop")])],1)]),t._v(" "),s("p",[t._v("在Spring Boot框架中，使用Knife4jAggregation组件，需要在yml或者properties配置文件中进行相关的配置，完整的配置如下：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAggregation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 用户体系\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.0.152"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8999")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /v2/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("group=2.X版本\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swaggerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /abbb/ffe\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10000/eureka/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 订单服务\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("order\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /v2/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("group=default\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swaggerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /order\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nacos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10000/nacos/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 订单服务\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("order\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /v2/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("group=default\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swaggerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /order\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routeAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 用户\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("openapi/user.json\n")])])]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);