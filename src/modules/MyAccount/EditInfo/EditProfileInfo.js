import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles/editprofileinfo.module.scss'
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield.js';
import AppleIcon from '@mui/icons-material/Apple';
import profile from '@images/profile.jpg';


const EditProfileInfo = ({ open, onClose }) => {
  return (
    <>
      <Dialog
      sx={{
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper':{
            maxWidth:'850px',
            borderRadius:'20px'
        }
      }}  
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <CloseIcon className={styles.closeicon} onClick={onClose} />
        </DialogTitle>
        <DialogContent sx={{ margin: '30px' }}>
          <div className={styles.heading}>
            Edit User Profile
          </div>
          <div className={styles.flex}>
            <div className={styles.textFields}>
              <CommonTextfield
                name='fname'
                type='text'
                label='First Name'
                width='45'
                placeholder='First Name'
              />
              <CommonTextfield
                name='lname'
                type='text'
                label='Last Name'
                width='45'
                placeholder='Last Name'
              />
              <CommonTextfield
                name='email'
                type='email'
                label='Email'
                width='45'
                placeholder='Email'
              />
              <CommonTextfield
                name='phone'
                type='email'
                label='Phone'
                width='45'
                placeholder='Phone'
              />
            </div>
            <div className={styles.updateimg}>
              <div className={styles.imgdiv}>
                <img src={profile} alt='profile' className={styles.profile} />
              </div>
              <button className={styles.btn2}>Update</button>

            </div>
          </div>
          <div className={styles.session}>
            <div className={styles.running}>
              <div className={styles.leftside}>
                <AppleIcon className={styles.icon} />
                <div>1 session(s) on Mac</div>
              </div>
              <div className={styles.rightside}>
                <b>Linux<br /></b>

                Chrome<br />

                Mumbai, MH, IN<br />

                5/28/2024 10:28 am
              </div>
            </div>
          </div>
        </DialogContent>
        
      </Dialog>
    </>
  );
}


export default EditProfileInfo
