import React from 'react';
import { useStyleCardBalances } from '.';
import { Typography } from '@material-ui/core';

const Asset = () => {
  const classes = useStyleCardBalances();
  return (
    <div className={classes.baseCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Asset;
