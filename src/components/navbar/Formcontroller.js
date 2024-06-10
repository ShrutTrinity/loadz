import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';


const Formcontroller = (props) => {

  const { checked, onChange, label } = props;

  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexWrap:'wrap' }}>
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
              onChange={onChange}
              checked={checked}
              name="Notifications" />
          }
          label={label}
        />
      </div>

    </>
  )
}

export default Formcontroller;