import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useStyleHeader } from '.';
const CardRight = ({ boost, boostRank }: { boost?: number; boostRank?: number }) => {
  const classes = useStyleHeader();
  return (
    <Card data-testid="card-right" className={classes.baseCard}>
      <Typography variant="caption">{boost?.toFixed(2)}</Typography>
      <Typography variant="subtitle1" color="textPrimary">
        My Boost
      </Typography>
      <Typography variant="h4">
        Rank No. <span>{boostRank}</span>
      </Typography>
    </Card>
  );
};

export default observer(CardRight);
