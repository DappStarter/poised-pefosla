require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift return night social inflict glide equal gas'; 
let testAccounts = [
"0xb3f04cff39e68d505696028ed283a0bb68bc53213627d99d51f8d8978cdc4131",
"0xa8eb815841e22b30cc4e363c37bbe1306fb8cef7a0a1dcbdd0715b6da0550f76",
"0x78c2c6d8586e57a63f57c81c048a2d527ccc5bc55addded1488e8b23bb5bb44d",
"0x4cd2b164af51792362d0e60599cbdb89722ff6c6cdb8dabbbcd930c1918db598",
"0x16289a679c21af9e9c8a88ab9e1a1f736b7935913a543ff888b98185c54ed28d",
"0xcc532a1cf6c582d4f088d950c0f1987029210ccf28113ec1324bb1d463873ee6",
"0xdbff09146d8fce07d3e5feaaa823468b482fab86b086d436b93cc5f900b7a43e",
"0xe96eb1525c9d9eedcc9b926c31c629a60161c1bbbc27e954aa9c249f630bc2b7",
"0xef6f442300e4d132ee32e5b00fa8979055feeb298b9f83ea036edeffec5a712f",
"0xfe4566daa5a8139cc9258f95166b8a970c51d2df93aad035ad922275e20d9829"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

