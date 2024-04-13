import React from 'react'
import styles from './styles/trailerscreen.module.scss'
import dump from '@images/dump.png'

const TrailerScreen = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.drawer}>
            <div className={styles.logo}>
              <img src={dump} alt='dump' className={styles.dumplogo} />
              <div className={styles.label}>Trailer</div>
            </div>
            <div className={styles.innerDrawer}>
              <button className={styles.addtrailer}>Add Trailers</button>
              <div className={styles.indexLabel}>Dashboard</div>
              <div className={styles.indexLabel}>Dashboard </div>
              <div className={styles.indexLabel}>Cement</div>
              <div className={styles.indexLabel}>Cement</div>
              <div className={styles.indexLabel}> Box</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TrailerScreen
