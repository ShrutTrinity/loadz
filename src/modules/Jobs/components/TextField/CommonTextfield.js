import React from 'react'
import { TextField } from '@mui/material';
const CommonTextfield = (props) => {
  return (
    <>
      <TextField
        sx={{
          
          width: `${props.width}%`,
          margin: '15px 0 15px 0',
          '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ':{
            padding:'12.5px 14px',
            height:`${props.height}`,
            
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: 'rgb(237, 202, 51)',
          },
          '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':{
            fontSize: '14px',
            height:`${props.height}`,
          },
          '@media (max-width: 766px)': {
            width: '97%'
          }
        }}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        type={props.type}
        label={props.label}
        variant='outlined'
        required={props.required}
      />
    </>
  )
}

export default CommonTextfield
