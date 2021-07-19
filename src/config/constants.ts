import { SettVaultPair } from '../model/sett-vault-pair';

export const uniVaults: Array<SettVaultPair> = [
  { id: '0', ticker: 'wBTC/Digg', source: 'UNI', logo: '/img/settvaults/wbtc-digg.png' },
  { id: '1', ticker: 'Badger/wBTC', source: 'UNI', logo: '/img/settvaults/badger-wbtc-1.png' },
];
export const sushiVaults: Array<SettVaultPair> = [
  { id: '2', ticker: 'Wrapped BTC/Digg', source: 'SUSHI', logo: '/img/settvaults/wbtc-digg-1.png' },
  { id: '3', ticker: 'Wrapped BTC/Badger', source: 'SUSHI', logo: '/img/settvaults/badger-wbtc.png' },
  { id: '4', ticker: 'Wrapped BTC/Wrapped Ether', source: 'SUSHI', logo: '/img/settvaults/wbtc-eth.png' },
];
export const curveVaults: Array<SettVaultPair> = [
  { id: '5', ticker: 'crvRenWBTC', source: 'CURVE', logo: '/img/settvaults/crvRenWBTC.png' },
  { id: '6', ticker: 'renBTC/wBTC/sBTC', source: 'CURVE', logo: '/img/settvaults/sBTC.png' },
  { id: '7', ticker: 'tBTC/sBTCCrv LP', source: 'CURVE', logo: '/img/settvaults/sBTCCrv LP.png' },
  { id: '8', ticker: 'crvRenWBTC', source: 'CURVE', logo: '/img/settvaults/crvRenWBTC.png', tag: 'HARVEST' },
];
