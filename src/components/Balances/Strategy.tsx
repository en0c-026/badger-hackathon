import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyleCardBalances } from '.';

const Strategy = () => {
  const classes = useStyleCardBalances();
  return (
    <div className={classes.baseCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Strategy;
