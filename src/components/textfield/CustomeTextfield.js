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
          maxLength: 10,
          endAdornment: (children4),
          inputProps:{
             sx: {
              padding:'12px 14px',
              '@media (max-width: 600px)': {
                    padding: '8px 14px',

                  },
         },

          }


        }}
      {...formik.getFieldProps(name)}
      />

    </FormControl>
  )
}


export default CustomTextField
