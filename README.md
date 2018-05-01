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
const pkutils = require('./index');

// close debug mode
pkutils.debug = false;

const mnemonic = 'yesterday once more happy bride smile short lovers make life sound great';
const password = 'this is a totally long password';

console.log('mnemonic:        %s', mnemonic);
console.log('password:        %s', password);

const privateKeyGen = pkutils.getPrivateKeyFromMnemonic(mnemonic);
console.log('private key:     %s', privateKeyGen);

const keystore = pkutils.getKeystoreFromPrivateKey(privateKeyGen, password);
console.log('key store:       %j', keystore);

const privateKeyParsed = pkutils.getPrivateKeyFromKeystore(keystore, password);
console.log('private key:     %s', privateKeyParsed);

const account = keystore.address;
console.log('account address: %s', account);

```
