const pkutils = require('./index');

pkutils.debug = false;

const mnemonic = 'yesterday once more happy bride smile short lovers make life sound great';
const password = 'this is a totally long password';

console.log('mnemonic:         %s', mnemonic);
console.log('password:         %s', password);

const privateKeyGen = pkutils.getPrivateKeyFromMnemonic(mnemonic);
console.log('private key:      %s', privateKeyGen);

const keystore = pkutils.getKeystoreFromPrivateKey(privateKeyGen, password);
console.log('key store:        %j', keystore);

const privateKeyParsed = pkutils.getPrivateKeyFromKeystore(keystore, password);
console.log('private key:      %s', privateKeyParsed);

const account = keystore.address;
console.log('account address:  %s', account);
