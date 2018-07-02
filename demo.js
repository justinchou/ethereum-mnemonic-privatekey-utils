const pkutils = require('./index');

pkutils.debug = false;

const mnemonic = 'yesterday once more happy bride smile short lovers make life sound great';
const password = 'this is a totally long password';

console.log('mnemonic               : %s', mnemonic);
console.log('password               : %s', password);

const privateKeyGen = pkutils.getPrivateKeyFromMnemonic(mnemonic);
console.log('pkey from mnemonic     : 0x%s', privateKeyGen);

const keystore = pkutils.getKeystoreFromPrivateKey(privateKeyGen, password);
console.log('\nkey store              : %j\n', keystore);

const privateKeyParsed = pkutils.getPrivateKeyFromKeystore(keystore, password);
console.log('pkey from keystore     : 0x%s', privateKeyParsed);

const account = keystore.address;
console.log('account address        : 0x%s', account);
