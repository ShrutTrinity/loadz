import React, { useState } from 'react';
import styles from './Styles/AddTrailer.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import CustomTextFiled from '@Jobs/components/TextField/CustomTextFiled';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
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

const AddTrailerDialog = ({ open, onClose }) => {
  const [fieldCovers, setFieldCovers] = useState([{ id: uuidv4() }]);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const addFieldCover = () => {
    setFieldCovers([...fieldCovers, { id: uuidv4() }]);
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
            width: '45%',
            fontSize: '10px !important'
          }
        }}
      >
        <DialogContent sx={{ padding: '0px' }}>
          <div className={styles.header}>
            <span className={styles.heading}>Add Trailers</span>
          </div>
          <div className={styles.content}>
            {fieldCovers.map((fieldCover, index) => (
              <form>
                <div key={fieldCover.id} className={styles.fieldCover}>
                <FormControl fullWidth sx={{width:'200%'}}>
                <label style={{marginTop:'-15px'}}>Haul Type</label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedValue}
                      onChange={handleChange}
                      sx={{
                        fontSize: '13px',
                        maxHeight: 39 + 8,
                      }}
                    >
                      <MenuItem value={20}>Flatbed</MenuItem>
                      <MenuItem value={30}>Belly Dump</MenuItem>
                      <MenuItem value={40}>End Dump</MenuItem>
                      <MenuItem value={50}>Cement</MenuItem>
                      <MenuItem value={50}>Box</MenuItem>
                      <MenuItem value={50}>Tanker</MenuItem>
                    </Select>
                  </FormControl>
                  <CustomTextFiled
                    style={{ width: '100%' }}
                    name='Trailerno'
                    type='text'
                    required
                    label='Trailer No.'
                    placeholder='Trailer No.'
                  />
                  <div style={{ width: '200%' }}>
                    <CustomTextFiled
                      style={{ width: '100%' }}
                      name='vin'
                      type='number'
                      label='VIN#'
                      placeholder='VIN#'
                    />
                  </div>
                  <CustomTextFiled
                    style={{ width: '100%' }}
                    name='year'
                    type='number'
                    label='Year'
                    placeholder='Year'
                  />
                  {index !== 0 && (
                    <div className={styles.iconCover} onClick={() => removeFieldCover(fieldCover.id)}>
                      <DeleteIcon sx={{ fontSize: '20px' }} />
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
            
          >
            Create 
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddTrailerDialog;
