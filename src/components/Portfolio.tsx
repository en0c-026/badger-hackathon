import React, { useEffect } from 'react';
import { LinearProgress, makeStyles, Snackbar } from '@material-ui/core';
import Header from './Header';
import Holdings from './Holdings';
import Allocation from './Allocation';
import Balances from './Balances';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { StoreContext } from '../config/context';

const useStyles = makeStyles(() => ({
  rootContainer: {
    padding: '0 10%',
    backgroundImage: 'url(/img/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 0%',
    backgroundSize: 'contain',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loader: {
    minHeight: '100vh',
    padding: '0 35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const { loading, networkError, fetchData } = useContext(StoreContext);

  useEffect(() => {
    const callData = setInterval(() => {
      fetchData();
    }, 60000);

    return () => {
      clearInterval(callData);
    };
  }, [fetchData]);

  if (loading) {
    return (
      <div className={classes.loader}>
        <LinearProgress color="secondary" />
      </div>
    );
  }
  if (networkError) {
    return (
      <div className={classes.loader}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={true}
          message="Network connection error.. Try again"
        />
      </div>
    );
  }
  return (
    <div className={classes.rootContainer}>
      <Header />
      <Holdings />
      <Allocation />
      <Balances />
    </div>
  );
};

export default observer(Portfolio);
