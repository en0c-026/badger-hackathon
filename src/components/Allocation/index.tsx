import React, { useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import AllocationCard, { AllocationCardProps } from './AllocationCard';
import { StoreContext } from '../../config/context';

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
  { name: 'WBTC', allocation: 50.22895, balance: 1.71575834, value: 66022.941038, valueInBtc: 1.0 },
  { name: 'WETH', allocation: 12.02405, balance: 6.84728131, value: 15804.892228, valueInBtc: 0.05998388 },
  { name: 'USDT', allocation: 10.23445, balance: 13452.57045822, value: 13452.570458, valueInBtc: 0.00002598 },
  { name: 'BADGER', allocation: 9.03152, balance: 1226.94811476, value: 11871.391188, valueInBtc: 0.00025144 },
  { name: 'DIGG', allocation: 7.93744, balance: 0.31092346, value: 10481.544504, valueInBtc: 0.87605828 },
  { name: 'ibBTC', allocation: 7.05744, balance: 0.24312801, value: 9276.581433, valueInBtc: 0.99154899 },
  { name: 'cvxCRV', allocation: 3.52554, balance: 2966.63379528, value: 4634.835761, valueInBtc: 0.0000406 },
];

const Allocation = () => {
  const classes = useStyleAllocation();
  const { StrategyInfo } = useContext(StoreContext);

  // assetsPayload, it contains fixed data.
  // Until it is implemented in the APY.
  const assetsPayload: AllocationCardProps = {
    title: 'Asset Allocation',
    subtitle: 'Subtext',
    data: AssetInfoDemo,
    path: 'assets',
  };
  const strategiesPayload: AllocationCardProps = {
    title: 'Strategy Allocation',
    subtitle: 'Subtext',
    data: StrategyInfo,
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
