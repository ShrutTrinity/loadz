import React from 'react';
import styles from './styles/upload.module.scss';

const Send = ({children,width}) => {
  return (
    <div className={styles.secondHalf} style={{width:`${width}`}}>
    <div className={styles.secondContainer}>
      <div className={styles.upload}>
        {children}
      </div>
    </div>
  </div>
  )
}

export default Send
