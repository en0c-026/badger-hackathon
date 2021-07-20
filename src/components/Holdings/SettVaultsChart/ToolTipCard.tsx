import { Card, Grid, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import { useStyleVaultsChart } from '.';
import { arraySum, formatNumber } from '../../../utils';
import DotColorVault from './DotColorVault';

const ToolTipCard = memo(({ active, payload, label }: any) => {
  const classes = useStyleVaultsChart();
  return (
    <Card className={classes.toolTipCard}>
      <Typography variant="body2">{label}</Typography>
      {active &&
        payload.map((item: any, index: any) => {
          if (item.type !== 'none') {
            return (
              <Grid key={index} container justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="primary">
                  <DotColorVault color="#FFFFFF" />
                  {item.name}
                </Typography>
                <Typography variant="body2" color="primary">
                  {formatNumber(item.value)}
                </Typography>
              </Grid>
            );
          }
        })}
      <Grid container justifyContent="space-between" style={{ paddingTop: '16px' }}>
        <Typography variant="body2" color="textPrimary">
          Total
        </Typography>
        <Typography variant="body1" color="primary">
          {active && arraySum(payload)}
        </Typography>
      </Grid>
    </Card>
  );
});

export default ToolTipCard;
