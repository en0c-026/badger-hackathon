import React, { useContext } from 'react';
import { Card, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useStyleHeader } from '.';
import { StoreContext } from '../../config/context';

const CardRight = () => {
  const classes = useStyleHeader();
  const { account } = useContext(StoreContext);
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
