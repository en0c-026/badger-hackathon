import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyleCardAllocation } from '.';

const Strategy = () => {
  const classes = useStyleCardAllocation();
  return (
    <div className={classes.baseCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Strategy;
