import * as React from 'react';
import styles from './styles/unitDialog.module.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';

const allStyles = {
  btns: {
    color: 'rgb(237,202,51)',
    textTransform: 'capitalize'
  }
}

const AddUnitDialog = (props) => {

  const { handleClose, open } = props

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '18px'
        }
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <section className={styles.header}>
          Add new Units
        </section>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <span className={styles.instruction}>Please fill this form with the information requested for create a Units</span>
          <form className={styles.form}>
            <CommonTextfield
              id='unitName'
              name='unitName'
              type='text'
              label='Unit Name'
              width='100'
              required
            />
            <CommonTextfield
              id='unitMetric' 
              name='unitMetric'
              type='text'
              label='Unit Metric'
              width='100'
              required
            />
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} style={allStyles.btns}>
          Cancel
        </Button>
        <Button onClick={handleClose} style={allStyles.btns}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddUnitDialog;