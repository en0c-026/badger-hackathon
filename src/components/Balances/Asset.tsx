import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyleBalances } from '.';

const Asset = () => {
  const classes = useStyleBalances();
  return (
    <div className={classes.baseCard}>
      <Typography>asdasd</Typography>
    </div>
  );
};

export default Asset;
