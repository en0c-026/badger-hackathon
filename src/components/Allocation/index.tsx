import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AllocationCard, { AllocationCardProps } from './AllocationCard';

export const useStyleAllocation = makeStyles(() => ({
  rootContainer: {
    minHeight: '504px',
    minWidth: '100%',
    marginBottom: '24px',
  },
  baseCard: {
    padding: '32px 24px',
    color: '#FFFFFF',
    width: '100%',
    height: '100%',
    backgroundColor: '#2B2B2B',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
  },
}));

const assets = [
  { name: 'BADGER', value: 50 },
  { name: 'DIGG', value: 25 },
  { name: 'WBTC', value: 10 },
  { name: 'CVX', value: 15 },
];

const strategies = [
  { name: 'BADGER-WBTC', value: 40 },
  { name: 'DIGG-WBTC', value: 25 },
  { name: 'crvrenWBTC', value: 20 },
  { name: 'SLP-WBTC-ETH', value: 15 },
];

const Allocation = () => {
  const classes = useStyleAllocation();
  const assetsPayload: AllocationCardProps = {
    title: 'Asset Allocation',
    subtitle: 'Subtext',
    data: assets,
    path: 'assets',
  };
  const strategiesPayload: AllocationCardProps = {
    title: 'Strategy Allocation',
    subtitle: 'Subtext',
    data: strategies,
    path: 'settvaults',
  };
  return (
    <Grid container spacing={2} wrap="nowrap" className={classes.rootContainer}>
      <Grid item xs={6}>
        <AllocationCard {...assetsPayload} />
      </Grid>
      <Grid item xs={6}>
        <AllocationCard {...strategiesPayload} />
      </Grid>
    </Grid>
  );
};

export default Allocation;
