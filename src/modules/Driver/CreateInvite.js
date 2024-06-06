import React, { useState } from 'react';
import styles from './style/CreateModel.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Checkbox } from '@mui/material';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ListIcon from '@mui/icons-material/List';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const allStyle = {
  button: {
    background: 'rgb(237,202,51)',
    color: 'rgb(0,0,0)',
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    borderRadius: '18px',
  },
};

const CreateInvite = ({ openCreateModel, closeCreateModel }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checkboxState, setCheckboxState] = useState({
    CDL: false,
    CDLExpire: false,
    Insurance: false,
    InsuranceExpire: false,
    Address: false,
  });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuCheckboxChange = (event) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Dialog
        open={openCreateModel}
        onClose={closeCreateModel}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: '90vw',
            borderRadius: '20px',
            fontSize: '10px !important',
          },
        }}
      >
        <DialogContent
          sx={{
            padding: '0px',
          }}
        >
          <div className={styles.header}>
            <div className={styles.headerIcon}>
              <TabletAndroidIcon sx={{ color: 'white' }} />
            </div>
            <span className={styles.heading}>Send Message</span>
            <IconButton aria-label="list" sx={{ color: 'black', marginLeft: 'auto', }} onClick={handleMenuOpen}>
              <ListIcon />
              <ExpandMoreIcon />
            </IconButton>
            <CloseIcon onClick={closeCreateModel} sx={{cursor:'pointer'}}/>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {['CDL', 'CDLExpire', 'Insurance', 'InsuranceExpire', 'Address'].map((item) => (
                <MenuItem key={item}>
                  <ListItemIcon>
                    <Checkbox
                      checked={checkboxState[item]}
                      onChange={handleMenuCheckboxChange}
                      name={item}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className={styles.content}>
            <span className={styles.instructions}>
              Add drivers, and subcontractors by inviting them to login to your Company Subscription check
            </span>
            <div className={styles.fieldCover}>
              <CommonTextfield
                required
                width='100'
                id='name'
                name='name'
                type='title'
                label='Name'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                required
                label="Phone"
              />
              <CommonTextfield
                width='100'
                required
                label="Hourly Wage"
                end='$'
                type='number'
              />
              <CommonTextfield
                width='100'
                required
                label="Commission Rate"
                end='%'
                type='number'
              />
              {checkboxState.CDL && (
                <CommonTextfield
                  width='100'
                  required
                  label="CDL"
                />
              )}
              {checkboxState.CDLExpire && (
                <CommonTextfield
                  width='100'
                  required
                  label="CDL Expire"
                />
              )}
              {checkboxState.Insurance && (
                <CommonTextfield
                  width='100'
                  required
                  label="Insurance"
                />
              )}
              {checkboxState.InsuranceExpire && (
                <CommonTextfield
                  width='100'
                  required
                  label="Insurance Expire"
                />
              )}
              {checkboxState.Address && (
                <CommonTextfield
                  width='100'
                  required
                  label="Address"
                />
              )}
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
      </Dialog>
    </>
  );
};

export default CreateInvite;
