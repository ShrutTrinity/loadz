import React from 'react';
import styles from './style/createCustomer.module.scss';
import Stepr from './Components/Stepr';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const allStyle = {
  labelStyle: {
    fontSize: '13px'
  }
}

const CreateCustomer = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <>
      <div className={styles.body}>
        <div className={styles.stepperCover}>
          <Stepr />
        </div>
        <section className={styles.formSection}>
          <h4 className={styles.formHeading}>
            Business Information
          </h4>
          <div className={styles.businessDetail}>
            <FormControl required sx={{ m: 1, width: '100%' }}>
              <InputLabel
                id="demo-simple-select-required-label" style={allStyle.labelStyle}
              >
                Business Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={age}
                label="BusinessType"
                required
                onChange={handleChange}
              >
                <MenuItem value={10}>Sole Proprietorship</MenuItem>
                <MenuItem value={20}>Partnership</MenuItem>
                <MenuItem value={30}>Corporation</MenuItem>
                <MenuItem value={40}>LLC</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id="outlined-basic"
                label="Legal Business Name"
                variant="outlined" required
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id="outlined-basic"
                label="Legal Business Name"
                variant="outlined" required
              />
            </FormControl>
          </div>
        </section>
      </div>
    </>
  )
}

export default CreateCustomer;