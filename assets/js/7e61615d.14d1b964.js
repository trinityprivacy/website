"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[5086],{3584:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=a(5893),i=a(1151);const t={title:"Full Node Setup",description:"These steps will guide you on how to install and configure the Sentinel hub",sidebar_position:4},c="Install and Configure Full Node",d={id:"validator/node-setup",title:"Full Node Setup",description:"These steps will guide you on how to install and configure the Sentinel hub",source:"@site/docs/validator/node-setup.md",sourceDirName:"validator",slug:"/validator/node-setup",permalink:"/docs/validator/node-setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Full Node Setup",description:"These steps will guide you on how to install and configure the Sentinel hub",sidebar_position:4},sidebar:"validatorSidebar",previous:{title:"Golang Setup",permalink:"/docs/validator/golang"},next:{title:"Run the Full Node",permalink:"/docs/validator/node-run"}},l={},o=[{value:"Enable ports on Firewall",id:"enable-ports-on-firewall",level:2},{value:"Install Sentinel Hub",id:"install-sentinel-hub",level:2},{value:"Configure Sentinel Hub",id:"configure-sentinel-hub",level:2},{value:"Genesis File",id:"genesis-file",level:3},{value:"Edit the Node configuration file",id:"edit-the-node-configuration-file",level:3},{value:"Add a system unit file",id:"add-a-system-unit-file",level:3}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"install-and-configure-full-node",children:"Install and Configure Full Node"}),"\n",(0,s.jsx)(n.h2,{id:"enable-ports-on-firewall",children:"Enable ports on Firewall"}),"\n",(0,s.jsx)(n.p,{children:"Set up these ports on your firewall:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 26656/tcp\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check firewall status to see if the port has been enabled"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ufw status\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-sentinel-hub",children:"Install Sentinel Hub"}),"\n",(0,s.jsxs)(n.p,{children:["To install Sentinel Hub, please download the latest version from the ",(0,s.jsx)(n.a,{href:"https://github.com/sentinel-official/hub/releases",children:"repository"})," and proceed by executing the following commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"\ncd "${HOME}/sentinelhub"\ngit checkout vX.X.X\nmake install\n\n# For Ubuntu installation\nsudo ln -s "${GOBIN}/sentinelhub" /usr/bin/sentinelhub\n\n# For manual installation\nsudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configure-sentinel-hub",children:"Configure Sentinel Hub"}),"\n",(0,s.jsx)(n.h3,{id:"genesis-file",children:"Genesis File"}),"\n",(0,s.jsx)(n.p,{children:"Let's initialize the Sentinel Hub using the Genesis file, a JSON file which defines the initial state of Sentinel blockchain. The state defined in the genesis file contains all the necessary information, like initial coin allocation, genesis time, default parameters, and more"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sentinelhub init --chain-id sentinelhub-2 "Your Validator Name"\ncurl -fsLS -o "${HOME}/genesis.zip" "https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip"\nunzip -d "${HOME}/.sentinelhub/config/" "${HOME}/genesis.zip"\nrm "${HOME}/genesis.zip"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You will be asked to replace the genesis file, type ",(0,s.jsx)(n.code,{children:"[A]ll"})]}),"\n",(0,s.jsx)(n.p,{children:"In case you need a mirror because the official hosting site does not work, use this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget -O genesis.json https://snapshots.polkachu.com/genesis/sentinel/genesis.json --inet4-only\nmv genesis.json ~/.sentinelhub/config\n"})}),"\n",(0,s.jsx)(n.h3,{id:"edit-the-node-configuration-file",children:"Edit the Node configuration file"}),"\n",(0,s.jsx)(n.p,{children:"Open the config.toml file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano ${HOME}/.sentinelhub/config/config.toml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set seeds and peers separated by comma."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Seeds"}),": are initial entry points for new nodes joining the network and are typically used during the bootstrap phase. In this phase, a new node connects to them to obtain information about the network's topology and to discover other nodes to connect to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Peers"}),": are usually nodes that a given node wants to maintain a reliable and consistent connection with, often because they have specific roles in the network or are deemed important for communication."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can obtain a comprehensive list of seeds both on ",(0,s.jsx)(n.a,{href:"https://dev.mintscan.io/sentinel/info",children:"Mintscan"})," and on the Quokkastake GitHub ",(0,s.jsx)(n.a,{href:"https://github.com/QuokkaStake/ansible/blob/master/group_vars/sentinelhub_2",children:"repository"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="${HOME}/.sentinelhub/config/config.toml"',children:'[p2p]\nseeds = "05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656,387027e3b1180d3a619cbbf3462704a490785963@54.176.90.228:26656,63bd9cfce0f0d274aad5b166dd06d829021aec43@121.78.247.243:56656,855807cc6a919c22ec943050ebb5c80b23724ed0@3.239.11.246:26656,8caefbf8f4318ecc93f2c901cf11470e4a16c818@161.97.135.122:26656,9174af5f16f74660cccf49f893d243949af45f7f@54.177.29.46:26656,9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123@142.93.72.221:26656,a77f6a094578dad899e2f40e0626b4c6d4705311@3.36.165.232:26656,bd45a11390d16d128a9eeea3935b53d7a1a3c120@15.236.127.69:26656,cdb8dd7628460a546ce1594ca0bc0c20366514cf@34.72.64.178:26656,d1efceccb04ded9a604e5235f76da86872157d68@161.97.149.223:26656,e00b23444cc8dbb353d5faa765ab36cfc0116b57@83.60.98.134:28685,e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5@157.90.117.58:26656,f7ceb735606f90df7eb6cd987641876955b6e325@46.4.55.150:36656,ebc272824924ea1a27ea3183dd0b9ba713494f83@sentinel.mainnet.peer.autostake.net:26706,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:23956"\npersistent_peers = "89757803f40da51678451735445ad40d5b15e059@169.155.169.176:26656,8d639d92a6de1032f361ca8deb56a60404b1c41d@65.21.136.170:56656,aae9c4dc31f1b050d1bcd13df0b9d9affc5df361@104.196.120.61:26656,9026bf3d313ef789e614f10eba8c6fcdde2e8768@54.176.220.6:26656,c0dc39bae9bc6cd3f54968f97b52a4ad5adfd37a@htz1.badgerbite.io:56656,b212d5740b2e11e54f56b072dc13b6134650cfb5@169.155.45.136:26656,464d1b0650ee82c975e1e7f40ae737f4f688ae32@178.154.212.189:26656,440d002ecaaf99a53ff551e1add65b60319ae1b3@131.153.175.94:30656,e7b825983d15eef809e929b44b2085dcec9d27b6@51.68.44.219:26556,e1b058e5cfa2b836ddaa496b10911da62dcf182e@23.88.21.228:26656,13a32c4a2bdd78d4017bedb60b1d61a8558b7a88@85.10.211.82:36656,2a426a8a0070a6830bad32b96cd3da1b7b6a2faa@65.108.11.250:29656,471518432477e31ea348af246c0b54095d41352c@169.155.47.161:26656,1ebe18d2d50f6bf548d974afc3e13ccdc9d1a04f@34.148.70.141:26656,ebc272824924ea1a27ea3183dd0b9ba713494f83@95.214.55.198:26706,e407ce1485c5c5abe86d4c4b04f21bc04c321edc@89.58.31.128:36656,905cce9ffa2c87e67288aca631108b20a686088b@195.201.63.87:46656,abc27c91439681b1e7fa4b08b54ebbcc42855973@65.108.195.12:26656,233592737772cf4e8aca29623cb54d53e978bf84@51.159.185.51:26656,1fc1a1219c14f8005116a97b0bc7e6a65a5343a1@35.196.143.233:26656,662ccbd8c9885ddff6800a707da3dc6b0c4ed49d@15.235.115.148:10001,a0b85e69890c142836cd4e14ac520dfc56907249@75.119.134.205:26656,01cf083bf6e4667c4c1d2bb9454a2e06d6d5e415@85.237.193.117:26656,442e7d3d100a91ed2d16c15879b36a8beef7faca@89.58.26.9:26656,c124ce0b508e8b9ed1c5b6957f362225659b5343@134.65.192.134:26656,e726816f42831689eab9378d5d577f1d06d25716@23.88.22.4:26656,44a6007450d5b8292c19e193ab53f5ad9861b60b@46.20.245.42:26656,e1be5e84e6f76bdc4d24d2f39830b6f50857e684@78.107.253.133:33656,4398bd773ac885b7365de3604eb487be10c54563@95.214.55.227:26706,f6e4a9bd29b8629dc93b813ec784114ca604dff8@65.108.238.219:23956"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enable State Sync"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[statesync]\nenable = true\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable Prometheus for data scraping"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'prometheus = true\n\n# Address to listen for Prometheus collector(s) connections\nprometheus_listen_addr = ":26660"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Open the Prometheus port 26660 on Validator firewall which will be accessible only from your monitor machine"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 26660\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open the app.toml file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano ${HOME}/.sentinelhub/config/app.toml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Establish minimum gas prices for udvpn and other supported IBC tokens. You can find the minimum gas prices for udvpn ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/minimum-gas-prices.txt",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="${HOME}/.sentinelhub/config/app.toml"',children:'minimum-gas-prices = "0.01ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,0.1udvpn,0.01ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,0.01ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,0.01ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,s.jsx)(n.p,{children:"Open the sentinelhub.service with a text editor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/sentinelhub.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"Paste the below text"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"sentinelhub.service"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/systemd/system/sentinelhub.service"',children:"[Unit]\nDescription=Sentinel Hub Daemon\nAfter=network.target\n\n[Service]\nUser=sentinel\nType=simple\n\n# For Ubuntu installation\nExecStart=/usr/bin/sentinelhub start\n# For Manual installation\nExecStart=/usr/local/bin/sentinelhub start\n\nRestart=on-failure\nStartLimitInterval=0\nRestartSec=5\nLimitNOFILE=1048576\nLimitMEMLOCK=2048132\n\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Let's make sure to assign ownership of all sentinelhub files to the current user (in our case, 'sentinel')"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo chown -R sentinel:sentinel ~/.sentinelhub\n"})}),"\n",(0,s.jsx)(n.p,{children:"Reload the systemd Daemon"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable autostart of Sentinel Hub service"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable sentinelhub.service\n"})})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>c});var s=a(7294);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);