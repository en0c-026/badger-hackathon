import { Box, Avatar, Typography } from '@material-ui/core';
import React from 'react';

export interface SingleAssetProps {
  name: string;
  value: number;
  path: string;
}
const SingleAsset = ({ name, value, path }: SingleAssetProps) => {
  return (
    <Box display="flex" pt={1} mb={2}>
      <Avatar src={`/img/${path}/${name}.png`} style={{ marginRight: '12px' }} />
      <div>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {value}%
        </Typography>
      </div>
    </Box>
  );
};

export default SingleAsset;
