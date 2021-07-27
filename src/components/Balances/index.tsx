import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useStore } from '../..';
import TableBalances, { PayloadProps } from './TableBalances';

// This is a demo of what it should return, AssetInfo getter from the store.
// When this data is available in the API.
const AssetInfoDemo = [
  { name: 'WBTC', allocation: 50.22895, balance: 1.71575834, value: 66022.941038, valueInBtc: 1.0 },
  { name: 'WETH', allocation: 12.02405, balance: 6.84728131, value: 15804.892228, valueInBtc: 0.05998388 },
  { name: 'USDT', allocation: 10.23445, balance: 13452.57045822, value: 13452.570458, valueInBtc: 0.00002598 },
  { name: 'BADGER', allocation: 9.03152, balance: 1226.94811476, value: 11871.391188, valueInBtc: 0.00025144 },
  { name: 'DIGG', allocation: 7.93744, balance: 0.31092346, value: 10481.544504, valueInBtc: 0.87605828 },
  { name: 'ibBTC', allocation: 7.05744, balance: 0.24312801, value: 9276.581433, valueInBtc: 0.99154899 },
  { name: 'cvxCRV', allocation: 3.52554, balance: 2966.63379528, value: 4634.835761, valueInBtc: 0.0000406 },
];

export const useStyleBalances = makeStyles((theme: Theme) => ({
  rootContainer: {
    minWidth: '100%',
    marginBottom: theme.spacing(3),
  },
  baseCard: {
    padding: 0,
    color: '#FFFFFF',
    backgroundColor: '#1E1E1E',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  tableHeader: {
    backgroundColor: '#1E1E1E',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '28px 24px',
  },
  modalStrategy: {
    color: theme.palette.primary.main,
    position: 'absolute',
    padding: '12px 24px',
    top: '50%',
    left: '50%',
    outline: 'none',
    transform: 'translate(-50%, -50%)',
    minWidth: '760px',
    maxHeight: '580px',
    backgroundColor: '#222222',
    border: '1px solid #111111',
    borderRadius: '8px',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.75)',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#222222',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#111111',
      borderRadius: '8px',
    },
  },
  modalGrid: {
    paddingBottom: '16px',
  },
  vaultDetailsCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    margin: '8px 0px 16px 0px',
  },
  holdingsCard: {
    backgroundColor: '#222222',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    margin: '8px 0px 16px 0px',
  },
}));

const Balances = () => {
  const classes = useStyleBalances();
  const { totalValueSetts, StrategyInfo } = useStore();

  // payloadAsset, it contains fixed data.
  // Until it is implemented in the APY.
  const payloadAsset: PayloadProps = {
    cardHead: {
      total: 131465.023321,
      title: 'Asset Balances',
      subtitle: 'Assets that are in your wallet',
      subtitle2: 'Your total asset holdings',
    },
    headerRow: {
      col1: 'Tokens',
      col2: 'Portfolio % Alloc.',
      col3: 'Price',
      col4: 'Balance',
    },
    balancesData: AssetInfoDemo,
  };
  const payloadStrategy: PayloadProps = {
    cardHead: {
      total: totalValueSetts,
      title: 'Strategy Balances',
      subtitle: 'Balances across all strategies',
      subtitle2: 'Your total  strategy balances',
    },
    headerRow: {
      col1: 'Strategy',
      col2: 'Portfolio % Alloc.',
      col3: 'Yearly ROI',
      col4: 'Deposit Balance',
    },
    balancesData: StrategyInfo,
  };
  return (
    <div className={classes.rootContainer}>
      <TableBalances target="asset" payload={payloadAsset} />
      <TableBalances target="strategy" payload={payloadStrategy} />
    </div>
  );
};

export default observer(Balances);
