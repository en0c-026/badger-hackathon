import React from 'react';
import { Card, Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles } from '@material-ui/core';
import CardHead, { CardHeadProps } from './CardHead';
import HeaderRow, { HeadRowProps } from './HeaderRow';
import { observer } from 'mobx-react-lite';
import { useStyleBalances } from '..';
import { formatNumber } from '../../../utils';
import StrategyModal from './StrategyModal';

export const StyledTableRow = withStyles(() => ({
  root: {
    verticalAlign: 'text-top',
    '&:nth-of-type(odd)': {
      backgroundColor: '#2B2B2B',
    },
    '&:hover': {
      backgroundColor: '#FFFFFF26',
    },
  },
  head: {
    '&:hover': {
      backgroundColor: '#2B2B2B',
    },
  },
}))(TableRow);

export const StyledTabCell = withStyles(() => ({
  root: {
    borderBottom: 'none',
  },
  head: {
    fontWeight: 'normal',
    lineHeight: '21px',
    fontFamily: '"IBM Plex Sans", sans-serif',
    padding: '8px 16px',
    '&:last-child': {
      padding: '8px 16px',
    },
  },
  body: {
    color: '#FFFFFF',
    fontSize: '16px',
    lineHeight: '24px',
    padding: '16px 20px',
    '&:last-child': {
      padding: '16px 20px',
    },
  },
}))(TableCell);

export type PayloadProps = {
  cardHead: CardHeadProps;
  headerRow: HeadRowProps;
  balancesData: any[];
};
type TableBalancesProps = {
  target: 'asset' | 'strategy';
  payload: PayloadProps;
};
type ConditionalProps = {
  target: 'asset' | 'strategy';
  data: any;
};

const ConditionalCell = ({ target, data }: ConditionalProps) => {
  if (target === 'asset') {
    return (
      <StyledTabCell align="center">
        <Typography>{formatNumber(data.value / data.balance)}</Typography>
        <Typography variant="h6" color="textPrimary">
          {data.valueInBtc.toFixed(4)} BTC
        </Typography>
      </StyledTabCell>
    );
  } else {
    return (
      <StyledTabCell align="center">
        <Typography color="textSecondary">{data.vault.apr.toFixed(2)}%</Typography>
      </StyledTabCell>
    );
  }
};

const ConditionalTable = ({ target, data }: ConditionalProps) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  if (target === 'asset') {
    return (
      <>
        <StyledTableRow>
          <StyledTabCell>
            <Typography variant="h5">{data.name}</Typography>
            <Typography variant="h6" color="textPrimary">
              {formatNumber(data.value)}
            </Typography>
          </StyledTabCell>
          <StyledTabCell align="center">{data.allocation.toFixed(2)}%</StyledTabCell>
          <ConditionalCell target={target} data={data} />
          <StyledTabCell align="right">
            {data.balance.toFixed(2)}
            <Typography variant="h6" color="textPrimary">
              {formatNumber(data.value)}
            </Typography>
          </StyledTabCell>
        </StyledTableRow>
      </>
    );
  } else {
    return (
      <>
        <StrategyModal openModal={openModal} handleCloseModal={handleCloseModal} data={data} />
        <StyledTableRow onClick={handleOpenModal}>
          <StyledTabCell>
            <Typography variant="h5">{data.name}</Typography>
            <Typography variant="h6" color="textPrimary">
              {formatNumber(data.value)}
            </Typography>
          </StyledTabCell>
          <StyledTabCell align="center">{data.allocation.toFixed(2)}%</StyledTabCell>
          <ConditionalCell target={target} data={data} />
          <StyledTabCell align="right">
            {data.balance.toFixed(2)}
            <Typography variant="h6" color="textPrimary">
              {formatNumber(data.value)}
            </Typography>
          </StyledTabCell>
        </StyledTableRow>
      </>
    );
  }
};

const TableBalances = ({ target, payload }: TableBalancesProps) => {
  const classes = useStyleBalances();
  const { cardHead, headerRow, balancesData } = payload;

  return (
    <Card className={classes.baseCard}>
      <CardHead {...cardHead} />
      <Table padding="none">
        <TableHead>
          <HeaderRow {...headerRow} />
        </TableHead>
        <TableBody>
          {balancesData.map((data) => (
            <ConditionalTable key={`item-${data.name}`} target={target} data={data} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default observer(TableBalances);
