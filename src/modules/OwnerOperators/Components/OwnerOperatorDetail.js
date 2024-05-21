import React from 'react';
import styles from '../styles/owneroperatorDetailScreen.module.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadIcon from '@mui/icons-material/Download';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ArchiveIcon from '@mui/icons-material/Archive';
import OwnerDetailTable from './OwnerDetailTable';


const OwnerOperatorDetail = (props) => {
  const { email, phoneNumber } = props;
  return (
    <>
    {/* <EditOwnerOperatorDetail open={editDailog} onClose={openEditDailog}/> */}
      <div className={styles.heading}>Owner Operators Details</div>
      <div className={styles.box}>
        <div className={styles.cardContainer}>
          <div className={styles.driverCard}>
            <h3 className={styles.heading1}>KENT DODDS</h3>
            <div className={styles.cardFlex}>
              <div className={styles.flexItem1}>
                <div className={styles.items}><b>Email: </b>{email}</div>
                <div className={styles.items}><b>Phone Number: </b>{phoneNumber}</div>
              </div>
              <div className={styles.flexItem2} >
              <div className={styles.items}><b>Balance: </b>{email}</div>
              </div>
            </div>
            <div className={styles.icon}>
            <AddTaskIcon/>
            <AddCircleIcon/>
            <SettingsIcon/>
            <RequestQuoteIcon/>
            <DownloadIcon/>
            <ArchiveIcon/>
            <div className={styles.items}>Apply Payments</div>
            </div>
          </div>

        </div>
        <OwnerDetailTable/>
      </div>
      
    </>
  );
};

export default OwnerOperatorDetail;
