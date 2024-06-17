import React from 'react'
import { InputAdornment, TextField } from '@mui/material';

const CommonTextfield = (props) => {
  return (
    <>
      <TextField size='small'
        sx={{
          background: 'rgb(255,255,255)',
          width: `${props.width}%`,
          margin: '13px 0 13px 0',
          '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ': {
            padding: '12.5px 14px',
            height: `${props.height}`,

          },
          '& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root':{
            fontSize:'13px'
          },
          
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: 'rgb(237, 202, 51)',
          },
          '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
            fontSize: '14px',
            height: `${props.height}`,
          },
          '@media (max-width: 766px)': {
            width: '97%'
          }
        }}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        defaultValue={props.defaultValue}
        type={props.type}
        InputProps={{
          endAdornment: <InputAdornment position="start">{props.end}</InputAdornment>,
        }}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        variant='outlined'
        required={props.required}
      />
    </>
  )
}

export default CommonTextfield
