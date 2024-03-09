import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Gear from '../../images/GearIcon.svg';
import styles from './styles/navbar.module.scss';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import SearchField from '../searchPiont/SearchField';
import { Link as RouterLink } from 'react-router-dom';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TextSlider from './TextSlider';
import Language from './Language';
import FullScreenIcon from './FullScreenIcon';
import ProfileDetail from './ProfileDetail';
import Setting from './Setting';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VerticalComponent from './VerticalComponent';

const NavigationBar = ({toggleDrawer,Open,setting,handleOpen,handleClose}) => {

  const [searchField, setSearchField] = useState(false);
  const [textSelectorOpen, setTextSelectorOpen] = useState(false)
  const [profileDetail, setProfileDetail] = useState(false);
  const [verticalNav, setVerticalNav] = useState(false);

  const handleSearch = () => {
    setSearchField(true)
  }
  
  const handleSearchClose = () => {
    setSearchField(false);
  }

  const toggleTextSelector = () => {
    setTextSelectorOpen(!textSelectorOpen);
  };

  const toggleProfileDetail = () => {
    setProfileDetail(!profileDetail);
  }

  const closeProfileDetail = () => {
    setProfileDetail(false);
  };
  useEffect(() => {
    document.body.style.overflow = setting ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [setting]);

  const openVerticalNav = () => {
    setVerticalNav(true);
  }

  return (
    <div>  
      {setting && <Setting handleClose={handleClose}/>}
        {verticalNav && <VerticalComponent />}
      <AppBar  sx={{ backgroundColor: 'rgb(237, 202, 51)', color: "black", position: 'fixed',width: `calc(100% - ${Open ? 290 : 0}px)` }}>
      {searchField === true ?
        <SearchField handleSearchClose={handleSearchClose} Open={Open}  widthOfSearchField='100vw' />
        :
        <Toolbar sx={{ zIndex: '-1', paddingRight: '8px !important' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display:`${Open ? 'none' :'block'} `}}
            onClick={toggleDrawer} 
            
          >
            <MenuIcon />
          </IconButton>   

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <div>
              <span className={styles.navComponents}>
                <Language />

                <IconButton
                  color='inherit'
                  onClick={toggleTextSelector}
                >
                  <TextFieldsIcon
                    sx={{
                      margin: '12px',
                      cursor: 'pointer'
                    }}
                  />
                </IconButton>
                {textSelectorOpen && <TextSlider />}

                <FullScreenIcon />

            <RouterLink target = '_blank'to='https://youtube.com/@loadzloadzonline2510' style={{ color: 'black' }}>
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

            <IconButton size="large" aria-label="Settings" onClick={handleOpen} >
              <img className={styles.gearIcon} src={Gear} alt='Gear Icon' />
            </IconButton>
          

              </span>

              <IconButton
                sx={{
                  padding: '6px 16px',
                  borderRadius: '18px',
                  cursor: 'pointer'
                }}
                onClick={toggleProfileDetail}
                onBlur={closeProfileDetail}
              >
                <div className={styles.userCover}>
                  <span className={styles.userName}>User</span>
                  <p className={styles.userCompany}>Company</p>
                </div>
                <div className={styles.userLogo}>
                  <h1 className={styles.userLatter}>U</h1>
                </div>
                {profileDetail && <ProfileDetail />}
              </IconButton>

              <span className={styles.downArrow} >
                <KeyboardArrowDownIcon onClick={openVerticalNav} />
              </span>
            </div>
          </Toolbar>
        }
      </AppBar>
    </div>
  )
}

export default NavigationBar