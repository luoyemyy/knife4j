"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),u=n(7094),c=n(12466);const s="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),j=w.tabGroupChoices,O=w.setTabGroupChoices,x=(0,a.useState)(k),T=x[0],E=x[1],N=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=j[v];null!=C&&C!==T&&h.some((function(e){return e.value===C}))&&E(C)}var Z=function(e){var t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==T&&(P(t),E(r),null!=v&&O(v,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;n=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var o,i=N.indexOf(e.currentTarget)-1;n=null!=(o=N[i])?o:N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},52403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),u=["components"],c={id:"donate",title:"\u8d5e\u52a9\u6211\u4eec",description:"Knife4j\u793e\u533a\u4fe1\u606f"},s=void 0,p={unversionedId:"community/donate",id:"community/donate",title:"\u8d5e\u52a9\u6211\u4eec",description:"Knife4j\u793e\u533a\u4fe1\u606f",source:"@site/docs/community/donate.mdx",sourceDirName:"community",slug:"/community/donate",permalink:"/docs/community/donate",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660470595,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{id:"donate",title:"\u8d5e\u52a9\u6211\u4eec",description:"Knife4j\u793e\u533a\u4fe1\u606f"},sidebar:"docs",previous:{title:"\u7248\u672c\u8bf4\u660e",permalink:"/docs/community/changelog"},next:{title:"\u793a\u4f8b\u4ee3\u7801",permalink:"/docs/community/simple-demo"}},m={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Knife4j\u81ea2017\u5e74\u5f00\u6e90\u81f3\u4eca\u5df2\u7ecf5\u5e74\u6709\u4f59,\u5f00\u6e90\u8def\u4e0a,\u79bb\u4e0d\u5f00\u5f00\u53d1\u8005\u7684\u652f\u6301\u548c\u5e2e\u52a9\uff01\uff01\uff01"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6709\u4ea7\u54c1\u9700\u8981\u5728Knife4j\u7684\u5b98\u7f51\u4e0a\u8fdb\u884c\u63a8\u5e7f\uff0c\u53ef\u4ee5\u7533\u8bf7\u6210\u4e3aKnife4j\u7684\u8d5e\u52a9\u5546\uff0cKnife4j\u5c06\u5bf9\u60a8\u7684\u4ea7\u54c1\u5728Banner\u4f4d\u8fdb\u884c\u5c55\u793a,Knife4j\u5b98\u7f51\u901a\u8fc7CPM(\u66dd\u5149\u5ea6)\u7684\u65b9\u5f0f\u6536\u53d6\u8d39\u7528,\u8be6\u60c5\u53ef\u4ee5\u52a0\u5fae\u4fe1\u7ec6\u804a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"xiao934447")),(0,o.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001\u90ae\u4ef6\u7684\u65b9\u5f0f\u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb,\u90ae\u7bb1\u5730\u5740\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"xiaoymin@foxmail.com")),(0,o.kt)("p",null,"\u5f53\u7136\u5982\u679c\u60a8\u89c9\u5f97",(0,o.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u4e0d\u9519,\u4e5f\u53ef\u4ee5\u901a\u8fc7\u626b\u7801\u7684\u65b9\u5f0f\u8bf7Knife4j\u7684\u4f5c\u8005\u559d\u4e00\u676f\u5496\u5561\uff01\uff01\uff01"),(0,o.kt)(i.Z,{groupId:"quick_start1",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"zhifubao",label:"\u652f\u4ed8\u5b9d",default:!0,mdxType:"TabItem"},(0,o.kt)("img",{src:"https://xiaoym.gitee.io/images/website/pay_ali.jpg",width:"400"})),(0,o.kt)(l.Z,{value:"weixin",label:"\u5fae\u4fe1\u652f\u4ed8",mdxType:"TabItem"},(0,o.kt)("img",{src:"https://xiaoym.gitee.io/images/website/pay_wechat.jpg",width:"400"}))),(0,o.kt)("p",null,"\u5f53\u7136\u4e5f\u6b22\u8fceStar\u3001PR\u3001ISSUE\u7b49\u4efb\u4f55\u65b9\u5f0f\u7684\u652f\u6301,\u975e\u5e38\u611f\u8c22~~\uff01"),(0,o.kt)("p",null,"\u524d\u5f80",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/xiaoym/knife4j",target:"_blank",rel:"noopener"},"https://gitee.com/xiaoym/knife4j"),"\u70b9\u4e2aStar\u5427~~ \uff1a\uff09"))}v.isMDXComponent=!0}}]);