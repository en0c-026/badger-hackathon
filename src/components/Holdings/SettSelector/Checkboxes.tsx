import React from 'react';
import { Avatar, Box, Checkbox, Chip, FormControlLabel, Grid, Typography, withStyles } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { useStyleSelector } from '.';
import { curveVaults, sushiVaults, uniVaults, VaultPair } from '../../../config/constants';

type CheckboxesProps = {
  handleChangeSingle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxs: Array<boolean>;
};

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

const LabelCheckBox = ({ pair, checked }: { pair: Partial<VaultPair>; checked: boolean }) => {
  const { name, source, tag } = pair;
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h4" color={checked ? 'textSecondary' : 'textPrimary'}>
        {name}
      </Typography>
      <ChipCheckbox label={source} />
      {tag && <ChipCheckbox label={tag} />}
    </Box>
  );
};
const Checkboxes = ({ checkboxs, handleChangeSingle }: CheckboxesProps) => {
  const classes = useStyleSelector();
  return (
    <Grid container justifyContent="space-between" wrap="nowrap" className={classes.checkedIcon}>
      <Grid container direction="column" wrap="nowrap" className={classes.uniGrid}>
        {uniVaults.map((pair, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkboxs[parseInt(pair.id)]}
                onChange={handleChangeSingle}
                id={pair.id}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Avatar variant="square" src={`/img/settvaults/${pair.symbol}.png`} className={classes.icon} />}
              />
            }
            label={<LabelCheckBox pair={pair} checked={checkboxs[parseInt(pair.id)]} />}
          />
        ))}
      </Grid>
      <Grid container direction="column" wrap="nowrap">
        {sushiVaults.map((pair, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkboxs[parseInt(pair.id)]}
                onChange={handleChangeSingle}
                id={pair.id}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Avatar variant="square" src={`/img/settvaults/${pair.symbol}.png`} className={classes.icon} />}
              />
            }
            label={<LabelCheckBox pair={pair} checked={checkboxs[parseInt(pair.id)]} />}
          />
        ))}
      </Grid>
      <Grid container direction="column" wrap="nowrap" className={classes.curveGrid}>
        {curveVaults.map((pair, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkboxs[parseInt(pair.id)]}
                onChange={handleChangeSingle}
                id={pair.id}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Avatar variant="square" src={`/img/settvaults/${pair.symbol}.png`} className={classes.icon} />}
              />
            }
            label={<LabelCheckBox pair={pair} checked={checkboxs[parseInt(pair.id)]} />}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Checkboxes;
