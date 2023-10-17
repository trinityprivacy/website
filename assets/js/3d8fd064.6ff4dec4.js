"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Register a Domanin Name",sidebar_position:2},o="Register a Domanin Name",l={unversionedId:"sentinelguides/validator/rpc/domain",id:"sentinelguides/validator/rpc/domain",title:"Register a Domanin Name",description:"First of all, you need to register a domain. It is recommended to prioritize privacy, so consider paying with Bitcoin and using services that accept it, such a Njalla or NameCheap. We will use NameCheap for this guide.",source:"@site/docs/sentinelguides/validator/rpc/domain.md",sourceDirName:"sentinelguides/validator/rpc",slug:"/sentinelguides/validator/rpc/domain",permalink:"/docs/sentinelguides/validator/rpc/domain",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/rpc/domain.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Register a Domanin Name",sidebar_position:2},sidebar:"sentinelSidebar",previous:{title:"Overview",permalink:"/docs/sentinelguides/validator/rpc/overview"},next:{title:"Certbot",permalink:"/docs/sentinelguides/validator/rpc/certbot"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register-a-domanin-name"},"Register a Domanin Name"),(0,a.kt)("p",null,"First of all, you need to register a domain. It is recommended to prioritize privacy, so consider paying with Bitcoin and using services that accept it, such a ",(0,a.kt)("a",{parentName:"p",href:"https://njal.la/"},"Njalla")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.namecheap.com/"},"NameCheap"),". We will use ",(0,a.kt)("strong",{parentName:"p"},"NameCheap")," for this guide."),(0,a.kt)("p",null,"Once you have purchased your domain, you will need to create a DNS record for a subdomain, typically ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc.sentinel.myvalidator.com")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc.myvalidator.com")),(0,a.kt)("p",null,"Go on your Dashboard and click on your domain 'Manage' button"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced DNS")," and under ",(0,a.kt)("inlineCode",{parentName:"p"},"Hosts Record"),", click on ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD NEW RECORD"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Type")," select ",(0,a.kt)("inlineCode",{parentName:"li"},"A RECORD")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Host")," type ",(0,a.kt)("inlineCode",{parentName:"li"},"rpc.sentinel")," or just ",(0,a.kt)("inlineCode",{parentName:"li"},"rpc")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Value")," your Full Node/Validator IP address")))}u.isMDXComponent=!0}}]);