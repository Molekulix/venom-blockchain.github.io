"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[5562],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(4137));const a={sidebar_position:5,sidebar_label:"TIP-4.5"},s="Non-Fungible Token Can't Be Evil Licensing (TIP-4.5)",l={unversionedId:"standards/TIP-4/5",id:"standards/TIP-4/5",title:"Non-Fungible Token Can't Be Evil Licensing (TIP-4.5)",description:"Requires: TIP-4.1",source:"@site/docs/standards/TIP-4/5.md",sourceDirName:"standards/TIP-4",slug:"/standards/TIP-4/5",permalink:"/standards/TIP-4/5",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"TIP-4.5"},sidebar:"standardSidebar",previous:{title:"TIP-4.4",permalink:"/standards/TIP-4/4"},next:{title:"Basic",permalink:"/standards/TIP-6/core-description"}},o={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Contracts and interfaces",id:"contracts-and-interfaces",level:3},{value:"CantBeEvil",id:"cantbeevil",level:3},{value:"<code>ICantBeEvil.sol</code>",id:"icantbeevilsol",level:4},{value:"<code>CantBeEvil.sol</code>",id:"cantbeevilsol",level:4},{value:"Usage",id:"usage",level:2},{value:"References",id:"references",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-fungible-token-cant-be-evil-licensing-tip-45"},"Non-Fungible Token Can't Be Evil Licensing (TIP-4.5)"),(0,r.kt)("p",null,"Requires: ",(0,r.kt)("a",{parentName:"p",href:"/standards/TIP-4/1"},"TIP-4.1"),"\nRequires: ",(0,r.kt)("a",{parentName:"p",href:"/standards/TIP-6/1"},"TIP-6.1")),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The standard adds the support of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/a16z/a16z-contracts"},"Can't Be Evil NFT licenses")," ",(0,r.kt)("a",{parentName:"p",href:"https://a16zcrypto.com/introducing-nft-licenses/"},"introduced")," by ",(0,r.kt)("a",{parentName:"p",href:"https://a16z.com"},"Andreessen.Horowitz"),"."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"The purpose of this standard is to provide an on-chain representation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CantBeEvil")," license."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CantBeEvil")," license is made available as a contract that can be inherited by any other contract."),(0,r.kt)("p",null,"There are six variants of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CantBeEvil")," license:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/0"},"CC0 (\u201cCBE-CC0\u201d)")," \u2013 All copyrights are waived under the terms of CC0 1.0 Universal developed by Creative Commons."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/1"},"Exclusive Commercial Rights with No Creator Retention (\u201cCBE-ECR\u201d)")," \u2013 Full exclusive commercial rights granted, with no hate speech termination. Creator does not retain any exploitation rights."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/2"},"Non-Exclusive Commercial Rights (\u201cCBE-NECR\u201d)")," \u2013 Full non-exclusive commercial rights granted, with no hate speech termination. Creator retains exploitation rights."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/3"},"Non-Exclusive Commercial Rights with Creator Retention & Hate Speech Termination (\u201cCBE-NECR-HS\u201d)")," \u2013 Full non-exclusive commercial rights granted, with hate speech termination. Creator retains exploitation rights."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/4"},"Personal License (\u201cCBE-PR\u201d)")," \u2013 Personal rights granted, without hate speech termination."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/5"},"Personal License with Hate Speech Termination (\u201cCBE-PR-HS\u201d)")," \u2013 Personal rights granted, with hate speech termination.")),(0,r.kt)("p",null,"The text of the Licenses is made freely available to the public under the terms of CC0 1.0 Universal. You can also find the full licenses and cover letter in this repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/a16z/a16z-contracts/blob/master/licenses"},"here"),"."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119"),"."),(0,r.kt)("h3",{id:"contracts-and-interfaces"},"Contracts and interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Collection")," - ",(0,r.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP4.1")," contract that mints tokens;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NFT")," - ",(0,r.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP4.1")," contract that store token information;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CantBeEvil")," - contract that is meant to be inherited by NFT contracts and any contract that wishes to expose the ",(0,r.kt)("inlineCode",{parentName:"li"},"getLicenseURI")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"getLicenseName")," methods.")),(0,r.kt)("h3",{id:"cantbeevil"},"CantBeEvil"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every ",(0,r.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,r.kt)("inlineCode",{parentName:"li"},"NFT")," contract MAY implement instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"CantBeEvil")," contract. ",(0,r.kt)("inlineCode",{parentName:"li"},"NFT")," tokens within the same collection MAY have different license versions unless the version is specifically set in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Collection")," contract;"),(0,r.kt)("li",{parentName:"ul"},"Every ",(0,r.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Collection")," contract MAY implement instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"CantBeEvil")," contract. In such case, the derived ",(0,r.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,r.kt)("inlineCode",{parentName:"li"},"NFT")," contract MUST inherit the same license from the collection.")),(0,r.kt)("h4",{id:"icantbeevilsol"},(0,r.kt)("inlineCode",{parentName:"h4"},"ICantBeEvil.sol")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ever-solidity >= 0.61.2;\n\ninterface ICantBeEvil {\n    function getLicenseURI() external view responsible returns (string);\n    function getLicenseName() external view responsible returns (string);\n}\n")),(0,r.kt)("h4",{id:"cantbeevilsol"},(0,r.kt)("inlineCode",{parentName:"h4"},"CantBeEvil.sol")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma ever-solidity >= 0.61.2;\n\nimport "./ICantBeEvil.sol";\n\nenum LicenseVersion {\n    CBE_CC0,\n    CBE_ECR,\n    CBE_NECR,\n    CBE_NECR_HS,\n    CBE_PR,\n    CBE_PR_HS\n}\n\ncontract CantBeEvil is ICantBeEvil {\n    string internal constant _BASE_LICENSE_URI = "ar://_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/";\n    LicenseVersion public licenseVersion; // return string\n \n    constructor(LicenseVersion _licenseVersion) public {\n        licenseVersion = _licenseVersion;\n    }\n\n    function getLicenseURI() public view responsible override returns (string) {\n        return format("{}{}", _BASE_LICENSE_URI, uint(licenseVersion));\n    }\n\n    function getLicenseName() public view responsible override returns (string) {\n        return _getLicenseVersionKeyByValue(licenseVersion);\n    }\n\n    function _getLicenseVersionKeyByValue(LicenseVersion _licenseVersion) internal pure returns (string) {\n        require(uint8(_licenseVersion) <= 6);\n        if (LicenseVersion.CBE_CC0 == _licenseVersion) return "CBE_CC0";\n        if (LicenseVersion.CBE_ECR == _licenseVersion) return "CBE_ECR";\n        if (LicenseVersion.CBE_NECR == _licenseVersion) return "CBE_NECR";\n        if (LicenseVersion.CBE_NECR_HS == _licenseVersion) return "CBE_NECR_HS";\n        if (LicenseVersion.CBE_PR == _licenseVersion) return "CBE_PR";\n        else return "CBE_PR_HS";\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,r.kt)("a",{parentName:"p",href:"/standards/TIP-6/1"},"TIP-6.1")," identifier for this interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1E4848D4"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Pass the desired version into the CantBeEvil constructor, as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'import {LicenseVersion, CantBeEvil} from "./CantBeEvil.sol";\n\ncontract MyContract is CantBeEvil(LicenseVersion.CC0) {\n    ...\n}\n')),(0,r.kt)("p",null,"You can now call ",(0,r.kt)("inlineCode",{parentName:"p"},"MyContract.getLicenseURI()"),", which will return an Arweave gateway link to the license text file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'MyContract.getLicenseURI() // => "https://arweave.net/d2k7..."\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The original ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everscale.network/standard/TIP-4.5"},"TIP-4.5")," standard was developed and maintained by the Everscale network community.")))}d.isMDXComponent=!0}}]);