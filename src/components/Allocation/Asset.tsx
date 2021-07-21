import React from 'react';
import { Avatar, Box, Card, Grid, Typography } from '@material-ui/core';
import { useStyleAllocation } from '.';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { colors } from '../../config/constants';

const assets = [
  { name: 'BADGER', value: 50 },
  { name: 'DIGG', value: 25 },
  { name: 'WBTC', value: 10 },
  { name: 'CVX', value: 15 },
];

const SingleAsset = (props: any) => {
  const { name, value } = props;
  return (
    <Box display="flex" pt={1} mb={2}>
      <Avatar src={`/img/assets/${name}.png`} style={{ marginRight: '12px' }} />
      <div>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {value}%
        </Typography>
      </div>
    </Box>
  );
};

const Asset = () => {
  const classes = useStyleAllocation();
  return (
    <Card className={classes.baseCard}>
      <Typography variant="h4">Asset Allocation</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Subtext
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs>
          <PieChart width={240} height={240}>
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Pie data={assets} dataKey="value" nameKey="name" cx="50%" cy="50%">
              {assets.map((asset, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Pie>
          </PieChart>
        </Grid>
        <Grid item xs>
          {assets.map((asset, i) => (
            <SingleAsset key={i} {...asset} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Asset;
