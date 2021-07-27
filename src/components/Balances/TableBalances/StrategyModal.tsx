import {
  Card,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStyleBalances } from '..';
import { StrategyInfo } from '../../../model/strategy-info.interface';
import { TokenBalance } from '../../../model/token-balance.interface';
import { formatNumber } from '../../../utils';

type StrategyModalProps = {
  openModal: boolean;
  handleCloseModal: () => void;
  data: StrategyInfo;
};

export const StyledTableRow = withStyles(() => ({
  root: {
    backgroundColor: '#111111',
    verticalAlign: 'text-top',
    '&:nth-of-type(odd)': {
      backgroundColor: '#1E1E1E',
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
  footer: {
    padding: '8px 16px',
    color: '#FFFFFF',
  },
}))(TableCell);

const VaultDetails = ({ data }: { data: StrategyInfo }) => {
  return (
    <Table padding="none">
      <TableHead>
        <TableRow>
          <StyledTabCell>VAULT</StyledTabCell>
          <StyledTabCell align="center">BALANCE/VALUE</StyledTabCell>
          <StyledTabCell align="center">MY BOOST</StyledTabCell>
          <StyledTabCell align="center">YEARLY ROI</StyledTabCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <StyledTabCell>{data.vault.name}</StyledTabCell>
          <StyledTabCell align="center">
            <Typography variant="h6">
              {data.balance.toFixed(2)} {data.vault.asset}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              {formatNumber(data.value)}
            </Typography>
          </StyledTabCell>
          <StyledTabCell align="center">
            <Typography variant="h6" color="textSecondary">
              {data.vault.apr.toFixed(2)}%
            </Typography>
          </StyledTabCell>
          <StyledTabCell align="center">
            <Typography variant="h6">
              {data.vault.minApr?.toFixed(2)}-{data.vault.maxApr?.toFixed(2)}%
            </Typography>
          </StyledTabCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
const Holdings = ({ earnedTokens, total }: { earnedTokens: TokenBalance[]; total: number }) => {
  return (
    <Table padding="none">
      <TableHead>
        <TableRow>
          <StyledTabCell>Underlying Tokens</StyledTabCell>
          <StyledTabCell align="center">Price</StyledTabCell>
          <StyledTabCell align="center">Amount</StyledTabCell>
          <StyledTabCell align="center">Balance</StyledTabCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {earnedTokens.map((token) => (
          <StyledTableRow key={`item-${token.name}`}>
            <StyledTabCell>
              <Typography variant="subtitle1">{token.name}</Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2">{(token.value / token.balance).toFixed(2)}</Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2" color="textSecondary">
                {token.balance.toFixed(4)}
              </Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2">{formatNumber(token.value)}</Typography>
            </StyledTabCell>
          </StyledTableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <StyledTabCell>
            <Typography variant="subtitle1">Total</Typography>
          </StyledTabCell>
          <StyledTabCell align="center"></StyledTabCell>
          <StyledTabCell align="center"></StyledTabCell>
          <StyledTabCell align="center">
            <Typography variant="h5">{formatNumber(total)}</Typography>
          </StyledTabCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
const BoostBreakDown = () => {
  return (
    <Table padding="none">
      <TableBody>
        <StyledTableRow>
          <StyledTabCell>
            <Typography variant="subtitle1">Wack-A-Badger</Typography>
          </StyledTabCell>
          <StyledTabCell align="right">
            <Typography variant="body2" color="textSecondary">
              +20%
            </Typography>
          </StyledTabCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTabCell>
            <Typography variant="subtitle1">Badgerpack Joyride</Typography>
          </StyledTabCell>
          <StyledTabCell align="right">
            <Typography variant="body2" color="textSecondary">
              +11%
            </Typography>
          </StyledTabCell>
        </StyledTableRow>
      </TableBody>
    </Table>
  );
};
const TransactionHistory = () => {
  const lastTransactions = [
    { action: 'Deposit', amount: '+0.1400', gas: '0.0004', date: '1590934380', asset: 'UNIV2 LP' },
    { action: 'Withdraw', amount: '-0.0542', gas: '0.0004', date: '1590934380', asset: 'UNIV2 LP' },
    { action: 'Claim', amount: '+10', gas: '0.001', date: '1590856320', asset: 'BADGER' },
    { action: 'Deposit', amount: '+0.6', gas: '0.0004', date: '1590819600', asset: 'UNIV2 LP' },
  ];
  return (
    <Table padding="none">
      <TableHead>
        <TableRow>
          <StyledTabCell>Actions</StyledTabCell>
          <StyledTabCell align="center">Amount</StyledTabCell>
          <StyledTabCell align="center">Gas Spent</StyledTabCell>
          <StyledTabCell align="center">Date</StyledTabCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lastTransactions.map((tx) => (
          <StyledTableRow key={`item-${tx.action}-${tx.amount}-${tx.date}`}>
            <StyledTabCell>
              <Typography variant="subtitle1">{tx.action}</Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2">
                {tx.amount} {tx.asset}
              </Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2" color="textSecondary">
                {tx.gas}
              </Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2">{tx.date}</Typography>
            </StyledTabCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const StrategyModal = ({ openModal, handleCloseModal, data }: StrategyModalProps) => {
  const classes = useStyleBalances();
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Paper className={classes.modalStrategy}>
        <Grid container justifyContent="space-between" alignItems="center" className={classes.modalGrid}>
          <Typography variant="h3">My Strategy Balances</Typography>
          <IconButton onClick={handleCloseModal}>
            <Close color="primary" />
          </IconButton>
        </Grid>
        <Divider style={{ marginBottom: '8px' }} />
        <Typography variant="h4">Vault Details</Typography>
        <Card className={classes.vaultDetailsCard}>
          <VaultDetails data={data} />
        </Card>
        <Typography variant="h4">Holdings</Typography>
        <Card className={classes.holdingsCard}>
          <Holdings earnedTokens={data.settBalance.earnedTokens} total={data.value} />
        </Card>
        <Typography variant="h4">My Boost Breakdown</Typography>
        <Card className={classes.holdingsCard}>
          <BoostBreakDown />
        </Card>
        <Typography variant="h4">Transaction History</Typography>
        <Card className={classes.holdingsCard}>
          <TransactionHistory />
        </Card>
      </Paper>
    </Modal>
  );
};

export default observer(StrategyModal);
