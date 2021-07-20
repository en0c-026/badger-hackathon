import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Asset from './Asset';
import Strategy from './Strategy';

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

const Allocation = () => {
  const classes = useStyleAllocation();
  return (
    <Grid container spacing={2} wrap="nowrap" className={classes.rootContainer}>
      <Grid item xs={6}>
        <Asset />
      </Grid>
      <Grid item xs={6}>
        <Strategy />
      </Grid>
    </Grid>
  );
};

export default Allocation;
