import React, { useState } from 'react';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  makeStyles,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core';
import { Check, CheckBoxOutlineBlank, Close } from '@material-ui/icons';
import { allChecked, arraySetAll } from '../../../utils';
import Checkboxes from './Checkboxes';

export const useStyleSelector = makeStyles(() => ({
  modalSelector: {
    position: 'absolute',
    padding: '12px 24px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '900px',
    minHeight: '500px',
    backgroundColor: '#222222',
    border: '1px solid #111111',
    borderRadius: '8px',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.75)',
  },
  modalGrid: {
    paddingBottom: '16px',
  },
  checkedIcon: {
    color: '#CCCCCC',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  checkBoxesGrid: {
    paddingTop: '16px',
  },
  uniGrid: {
    width: '70%',
  },
  curveGrid: {
    width: '80%',
  },
}));

interface Props {
  openModal: boolean;
  handleCloseModal: () => void;
  checkboxs: Array<boolean>;
  setCheckboxs: (checkboxs: Array<boolean>) => void;
}

export const SettSelector = (props: Props) => {
  const { openModal, handleCloseModal, checkboxs, setCheckboxs } = props;
  const classes = useStyleSelector();
  const [checked, setChecked] = useState(false);
  const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxs(arraySetAll(checkboxs, event.target.checked));
    setChecked(allChecked(checkboxs));
  };

  const handleChangeSingle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(event.target.id);
    checkboxs[id] = event.target.checked;
    setCheckboxs([...checkboxs]);
    setChecked(allChecked(checkboxs));
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Paper className={classes.modalSelector}>
        <Grid container justifyContent="space-between" alignItems="center" className={classes.modalGrid}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChangeAll}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<CheckBoxOutlineBlank color="secondary" />}
              />
            }
            label={
              <Typography variant="h4" color={checked ? 'textSecondary' : 'textPrimary'}>
                All Setts Vaults
              </Typography>
            }
          />
          <IconButton onClick={handleCloseModal}>
            <Close color="primary" />
          </IconButton>
        </Grid>
        <Divider />
        <Checkboxes checkboxs={checkboxs} handleChangeSingle={handleChangeSingle} />
      </Paper>
    </Modal>
  );
};
