import React from 'react';
import styles from './style/inspecion.module.scss';
import { TextField, InputAdornment, Avatar} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

import inspection from '@images/inspection.png'

const InspectionScreen = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

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
                    backgroundColor:'white',
                    '@media (max-width: 1200px)': {
                      width: '100%',
                      backgroundColor: 'white'
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
                  <div className={styles.balance}>
                    <b>Balance</b>  $0.00
                  </div>
                </div>

              </div>

            </div>

            <div className={styles.contentWrapper}>

              <div className={styles.box}>
                <div className={styles.circle}>
                  <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                </div>
                <div className={styles.heading2}>
                  Inspections
                </div>
                <div className={styles.detail}>
                  Select Truck to view Inspections Log !..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default InspectionScreen;