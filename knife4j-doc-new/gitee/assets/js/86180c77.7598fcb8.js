"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},u="1.3 Cloud\u6a21\u5f0f",c={unversionedId:"middleware-sources/aggregation-cloud",id:"middleware-sources/aggregation-cloud",title:"1.3 Cloud\u6a21\u5f0f",description:"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003\u57fa\u4e8eCloud\u6a21\u5f0f\u805a\u5408OpenAPI",source:"@site/docs/middleware-sources/aggregation-cloud.md",sourceDirName:"middleware-sources",slug:"/middleware-sources/aggregation-cloud",permalink:"/docs/middleware-sources/aggregation-cloud",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660470595,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{},sidebar:"middleware-sources",previous:{title:"1.2 Disk\u6a21\u5f0f",permalink:"/docs/middleware-sources/aggregation-disk"},next:{title:"1.4 Eureka\u6a21\u5f0f",permalink:"/docs/middleware-sources/aggregation-eureka"}},s={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"13-cloud\u6a21\u5f0f"},"1.3 Cloud\u6a21\u5f0f"),(0,o.kt)("p",null,"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/action/aggregation-cloud",target:null,rel:null},"\u57fa\u4e8eCloud\u6a21\u5f0f\u805a\u5408OpenAPI")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53d6\u540dCloud\u6a21\u5f0f\u4ee3\u8868\u7684\u662f\u5f00\u53d1\u8005\u7684OpenAPI\u89c4\u8303\u662f\u4ee5HTTP\u63a5\u53e3\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u914d\u7f6e\u901a\u8fc7\u8c03\u7528HTTP\u63a5\u53e3\u6765\u83b7\u53d6OpenAPI\u89c4\u8303"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enableAggregation: true\n  cloud:\n    enable: true\n    routes:\n      - name: \u7528\u6237\u4f53\u7cfb\n        uri: 192.168.0.152:8999\n        location: /v2/api-docs?group=2.X\u7248\u672c\n        swaggerVersion: 2.0\n        servicePath: /abbb/ffe\n        routeAuth:\n          enable: true\n          username: test3\n          password: 66666\n    routeAuth:\n      enable: true\n      username: test\n      password: 12313\n")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.enable"),":\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4ee3\u8868\u542f\u7528Cloud\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u516c\u5171Basic\u9a8c\u8bc1\u5c5e\u6027(\u53ef\u9009)\uff0c\u5982\u679c\u5f00\u53d1\u8005\u63d0\u4f9b\u7684OpenAPI\u89c4\u8303\u7684HTTP\u63a5\u53e3\u9700\u8981\u4ee5Basic\u9a8c\u8bc1\u8fdb\u884c\u9274\u6743\u8bbf\u95ee\uff0c\u90a3\u4e48\u53ef\u4ee5\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5982\u679c\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5219\u8be5\u6a21\u5f0f\u4e0b\u6240\u6709\u914d\u7f6e\u7684Routes\u8282\u70b9\u63a5\u53e3\u90fd\u4f1a\u4ee5Basic\u9a8c\u8bc1\u4fe1\u606f\u8bbf\u95ee\u63a5\u53e3"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth.password"),":Basic\u5bc6\u7801"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes"),":\u9700\u8981\u805a\u5408\u7684\u670d\u52a1\u96c6\u5408(\u5fc5\u9009)\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.name"),":\u670d\u52a1\u540d\u79f0(\u663e\u793a\u540d\u79f0\uff0c\u6700\u7ec8\u5728Ui\u7684\u5de6\u4e0a\u89d2\u4e0b\u62c9\u6846\u8fdb\u884c\u663e\u793a)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.uri"),":\u8be5\u670d\u52a1\u7684\u63a5\u53e3URI\u8d44\u6e90\uff0c\u5982\u679c\u662fHTTPS\uff0c\u5219\u9700\u8981\u5b8c\u6574\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.location:"),":\u5177\u4f53\u8d44\u6e90\u63a5\u53e3\u5730\u5740\uff0c\u6700\u7ec8Knife4j\u662f\u901a\u8fc7uri+location\u7684\u7ec4\u5408\u8def\u5f84\u8fdb\u884c\u8bbf\u95ee"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.swaggerVersion"),":\u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"2.0"),"\uff0c\u53ef\u9009\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.servicePath"),":\u8be5\u5c5e\u6027\u662f\u6700\u7ec8\u5728Ui\u4e2d\u5c55\u793a\u7684\u63a5\u53e3\u524d\u7f00\u5c5e\u6027\uff0c\u63d0\u4f9b\u8be5\u5c5e\u6027\u7684\u76ee\u7684\u4e5f\u662f\u56e0\u4e3a\u901a\u5e38\u5f00\u53d1\u8005\u5728\u4ee5Gateway\u7b49\u65b9\u5f0f\u805a\u5408\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u524d\u7f00\u8def\u5f84\u6765\u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u6700\u7ec8\u8fd9\u4e2a\u524d\u7f00\u8def\u5f84\u4f1a\u5728\u6bcf\u4e2a\u63a5\u53e3\u4e2d\u8fdb\u884c\u8ffd\u52a0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth"),":\u5982\u679c\u8be5Route\u8282\u70b9\u7684\u63a5\u53e3\u5f00\u542f\u4e86Basic\uff0c\u5e76\u4e14\u548c\u516c\u5171\u914d\u7f6e\u7684Basic\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u5355\u72ec\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth.password"),":Basic\u5bc6\u7801"))))}m.isMDXComponent=!0}}]);