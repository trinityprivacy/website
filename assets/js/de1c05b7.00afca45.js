"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[9963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,k=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={title:"Run the Validator with TMKMS",description:"The most important step, be careful!",sidebar_position:5},a="Run the Validator with TMKMS",i={unversionedId:"sentinelguides/validator/tmkms/run-tmkms-val",id:"sentinelguides/validator/tmkms/run-tmkms-val",title:"Run the Validator with TMKMS",description:"The most important step, be careful!",source:"@site/docs/sentinelguides/validator/tmkms/run-tmkms-val.md",sourceDirName:"sentinelguides/validator/tmkms",slug:"/sentinelguides/validator/tmkms/run-tmkms-val",permalink:"/docs/sentinelguides/validator/tmkms/run-tmkms-val",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/tmkms/run-tmkms-val.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Run the Validator with TMKMS",description:"The most important step, be careful!",sidebar_position:5},sidebar:"validatorSidebar",previous:{title:"Edit Validator Config",permalink:"/docs/sentinelguides/validator/tmkms/edit-val-config"},next:{title:"Monitoring Tools",permalink:"/docs/category/monitoring-tools"}},l={},c=[{value:"Step 1 - Stop the validator",id:"step-1---stop-the-validator",level:3},{value:"Step 2 - Skip a few blocks",id:"step-2---skip-a-few-blocks",level:3},{value:"Step 3 - Move back to your tmkms node and start tmkms.service",id:"step-3---move-back-to-your-tmkms-node-and-start-tmkmsservice",level:3},{value:"Step 4 - Start your validator on the validator node",id:"step-4---start-your-validator-on-the-validator-node",level:3},{value:"Step 5 - Signing blocks",id:"step-5---signing-blocks",level:3},{value:"Step 6 - Remove the private validator key from your validator node",id:"step-6---remove-the-private-validator-key-from-your-validator-node",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-the-validator-with-tmkms"},"Run the Validator with TMKMS"),(0,o.kt)("p",null,"This is the most important step and it is crucial in order to avoid double sign, be careful!"),(0,o.kt)("h3",{id:"step-1---stop-the-validator"},"Step 1 - Stop the validator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop sentinelhub.service\n")),(0,o.kt)("h3",{id:"step-2---skip-a-few-blocks"},"Step 2 - Skip a few blocks"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mintscan.io/sentinel/validators"},"Validator page"),", select yours and check if it is skipping blocks"),(0,o.kt)("h3",{id:"step-3---move-back-to-your-tmkms-node-and-start-tmkmsservice"},"Step 3 - Move back to your tmkms node and start tmkms.service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start tmkms.service\n")),(0,o.kt)("p",null,"Check the logs with this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u tmkms.service -f\n")),(0,o.kt)("p",null,"You will see error logs like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"2022-03-08T23:42:37.926816Z  INFO tmkms::commands::start: tmkms 0.11.0 starting up...\n2022-03-08T23:42:37.926968Z  INFO tmkms::keyring: [keyring:softsign] added consensus Ed25519 key: osmovalconspub1zcjduepq2qfkp3ahrhaafzuqglme9mares0eluj58xr6cy7c37cdmzq0eecqk0yehr\n2022-03-08T23:42:37.927216Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:37.929454Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:38.929746Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:38.931428Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:39.931729Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:39.932417Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:40.932732Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:40.933425Z ERROR tmkms::client: [sentinelhub-2@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n")),(0,o.kt)("h3",{id:"step-4---start-your-validator-on-the-validator-node"},"Step 4 - Start your validator on the validator node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start sentinelhub.service\n")),(0,o.kt)("p",null,"Your TMKMS node will now show logs like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"2022-03-08T23:46:06.208451Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:46:06.210568Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] connected to validator successfully\n2022-03-08T23:46:06.210604Z  WARN tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659]: unverified validator peer ID! (ba44dd36899602e255b04e3608e5ef0fe4bc5f5b)\n2022-03-08T23:46:15.929787Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399910/0/2 (0 ms)\n2022-03-08T23:46:17.344579Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399911/0/2 (0 ms)\n2022-03-08T23:46:22.367627Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399912/0/2 (0 ms)\n2022-03-08T23:46:27.409777Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399913/0/2 (0 ms)\n2022-03-08T23:46:32.442300Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399914/0/2 (0 ms)\n2022-03-08T23:46:37.452162Z  INFO tmkms::session: [sentinelhub-2@tcp://123.456.789.000:26659] signed PreCommit:<nil> at h/r/s 3399915/0/2 (0 ms)\n")),(0,o.kt)("h3",{id:"step-5---signing-blocks"},"Step 5 - Signing blocks"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mintscan.io/sentinel/validators"},"Validator page"),", select yours and check if it is signing blocks"),(0,o.kt)("h3",{id:"step-6---remove-the-private-validator-key-from-your-validator-node"},"Step 6 - Remove the private validator key from your validator node"),(0,o.kt)("p",null,"You can now safely remove the priv_validator_key from your validator and store it in a safe place for when needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /home/user/.sentinelhub/config/priv_validator_key.json\n")),(0,o.kt)("p",null,"You should now be signing blocks! If you cancel the TMKMS process, you will no longer sign blocks and will stop syncing. If you restart the TMKMS process, your validator node will continue to sync from where it left off."))}p.isMDXComponent=!0}}]);