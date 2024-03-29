import styles from "./styles/addPopup.module.scss"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddPopup = ({onSubmit, closePopUp}) => {

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
    <div className={styles.mainBody}>
      <div className={styles.container}>

        <h2 className={styles.popUpHeading}>
          Add New Special Rates
        </h2>
        <form onSubmit={handleSubmit}>
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
          <footer className={styles.footer}>
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
          </footer>
        </form>
      </div>
    </div>
  )
}

export default AddPopup
