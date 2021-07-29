import React from 'react';
import { Card, Grid, Typography, withStyles } from '@material-ui/core';
import { useStyleAllocation } from '.';
import SingleItem from './SingleItem';
import { observer } from 'mobx-react-lite';
import PastelChart from './PastelChart';

export interface AllocationCardProps {
  title: string;
  subtitle: string;
  path: string;
  data: any[];
}

const GridStyled = withStyles(() => ({
  root: {
    maxHeight: '328px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#222222',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#111111',
      borderRadius: '8px',
    },
  },
}))(Grid);

const AllocationCard = ({ title, subtitle, path, data }: AllocationCardProps) => {
  const classes = useStyleAllocation();
  return (
    <Card className={classes.baseCard}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        {subtitle}
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <PastelChart data={data} />
        </Grid>
        <GridStyled item xs={12} md={6}>
          {data.map((asset) => (
            <SingleItem key={`item-${asset.name}`} path={path} name={asset.name} allocation={asset.allocation} />
          ))}
        </GridStyled>
      </Grid>
    </Card>
  );
};

export default observer(AllocationCard);
