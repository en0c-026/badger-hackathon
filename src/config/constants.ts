interface VaultPair {
  id: string;
  name: string;
  source: 'UNI' | 'SUSHI' | 'CURVE';
  symbol: string;
  tag?: string;
}

export const uniVaults: Array<VaultPair> = [
  { id: '0', name: 'wBTC/Digg', source: 'UNI', symbol: 'DIGG-WBTC' },
  { id: '1', name: 'Badger/wBTC', source: 'UNI', symbol: 'BADGER-WBTC' },
];
export const sushiVaults: Array<VaultPair> = [
  { id: '2', name: 'Wrapped BTC/Digg', source: 'SUSHI', symbol: 'SLP-DIGG-WBTC' },
  { id: '3', name: 'Wrapped BTC/Badger', source: 'SUSHI', symbol: 'SLP-BADGER-WBTC' },
  { id: '4', name: 'Wrapped BTC/Wrapped Ether', source: 'SUSHI', symbol: 'SLP-WBTC-ETH' },
  { id: '5', name: 'Wrapped BTC/ibBTC', source: 'SUSHI', symbol: 'SLP-IBBTC-WBTC' },
];
export const curveVaults: Array<VaultPair> = [
  { id: '6', name: 'renBTC/wBTC', source: 'CURVE', symbol: 'crvrenWBTC' },
  { id: '7', name: 'renBTC/wBTC/sBTC', source: 'CURVE', symbol: 'crvsBTC' },
  { id: '8', name: 'tBTC/sBTC', source: 'CURVE', symbol: 'crvtBTC' },
  { id: '9', name: 'crvRenWBTC', source: 'CURVE', symbol: 'crvrenWBTC', tag: 'HARVEST' },
];

export const colors: Array<string> = [
  '#623ea2',
  '#2e1f49',
  '#1d775d',
  '#2eff6c',
  '#9b20b7',
  '#e53aff',
  '#a8b4c2',
  '#7e8bac',
  '#5c7b8a',
  '#3e6b7d',
  '#2e5c7b',
  '#1d4b6a',
  '#0d3c5a',
  '#0d3c5a',
];
