import React, { useContext } from 'react';
import { Box, Button, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import CardRight from './CardRight';
import CardCenter from './CardCenter';
import CardLeft from './CardLeft';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../config/context';

export const useStyleHeader = makeStyles((theme: Theme) => ({
  gridContainer: {
    minHeight: '176px',
    marginBottom: theme.spacing(3),
  },
  baseCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    backgroundColor: '#2B2B2B',
    height: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: theme.spacing(2),
  },
  button: {
    backgroundColor: '#121212',
  },
}));

const Header = () => {
  const classes = useStyleHeader();
  const { userAddress, setUserAddress, fetchData } = useContext(StoreContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAddress(event.target.value);
  };
  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={12}>
        <Box display="flex">
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            onChange={handleChange}
            value={userAddress}
          />
          <Button onClick={() => fetchData()}>Submit</Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <CardLeft />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardCenter />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardRight />
      </Grid>
    </Grid>
  );
};

export default observer(Header);
