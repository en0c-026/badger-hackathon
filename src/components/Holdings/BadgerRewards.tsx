import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const BadgerRewards = () => {
  return (
    <Grid container justifyContent="space-between">
      <Typography variant="subtitle1" color="textPrimary">
        Compounding and $BADGER rewards
      </Typography>
      <Typography variant="subtitle1">271.14 $BADGER</Typography>
    </Grid>
  );
};

export default BadgerRewards;
