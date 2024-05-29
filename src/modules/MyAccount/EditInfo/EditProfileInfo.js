import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles/editprofileinfo.module.scss'
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield.js'


const EditProfileInfo = ({ open, onClose }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <CloseIcon />
        </DialogTitle>
        <DialogContent sx={{ margin: '30px' }}>
          <div className={styles.heading}>
            Edit User Profile
          </div>
          <div className={styles.textFields}>
            <CommonTextfield
              name='address'
              type='text'
              label='Address'
              width='50'
              placeholder='Address'
            />
            <CommonTextfield
              name='address'
              type='text'
              label='Address'
              width='50'
              placeholder='Address'
            />
            <CommonTextfield
              name='address'
              type='text'
              label='Address'
              width='50'
              placeholder='Address'
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


export default EditProfileInfo
