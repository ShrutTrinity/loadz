import React, { useState } from 'react';
import styles from './styles/functionPorttion.module.scss';
import dump from '@images/dump.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddTrailerForm from './AddTrailerForm';

const FunctionPortion = () => {

  const [openAddTrailerDailog, setOpenAddTrailerDailog] = useState(false);

  const handleClickOpenTrailerDailog = () => {
    setOpenAddTrailerDailog(true);
  };

  const handleCloseTrailerDailog = () => {
    setOpenAddTrailerDailog(false);
  };

  return (
    <>
      <AddTrailerForm isOpen={openAddTrailerDailog}
        handleAddTrailertDailogClose={handleCloseTrailerDailog}
        // selectedItem={selectedItem}
      />
      <div className={styles.drawer}
      >
        <div className={styles.logo}>
          <img src={dump} alt='dump' className={styles.dumplogo} />
          <div className={styles.label}>Trailer</div>
        </div>
        <div className={styles.innerDrawer}>
          <button className={styles.addtrailerbtn} onClick={handleClickOpenTrailerDailog}>Add Trailers</button>
          <div className={styles.Title}>Type</div>
          <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Flatbed </div>
          <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Belly Dump </div>
          <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />End Dump </div>
          <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Cement </div>
          <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Box </div>
          <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Tanker </div>
        </div>
      </div>
    </>
  )
}

export default FunctionPortion
