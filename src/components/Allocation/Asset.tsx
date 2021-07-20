import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyleAllocation } from '.';

const Asset = () => {
  const classes = useStyleAllocation();
  return (
    <div className={classes.baseCard}>
      <Typography>asd</Typography>
    </div>
  );
};

export default Asset;
