import React from 'react';
import styles from './style/screen.module.scss';

const SubscriptionCompany = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  }; if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  return (
    <>
      <div
        className={styles.body}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <h4 className={styles.heading}>
          Subscription
        </h4>
      </div>
    </>
  )
}

export default SubscriptionCompany
