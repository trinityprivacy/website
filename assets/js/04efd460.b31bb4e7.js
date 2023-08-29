"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var m=2;m<r;m++)s[m]=n[m];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={title:"Setup & Config",sidebar_position:3},s="Setup & Config",o={unversionedId:"sentinelguides/validator/tmkms/setup-config",id:"sentinelguides/validator/tmkms/setup-config",title:"Setup & Config",description:"Installation",source:"@site/docs/sentinelguides/validator/tmkms/setup-config.md",sourceDirName:"sentinelguides/validator/tmkms",slug:"/sentinelguides/validator/tmkms/setup-config",permalink:"/docs/sentinelguides/validator/tmkms/setup-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/tmkms/setup-config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Setup & Config",sidebar_position:3},sidebar:"sentinelSidebar",previous:{title:"Install Dependencies",permalink:"/docs/sentinelguides/validator/tmkms/install-dependencies"},next:{title:"Edit Validator Config",permalink:"/docs/sentinelguides/validator/tmkms/edit-val-config"}},l={},m=[{value:"Installation",id:"installation",level:2},{value:"Transfer Private Validator Key",id:"transfer-private-validator-key",level:2},{value:"TMKMS Config",id:"tmkms-config",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2}],c={toc:m},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup--config"},"Setup & Config"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In this example, we will be compiling from the github source code using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--features=softsign")," flag, however you may use ",(0,a.kt)("inlineCode",{parentName:"p"},"--features=yubihsm")," if you want to use a yubikey (ledger support is not working properly at the moment, and this guide will not go into using yubihsm)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/iqlusioninc/tmkms.git\ncd $HOME/tmkms\ncargo install tmkms --features=softsign\ntmkms init config\ntmkms softsign keygen ./config/secrets/secret_connection_key\n")),(0,a.kt)("h2",{id:"transfer-private-validator-key"},"Transfer Private Validator Key"),(0,a.kt)("p",null,"Now we will transfer your validator private key from your validator to your machine running TMKMS. To do this we will use scp command, but it can also be done manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scp user@validator_ip:~/.sentinelhub/config/priv_validator_key.json ~/tmkms/config/secrets\n")),(0,a.kt)("p",null,"Then, import the private validator key into tmkms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms softsign import $HOME/tmkms/config/secrets/priv_validator_key.json $HOME/tmkms/config/secrets/priv_validator_key\n")),(0,a.kt)("p",null,"This newly created ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key")," will be what TMKMS will use to sign for your validator."),(0,a.kt)("p",null,"Now you can safely remove ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," from your tmkms node and store it safely offline in case of an emergency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /home/myuser/tmkms/config/secrets/priv_validator_key.json\n")),(0,a.kt)("h2",{id:"tmkms-config"},"TMKMS Config"),(0,a.kt)("p",null,"Open the tmkms config file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano $HOME/tmkms/config/tmkms.toml\n")),(0,a.kt)("p",null,"In this example, my validator has the IP address of validator_ip and we will be using port 26659 to feed the validator key to the validator. We will also be using chain_id sentinelhub-2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=$HOME/tmkms/config/tmkms.toml",title:"$HOME/tmkms/config/tmkms.toml"},'# Tendermint KMS configuration file\n\n## Chain Configuration\n\n### Sentinel Network\n\n[[chain]]\nid = "sentinelhub-2"\nkey_format = { type = "bech32", account_key_prefix = "sentpub", consensus_key_prefix = "sentvalconspub" }\nstate_file = "home/myuser/tmkms/config/state/priv_validator_state.json"\n\n## Signing Provider Configuration\n\n### Software-based Signer Configuration\n\n[[providers.softsign]]\nchain_ids = ["sentinelhub-2"]\nkey_type = "consensus"\npath = "/home/myuser/tmkms/config/secrets/priv_validator_key"\n\n## Validator Configuration\n\n[[validator]]\nchain_id = "sentinelhub-2"\naddr = "tcp://validator_ip:26659" #insert validator ip\nsecret_key = "/home/myuser/tmkms/config/secrets/kms-identity.key"\nprotocol_version = "v0.34" #check the version match with the one of your validator\nreconnect = true\n')),(0,a.kt)("h2",{id:"add-a-system-unit-file"},"Add a system unit file"),(0,a.kt)("p",null,"Create the tmkms.service with a text editor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/tmkms.service\n")),(0,a.kt)("p",null,"Paste the below text"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/systemd/system/tmkms.service",title:"/etc/systemd/system/tmkms.service"},"[Unit]\nDescription=TMKMS Daemon\nAfter=network.target\n\n[Service]\nUser=trinity\nType=simple\nExecStart=/home/trinity/.cargo/bin/tmkms start -c /home/trinity/tmkms/config/tmkms.toml\nRestart=on-failure\nStartLimitInterval=0\nRestartSec=5\nLimitNOFILE=1048576\nLimitMEMLOCK=2048132\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"Reload the systemd Daemon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\n")),(0,a.kt)("p",null,"Enable autostart of tmkms service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable tmkms.service\n")))}p.isMDXComponent=!0}}]);