import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import styles from '../Styles/inviteModel.module.scss';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

const allStyle = {
  button: {
    background: 'rgb(237,202,51)',
    color: 'rgb(0,0,0)',
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    borderRadius: '18px'
  }, 
  iconStyle:{
    color:'white',
    backgroundColor:'green',
    borderRadius:'50%',
    padding:'2px'
  }
}

const InviteUserDialog = ({ isOpen, CreateCustomerPopupRendered }) => {

  const [type, setType] = useState('');
  const [communication, setCommunication] = useState('');

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeCommunication = (event) => {
    setCommunication(event.target.value)
  }

  return (
    <>
      <Dialog
        open={isOpen} 
        onClose={CreateCustomerPopupRendered}
        sx={{ '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper':{
              borderRadius:'15px'
            }}}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          sx={{
            padding: '0px',
           
          }}>
          <div className={styles.header}>
            
            <TabletAndroidIcon style={allStyle.iconStyle}/>
           
            <span className={styles.heading}>Invite Mobile Users</span>
          </div>
          <div className={styles.content}>
            <span className={styles.instructions}>
              Add drivers, and subcontractors by inviting them to login to your Company Subscription check
            </span>

            <div className={styles.fieldCover}>
              <div className={styles.field1}>
                <Box sx={{ minWidth: '100%' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      defaultValue='10'
                      label="Type"
                      onChange={handleChangeType}
                      required
                    >
                      <MenuItem value={10}>SubContactor</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className={styles.field2}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Communication
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={communication}
                      label="Communication"
                      onChange={handleChangeCommunication}
                      required
                    >
                      <MenuItem value={10}>Email</MenuItem>
                      <MenuItem value={20}>Phone Number</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

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
            onClick={CreateCustomerPopupRendered}
            style={allStyle.button}
            endIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={CreateCustomerPopupRendered}
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

export default InviteUserDialog
