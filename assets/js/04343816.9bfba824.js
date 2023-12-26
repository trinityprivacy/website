"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7442],{1870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(5893),o=t(1151);const i={title:"Deploy the Node",description:"The steps to deploy your node",sidebar_position:2},d="Deploy the Node",a={id:"sentinelguides/node/methods/akash/deploy",title:"Deploy the Node",description:"The steps to deploy your node",source:"@site/docs/sentinelguides/node/methods/akash/deploy.md",sourceDirName:"sentinelguides/node/methods/akash",slug:"/sentinelguides/node/methods/akash/deploy",permalink:"/docs/sentinelguides/node/methods/akash/deploy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deploy the Node",description:"The steps to deploy your node",sidebar_position:2},sidebar:"nodeSidebar",previous:{title:"Overview & Requirements",permalink:"/docs/sentinelguides/node/methods/akash/start-cloudmos-on-akash"},next:{title:"SSH into the Container",permalink:"/docs/sentinelguides/node/methods/akash/ssh"}},r={},l=[];function c(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-the-node",children:"Deploy the Node"}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.a,{href:"https://deploy.cloudmos.io/",children:"https://deploy.cloudmos.io/"})]}),"\n",(0,s.jsxs)(n.p,{children:["On the top-left click on ",(0,s.jsx)(n.code,{children:"DEPLOY"})]}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.code,{children:"Empty"})," template"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Empty Template",src:t(791).Z+"",width:"1192",height:"231"})}),"\n",(0,s.jsx)(n.p,{children:"Edit the content of the following code (make sure you write within the double quotes)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'---\nversion: "2.0"\nendpoints:\n  unique_name_endpoint: # it must be a unique name\n    kind: ip\nservices:\n  app:\n    image:  declab/sentinel_dvpn_ssh:0.7.2\n    \n    env:\n      - "SSH_PASS=" # Your SSH password\n      - "MNEMONIC_BASE64=" # Mnemonic encrypted with BASE64.\n      - "MONIKER=" # Your dVPN node name.\n      - "REMOTE_PORT=8585" # TCP listen port.\n      - "LISTEN_PORT=3333" # V2RAY listen port\n      - "IPV4_ADDRESS=" # Node leased IP address (you will add it later)\n      - "RPC_ADDRESS=https://rpc.sentinel.co:443"\n      - "GIGABYTE_PRICES=29000000udvpn,390000ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,5250000ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,7000000ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,525000000ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783"\n      - "HOURLY_PRICES=4900000udvpn"\n        \n    expose:\n      - port: 8585 # TCP listen port\n        to:\n          - global: true\n            ip: unique_name_endpoint  # Name used in line 3\n      - port: 3333 # V2RAY port\n        to:\n          - global: true\n            ip: unique_name_endpoint  # Name usen in line 3\n      - port: 22 # SSH port\n        to:\n          - global: true\nprofiles:\n  compute:\n    app:\n      resources:\n        cpu:\n          units: 1\n        memory:\n          size: 1Gi\n        storage:\n          size: 10Gi         \n  placement:\n    akash: \n      pricing:\n        app:\n          denom: uakt\n          amount: 100000\ndeployment:\n  app:\n    akash:\n      profile: app\n      count: 1\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then paste it into the template board and click on ",(0,s.jsx)(n.code,{children:"CREATE DEPLOYMENT"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create Deployment",src:t(5160).Z+"",width:"1166",height:"510"})}),"\n",(0,s.jsxs)(n.p,{children:["You will need to make a ",(0,s.jsx)(n.strong,{children:"5 AKT"})," deployment deposit, which will be refunded to you upon closing the deployment."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Deposit",src:t(5422).Z+"",width:"446",height:"359"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, wait for bids, select your preferred provider and click on ",(0,s.jsx)(n.code,{children:"ACCEPT BID"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Bids",src:t(2469).Z+"",width:"1185",height:"326"})}),"\n",(0,s.jsxs)(n.p,{children:["Wait for deployment and check the tab EVENTS to see the ",(0,s.jsx)(n.strong,{children:"IP"})," that has been ",(0,s.jsx)(n.strong,{children:"assigned!"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Assigned IP",src:t(744).Z+"",width:"982",height:"489"})}),"\n",(0,s.jsxs)(n.p,{children:["Now go on tab ",(0,s.jsx)(n.code,{children:"UPDATE"}),", insert your IP into the field ",(0,s.jsx)(n.code,{children:"IPV4_ADDRESS"})," and click on ",(0,s.jsx)(n.code,{children:"UPDATE DEPLOYMENT"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Update Deployment",src:t(6305).Z+"",width:"1163",height:"497"})}),"\n",(0,s.jsx)(n.p,{children:"The node will be redeployed. You can check the LOGS tab as you normally do when installing it manually to verify if it goes online without errors. Alternatively, you can SSH into the container, which is the next step."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},744:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/assigned-ip-d318b9a2cb281fa048dc3761796b5946.png"},2469:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/bids-09478cb228e97a8340821ef416d6c2f6.png"},5160:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/create-deployment-d009674d87d70fb931b301224e8c356e.png"},5422:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/deposit-c485f1443572d989a9df9e04e4bd5f56.png"},791:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/template-72f518247ffd8efe313aa6e84f2c3cf8.png"},6305:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/update-f331489b2162f285c3ee657f269d8abe.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var s=t(7294);const o={},i=s.createContext(o);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);