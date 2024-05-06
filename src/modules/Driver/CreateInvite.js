import React from 'react';
import styles from './style/CreateModel.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
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
  }
}

const CreateInvite = ({ openCreateModel, closeCreateModel }) => {
  return (
    <>
      <Dialog
        open={openCreateModel}
        onClose={closeCreateModel}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          sx={{
            padding: '0px',
          }}>
          <div className={styles.header}>
            <div className={styles.headerIcon}>
              <TabletAndroidIcon />
            </div>
            <span className={styles.heading}>Invite Mobile Users</span>
          </div>
          <div className={styles.content}>
            <span className={styles.instructions}>
              Add drivers, and subcontractors by inviting them to login to your Company Subscription check
            </span>

            <div className={styles.fieldCover}>
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
