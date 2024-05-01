import React from 'react'
import styles from './styles/trailerscreen.module.scss'
import dump from '@images/dump.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const TrailerScreen = (props) => {
  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }
  return (
    <>
      <div className={styles.container}  style={bodyStyle} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
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
        <div className={styles.flexContainer2}>

      </div>
      </div>
    </>
  )
}
export default TrailerScreen
