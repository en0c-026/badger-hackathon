import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyleAllocation } from '.';

const Strategy = () => {
  const classes = useStyleAllocation();
  return (
    <div className={classes.baseCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Strategy;
