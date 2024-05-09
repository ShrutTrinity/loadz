import React from 'react';
import styles from './style/InvitationModel.module.scss';
import Dialog from '@mui/material/Dialog';


const Invitation = ({ openInvitationDialog, closeInvitationDialog }) => {
  return (
    <>
      <Dialog
        open={openInvitationDialog}
        onClose={closeInvitationDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            width: '90vw',
            borderRadius: '20px',
            fontSize: '10px !important'
          }
        }}
      >
        <div className={styles.container}>
          <div className={styles.heading}>
            Invitations
          </div>
          <div className={styles.content}>
          
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Invitation
