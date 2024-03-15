import React from 'react'
import styles from './styles/empty.module.scss'

const Empty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.box}>
          <div className={styles.object}>
            <h5 className={styles.textContain}>
              There are no jobs, please create one!
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Empty
