"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[1600],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(y,a(a({ref:n},p),{},{components:t})):o.createElement(y,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(4137));const i={sidebar_position:2,sidebar_label:"Going Global",description:"This section shows you how to deploy your smart contracts to global networks (venom testnet or venom mainnet)."},a="Venom In Action. Going Global",l={unversionedId:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/going-global",id:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/going-global",title:"Venom In Action. Going Global",description:"This section shows you how to deploy your smart contracts to global networks (venom testnet or venom mainnet).",source:"@site/docs/build/00-development-guides/03-how-to-create-your-own-fungible-tip-3-token/02-venom-in-action/02-going-global.md",sourceDirName:"build/00-development-guides/03-how-to-create-your-own-fungible-tip-3-token/02-venom-in-action",slug:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/going-global",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/going-global",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Going Global",description:"This section shows you how to deploy your smart contracts to global networks (venom testnet or venom mainnet)."},sidebar:"buildSidebar",previous:{title:"Extend our Tokensale with frontend",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/extend-our-tokensale-with-frontend"},next:{title:"Ways of code enhancing",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/ways-of-code-enhancing"}},s={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"venom-in-action-going-global"},"Venom In Action. Going Global"),(0,r.kt)("p",null,"First thing you should deal with - locklift config. Let's set up some global networks in ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," section of the config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="locklift.config.ts" lineNumbers="true"',title:'"locklift.config.ts"',lineNumbers:'"true"'},'const config: LockliftConfig = {\n...\n  networks: {\n    venomMainnet: {\n      connection: {\n        group: "mainnet",\n        type: "jrpc",\n        data: {\n          endpoint: \'https://jrpc.venom.foundation/rpc\',\n        },\n      },\n      giver: {\n        giverFactory: (ever, keyPair, address) => new GiverWallet(ever, keyPair, address),\n        address: "",\n        phrase: "",\n        accountId: 0\n      },\n      keys: {\n        phrase: "",\n        amount: 20,\n      },\n    },\n    venomTestnet: {\n      connection: {\n        group: "testnet",\n        type: "jrpc",\n        data: {\n          endpoint: \'https://jrpc-testnet.venom.foundation/rpc\',\n        },\n      },\n      giver: {\n        giverFactory: (ever, keyPair, address) => new GiverWallet(ever, keyPair, address),\n        address: "",\n        phrase: "",\n        accountId: 0\n      },\n      keys: {\n        phrase: "",\n        amount: 20,\n      },\n    },\n...\n}\n')),(0,r.kt)("p",null,"Now we have two new networks in our config - ",(0,r.kt)("inlineCode",{parentName:"p"},"venomTestnet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"venomMainnet"),". Our interest is now in ",(0,r.kt)("inlineCode",{parentName:"p"},"giver")," section of each network."),(0,r.kt)("p",null,"When you work with a local node, you have a pre-deployed giver, which you can use for contract deployment. Of course, there are no givers in the global network (at least publicly accessible, you can deploy your own giver same as in the local node for sure). Locklift allows you to use your venom wallet as the giver. In a giver section, you should fill ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"phrase"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"accountId")," fields, according to your wallet data (address of the wallet, seed phrase, and account number for accountId). You can use the field ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," with a secret key instead of a phrase. Then you should fill the keys section the same way (",(0,r.kt)("inlineCode",{parentName:"p"},"phrase")," field, and ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of accounts you need from the given seed phrase)"),(0,r.kt)("p",null,"As you can see we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"giverFactory")," field, that initializes a ",(0,r.kt)("inlineCode",{parentName:"p"},"GiverWallet")," object. Let's have a look up there."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="giverSettings/index.ts" lineNumbers="true"',title:'"giverSettings/index.ts"',lineNumbers:'"true"'},'export class GiverWallet implements Giver {\n  public giverContract: Contract<typeof giverWallet>;\n  \n  constructor(ever: ProviderRpcClient, readonly keyPair: Ed25519KeyPair, address: string) {\n    const giverAddr = new Address(address);\n    this.giverContract = new ever.Contract(giverWallet, giverAddr);\n  }\n  \n  public async sendTo(sendTo: Address, value: string): Promise<{ transaction: Transaction; output?: {} }> {\n    return await this.giverContract.methods\n    .sendTransaction({\n      dest: sendTo,\n      value: value,\n      bounce: false,\n      flags: 3,\n      payload: "",\n    })\n    .sendExternal({ publicKey: this.keyPair.publicKey });\n  }\n}\n\nconst giverWallet = {\n  "ABI version": 2,\n  "version": "2.3",\n  header: ["pubkey", "time", "expire"],\n  functions: [\n    {\n      name: "sendTransaction",\n      inputs: [\n        { name: "dest", type: "address" },\n        { name: "value", type: "uint128" },\n        { name: "bounce", type: "bool" },\n        { name: "flags", type: "uint8" },\n        { name: "payload", type: "cell" },\n      ],\n      outputs: [],\n    },\n  ],\n  events: [],\n} as const;\n')),(0,r.kt)("p",null,"Pretty simple, isn't it? All you need is to provide an ABI of your contract and change ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTo")," function according to provided ABI (of course you should provide keys in a giver and keys section of config, that allows calling of provided address). When you will use ",(0,r.kt)("inlineCode",{parentName:"p"},"locklift.factory.deployContract"),", method ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTo")," will be called before deploying."),(0,r.kt)("p",null,"Now you can just use the same deploy scripts, but with another network. For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s ./scripts/01-deploy-token.ts -n venomTestnet\n")),(0,r.kt)("p",null,"Summarizing:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fill ",(0,r.kt)("inlineCode",{parentName:"li"},"network")," section of your locklift config with the data of the network you want"),(0,r.kt)("li",{parentName:"ol"},"Take your wallet address (or another contract you want), seed phrase (or secret key)"),(0,r.kt)("li",{parentName:"ol"},"Fill a ",(0,r.kt)("inlineCode",{parentName:"li"},"giver")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"keys")," section of your locklift config with data you take previously"),(0,r.kt)("li",{parentName:"ol"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"GiverWallet")," class according to the ABI of your contract (",(0,r.kt)("inlineCode",{parentName:"li"},"sendTo")," function)"),(0,r.kt)("li",{parentName:"ol"},"Call any deploy script with the network you need")))}d.isMDXComponent=!0}}]);