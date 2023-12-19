"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7239],{6852:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(5893),s=n(1151);const r={title:"Cosmos Validator Exporter",sidebar_position:3},a="Cosmos Validator Exporter",i={id:"sentinelguides/monitoring/exporters/cosmos-validator-exporter",title:"Cosmos Validator Exporter",description:"Cosmos Validator Exporter can be used to create a dashboard for one or multiple validators, enabling you to visualize essential metrics such as the total staked amount, delegator count, and more. Additionally, you can set up alerts for various validator metrics, including their status, ranking, total staked amount, and more.",source:"@site/docs/sentinelguides/monitoring/exporters/cosmos-validator-exporter.md",sourceDirName:"sentinelguides/monitoring/exporters",slug:"/sentinelguides/monitoring/exporters/cosmos-validator-exporter",permalink:"/docs/sentinelguides/monitoring/exporters/cosmos-validator-exporter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Cosmos Validator Exporter",sidebar_position:3},sidebar:"monitoringSidebar",previous:{title:"Tendermint Internal Metrics",permalink:"/docs/sentinelguides/monitoring/exporters/tendermint-internal-metrics"},next:{title:"Cosmos Node Exporter",permalink:"/docs/sentinelguides/monitoring/exporters/cosmos-node-exporter"}},l={},d=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Create a Config file",id:"create-a-config-file",level:2},{value:"Add the Job to Prometheus Config file",id:"add-the-job-to-prometheus-config-file",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Cosmos Validator Exporter service",id:"start-cosmos-validator-exporter-service",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"cosmos-validator-exporter",children:"Cosmos Validator Exporter"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://github.com/QuokkaStake/cosmos-validators-exporter",children:"Cosmos Validator Exporter"})," can be used to create a dashboard for one or multiple validators, enabling you to visualize essential metrics such as the total staked amount, delegator count, and more. Additionally, you can set up alerts for various validator metrics, including their status, ranking, total staked amount, and more."]}),"\n",(0,t.jsx)(o.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,t.jsxs)(o.p,{children:["To get started, begin by downloading the most recent ",(0,t.jsx)(o.a,{href:"https://github.com/QuokkaStake/cosmos-validators-exporter/releases",children:"release"}),". Once the download is complete, proceed to unzip the file, and you'll be all set to proceed."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mkdir cosmos-validator-exporter\ncd cosmos-validator-exporter\nwget https://github.com/QuokkaStake/cosmos-validators-exporter/releases/download/v5.1.0/cosmos-validators-exporter_5.1.0_linux_amd64.tar.gz\ntar xvfz cosmos-validators-exporter_5.1.0_linux_amd64.tar.gz\nsudo rm -f cosmos-validators-exporter_5.1.0_linux_amd64.tar.gz\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Add a symbolic link to the ",(0,t.jsx)(o.code,{children:"/usr/local/bin/"})," directory for system-wide access to Cosmos Validator Exporter:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo ln -s /home/<your_user>/cosmos-validator-exporter/cosmos-validator-exporter /usr/local/bin/\n"})}),"\n",(0,t.jsx)(o.h2,{id:"create-a-config-file",children:"Create a Config file"}),"\n",(0,t.jsxs)(o.p,{children:["Inside your ",(0,t.jsx)(o.code,{children:"cosmos-validator-exporter"})," directory create the config file:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo nano config.toml\n"})}),"\n",(0,t.jsx)(o.p,{children:"Paste the following code in it making sure to add your sentvaloper and sentvalcons addresses:"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"config.toml"}),(0,t.jsx)("p",{children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",metastring:'title="/home/<your_user>/cosmos-validator-exporter/config.toml"',children:'# Global timeout for RPC queries, in seconds. Defaults to 5.\ntimeout = 5\n# The address the exporter will listen on .Defaults to ":9560".\nlisten-address = ":9560"\n\n# Logging config\n[log]\n# Log level. Change it to "debug" or even trace for more verbosity and debugging. Defaults to "info".\nlevel = "debug"\n# Whether all the logs should be written in JSON instead of a pretty-printed text. Useful if you have\n# logging solutions, like ELK. Defaults to false.\njson = false\n\n# Per-chain config.\n[[chains]]\n# Chain name that will go into labels. Required.\nname = "sentinel"\n# LCD endpoint to query data from. Required.\nlcd-endpoint = "https://api.sentinel.quokkastake.io"\n# Coingecko currency, specify it if you want to also get the wallet balance\n# in total in USD.\ncoingecko-currency = "sentinel"\n# dexscreener.com\'s chain ID (usually ""osmosis") and pair (usually pool ID).\n# Won\'t be used if coingecko-currency is provided.\n# Either coingecko-currency or these two params are required for getting token price.\ndex-screener-chain-id = "osmosis"\ndex-screener-pair = "5"\n# The chain\'s base denom. Only balances with this denom will be used\n# to calculate wallet\'s USD price.\nbase-denom = "udvpn"\n# The chain\'s display denom.\ndenom = "dvpn"\n# The coefficient you need to multiply base denom to to get 1 token on Coingecko.\n# Example: on Cosmos network the base denom is uatom, 1 atom = 1_000_000 uatom\n# and 1 atom on Coingecko = $10, and your wallet has 10 atom, or 10_000_000 uatom.\n# Then you need to specify the following parameters:\n# coingecko-currency = "cosmos-hub"\n# base-denom = "uatom"\n# denom-coefficient = 1000000\n# and after that, the /metrics endpoint will return your total balance as $100.\n# Defaults to 1000000\ndenom-coefficient = 1000000\n# Bech32 prefix for a wallet address (example: "cosmos" for a Cosmos wallet). If omitted,\n# the self-delegation metric will not be present.\nbech-wallet-prefix = "sent"\n# List of validators to monitor.\n# Address is required, consensus-address is optional but will result in omitting\n# signing-infos metrics (like missed blocks counter).\n# You can get your consensus-address by running "<appd> tendermint show-address" on your validator node,\n# if you are not using KMS solutions.\nvalidators = [\n    { address = "<your_sentvaloper_address>", consensus-address = "<your_sentvalcons_address>" }\n]\n# List of queries to enable/disable.\n# If the list is not provided, or the value for query is not specified,\n# then this query will be enabled. Useful if some queries on some chains are broken or\n# do not return any meaningful value (like signing info on e-Money) or are too heavy and\n# the node can\'t handle such requests (like delegators count on Cosmos Hub).\n[chains.queries]\n# Query for validator info\nvalidator = true\n# Query for delegators count\ndelegations = true\n# Query for unbonding delegations count\nunbonds = true\n# Query for self-delegated amount\nself-delegation = true\n# Query for all delegators count/ranking. Also used in total bonded tokens calculation.\nvalidators = true\n# Query for validator unclaimed commission\ncommission = true\n# Query for validator unclaimed self-delegated rewards\nrewards = true\n# Query for validator wallet balance\nbalance = true\n# Query for validator signing info\nsigning-info = true\n# Query for chain slashing params/missed blocks window\nslashing-params = true\n# Query for chain staking params/max validators count\nstaking-params = true\n'})})})]}),"\n",(0,t.jsx)(o.h2,{id:"add-the-job-to-prometheus-config-file",children:"Add the Job to Prometheus Config file"}),"\n",(0,t.jsx)(o.p,{children:"Go to your prometheus directory and open your prometheus.yml file"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo nano prometheus.yml\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Add the cosmos validator exporter job into it, under ",(0,t.jsx)(o.code,{children:"scrape_configs"})," block"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:' # Cosmos Validator Exporter\n  - job_name: "cosmos-validator-exporter"\n\n    static_configs:\n      - targets: ["<your_validator_ip>:9560"]\n'})}),"\n",(0,t.jsx)(o.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,t.jsx)(o.p,{children:"Create the .service file with a text editor"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/cosmos-validator-exporter.service\n"})}),"\n",(0,t.jsx)(o.p,{children:"Paste the below text"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"cosmos-validator-exporter.service"}),(0,t.jsx)("p",{children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",metastring:'title="/etc/systemd/system/cosmos-validator-exporter.service"',children:"[Unit]\nDescription=Cosmos Validator Exporter\nAfter=network-online.target\n\u200b\n[Service]\nUser=<your_user> #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=cosmos-validator-exporter --config /home/<your-user>/cosmos-validator-exporter/config.toml\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,t.jsx)(o.p,{children:"Reload the systemd Daemon"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,t.jsx)(o.p,{children:"Enable autostart of Cosmos Validator Exporter service"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo systemctl enable cosmos-validator-exporter.service\n"})}),"\n",(0,t.jsx)(o.h2,{id:"start-cosmos-validator-exporter-service",children:"Start Cosmos Validator Exporter service"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo systemctl start cosmos-validator-exporter.service\n"})}),"\n",(0,t.jsx)(o.p,{children:"Use this command to check logs in real time"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo journalctl -u cosmos-validator-exporter.service -f --output cat\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Once the Cosmos Validator Exporter is installed and running, you can verify that ",(0,t.jsx)(o.code,{children:"metrics"})," are being exported by cURLing the /metrics endpoint:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"curl http://localhost:9560/metrics\n"})}),"\n",(0,t.jsx)(o.p,{children:"Success! Cosmos Validator Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output."}),"\n",(0,t.jsxs)(o.admonition,{title:"Important",type:"danger",children:[(0,t.jsx)(o.p,{children:"After successfully installing and launching Cosmos Validator Exporter, the next step is to open port 9560 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Cosmos Validator Exporter."}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 9560\n"})})]})]})}function u(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>i,a:()=>a});var t=n(7294);const s={},r=t.createContext(s);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);