import React, { useState } from 'react';
import styles from './style/editDriverInvitation.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const allStyle = {
  button: {
    background: 'rgb(237,202,51)',
    color: 'rgb(0,0,0)',
    marginLeft:'10px',
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    borderRadius: '18px',
    padding: '6px 36px',
  },
  textFieldStyle: {
    margin: '6px 0',
    background: 'rgb(255,255,255)',
    fontSize: '13px',
    width: '100%'
  },
}
const EditDriverInvitation = ({ mailDialogOpen, closeMailDialog }) => {

  const [messageType, setMessageType] = useState('');

  const handleChange = (event) => {
    setMessageType(event.target.value);
  };

  return (
    <>
      <Dialog
        open={mailDialogOpen}
        onClose={closeMailDialog}
        aria-describedby="alert-dialog-slide-description"

        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            width: '100%',
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
            <span className={styles.heading}>Edit Invite</span>
          </div>
          <div className={styles.content}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"
              sx={{
                '&.Mui-focused': {
                  color: 'rgb(237, 202, 51)',
                },
               

              }}>Type</InputLabel>
              <Select
              sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.23) !important',
                }}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={messageType}
                label="Type"
                required
                onChange={handleChange}
              >
                <MenuItem value={10}>Employee</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{
                '&.Mui-focused': {
                  color: 'rgb(237, 202, 51)',
                },
              }}> Communication Type</InputLabel>
              <Select
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.23) !important',
                }}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={messageType}
                label=" Communication Type"
                required
                onChange={handleChange}
              >
                <MenuItem value={10}>Email</MenuItem>
                <MenuItem value={20}>Phone Number</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                },
                '& .MuiInputLabel-outlined.Mui-focused': {
                  color: 'rgb(237, 202, 51)',
                },
              }}
              style={allStyle.textFieldStyle}

              label="Send to"
            />
          </div>
        </DialogContent>
        <DialogActions sx={{justifyContent:'flex-start'}}>
          <Button
            onClick={closeMailDialog}
            style={allStyle.button}
          >
           Resend Invite
          </Button>
        </DialogActions>
      </Dialog >
    </>
  )
}

export default EditDriverInvitation
