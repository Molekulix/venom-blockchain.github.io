"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[6757],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(7462),a=(t(7294),t(4137));const r={sidebar_position:1,sidebar_label:"Extend our Tokensale with frontend",description:"This section will show you how you can interact with your Tokensale contract via a web interface. You will create a dAPP, in fact."},i="Venom In Action. Extend our Tokensale with frontend",s={unversionedId:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/extend-our-tokensale-with-frontend",id:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/extend-our-tokensale-with-frontend",title:"Venom In Action. Extend our Tokensale with frontend",description:"This section will show you how you can interact with your Tokensale contract via a web interface. You will create a dAPP, in fact.",source:"@site/docs/build/00-development-guides/03-how-to-create-your-own-fungible-tip-3-token/02-venom-in-action/01-extend-our-tokensale-with-frontend.md",sourceDirName:"build/00-development-guides/03-how-to-create-your-own-fungible-tip-3-token/02-venom-in-action",slug:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/extend-our-tokensale-with-frontend",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/extend-our-tokensale-with-frontend",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Extend our Tokensale with frontend",description:"This section will show you how you can interact with your Tokensale contract via a web interface. You will create a dAPP, in fact."},sidebar:"buildSidebar",previous:{title:"Simple Tokensale",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/simple-tokensale"},next:{title:"Going Global",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/going-global"}},c={},l=[{value:"Connecting Venom Wallet to your app",id:"connecting-venom-wallet-to-your-app",level:2},{value:"Getting the user&#39;s wallet address from the connected wallet",id:"getting-the-users-wallet-address-from-the-connected-wallet",level:2},{value:"Reading the user&#39;s token balance from deployed smart-contract",id:"reading-the-users-token-balance-from-deployed-smart-contract",level:2},{value:"Sending token purchase transaction",id:"sending-token-purchase-transaction",level:2}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"venom-in-action-extend-our-tokensale-with-frontend"},"Venom In Action. Extend our Tokensale with frontend"),(0,a.kt)("p",null,"It's good to have smart contracts for distributing our fungible token, but to\nhave a human-friendly interface to working with our smart contracts is\nbetter. Let's implement some web interface for transforming our simple smart contract to a complete dapp."),(0,a.kt)("p",null,"For building a web interface, we will use ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," library. Of course, you can use any library you want. We are starting with the command, that allows us to scaffold React application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-tokensale-web --template typescript\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide will not include frontend development basements and React essentials. We focus our attention only on venom smart contracts integration.")),(0,a.kt)("h2",{id:"connecting-venom-wallet-to-your-app"},"Connecting Venom Wallet to your app"),(0,a.kt)("p",null,"Suppose we already have some layout for our web application and you know how to use it with React. First of all, we need to connect our ",(0,a.kt)("a",{parentName:"p",href:"/general/ecosystem#venom-wallet"},"venom wallet")," with our app. For this task we will use ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/venom-connect"},"venom-connect")," library. This library provides us with a handy interface for building connect popup for our venom wallet and then gives us an interface for working with the venom network. The library has been built on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broxus/everscale-inpage-provider"},"inpage-provider")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broxus/everscale-standalone-client"},"standalone-client")," - basic libraries for interaction with the venom network, so you can build your own system for wallet connection, but we will just use a ready-made tool. Let's install it and the corresponding tools for working with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save venom-connect everscale-inpage-provider everscale-standalone-client\n")),(0,a.kt)("p",null,"According to venom-connect documentation, we should just create a ",(0,a.kt)("inlineCode",{parentName:"p"},"VenomConnect")," instance in our code. Let's implement some functions for returns ",(0,a.kt)("inlineCode",{parentName:"p"},"VenomConnect")," instance. You can read about all configuration options in venom-connect official documentation. Also, it has an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/web3sp/venom-connect/tree/main/examples/react"},"example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/venom-connect/configure.ts" lineNumbers="true"',title:'"src/venom-connect/configure.ts"',lineNumbers:'"true"'},"import { VenomConnect } from 'venom-connect';\nimport { ProviderRpcClient } from 'everscale-inpage-provider';\nimport { EverscaleStandaloneClient } from 'everscale-standalone-client';\n\nexport const initVenomConnect = async () => {\n  return new VenomConnect({\n    theme: 'dark',\n    checkNetworkId: 1010,\n    providersOptions: {\n      venomwallet: {\n        walletWaysToConnect: [\n          {\n            package: ProviderRpcClient,\n\n            packageOptions: {\n              fallback: VenomConnect.getPromise('venomwallet', 'extension') || (() => Promise.reject()),\n              forceUseFallback: true,\n            },\n            packageOptionsStandalone: {\n              fallback: () =>\n                EverscaleStandaloneClient.create({\n                  connection: {\n                    id: 1010,\n                    group: 'venom_testnet',\n                    type: 'jrpc',\n                    data: {\n                      endpoint: 'https://jrpc-testnet.venom.foundation/rpc',\n                    },\n                  },\n                }),\n              forceUseFallback: true,\n            },\n\n            id: 'extension',\n            type: 'extension',\n          },\n        ],\n        defaultWalletWaysToConnect: [\n          'mobile',\n          'ios',\n          'android',\n        ],\n      },\n    },\n  });\n};\n")),(0,a.kt)("p",null,"Now we can add initializating in our main ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx" lineNumbers="true"',title:'"App.tsx"',lineNumbers:'"true"'},"import React, { useEffect, useState } from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nimport { initVenomConnect } from './venom-connect/configure';\nimport VenomConnect from 'venom-connect';\n\nfunction App() {\n  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();\n  const init = async () => {\n    const _venomConnect = await initVenomConnect();\n    setVenomConnect(_venomConnect);\n  };\n  useEffect(() => {\n    init();\n  }, []);\n\n  return (\n    <div className=\"App\">\n      ...\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"For a better experience, let's move our page to another component, that will be included in the root ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/Main.tsx" lineNumbers="true"',title:'"src/Main.tsx"',lineNumbers:'"true"'},"import React, { useEffect, useState } from 'react';\nimport { VenomConnect } from 'venom-connect';\nimport logo from './logo.svg';\n\ntype Props = {\n  venomConnect: VenomConnect | undefined;\n};\n\nfunction Main({ venomConnect }: Props) {\n    return (\n        <div className=\"App\">\n          ...\n        </div>\n    );\n}\n\nexport default Main;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx" lineNumbers="true"',title:'"App.tsx"',lineNumbers:'"true"'},"import React, { useEffect, useState } from 'react';\n...\n\nfunction App() {\n\n  ...\n\n  return (\n    <Main venomConnect={venomConnect} />\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Then we should call ",(0,a.kt)("inlineCode",{parentName:"p"},"venomConnect.connect()")," method. Let's create a button for connection initializing. We need a separate React component for that action. This component will receive our initialized instance and call ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/ConnectWallet.ts" lineNumbers="true"',title:'"src/components/ConnectWallet.ts"',lineNumbers:'"true"'},"import React from 'react';\nimport { VenomConnect } from 'venom-connect';\n\ntype Props = {\n  venomConnect: VenomConnect | undefined;\n};\n\nfunction ConnectWallet({ venomConnect }: Props) {\n  const login = async () => {\n    if (!venomConnect) return;\n    await venomConnect.connect();\n  };\n  return (\n    <div>\n      <>\n        <h1>My Venom Crowdsale</h1>\n        <p>Connect Wallet to continue</p>\n        <a className=\"btn\" onClick={login}>\n          Connect wallet\n        </a>\n      </>\n    </div>\n  );\n}\n  \nexport default ConnectWallet;\n")),(0,a.kt)("p",null,"Now we can add this component to our ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.tsx")," file, and pass the venom-connect instance from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Main.tsx" lineNumbers="true"',title:'"Main.tsx"',lineNumbers:'"true"'},"import React from 'react';\nimport { VenomConnect } from 'venom-connect';\n\nimport ConnectWallet from './components/ConnectWallet'\n\ntype Props = {\n  venomConnect: VenomConnect | undefined;\n};\n\nfunction Main({ venomConnect }: Props) {\n  return (\n    <div className=\"App\">\n      <ConnectWallet venomConnect={venomConnect} />\n    </div>\n  );\n}\n  \nexport default Main;\n")),(0,a.kt)("p",null,"That's it. Now you can see the widget popup window after clicking on ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect Wallet")," element. If you choose Browser Extension inside the popup, you will see that your Venom Wallet extension will show you a connection popup."),(0,a.kt)("h2",{id:"getting-the-users-wallet-address-from-the-connected-wallet"},"Getting the user's wallet address from the connected wallet"),(0,a.kt)("p",null,"But now the user doesn't know if his connection was successful. Let's add a header, that shows the wallet address after the wallet has been connected. And, of course, the disconnect button. In that case, we need to add some code. Pay attention to code comments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Main.tsx" lineNumbers="true"',title:'"Main.tsx"',lineNumbers:'"true"'},"import React, { useEffect, useState } from 'react';\nimport { VenomConnect } from 'venom-connect';\n\nimport ConnectWallet from './components/ConnectWallet'\n\ntype Props = {\n  venomConnect: VenomConnect | undefined;\n};\n\nfunction Main({ venomConnect }: Props) {\n  const [venomProvider, setVenomProvider] = useState<any>();\n  const [address, setAddress] = useState();\n  // This method allows us to gen a wallet address from inpage provider\n  const getAddress = async (provider: any) => {\n    const providerState = await provider?.getProviderState?.();\n    return providerState?.permissions.accountInteraction?.address.toString();\n  };\n  // Any interaction with venom-wallet (address fetching is included) needs to be authentificated\n  const checkAuth = async (_venomConnect: any) => {\n    const auth = await _venomConnect?.checkAuth();\n    if (auth) await getAddress(_venomConnect);\n  };\n  // This handler will be called after venomConnect.login() action\n  // connect method returns provider to interact with wallet, so we just store it in state\n  const onConnect = async (provider: any) => {\n    setVenomProvider(provider);\n    await onProviderReady(provider);\n  };\n  // This handler will be called after venomConnect.disconnect() action\n  // By click logout. We need to reset address and balance.\n  const onDisconnect = async () => {\n    venomProvider?.disconnect();\n    setAddress(undefined);\n  };\n  // When our provider is ready, we need to get address and balance from.\n  const onProviderReady = async (provider: any) => {\n    const venomWalletAddress = provider ? await getAddress(provider) : undefined;\n    setAddress(venomWalletAddress);\n  };\n  useEffect(() => {\n    // connect event handler\n    const off = venomConnect?.on('connect', onConnect);\n    if (venomConnect) {\n      checkAuth(venomConnect);\n    }\n    // just an empty callback, cuz we don't need it\n    return () => {\n      off?.();\n    };\n  }, [venomConnect]);\n  return (\n    <div className=\"App\">\n      {address && (\n        <header>\n          <p>{address}</p>\n          <a className=\"logout\" onClick={onDisconnect}>\n            <img src='img' alt=\"Log out\" />\n          </a>\n        </header>\n      )}\n      <ConnectWallet venomConnect={venomConnect} />\n    </div>\n  );\n}\nexport default Main;\n")),(0,a.kt)("h2",{id:"reading-the-users-token-balance-from-deployed-smart-contract"},"Reading the user's token balance from deployed smart-contract"),(0,a.kt)("p",null,"We got a user's address! That's great, but I think we need to show the user's token balance too. for address fetching, you have operated with inpage-provider part of wallet interaction. We will use provider later to interact with the blockchain, especially for sending token purchase transactions. But for reading public data from the blockchain, it's possible to use a standalone client. The next listing will show you how to read the smart contract state with a standalone client, provided by venom-connect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Main.tsx" lineNumbers="true"',title:'"Main.tsx"',lineNumbers:'"true"'},"...\n\n// Importing of our contract ABI from smart-contract build action. Of cource we need ABI for contracts calls.\nimport tokenRootAbi from './abi/TokenRoot.abi.json';\nimport tokenWalletAbi from './abi/TokenWallet.abi.json';\n\n...\n\nfunction Main({ venomConnect }: Props) {\n\n  ...\n\n  // We will store token balance from contract\n  const [balance, setBalance] = useState<string | undefined>();\n  let tokenWalletAddress: string | undefined; // User's TIP-3 TokenWallet address\n  \n  ...\n\n  // This function will call walletOf function of TokenRoot contract, to obtain TokenWallet of connecte4d user.\n  const setupTokenWalletAddress = async (standalone: ProviderRpcClient, wallet: string): Promise<string | undefined> => {\n    try {\n      const contractAddress = new Address('0:91470b9a77ada682c9f9aee5ae0a4e2ea549ee51f7b0f2cba5182ffec2eb233f'); // Our TokenRoot address in venom testnet\n      // We will use standalone-client form our venomConnect instance to call a view method of contract\n      const contract = new standalone.Contract(tokenRootAbi, contractAddress); // creating a contract instance with contract address and interface (ABI)\n      // Smart-contract calling. Function walletOf of TokenRoot will calculate user's tokenWallet address by it's VenomWallet address (wich was connected)\n      const tokenWallet = (await contract.methods\n        .walletOf({\n          answerId: 0,\n          walletOwner: wallet,\n        } as never)\n        .call()) as any;\n      if (!tokenWallet) return undefined;\n      tokenWalletAddress = tokenWallet.value0._address;\n      return tokenWalletAddress;\n    } catch (e: any) {\n      console.error(e);\n    }\n    return undefined;\n  };\n  // Same idea for token balance fetching. Usage of standalone client and balance method of TIP-3 TokenWallet\n  // We already knows user's TokenWallet address\n  const getBalance = async (wallet: string) => {\n    if (!venomConnect) return;\n    const standalone: ProviderRpcClient | undefined = await venomConnect?.getStandalone('venomwallet');\n    if (standalone) {\n      if (!tokenWalletAddress) {\n        await setupTokenWalletAddress(standalone, wallet);\n      }\n      if (!venomProvider || !tokenWalletAddress) return;\n      try {\n        const contractAddress = new Address(tokenWalletAddress);\n        const contract = new standalone.Contract(tokenWalletAbi, contractAddress);\n        // We check a contract state here to acknowledge if TokenWallet already deployed\n        // As you remember, wallet can be deployed with first transfer on it.\n        // If our wallet isn't deployed, so it's balance is 0 :)\n        const contractState = await venomProvider.rawApi.getFullContractState({ address: tokenWalletAddress });\n        if (contractState.state) {\n          // But if this deployed, just call a balance function\n          const result = (await contract.methods.balance({ answerId: 0 } as never).call()) as any;\n          const tokenBalance = result.value0; // It will be with decimals. Format if you want by dividing with 10**decimals\n          setBalance(tokenBalance);\n        } else {\n          setBalance('0');\n        }\n      } catch (e) {\n        console.error(e);\n      }\n    } else {\n      alert('Standalone is not available now');\n    }\n  };\n\n  ...\n\n  // This handler will be called after venomConnect.disconnect() action\n  // By click logout. We need to reset address and balance.\n  const onDisconnect = async () => {\n    venomProvider?.disconnect();\n    setAddress(undefined);\n    // Balance reseting\n    setBalance(undefined);\n    tokenWalletAddress = undefined;\n\n  };\n\n  ...\n\n  // Hook for balance setup\n  useEffect(() => {\n    if (address) getBalance(address);\n  }, [address]);\n\n  return (\n    <div className=\"App\">\n      {address && (\n        <header>\n          <p>{address}</p>\n          <p>{balance}</p>\n          <a className=\"logout\" onClick={onDisconnect}>\n            <img src='img' alt=\"Log out\" />\n          </a>\n        </header>\n      )}\n      <ConnectWallet venomConnect={venomConnect} />\n    </div>\n  );\n}\n  \nexport default Main;\n")),(0,a.kt)("p",null,"That's it. Now we know how to read the state from the deployed smart contract! Straight from venom blockchain! The last ability we need to implement - is token purchasing."),(0,a.kt)("h2",{id:"sending-token-purchase-transaction"},"Sending token purchase transaction"),(0,a.kt)("p",null,"Let's implement some buying tokens form. It should be shown only after the wallet has been connected. We need to get purchasing amount from the user and send the purchase transaction from the user's wallet with inpage-provider, provided by venom-connect. Starts with a component for our form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/SaleForm.tsx" lineNumbers="true"',title:'"components/SaleForm.tsx"',lineNumbers:'"true"'},"import React, { useState } from 'react';\nimport { VenomConnect } from 'venom-connect';\nimport { Address, ProviderRpcClient } from 'everscale-inpage-provider';\n\n// we will user bignumber library to operate with deposit values (remember about decimals multiply)\nimport BigNumber from 'bignumber.js';\n\n// Importing of our contract ABI from smart-contract build action. Of cource we need ABI for contracts calls.\nimport tokenSaleAbi from '../abi/Tokensale.abi.json';\n\ntype Props = {\n  balance: string | undefined;\n  getBalance: (wallet: string) => void;\n  venomConnect: VenomConnect | undefined;\n  address: string | undefined;\n  provider: ProviderRpcClient | undefined;\n};\n\nfunction SaleForm({ balance, venomConnect, address, provider, getBalance }: Props) {\n  const [tokenAmount, setTokenAmount] = useState<number | undefined>(0);\n\n  const onChangeAmount = (e: string) => {\n    if (e === '') setTokenAmount(undefined);\n    setTokenAmount(Number(e));\n  };\n\n  const buyTokens = async () => {\n    if (!venomConnect || !address || !tokenAmount || !provider) return;\n    const userAddress = new Address(address);\n    const contractAddress = new Address(\"0:fac0dea61ab959bf5fc5d325b6ef97ef45ef371c8649042e92b64e46c3c854d5\"); // Our Tokensale contract address\n    const deposit = new BigNumber(tokenAmount).multipliedBy(10 ** 8).toString(); // Contract's rate parameter is 1 venom = 10 tokens\n    // Creating an instance for Tokensale contract\n    const contract = new provider.Contract(tokenSaleAbi, contractAddress);\n    // another 1 venom for connection. You will receive a change, as you remember\n    const amount = new BigNumber(deposit).plus(new BigNumber(1).multipliedBy(10 ** 9)).toString();;\n    try {\n      // and just call buyTokens method according to smart contract\n      const result = await contract.methods\n        .buyTokens({\n          deposit,\n        } as never)\n        .send({\n          from: userAddress,\n          amount,\n          bounce: true,\n        });\n      if (result?.id?.lt && result?.endStatus === 'active') {\n        setTokenAmount(undefined);\n        getBalance(address);\n      }\n    } catch (e) {\n      console.error(e);\n    }\n  };\n  return (\n    <>\n      <h1>My Venom Crowdsale</h1>\n      <div className=\"item-info\">\n        <span>My Token Balance</span>\n        <b>{balance}</b>\n      </div>\n      <div className=\"card__amount\">\n        <div className=\"number\">\n          <span>Amount</span>\n          <input\n            type=\"number\"\n            min={0}\n            value={tokenAmount !== undefined ? tokenAmount : ''}\n            onChange={(e) => {\n              onChangeAmount(e.target.value);\n            }}\n          />\n        </div>\n        <a className={!tokenAmount ? 'btn disabled' : 'btn'} onClick={buyTokens}>\n          Buy\n        </a>\n      </div>\n    </>\n  );\n}\n\nexport default SaleForm;\n")),(0,a.kt)("p",null,"That's it. Now we should place our new form on our ",(0,a.kt)("inlineCode",{parentName:"p"},"Main")," page. Remember, that we should show the form only after the user's wallet has been connected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Main.tsx" lineNumbers="true"',title:'"Main.tsx"',lineNumbers:'"true"'},'...\nfunction Main({ venomConnect }: Props) {\n  ...\n  return (\n    <div className="App">\n      {address && (\n        <header>\n          <p>{address}</p>\n          <p>{balance}</p>\n          <a className="logout" onClick={onDisconnect}>\n            <img src=\'img\' alt="Log out" />\n          </a>\n        </header>\n      )}\n       {address ? (\n          // SaleForm if we are connected\n          <SaleForm\n            address={address}\n            balance={balance}\n            venomConnect={venomConnect}\n            provider={venomProvider}\n            getBalance={getBalance}\n          />\n        ) : (\n          // ConnectWallet if we are not connected\n          <ConnectWallet venomConnect={venomConnect} />\n        )}\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"That's all. Build your app, host it and congratulations! You have your first dApp!"),(0,a.kt)("p",null,"Remember, that it's just an example and not production code. We didn't keep in mind some balance loaders and state managers. You can check out the implementation of this example with some styles and features in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/venom-blockchain/guides/tree/master/tokensale-frontend"},"repository"),"."))}u.isMDXComponent=!0}}]);