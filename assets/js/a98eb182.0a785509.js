"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[2923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Install Dependencies",description:"Everything you need before installing TMKMS",sidebar_position:2},i="Install Dependencies",s={unversionedId:"sentinelguides/validator/tmkms/install-dependencies",id:"sentinelguides/validator/tmkms/install-dependencies",title:"Install Dependencies",description:"Everything you need before installing TMKMS",source:"@site/docs/sentinelguides/validator/tmkms/install-dependencies.md",sourceDirName:"sentinelguides/validator/tmkms",slug:"/sentinelguides/validator/tmkms/install-dependencies",permalink:"/docs/sentinelguides/validator/tmkms/install-dependencies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/tmkms/install-dependencies.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install Dependencies",description:"Everything you need before installing TMKMS",sidebar_position:2},sidebar:"validatorSidebar",previous:{title:"Overview",permalink:"/docs/sentinelguides/validator/tmkms/overview"},next:{title:"Setup & Config",permalink:"/docs/sentinelguides/validator/tmkms/setup-config"}},o={},d=[{value:"Install Rust",id:"install-rust",level:3},{value:"Install dependencies",id:"install-dependencies-1",level:3},{value:"Install Libusb",id:"install-libusb",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("p",null,"Start by opening the node you intend to run TMKMS (not the node you validate on) and install the following dependencies"),(0,a.kt)("h3",{id:"install-rust"},"Install Rust"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.kt)("p",null,"Source the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"source $HOME/.cargo/env\n")),(0,a.kt)("h3",{id:"install-dependencies-1"},"Install dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && \\\nsudo apt install git build-essential ufw curl jq snapd --yes\n")),(0,a.kt)("h3",{id:"install-libusb"},"Install Libusb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libusb-1.0-0-dev\n")),(0,a.kt)("p",null,"If on x86_64 architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3\n")))}u.isMDXComponent=!0}}]);