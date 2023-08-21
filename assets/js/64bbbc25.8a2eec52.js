"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[6871],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:a},u),{},{components:t})):r.createElement(f,i({ref:a},u))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8741:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const o={title:"Grafana",sidebar_position:4},i="Grafana",l={unversionedId:"validator/monitoring/grafana",id:"validator/monitoring/grafana",title:"Grafana",description:"Download & Installation",source:"@site/docs/validator/monitoring/grafana.md",sourceDirName:"validator/monitoring",slug:"/validator/monitoring/grafana",permalink:"/trinity-validator-website/docs/validator/monitoring/grafana",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/validator/monitoring/grafana.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Grafana",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/trinity-validator-website/docs/validator/monitoring/prometheus"},next:{title:"Autorestake Setup",permalink:"/trinity-validator-website/docs/category/autorestake-setup"}},s={},c=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Grafana service",id:"start-grafana-service",level:2}],u={toc:c},p="wrapper";function d(e){let{components:a,...t}=e;return(0,n.kt)(p,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"grafana"},"Grafana"),(0,n.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,n.kt)("p",null,"On your monitoring machine, download and unpack Prometheus (check the last version ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"here"),")"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dl.grafana.com/enterprise/release/grafana-enterprise-9.4.3.linux-amd64.tar.gz\ntar -zxvf grafana-enterprise-9.4.3.linux-amd64.tar.gz\n")),(0,n.kt)("p",null,"Rename the folder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mv grafana-enterprise-9.4.3.linux-amd64 grafana\n")),(0,n.kt)("h2",{id:"add-a-system-unit-file"},"Add a system unit file"),(0,n.kt)("p",null,"Open the .service with a text editor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/grafana.service\n")),(0,n.kt)("p",null,"Paste the below text"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/systemd/system/grafana.service",title:"/etc/systemd/system/grafana.service"},"[Unit]\nDescription=Grafana\nAfter=network-online.target\n\n[Service]\nUser=youruser #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nWorkingDirectory=/home/youruser/grafana\nExecStart=/home/youruser/grafana/bin/grafana-server web --config.file=/home/youruser/grafana/conf/default.ini\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\n[Install]\nWantedBy=multi-user.target\n")),(0,n.kt)("p",null,"Reload the systemd Daemon"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\n")),(0,n.kt)("p",null,"Enable autostart of Grafana service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable grafana.service\n")),(0,n.kt)("h2",{id:"start-grafana-service"},"Start Grafana service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start grafana.service\n")),(0,n.kt)("p",null,"Use this command to check logs in real time"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u grafana.service -f\n")),(0,n.kt)("p",null,"If you are running Grafana on a VPS and want to access the web UI via an external browser, you need to first enable port 3000 on ufw:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 3000/tcp\n")),(0,n.kt)("p",null,"You can now type this address into your browser"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"https://grafana_ip:3000\n")))}d.isMDXComponent=!0}}]);