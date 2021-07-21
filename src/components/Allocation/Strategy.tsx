import { Avatar, Box, Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { useStyleAllocation } from '.';
import { colors } from '../../config/constants';

const strategies = [
  { name: 'BADGER-WBTC', value: 40 },
  { name: 'DIGG-WBTC', value: 25 },
  { name: 'crvrenWBTC', value: 20 },
  { name: 'SLP-WBTC-ETH', value: 15 },
];

const SingleAsset = (props: any) => {
  const { name, value } = props;
  return (
    <Box display="flex" pt={1} mb={2}>
      <Avatar variant="square" src={`/img/settvaults/${name}.png`} style={{ marginRight: '12px' }} />
      <div>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {value}%
        </Typography>
      </div>
    </Box>
  );
};

const Strategy = () => {
  const classes = useStyleAllocation();
  return (
    <Card className={classes.baseCard}>
      <Typography variant="h4">Strategy Allocation</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Subtext
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs>
          <PieChart width={240} height={240}>
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Pie data={strategies} dataKey="value" nameKey="name" cx="50%" cy="50%">
              {strategies.map((strategy, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Pie>
          </PieChart>
        </Grid>
        <Grid item xs>
          {strategies.map((strategy, i) => (
            <SingleAsset key={i} {...strategy} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Strategy;
