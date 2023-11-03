"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[6074],{9176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(5893),i=t(1151);const r={title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",sidebar_position:7},s="Monitoring with Uptime Kuma",a={id:"sentinelguides/node/manual/monitoring",title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",source:"@site/docs/sentinelguides/node/manual/monitoring.md",sourceDirName:"sentinelguides/node/manual",slug:"/sentinelguides/node/manual/monitoring",permalink:"/docs/sentinelguides/node/manual/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/node/manual/monitoring.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",sidebar_position:7},sidebar:"nodeSidebar",previous:{title:"Run the Node",permalink:"/docs/sentinelguides/node/manual/node-run"},next:{title:"Cloudmos on Akash",permalink:"/docs/category/cloudmos-on-akash"}},c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"monitoring-with-uptime-kuma",children:"Monitoring with Uptime Kuma"}),"\n",(0,o.jsxs)(n.p,{children:["To ensure constant monitoring of your node to prevent any downtime, we highly recommend using ",(0,o.jsx)(n.a,{href:"https://uptime.kuma.pet/",children:"Uptime Kuma"}),". This tool can be self-hosted using a Docker container by executing the following command"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once the container has started and appears healthy, you can access Uptime Kuma through HTTP"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"http://localhost:3001\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, you can click on ",(0,o.jsx)(n.code,{children:"Add new monitor"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["on Monitor type select ",(0,o.jsx)(n.code,{children:"TCP Port"})]}),"\n",(0,o.jsx)(n.li,{children:"in the Hostname field, add your node's IP address"}),"\n",(0,o.jsxs)(n.li,{children:["in the Port field, add the TCP port (on this guide, the port is ",(0,o.jsx)(n.code,{children:"12345"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In Notifications, you can select your favorite notification type. Let's cover an example using Telegram."}),"\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.a,{href:"https://t.me/BotFather.",children:"BotFather"}),", create your alert bot and take note of the generated token"]}),"\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.a,{href:"https://t.me/chatIDrobot",children:"ChatIDrobot"})," and get your chat_id"]}),"\n",(0,o.jsx)(n.p,{children:'Write a "test message on your bot"'}),"\n",(0,o.jsx)(n.p,{children:"Click on the link to check the api"}),"\n",(0,o.jsx)(n.p,{children:"Finally click on Test to check if the Telegram alert system works"}),"\n",(0,o.jsx)(n.p,{children:"Then save."}),"\n",(0,o.jsx)(n.p,{children:"Contratulations, your bot is now active!"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);