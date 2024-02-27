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
    <AppBar sx={{ backgroundColor: 'rgb(237, 202, 51)', color: "black", position: 'relative' }}>
      {searchField === true ?
        <SearchField handleSearchClose={handleSearchClose} />
        :
        <Toolbar sx={{ position: 'relative', zIndex: '-1' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <div>
            <Select
              labelId="custom-select"
              id="custom-select"
              value={selectedValue}
              onChange={handleChange}
              sx={{
                position:'inherit',
                '& .MuiSelect-icon': {
                  display: 'none',
                }
              }}
            >
              <MenuItem value={10}><img src={US} alt='EN' />America</MenuItem>
              <MenuItem value={20}><img src={US} alt='TR' />Turkish</MenuItem>
              <MenuItem value={30}><img src={US} alt='AR' />Arabic</MenuItem>
              <MenuItem>Learn More</MenuItem>
            </Select>
            <Button sx={{ padding: '12px', minWidth: '0px', margin: '0px', color: 'black', backgroundColor: 'rgb(237, 202, 51)', boxShadow: 'none', ':hover': { backgroundColor: 'rgb(237, 202, 51)', boxShadow: 'none' } }} onClick={toggleFullscreen} variant="contained" color="primary">
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </Button>
            <Button
            sx={{
              padding: '6px 8px',
              minWidth: '64px',
              margin: '0px',
              color: 'black',
              backgroundColor: 'rgb(237, 202, 51)',
              boxShadow: 'none',
              ':hover': {
                backgroundColor: 'rgb(237, 202, 51)', boxShadow: 'none'
              }
            }}
            onClick={toggleFullscreen} variant="contained" color="primary">
            <YouTubeIcon />
          </Button>
          <IconButton size="large" aria-label="search" color="inherit" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>

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
