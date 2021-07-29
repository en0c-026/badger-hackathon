import React, { useContext } from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import { useStyleHeader } from '.';
import { formatNumber } from '../../utils';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../config/context';

const CardCenter = () => {
  const classes = useStyleHeader();
  const { account, claimableTotal, claimable } = useContext(StoreContext);
  return (
    <Card className={classes.baseCard}>
      <Typography variant="caption">{formatNumber(claimableTotal)}</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Pending
      </Typography>
      <Button variant="contained" size="small" className={classes.button} disabled={!claimable} fullWidth>
        <Typography variant="overline" color="primary">
          CLAIM ALL PENDING ({account?.claimableBalances.length})
        </Typography>
      </Button>
    </Card>
  );
};

export default observer(CardCenter);
