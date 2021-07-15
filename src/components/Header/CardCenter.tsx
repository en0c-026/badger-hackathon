import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { useStyleCard } from '.';

const CardCenter = () => {
  const classes = useStyleCard();
  return (
    <Card className={classes.baseCard}>
      <Typography>asd</Typography>
      <Typography>asd</Typography>
    </Card>
  );
};

export default CardCenter;
