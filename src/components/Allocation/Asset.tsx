import React from 'react';
import { useStyleCardAllocation } from '.';
import { Typography } from '@material-ui/core';

const Asset = () => {
  const classes = useStyleCardAllocation();
  return (
    <div className={classes.baseCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Asset;
