import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { getDate } from '../../utils';
import { DotColorVault } from './SettVaultsChart/ToolTipCard';

type ChartReferenceProps = {
  activeVaults: Array<{ name: string; color: string }>;
};
const ChartReference = ({ activeVaults }: ChartReferenceProps) => {
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
          Data as of :{getDate()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ChartReference;
