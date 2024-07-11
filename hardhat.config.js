require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const { MNEMONIC, INFURA, ETHERSCAN_API, POLYGONSCAN_API, BSCSCAN_API, BASESCAN_API, SNOWTRACE_API } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // If needed, configure Hardhat network specifics here (like mining intervals, initial base fee, etc.)
    },
    development: {
      url: "http://127.0.0.1:8545",
      chainId: 1337  // Default chain ID for local Hardhat network
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/` + INFURA,
      chainId: 11155111,
      gas: 5000000,
      accounts: { mnemonic: MNEMONIC }
    },
    base: {
      url: `https://base-mainnet.g.alchemy.com/v2/${INFURA}`,
      chainId: 8453,
      gas: 5500000,
      accounts: { mnemonic: MNEMONIC }
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      gas: 15000000,
      accounts: { mnemonic: MNEMONIC }
    },
    fuji: {
      url: `https://avalanche-fuji.infura.io/v3/${INFURA}`,
      chainId: 43113,
      gas: 15000000,
      accounts: { mnemonic: MNEMONIC }
    }
  },
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      },
      evmVersion: "shanghai",
      viaIR: true
    }
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API,
      sepolia: ETHERSCAN_API,
      polygon: POLYGONSCAN_API,
      bsc: BSCSCAN_API,
      base: BASESCAN_API,
      avalanche: SNOWTRACE_API,
      avalancheFujiTestnet: SNOWTRACE_API,
      snowtrace: "snowtrace", // apiKey is not required, just set a placeholder
    }
  },
  sourcify: {
    enabled: true
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 1800000
  }
};
