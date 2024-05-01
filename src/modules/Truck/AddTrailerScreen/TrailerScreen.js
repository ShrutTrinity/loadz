import React from 'react'
import styles from './styles/trailerscreen.module.scss'
import dump from '@images/dump.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


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
              <button className={styles.addtrailerbtn}>Add Trailers</button>
              <div className={styles.Title}>Type</div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon}/>Flatbed </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon}/>Belly Dump </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon}/>End Dump </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon}/>Cement </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon}/>Box </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon}/>Tanker </div>
          
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TrailerScreen
