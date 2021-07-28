import { makeStyles, Paper } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Area, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { kFormatt } from '../../../utils';
import ToolTipCard from './ToolTipCard';

// This is a demo, it contains fixed data.
// Until it is implemented in the APY.
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const useStyleVaultsChart = makeStyles({
  paperChart: {
    margin: '20px 0px',
    backgroundColor: '#101010',
    borderRadius: '8px',
    width: '100%',
    height: '480px',
  },
  toolTipCard: {
    backgroundColor: '#000000',
    opacity: '80%',
    minWidth: '264px',
    height: 'auto',
    padding: '9px 18px 24px',
  },
});

const testArray = [
  { name: 'pv', color: '#FFCC33' },
  { name: 'uv', color: '#0066FF' },
  { name: 'amt', color: '#FF1FFF' },
];

const PriceTick = (props: any): ReactElement<SVGElement> => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} textAnchor="start" fill="#FFFFFF">
      ${kFormatt(payload.value)}
    </text>
  );
};

const DateTick = ({ x, y, payload }: { x?: number; y?: number; payload?: any }): ReactElement<SVGElement> => {
  return (
    <text x={x} y={y} textAnchor="middle" fill="#FFFFFF">
      {payload.value}
    </text>
  );
};
// This component is a demo, it contains fixed data.
// Until it is implemented in the APY.

export const SettVaultsChart = () => {
  const classes = useStyleVaultsChart();
  return (
    <Paper className={classes.paperChart}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <Tooltip content={<ToolTipCard />} />
          <XAxis
            dataKey="name"
            mirror
            axisLine={false}
            tickLine={{ stroke: '#52B330', strokeWidth: 2 }}
            tickMargin={13}
            tick={<DateTick />}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={7}
            mirror
            padding={{ top: 50, bottom: 25 }}
            tick={<PriceTick />}
          />
          <defs>
            {testArray.map((key: any, index: any) => (
              <linearGradient key={index} id={key.name} x1="0" y1="0" x2="0" y2="1">
                <stop offset="55%" stopColor={key.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.0001} />
              </linearGradient>
            ))}
          </defs>
          {testArray.map((key: any, index: any) => (
            <Area
              key={index}
              type="linear"
              dataKey={key.name}
              stroke={key.color}
              strokeWidth={4}
              fillOpacity={1}
              fill={`url(#${key.name})`}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  );
};
