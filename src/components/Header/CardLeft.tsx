import { Card, Typography, Grid, Divider } from '@material-ui/core';
import React from 'react';
import { useStyleCard } from '.';

const CardLeft = () => {
  const classes = useStyleCard();
  return (
    <Card className={classes.styledCard}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="h1">$10,000.00</Typography>
          <Typography variant="h3" color="textPrimary">
            Your net worth
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">sda</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Typography variant="h6" color="textSecondary">
            +42.069%
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            ROI in %
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">$440,200.00</Typography>
          <Typography variant="subtitle2" color="textPrimary">
            ROI in $ value
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ paddingLeft: '25px' }}>
          <Typography variant="h6">234.14</Typography>
          <Typography variant="subtitle2" color="textPrimary">
            Earned $Badger
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardLeft;
