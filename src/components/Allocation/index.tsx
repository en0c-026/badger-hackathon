import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import AllocationCard, { AllocationCardProps } from './AllocationCard';
import { StrategyInfo } from '../../model/strategy-info.interface';

export const useStyleAllocation = makeStyles(() => ({
  rootContainer: {
    maxHeight: '100%',
    minWidth: '100%',
    marginBottom: '24px',
  },
  baseCard: {
    padding: '32px 12px 64px 32px',
    color: '#FFFFFF',
    width: '100%',
    height: '100%',
    backgroundColor: '#2B2B2B',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
  },
}));

// This is a demo of what it should return, AssetInfo getter from the store.
// When this data is available in the API.
const AssetInfoDemo = [
  { name: 'WBTC', allocation: 50.22895 },
  { name: 'WETH', allocation: 12.02405 },
  { name: 'USDT', allocation: 10.23445 },
  { name: 'BADGER', allocation: 9.03152 },
  { name: 'DIGG', allocation: 7.93744 },
  { name: 'ibBTC', allocation: 7.05744 },
  { name: 'cvxCRV', allocation: 3.52554 },
];

type AllocationProps = {
  strategyInfo: StrategyInfo[];
};
const Allocation = ({ strategyInfo }: AllocationProps) => {
  const classes = useStyleAllocation();

  // assetsPayload, it contains fixed data.
  // Until it is implemented in the API.
  const assetsPayload: AllocationCardProps = {
    title: 'Asset Allocation',
    subtitle: 'Subtext',
    data: AssetInfoDemo,
    path: 'assets',
  };
  const strategiesPayload: AllocationCardProps = {
    title: 'Strategy Allocation',
    subtitle: 'Subtext',
    data: strategyInfo,
    path: 'settvaults',
  };
  return (
    <Grid container spacing={6} className={classes.rootContainer}>
      <Grid item xs={12} sm={6}>
        <AllocationCard {...assetsPayload} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <AllocationCard {...strategiesPayload} />
      </Grid>
    </Grid>
  );
};

export default observer(Allocation);
