"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7605],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Add a Validator Image",sidebar_position:14},i="Add a Validator Image",l={unversionedId:"sentinelguides/validator/image",id:"sentinelguides/validator/image",title:"Add a Validator Image",description:"In order to have your validator profile image displayed on the most commonly used Cosmos blockchain explorers, you need to follow two different procedures",source:"@site/docs/sentinelguides/validator/image.md",sourceDirName:"sentinelguides/validator",slug:"/sentinelguides/validator/image",permalink:"/docs/sentinelguides/validator/image",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/image.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Add a Validator Image",sidebar_position:14},sidebar:"sentinelSidebar",previous:{title:"Add RPC to Chain Registry",permalink:"/docs/sentinelguides/validator/rpc/chain-registry"},next:{title:"Donations",permalink:"/docs/sentinelguides/validator/donations"}},s={},c=[{value:"First procedure",id:"first-procedure",level:2},{value:"Second procedure",id:"second-procedure",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-a-validator-image"},"Add a Validator Image"),(0,n.kt)("p",null,"In order to have your validator profile image displayed on the most commonly used Cosmos blockchain explorers, you need to follow two different procedures"),(0,n.kt)("h2",{id:"first-procedure"},"First procedure"),(0,n.kt)("p",null,"By following this procedure, your validator image will be visible on ",(0,n.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/chains/sentinel"},"Keplr"),", ",(0,n.kt)("a",{parentName:"p",href:"https://ping.pub/sentinel/staking"},"Ping.pub"),", ",(0,n.kt)("a",{parentName:"p",href:"https://cosmos.directory/sentinel/validators"},"Cosmos.directory")," and ",(0,n.kt)("a",{parentName:"p",href:"https://atomscan.com/sentinel/validators"},"ATOMScan"),"."),(0,n.kt)("p",null,"Firstly, register on ",(0,n.kt)("a",{parentName:"p",href:"https://keybase.io/"},"keybase.io"),", and create your profile by adding a profile image, which will be used as your validator image. Once your profile is created, access it and you will be prompted to create a PGP key."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://keybase.io/download"},"Download")," Keybase onto your machine and follow the installation guide for your operating system."),(0,n.kt)("p",null,"Create a PGP key and add it to your keybase profile. Once that is complete, you need to perform what is called an ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit Validator Transaction")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sentinelhub tx staking edit-validator \\\n    --identity=<your_pgp_key_with_no_spaces> \\\n    --chain-id=sentinelhub-2 \\\n    --gas=500000 \\\n    --gas-prices=0.2udvpn \\\n    --from=<your_key_name>\n")),(0,n.kt)("p",null,"If you'd like to link your website and add a description of your validator, you have the option to fill out the following two fields"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'    --website="https://yourwebsite.com" \\\n    --details="These are my validator details"\n')),(0,n.kt)("p",null,"If the transaction is successful, you will see the edits immediately"),(0,n.kt)("h2",{id:"second-procedure"},"Second procedure"),(0,n.kt)("p",null,"By following this procedure, your validator image will be visible on ",(0,n.kt)("a",{parentName:"p",href:"https://www.mintscan.io/sentinel/validators"},"Mintscan"),"."),(0,n.kt)("p",null,"Here's what you'll need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A GitHub account with a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"PAT")," (Personal Access Token) enabled with all repo scopes"),(0,n.kt)("li",{parentName:"ul"},"Your validator image in the format ",(0,n.kt)("inlineCode",{parentName:"li"},"<your_sentval_address>.png"),"\nGo to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmostation/chainlist"},"https://github.com/cosmostation/chainlist"))),(0,n.kt)("p",null,"Fork the project"),(0,n.kt)("p",null,"Clone the forked project to your computer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cosmostation/chainlist\n")),(0,n.kt)("p",null,"Navigate to the directory from which you will execute the next commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd chainlist\n")),(0,n.kt)("p",null,"Create a new branch named after your validator"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git branch <your_validator_name>\n")),(0,n.kt)("p",null,"Checkout to that branch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <your_validator_name>\n")),(0,n.kt)("p",null,"Copy your validator image to the folder ",(0,n.kt)("inlineCode",{parentName:"p"},"/chainlist/chain/sentinel/moniker/")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp /path/to/your/<your_sentval_address>.png ~/chainlist/chain/sentinel/moniker/\n")),(0,n.kt)("p",null,"Set the necessary configuration parameters"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Your Username"\ngit config --global user.email "your.email@example.com"\n')),(0,n.kt)("p",null,"Set access via your Personal Access Token (PAT)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git remote set-url origin https://<your_github_user>:<your_token>@github.com/<your_github_user>chainlist.git\n")),(0,n.kt)("p",null,"Push your branch to your forked repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Add <your_validator_name> logo for Sentinel"\ngit push origin <your_validator_name>\n')),(0,n.kt)("p",null,"If the command is successful go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmostation/chainlist"},"https://github.com/cosmostation/chainlist")," and create a pull request. Once the pull request is created, wait for some time until your validator image is updated. When the update is complete, the pull request will be closed."))}d.isMDXComponent=!0}}]);