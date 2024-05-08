import React from 'react';
import styles from './style/CreateModel.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, TextField } from '@mui/material';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const allStyle = {
  button: {
    background: 'rgb(237,202,51)',
    color: 'rgb(0,0,0)',
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    borderRadius: '18px'
  },
  textFieldStyle: {
    margin: '6px 0',
    background: 'rgb(255,255,255)',
    fontSize: '13px',
    width: '100%'
  }
}

const CreateInvite = ({ openCreateModel, closeCreateModel }) => {
  return (
    <>
      <Dialog
        open={openCreateModel}
        onClose={closeCreateModel}
        aria-describedby="alert-dialog-slide-description"

        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            width: '55vw',
            borderRadius: '20px',
            fontSize: '10px !important'
          }
        }}
      >
        <DialogContent
          sx={{
            padding: '0px',
          }}>
          <div className={styles.header}>
            <div className={styles.headerIcon}>
              <TabletAndroidIcon  sx={{color:'white'}}/>
            </div>
            <span className={styles.heading}>Send Message</span>
          </div>
          <div className={styles.content}>
            <span className={styles.instructions}>
              Add drivers, and subcontractors by inviting them to login to your Company Subscription check
            </span>
            <div className={styles.fieldCover}>
              <TextField
                style={allStyle.textFieldStyle}
                required
                label="Name"
              />
              <TextField
                style={allStyle.textFieldStyle}
                required
                label="Phone"
              />
              <TextField
                style={allStyle.textFieldStyle}
                required
                label="Hourly Wage"
                placeholder='$'
                type='number'
              />
              <TextField
                style={allStyle.textFieldStyle}
                required
                label="Commision Rate"
                placeholder='%'
                type='number'
              />
            </div>
            <div className={styles.createIcon}>
              <div className={styles.iconCover}>
                <AddCircleOutlinedIcon fontSize='medium' />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeCreateModel}
            style={allStyle.button}
            endIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={closeCreateModel}
            style={allStyle.button}
            endIcon={<SendIcon />}
          >
            Create Invite
          </Button>
        </DialogActions>
      </Dialog >
    </>
  )
}

export default CreateInvite
