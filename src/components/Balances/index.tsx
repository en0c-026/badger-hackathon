import { makeStyles, TableCell, TableRow, Theme, withStyles } from '@material-ui/core';
import React from 'react';
import AssetsTable from './AssetsTable';
import StrategyTable from './StrategyTable';

export const useStyleBalances = makeStyles((theme: Theme) => ({
  rootContainer: {
    minWidth: '100%',
    marginBottom: theme.spacing(3),
  },
  baseCard: {
    padding: 0,
    color: '#FFFFFF',
    backgroundColor: '#1E1E1E',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  table: {},
  tableHeader: {
    backgroundColor: '#1E1E1E',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '28px 24px',
  },
}));

export const StyledTableRow = withStyles(() => ({
  root: {
    verticalAlign: 'text-top',
    '&:nth-of-type(odd)': {
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

const Balances = () => {
  const classes = useStyleBalances();
  return (
    <div className={classes.rootContainer}>
      <AssetsTable />
      <StrategyTable />
    </div>
  );
};

export default Balances;
