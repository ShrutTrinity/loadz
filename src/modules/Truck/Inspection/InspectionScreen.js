import React, { useState } from 'react';
import styles from './style/inspecion.module.scss';
import { Button } from '@mui/material';
import inspection from "@images/inspection.png";
import InspectionDrawer from './InspectionDrawer';
import TruckDetail from './TruckDetail';
import useDimensions from '@hooks/useDimensions';
import InspectionFunction from './InspectionFunction';

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
    setTruckDetailComponent(true)
    setResponsiveDrawer(false)
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

            <div className={styles.drawerContainer}>
              <InspectionFunction truckDetail={handleTruckDeatilScreen}/>
            </div>

            <div className={styles.contentWrapper} ref={ref}>
              {truckDetailComponent ? <TruckDetail drawerOpen={handleResponsiveDrawer}/> : <div className={styles.box}>
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
                truckDetail={handleTruckDeatilScreen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InspectionScreen;
