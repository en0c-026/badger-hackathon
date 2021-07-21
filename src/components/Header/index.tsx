import React from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import CardRight from './CardRight';
import CardCenter from './CardCenter';
import CardLeft from './CardLeft';

export const useStyleHeader = makeStyles((theme: Theme) => ({
  gridContainer: {
    minHeight: '176px',
    marginBottom: '24px',
  },
  baseCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(2),
    color: '#FFFFFF',
    backgroundColor: '#2B2B2B',
    height: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: theme.spacing(2),
  },
  styledCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: theme.spacing(2),
    color: '#FFFFFF',
    backgroundColor: '#2B2B2B',
    height: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: theme.spacing(2),
  },
  button: {
    backgroundColor: '#121212',
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
