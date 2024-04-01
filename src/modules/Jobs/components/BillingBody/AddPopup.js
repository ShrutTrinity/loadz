import styles from "./styles/addPopup.module.scss"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddPopup = ({ onSubmit, closePopUp }) => {

  const [formData, setFormData] = useState({
    persionTypeValue: '',
    name: '',
    rate: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    closePopUp()
  };


  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{'& .css-1t1j96h-MuiPaper-root-MuiDialog-paper' : {borderRadius:'16px'}}}
    >
      <DialogTitle id="alert-dialog-title">
        {"Add New Special Rates"}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={styles.content}>
              <div className={styles.part1}>
                <label className={styles.labelOfpart1}>
                  Owner Operator / Subcontractor
                </label>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={formData.persionTypeValue}
                  name="persionTypeValue"
                  onChange={handleChange}
                  required
                >
                  <MenuItem sx={{ background: 'rgb(237, 202, 51) !important', fontSize: '13px' }} value="Subcontractor">Subcontractor</MenuItem>
                  <MenuItem sx={{ background: 'rgb(237, 202, 51) !important', fontSize: '13px' }} value="Owner Operator">Owner Operator</MenuItem>
                </Select>
              </div>

              <div className={styles.part1}>
                <label className={styles.labelOfpart2}>
                  Rate
                </label>
                <br />
                <TextField id="outlined-basic" name="rate" required onChange={handleChange} placeholder="0" />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="text"
            sx={{ color: 'rgb(237, 202, 51)', fontSize: '13px' }}
            onClick={closePopUp}
          >Cancel</Button>
          <Button
            type="submit"
            variant="text"
            sx={{ color: 'rgb(237, 202, 51)', fontSize: '13px' }}
          >Create</Button>
        </DialogActions>
      </form>
    </Dialog >
  )
}

export default AddPopup
