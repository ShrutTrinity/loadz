import React from 'react';
import styles from './styles/addBtn.module.scss';
const Add = (props) => {
  return (
    <>
      <div className={styles.bg} onClick={props.buttonBehaviour}>
        +
      </div>
    </>
  )

}

export default Add