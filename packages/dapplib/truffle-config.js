require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet regret ridge common inner credit frame gasp'; 
let testAccounts = [
"0x0b5423478180fb63c1106dda4816b866174f6976bfe477699908bb24db45befd",
"0x33dc8005f150b98eb0320eee86bbff7b54d3e388c13e99ffb2ff4793ac4a05f8",
"0x4b764e777f2857f473cb57e19e49140f96a2f73584c8f26e52bd2d0d9bfc67b8",
"0xd0e847483ad50c7c4faac26fa6e57a753dd366f8482e2eb3e703a0d679ba6979",
"0xb2ffab3b1050bec522297c8f88bc35fdc1b9274e731201a72288afca03e1c9ab",
"0xf194f85aef690346cfa08c82b84e5f99b217c9bd8d8089d1d9561930f5b78053",
"0x31370cf9edfb47a0c321996c0a36a67bc76535691a601f3cfd733b5a9d4eb0a6",
"0xd10c343f5ed2fd96ec6db16a4da32683f689770efc77c1417ad45e8d263019dc",
"0x37b0517561f8c6c2936e89b43fea185a36860f392b6b4cec9402402cc38285a2",
"0x77a7f2b4bb550947c69859d33a4c4cd2ac321ffc6a465c3693052cee28664332"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

