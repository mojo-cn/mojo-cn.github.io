"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[115],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var r=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,o=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),s=p(a),d=l,c=s["".concat(o,".").concat(d)]||s[d]||k[d]||n;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>u,toc:()=>p});var r=a(7462),l=(a(7294),a(3905));const n={sidebar_position:0},i="\ud83e\udd80 Rust \u5b66\u4e60\u8def\u7ebf\u56fe",u={unversionedId:"guide/roadmap",id:"guide/roadmap",title:"\ud83e\udd80 Rust \u5b66\u4e60\u8def\u7ebf\u56fe",description:"\u9605\u8bfb\u987a\u5e8f:",source:"@site/docs/01-guide/00-roadmap.md",sourceDirName:"01-guide",slug:"/guide/roadmap",permalink:"/fr/docs/guide/roadmap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-guide/00-roadmap.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"guide",next:{title:"\ud83d\udca1 Rust \u5feb\u901f\u5f00\u59cb",permalink:"/fr/docs/category/-rust-\u5feb\u901f\u5f00\u59cb-1"}},o={},p=[{value:"\u9605\u8bfb\u987a\u5e8f:",id:"way",level:2},{value:"\u5f00\u59cb\u4e4b\u524d",id:"before-start",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u5b66 Rust?",id:"why-rust",level:2},{value:"\u672c\u6559\u7a0b\u5b58\u5728\u610f\u4e49?",id:"why-this",level:2},{value:"\u76ee\u6807\u4eba\u7fa4:",id:"\u76ee\u6807\u4eba\u7fa4",level:3},{value:"\u4e3a\u4ec0\u4e48\u4e0d\u8ddf\u7740 rust \u5b98\u65b9\u6559\u7a0b\u5b66?",id:"why-not-std",level:3},{value:"\u600e\u4e48\u7b97\u5165\u95e8?",id:"\u600e\u4e48\u7b97\u5165\u95e8",level:3},{value:"Rust \u5feb\u901f\u5b66\u4e60\u65b9\u6848",id:"quickstart",level:2},{value:"\ud83d\ude80 1. \u5feb\u901f\u638c\u63e1 rust \u57fa\u7840\u8bed\u6cd5",id:"-1-\u5feb\u901f\u638c\u63e1-rust-\u57fa\u7840\u8bed\u6cd5",level:3},{value:"\ud83d\ude80 2. \u7ec3\u4e60\u7b80\u5355\u4ee3\u7801:",id:"-2-\u7ec3\u4e60\u7b80\u5355\u4ee3\u7801",level:3},{value:"\ud83d\ude80 3. \u5b66\u4e60 rust \u8fdb\u9636\u8bed\u6cd5",id:"-3-\u5b66\u4e60-rust-\u8fdb\u9636\u8bed\u6cd5",level:3},{value:"\ud83d\ude80 4. \u9879\u76ee\u5b9e\u8df5",id:"-4-\u9879\u76ee\u5b9e\u8df5",level:3},{value:"\ud83d\ude80 5. \u6e90\u7801\u9605\u8bfb+\u5206\u6790:",id:"-5-\u6e90\u7801\u9605\u8bfb\u5206\u6790",level:3}],m={toc:p};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-rust-\u5b66\u4e60\u8def\u7ebf\u56fe"},"\ud83e\udd80 Rust \u5b66\u4e60\u8def\u7ebf\u56fe"),(0,l.kt)("h2",{id:"way"},"\u9605\u8bfb\u987a\u5e8f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("a",{parentName:"li",href:"intro/"},"Rust \u5feb\u901f\u5f00\u59cb")," ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("a",{parentName:"li",href:"core/intro"},"Rust \u57fa\u7840\u8bed\u6cd5"),": \u5148\u638c\u63e1\u8bed\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("a",{parentName:"li",href:"tips/intro/rule"},"Rust \u5fc5\u77e5\u5fc5\u4f1a"),": rust \u8e29\u5751",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("a",{parentName:"li",href:"praticse/intro/"},"Rust \u5165\u95e8\u5b9e\u8df5"),": \u8fb9\u5b66\u8fb9\u7ec3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2705 ",(0,l.kt)("a",{parentName:"li",href:"pro/intro"},"Rust \u9ad8\u7ea7\u8bed\u6cd5"),": rust \u590d\u6742\u8bed\u6cd5\u7279\u6027")))))))))),(0,l.kt)("h2",{id:"before-start"},"\u5f00\u59cb\u4e4b\u524d"),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Rust \u4e0d\u5b58\u5728\u6377\u5f84. \u4e0d\u5b58\u5728 7 \u5929\u901f\u6210\u6559\u7a0b."),(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Rust, \u53ef\u80fd\u9700\u8981 1-3\u4e2a\u6708\u5165\u95e8, 1-3\u5e74\u638c\u63e1, 3-5\u5e74\u719f\u7ec3/\u7cbe\u901a.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"Python, Go, C, C++")," \u7b49\u8bed\u8a00\u57fa\u7840, \u5b66\u4e60 Rust \u4f1a\u5feb\u4e00\u4e9b."),(0,l.kt)("li",{parentName:"ul"},"Rust \u6574\u4f53\u5b66\u4e60\u6210\u672c\u6bd4 C++ \u4f4e, \u6536\u76ca\u5927\u4e8e C++."))),(0,l.kt)("li",{parentName:"ul"},"Rust \u4e0d\u9002\u5408\u4f5c\u4e3a\u7b2c\u4e00\u95e8\u7f16\u7a0b\u8bed\u8a00\u6765\u5b66\u4e60.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u662f\u672c\u79d1\u751f(or \u96f6\u57fa\u7840\u5b66\u4e60\u8005), \u5efa\u8bae\u5148\u5b66\u4f1a ",(0,l.kt)("inlineCode",{parentName:"li"},"TypeScript / Python")," \u518d\u6765."))),(0,l.kt)("li",{parentName:"ul"},"\u672c\u6559\u7a0b, \u540e\u7eed\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"\u8bed\u6cd5\u70b9"),"\u89e3\u91ca\u8fc7\u7a0b\u4e2d, \u5927\u91cf",(0,l.kt)("inlineCode",{parentName:"li"},"\u7c7b\u6bd4/\u5bf9\u6bd4"),(0,l.kt)("strong",{parentName:"li"},"\u5176\u4ed6\u8bed\u8a00(Go/Python)"),"\u7684\u76f8\u4f3c\u7279\u6027",(0,l.kt)("inlineCode",{parentName:"li"},"\u5f02\u540c\u70b9"),", \u4ee5\u5e2e\u52a9\u5927\u5bb6\u5feb\u901f\u7406\u89e3 Rust\n."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 rust \u5b66\u4e60\u66f2\u7ebf\u6bd4\u8f83\u9661\u5ced, \u5f88\u591a\u4eba\u90fd\u53cd\u590d\u5165\u95e8(\u5931\u8d25)\u800c\u653e\u5f03. \u65e0\u529f\u800c\u8fd4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1: \u82b11\u4e2a\u6708\u5b66, 3\u4e2a\u6708\u5fd8, 6\u4e2a\u6708\u5f52\u96f6... \u518d\u5faa\u73af..."))),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u5982\u679c\u6709\u4eba\u544a\u8bc9\u4f60 rust \u5f88\u7b80\u5355, \u5f88\u5bb9\u6613\u5b66(7\u5929\u5b66\u4f1a). \u8bf7\u8fdc\u79bb\u4ed6.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u4e48\u4ed6\u662f\u50bb\u74dc(\u6ca1\u5b66\u4f1a), \u8981\u4e48\u4ed6\u662f\u9a97\u5b50."))),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u672c\u6559\u7a0b, \u5e0c\u671b\u80fd\u964d\u4f4e rust \u521d\u5b66\u8005\u95e8\u69db, \u8ba9\u5927\u5bb6\u90fd\u80fd\u5b66\u4f1a, \u800c\u4e0d\u662f\u534a\u9014\u800c\u5e9f."),(0,l.kt)("li",{parentName:"ul"},"\u26fd\ufe0f \u52a0\u6cb9.")),(0,l.kt)("h2",{id:"why-rust"},"\u4e3a\u4ec0\u4e48\u8981\u5b66 Rust?"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"rust \u6709\u5f88\u591a\u4f18\u70b9."),(0,l.kt)("li",{parentName:"ul"},"rust \u5df2\u7ecf\u6210\u4e3a\u56fd\u5185\u5916\u8bf8\u591a\u5927\u5382\u4e3b\u529b\u5f00\u53d1\u8bed\u8a00."),(0,l.kt)("li",{parentName:"ul"},"rust \u793e\u533a\u751f\u6001\u4e30\u5bcc."),(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60 rust, \u8d5a\u94b1."))),(0,l.kt)("h2",{id:"why-this"},"\u672c\u6559\u7a0b\u5b58\u5728\u610f\u4e49?"),(0,l.kt)("h3",{id:"\u76ee\u6807\u4eba\u7fa4"},"\u76ee\u6807\u4eba\u7fa4:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9002\u5408:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 Rust \u521d\u5b66\u8005: \u6709\u4e00\u5b9a\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00(C/Java/Go/Python/JavaScript\u7b49)\u57fa\u7840"),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u5c0f\u76ee\u6807: \u96f6\u57fa\u7840 -> \u5165\u95e8(1-3\u4e2a\u6708) -> \u638c\u63e1 (1\u5e74)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u76ee\u6807, \u662f\u672c\u6559\u7a0b\u6838\u5fc3, \u529b\u6c42: \u521d\u5b66\u8005\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"\u6700\u77ed\u8def\u5f84"),"\u5feb\u901f\u5165\u95e8 + \u638c\u63e1 Rust."))),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u5927\u76ee\u6807: \u638c\u63e1 -> \u8fdb\u9636(1-3\u5e74) -> \u7cbe\u901a(3-5\u5e74) -> \u4e13\u5bb6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6559\u7a0b\u6301\u7eed\u8fed\u4ee3, \u6700\u7ec8\u8986\u76d6")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0d\u9002\u5408:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u274c \u5df2\u638c\u63e1 Rust \u7684\u5f00\u53d1\u8005, \u53ef\u4ee5\u5ffd\u7565\u672c\u6559\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u274c \u5b8c\u5168\u65e0\u7f16\u7a0b\u57fa\u7840, \u5efa\u8bae\u5148\u5b66\u4e60 ",(0,l.kt)("inlineCode",{parentName:"li"},"Python/TypeScript/Dart")," \u7b49\u4e4b\u540e, \u518d\u5c1d\u8bd5\u5b66\u4e60 Rust")),(0,l.kt)("h3",{id:"why-not-std"},"\u4e3a\u4ec0\u4e48\u4e0d\u8ddf\u7740 rust \u5b98\u65b9\u6559\u7a0b\u5b66?"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u8ddf\u7740\u5b98\u65b9\u80fd\u4e0d\u80fd\u5b66\u4f1a? \u80fd."),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8ddf\u5b98\u65b9\u6559\u7a0b\u5b66\u4f1a\u7684, \u6ca1\u5fc5\u8981\u770b\u672c\u6559\u7a0b."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u6559\u7a0b, \u53ef\u4ee5\u5f53\u4f5c\u5b98\u65b9\u6559\u7a0b\u7684\u5148\u5bfc\u7bc7(\u5e76\u4e0d\u4f1a\u6d6a\u8d39\u4f60\u65f6\u95f4)."),(0,l.kt)("li",{parentName:"ul"},"\u672c\u6559\u7a0b\u548c\u5b98\u65b9\u6559\u7a0b, \u5e76\u4e0d\u51b2\u7a81, \u4e0d\u59a8\u788d\u4e00\u8d77\u98df\u7528."),(0,l.kt)("li",{parentName:"ul"},"\u5148\u5165\u95e8, \u5165\u95e8\u540e, \u4f60\u81ea\u7136\u4f1a\u77e5\u9053\u540e\u7eed\u8def, \u8be5\u600e\u4e48\u8d70.")),(0,l.kt)("h3",{id:"\u600e\u4e48\u7b97\u5165\u95e8"},"\u600e\u4e48\u7b97\u5165\u95e8?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \u80fd\u7406\u89e3 rust \u7684\u6838\u5fc3\u8bbe\u8ba1 & \u4f18\u7f3a\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u80fd\u8bfb\u61c2 rust \u793e\u533a\u9879\u76ee 80% \u7684\u4ee3\u7801(\u76ee\u6807\u5f88\u4f4e, \u591f\u7528)"),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u80fd\u4e0a\u624b\u5199 rust \u9879\u76ee")),(0,l.kt)("h2",{id:"quickstart"},"Rust \u5feb\u901f\u5b66\u4e60\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b66 rust \u6ca1\u6709\u6700\u77ed\u8def\u5f84, \u6b64\u6559\u7a0b, \u53ea\u662f\u5c3d\u53ef\u80fd\u8ba9\u5b66\u4e60\u8005\u5c11\u8d70\u5f2f\u8def.")),(0,l.kt)("h3",{id:"-1-\u5feb\u901f\u638c\u63e1-rust-\u57fa\u7840\u8bed\u6cd5"},"\ud83d\ude80 1. \u5feb\u901f\u638c\u63e1 rust \u57fa\u7840\u8bed\u6cd5"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5148\u5feb\u901f\u5b66\u4e60 rust \u57fa\u7840\u8bed\u6cd5, \u4e5f\u5c31\u662f\u5bf9\u6807 go, python \u8fd9\u7c7b\u8bed\u8a00\u7684\u8bed\u6cd5\u96c6."),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u6d89\u53ca rust \u8fdb\u9636\u8bed\u6cd5(\u521d\u671f\u8df3\u8fc7, \u4e0d\u6c42\u751a\u89e3.)"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \u6b64\u9636\u6bb5, \u8017\u65f6 1\u4e2a\u6708, \u5e94\u8be5\u5c31\u53ef\u638c\u63e1."),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u4e4b\u540e, \u5c1d\u8bd5\u5199\u7b80\u5355\u4ee3\u7801.")),(0,l.kt)("h3",{id:"-2-\u7ec3\u4e60\u7b80\u5355\u4ee3\u7801"},"\ud83d\ude80 2. \u7ec3\u4e60\u7b80\u5355\u4ee3\u7801:"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"li"},"learn-by-example")," \u6765\u8fb9\u5199\u4ee3\u7801, \u8fb9\u5b66\u4e60."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \u8017\u65f6 1-3 \u4e2a\u6708. (\u6839\u636e\u4e2a\u4eba\u6bcf\u5929\u6295\u5165\u65f6\u95f4\u4e0d\u7b49, \u8fdb\u5ea6\u4e0d\u540c)")),(0,l.kt)("h3",{id:"-3-\u5b66\u4e60-rust-\u8fdb\u9636\u8bed\u6cd5"},"\ud83d\ude80 3. \u5b66\u4e60 rust \u8fdb\u9636\u8bed\u6cd5"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u627f\u63a5\u4e0a\u97622\u6b65\u9aa4, \u6b64\u65f6\u9700\u8981\u6df1\u5165\u4e86\u89e3 rust \u8fdb\u9636\u8bed\u6cd5\u90e8\u5206."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \u6240\u8c13\u8fdb\u9636, \u5c31\u662f \u5176\u4ed6\u8bed\u8a00(go, python) \u7b49, \u4e0d\u5b58\u5728\u7684 \u8bed\u6cd5\u6982\u5ff5\u548c\u8bbe\u8ba1."),(0,l.kt)("li",{parentName:"ul"},"\u2705 \u5982: \u751f\u547d\u5468\u671f, \u5b8f \u7b49")),(0,l.kt)("h3",{id:"-4-\u9879\u76ee\u5b9e\u8df5"},"\ud83d\ude80 4. \u9879\u76ee\u5b9e\u8df5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 \u901a\u8fc7\u5199\u4e2d\u7b49\u89c4\u6a21\u7684\u9879\u76ee, \u6765\u7ec3\u4e60 rust \u8bed\u6cd5, \u5e76\u5feb\u901f\u638c\u63e1 rust \u5e38\u7528\u5e93.")),(0,l.kt)("h3",{id:"-5-\u6e90\u7801\u9605\u8bfb\u5206\u6790"},"\ud83d\ude80 5. \u6e90\u7801\u9605\u8bfb+\u5206\u6790:"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"rust ",(0,l.kt)("strong",{parentName:"li"}," std \u6807\u51c6\u5e93"),"\u6e90\u7801\u5206\u6790"),(0,l.kt)("li",{parentName:"ul"},"rust ",(0,l.kt)("strong",{parentName:"li"},"\u70ed\u95e8\u9879\u76ee"),"\u6e90\u7801\u5206\u6790"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u6e90\u7801, \u662f\u6700\u5feb\u901f\u7684\u5b66\u4e60+\u63d0\u9ad8\u624b\u6bb5. \u9002\u5408\u4efb\u4f55\u6c34\u5e73\u6bb5\u7684\u7a0b\u5e8f\u5458."),(0,l.kt)("li",{parentName:"ul"},"\u6e90\u7801\u4e4b\u524d, \u4e86\u65e0\u79d8\u5bc6.")))}k.isMDXComponent=!0}}]);