import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import styles from './style/PriviousDriver.module.scss';
import CloseIcon from '@mui/icons-material/Close';

const allStyles = {
  button: {
    color: 'rgb(237, 202, 51)',
    fontWeight: '300',
    textTransform: 'capitalize',
  }
}
const PriviousDriver = ({ openPreviousDriver, closePreviousDriver }) => {
  return (
    <>
      <Dialog
        open={openPreviousDriver}
        onClose={closePreviousDriver}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth:'unset',
            width: '90vw',
            borderRadius: '20px',
            fontSize: '10px !important'
          }
        }}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heading}>
              Previous Drivers
            </div>
            <div
              className={styles.headerIcon}
              onClick={closePreviousDriver}
            >
              <CloseIcon />
            </div>

            <div className={styles.content}>
              There are no previous drivers!
            </div>
          </div>
        </div>
        <DialogActions>
          <Button
            onClick={closePreviousDriver}
            style={allStyles.button}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PriviousDriver;