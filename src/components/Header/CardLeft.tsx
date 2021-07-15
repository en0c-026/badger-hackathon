import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { useStyleCard } from '.';

const CardLeft = () => {
  const classes = useStyleCard();
  return (
    <Card className={classes.baseCard}>
      <Typography>asd</Typography>
      <Typography>asd</Typography>
    </Card>
  );
};

export default CardLeft;
