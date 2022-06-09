import 'dotenv/config';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';
import 'hardhat-watcher';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
// import { removeConsoleLog } from 'hardhat-preprocessor';
// import { HardhatUserConfig } from 'hardhat/config';
import { HardhatUserConfig } from 'hardhat/config';
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const accounts = {
  mneumonic: process.env.MNEUMONIC || '',
};

const namedAccounts = {
  deployer: {
    default: 0,
  },
  admin: {
    default: 1,
  },
  dev: {
    default: 2,
  },
  owner: {
    default: 3,
  },
  wallet: {
    default: 4,
  },
  beneficiary1: {
    default: 5,
  },
  beneficiary2: {
    default: 6,
  },
  user: {
    default: 7,
  },
};

export type Signers = {
  [name in keyof typeof namedAccounts]: SignerWithAddress;
};

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: 'USD',
    enabled: process.env.REPORT_GAS === 'true',
  },
  namedAccounts,
  networks: {
    ethereum_mainnet: {
      url: process.env.MAINNET_RPC_URL,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 1,
    },
    localhost: {
      live: false,
      saveDeployments: true,
      tags: ['local'],
    },
    hardhat: {
      forking: {
        enabled: process.env.FORKING === 'true',
        url: process.env.MAINNET_RPC_URL || '',
      },
      live: false,
      saveDeployments: true,
      tags: ['test', 'local'],
      gasPrice: 0,
      initialBaseFeePerGas: 0,
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ['staging'],
      gasMultiplier: 15,
    },
    kovan: {
      url: process.env.KOVAN_RPC_URL,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 42,
      live: true,
      saveDeployments: true,
      tags: ['staging'],
      gasMultiplier: 10,
    },
    polygon: {
      url: process.env.POLYGON_MAINNET_RPC_URL,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 137,
      live: true,
      saveDeployments: true,
      gasMultiplier: 2,
    },
    aurora: {
      url: 'https://mainnet.aurora.dev',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 1313161554,
      live: true,
      saveDeployments: true,
    },
  },
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
};

export default config;
