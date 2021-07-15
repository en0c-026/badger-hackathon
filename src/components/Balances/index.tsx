import { makeStyles } from '@material-ui/core';
import React from 'react';
import Asset from './Asset';
import Strategy from './Strategy';

export const useStyleCardBalances = makeStyles(() => ({
  baseCard: {
    padding: '32px 24px',
    color: '#FFFFFF',
    width: '100%',
    backgroundColor: '#2B2B2B',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
    marginBottom: '16px',
  },
}));

const useStyleBalances = makeStyles(() => ({
  rootContainer: {
    minWidth: '100%',
    marginBottom: '24px',
  },
}));

const Balances = () => {
  const classes = useStyleBalances();
  return (
    <div className={classes.rootContainer}>
      <Asset />
      <Strategy />
    </div>
  );
};

export default Balances;
