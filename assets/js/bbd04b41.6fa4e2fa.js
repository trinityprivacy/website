"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={title:"Node Exporter",sidebar_position:2},i="Node Exporter",l={unversionedId:"sentinelguides/validator/monitoring/node-exporter",id:"sentinelguides/validator/monitoring/node-exporter",title:"Node Exporter",description:"Node Exporter is a monitoring application that must be installed on both your validator and monitoring machines",source:"@site/docs/sentinelguides/validator/monitoring/node-exporter.md",sourceDirName:"sentinelguides/validator/monitoring",slug:"/sentinelguides/validator/monitoring/node-exporter",permalink:"/docs/sentinelguides/validator/monitoring/node-exporter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/monitoring/node-exporter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Node Exporter",sidebar_position:2},sidebar:"sentinelSidebar",previous:{title:"Overview",permalink:"/docs/sentinelguides/validator/monitoring/overview"},next:{title:"Prometheus",permalink:"/docs/sentinelguides/validator/monitoring/prometheus"}},s={},d=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Node Exporter service",id:"start-node-exporter-service",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-exporter"},"Node Exporter"),(0,o.kt)("p",null,"Node Exporter is a monitoring application that must be installed on both your validator and monitoring machines"),(0,o.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,o.kt)("p",null,"On both your validator and monitoring machines, download and unpack Node Exporter (check the last version ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/download/#node_exporter"},"here"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz\ntar xvfz node_exporter-1.5.0.linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"Rename the folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv node_exporter-1.5.0.linux-amd64 node_exporter\n")),(0,o.kt)("h2",{id:"add-a-system-unit-file"},"Add a system unit file"),(0,o.kt)("p",null,"Open the .service with a text editor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/node-exporter.service\n")),(0,o.kt)("p",null,"Paste the below text"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/systemd/system/node-exporter.service",title:"/etc/systemd/system/node-exporter.service"},"[Unit]\nDescription=Node Exporter\nAfter=network-online.target\n\u200b\n[Service]\nUser=youruser #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=/home/youruser/node_exporter/node_exporter\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Reload the systemd Daemon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Enable autostart of Node Exporter service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable node-exporter.service\n")),(0,o.kt)("h2",{id:"start-node-exporter-service"},"Start Node Exporter service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start node-exporter.service\n")),(0,o.kt)("p",null,"Use this command to check logs in real time"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u node-exporter.service -f\n")),(0,o.kt)("p",null,"Once the Node Exporter is installed and running, you can verify that ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," are being exported by cURLing the /metrics endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:9100/metrics\n")),(0,o.kt)("p",null,"Success! Node Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output (prefixed with node_). To view those metrics (along with help and type information):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:9100/metrics | grep "node_"\n')),(0,o.kt)("p",null,"After installing and running Node Exporter, you need to open port 9100 on your Validator firewall (accessible only from your monitor machine) to allow Prometheus to scrape data from Node Exporter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow from monitor_ip to validator_ip port 9100\n")))}u.isMDXComponent=!0}}]);