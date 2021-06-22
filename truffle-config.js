const HDWalletProvider = require("@truffle/hdwallet-provider");

//load single private key as string
const privateKeys = [
  process.ENV.PRIVATE_KEY_MAINNET
  process.ENV.PRIVATE_KEY_TESTNET
];

const provider_mainnet =  new HDWalletProvider(privateKeys[0], 'https://bsc-dataseed.binance.org');
const provider_testnet =  new HDWalletProvider(privateKeys[1], 'https://data-seed-prebsc-2-s3.binance.org:8545');


module.exports = {

  networks: {
    mainnet: {
       gas: 18000000,
       gasPrice:5000000000, 
       provider:provider_mainnet,
       network_id: 56
    },
    testnet: {
      gas: 15000000,
      gasPrice:5000000000, 
      provider:provider_testnet,
      network_id: 97
   },    
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      //  evmVersion: "byzantium"
       }
    },
    solc: {
      version: "0.5.8",    // Fetch exact version from solc-bin (default: truffle's version)
     // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
     //  evmVersion: "byzantium"
      }
   },
   solc: {
    version: "0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
   // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
    settings: {          // See the solidity docs for advice about optimization and evmVersion
     optimizer: {
       enabled: true,
       runs: 200
     },
   //  evmVersion: "byzantium"
    }
 }       
  }
}
