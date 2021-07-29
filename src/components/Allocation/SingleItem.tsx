import { Box, Avatar, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';

export type SingleItemProps = {
  name: string;
  allocation: number;
  path: string;
};

const SingleItem = ({ name, allocation, path }: SingleItemProps) => {
  return (
    <Box display="flex" pt={1} pl={2} mb={2}>
      <Avatar variant="square" src={`/img/${path}/${name}.png`} style={{ marginRight: '12px' }} />
      <div>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {allocation.toFixed(1)}%
        </Typography>
      </div>
    </Box>
  );
};

export default observer(SingleItem);
