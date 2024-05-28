import React, { useState } from 'react';
import styles from './style/driversScreen.module.scss';
import { Button } from '@mui/material';
import inspection from '@images/inspection.png';
import DriverScreenDrawer from './DriverScreenDrawer';
import DriverDetail from './DriverDetailScreen';
import useDimensions from '@hooks/useDimensions.js';
import DriverFunctions from './DriverFunctions';

const driverScreenStyle = {
  drawerButton: {
    color: 'black',
    fontWeight: 300,
  }
}

const DriversScreen = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const [responsiveDrawer, setResponsiveDrawer] = useState(false);
  const [driverDetailscreen, setDriverDetailScreen] = useState(false);
  const [ref, dimensions] = useDimensions();

  const openDriverDetailScreen = () => {
    setDriverDetailScreen(true);
  }

  const handleResponsiveDrawer = () => {
    setResponsiveDrawer(!responsiveDrawer);
  }

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  };
  if (window.innerWidth <= 1300) {
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
           
            <div className={styles.drawerContainer}>
              <DriverFunctions openDetail={openDriverDetailScreen}/>
            </div>

            <div className={styles.contentWrapper} ref={ref}>
              {driverDetailscreen ? <DriverDetail /> :
                <div className={styles.box}>
                  <div className={styles.circle}>
                    <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                  </div>
                  <div className={styles.heading2}>
                    Driver Info
                  </div>
                  <div className={styles.drawerButton}>
                    <Button
                      style={driverScreenStyle.drawerButton}
                      onClick={handleResponsiveDrawer}
                    >
                      View Driver Profile...
                    </Button>
                  </div>
                  <div className={styles.detail}>
                    Choose a driver to view their profile...
                  </div>
                  <DriverScreenDrawer
                    height={dimensions.height}
                    width={dimensions.width}
                    openResponsiveDrawer={responsiveDrawer}
                    closeResponsiveDrawer={handleResponsiveDrawer}
                    openDetail={openDriverDetailScreen}
                  />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DriversScreen;
