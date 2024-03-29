import React from 'react'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Android12Switch = styled(Switch)(({ checked }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },

    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        'black',
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: checked ? 'yellow' : 'white',
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const Index = (props) => {

// const [checked, setChecked] = useState(props.check);
//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };
  return (
    <>
      <FormControlLabel
        control={<Android12Switch checked={props.checked} onChange={props.onChange}   sx={{
          '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
            backgroundColor: 'rgb(237, 202,51)',
            opacity:0.5
          },
        }} />}
        label={props.label}
        labelPlacement="start"
      />
    </>
  )
}

export default Index
