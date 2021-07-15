import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CardRight from './CardRight';
import CardCenter from './CardCenter';
import CardLeft from './CardLeft';

export const useStyleCard = makeStyles(() => ({
  baseCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '32px 24px',
    color: '#FFFFFF',
    backgroundColor: '#2B2B2B',
    height: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '16px',
  },
}));

const useStyleHeader = makeStyles(() => ({
  gridContainer: {
    minHeight: '176px',
    marginBottom: '24px',
  },
}));

const Header = (): JSX.Element => {
  const classes = useStyleHeader();
  return (
    <Grid container spacing={2} wrap="nowrap" className={classes.gridContainer}>
      <Grid item xs={6}>
        <CardLeft />
      </Grid>
      <Grid item xs>
        <CardCenter />
      </Grid>
      <Grid item xs>
        <CardRight />
      </Grid>
    </Grid>
  );
};

export default Header;
