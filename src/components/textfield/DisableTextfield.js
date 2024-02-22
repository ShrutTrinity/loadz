import React from 'react'
import styles from '../../modules/newAccount/styles/new.module.scss';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const DisableTextField = ({ label, placeholder, children4 }) => {

  return (
    <FormControl
      sx={{
        width: '100%'
      }}
      variant="standard">
      <label className={styles.formLabel1}>{label}<span className={styles.requiredAll}>*</span></label>
      <TextField
        disabled
        sx={{
          width: '100%',
          marginBottom: '16px'
        }}
        placeholder={placeholder}
        InputProps={{
          maxLength: 10,
          endAdornment: (children4),
          inputProps: {
            sx: {
              cursor: 'no-drop',
              color: '#b3b3b3',
              backgroundColor: '#d1d1d1',
              padding: '12px 14px',
              '@media (max-width: 600px)': {
                padding: '8px 14px',

              },
            },
          }
        }}
      />

    </FormControl>
  )
}


export default DisableTextField
