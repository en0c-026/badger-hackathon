import React from 'react';
import { Card, Table, TableBody, TableHead, Typography } from '@material-ui/core';
import { StyledTabCell, StyledTableRow, useStyleBalances } from '.';
import CardHead, { CardHeadProps } from './CardHead';
import { formatNumber } from '../../utils';
import HeaderRow, { HeadRowProps } from './HeaderRow';

const rows = [
  { name: 'Badger', priceUsd: 8, priceBtc: 0.00025, allocation: 250, balance: 445 },
  { name: 'Digg', priceUsd: 25400, priceBtc: 0.7554, allocation: 15, balance: 1.25 },
];

const AssetsTable = () => {
  const classes = useStyleBalances();
  const payloadCardHead: CardHeadProps = {
    total: 30000,
    title: 'Asset Balances',
    subtitle: 'Assets that are in your wallet',
    subtitle2: 'Your total asset holdings',
  };
  const payloadHeaderRow: HeadRowProps = {
    col1: 'Tokens',
    col2: 'Portfolio % Alloc.',
    col3: 'Price',
    col4: 'Balance',
  };
  return (
    <Card className={classes.baseCard}>
      <CardHead {...payloadCardHead} />
      <Table className={classes.table} padding="none" aria-label="simple table">
        <TableHead>
          <HeaderRow {...payloadHeaderRow} />
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTabCell>
                <Typography variant="h5">{row.name}</Typography>
                <Typography variant="h6" color="textPrimary">
                  {formatNumber(row.balance * row.priceUsd)}
                </Typography>
              </StyledTabCell>
              <StyledTabCell align="center">{row.allocation}%</StyledTabCell>
              <StyledTabCell align="center">
                <Typography>{formatNumber(row.priceUsd)}</Typography>
                <Typography variant="h6" color="textPrimary">
                  {row.priceBtc}
                </Typography>
              </StyledTabCell>
              <StyledTabCell align="right">
                {row.balance}
                <Typography variant="h6" color="textPrimary">
                  {formatNumber(row.balance * row.priceUsd)}
                </Typography>
              </StyledTabCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default AssetsTable;
