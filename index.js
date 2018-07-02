const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/hdkey');
const keythereum = require('keythereum');

exports.debug = false;

function getPrivateKeyFromMnemonic(mnemonic) {
	const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
	const wallet_hdpath = "m/44'/60'/0'/0/";

	const wallet = hdwallet.derivePath(wallet_hdpath + '0').getWallet();
	const privateKey = wallet._privKey.toString('hex');
	const account = '0x' + wallet.getAddress().toString('hex').toUpperCase();

	if (exports.debug)
		console.log({
			mnemonic: mnemonic,
			privateKey: privateKey,
			account: account
		});

	return privateKey;
}

exports.getPrivateKeyFromMnemonic = getPrivateKeyFromMnemonic;

function getPrivateKeyFromRandom() {
	const params = { keyBytes: 32, ivBytes: 16 };
	const dk = keythereum.create(params);

	const privateKey = dk.privateKey.toString('hex');

	if (exports.debug)
		console.log({
			privateKey: privateKey,
			salt: dk.salt.toString('hex'),
			iv: dk.iv.toString('hex')
		});

	return privateKey;
}

exports.getPrivateKeyFromRandom = getPrivateKeyFromRandom;

function getPrivateKeyFromKeystore(keystore, password) {
	const privateKeyBuf = keythereum.recover(password, keystore);
	const privateKey = privateKeyBuf.toString('hex');

	if (exports.debug)
		console.log({
			privateKey: privateKey,
			password: password,
			keystore: keystore
		});

	return privateKey;
}

exports.getPrivateKeyFromKeystore = getPrivateKeyFromKeystore;

function getKeystoreFromPrivateKey(privateKey, password) {
	const params = { keyBytes: 32, ivBytes: 16 };
	const dk = keythereum.create(params);

	const options = {
		kdf: 'pbkdf2',
		cipher: 'aes-128-ctr',
		kdfparams: {
			c: 262144,
			dklen: 32,
			prf: 'hmac-sha256'
		}
	};

	// const keystore = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options);
	const keystore = keythereum.dump(password, privateKey, dk.salt, dk.iv, options);

	if (exports.debug) {
		console.log({
			privateKey: privateKey,
			password: password,
			keystore: keystore
		});
	}

	return keystore;
}

exports.getKeystoreFromPrivateKey = getKeystoreFromPrivateKey;
