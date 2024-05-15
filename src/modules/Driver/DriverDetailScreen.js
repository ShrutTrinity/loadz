import React, { useState, useEffect, useRef } from 'react';
import styles from './style/driverDetailScreen.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import ReportTable from './ReportTable';
import MiscPayDetail from './MiscPayDetail';

const DriverDetail = (props) => {
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [reportsPopupVisible, setReportsPopupVisible] = useState(false);
  const [miscPayPopupVisible, setMiscPayPopupVisible] = useState(false);
  const [remainingHeight, setRemainingHeight] = useState(0);
  const cardContainerRef = useRef(null);

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
    const screenHeight = window.innerHeight;
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

  const { address, email, phoneNumber, balance, Commision, totalTimeLogged, rate } = props;
  return (
    <>
      <div className={styles.heading}></div>
      <div className={styles.box}>
        <div className={styles.cardContainer} ref={cardContainerRef}>
          <div className={styles.driverCard}>
            <h3 className={styles.heading1}>KENT DODDS</h3>
            <div className={styles.cardFlex}>
              <div className={styles.flexItem1}>
                <div className={styles.items}><b>Address: </b>{address}</div>
                <div className={styles.items}><b>Email: </b>{email}</div>
                <div className={styles.items}><b>Phone Number: </b>{phoneNumber}</div>
                <button className={styles.editButton}><u>Edit info</u></button>
              </div>
              <div className={styles.flexItem1}>
                <div className={styles.items}><b>Balance: </b>{balance}</div>
                <div className={styles.items}><b>Commision: </b>{Commision}</div>
                <div className={styles.items}><b>Total Time Logged: </b>{totalTimeLogged}</div>
                <div className={styles.items}><b>Rate: </b>{rate} %</div>
              </div>
              <div className={styles.flexItem2}>
                <EmailIcon />
              </div>
            </div>
          </div>

          <button className={styles.btns} onClick={(event) => changeColor(event, 'reports')}>Reports</button>
          <button className={styles.btns} onClick={(event) => changeColor(event, 'miscPay')}>Misc. Pay</button>
        </div>
        {reportsPopupVisible && <ReportTable height={remainingHeight} />}
        {miscPayPopupVisible && <MiscPayDetail height={remainingHeight} />}
      </div>
      
    </>
  );
};

export default DriverDetail;
