import React, { useEffect, useState } from 'react';
import styles from './styles/addTrailerForm.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DisableTraileIcon from '@mui/icons-material/NoBackpack';

const EditTrailerForm = ({ isOpen, handleEditTrailertDialogClose, selectedItem,updateCardData }) => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (selectedItem) {
      setFormData({
        trailertype: selectedItem.type,
        trailerno: selectedItem.trailerno,
        tires: selectedItem.tires,
        status:selectedItem.status
      });
      
    }
  }, [selectedItem]);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      const updatedItem = {
      id: selectedItem.id,
      type: formData.trailertype,
      trailerno: formData.trailerno,
      tires: formData.tires,
      status:formData.status
     
    };
   updateCardData(updatedItem);
  
    handleEditTrailertDialogClose();
  };
  

  return (
    <>
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            borderRadius: '15px',
            width: '56%',
            maxWidth: 'unset',
            '@media (max-width: 1000px)': {
              width: '90%',
            },
            '@media (max-width: 766px)': {
              width: '100%',
            },
          },
          width: '100%',
        }}
        open={isOpen}
        onClose={handleEditTrailertDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ padding: 0 }}>
          <div className={styles.title}>
            Edit Trailer <CloseIcon onClick={handleEditTrailertDialogClose} className={styles.closebtn} />
          </div>
        </DialogTitle>
          <form onSubmit={handleSubmit}>
        <div className={styles.container}>
            <InputLabel sx={{ fontSize: '14px' }} required>
              Trailer Type
            </InputLabel>
            <FormControl fullWidth sx={{ marginBottom: '15px',
            '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
                padding: '12.5px 14px'
              } }}>
              <Select value={formData.trailertype || ''} onChange={handleChange} name="trailertype">
                <MenuItem value={'Flatbed'}>Flatbed</MenuItem>
                <MenuItem value={'Belly Dump'}>Belly Dump</MenuItem>
                <MenuItem value={'End Dump'}>End Dump</MenuItem>
                <MenuItem value={'Cement'}>Cement</MenuItem>
                <MenuItem value={'Box'}>Box</MenuItem>
                <MenuItem value={'Tanker'}>Tanker</MenuItem>
              </Select>
            </FormControl>
            <CommonTextfield
              id="number"
              name="trailerno"
              type="text"
              value={formData.trailerno} 
              onChange={handleChange}
              label="Trailer No"
              width="100"
              required
            />
            <CommonTextfield
              id="tires"
              name="tires"
              type="text"
              height='70px'
              value={formData.tires} 
              onChange={handleChange}
              label="Trailer Tires"
              width="100"
              required
            />
            <InputLabel sx={{ fontSize: '14px', marginTop: '10px' }} required>
              Status
            </InputLabel>
            <FormControl fullWidth sx={{'& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
                padding: '12.5px 14px'
              }}}>
              <Select 
              value={formData.status || ''} 
              onChange={handleChange} 
              name="status">
                <MenuItem value={'Active'}>Active</MenuItem>
                <MenuItem value={'Inactive'}>Inactive</MenuItem>
              </Select>
            </FormControl>
        </div>
        <div className={styles.performAction}>
          <button  type="submit" className={styles.addbtn}>
            Save
          </button>
          <DeleteIcon sx={{cursor:'pointer'}}/>
          <DisableTraileIcon sx={{cursor:'pointer'}}/>

        </div>
          </form>
      </Dialog>
    </>
  );
};

export default EditTrailerForm;
