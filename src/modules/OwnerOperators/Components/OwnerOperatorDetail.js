import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/owneroperatorDetailScreen.module.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadIcon from '@mui/icons-material/Download';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ArchiveIcon from '@mui/icons-material/Archive';


const OwnerOperatorDetail = (props) => {
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [reportsPopupVisible, setReportsPopupVisible] = useState(false);
  const [miscPayPopupVisible, setMiscPayPopupVisible] = useState(false);
  const [remainingHeight, setRemainingHeight] = useState(0);
  const [editDailog,setEditDailog] = useState(false);

  const cardContainerRef = useRef(null);
  const boxRef = useRef(null)

  const changeColor = (event, popup) => {
    const clickedButton = event.target;
    if (lastClickedButton) {
      lastClickedButton.style.color = '';
    }
    clickedButton.style.color = 'rgb(237, 202, 51)';
    if (popup === 'reports') {
      setReportsPopupVisible(true);
      setMiscPayPopupVisible(false);
    } else if (popup === 'miscPay') {
      setMiscPayPopupVisible(true);
      setReportsPopupVisible(false);
    }
    setLastClickedButton(clickedButton);
  };

  const calculateRemainingHeight = () => {
    const screenHeight = boxRef.current.offsetHeight;
    const cardContainerHeight = cardContainerRef.current.offsetHeight;
    setRemainingHeight(screenHeight - cardContainerHeight);
  };

  useEffect(() => {
    calculateRemainingHeight();
    window.addEventListener('resize', calculateRemainingHeight);
    return () => {
      window.removeEventListener('resize', calculateRemainingHeight);
    };
  }, []);

  const openEditDailog =()=>{
      setEditDailog(!editDailog)
  }

  const { address, email, phoneNumber, balance, Commision, totalTimeLogged, rate } = props;
  return (
    <>
    {/* <EditOwnerOperatorDetail open={editDailog} onClose={openEditDailog}/> */}
      <div className={styles.heading}>Owner Operators Details</div>
      <div className={styles.box} ref={boxRef}>
        <div className={styles.cardContainer} ref={cardContainerRef}>
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

          <button className={styles.btns} onClick={(event) => changeColor(event, 'reports')}>Reports</button>
          <button className={styles.btns} onClick={(event) => changeColor(event, 'miscPay')}>Misc. Pay</button>
        </div>
        {/* {reportsPopupVisible && <ReportTable height={remainingHeight} />} */}
        {/* {miscPayPopupVisible && <MiscPayDetail height={remainingHeight} />} */}
      </div>
      
    </>
  );
};

export default OwnerOperatorDetail;
