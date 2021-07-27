import { Card, Typography, Grid, Divider } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { useStyleHeader } from '.';
import { useStore } from '../..';
import { formatNumber } from '../../utils';

const data = [
  { name: '1', uv: '1050' },
  { name: '2', uv: '1300' },
  { name: '3', uv: '1000' },
  { name: '4', uv: '500' },
  { name: '5', uv: '800' },
  { name: '6', uv: '700' },
  { name: '7', uv: '600' },
];

const CardLeft = () => {
  const classes = useStyleHeader();
  const { account, earnedValuePercent, earnedBadgerValue } = useStore();
  return (
    <Card className={classes.baseCard}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">{formatNumber(account?.value)}</Typography>
          <Typography variant="h3" color="textPrimary">
            Your net worth
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={120} height={70} data={data} margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#467D33" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9AFF77" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="linear" dataKey="uv" stroke="#52B330" strokeWidth={4} fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography variant="h6" color="textSecondary">
            {earnedValuePercent.toFixed(3)}%
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            ROI in %
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h6">{formatNumber(account?.earnedValue)}</Typography>
          <Typography variant="subtitle2" color="textPrimary">
            ROI in $ value
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">{earnedBadgerValue.toFixed(2)}</Typography>
          <Typography variant="subtitle2" color="textPrimary">
            Earned $Badger
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default observer(CardLeft);
