import React, { useLayoutEffect, useRef, useState } from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import BadgerRewards from './BadgerRewards';
import EarningsValue from './EarningsValue';
import { SettSelector } from './SettSelector';
import SetupChartButtons from './SetupChartButtons';
import { SettVaultsChart } from './SettVaultsChart';
import CharReference from './CharReference';

export const useStyleHoldings = makeStyles(() => ({
  rootCard: {
    minHeight: '704px',
    marginBottom: '24px',
    padding: '32px 26px',
    color: '#FFFFFF',
    backgroundColor: '#2B2B2B',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
  },
  buttonModal: {
    color: '#FFFFFF',
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

const defaultState: Array<boolean> = [false, false, false, false, false, false, false, false, false];
const testArray = [
  { name: 'pv', color: '#FFCC33' },
  { name: 'uv', color: '#0066FF' },
  { name: 'amt', color: '#FF1FFF' },
];
const Holdings = (): JSX.Element => {
  const classes = useStyleHoldings();
  const [timeframe, setTimeFrame] = useState<string>('1D');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [checkboxs, setCheckboxs] = useState<Array<boolean>>(defaultState);
  const targetRef = useRef<any>();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  }, []);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Paper className={classes.rootCard}>
      <Grid container spacing={3} direction="column" ref={targetRef}>
        <EarningsValue />
        <BadgerRewards />
        <SetupChartButtons timeframe={timeframe} setTimeFrame={setTimeFrame} handleOpenModal={handleOpenModal} />
        <SettVaultsChart width={width} />
        <CharReference activeVaults={testArray} />
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
