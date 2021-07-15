import React from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import { useStyleCard } from '.';

const CardCenter = () => {
  const classes = useStyleCard();
  return (
    <Card className={classes.baseCard}>
      <Typography variant="caption">$40,200.00</Typography>
      <Typography variant="subtitle1" color="secondary">
        Pending
      </Typography>
      <Button variant="contained" size="small" className={classes.button} fullWidth>
        <Typography variant="overline" color="primary">
          CLAIM ALL PENDING (4)
        </Typography>
      </Button>
    </Card>
  );
};

export default CardCenter;
