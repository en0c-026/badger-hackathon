import { Grid, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../..';
import AllocationCard, { AllocationCardProps } from './AllocationCard';

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

const Allocation = () => {
  const classes = useStyleAllocation();
  const { StrategyInfo } = useStore();
  const assetsPayload: AllocationCardProps = {
    title: 'Asset Allocation',
    subtitle: 'Subtext',
    data: StrategyInfo,
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
