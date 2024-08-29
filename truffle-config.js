/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    iotexTestnet: {
          provider: () => new HDWalletProvider(mnemonic, `https://babel-api.testnet.iotex.io`),
          network_id: "4690",
          chain_id: "4690",
          timeoutBlocks: 60,
          gas: 8000000,
          gasPrice: 1000000000000,
          skipDryRun: false,
          networkCheckTimeout: 600000000,
          websockets: false
    },
    iotex: {
      provider: () => new HDWalletProvider(mnemonic, `https://babel-api.mainnet.iotex.one`),
      network_id: "4689",
      chain_id: "4689",
      timeoutBlocks: 60,
      gas: 8000000,
      gasPrice: 1000000000000,
      skipDryRun: false,
      networkCheckTimeout: 600000000,
      websockets: false
    },
  },
  plugins: ["truffle-contract-size"],

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  plugins: [
    'truffle-contract-size'
  ],

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 20
       },
      //  evmVersion: "byzantium"
      }
    }
  }
}
