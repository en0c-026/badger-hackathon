import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import { useStyleAllocation } from '.';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { colors } from '../../config/constants';
import SingleItem from './SingleItem';

export interface AllocationCardProps {
  title: string;
  subtitle: string;
  path: string;
  data: Array<{ name: string; value: number }>;
}
const AllocationCard: React.FC<AllocationCardProps> = ({ title, subtitle, path, data }) => {
  const classes = useStyleAllocation();
  return (
    <Card className={classes.baseCard}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        {subtitle}
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <PieChart width={240} height={240}>
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Pie data={data} dataKey="value" nameKey="name" cx="40%" cy="50%">
              {data.map((single, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Pie>
          </PieChart>
        </Grid>
        <Grid item xs={12} md={6}>
          {data.map((asset, i) => (
            <SingleItem key={i} path={path} {...asset} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default AllocationCard;
