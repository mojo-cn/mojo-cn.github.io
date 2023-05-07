"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7634],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2884:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:4},a="\u274c Error \u5927\u5168",l={unversionedId:"guide/tips/error-log",id:"guide/tips/error-log",title:"\u274c Error \u5927\u5168",description:"- rust \u65b0\u624b\u8e29\u5751\u7cfb\u5217.",source:"@site/docs/01-guide/02-tips/04-error-log.mdx",sourceDirName:"01-guide/02-tips",slug:"/guide/tips/error-log",permalink:"/docs/guide/tips/error-log",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-guide/02-tips/04-error-log.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"\u6d41\u7a0b\u63a7\u5236",permalink:"/docs/guide/tips/code-snippet/logic"},next:{title:"\ud83d\udc77 Rust \u5165\u95e8\u5b9e\u8df5",permalink:"/docs/category/-rust-\u5165\u95e8\u5b9e\u8df5-1"}},u={},c=[{value:"\u6570\u636e\u6240\u6709\u6743\u8f6c\u79fb:",id:"\u6570\u636e\u6240\u6709\u6743\u8f6c\u79fb",level:2},{value:"\u751f\u547d\u5468\u671f:",id:"\u751f\u547d\u5468\u671f",level:2}],s={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-error-\u5927\u5168"},"\u274c Error \u5927\u5168"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rust \u65b0\u624b\u8e29\u5751\u7cfb\u5217."),(0,o.kt)("li",{parentName:"ul"},"\u5199 rust \u4ee3\u7801, \u65e5\u5e38\u548c\u7f16\u8bd1\u5668\u640f\u6597, \u8981\u9010\u6b65\u79ef\u7d2f\u640f\u6597\u7ecf\u9a8c(\u5404\u79cd\u62a5\u9519, \u6307\u7684\u662f\u4ec0\u4e48)."),(0,o.kt)("li",{parentName:"ul"},"\u65e5\u5e38\u62a5\u9519, \u8bf4\u4eba\u8bdd\u7684\u89e3\u91ca\u662f\u4ec0\u4e48.")),(0,o.kt)("h2",{id:"\u6570\u636e\u6240\u6709\u6743\u8f6c\u79fb"},"\u6570\u636e\u6240\u6709\u6743\u8f6c\u79fb:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")))}p.isMDXComponent=!0}}]);