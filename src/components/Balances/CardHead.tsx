import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyleBalances } from '.';
import { formatNumber } from '../../utils';

export interface CardHeadProps {
  total: number;
  title: string;
  subtitle: string;
  subtitle2: string;
}

const CardHead = ({ total, title, subtitle, subtitle2 }: CardHeadProps) => {
  const classes = useStyleBalances();
  return (
    <Box className={classes.tableHeader}>
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h4" color="textPrimary">
          {subtitle}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" color="textSecondary" align="right">
          {formatNumber(total)}
        </Typography>
        <Typography variant="h4" color="textPrimary" align="right">
          {subtitle2}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardHead;
