import { DeployFunction } from 'hardhat-deploy/types';
import { FACTORY_ADDRESS } from '@sushiswap/core-sdk';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const deployFunction: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
  getChainId,
  ethers,
  run,
}: HardhatRuntimeEnvironment) {};
