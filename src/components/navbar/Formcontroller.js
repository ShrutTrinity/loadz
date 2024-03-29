import { FormControlLabel, Switch } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from 'react'


const Formcontroller = (props) => {
  const [state, setState] = React.useState({
    Contractors: true,
    Skip: true,
    Notifications: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  }
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FormControlLabel
          sx={{
            "& .css-ahj2mt-MuiTypography-root": {
              fontSize: '13px',
              lineHeight: 1.5,
              fontWeight: 300
            }
          }}
          control={
            <Switch defaultChecked sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: 'rgb(237, 202, 51)',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: 'rgb(237, 202, 51)',
              },
            }}
              onChange={handleChange} name="Notifications" />
          }
          label={props.label}
        />
        <InfoOutlinedIcon />
      </div>

    </>
  )
}

export default Formcontroller
