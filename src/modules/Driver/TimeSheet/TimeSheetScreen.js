import React, { useState } from 'react';
import styles from './style/timeSheetScreen.module.scss';
import { Button } from '@mui/material'
import inspection from '@images/inspection.png'
import TimeSheetFunction from './TimeSheetFunction';
import useDimensions from '@hooks/useDimensions.js';
import TSDrawer from './TSDrawer';
import TimeSheetDetail from './TimeSheetDetail';

const allStyle = {
  drawerButton: {
    color: 'black',
    fontWeight: 300,
  },
  switchLable: {
    fontSize: '13px !important'
  }
}

const TimeSheetScreen = (props) => {
  const { open, handleDrawerClose, textSelectorOpen, toggleTextSelector } = props
  const [responsiveDrawer, setResponsiveDrawer] = useState(false);
  const [timeSheetDetail, setTimeSheetDetail] = useState(false);
  const [ref, dimensions] = useDimensions();

  const handleResponsiveDrawer = () => {
    setResponsiveDrawer(!responsiveDrawer);
  }

  const handleTimeSheetDetailScreen = () => {
    setTimeSheetDetail(true);
    setResponsiveDrawer(false);
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
      <TSDrawer
        height={dimensions.height}
        width={dimensions.width}
        openResponsiveDrawer={responsiveDrawer}
        closeResponsiveDrawer={handleResponsiveDrawer}
        timeSheetDetail={handleTimeSheetDetailScreen}
      />
      <div className={styles.container}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.backrow}></div>
        <div className={styles.CardWrapper}>
          <div className={styles.contentCard}>
            <div className={styles.drawerContainer}>
              <TimeSheetFunction timeSheetDetail={handleTimeSheetDetailScreen} />
            </div>
            <div className={styles.contentWrapper} ref={ref}>
              {timeSheetDetail ? <TimeSheetDetail /> :
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
                      onClick={handleResponsiveDrawer}
                    >
                      View Driver Profile...
                    </Button>
                  </div>
                  <div className={styles.detail}>
                    Select a user to view their Info...
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeSheetScreen;