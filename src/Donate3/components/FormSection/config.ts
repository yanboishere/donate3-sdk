import arbIcon from './../../images/coin/arb_icon.png';
import ethIcon from './../../images/coin/eth_icon.png';
import maticIcon from './../../images/coin/matic_icon.png';
import opIcon from './../../images/coin/op_icon.png';

import usdcIcon from './../../images/coin/usdc_icon.png';
import usdtIcon from './../../images/coin/usdt_icon.png';

export interface IToken {
  address: string;
  name: string;
  logo: string;
  selected?: boolean;
  symbol: string;
  abi?: string;
  isErc20?: boolean;
}

export const DEFAULT_COIN_ADDRESS =
  '0x0000000000000000000000000000000000000000';

export const defaultMainnet = {
  logo: ethIcon,
  name: 'ETH',
  symbol: 'ETH',
  address: DEFAULT_COIN_ADDRESS,
  selected: true,
  isErc20: false,
};

export const defaultOptimism = {
  logo: opIcon,
  name: 'ETH',
  symbol: 'ETH',
  address: DEFAULT_COIN_ADDRESS,
  selected: true,
  isErc20: false,
};

export const defaultPolygon = {
  logo: maticIcon,
  name: 'Matic',
  symbol: 'MATIC',
  address: DEFAULT_COIN_ADDRESS,
  selected: true,
  isErc20: false,
};

export const defaultArbitrum = {
  logo: arbIcon,
  name: 'Arbitrum',
  symbol: 'ARB',
  address: DEFAULT_COIN_ADDRESS,
  selected: true,
  isErc20: false,
};

const mainnetTokens = [
  {
    logo: usdcIcon,
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    selected: false,
    isErc20: true,
  },
  {
    logo: usdtIcon,
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    selected: false,
    isErc20: true,
  },
];

const optimismTokens = [
  {
    logo: usdcIcon,
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    selected: false,
    isErc20: true,
  },
  {
    logo: usdtIcon,
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    selected: false,
    isErc20: true,
  },
];

const optimismGoerliTokens = [
  {
    logo: ethIcon,
    name: 'WETH',
    symbol: 'WETH',
    address: '0x4200000000000000000000000000000000000006',
    selected: false,
    isErc20: true,
  },
]



const polygonTokens = [
  {
    logo: usdcIcon,
    name: 'USD Coin (PoS)',
    symbol: 'USDC',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    selected: false,
    isErc20: true,
  },
  {
    logo: usdtIcon,
    name: '(PoS) Tether USD',
    symbol: 'USDT',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    selected: false,
    isErc20: true,
  },
];

const arbitrumTokens = [
  {
    logo: usdcIcon,
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    selected: false,
    isErc20: true,
  },
  {
    logo: usdtIcon,
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    selected: false,
    isErc20: true,
  },
];

const sepoliaTokens = [
  {
    logo: ethIcon,
    name: 'UNI',
    symbol: 'UNI',
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    selected: false,
    isErc20: true,
  },
];

const goerliTokens = [
  {
    logo: ethIcon,
    name: 'WETH',
    symbol: 'WETH',
    address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    selected: false,
    isErc20: true,
  },
];

export const mainnetTokensInfo = [defaultMainnet, ...mainnetTokens];

export const optimismTokensInfo = [defaultOptimism, ...optimismTokens];

export const optimismGoerliTokensInfo = [defaultOptimism, ...optimismGoerliTokens];

export const polygonTokensInfo = [defaultPolygon, ...polygonTokens];

export const arbitrumTokensInfo = [defaultArbitrum, ...arbitrumTokens];

export const sepoliaTokensInfo = [defaultMainnet, ...sepoliaTokens];

export const goerliTokensInfo = [defaultMainnet, ...goerliTokens];

export const testNetTokensInfo = [defaultMainnet];
