import React from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import { useStyleHeader } from '.';
import { formatNumber } from '../../utils';
import { observer } from 'mobx-react-lite';

type CardCenterProps = {
  claimableBalances?: any[];
  claimableTotal: number;
  claimable: boolean;
};

const CardCenter = ({ claimableBalances, claimableTotal, claimable }: CardCenterProps) => {
  const classes = useStyleHeader();
  return (
    <Card data-testid="card-center" className={classes.baseCard}>
      <Typography data-testid="claimable-total" variant="caption">
        {formatNumber(claimableTotal)}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Pending
      </Typography>
      <Button
        data-testid="claim-button"
        variant="contained"
        size="small"
        className={classes.button}
        disabled={!claimable}
        fullWidth
      >
        <Typography variant="overline" color="primary">
          CLAIM ALL PENDING (<span>{claimableBalances?.length}</span>)
        </Typography>
      </Button>
    </Card>
  );
};

export default observer(CardCenter);
