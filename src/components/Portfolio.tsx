import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: '100%',
  },
}));

const Portfolio = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Typography variant="h4" align="center">
        Badger Portfolio
      </Typography>
    </div>
  );
};

export default Portfolio;
