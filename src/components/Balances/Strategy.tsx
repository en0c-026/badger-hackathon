import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyleBalances } from '.';

const Strategy = () => {
  const classes = useStyleBalances();
  return (
    <div className={classes.baseCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Strategy;
