import React, { useState } from 'react';
import styles from '../style/MailDialog.module.scss';
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
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    borderRadius: '18px',
    padding: '6px 16px',
  },
  textFieldStyle: {
    margin: '6px 0',
    background: 'rgb(255,255,255)',
    fontSize: '13px',
    width: '100%'
  }
}

const MailSendModel = ({ openMailDialog, closeMailDialog }) => {
  const [messageType, setMessageType] = useState('');
  const handleChange = (event) => {
    setMessageType(event.target.value);
  };
  return (
    <Dialog
      open={openMailDialog}
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
          <span className={styles.heading}>Send Message</span>
        </div>
        <div className={styles.content}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={messageType}
              label="Type"
              required
              onChange={handleChange}
            >
              <MenuItem value={10}>Email</MenuItem>
              <MenuItem value={20}>Text</MenuItem>
            </Select>
          </FormControl>
          <TextField
            style={allStyle.textFieldStyle}
            required
            label="Message"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={closeMailDialog}
          style={allStyle.button}
        >
          Send Message
        </Button>
      </DialogActions>
    </Dialog >
  )
}

export default MailSendModel
