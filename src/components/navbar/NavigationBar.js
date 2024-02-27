import React, { useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Select from '@mui/material/Select';
import US from '../../images/us.png';
import './styles/navbar.module.scss';

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState('EN');
  const [value,setValue] = useState(false)
 
  
  

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const handleChange = (event) => {
    setValue(true)
    console.log(event)
    setSelectedValue(event.target.value);
};

  
  return (
    <AppBar sx={{ backgroundColor: 'rgb(237, 202, 51)', color: 'black' }} position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
    

        <div>
        
          <Select labelId="custom-select" id="custom-select" value={selectedValue} onChange={handleChange}>
            <MenuItem value='EN'><img src={US} alt='EN' />America </MenuItem>
            <MenuItem value='TR'><img src={US} alt='TR' />Turkish</MenuItem>
            <MenuItem value='SR'><img src={US} alt='AR' />Arabic</MenuItem>
            <MenuItem>Learn More</MenuItem>
          </Select>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
