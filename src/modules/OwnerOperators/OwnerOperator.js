import React, { useState } from 'react';
import styles from './styles/ownerOperator.module.scss';
import { Button } from '@mui/material'
import inspection from '@images/inspection.png'
import OwnerOperatorDetail from './Components/OwnerOperatorDetail';
import useDimensions from '@hooks/useDimensions.js';
import ChatIcon from '@mui/icons-material/Chat';
import OwnerOperatorDrawer from './OwnerOperatorDrawer';
import Functions from './Components/Functions';

const OwnerOperator = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const ownerOperatorScreenStyle = {
    drawerButton: {
      color: 'black',
      fontWeight: 300,
    }
  }

  const [ownerOperatorDetailscreen, setOwnerOperatorDetailScreen] = useState(false)
  const [responsiveDrawer, setResponsiveDrawer] = useState(false);
  const [ref, dimensions] = useDimensions();

  const handleResponsiveDrawer = () => {
    setResponsiveDrawer(!responsiveDrawer);
  }

  const openownerOperatorDetailScreen = () => {
    setOwnerOperatorDetailScreen(true)
    setResponsiveDrawer(false)
  };

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
      <OwnerOperatorDrawer
        height={dimensions.height}
        width={dimensions.width}
        openResponsiveDrawer={responsiveDrawer}
        closeResponsiveDrawer={handleResponsiveDrawer}
        detailScreen={openownerOperatorDetailScreen}
      />
      <div className={styles.container}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.backrow}></div>
        <div className={styles.CardWrapper}>
          <div className={styles.contentCard}>

            <div className={styles.drawerContainer}>
              <Functions detailScreen={openownerOperatorDetailScreen}/>
            </div>

            <div className={styles.contentWrapper} ref={ref}>
              {ownerOperatorDetailscreen ? <OwnerOperatorDetail /> :
                <>
                  <div className={styles.heading}>
                    <ChatIcon className={styles.openDailogIcon} onClick={handleResponsiveDrawer} />
                    Owner Operators Details
                  </div>
                  <div className={styles.box}>
                    <div className={styles.circle}>
                      <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                    </div>
                    <div className={styles.heading2}>
                      OwnerOperator Info
                    </div>
                    <div className={styles.drawerButton}>
                      <Button
                        style={ownerOperatorScreenStyle.drawerButton}
                        onClick={handleResponsiveDrawer}
                      >
                        View OwnerOperator Profile...
                      </Button>
                    </div>
                    <div className={styles.detail}>
                      Choose a OwnerOperator to view their profile...
                    </div>
                  </div>
                </>
              }
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default OwnerOperator
