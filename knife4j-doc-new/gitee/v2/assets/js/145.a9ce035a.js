(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{516:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"access-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-control"}},[t._v("#")]),t._v(" Access control")]),t._v(" "),s("p",[t._v("n developing "),s("code",[t._v("SwaggerBootstrapUi")]),t._v(" function, with many developers often discuss the problem is that in a production environment, block or remove Swagger document very troublesome")]),t._v(" "),s("p",[t._v(",Usually we have the following problems：")]),t._v(" "),s("ul",[s("li",[t._v("When a system deploys a production environment, we want to shield Swagger's documentation capabilities, whether they are interface or HTML documents")]),t._v(" "),s("li",[t._v("Usually we sometimes need production environment deployment, but Swagger document debugging function to assist developers debugging, but there are security concerns, there is no filtering of the Swagger resource interface")]),t._v(" "),s("li",[t._v("etc.")])]),t._v(" "),s("p",[t._v("In view of the above two situations, SwaggerBootstrapUi in version 1.9.0 joined the Filter function of the Filter, if the developer use SpringBoot development framework for development, only in "),s("code",[t._v("application. The properties")]),t._v(" or "),s("code",[t._v("application. Yml")]),t._v(" configuration file configuration properties can be convenient to solve the above problems, don't delete Springfox - swagger jar packages or delete the related code complex operations, development experience of ascension.")]),t._v(" "),s("h2",{attrs:{id:"enable-the-production-environment-to-shield-swagger-all-resource-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-the-production-environment-to-shield-swagger-all-resource-interfaces"}},[t._v("#")]),t._v(" Enable the production environment to shield Swagger all resource interfaces")]),t._v(" "),s("p",[t._v("Currently "),s("code",[t._v("Springfox - Swagger")]),t._v(" and "),s("code",[t._v("SwaggerBootstrapUi")]),t._v(" resources interface includes the following：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Resource")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/doc.html")]),t._v(" "),s("td",[t._v("SwaggerBootstrapUi provides the document access address")])]),t._v(" "),s("tr",[s("td",[t._v("/api-docs-ext")]),t._v(" "),s("td",[t._v("SwaggerBootstrapUi provides addresses for enhanced interfaces")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-resources")]),t._v(" "),s("td",[t._v("Springfox-swagger provides grouped interfaces")])]),t._v(" "),s("tr",[s("td",[t._v("/api-docs")]),t._v(" "),s("td",[t._v("Springfox-swagger provides the packet instance detail interface")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-ui.html")]),t._v(" "),s("td",[t._v("Springfox-swagger - document access addresses provided by the Swagger")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-resources/configuration/ui")]),t._v(" "),s("td",[t._v("Springfox-swagger provides")])]),t._v(" "),s("tr",[s("td",[t._v("/swagger-resources/configuration/security")]),t._v(" "),s("td",[t._v("Springfox-swagger provides")])])])]),t._v(" "),s("p",[t._v("When we deploy a system to a production system, we will need to shield all Swagger associated resources for interface security")]),t._v(" "),s("p",[t._v("If you use SpringBoot,Only Configurations in "),s("code",[t._v("application.properties")]),t._v(" or "),s("code",[t._v("application.yml")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("swagger.production")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("When this property is configured, all resources are disabled.")]),t._v(" "),s("p",[t._v("like：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/ac.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"access-page-weighting-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-page-weighting-control"}},[t._v("#")]),t._v(" Access page weighting control")]),t._v(" "),s("p",[t._v("Whether the official "),s("code",[t._v("swagger-ui.html")]),t._v(" or "),s("code",[t._v("doc.html")]),t._v(", interface access is currently access interface without permission of the document, many friends asked me before can provide a login interface functions, developers enter the user name and password to access control interface, only people who know the user name and password to access this document")]),t._v(" "),s("p",[t._v("Doing login page control requires a user concept, so it was not provided for quite some time")]),t._v(" "),s("p",[t._v("But in "),s("code",[t._v("1.9.0")]),t._v(" version, in view of the resource interface Swagger, "),s("code",[t._v("SwaggerBootstrapUi")]),t._v(" provides simple "),s("strong",[t._v("Basic authentication function")])]),t._v(" "),s("p",[t._v("like ：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/ac-pwd.png",alt:""}})]),t._v(" "),s("p",[t._v("Allows developers in the configuration file to configure a static user name and password, when docking access Swagger page, enter the configuration of a user name and password to access Swagger document page, if you use SpringBoot development, simply in the corresponding "),s("code",[t._v("application.properties")]),t._v(" or "),s("code",[t._v("application.yml")]),t._v(" configuration is as follows:")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Enable swagger basic funs,default false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("swagger.basic.enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Basic username")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("swagger.basic.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("zhangsan")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Basic password")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("swagger.basic.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123")]),t._v("\n")])])]),s("p",[t._v("If the user opens the basic authentication function, but is not configured user name and password, "),s("code",[t._v("SwaggerBootstrapUi")]),t._v(" provides the default user name and password：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("admin/123321\n")])])]),s("p",[t._v("If you use "),s("code",[t._v("SpringMVC")]),t._v(",need configuration Filter in "),s("code",[t._v("web.xml")]),t._v(",example：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--Production Filter--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerProductionFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin.swaggerbootstrapui.filter.ProductionSecurityFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("production"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerProductionFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--Swagger resource Basic Access--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerSecurityBasic"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin.swaggerbootstrapui.filter.SecurityBasicAuthFilter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--enable Basic--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("enableBasicAuth"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--use&pwd--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("userName"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lisi"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("password"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("123"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("swaggerSecurityBasic"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/ProductionSecurityFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProductionSecurityFilter"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/SecurityBasicAuthFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("SecurityBasicAuthFilter"),s("OutboundLink")],1),t._v("只需配置一个即可")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/ProductionSecurityFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProductionSecurityFilter"),s("OutboundLink")],1),t._v(":开启生产环境,屏蔽所有Swagger资源,不可访问,production配置为true时,basic认证功能不可用")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/blob/master/swagger-bootstrap-ui/src/main/java/com/github/xiaoymin/swaggerbootstrapui/filter/SecurityBasicAuthFilter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("SecurityBasicAuthFilter"),s("OutboundLink")],1),t._v("：开启HTTP Basic认证,访问Swagger资源需要提供服务端配置的用户名以及密码")]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);