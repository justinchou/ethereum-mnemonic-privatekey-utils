const generate = require('./index')

const mnemonic = 'yesterday once more happy bride smile short lovers make life sound great'
const keypair = generate(mnemonic)

console.log(keypair)

