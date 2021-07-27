import {
  Avatar,
  Box,
  Card,
  Chip,
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
import { formatNumber, getDate } from '../../../utils';

type StrategyModalProps = {
  openModal: boolean;
  handleCloseModal: () => void;
  data: StrategyInfo;
};

const AssetIcon = withStyles({
  root: {
    width: '24px',
    height: '24px',
    marginRight: '8px',
  },
})(Avatar);

const ChipCheckbox = withStyles({
  root: {
    fontSize: '10px',
    fontFamily: 'Jura',
    fontWeight: 700,
    lineHeight: '12px',
    color: '#FFFFFF',
    marginLeft: '8px',
    height: '16px',
    alignSelf: 'center',
    backgroundColor: '#111111',
    borderRadius: '4px',
  },
  label: {
    padding: '2px 4px',
  },
})(Chip);

export const StyledTableRow = withStyles(() => ({
  root: {
    backgroundColor: '#111111',
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
    padding: '8px 32px',
    color: '#FFFFFF',
  },
  paddingNone: {
    '&:last-child': {
      padding: '0px 20px',
    },
  },
}))(TableCell);

// This component is a demo, it contains fixed data.
// Until it is implemented in the APY.
const AvatarBadger = ({ color }: { color: string }) => {
  return (
    <AssetIcon style={{ backgroundColor: color }}>
      <Avatar variant="square" style={{ width: '16px', height: '16px' }} src={`/img/badger.png`} />
    </AssetIcon>
  );
};
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
          <StyledTabCell>
            <Box display="flex">
              <AssetIcon variant="square" src={`/img/settvaults/${data.vault.asset}.png`} />
              <Typography variant="h4" noWrap>
                {data.vault.name}
              </Typography>
              <ChipCheckbox label="TAG" />
            </Box>
          </StyledTabCell>
          <StyledTabCell align="center">
            <Typography variant="h6" noWrap>
              {data.balance.toFixed(2)} {data.vault.asset}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              {formatNumber(data.value)}
            </Typography>
          </StyledTabCell>
          <StyledTabCell align="center">
            <Typography variant="h6" color="textSecondary">
              {data.myBoost.toFixed(2)}%
            </Typography>
          </StyledTabCell>
          <StyledTabCell align="center">
            <Typography variant="h6" noWrap>
              {data.yearlyRoi}%
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
          <StyledTabCell align="right">Balance</StyledTabCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {earnedTokens.map((token) => (
          <StyledTableRow key={`item-${token.name}`}>
            <StyledTabCell>
              <Box display="flex" alignItems="center">
                <AssetIcon variant="square" src={`/img/assets/${token.symbol}.png`} />
                <Typography variant="subtitle1">{token.symbol}</Typography>
              </Box>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2">{(token.value / token.balance).toFixed(2)}</Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2">{token.balance.toFixed(4)}</Typography>
            </StyledTabCell>
            <StyledTabCell align="right">
              <Typography variant="body2">{formatNumber(token.value)}</Typography>
            </StyledTabCell>
          </StyledTableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <StyledTabCell>
            <Typography variant="subtitle1" color="textPrimary">
              Total
            </Typography>
          </StyledTabCell>
          <StyledTabCell align="center"></StyledTabCell>
          <StyledTabCell align="center"></StyledTabCell>
          <StyledTabCell align="right">
            <Typography variant="h5">{formatNumber(total)}</Typography>
          </StyledTabCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

// This component is a demo, it contains fixed data.
// Until it is implemented in the APY.
const BoostBreakDown = () => {
  return (
    <Table padding="none">
      <TableBody>
        <StyledTableRow>
          <StyledTabCell>
            <Box display="flex">
              <AvatarBadger color="#F44336" />
              <Typography variant="subtitle1">Wack-A-Badger</Typography>
            </Box>
          </StyledTabCell>
          <StyledTabCell align="right">
            <Typography variant="body2" color="textSecondary">
              +20%
            </Typography>
          </StyledTabCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTabCell>
            <Box display="flex">
              <AvatarBadger color="#A274D1" />
              <Typography variant="subtitle1">Badgerpack Joyride</Typography>
            </Box>
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

// This component is a demo, it contains fixed data.
// Until it is implemented in the APY.
const TransactionHistory = () => {
  const lastTransactions = [
    { action: 'Deposit', amount: '+0.1400', gas: '0.0004', date: 1592428841001, asset: 'UNIV2 LP' },
    { action: 'Withdraw', amount: '-0.0542', gas: '0.0004', date: 1592302841441, asset: 'UNIV2 LP' },
    { action: 'Claim', amount: '+10', gas: '0.001', date: 1590891641441, asset: 'BADGER' },
    { action: 'Deposit', amount: '+0.6', gas: '0.0004', date: 1590862841451, asset: 'UNIV2 LP' },
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
                {tx.gas} ETH
              </Typography>
            </StyledTabCell>
            <StyledTabCell align="center">
              <Typography variant="body2">{getDate(tx.date)}</Typography>
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
