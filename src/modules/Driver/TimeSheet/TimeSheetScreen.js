import React from 'react';
import styles from './style/timeSheetScreen.module.scss';
import { TextField, InputAdornment, Avatar, Tooltip, Button } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import RestoreIcon from '@mui/icons-material/Restore';
import inspection from '@images/inspection.png'
import Index from '../../Jobs/components/switchForJob/index';

const allStyle = {
  drawerButton: {
    color: 'black',
    fontWeight: 300,
  },
  switchLable: {
    fontSize: '13px !important'
  }
}

const TimeSheetScreen = ({
  open, handleDrawerClose, textSelectorOpen, toggleTextSelector
}) => {
  
  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  }; if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <>
      <div className={styles.container}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.backrow}></div>
        <div className={styles.CardWrapper}>
          <div className={styles.contentCard}>
            <div className={styles.drawer}>
              <div className={styles.searchbar}>
                <TextField
                  size="small"
                  placeholder='Search Customers'
                  variant="outlined"
                  sx={{
                    '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                      borderRadius: '20px',
                    },
                    '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                      padding: '5px'
                    },
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                    border: 'none',
                    flexGrow: 1,
                    width: '100%',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    '@media (max-width: 1200px)': {
                      width: '100%',
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'black' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className={styles.headingCover}>
                <div className={styles.componentName}>
                  Drivers
                </div>

                <div className={styles.listoficon}>
                  <Tooltip title="Send Email to All" placement="top">
                    <MailIcon
                      sx={{ cursor: 'pointer' }}
                    />
                  </Tooltip>
                  <Tooltip title="Previous Drivers" placement="top">
                    <RestoreIcon
                      sx={{ cursor: 'pointer' }}
                    />
                  </Tooltip>
                </div>
              </div>

              <div className={styles.switchCover}>
                <Index style={allStyle.switchLable} label="Active" />
                <Index style={allStyle.switchLable} label="Disabled" />
                <Index style={allStyle.switchLable} label="Company Drivers"
                  checked={true}
                />
                <Index style={allStyle.switchLable} label="Owner Operator Drivers" />
              </div>

              <div className={styles.profile}>
                <Avatar
                  sx={{
                    height: '40px',
                    width: '40px',
                    fontWeight: 800,
                    fontSize: '16px',
                    color: 'black'
                  }}
                  {...stringAvatar('Kent Dodds')}
                />
                <div className={styles.name}>
                  kent dodds
                </div>
              </div>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.box}>
                <div className={styles.circle}>
                  <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                </div>
                <div className={styles.heading2}>
                  Driver Info
                </div>
                <div className={styles.drawerButton}>
                  <Button
                    style={allStyle.drawerButton}
                  >
                    View Driver Profile...
                  </Button>
                </div>
                <div className={styles.detail}>
                  Select a user to view their Info...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeSheetScreen;