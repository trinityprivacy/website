"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[1150],{3018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=t(5893),i=t(1151);const l={title:"Software upgrade - 1",sidebar_position:2},r="Software upgrade - 1",a={id:"sentinelguides/validator/upgrades/upgrade-1",title:"Software upgrade - 1",description:"At block height 1272000 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!",source:"@site/docs/sentinelguides/validator/upgrades/upgrade-1.md",sourceDirName:"sentinelguides/validator/upgrades",slug:"/sentinelguides/validator/upgrades/upgrade-1",permalink:"/docs/sentinelguides/validator/upgrades/upgrade-1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Software upgrade - 1",sidebar_position:2},sidebar:"validatorSidebar",previous:{title:"SentinelHub - 2",permalink:"/docs/sentinelguides/validator/upgrades/sentinelhub-2"},next:{title:"Software upgrade - 2",permalink:"/docs/sentinelguides/validator/upgrades/upgrade-2"}},d={},o=[{value:"Stop the node",id:"stop-the-node",level:2},{value:"Install the new version",id:"install-the-new-version",level:2},{value:"Start the node",id:"start-the-node",level:2},{value:"In case the upgrade fails",id:"in-case-the-upgrade-fails",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"software-upgrade---1",children:"Software upgrade - 1"}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,s.jsxs)(n.p,{children:["At block height ",(0,s.jsx)(n.code,{children:"1272000"})," the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!"]})}),"\n",(0,s.jsx)(n.h2,{id:"stop-the-node",children:"Stop the node"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check the latest block height. It must match with the upgrade height"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Stop the ",(0,s.jsx)(n.code,{children:"sentinelhub"})," process"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"install-the-new-version",children:"Install the new version"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the source code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"VERSION=v0.7.0\r\nBASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official\r\n\r\nrm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \\\r\ngit clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \\\r\ngit checkout ${VERSION}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build and install the software"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"make install\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"start-the-node",children:"Start the node"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify the software version"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sentinelhub version --long\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Commit hash must be ",(0,s.jsx)(n.code,{children:"600fd5f8b71f60332656b826df2e3fa3bc6c5e5e"})]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start the ",(0,s.jsx)(n.code,{children:"sentinelhub"})," process"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"in-case-the-upgrade-fails",children:"In case the upgrade fails"}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,s.jsx)(n.p,{children:"Follow the next steps in case the upgrade fails!"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the Sentinel Hub software ",(0,s.jsx)(n.code,{children:"v0.6.3"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Verfiy the software version commit is ",(0,s.jsx)(n.code,{children:"9d0e491ad9a6057e55556e01c142ae52fed7edbb"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start the ",(0,s.jsx)(n.code,{children:"sentinelhub"})," process with flag ",(0,s.jsx)(n.code,{children:"unsafe-skip-upgrades"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sentinelhub start --unsafe-skip-upgrades 1272000\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);