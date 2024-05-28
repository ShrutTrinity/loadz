import React, { useState } from 'react';
import styles from './Styles/subcontactor.module.scss';
import { Button } from '@mui/material'
import inspection from '@images/inspection.png'
import ChatIcon from '@mui/icons-material/Chat';
import SubContractorDrawer from './SubContractorDrawer';
import useDimensions from '@hooks/useDimensions.js';
import Function from './Components/Function';

const allStyle = {
  drawerButton: {
    color: 'black',
    fontWeight: 300,
  }
}

const SubContractor = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const [responsiveDrawer, setResponsiveDrawer] = useState(false);
  const [ref, dimensions] = useDimensions();

  const handleResponsiveDrawer = () => {
    setResponsiveDrawer(!responsiveDrawer);
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
      <SubContractorDrawer
        height={dimensions.height}
        width={dimensions.width}
        openResponsiveDrawer={responsiveDrawer}
        closeResponsiveDrawer={handleResponsiveDrawer}
      />
      <div className={styles.container}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.backrow}></div>
        <div className={styles.CardWrapper}>
          <div className={styles.contentCard}>

            <div className={styles.drawerContainer}>
              <Function />
            </div>

            <div className={styles.contentWrapper} ref={ref}>
              <div className={styles.heading}>
                <ChatIcon className={styles.openDailogIcon} onClick={handleResponsiveDrawer} />
                Subcontractors Details
              </div>
              <div className={styles.box}>
                <div className={styles.circle}>
                  <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                </div>
                <div className={styles.heading2}>
                  Subcontractors Info
                </div>
                <div className={styles.detailButton}>
                  <Button
                    style={allStyle.drawerButton}
                    onClick={handleResponsiveDrawer}
                  >
                    Select a subcontractor to view invoices info...
                  </Button>
                </div>
                <div className={styles.detail}>
                  Select a subcontractor to view invoices info...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubContractor;