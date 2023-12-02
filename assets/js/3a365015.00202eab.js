"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[1757],{9762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(5893),r=t(1151);const o={title:"Prometheus",description:"A tool that collects your metrics from Node Exporter",sidebar_position:3},a="Prometheus",i={id:"sentinelguides/monitoring/prometheus",title:"Prometheus",description:"A tool that collects your metrics from Node Exporter",source:"@site/docs/sentinelguides/monitoring/prometheus.md",sourceDirName:"sentinelguides/monitoring",slug:"/sentinelguides/monitoring/prometheus",permalink:"/docs/sentinelguides/monitoring/prometheus",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Prometheus",description:"A tool that collects your metrics from Node Exporter",sidebar_position:3},sidebar:"monitoringSidebar",previous:{title:"Cosmos Node Exporter",permalink:"/docs/sentinelguides/monitoring/exporters/cosmos-node-exporter"},next:{title:"Grafana",permalink:"/docs/sentinelguides/monitoring/grafana"}},l={},c=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Edit the config file",id:"edit-the-config-file",level:2},{value:"Create the web authentication file",id:"create-the-web-authentication-file",level:2},{value:"Create the gen-pass file",id:"create-the-gen-pass-file",level:3},{value:"Create the file web.yml",id:"create-the-file-webyml",level:3},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Node Exporter service",id:"start-node-exporter-service",level:2},{value:"Node Exporter on Monitoring machine",id:"node-exporter-on-monitoring-machine",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"prometheus",children:"Prometheus"}),"\n",(0,s.jsx)(n.p,{children:"Prometheus is a monitoring application that must be installed on a separate monitoring machine"}),"\n",(0,s.jsx)(n.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,s.jsxs)(n.p,{children:["On your monitoring machine, download and unpack Prometheus (check the last version ",(0,s.jsx)(n.a,{href:"https://prometheus.io/download/#prometheus",children:"here"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/prometheus/prometheus/releases/download/v2.42.0/prometheus-2.42.0.linux-amd64.tar.gz\ntar xvfz prometheus-2.42.0.linux-amd64.tar.gz\n"})}),"\n",(0,s.jsx)(n.p,{children:"Rename the folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mv prometheus-2.42.0.linux-amd64 prometheus\n"})}),"\n",(0,s.jsx)(n.h2,{id:"edit-the-config-file",children:"Edit the config file"}),"\n",(0,s.jsx)(n.p,{children:"Open the config file .yml"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano /home/user/prometheus/prometheus.yml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add your Validator machine and your local machine as well to the list of scrape targets in the configuration file to enable Prometheus to collect metrics from them"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="/home/user/prometheus/prometheus.yml"',children:'scrape_configs:\n  # Monitoring Node with prometheus installed\n  - job_name: "monitor-hardware-metrics"\n\u200b\n    # current machine ip and port\n    static_configs:\n      - targets: ["localhost:9100"]\n\u200b\n  # Validator Host Hardware Metrics\n  - job_name: "validator-hardware-metrics"\n\u200b\n    # validator ip and port\n    static_configs:\n      - targets: ["validator_ip:9100"]\n\u200b\n # Validator Internal Metrics\n  - job_name: "validator-internal-metrics"\n\u200b\n    # validator ip and port\n    static_configs:\n      - targets: ["validator_ip:26660"]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"create-the-web-authentication-file",children:"Create the web authentication file"}),"\n",(0,s.jsx)(n.p,{children:"First we need to have bcrypt tools installed (can be on any device) to generate a hash of your login password."}),"\n",(0,s.jsx)(n.h3,{id:"create-the-gen-pass-file",children:"Create the gen-pass file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano gen-pass.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"Paste the following text"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="gen-pass.py"',children:'import getpass\nimport bcrypt\n\u200b\npassword = getpass.getpass("password: ")\nhashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())\nprint(hashed_password.decode())\n'})}),"\n",(0,s.jsx)(n.p,{children:"Save the file and execute the pythin script"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 gen-pass.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will be prompted for a password. Please enter it, and you will be provided with the encrypted password that you need to copy. Please see the example below"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"password: test\n$2a$12$1VqNbIcQya1KjObYiDvFz.024poXtE1S9gQfs0fD8uATCeOv6/PgK\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-the-file-webyml",children:"Create the file web.yml"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano /home/user/prometheus/web.yml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add your authentication to access Prometheus metrics. Replace ",(0,s.jsx)(n.code,{children:"<password>"})," with the encrypted password you got from your ",(0,s.jsx)(n.code,{children:"gen-pass.py"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="/home/user/prometheus/web.yml"',children:"basic_auth_users:\n    admin: <password>\n"})}),"\n",(0,s.jsx)(n.p,{children:"(optional) You can now validate the file web.yml with this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"promtool check web-config web.yml\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should get the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"web.yml SUCCESS\n"})}),"\n",(0,s.jsx)(n.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,s.jsx)(n.p,{children:"Open the .service with a text editor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/prometheus.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"Paste the below text"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title=/etc/systemd/system/prometheus.service",children:"[Unit]\nDescription=Preometheus\nAfter=network-online.target\n\u200b\n[Service]\nUser=youruser #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=/home/youruser/prometheus/prometheus --config.file=/home/youruser/prometheus/prometheus.yml --web.config.file=/home/trinity/prometheus/web.yml --storage.tsdb.path=/home/youruser/prometheus/data\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.p,{children:"Reload the systemd Daemon"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable autostart of Node Exporter service"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable prometheus.service\n"})}),"\n",(0,s.jsx)(n.h2,{id:"start-node-exporter-service",children:"Start Node Exporter service"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start prometheus.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"Use this command to check logs in real time"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u prometheus.service -f\n"})}),"\n",(0,s.jsx)(n.p,{children:"After installing and running Prometheus, you can verify whether metrics are being exported from Node Exporter to Prometheus by using cURL to request the /metrics endpoint on Prometheus port 9090 (you need to insert the password created before)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -u admin http://localhost:9090/metrics\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you are running Prometheus on a VPS and want to access the web UI via an external browser, you need to first enable port 9090 on ufw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 9090/tcp\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then you can know type this address on your browser"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"https://prometheus_ip:9090/graph\n"})}),"\n",(0,s.jsx)(n.h3,{id:"node-exporter-on-monitoring-machine",children:"Node Exporter on Monitoring machine"}),"\n",(0,s.jsx)(n.p,{children:"You can also consider installing a Node Exporter on your monitoring machine so that you can monitor it too. This way, if something breaks, you can be alerted about it and take appropriate action"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(7294);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);