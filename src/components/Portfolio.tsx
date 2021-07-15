import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: '100vh',
    padding: '0 10%',
    backgroundImage: 'url(/img/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Portfolio = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Header />
    </div>
  );
};

export default Portfolio;
