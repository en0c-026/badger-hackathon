import { Card, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStyleHeader } from '.';
import { useStore } from '../..';

const CardRight = () => {
  const classes = useStyleHeader();
  const { account } = useStore();
  return (
    <Card className={classes.baseCard}>
      <Typography variant="caption">{account?.boost.toFixed(2)}</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        My Boost
      </Typography>
      <Typography variant="h4">Rank No. {account?.boostRank}</Typography>
    </Card>
  );
};

export default observer(CardRight);
