import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './Header';
import Holdings from './Holdings';
import Allocation from './Allocation';
import Balances from './Balances';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    minHeight: '100vh',
    minWight: '100vw',
    padding: '0 10%',
    backgroundImage: 'url(/img/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Portfolio = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Header />
      <Holdings />
      <Allocation />
      <Balances />
    </div>
  );
};

export default Portfolio;
