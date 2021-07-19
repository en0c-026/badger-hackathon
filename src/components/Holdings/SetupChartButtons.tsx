import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';
import { useStyleHoldings } from '.';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

interface IProps {
  timeframe: string;
  setTimeFrame: (timeframe: string) => void;
  handleOpenModal: () => void;
}
const timeframes: Array<string> = ['1D', '1W', '1M', '1Y', 'ALL'];

const ToggleButtonStyled = withStyles({
  root: {
    padding: '9px 18px',
    color: '#FFFFFF',
    backgroundColor: '#222222',
    '&.Mui-selected': {
      color: '#888888',
      backgroundColor: '#111111',
      '&:hover': {
        color: '#888888',
        backgroundColor: '#111111',
      },
    },
  },
})(ToggleButton);

const SetupChartButtons = (props: IProps) => {
  const classes = useStyleHoldings();
  const { timeframe, setTimeFrame, handleOpenModal } = props;
  const handleChange = (event: React.MouseEvent<HTMLElement>, value: any) => {
    if (!value) {
      return;
    }
    setTimeFrame(value);
  };
  return (
    <Grid container justifyContent="space-between" wrap="nowrap" alignItems="center" className={classes.gridButtons}>
      <Button
        variant="contained"
        endIcon={<ExpandMoreIcon color="secondary" />}
        size="small"
        onClick={handleOpenModal}
        className={classes.buttonModal}
      >
        All Sett Vaults
      </Button>
      <ToggleButtonGroup value={timeframe} onChange={handleChange} exclusive>
        {timeframes.map((tf, index) => (
          <ToggleButtonStyled key={index} value={tf} disableRipple>
            <Typography variant="subtitle1">{tf}</Typography>
          </ToggleButtonStyled>
        ))}
      </ToggleButtonGroup>
    </Grid>
  );
};

export default SetupChartButtons;
