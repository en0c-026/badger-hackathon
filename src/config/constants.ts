export const theme = {
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#747474',
    },
    text: {
      primary: '#747474',
      secondary: '#F2A627',
    },
    divider: '#111111',
  },
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    h1: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '32px',
      lineHeight: '40px',
    },
    h2: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '20px',
      lineHeight: '28px',
    },
    h3: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '20px',
      lineHeight: '28px',
    },
    h4: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    h5: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    h6: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '13px',
      lineHeight: '21px',
    },
    subtitle2: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '13px',
      lineHeight: '16.9px',
    },
    body1: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '21px',
    },
    body2: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '13px',
      lineHeight: '21px',
    },
    caption: {
      fontFamily: '"IBM Plex Mono", mono space',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '40px',
    },
    overline: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '9px',
      letterSpacing: '1px',
    },
  },
};

export type VaultPair = {
  id: string;
  name: string;
  source: 'UNI' | 'SUSHI' | 'CURVE';
  symbol: string;
  tag?: string;
};

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
