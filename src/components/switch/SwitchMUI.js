import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 58,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(28px)',
      color: 'rgb(237, 202, 51)',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: 'black',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[900]
          : theme.palette.grey[900],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 19,
    height: 19,
    marginTop: '3.5px',
    marginLeft: '3px'
  },
  '& .MuiSwitch-track': {
    borderRadius: 58 / 2,
    backgroundColor: theme.palette.mode === 'light' ? 'black' : 'white',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const SwitchMUI = ({ handleSwitchValue, valueOfSwitch }) => {
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
};

export default SwitchMUI;
