import React, { useState } from 'react';
import styles from './Styles/AddTruck.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, Checkbox, FormControl, MenuItem, Select } from '@mui/material';
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

const AddTruckDialog = ({ open, onClose }) => {
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
            width: '70%',
            fontSize: '10px !important'
          }
        }}
      >
        <DialogContent sx={{ padding: '0px' }}>
          <div className={styles.header}>
            <span className={styles.heading}>Add Trucks</span>
          </div>
          <div className={styles.content}>
            {fieldCovers.map((fieldCover, index) => (
              <form>
                <div key={fieldCover.id} className={styles.fieldCover}>

                  <CustomTextFiled
                    style={{ width: '100%' }}
                    name='truckno'
                    type='text'
                    required
                    label='Truck No.'
                    placeholder='Truck No.'
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
                    name='color'
                    type='text'
                    label='Color'
                    placeholder='Color'
                  />
                  <CustomTextFiled
                    style={{ width: '100%' }}
                    name='year'
                    type='number'
                    label='Year'
                    placeholder='Year'
                  />
                  <CustomTextFiled
                    style={{ width: '100%' }}
                    name='make'
                    type='text'
                    label='Make'
                    placeholder='Make'
                  />
                  <CustomTextFiled
                    style={{ width: '100%' }}
                    name='model'
                    type='text'
                    label='Model'
                    placeholder='Model'
                  />
                  <FormControl fullWidth>
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
                      <MenuItem value={10}>No Driver</MenuItem>
                    </Select>
                  </FormControl>
                  <div style={{ width: '100%', textAlign: 'center' }}>
                    <div className={styles.label1}>Is Dump Truck ?</div>
                    <Checkbox

                      sx={{
                        marginLeft: '-0.5rem',
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                    />
                  </div>

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

export default AddTruckDialog;
