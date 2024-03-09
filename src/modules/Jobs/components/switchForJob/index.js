import React from 'react'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

const Android12Switch = styled(Switch)(({ theme }) => ({
  width: 52,
  height: 22,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(28px)',
      color: 'rgb(237, 202, 51)',
      '& + .MuiSwitch-track': {
        backgroundColor:'black',
        opacity: 1,
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 15,
    height: 15,
  },
  '& .MuiSwitch-track': {
    borderRadius: 58 / 2,
    backgroundColor: 'black',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const index = () => {
  return (
    <div>
      <FormControlLabel
        sx={{
          flexDirection:'row-reverse'
        }}
        label="All"
        control={<Android12Switch defaultChecked />}
      />
    </div>
  )
}

export default index