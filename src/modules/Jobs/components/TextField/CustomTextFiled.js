import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextFiled = ({ label, placeholder, type, children4, name, id, required, disabled,width,onKeyDown }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: `${width}%` }}>
      <label style={{ fontSize: '13px' }}>{label}</label>
      <TextField
      size='small'
        sx={{
          '& .MuiInputLabel-root': {
            fontSize: 13,
          },
          "& input::placeholder": {
            fontSize: "13px"
          },
          width:'100%',
          marginBottom: '16px',
          '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23) !important'
          },
        }}
        id={id}
        required={required}
        name={name}
        disabled={disabled}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (children4),
          inputProps: {
            sx: {
              backgroundColor: 'white',
              '@media (max-width: 600px)': {
                padding: '8px 14px',
              },
            },
          }
        }}
      />
    </div>
  )
}

export default CustomTextFiled
