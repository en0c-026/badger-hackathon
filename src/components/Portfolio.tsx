import React, { useEffect } from 'react';
import { LinearProgress, makeStyles, Snackbar } from '@material-ui/core';
import Header from './Header';
import Holdings from './Holdings';
import Allocation from './Allocation';
import Balances from './Balances';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStore } from '../mobx/store';

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

const Portfolio = ({ context }: { context: React.Context<RootStore> }) => {
  const classes = useStyles();
  const store = useContext(context);
  const { loading, networkError, fetchData, testMod, strategyInfo, totalValueSetts } = store;

  useEffect(() => {
    if (!testMod) {
      setInterval(() => {
        fetchData();
      }, 60000);
    }
  }, [fetchData]);

  if (loading) {
    return (
      <div data-testid="loading" className={classes.loader}>
        <LinearProgress color="secondary" />
      </div>
    );
  }
  if (networkError) {
    return (
      <div data-testid="network-error" className={classes.loader}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={true}
          message="Network connection error.. Try again"
        />
      </div>
    );
  }
  return (
    <div data-testid="portfolio" className={classes.rootContainer}>
      <Header store={store} />
      <Holdings />
      <Allocation strategyInfo={strategyInfo} />
      <Balances totalValueSetts={totalValueSetts} strategyInfo={strategyInfo} />
    </div>
  );
};

export default observer(Portfolio);
