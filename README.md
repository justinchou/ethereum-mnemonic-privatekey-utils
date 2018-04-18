ethereum-mnemonic-privatekey-utils
===

A Helper For Generating Private Key With Mnemonic Words.

Useful When Develop With Ethereum, Generate Private Key For `eth`/`geth` Private Chain Client.

## Installation

Download Source Code:

`git clone https://github.com/justinchou/ethereum-mnemonic-privatekey-utils.git`

Enter Source Folder And Then Install Dependencies:

`npm install` OR `yarn install`

## Quick Start

```js
const generate = require('./index.js')

const mnemonic = 'yesterday once more happy bride smile short lovers make life sound great'
const keypair = generate(mnemonic)

// This is the priv/pub key
console.log(keypair)
```
