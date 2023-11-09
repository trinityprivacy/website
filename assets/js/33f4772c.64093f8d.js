"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[6070],{4490:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var o=s(5893),t=s(1151);const d={title:"Run the Node",description:"Start your node",sidebar_position:6},r=void 0,i={id:"sentinelguides/node/manual/node-run",title:"Run the Node",description:"Start your node",source:"@site/docs/sentinelguides/node/manual/node-run.md",sourceDirName:"sentinelguides/node/manual",slug:"/sentinelguides/node/manual/node-run",permalink:"/docs/sentinelguides/node/manual/node-run",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/node/manual/node-run.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Run the Node",description:"Start your node",sidebar_position:6},sidebar:"nodeSidebar",previous:{title:"Node Configuration",permalink:"/docs/sentinelguides/node/manual/node-config"},next:{title:"Monitoring with Uptime Kuma",permalink:"/docs/sentinelguides/node/manual/uptime-kuma"}},c={},a=[{value:"Enabling Autorestart Function",id:"enabling-autorestart-function",level:2},{value:"Wireguard",id:"wireguard",level:3},{value:"V2Ray",id:"v2ray",level:3},{value:"Without Autorestart Function",id:"without-autorestart-function",level:2},{value:"Create a Screen session",id:"create-a-screen-session",level:3},{value:"Run the Node",id:"run-the-node",level:3},{value:"Detach from the screen session",id:"detach-from-the-screen-session",level:3},{value:"Post Node Run Commands",id:"post-node-run-commands",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Running a node can be done in two ways: with or without the autorestart function. If you do not want to use it, you need to use a screen session to detach from the node after launching the docker run command."}),"\n",(0,o.jsx)(n.h2,{id:"enabling-autorestart-function",children:"Enabling Autorestart Function"}),"\n",(0,o.jsxs)(n.p,{children:["To use autorestart function you must have set ",(0,o.jsx)(n.code,{children:"backend='test'"})," on ",(0,o.jsx)(n.code,{children:"config.toml"})," file. This is the easiest way, as it doesn't require the passphrase to be entered every time the node stops for any reason. However, it's worth noting that this solution is not recommended."]}),"\n",(0,o.jsx)(n.h3,{id:"wireguard",children:"Wireguard"}),"\n",(0,o.jsxs)(n.p,{children:["To run the node, use the following command and remember to include the ports you chose in your ",(0,o.jsx)(n.code,{children:"config.toml"})," and ",(0,o.jsx)(n.code,{children:"wireguard.toml"})," files (in this example, replace ",(0,o.jsx)(n.code,{children:"<API_PORT>"})," with ",(0,o.jsx)(n.code,{children:"7777"})," and ",(0,o.jsx)(n.code,{children:"<WIREGUARD_PORT>"})," with ",(0,o.jsx)(n.code,{children:"8888"})," (without the ",(0,o.jsx)(n.code,{children:"'<'"})," and ",(0,o.jsx)(n.code,{children:"'>'"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\n    --name sentinel-dvpn-node \\\n    --restart unless-stopped \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    --volume /lib/modules:/lib/modules \\\n    --cap-drop ALL \\\n    --cap-add NET_ADMIN \\\n    --cap-add NET_BIND_SERVICE \\\n    --cap-add NET_RAW \\\n    --cap-add SYS_MODULE \\\n    --sysctl net.ipv4.ip_forward=1 \\\n    --sysctl net.ipv6.conf.all.disable_ipv6=0 \\\n    --sysctl net.ipv6.conf.all.forwarding=1 \\\n    --sysctl net.ipv6.conf.default.forwarding=1 \\\n    --publish <API_PORT>:<API_PORT>/tcp \\\n    --publish <WIREGUARD_PORT>:<WIREGUARD_PORT>/udp \\\n    sentinel-dvpn-node process start\n"})}),"\n",(0,o.jsx)(n.h3,{id:"v2ray",children:"V2Ray"}),"\n",(0,o.jsxs)(n.p,{children:["To run the node, use the following command and remember to include the ports you chose in your ",(0,o.jsx)(n.code,{children:"config.toml"})," and ",(0,o.jsx)(n.code,{children:"v2ray.toml"})," files (in this example, replace ",(0,o.jsx)(n.code,{children:"<API_PORT>"})," with ",(0,o.jsx)(n.code,{children:"7777"})," and ",(0,o.jsx)(n.code,{children:"<V2RAY_PORT>"})," with ",(0,o.jsx)(n.code,{children:"9999"})," (without the ",(0,o.jsx)(n.code,{children:"'<'"})," and ",(0,o.jsx)(n.code,{children:"'>'"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'docker run -d \\\n    --restart unless-stopped \\\n    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \\\n    --publish <API_PORT>:<API_PORT>/tcp \\\n    --publish <V2RAY_PORT>:<V2RAY_PORT>/tcp \\\n    sentinel-dvpn-node process start\n'})}),"\n",(0,o.jsx)(n.h2,{id:"without-autorestart-function",children:"Without Autorestart Function"}),"\n",(0,o.jsx)(n.p,{children:"If you prefer not to initiate your node using the autorestart function, you should employ a screen session to detach from the node after executing the docker run command."}),"\n",(0,o.jsx)(n.h3,{id:"create-a-screen-session",children:"Create a Screen session"}),"\n",(0,o.jsx)(n.p,{children:"Before running the node, we recommend starting a screen session to run the Docker command. First, install the screen package"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install screen\n"})}),"\n",(0,o.jsx)(n.p,{children:"Open a new screen session with the following command (\"dvpn' is the session name)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"screen -t dvpn -S dvpn\n"})}),"\n",(0,o.jsx)(n.p,{children:"Use the appropriate command to run the node based on the node type specified in the config.toml file. Wireguard To run the node, use the following command and remember to include the TCP and UDP ports"}),"\n",(0,o.jsx)(n.h3,{id:"run-the-node",children:"Run the Node"}),"\n",(0,o.jsx)(n.p,{children:"Depending on the protocol you have selected, run the corresponding command"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Wireguard"})}),"\n",(0,o.jsxs)(n.p,{children:["To run the node, use the following command and remember to include the ports you chose in your ",(0,o.jsx)(n.code,{children:"config.toml"})," and ",(0,o.jsx)(n.code,{children:"wireguard.toml"})," files (in this example, replace ",(0,o.jsx)(n.code,{children:"<API_PORT>"})," with ",(0,o.jsx)(n.code,{children:"7777"})," and ",(0,o.jsx)(n.code,{children:"<WIREGUARD_PORT>"})," with ",(0,o.jsx)(n.code,{children:"8888"})," (without the ",(0,o.jsx)(n.code,{children:"'<'"})," and ",(0,o.jsx)(n.code,{children:"'>'"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run --rm \\\n    --name sentinel-dvpn-node \\\n    --interactive \\\n    --tty \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    --volume /lib/modules:/lib/modules \\\n    --cap-drop ALL \\\n    --cap-add NET_ADMIN \\\n    --cap-add NET_BIND_SERVICE \\\n    --cap-add NET_RAW \\\n    --cap-add SYS_MODULE \\\n    --sysctl net.ipv4.ip_forward=1 \\\n    --sysctl net.ipv6.conf.all.disable_ipv6=0 \\\n    --sysctl net.ipv6.conf.all.forwarding=1 \\\n    --sysctl net.ipv6.conf.default.forwarding=1 \\\n    --publish <API_PORT>:<API_PORT>/tcp \\\n    --publish <WIREGUARD_PORT>:<WIREGUARD_PORT>/udp \\\n    sentinel-dvpn-node process start\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"V2Ray"})}),"\n",(0,o.jsxs)(n.p,{children:["To run the node, use the following command and remember to include the ports you chose in your ",(0,o.jsx)(n.code,{children:"config.toml"})," and ",(0,o.jsx)(n.code,{children:"v2ray.toml"})," files (in this example, replace ",(0,o.jsx)(n.code,{children:"<API_PORT>"})," with ",(0,o.jsx)(n.code,{children:"7777"})," and ",(0,o.jsx)(n.code,{children:"<V2RAY_PORT>"})," with ",(0,o.jsx)(n.code,{children:"9999"})," (without the ",(0,o.jsx)(n.code,{children:"'<'"})," and ",(0,o.jsx)(n.code,{children:"'>'"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'docker run --rm \\\n    --interactive \\\n    --tty \\\n    --volume "${HOME}/.sentinelnode:/root/.sentinelnode" \\\n    --publish <API_PORT>:<API_PORT>/tcp \\\n    --publish <V2RAY_PORT>:<V2RAY_PORT>/tcp \\\n    sentinel-dvpn-node process start\n'})}),"\n",(0,o.jsx)(n.h3,{id:"detach-from-the-screen-session",children:"Detach from the screen session"}),"\n",(0,o.jsx)(n.p,{children:"Detach from the node screen session"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ctrl+a+d\n"})}),"\n",(0,o.jsx)(n.p,{children:"To re-attach to the session type"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"screen -x dvpn\n"})}),"\n",(0,o.jsx)(n.h2,{id:"post-node-run-commands",children:"Post Node Run Commands"}),"\n",(0,o.jsx)(n.p,{children:"Check if the node is running and visible to everyone. Open your browser and type the following URL"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"https://ip_node:tcp_port/status\n"})}),"\n",(0,o.jsx)(n.p,{children:"Node logs. You can specify a different number of logs if you need to view more or fewer entries"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker logs -f -n 100 sentinel-dvpn-node\n"})}),"\n",(0,o.jsx)(n.p,{children:"Container list/details"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker ps -a\n"})}),"\n",(0,o.jsx)(n.p,{children:"Restart a node (it stops and starts the node)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker restart sentinel-dvpn-node\n"})}),"\n",(0,o.jsx)(n.p,{children:"Stop a node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker stop sentinel-dvpn-node\n"})}),"\n",(0,o.jsx)(n.p,{children:"Start a stopped node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker start sentinel-dvpn-node\n"})}),"\n",(0,o.jsx)(n.p,{children:"Remove a node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker rm -f sentinel-dvpn-node\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var o=s(7294);const t={},d=o.createContext(t);function r(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);