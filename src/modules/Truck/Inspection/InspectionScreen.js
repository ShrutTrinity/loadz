import React, { useState } from 'react';
import styles from './style/inspecion.module.scss';
import { TextField, InputAdornment, Avatar, Button } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import TruckAvtar from "@images/truckIcon.svg";
import inspection from "@images/inspection.png";
import TrailerAvtar from "@images/TrailerIcon.svg";
import InspectionDrawer from './InspectionDrawer';
import TruckDetail from './TruckDetail';
import useDimensions from '@hooks/useDimensions';

const inspectionScreenStyle = {
  drawerButton: {
    color: 'black',
    fontWeight: 300,
  }
}

const InspectionScreen = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const [responsiveDrawer, setResponsiveDrawer] = useState(false);
  const [truckDetailComponent, setTruckDetailComponent] = useState(false);
  const [ref, dimensions] = useDimensions();

  const handleResponsiveDrawer = () => {
    setResponsiveDrawer(!responsiveDrawer)
  }

  const handleTruckDeatilScreen = () => {
    setTruckDetailComponent(!truckDetailComponent)
  }

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  }; if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
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

              <div className={styles.profileTrucks}>
                Trucks
              </div>
              <div
                className={styles.truckList}
                onClick={handleTruckDeatilScreen}
              >
                <div className={styles.truckAvtar}>
                  <Avatar
                    src={TruckAvtar}
                    alt='Tk'
                    sx={{
                      height: '48px',
                      width: '48px',
                      fontWeight: 800,
                      fontSize: '16px',
                      color: 'black'
                    }}
                  />
                </div>
                <div className={styles.truckDetail}>
                  <p className={styles.truckNo}>Trucks No.: 1</p>
                  <p className={styles.truckNo}>Last Active:-</p>
                  <p className={styles.truckNo}>Last Inspection:-</p>
                </div>
              </div>

              <div className={styles.profileTrucks}>
                Trailer
              </div>
              <div className={styles.truckList}>
                <div className={styles.truckAvtar}>
                  <Avatar
                    src={TrailerAvtar}
                    alt='Tk'
                    sx={{
                      height: '48px',
                      width: '48px',
                      fontWeight: 800,
                      fontSize: '16px',
                      color: 'black'
                    }}
                  />
                </div>
                <div className={styles.truckDetail}>
                  <p className={styles.truckNo}>Trucks No.: 122</p>
                </div>
              </div>
            </div>

            <div className={styles.contentWrapper} ref={ref}>
              {truckDetailComponent ? <TruckDetail /> : <div className={styles.box}>
                <div className={styles.circle}>
                  <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                </div>
                <div className={styles.heading2}>
                  Inspections
                </div>
                <div className={styles.drawerButton}>
                  <Button
                    style={inspectionScreenStyle.drawerButton}
                    onClick={handleResponsiveDrawer}
                  >
                    Select Truck to view Inspections Log !..
                  </Button>
                </div>
                <div className={styles.detail}>
                  Select Truck to view Inspections Log !..
                </div>
              </div>}
              <InspectionDrawer
                height={dimensions.height}
                width={dimensions.width}
                openResponsiveDrawer={responsiveDrawer}
                closeResponsiveDrawer={handleResponsiveDrawer}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InspectionScreen;
