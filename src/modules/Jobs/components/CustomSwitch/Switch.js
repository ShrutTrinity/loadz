import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 45,
  height: 25,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: 'white',
      '& + .MuiSwitch-track': {
        backgroundColor:'rgb(237, 202, 51)',
        opacity: 1,
        // width:'5px'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 15,
    height: 15,
    marginTop: '3px',
    marginLeft: '3px',
  },
  '& .MuiSwitch-track': {
    borderRadius: 48 / 2,
    backgroundColor: 'black',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 400,
    }),
  },
}));


const SwitchForJob = ({ handleSwitchValue, valueOfSwitch }) => {
  const handleChange = () => {
    handleSwitchValue();
  };

  return (
    <FormControlLabel
      sx={{ margin: '0 10px' }}
      control={<IOSSwitch sx={{ margin: '0 10px' }} checked={valueOfSwitch} onChange={handleChange} />}
      label={!valueOfSwitch ? 'No' : 'Yes'}
    />
  );
}

export default SwitchForJob