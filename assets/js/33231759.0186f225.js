"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[9811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"NGINX",description:"A popular open-source web server software and reverse proxy server",sidebar_position:4},i="NGINX",l={unversionedId:"sentinelguides/validator/rpc/nginx",id:"sentinelguides/validator/rpc/nginx",title:"NGINX",description:"A popular open-source web server software and reverse proxy server",source:"@site/docs/sentinelguides/validator/rpc/nginx.md",sourceDirName:"sentinelguides/validator/rpc",slug:"/sentinelguides/validator/rpc/nginx",permalink:"/docs/sentinelguides/validator/rpc/nginx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/rpc/nginx.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NGINX",description:"A popular open-source web server software and reverse proxy server",sidebar_position:4},sidebar:"validatorSidebar",previous:{title:"Certbot",permalink:"/docs/sentinelguides/validator/rpc/certbot"},next:{title:"Add RPC to Chain Registry",permalink:"/docs/sentinelguides/validator/rpc/chain-registry"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Launch test",id:"launch-test",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx"},"NGINX"),(0,a.kt)("p",null,'NGINX (pronounced "engine-x") is a high-performance, open-source web server and reverse proxy server. It\'s known for its efficient handling of web traffic and its ability to serve as a load balancer. NGINX is widely used to improve website performance, security, and scalability. It can also function as a proxy server for applications and offers features like SSL/TLS termination, caching, and content delivery. NGINX is popular for its speed and reliability in serving web content.'),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install the dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install curl gnupg2 ca-certificates lsb-release\n")),(0,a.kt)("p",null,"Import an official Nginx signing key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \\\n    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg > /dev/null\n")),(0,a.kt)("p",null,"Ensure that the downloaded file contains the correct key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg\n")),(0,a.kt)("p",null,"Now, proceed to set up the APT repository for stable Nginx packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \\\nhttp://nginx.org/packages/debian `lsb_release -cs` nginx" \\\n    | sudo tee /etc/apt/sources.list.d/nginx.list\n')),(0,a.kt)("p",null,"Install NGINX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get install nginx\n")),(0,a.kt)("h2",{id:"launch-test"},"Launch test"),(0,a.kt)("p",null,"After installation check the NGINX status (it will probably be enabled but inactive):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status nginx\n")),(0,a.kt)("p",null,"Start the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start nginx.service\n")),(0,a.kt)("p",null,"To test the setup, open your browser and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," in the URL bar, or type it in your terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost\n")),(0,a.kt)("p",null,"If you receive a successful message, you can now stop NGINX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop nginx.service\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Navigate to the configuration directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/nginx/config.d\n")),(0,a.kt)("p",null,"You will find the file ",(0,a.kt)("inlineCode",{parentName:"p"},"default.conf"),". You can rename it and create the file ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv default.conf rpc.conf\nsudo nano rpc.conf\n")),(0,a.kt)("p",null,"Copy the following template into the ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc.conf")," and replace myvalidator with your domain"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=rpc.conf",title:"rpc.conf"},"server {\n    server_name rpc.sentinel.myvalidator.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:26657;\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $http_connection;\n    }\n\n    listen [::]:80;\n    listen 80;\n}\n")),(0,a.kt)("p",null,"Now, install the Certbot plugin and apply it to the above file to enable redirection to HTTPS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-certbot-nginx\nsudo certbot --nginx\n")),(0,a.kt)("p",null,"Restart NGINX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart nginx\n")),(0,a.kt)("p",null,"If anyhing goes wrong, run this command to check the logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tail -n 50 /var/log/nginx/error.log\n")),(0,a.kt)("p",null,"If you encounter no errors, you can finally test whether your RPC is now public:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://rpc.sentinel.myvalidator.com\n")))}d.isMDXComponent=!0}}]);