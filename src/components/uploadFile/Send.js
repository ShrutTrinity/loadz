import React from 'react';
import styles from './styles/upload.module.scss';

const Send = ({children}) => {
  return (
    <div className={styles.secondHalf}>
    <div className={styles.secondContainer}>
      <div className={styles.upload}>
        {/* <img src={persionImage} alt='Upload person logo' /> */}
        {children}
      </div>
    </div>
  </div>
  )
}

export default Send
