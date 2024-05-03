import React from 'react'
import styles from './styles/addTrailerForm.module.scss'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const AddTrailerForm = ({ isOpen, handleAddTrailertDailogClose }) => {
  return (
    <>
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            borderRadius: '15px',
            width: '56%',
            maxWidth:'unset',
            '@media (max-width: 1000px)': {
            width: '90%'
          },
            '@media (max-width: 766px)': {
            width: '100%'
          },
          },
          width: '100%'
        }}
        open={isOpen}
        onClose={handleAddTrailertDailogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ padding: 0 }}>
          <div className={styles.title}> New Trailer  <CloseIcon onClick={handleAddTrailertDailogClose} className={styles.closebtn} /></div>
        </DialogTitle>
        <div className={styles.container}>
          <InputLabel sx={{ fontSize: '14px' }} required>Trailer Type</InputLabel>
          <FormControl fullWidth sx={{
            marginBottom:'15px',
            '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: '12px 14px'
            }
          }}>
            <Select>
              <MenuItem value={10}>Flatbed</MenuItem>
              <MenuItem value={20}>Belly Dump</MenuItem>
              <MenuItem value={30}>End Dump</MenuItem>
              <MenuItem value={40}>Cement</MenuItem>
              <MenuItem value={50}>Box</MenuItem>
              <MenuItem value={60}>Tanker</MenuItem>
            </Select>
          </FormControl>
          <CommonTextfield
            id='number'
            name='trailerno'
            type='text'
            label='Trailer No'
            width='100'
            required
          />
          <CommonTextfield
            id='tires'
            name='tires'
            type='text'
            height='70px'
            label='Trailer Tires'
            width='100'
            required
          />
          <InputLabel sx={{ fontSize: '14px' ,marginTop:'10px' }} required>Status</InputLabel>
          <FormControl fullWidth sx={{
            '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: '12px 14px'
            }
          }}>
            <Select defaultValue={10}>
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>Inactive</MenuItem>
            
            </Select>
          </FormControl>

        </div>
          <div className={styles.performAction} >
          <button onClick={handleAddTrailertDailogClose} className={styles.addbtn}>Add</button>
          </div>
         
      </Dialog>
    </>
  )
}

export default AddTrailerForm