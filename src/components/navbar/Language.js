import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import US from '../../images/us.png';
import TR from '../../images/tr.png';
import SA from '../../images/sa.png';
import { Link } from 'react-router-dom';


const Language = () => {

  const [selectedValue, setSelectedValue] = useState('10');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select
      labelId="custom-select"
      id="custom-select"
      value={selectedValue}
      onChange={handleChange}
      MenuProps={{
        PaperProps: {
          style: {
            backgroundColor: 'rgb(237, 202, 51)',
            borderRadius: '8px',
          },
        },
        MenuListProps: {
          style: {
            backgroundColor: 'rgb(237, 202, 51)'
          },
        },
      }}
      sx={{
        boxShadow: "none",
        fontSize: '13px',
        '& .MuiSelect-icon': {
          display: 'none'
        },
        ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
          padding: '6px 8px !important'
        },
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
        {
          border: 0,
        },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          border: 0,
        },
        ".-khtml-any-link.MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8": {
          left: 0
        }
      }}
    >
      <MenuItem sx={{ fontSize: '13px', marginLeft: '0 4px' }} value={'10'}>
        <img style={{ width: '20px', height: '14.5px' }} src={US} alt='EN' />
        {selectedValue === '10' ? "EN" : "America"}
      </MenuItem>
      <MenuItem sx={{ fontSize: '13px', marginLeft: '0 4px' }} value={'20'}>
        <img style={{ width: '20px', height: '14.5px' }} src={TR} alt='TR' />
        {selectedValue === '20' ? "TR" : "Turkish"}
      </MenuItem>
      <MenuItem sx={{ fontSize: '13px', marginLeft: '0 4px' }} value={'30'}>
        <img style={{ width: '20px', height: '14.5px' }} src={SA} alt='AR' />
        {selectedValue === '30' ? "AR" : "Arabic"}
      </MenuItem>
      <MenuItem sx={{ fontSize: '13px', marginLeft: '0 4px' }} >
        <Link to='/404' style={{ color: 'black', textDecoration: 'none' }}>
          Learn More
        </Link>
      </MenuItem>
    </Select>
  )
}

export default Language
