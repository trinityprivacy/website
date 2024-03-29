"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[8901],{7281:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=a(5893),s=a(1151);const t={title:"Useful Commands",description:"A list explaining some useful commands along with their outputs.",sidebar_position:8},d="Useful Commands",o={id:"validator/other-cmd",title:"Useful Commands",description:"A list explaining some useful commands along with their outputs.",source:"@site/docs/validator/other-cmd.md",sourceDirName:"validator",slug:"/validator/other-cmd",permalink:"/docs/validator/other-cmd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Useful Commands",description:"A list explaining some useful commands along with their outputs.",sidebar_position:8},sidebar:"validatorSidebar",previous:{title:"Save Your Keys!",permalink:"/docs/validator/save-keys"},next:{title:"TMKMS Setup",permalink:"/docs/category/tmkms-setup"}},c={},l=[{value:"Slashing Params List",id:"slashing-params-list",level:2},{value:"Signing Info",id:"signing-info",level:2},{value:"Validator &amp; Sync Info",id:"validator--sync-info",level:2},{value:"Connected Peers",id:"connected-peers",level:2}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"useful-commands",children:"Useful Commands"}),"\n",(0,i.jsx)(n.p,{children:"A list explaining some useful commands along with their outputs."}),"\n",(0,i.jsx)(n.h2,{id:"slashing-params-list",children:"Slashing Params List"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelhub q slashing params\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output looks like"}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Example Output"}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Slashing Params"',children:'downtime_jail_duration: 600s\nmin_signed_per_window: "0.050000000000000000"\nsigned_blocks_window: "10000"\nslash_fraction_double_sign: "0.050000000000000000"\nslash_fraction_downtime: "0.000100000000000000"\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"It basically explains the rules to avoid being jailed."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There is a window of 10k blocks (signed_blocks_window)."}),"\n",(0,i.jsx)(n.li,{children:"Any validator needs to sign 5% (min_signed_per_window) of the blocks in this window (i.e., 500 blocks within any 10k blocks window)."}),"\n",(0,i.jsx)(n.li,{children:"If the percentage of signed blocks falls below 5, the validator is jailed for downtime."}),"\n",(0,i.jsx)(n.li,{children:"If a validator is jailed for downtime, they are slashed 0.01% (slash_fraction_downtime) of their stake and can be unjailed after 10 minutes (downtime_jail_duration)."}),"\n",(0,i.jsx)(n.li,{children:"If a validator is jailed for a double sign, they are slashed 5% (slash_fraction_double_sign) and cannot unjail ever."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"signing-info",children:"Signing Info"}),"\n",(0,i.jsx)(n.p,{children:"This command retrieves the signing information of the validator using its consensus public key"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sentinelhub query slashing signing-info $(sentinelhub tendermint show-validator)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Upon execution, you will receive an output similar to the following:"}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Example Output"}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Signing Info"',children:'address: sentvalcons1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nindex_offset: "11513"\njailed_until: "1970-01-01T00:00:00Z" #(if different from this, means you are jailed)\nmissed_blocks_counter: "5" #how many blocks you skipped within the 10k blocks window\nstart_height: "9982764"\ntombstoned: false #if true, means you double signed\n'})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Please be aware that if you are utilizing ",(0,i.jsx)(n.a,{href:"/docs/category/tmkms-setup",children:"TMKMS"}),", since it typically resides on a separate machine, the aforementioned command will not function as expected. To ensure its execution, you must navigate to ",(0,i.jsx)(n.a,{href:"https://ping.pub/sentinel/staking/sentvaloper1nygcr5p33plzq4akfxnl3nr7nf59gnshnwf0ln",children:"ping.pub"}),", extract the Consensus Public Key, and subsequently paste it into the following command for execution:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sentinelhub query slashing signing-info \'{"@type":"/cosmos.crypto.ed25519.PubKey","key":"M2sRH0zuP/2wqnDR7lkK/Qbb+CZdWHYYRjhyM9yX0IY="}\'\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"validator--sync-info",children:"Validator & Sync Info"}),"\n",(0,i.jsx)(n.p,{children:"This command provides comprehensive information regarding your validator, including its synchronization status and other relevant details."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl --silent "http://localhost:26657/status" | jq -S\n'})}),"\n",(0,i.jsx)(n.p,{children:"When you receive the output, check the following fields:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sync_info.catching_up #if true, it means your node is not synced and therefore it will not sign blocks until it catches up with the rest of the chain\nsync_info.latest_block_time #the value should be close to the current time. If it's not, that means your node is also out of sync and won't be able to sign blocks (or the chain has halted).\nvalidator_info.voting_power #If the value is 0, this node is not an active validator, either because you are not in the active set, or because you are jailed, or because the priv_validator_key does not match the validator key\n"})}),"\n",(0,i.jsx)(n.h2,{id:"connected-peers",children:"Connected Peers"}),"\n",(0,i.jsx)(n.p,{children:"This command provides you with the list of peers to which the validator is currently connected."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -sS http://localhost:26657/net_info | jq -r '.result.peers[] | \"\\(.node_info.id)@\\(.remote_ip):\\(.node_info.listen_addr)\"' | awk -F ':' '{print $1\":\"$(NF)}'\n"})}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Example Output"}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Connected Peers"',children:"464d1b0650ee82c975e1e7f40ae737f4f688ae32@178.154.212.189:26656\n356e02cf1bb1df0e34e5c9f0470c0ad677bee6d6@185.150.26.184:26656\n18248ce04952a7e8fab4092eeabff97f6faaeca5@172.105.118.223:26656\n182c428b5ff02dc44bdc20a782b28f0cea204bd4@170.39.193.124:26656\n1154ef380c350885aef8a2fae6dc308f6844594a@65.108.6.54:50656\n89757803f40da51678451735445ad40d5b15e059@169.155.169.176:26656\ndd51ff321f29b59b51eedb8682acb3a9f07d44a6@138.201.131.133:26656\n442e7d3d100a91ed2d16c15879b36a8beef7faca@89.58.26.9:26656\nd1f02ec2c3447e7a218ece5a2aab8f114dece309@167.114.118.234:26796\n6b9054afcd76719a4262694478ede8233e6bd7fb@168.119.64.123:26656\n9045af707b492d02d05a7865a126d80d15627d91@65.109.97.51:26656\n4398bd773ac885b7365de3604eb487be10c54563@95.214.55.227:26706\n11dd817e50479f928a52cf16e07dfb0e207a4772@45.77.62.130:26656\nca2c8aa924b7b74e86eac5fe06c61d9cceb55cb1@65.21.106.116:26656\nf6f60444040f9f2067519d3f1a1e6c8094cf5664@49.12.154.6:26656\naac50c78fcafc5d87c8cfb8fe25d476b3db6182e@66.172.36.134:26656\n493c4bee520125dea7b93bbe054b0e3918130f3f@46.38.251.243:26656\ne1be5e84e6f76bdc4d24d2f39830b6f50857e684@78.107.253.133:33656\nf6e4a9bd29b8629dc93b813ec784114ca604dff8@65.108.238.219:23956\n6198aba1915d01d0e2306bb9b0c502e4d0f788c2@65.109.106.169:26656\n5ace0e57784e34930360bf6cc00dd5265278f708@65.108.238.166:23956\n45ed1c0498e1ba7894e1362d533583b8c0fa1ae7@136.243.67.189:23956\n34d05f43ce549e411a92caf46385d03746f4e1fe@167.86.71.15:26656\nf0e52da07b2de80d751108ae63c6b2f25b4685a7@23.88.77.182:23956\n1f95bc704608d6f3d42bfce58e0fefbaef818891@89.149.218.78:26656\nadad660c3110c10ca0e2f5e434c2f54b9dcb4e60@212.95.53.148:26656\n6a535c17deedfa178c8bb9c863b0f646e42f978e@163.172.74.144:26656\n9c42bcb0d931b6387b4f808f540139bcd5bda968@131.153.174.14:53656\n871fe7eace6b94e1908faa33ff09eeb7146ae0a4@158.247.240.241:15100\nebc272824924ea1a27ea3183dd0b9ba713494f83@195.3.223.168:26706\nb60ca3f9ec0d72773ed3ea10bdc7acb90e05dea2@51.161.87.126:26656\n79d1dd52fd031dfe4bcb849a39c02b145f12bd8f@38.46.221.75:26656\nac092664a2d27df24393884bce160993bd252145@95.214.52.201:36656\n6de4634676e4940ed31bd3e4fde4476e153e466e@95.216.102.124:26656\n578993078e27b2b5f0c205becd3ad263fb9c366b@192.99.4.66:26796\nac1decda72d73a418330fe31a3d6ba012ca528ab@89.163.152.142:16646\n471518432477e31ea348af246c0b54095d41352c@169.155.47.161:26656\n3bbf71ce33504686947d0138405c673a25555738@188.34.151.176:26656\nef48f35580cf0034e12ca05eafd202a0cc0b577b@75.119.148.134:26656\n7a665a9130537c8ad1b01924b776210b1d39313c@213.227.164.85:26656\n4e1c2471efb89239fb04a4b75f9f87177fd91d00@169.155.171.37:26656\n66d0d22dc5e1e542c200da1fc097dae5ea1f3b4e@195.201.175.156:17256\n79fe75a45a0e917bb81735fa76d59386c8d4934c@159.89.12.179:26656\n"})})})]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>d});var i=a(7294);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);