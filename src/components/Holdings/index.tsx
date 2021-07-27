import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Typography, Box, Theme } from '@material-ui/core';
import { SettSelector } from './SettSelector';
import SetupChartButtons from './SetupChartButtons';
import { SettVaultsChart } from './SettVaultsChart';
import ChartReference from './ChartReference';

export const useStyleHoldings = makeStyles((theme: Theme) => ({
  rootCard: {
    minHeight: '704px',
    marginBottom: theme.spacing(3),
    padding: '32px 26px',
    color: theme.palette.primary.main,
    backgroundColor: '#2B2B2B',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: theme.spacing(2),
  },
  buttonModal: {
    color: theme.palette.primary.main,
    backgroundColor: '#101010',
    textTransform: 'none',
    height: '100%',
    padding: '8px 12px',
  },
  gridButtons: {
    marginTop: '20px',
    height: '40px',
  },
}));

// This is a demo, it contains fixed data.
// Until it is implemented in the APY.
const defaultState: Array<boolean> = [false, false, false, false, false, false, false, false, false, false];

const testArray = [
  { name: 'pv', color: '#FFCC33' },
  { name: 'uv', color: '#0066FF' },
  { name: 'amt', color: '#FF1FFF' },
];

const BadgerRewards = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="subtitle1" color="textPrimary">
        Compounding and $BADGER rewards
      </Typography>
      <Typography variant="subtitle1">271.14 $BADGER</Typography>
    </Box>
  );
};

const EarningsValue = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h3">Earnings from Sett vaults</Typography>
      <Typography variant="h3" color="textSecondary">
        $1,434.66
      </Typography>
    </Box>
  );
};
// This component is a demo, it contains fixed data.
// Until it is implemented in the APY.
const Holdings = () => {
  const classes = useStyleHoldings();
  const [timeframe, setTimeFrame] = useState<string>('1D');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [checkboxs, setCheckboxs] = useState<Array<boolean>>(defaultState);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Paper className={classes.rootCard}>
      <Grid container spacing={3} direction="column">
        <EarningsValue />
        <BadgerRewards />
        <SetupChartButtons timeframe={timeframe} setTimeFrame={setTimeFrame} handleOpenModal={handleOpenModal} />
        <SettVaultsChart />
        <ChartReference activeVaults={testArray} />
      </Grid>

      {openModal && (
        <SettSelector
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          checkboxs={checkboxs}
          setCheckboxs={setCheckboxs}
        />
      )}
    </Paper>
  );
};

export default Holdings;
