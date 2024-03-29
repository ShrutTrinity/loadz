import React from 'react';
import styles from './styles/deleteAlert.module.scss';

const DeleteAlert = () => {
  return (
    <div className={styles.mainBody}>
      <div className={styles.container}>
        <p>Are you sure you want to delete this item?</p>
      </div>
    </div>
  )
}

export default DeleteAlert
