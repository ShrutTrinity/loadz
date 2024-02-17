import React from 'react'
import styles from '../../modules/newAccount/styles/new.module.scss';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ label, placeholder, type, children4}) => {
    return (
      <FormControl
        sx={{
          width: '100%'
        }}
        variant="standard">
        <label className={styles.formLabel1}>{label}<span className={styles.requiredAll}>*</span></label>
        <TextField 
          sx={{
            width: '100%',
            marginBottom: '16px'
          }}
          type={type}
          placeholder={placeholder} required id="fullWidth"
          InputProps={{
            endAdornment: (children4)
          }}
          
       
        />
      </FormControl>
    )
  }
  

export default CustomTextField
