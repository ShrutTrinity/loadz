import React from 'react';
import styles from './styles/textField.module.scss';
import TextField from '@mui/material/TextField';

const CustomTextFiled = ({label, placeholder, type, children4, name, id}) => {
  return (
    <>
      <label className={styles.formLabel1}>{label}</label>
      <TextField
        sx={{
          width: '100%',
          marginBottom: '16px'
        }}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (children4),
          inputProps: {
            sx: {
              padding: '12px 14px',
              backgroundColor:'white',
              '@media (max-width: 600px)': {
                padding: '8px 14px',
              },
            },
          }
        }}
      />
    </>
  )
}

export default CustomTextFiled
