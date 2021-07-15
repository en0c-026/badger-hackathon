import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyleHoldings = makeStyles(() => ({
  rootCard: {
    minHeight: '696px',
    marginBottom: '24px',
    padding: '32px 24px',
    color: '#FFFFFF',
    backgroundColor: '#2B2B2B',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
  },
}));

const Holdings = (): JSX.Element => {
  const classes = useStyleHoldings();
  return (
    <div className={classes.rootCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Holdings;
