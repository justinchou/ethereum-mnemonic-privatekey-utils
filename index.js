const bip39 = require("bip39")
const hdkey = require('ethereumjs-wallet/hdkey')

function generate(mnemonic) {
  const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic))
  const wallet_hdpath = "m/44'/60'/0'/0/"

  const wallet = hdwallet.derivePath(wallet_hdpath + '0').getWallet()
  return {
    priv: wallet._privKey.toString('hex'),
    pub: '0x' + wallet.getAddress().toString('hex')
  }
}

module.exports = generate
