import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const EarningsValue = () => {
  return (
    <Grid container justifyContent="space-between">
      <Typography variant="h3">Earnings from Sett vaults</Typography>
      <Typography variant="h3" color="textSecondary">
        $1,434.66
      </Typography>
    </Grid>
  );
};

export default EarningsValue;
