import React from 'react';
import styles from './styles/uninvoicedbody.module.scss';

const UninvoicedBody = ({ textSelectorOpen, toggleTextSelector, open, handleDrawerClose }) => {

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
      <div
        className={styles.uninvoicedBody}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <div className={styles.note}>
          There are no batches!
        </div>
      </div>
    </>
  )
}

export default UninvoicedBody;