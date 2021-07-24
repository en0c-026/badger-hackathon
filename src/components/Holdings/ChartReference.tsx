import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import DotColorVault from './SettVaultsChart/DotColorVault';

const CharReference = (props: any) => {
  const { activeVaults } = props;
  return (
    <Grid container justifyContent="space-between" wrap="nowrap">
      <Grid container>
        {activeVaults.map((vault: any, i: any) => (
          <Typography key={i} variant="body2">
            <DotColorVault color={vault.color} />
            {vault.name}
          </Typography>
        ))}
      </Grid>
      <Grid container wrap="nowrap" justifyContent="flex-end">
        <Typography variant="subtitle1" color="textPrimary">
          Data as of :29 May, 2021 11:39 PM
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CharReference;
