import React from 'react'
import styles from '../../modules/newAccount/styles/new.module.scss';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const CustomTextField = ({ label, placeholder, type, children4, name, id, formik }) => {

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
        id={id}
        name={name}
        type={type}
        placeholder={placeholder} required
        InputProps={{
          endAdornment: (children4)
          
        }}
        {...formik.getFieldProps(name)}
      />
     { <div style={{ color: 'red', marginBottom: '16px', fontSize: '12px' }}>
        {formik.touched.name && formik.errors.name}
      </div>}
    </FormControl>
  )
}


export default CustomTextField
