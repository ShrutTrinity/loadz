import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Select from '@mui/material/Select';
import US from '../../images/us.png';
import TR from '../../images/tr.png';
import SA from '../../images/sa.png'
import Gear from '../../images/GearIcon.svg';
import styles from './styles/navbar.module.scss';
import Button from '@mui/material/Button';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import SearchField from '../searchPiont/SearchField';
import { Link as RouterLink } from 'react-router-dom';


const NavigationBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(10);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchField, setSearchField] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    if (event.target.value === '10') {
      setSelectedValue('EN');
    } else if (event.target.value === '20') {
      setSelectedValue('TR');
    } else {
      setSelectedValue(event.target.value);
    }
  };
  const handleSearch = () => {
    setSearchField(true)
  }
  const handleSearchClose = () => {
    setSearchField(false);
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <AppBar sx={{ backgroundColor: 'rgb(237, 202, 51)', boxShadow: 'none', color: "black",position:"relative" }}>
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

          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          </Typography>
          <div>
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
                fontSize:'13px',
                '& .MuiSelect-icon': {
                  display: 'none'
                },
                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                  paddingRight: ' 0 !important',
                  paddingLeft: ' 0 !important'
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
              }}
            >
              <MenuItem sx={{fontSize:'13px'}} value={10}><img className={styles.languageIcon} src={US} alt='EN' />America</MenuItem>
              <MenuItem sx={{fontSize:'13px'}} value={20}><img className={styles.languageIcon} src={TR} alt='TR' />Turkish</MenuItem>
              <MenuItem sx={{fontSize:'13px'}} value={30}><img className={styles.languageIcon} src={SA} alt='AR' />Arabic</MenuItem>
              <MenuItem sx={{fontSize:'13px'}} >Learn More</MenuItem>
            </Select>

            <Button sx={{
              padding: '12px', minWidth: '0px', margin: '0px', color: 'black', backgroundColor: 'rgb(237, 202, 51)', boxShadow: 'none',
              ':hover': { backgroundColor: 'rgb(237, 202, 51)', boxShadow: 'none' }
            }}
              onClick={toggleFullscreen} variant="contained" color="primary"
            >
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </Button>

            <RouterLink to='https://youtube.com/@loadzloadzonline2510' style={{ color: 'black' }}>
              <Button
                sx={{
                  padding: '6px 8px',
                  minWidth: '64px',
                  margin: '0px',
                  color: 'black',
                  backgroundColor: 'rgb(237, 202, 51)',
                  boxShadow: 'none',
                  ':hover': {
                    backgroundColor: 'rgb(237, 202, 51)',
                    boxShadow: 'none'
                  }
                }}
                variant="contained" color="primary">
                <YouTubeIcon />
              </Button>
            </RouterLink>

            <IconButton size="large" aria-label="search" color="inherit" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>

            <IconButton size="large" aria-label="Settings" >
              <img className={styles.gearIcon} src={Gear} alt='Gear Icon'/>
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
      }
    </AppBar >

  )
}

export default NavigationBar
