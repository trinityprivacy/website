"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[239],{4641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5893),i=t(1151);const s={title:"Overview",sidebar_position:1},r="Node Monitoring",a={id:"sentinelguides/monitoring/README",title:"Overview",description:"Running a node or a validator requires a reliable monitoring system to prevent downtime, missed blocks, and reputation damage. Alerting is also essential to notify you of issues.",source:"@site/docs/sentinelguides/monitoring/README.md",sourceDirName:"sentinelguides/monitoring",slug:"/sentinelguides/monitoring/",permalink:"/docs/sentinelguides/monitoring/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/monitoring/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"monitoringSidebar",next:{title:"Node Exporter",permalink:"/docs/sentinelguides/monitoring/exporters/node-exporter"}},d={},l=[{value:"Monitoring Stack",id:"monitoring-stack",level:2},{value:"Node Machine",id:"node-machine",level:3},{value:"Monitoring Machine",id:"monitoring-machine",level:3},{value:"Standalone Monitoring",id:"standalone-monitoring",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"node-monitoring",children:"Node Monitoring"}),"\n",(0,o.jsxs)(n.p,{children:["Running a node or a validator requires a reliable monitoring system to prevent downtime, missed blocks, and reputation damage. Alerting is also essential to notify you of issues.\nWe'll use established monitoring and visualization tools as part of a ",(0,o.jsx)(n.strong,{children:"stack"})," or ",(0,o.jsx)(n.strong,{children:"standalone"})," solutions."]}),"\n",(0,o.jsx)(n.h2,{id:"monitoring-stack",children:"Monitoring Stack"}),"\n",(0,o.jsx)(n.p,{children:"A monitoring stack comprises a set of tools that require installation on both your local node machine and a dedicated monitoring machine."}),"\n",(0,o.jsx)(n.h3,{id:"node-machine",children:"Node Machine"}),"\n",(0,o.jsxs)(n.p,{children:["The first monitoring tools are called ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Exporters"})})," and are agents that run on your node machine. They collect various system-level metrics and expose them in a format that can be understood by Prometheus."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/sentinelguides/monitoring/exporters/node-exporter",children:(0,o.jsx)(n.strong,{children:"Node Exporter"})}),": it collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/sentinelguides/monitoring/exporters/tendermint-internal-metrics",children:(0,o.jsx)(n.strong,{children:"Tendermint Internal Metrics"})}),": it collects various system-level metrics of your validator, and can be easily enabled from your validator configuration file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/sentinelguides/monitoring/exporters/cosmos-validator-exporter",children:(0,o.jsx)(n.strong,{children:"Cosmos Validator Exporter"})}),": a Prometheus scraper designed to retrieve validator statistics from an LCD server exposed by a full node. It was created by Quokkastake, a very active community member."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/sentinelguides/monitoring/exporters/cosmos-node-exporter",children:(0,o.jsx)(n.strong,{children:"Cosmos Node Exporter"})}),": another Prometheus scraper created by Quokkastake, designed to collect other essential data for monitoring your node."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"monitoring-machine",children:"Monitoring Machine"}),"\n",(0,o.jsx)(n.p,{children:"The next two monitoring must be installed on a separated machine which is used just to monitor your node."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/sentinelguides/monitoring/prometheus",children:(0,o.jsx)(n.strong,{children:"Prometheus"})}),": a monitoring system that collects metrics from the Exporters. It stores the metrics in a time-series database and provides a powerful query language to extract and aggregate the data. Prometheus also has an alerting system that can be used to send notifications when certain thresholds are breached"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/sentinelguides/monitoring/grafana",children:(0,o.jsx)(n.strong,{children:"Grafana"})}),": a visualization tool that can be used to create dashboards and charts to display the data collected by Prometheus. Grafana supports a wide range of data sources, including Prometheus, and provides a rich set of visualization options, including graphs, tables, and alerts."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"How does this stack of tools work?"}),"\n",(0,o.jsx)(n.p,{children:"In terms of communication, the Exporters send metrics to Prometheus over HTTP. Prometheus scrapes the metrics from the Exporters on a regular interval, typically every few seconds. Once the data is collected, Prometheus stores it in its time-series database. Grafana, in turn, connects to Prometheus as a data source and queries the data using the powerful Prometheus query language. Grafana then uses this data to create beautiful visualizations that can be shared with others."}),"\n",(0,o.jsx)(n.h2,{id:"standalone-monitoring",children:"Standalone Monitoring"}),"\n",(0,o.jsx)(n.p,{children:"A standalone monitoring solution consists of a single tool that only needs to be installed on a dedicated monitoring machine."}),"\n",(0,o.jsxs)(n.p,{children:["For newcomers, an excellent tool to begin with is ",(0,o.jsx)(n.a,{href:"/docs/sentinelguides/monitoring/uptime-kuma",children:"Uptime Kuma"}),", which specializes in monitoring the uptime of your node, as we've discussed in the relevant section."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);