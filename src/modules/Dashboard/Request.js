import React from 'react'
import styles from './styles/request.module.scss'
import inspection from '@images/inspection.png'
import RequestFunction from './RequestFunction';

const Request = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

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
            <div className= {styles.drawerContainer}>
              <RequestFunction />
            </div>


            <div className={styles.contentWrapper}>
              
              <div className={styles.box}>
                <div className={styles.circle}>

                  <img src={inspection} alt='pictureOfInspection' className={styles.image} />

                </div>
                <div className={styles.heading2}>
                  Requests
                </div>
                <div className={styles.detail}>
                Select a request to view it...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Request
