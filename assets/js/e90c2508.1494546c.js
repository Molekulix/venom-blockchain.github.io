"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[8762],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),i=(t(7294),t(4137));const l={sidebar_position:3,sidebar_label:"TIP-4.3"},r="Non-Fungible Token on-chain indexes (TIP-4.3)",o={unversionedId:"standards/TIP-4/3",id:"standards/TIP-4/3",title:"Non-Fungible Token on-chain indexes (TIP-4.3)",description:"Requires: TIP-4.1",source:"@site/docs/standards/TIP-4/3.md",sourceDirName:"standards/TIP-4",slug:"/standards/TIP-4/3",permalink:"/standards/TIP-4/3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"TIP-4.3"},sidebar:"standardSidebar",previous:{title:"TIP-4.2",permalink:"/standards/TIP-4/2"},next:{title:"TIP-4.4",permalink:"/standards/TIP-4/4"}},d={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Contracts",id:"contracts",level:2},{value:"IIndexBasis",id:"iindexbasis",level:2},{value:"IndexBasis",id:"indexbasis",level:2},{value:"IIndexBasis.getInfo()",id:"iindexbasisgetinfo",level:3},{value:"IIndexBasis.destruct()",id:"iindexbasisdestruct",level:3},{value:"IIndex",id:"iindex",level:2},{value:"Index",id:"index",level:2},{value:"Index.getInfo()",id:"indexgetinfo",level:3},{value:"IIndexBasis.destruct()",id:"iindexbasisdestruct-1",level:3},{value:"Collection",id:"collection",level:2},{value:"TIP4_3Collection",id:"tip4_3collection",level:3},{value:"TIP4_3Collection.indexBasisCode()",id:"tip4_3collectionindexbasiscode",level:4},{value:"TIP4_3Collection.indexBasisCodeHash()",id:"tip4_3collectionindexbasiscodehash",level:4},{value:"TIP4_3Collection.indexCode()",id:"tip4_3collectionindexcode",level:4},{value:"TIP4_3Collection.indexCodeHash()",id:"tip4_3collectionindexcodehash",level:4},{value:"TIP4_3Collection.indexBasis()",id:"tip4_3collectionindexbasis",level:4},{value:"Code salt parameters",id:"code-salt-parameters",level:3},{value:"Example of <code>IndexBasis</code> deployment",id:"example-of-indexbasis-deployment",level:3},{value:"NFT",id:"nft",level:2},{value:"TIP4_3NFT",id:"tip4_3nft",level:3},{value:"TIP4_3NFT.indexCode()",id:"tip4_3nftindexcode",level:4},{value:"TIP4_3NFT.indexCodeHash()",id:"tip4_3nftindexcodehash",level:4},{value:"TIP4_3NFT.resolveIndex()",id:"tip4_3nftresolveindex",level:4},{value:"Code salt parameters",id:"code-salt-parameters-1",level:3},{value:"Example of <code>Index</code> deployment",id:"example-of-index-deployment",level:3},{value:"Example of dApp query for search by index",id:"example-of-dapp-query-for-search-by-index",level:2},{value:"Source code",id:"source-code",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Legend",id:"legend",level:3},{value:"<code>IndexBasis</code> deployment for <code>Collection</code>",id:"indexbasis-deployment-for-collection",level:3},{value:"<code>Index</code> contracts deployment for <code>NFT</code>",id:"index-contracts-deployment-for-nft",level:3},{value:"Redeploy <code>Index</code> contracts after <code>changeOwner</code>",id:"redeploy-index-contracts-after-changeowner",level:3},{value:"References",id:"references",level:2}],c={toc:s};function p(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"non-fungible-token-on-chain-indexes-tip-43"},"Non-Fungible Token on-chain indexes (TIP-4.3)"),(0,i.kt)("p",null,"Requires: ",(0,i.kt)("a",{parentName:"p",href:"/standards/TIP-4/1"},"TIP-4.1"),"\nRequires: ",(0,i.kt)("a",{parentName:"p",href:"/standards/TIP-6/1"},"TIP-6.1")),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"Using the Index contract code, you can find all your NFT with one ",(0,i.kt)("a",{parentName:"p",href:"https://gql.venom.foundation/graphql"},"dApp")," query.\nThis makes blockchain application less dependent on different off-chain parsers and indexers"),(0,i.kt)("p",null,"On-chain Indexes solves easy and fast searching any data in blockchain.\nThis document shows standard for basic query.\nAny developer can get an idea of this solution and realize his own on-chain index."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"A standard interface allows search all Collection and all NFT by owner using base ",(0,i.kt)("a",{parentName:"p",href:"https://gql.venom.foundation/graphql"},"dApp")," functionality"),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119")),(0,i.kt)("h2",{id:"contracts"},"Contracts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," - ",(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP4.1")," contract that minted token"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NFT")," - ",(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP4.1")," contract that store token information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IndexBasis")," - contract, that helps to find all collections by the ",(0,i.kt)("strong",{parentName:"li"},"code hash")," of which"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Index")," - contract, that helps to find:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All user tokens in current collection using ",(0,i.kt)("strong",{parentName:"li"},"owner address")," and ",(0,i.kt)("strong",{parentName:"li"},"collection address")),(0,i.kt)("li",{parentName:"ul"},"All user tokens in all collections using ",(0,i.kt)("strong",{parentName:"li"},"owner address"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"code")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexBasis")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Index")," contracts and ",(0,i.kt)("strong",{parentName:"p"},"code hash")," of contracts is fixed and ",(0,i.kt)("strong",{parentName:"p"},"CANNOT BE CHANGED")),(0,i.kt)("h2",{id:"iindexbasis"},"IIndexBasis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface IIndexBasis {\n    function getInfo() external view responsible returns (address collection);\n    function destruct(address gasReceiver) external;\n}\n")),(0,i.kt)("h2",{id:"indexbasis"},"IndexBasis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\nimport 'IIndexBasis.sol';\n\n/**\n * Errors\n *   101 - Method for collection only\n **/\ncontract IndexBasis is IIndexBasis {\n    address static _collection;\n\n    modifier onlyCollection() {\n        require(msg.sender == _collection, 101, \"Method for collection only\");\n        tvm.accept();\n        _;\n    }\n\n    constructor() public onlyCollection {}\n\n    function getInfo() override public view responsible returns (address collection) {\n        return {value: 0, flag: 64} _collection;\n    }\n\n    function destruct(address gasReceiver) override public onlyCollection {\n        selfdestruct(gasReceiver);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code hash")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexBasis")," compiled by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/tree/a222452e27aacff14fdf2fff356542843a2a8d1c"},"TVMCompiler")," ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.58.2")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TVM-linker/tree/740f9f62a4e68c9f515667c109b116f265942d72"},"TVM-linker")," ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.14.51")," without salting is ",(0,i.kt)("inlineCode",{parentName:"p"},"2359f897c9527073b1c95140c670089aa5ab825f5fd1bd453db803fbab47def2")),(0,i.kt)("h3",{id:"iindexbasisgetinfo"},"IIndexBasis.getInfo()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getInfo() external view responsible returns (address collection);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - collection token contract address")),(0,i.kt)("h3",{id:"iindexbasisdestruct"},"IIndexBasis.destruct()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function destruct(address gasReceiver) external;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gasReceiver")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - address of contract that receives all remaining contract balance after ",(0,i.kt)("inlineCode",{parentName:"li"},"selfdestruct()")," call")),(0,i.kt)("h2",{id:"iindex"},"IIndex"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface IIndex {\n    function getInfo() external view responsible returns (\n        address collection,\n        address owner,\n        address nft\n    );\n    function destruct(address gasReceiver) external;\n}\n")),(0,i.kt)("h2",{id:"index"},"Index"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\nimport 'IIndex.sol';\n\n/**\n * Errors\n *   101 - Method for NFT only\n *   102 - Salt doesn't contain any value\n **/\ncontract Index is IIndex {\n    address static _nft;\n    \n    address _collection;\n    address _owner;\n\n    constructor(address collection) public {\n        optional(TvmCell) salt = tvm.codeSalt(tvm.code());\n        require(salt.hasValue(), 102, \"Salt doesn't contain any value\");\n        (, address collection_, address owner) = salt\n            .get()\n            .toSlice()\n            .decode(string, address, address);\n        require(msg.sender == _nft);\n        tvm.accept();\n        _collection = collection_;\n        _owner = owner;\n        if (collection_.value == 0) {\n            _collection = collection;\n        }\n    }\n\n    function getInfo() override public view responsible returns (\n        address collection,\n        address owner,\n        address nft\n    ) {\n        return {value: 0, flag: 64} (\n            _collection,\n            _owner,\n            _nft\n        );\n    }\n\n    function destruct(address gasReceiver) override public {\n        require(msg.sender == _nft, 101, \"Method for NFT only\");\n        selfdestruct(gasReceiver);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code hash")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"Index")," compiled by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/tree/a222452e27aacff14fdf2fff356542843a2a8d1c"},"TVMCompiler")," ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.58.2")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TVM-linker/tree/740f9f62a4e68c9f515667c109b116f265942d72"},"TVM-linker")," ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.14.51")," without salting is ",(0,i.kt)("inlineCode",{parentName:"p"},"61e5f39a693dc133ea8faf3e80fac069250161b0bced3790c20ae234ce6fd866")),(0,i.kt)("h3",{id:"indexgetinfo"},"Index.getInfo()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getInfo() external view responsible returns (\n    address collection,\n    address owner,\n    address nft\n);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - collection token contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - token owner contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nft")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - token contract address")),(0,i.kt)("h3",{id:"iindexbasisdestruct-1"},"IIndexBasis.destruct()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function destruct(address gasReceiver) external;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gasReceiver")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - address of contract that receives all remaining contract balance after ",(0,i.kt)("inlineCode",{parentName:"li"},"selfdestruct()")," call")),(0,i.kt)("h2",{id:"collection"},"Collection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," contract must implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"TIP4_3Collection")," interface and ",(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-6/1"},"TIP-6.1")," interfaces"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," contract must deploy ",(0,i.kt)("inlineCode",{parentName:"li"},"IndexBasis")," contract after deployment with ",(0,i.kt)("strong",{parentName:"li"},"code salt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," contract must ",(0,i.kt)("inlineCode",{parentName:"li"},"destuct()")," ",(0,i.kt)("inlineCode",{parentName:"li"},"IndexBasis")," contracts before collection destruction")),(0,i.kt)("h3",{id:"tip4_3collection"},"TIP4_3Collection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_3Collection {\n    function indexBasisCode() external view responsible returns (TvmCell code);\n    function indexBasisCodeHash() external view responsible returns (uint256 hash);\n    function indexCode() external view responsible returns (TvmCell code);\n    function indexCodeHash() external view responsible returns (uint256 hash);\n    function resolveIndexBasis() external view responsible returns (address indexBasis);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,i.kt)("a",{parentName:"p",href:"/standards/TIP-6/1"},"TIP-6.1")," identifier for this interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4387BBFB")),(0,i.kt)("h4",{id:"tip4_3collectionindexbasiscode"},"TIP4_3Collection.indexBasisCode()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function indexBasisCode() external view responsible returns (TvmCell code);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," (",(0,i.kt)("inlineCode",{parentName:"li"},"TvmCell"),") - basis index contract code")),(0,i.kt)("h4",{id:"tip4_3collectionindexbasiscodehash"},"TIP4_3Collection.indexBasisCodeHash()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function indexBasisCodeHash() external view responsible returns (uint256 hash);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint256"),") - basis index contract code hash")),(0,i.kt)("h4",{id:"tip4_3collectionindexcode"},"TIP4_3Collection.indexCode()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function indexCode() external view responsible returns (TvmCell code);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," (",(0,i.kt)("inlineCode",{parentName:"li"},"TvmCell"),") - index contract code")),(0,i.kt)("h4",{id:"tip4_3collectionindexcodehash"},"TIP4_3Collection.indexCodeHash()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function indexCodeHash() external view responsible returns (uint256 hash);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint256"),") - index contract code hash")),(0,i.kt)("h4",{id:"tip4_3collectionindexbasis"},"TIP4_3Collection.indexBasis()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function resolveIndexBasis() external view responsible returns (address indexBasis);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"indexBasis")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - basis index contract address")),(0,i.kt)("h3",{id:"code-salt-parameters"},"Code salt parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stamp")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - stamp that determine type of index. ",(0,i.kt)("inlineCode",{parentName:"li"},'stamp = "nft";')," for all NFT indexes")),(0,i.kt)("h3",{id:"example-of-indexbasis-deployment"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"IndexBasis")," deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'function deployIndexBasis(TvmCell codeIndex, address collection, uint128 value) private pure {\n    string stamp = "nft";\n    TvmBuilder salt;\n    salt.store(stamp);\n    TvmCell code = tvm.setCodeSalt(codeIndex, salt.toCell());\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: IndexBasis,\n        varInit: {_collection: collection},\n        code: code\n    });\n    new IndexBasis{stateInit: stateInit, value: value}();\n}\n')),(0,i.kt)("h2",{id:"nft"},"NFT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," contract must implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"TIP4_3NFT")," interface and ",(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-6/1"},"TIP-6.1")," interfaces"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"NFT")," contract must deploy at least two ",(0,i.kt)("inlineCode",{parentName:"li"},"Index")," contract after deployment with different ",(0,i.kt)("strong",{parentName:"li"},"code salt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"With zero collection address ",(0,i.kt)("inlineCode",{parentName:"li"},'collection = "0:0000000000000000000000000000000000000000000000000000000000000000"')," in ",(0,i.kt)("strong",{parentName:"li"},"code salt")),(0,i.kt)("li",{parentName:"ul"},"With non-zero collection address ",(0,i.kt)("inlineCode",{parentName:"li"},'collection = "0:3bd8\u2026"')," in ",(0,i.kt)("strong",{parentName:"li"},"code salt")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"NFT")," contract must ",(0,i.kt)("inlineCode",{parentName:"li"},"destuct()")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Index")," before NFT burning"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/TIP-4/1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"NFT")," contract must ",(0,i.kt)("inlineCode",{parentName:"li"},"destuct()")," old ",(0,i.kt)("inlineCode",{parentName:"li"},"Index")," contacts and deploy new ",(0,i.kt)("inlineCode",{parentName:"li"},"Index")," contracts if owner changed")),(0,i.kt)("h3",{id:"tip4_3nft"},"TIP4_3NFT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_3NFT {\n    function indexCode() external view responsible returns (TvmCell code);\n    function indexCodeHash() external view responsible returns (uint256 hash);\n    function resolveIndex(address collection, address owner) external view responsible returns (address index);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,i.kt)("a",{parentName:"p",href:"/standards/TIP-6/1"},"TIP-6.1")," identifier for this interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4DF6250B")),(0,i.kt)("h4",{id:"tip4_3nftindexcode"},"TIP4_3NFT.indexCode()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function indexCode() external view responsible returns (TvmCell code);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," (",(0,i.kt)("inlineCode",{parentName:"li"},"TvmCell"),") - index contract code")),(0,i.kt)("h4",{id:"tip4_3nftindexcodehash"},"TIP4_3NFT.indexCodeHash()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function indexCodeHash() external view responsible returns (uint256 hash);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint256"),") - basis index contract code hash")),(0,i.kt)("h4",{id:"tip4_3nftresolveindex"},"TIP4_3NFT.resolveIndex()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function resolveIndex(address collection, address owner) external view responsible returns (address index);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - collection token contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - token owner contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - index contract address")),(0,i.kt)("h3",{id:"code-salt-parameters-1"},"Code salt parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stamp")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - stamp that determine type of index. ",(0,i.kt)("inlineCode",{parentName:"li"},'stamp = "nft";')," for all NFT indexes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - collection token contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"owner")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - token owner contract address")),(0,i.kt)("h3",{id:"example-of-index-deployment"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"Index")," deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'function deployIndex(TvmCell codeIndex, address nft, address collection, address owner, uint128 value) private pure {\n    string stamp = "nft";\n    TvmBuilder salt;\n    salt.store(stamp, collection, owner);\n    TvmCell code = tvm.setCodeSalt(codeIndex, salt.toCell());\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: Index,\n        varInit: {_nft: nft},\n        code: code\n    });\n    new Index{stateInit: stateInit, value: value}();\n}\n')),(0,i.kt)("h2",{id:"example-of-dapp-query-for-search-by-index"},"Example of dApp query for search by index"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  accounts( \n    filter: {\n      code_hash: {\n        eq: "207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82"\n      }\n    }\n  ){\n    id\n  }\n}\n')),(0,i.kt)("p",null,"Part of response example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "accounts": [\n      {\n        "id": "0:000001b0422f6a7069786fa9a27aa7bb8042f58e1df01dfebc51dcb2baa5eeae"\n      },\n      {\n        "id": "0:00022772794253c1bf8cb4fa59d6161d574033c13d881f3eea14675b911e61b0"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/numizteam/indexes"},"link")),(0,i.kt)("h2",{id:"visualization"},"Visualization"),(0,i.kt)("h3",{id:"legend"},"Legend"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Legend",src:t(5699).Z,width:"356",height:"524"})),(0,i.kt)("h3",{id:"indexbasis-deployment-for-collection"},(0,i.kt)("inlineCode",{parentName:"h3"},"IndexBasis")," deployment for ",(0,i.kt)("inlineCode",{parentName:"h3"},"Collection")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Index Basis",src:t(9535).Z,width:"524",height:"524"})),(0,i.kt)("h3",{id:"index-contracts-deployment-for-nft"},(0,i.kt)("inlineCode",{parentName:"h3"},"Index")," contracts deployment for ",(0,i.kt)("inlineCode",{parentName:"h3"},"NFT")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Index deploy",src:t(1284).Z,width:"841",height:"711"})),(0,i.kt)("h3",{id:"redeploy-index-contracts-after-changeowner"},"Redeploy ",(0,i.kt)("inlineCode",{parentName:"h3"},"Index")," contracts after ",(0,i.kt)("inlineCode",{parentName:"h3"},"changeOwner")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Index redeploy",src:t(5648).Z,width:"384",height:"524"})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The original ",(0,i.kt)("a",{parentName:"p",href:"https://docs.everscale.network/standard/TIP-4.3"},"TIP-4.3")," standard was developed and maintained by the Everscale network community.")))}p.isMDXComponent=!0},9535:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/index1-d97b3dd737907e1d86a2e95d89860c75.svg"},1284:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/index2-5834cd0b643c5df86c318bc6b137a6fc.svg"},5648:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/index3-1903b9c01bf60a886e288c3be32822d4.svg"},5699:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/legend1-3de5d1dd03117f26abf5cb7f454c8d39.svg"}}]);