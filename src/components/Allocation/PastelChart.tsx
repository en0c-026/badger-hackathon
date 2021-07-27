import React from 'react';
import { PieChart, Tooltip, Pie, Cell } from 'recharts';
import { observer } from 'mobx-react-lite';
import { colors } from '../../config/constants';
import { Box } from '@material-ui/core';

type PastelChartProps = {
  data: Array<{ name: string; allocation: number }>;
};

const PastelChart = ({ data }: PastelChartProps) => {
  return (
    <Box display="flex" justifyContent="center">
      <PieChart width={248} height={248}>
        <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
        <Pie data={data} dataKey="allocation" nameKey="name" cx="45%" cy="50%">
          {data.map((cell, i) => (
            <Cell key={`item-${cell}`} fill={colors[i]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default observer(PastelChart);
