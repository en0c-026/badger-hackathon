import React from 'react';
import { Avatar, Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { useStyleSelector } from '.';
import { curveVaults, sushiVaults, uniVaults } from '../../../config/constants';
import LabelCheckBox from './LabelCheckBox';

const Checkboxes = (props: any) => {
  const { checkboxs, handleChangeSingle } = props;
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
                icon={<Avatar variant="square" src={pair.logo} className={classes.icon} />}
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
                icon={<Avatar variant="square" src={pair.logo} className={classes.icon} />}
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
                icon={<Avatar variant="square" src={pair.logo} className={classes.icon} />}
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
