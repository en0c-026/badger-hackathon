import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useStore } from '../..';
import TableBalances, { PayloadProps } from './TableBalances';

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
  table: {},
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
    minWidth: '580px',
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

  const payloadAsset: PayloadProps = {
    cardHead: {
      total: totalValueSetts,
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
    balancesData: StrategyInfo,
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
