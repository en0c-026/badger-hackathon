import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { useStyleCard } from '.';

const CardRight = () => {
  const classes = useStyleCard();
  return (
    <Card className={classes.baseCard}>
      <Typography variant="caption">1.69</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        My Boost
      </Typography>
      <Typography variant="h4">Rank No. 420</Typography>
    </Card>
  );
};

export default CardRight;
