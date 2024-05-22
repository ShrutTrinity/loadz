import React, { useState } from 'react';
import styles from '../styles/AddDriver.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import CustomTextFiled from '@Jobs/components/TextField/CustomTextFiled';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from 'uuid';


const allStyle = {
  button: {
    background: 'rgb(237,202,51)',
    color: 'rgb(0,0,0)',
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    borderRadius: '5  px'
  },
  textFieldStyle: {
    margin: '6px 0',
    background: 'rgb(255,255,255)',
    fontSize: '13px',
    width: '100%'
  }
}

const AddDriverDailog = ({ open, onClose }) => {
  const [fieldCovers, setFieldCovers] = useState([{ id:uuidv4() }]);

  const addFieldCover = () => {
    setFieldCovers([...fieldCovers, { id: uuidv4()  }]);
  };

  const removeFieldCover = (id) => {
    setFieldCovers(fieldCovers.filter(fieldCover => fieldCover.id !== id));
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          borderRadius: 0,
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            width: '95%',
            fontSize: '10px !important'
          }
        }}
      >
        <DialogContent sx={{ padding: '0px' }}>
          <div className={styles.header}>
            <span className={styles.heading}>Add Drivers</span>
          </div>
          <div className={styles.content}>
            {fieldCovers.map((fieldCover,index) => (
              <form>
              <div key={fieldCover.id} className={styles.fieldCover}>
              
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='name'
                  type='text'
                  required
                  label='Name'
                  placeholder='Company Owner Name'
                />
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='address'
                  type='text'
                  label='Address'
                  placeholder='Address'
                />
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='city'
                  type='text'
                  label='City'
                  placeholder='City'
                />
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='name'
                  type='text'
                  label='First Name'
                  placeholder='Company Owner Name'
                />
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='zip'
                  type='number'
                  label='Zip'
                  placeholder='Zip'
                />
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='phone'
                  type='number'
                  label='Phone'
                  placeholder='Company Owner Name'
                />
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='hourlyWage'
                  type='number'
                  label='Hourly Wage'
                  placeholder='$0.00'
                />
                <CustomTextFiled
                  style={{ width: '100%' }}
                  name='commission'
                  type='number'
                  label='Commission Rate'
                  placeholder='%0.00'
                />
                {index !== 0 && (
                  <div className={styles.iconCover}  onClick={() => removeFieldCover(fieldCover.id)}>
                 <DeleteIcon sx={{fontSize:'20px'}}/>
                </div>
                )}
              </div>
              </form>
            ))}
          </div>
          <div className={styles.createIcon}>
            <div className={styles.iconCover} onClick={addFieldCover}>
              <AddCircleOutlinedIcon sx={{ fontSize: '30px' }} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            style={allStyle.button}
            endIcon={<DeleteIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            style={allStyle.button}
            endIcon={<SendIcon />}
          >
            Create Invite
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddDriverDailog;
