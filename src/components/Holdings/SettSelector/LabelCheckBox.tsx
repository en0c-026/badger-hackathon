import React from 'react';
import { Chip, Grid, Typography, withStyles } from '@material-ui/core';

const ChipCheckbox = withStyles({
  root: {
    fontSize: '10px',
    fontFamily: 'Jura',
    fontWeight: 700,
    lineHeight: '12px',
    color: '#FFFFFF',
    marginLeft: '8px',
    height: 'auto',
    backgroundColor: '#111111',
    borderRadius: '4px',
  },
  label: {
    padding: '2px 4px',
  },
})(Chip);

const LabelCheckBox = (props: any) => {
  const { ticker, source, tag } = props.pair;
  return (
    <Grid container alignItems="center">
      <Typography variant="h4" color={props.checked ? 'textSecondary' : 'textPrimary'}>
        {ticker}
      </Typography>
      <ChipCheckbox label={source} />
      {tag && <ChipCheckbox label={tag} />}
    </Grid>
  );
};
export default LabelCheckBox;
