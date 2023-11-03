"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4869],{2636:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=s(5893),i=s(1151);const l={title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",sidebar_position:3},t="Install Golang",r={id:"sentinelguides/validator/golang",title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",source:"@site/docs/sentinelguides/validator/golang.md",sourceDirName:"sentinelguides/validator",slug:"/sentinelguides/validator/golang",permalink:"/docs/sentinelguides/validator/golang",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/golang.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",sidebar_position:3},sidebar:"validatorSidebar",previous:{title:"SSH",permalink:"/docs/sentinelguides/validator/server-setup/ssh"},next:{title:"Install and Configure Full Node",permalink:"/docs/sentinelguides/validator/node-setup"}},o={},d=[{value:"Debian Based Distributions",id:"debian-based-distributions",level:2},{value:"Manually",id:"manually",level:2},{value:"Export Golang environment variables",id:"export-golang-environment-variables",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"install-golang",children:"Install Golang"}),"\n",(0,a.jsx)(n.p,{children:"First of all install some required packages"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y curl git jq make unzip\n"})}),"\n",(0,a.jsx)(n.p,{children:"You now have two methods for installing Golang."}),"\n",(0,a.jsx)(n.h2,{id:"debian-based-distributions",children:"Debian Based Distributions"}),"\n",(0,a.jsx)(n.p,{children:"To install Go on Debian and its derivatives, you can easily follow the steps provided."}),"\n",(0,a.jsx)(n.p,{children:"Add the repository"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository ppa:longsleep/golang-backports\n"})}),"\n",(0,a.jsx)(n.p,{children:"Install Golang"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y golang-go\n"})}),"\n",(0,a.jsx)(n.h2,{id:"manually",children:"Manually"}),"\n",(0,a.jsx)(n.p,{children:"This method should work on all Linux systems, although it is intended for more experienced users."}),"\n",(0,a.jsx)(n.p,{children:"Get a copy of the last Golang version and unpack it"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ~ && \\\ncurl -OL https://golang.org/dl/go1.21.3.linux-amd64.tar.gz && \\\ntar -C ${HOME} -xvf go1.21.3.linux-amd64.tar.gz\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Move the extracted go into ",(0,a.jsx)(n.code,{children:"/usr/local/lib/go"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo mv ${HOME}/go /usr/local/lib/go\n"})}),"\n",(0,a.jsx)(n.h2,{id:"export-golang-environment-variables",children:"Export Golang environment variables"}),"\n",(0,a.jsx)(n.p,{children:"Now that you've successfully installed Golang, it's essential to configure its environmental variables."}),"\n",(0,a.jsx)(n.p,{children:"Open the .bashrc file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo nano ${HOME}/.bashrc\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you installed Golang via PPA, add this line:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export GOROOT=/usr/lib/go\n"})}),"\n",(0,a.jsx)(n.p,{children:"Otherwise, add this line"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export GOROOT=/usr/local/lib/go\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then add these lines below to the file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"title=${HOME}/.bashrc",children:"export GOPATH=${HOME}/go\nexport GOBIN=${GOPATH}/bin\nexport PATH=${PATH}:${GOROOT}/bin:${GOBIN}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Source the file to reflect changes in the current Terminal session."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.bashrc\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var a=s(7294);const i={},l=a.createContext(i);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);